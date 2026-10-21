# Blender 腳本：做吉祥物場景用的 3D 模型（飛機、汽車、火車、烤肉架、恐龍），匯出 GLB。
# 用法：blender -b -P tools/blender/pet_props.py -- <輸出資料夾>
# 2026-10-21 使用者：交通工具、恐龍用 three.js 的基本形狀拼不夠精緻，要用 Blender 做。
# 單位跟吉祥物一樣（牠大約 2 單位高）。車頭朝 +X。會動的零件分開、取名字，網頁照名字讓它們動：
#   wheel*（繞 Z 轉）、prop（螺旋槳，繞 X 轉）、jaw（下巴）、leg_L / leg_R、tail、arm_L / arm_R。
import bpy, bmesh, math, sys, os
from mathutils import Vector

OUT = sys.argv[sys.argv.index('--') + 1] if '--' in sys.argv else os.path.abspath('.')
os.makedirs(OUT, exist_ok=True)


def reset():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    _mats.clear()


_mats = {}
def mat(name, rgb, rough=.6, metal=0.0):
    if name in _mats:
        return _mats[name]
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    b = m.node_tree.nodes.get('Principled BSDF')
    b.inputs['Base Color'].default_value = (*[c ** 2.2 for c in rgb], 1)
    b.inputs['Roughness'].default_value = rough
    b.inputs['Metallic'].default_value = metal
    _mats[name] = m
    return m


def hexrgb(h):
    return ((h >> 16 & 255) / 255, (h >> 8 & 255) / 255, (h & 255) / 255)


def M(name, h, **k):
    return mat(name, hexrgb(h), **k)


def finish(o, m, smooth=True, sub=0, bevel=0.0, seg=3):
    o.data.materials.clear()
    o.data.materials.append(m)
    if bevel:
        bm = o.modifiers.new('bevel', 'BEVEL'); bm.width = bevel; bm.segments = seg; bm.limit_method = 'ANGLE'
    if sub:
        s = o.modifiers.new('sub', 'SUBSURF'); s.levels = sub; s.render_levels = sub
    if smooth:
        for p in o.data.polygons:
            p.use_smooth = True
    return o


def sel(o):
    bpy.ops.object.select_all(action='DESELECT')
    o.select_set(True)
    bpy.context.view_layer.objects.active = o


def cube(name, size, loc, m, bevel=.08, sub=0, rot=(0, 0, 0)):
    bpy.ops.mesh.primitive_cube_add(size=1, location=loc, rotation=rot)
    o = bpy.context.object; o.name = name; o.scale = size
    sel(o); bpy.ops.object.transform_apply(scale=True)
    return finish(o, m, bevel=bevel, sub=sub)


def cyl(name, r, depth, loc, m, rot=(0, 0, 0), verts=32, bevel=.03, r2=None):
    if r2 is None:
        bpy.ops.mesh.primitive_cylinder_add(radius=r, depth=depth, location=loc, rotation=rot, vertices=verts)
    else:
        bpy.ops.mesh.primitive_cone_add(radius1=r, radius2=r2, depth=depth, location=loc, rotation=rot, vertices=verts)
    o = bpy.context.object; o.name = name
    return finish(o, m, bevel=bevel)


def sphere(name, r, loc, m, scale=(1, 1, 1), seg=32):
    bpy.ops.mesh.primitive_uv_sphere_add(radius=r, location=loc, segments=seg, ring_count=seg // 2)
    o = bpy.context.object; o.name = name; o.scale = scale
    sel(o); bpy.ops.object.transform_apply(scale=True)
    return finish(o, m)


def torus(name, R, r, loc, m, rot=(0, 0, 0)):
    bpy.ops.mesh.primitive_torus_add(major_radius=R, minor_radius=r, location=loc, rotation=rot, major_segments=40, minor_segments=14)
    o = bpy.context.object; o.name = name
    return finish(o, m)


def parent(child, par):
    child.parent = par
    child.matrix_parent_inverse = par.matrix_world.inverted()


def empty(name, loc):
    bpy.ops.object.empty_add(location=loc); e = bpy.context.object; e.name = name; return e


def wheel(name, r, w, loc, tire, rim, hub):
    """輪胎＋輪框＋輪轂，整組掛在一個 empty 上（網頁轉那個 empty）。"""
    e = empty(name, loc)
    t = torus(name + '_tire', r * .78, r * .24, loc, tire, rot=(math.pi / 2, 0, 0)); t.scale = (1, 1, w / (r * .48)); parent(t, e)
    d = cyl(name + '_rim', r * .6, w * .7, loc, rim, rot=(math.pi / 2, 0, 0)); parent(d, e)
    h = sphere(name + '_hub', r * .22, loc, hub, scale=(1, w / (r * .44) * .5, 1)); parent(h, e)
    for i in range(5):
        a = i / 5 * math.tau
        s = cube(name + f'_spoke{i}', (r * .1, w * .75, r * .5), (loc[0] + math.cos(a) * r * .25, loc[1], loc[2] + math.sin(a) * r * .25), hub, bevel=.01, rot=(0, -a + math.pi / 2, 0)); parent(s, e)
    return e


def export(name, root_names=None):
    path = os.path.join(OUT, name + '.glb')
    bpy.ops.export_scene.gltf(filepath=path, export_format='GLB', export_apply=True, export_yup=True)
    print('exported', path, os.path.getsize(path))


# ════════ 飛機：圓滾滾的雙翼機，敞篷駕駛座（吉祥物坐在中間） ════════
def build_plane():
    reset()
    red, white, yel, wood, dark, glass = M('red', 0xff5a6e), M('white', 0xffffff), M('yellow', 0xffd23f), M('wood', 0x8a5a32), M('dark', 0x2b2b38), M('glass', 0xbfe6ff, rough=.1)
    # 機身：拉長的球，前胖後尖（用細分的立方體捏）
    bpy.ops.mesh.primitive_uv_sphere_add(radius=1, segments=48, ring_count=24)
    body = bpy.context.object; body.name = 'body'
    for v in body.data.vertices:
        x = v.co.x
        k = 1 - max(0, -x) * .55  # 後面變細
        v.co.y *= .62 * k; v.co.z *= .62 * k; v.co.x *= 2.3
    finish(body, red); body.location = (0, 0, .75)
    # 駕駛座開口：黑色的圈（吉祥物坐進去）
    torus('cockpit_rim', .62, .09, (.05, 0, 1.33), dark)
    # 白色腰帶
    # 上下兩片機翼（圓角）
    cube('wing_top', (1.1, 4.0, .12), (.35, 0, 1.75), yel, bevel=.06, sub=1)
    cube('wing_bot', (1.2, 4.3, .14), (.3, 0, .38), yel, bevel=.06, sub=1)
    for y in (-1.5, 1.5):
        for x in (-.05, .7):
            cyl(f'strut_{x}_{y}', .045, 1.3, (x, y, 1.07), wood, verts=12)
    # 尾翼
    cube('fin', (.7, .1, .8), (-2.1, 0, 1.25), red, bevel=.05, sub=1, rot=(0, -.25, 0))
    cube('tail_wing', (.6, 1.6, .1), (-2.05, 0, .85), white, bevel=.04, sub=1)
    # 機頭：黃色鼻子＋螺旋槳
    sphere('nose', .32, (2.25, 0, .75), yel, scale=(.8, 1, 1))
    prop = empty('prop', (2.55, 0, .75))
    for i in range(2):
        b = cube(f'blade{i}', (.08, .2, 1.4), (2.55, 0, .75), wood, bevel=.04, sub=1, rot=(i * math.pi / 2 + .3, 0, 0)); parent(b, prop)
    cap = sphere('prop_cap', .1, (2.6, 0, .75), dark); parent(cap, prop)
    # 起落架
    for y in (-.6, .6):
        cyl(f'gear{y}', .04, .5, (.6, y, .2), dark, verts=10)
        wheel(f'wheel_{"L" if y < 0 else "R"}', .25, .16, (.6, y, -.05), dark, M('rim', 0xd8dfec), M('hub', 0x9aa3b5))
    # 擋風玻璃
    cube('windshield', (.06, .9, .45), (.75, 0, 1.55), glass, bevel=.03, rot=(0, -.45, 0))
    export('plane')


# ════════ 汽車：圓圓的敞篷小車「馨岑號」 ════════
def build_car():
    reset()
    blue, dblue, white, dark, glass, yel, red = M('blue', 0x4aa8ff), M('dblue', 0x2d7fd0), M('white', 0xffffff), M('dark', 0x2b2b38), M('glass', 0xbfe6ff, rough=.1), M('lamp', 0xfff3a8), M('tail', 0xff5a6e)
    body = cube('body', (3.0, 1.7, .9), (0, 0, .75), blue, bevel=.3, sub=2)
    # 座位凹進去的地方：深色的座椅
    cube('seat', (1.0, 1.25, .2), (-.35, 0, 1.22), dark, bevel=.08, sub=1)
    cube('seat_back', (.25, 1.25, .7), (-.9, 0, 1.45), dark, bevel=.1, sub=1)
    cube('hood', (1.0, 1.5, .25), (1.0, 0, 1.25), dblue, bevel=.12, sub=1)
    cube('windshield', (.06, 1.4, .5), (.45, 0, 1.6), glass, bevel=.03, rot=(0, -.35, 0))
    torus('steer', .2, .035, (.25, .3, 1.55), dark, rot=(0, math.pi / 2 - .5, 0))
    for y in (-.55, .55):
        sphere(f'lamp{y}', .14, (1.5, y, .85), yel, scale=(.6, 1, 1))
        sphere(f'tail{y}', .1, (-1.5, y, .9), red, scale=(.5, 1, 1))
    cube('bumper_f', (.15, 1.8, .18), (1.55, 0, .45), M('chrome', 0xd8dfec, rough=.2, metal=.6), bevel=.07, sub=1)
    cube('bumper_b', (.15, 1.8, .18), (-1.55, 0, .45), M('chrome', 0xd8dfec, rough=.2, metal=.6), bevel=.07, sub=1)
    i = 0
    for x in (-1.0, 1.0):
        for y in (-.85, .85):
            wheel(f'wheel{i}', .38, .3, (x, y, .38), dark, M('rim', 0xd8dfec), M('hub', 0x9aa3b5)); i += 1
    export('car')


# ════════ 火車：紅色蒸汽火車頭＋兩節車廂 ════════
def build_train():
    reset()
    red, dark, gold, blue, yel, white = M('red', 0xe0344a), M('dark', 0x2b2b38), M('gold', 0xffd23f, rough=.3, metal=.5), M('blue', 0x4aa8ff), M('yellow', 0xffd23f), M('white', 0xffffff)
    cyl('boiler', .48, 1.6, (.8, 0, .85), red, rot=(0, math.pi / 2, 0), bevel=.08)
    cyl('boiler_front', .5, .12, (1.62, 0, .85), dark, rot=(0, math.pi / 2, 0))
    for x in (.35, .8, 1.25):
        torus(f'band{x}', .5, .04, (x, 0, .85), gold, rot=(0, math.pi / 2, 0))
    cyl('chimney', .2, .55, (1.25, 0, 1.55), dark, r2=.28, verts=24)
    sphere('dome', .2, (.65, 0, 1.33), gold)
    sphere('lamp', .13, (1.72, 0, 1.15), M('lamp', 0xfff3a8))
    cube('cab', (1.0, 1.25, .95), (-.4, 0, 1.0), red, bevel=.08, sub=1)
    cube('cab_roof', (1.3, 1.5, .12), (-.4, 0, 2.15), dark, bevel=.05, sub=1)
    for x in (-.85, .05):
        for y in (-.55, .55):
            cyl(f'post{x}{y}', .04, .7, (x, y, 1.8), dark, verts=10)
    cube('frame', (2.6, 1.15, .22), (.4, 0, .35), dark, bevel=.05)
    bpy.ops.mesh.primitive_cone_add(vertices=4, radius1=.45, depth=.5, location=(1.85, 0, .35), rotation=(0, math.pi / 2, math.pi / 4))
    finish(bpy.context.object, gold).name = 'cowcatcher'
    i = 0
    for x in (-.4, .4, 1.15):
        for y in (-.6, .6):
            wheel(f'wheel{i}', .27, .14, (x, y, .27), dark, red, gold); i += 1
    cube('rod_L', (1.6, .05, .06), (.37, -.72, .27), M('chrome', 0xd8dfec, metal=.6, rough=.3), bevel=.02)
    cube('rod_R', (1.6, .05, .06), (.37, .72, .27), M('chrome', 0xd8dfec, metal=.6, rough=.3), bevel=.02)
    for n, (col, x0) in enumerate([(blue, -2.25), (yel, -4.35)]):
        cube(f'car{n}', (1.8, 1.15, .7), (x0, 0, .78), col, bevel=.1, sub=1)
        cube(f'car{n}_rim', (1.9, 1.25, .1), (x0, 0, 1.15), white, bevel=.04, sub=1)
        cube(f'car{n}_base', (1.9, 1.0, .16), (x0, 0, .35), dark, bevel=.04)
        sphere(f'cargo{n}', .32, (x0 + .2, 0, 1.3), M('cargo' + str(n), [0xff9fbe, 0x9dffb8][n]))
        for x in (-.6, .6):
            for y in (-.6, .6):
                wheel(f'wheel{i}', .24, .12, (x0 + x, y, .24), dark, col, gold); i += 1
        cube(f'hook{n}', (.4, .1, .08), (x0 + 1.05, 0, .38), dark, bevel=.02)
    export('train')


# ════════ 烤肉架：圓形烤爐＋網子＋三串烤串 ════════
def build_grill():
    reset()
    dark, steel, coal, wood = M('dark', 0x2b2b38), M('steel', 0x9aa3b5, metal=.6, rough=.35), M('coal', 0xff5a1f, rough=.9), M('wood', 0xe3c48f)
    bpy.ops.mesh.primitive_uv_sphere_add(radius=.7, segments=40, ring_count=20, location=(0, 0, 1.0))
    bowl = bpy.context.object; bowl.name = 'bowl'
    bm = bmesh.new(); bm.from_mesh(bowl.data)
    bmesh.ops.delete(bm, geom=[v for v in bm.verts if v.co.z > .02], context='VERTS'); bm.to_mesh(bowl.data); bm.free()
    bowl.data.update(); sol = bowl.modifiers.new('thick', 'SOLIDIFY'); sol.thickness = .05
    finish(bowl, dark)
    torus('rim', .7, .04, (0, 0, 1.0), steel)
    for i in range(9):
        y = -.56 + i * .14
        L = 2 * math.sqrt(max(0, .7 ** 2 - y ** 2))
        cyl(f'grate{i}', .012, L, (0, y, 1.04), steel, rot=(0, math.pi / 2, 0), verts=8, bevel=0)
    for i in range(10):
        a = i * 2.4; r = .1 + (i % 4) * .12
        bpy.ops.mesh.primitive_ico_sphere_add(radius=.1, subdivisions=1, location=(math.cos(a) * r, math.sin(a) * r, .92))
        finish(bpy.context.object, coal, smooth=False).name = f'coal{i}'
    for i in range(3):
        a = i / 3 * math.tau + .3
        c = cyl(f'leg{i}', .04, 1.0, (math.cos(a) * .45, math.sin(a) * .45, .5), dark, rot=(math.sin(a) * .25, -math.cos(a) * .25, 0), verts=10)
    cyl('handle', .05, .3, (.8, 0, 1.0), wood, rot=(0, math.pi / 2, 0), verts=12)
    items = [(M('saus', 0xe0533f), 'saus'), (M('mush', 0x8a5a32), 'mush'), (M('corn', 0xffd23f), 'corn')]
    for i, (m, k) in enumerate(items):
        y = -.3 + i * .3
        e = empty(f'skewer{i}', (0, y, 1.12))
        s = cyl(f'stick{i}', .015, 1.5, (0, y, 1.12), wood, rot=(0, math.pi / 2, 0), verts=8, bevel=0); parent(s, e)
        for j in range(3):
            x = (j - 1) * .32
            if k == 'saus':
                bpy.ops.mesh.primitive_uv_sphere_add(radius=.09, location=(x, y, 1.12)); o = bpy.context.object; o.scale = (1.4, 1, 1)
            elif k == 'mush':
                bpy.ops.mesh.primitive_uv_sphere_add(radius=.1, location=(x, y, 1.15)); o = bpy.context.object; o.scale = (1, 1, .7)
            else:
                bpy.ops.mesh.primitive_cylinder_add(radius=.09, depth=.22, location=(x, y, 1.12), rotation=(0, math.pi / 2, 0)); o = bpy.context.object
            o.name = f'{k}{i}_{j}'; finish(o, m); parent(o, e)
    export('grill')


# ════════ 恐龍：metaball 融成一整塊圓滑的身體（暴龍） ════════
def meta(name, balls, m, res=.06):
    mb = bpy.data.metaballs.new(name)
    mb.resolution = res; mb.render_resolution = res; mb.threshold = .6
    o = bpy.data.objects.new(name, mb); bpy.context.collection.objects.link(o)
    for (x, y, z, r, *sc) in balls:
        e = mb.elements.new(); e.co = (x, y, z); e.radius = r
        if sc:
            e.type = 'ELLIPSOID'; e.size_x, e.size_y, e.size_z = sc
    sel(o); bpy.ops.object.convert(target='MESH')
    o = bpy.context.object; o.name = name
    return finish(o, m)


def ray_surface(obj, origin, direction):
    """從 origin 往 direction 打一條線，回傳打到 obj 表面的點跟法線（沒打到回 None）。"""
    ok, loc, nor, _ = obj.ray_cast(Vector(origin), Vector(direction).normalized())
    print("RAY", obj.name, tuple(round(c, 2) for c in origin), tuple(direction), ok, tuple(round(c, 2) for c in loc))
    return (loc, nor) if ok else (None, None)


def stick_on(obj, origin, direction, sink=0.0):
    loc, nor = ray_surface(obj, origin, direction)
    if loc is None:
        return Vector(origin), Vector((0, 0, 1))
    return loc - nor * sink, nor


def build_dino():
    reset()
    green, belly, spike, white, black, pink, tongue, brow = M('green', 0x6fd36b), M('belly', 0xd8f5b0), M('spike', 0xffa53c), M('white', 0xffffff), M('black', 0x241a20), M('pink', 0xffa9bd), M('tongue', 0xff7f98), M('brow', 0x2e6a2c)
    # 身體：一整塊（身體、脖子、頭、尾巴一路很密的球，融成圓滑的一條）
    balls = [(0, 0, 1.4, 1.05, 1.25, .9, .95), (.7, 0, 1.9, .8), (1.2, 0, 2.45, .92, 1.05, .9, .85), (1.85, 0, 2.3, .6, 1.15, .75, .62)]
    for i in range(14):  # 尾巴：越後面越細越低
        k = i / 13
        balls.append((-.7 - k * 2.9, 0, 1.3 - k * .75, .78 * (1 - k * .78)))
    body = meta('body', balls, green, res=.05)
    # 肚子：貼在前面的淺色一塊（往前推一點，跟身體表面平齊）
    bel = meta('belly', [(.45, 0, 1.3, .8, .95, .62, .9), (.95, 0, 1.85, .5, .75, .55, .7)], belly, res=.05)
    bel.location.x = .12
    # 下巴：分開的一塊（張嘴時繞嘴角轉）
    jaw_p = empty('jaw', (1.35, 0, 2.05))
    j = meta('jaw_mesh', [(1.55, 0, 2.0, .5, 1.25, .75, .4), (1.95, 0, 2.0, .38, 1.0, .65, .35)], green, res=.05); parent(j, jaw_p)
    t = sphere('tongue', .26, (1.8, 0, 2.08), tongue, scale=(1.3, .65, .25)); parent(t, jaw_p)
    # 上排牙：沿著嘴巴下緣，貼在上顎表面
    for i in range(4):
        for y in (-1, 1):
            x = 1.6 + i * .14
            p, n = stick_on(body, (x, y * .17, 1.5), (0, 0, 1), sink=.02)
            bpy.ops.mesh.primitive_cone_add(radius1=.045, depth=.13, location=(p.x, p.y, p.z - .05), rotation=(math.pi, 0, 0), vertices=8)
            finish(bpy.context.object, white).name = f'tooth{i}{y}'
    # 眼睛：從側前方打到頭上，貼在表面（白眼球＋黑瞳孔＋反光），上面一道眉毛
    for y in (-1, 1):
        p, n = stick_on(body, (1.45, y * 2.0, 2.68), (0, -y, 0), sink=.08)
        e = sphere(f'eye{y}', .2, p, white)
        out = p + n * .14
        sphere(f'pupil{y}', .11, out + Vector((.06, 0, 0)), black)
        sphere(f'glint{y}', .04, out + n * .06 + Vector((.1, 0, .06)), white)
        bp, bn = stick_on(body, (1.4, y * 2.0, 3.15), (0, -y, -.3), sink=.02)
        cube(f'brow{y}', (.32, .07, .07), bp, brow, bevel=.02, rot=(0, .25, 0))
        cp, cn = stick_on(body, (2.0, y * 2.0, 2.3), (0, -y, 0), sink=.01)
        b = sphere(f'blush{y}', .13, cp, pink, scale=(1, .25, .6))
        np_, _ = stick_on(body, (3.0, y * .18, 2.45), (-1, 0, 0), sink=.01)
        sphere(f'nostril{y}', .045, np_, black)
    # 背上的尖刺：從上面打下來找背的最高點，插進去一點
    for i in range(9):
        x = 1.2 - i * .5
        p, n = stick_on(body, (x, 0, 6), (0, 0, -1), sink=.06)
        s = .34 * (1 - i * .07)
        bpy.ops.mesh.primitive_cone_add(radius1=s * .55, depth=s * 1.25, location=p + n * (s * .45), vertices=6)
        o = bpy.context.object; o.scale = (1, .45, 1)
        o.rotation_euler = n.to_track_quat('Z', 'Y').to_euler()
        finish(o, spike, smooth=False).name = f'spike{i}'
    # 小短手：手肘從胸口長出來
    for n_, y in (('arm_L', -1), ('arm_R', 1)):
        p, nr = stick_on(body, (.95, y * 2, 1.6), (0, -y, 0), sink=.12)
        pv = empty(n_, p)
        a = meta(n_ + '_m', [(p.x + .05, p.y + y * .05, p.z, .2), (p.x + .2, p.y + y * .1, p.z - .2, .17), (p.x + .32, p.y + y * .12, p.z - .3, .14)], green, res=.04); parent(a, pv)
    # 腳：大腿從身體裡長出來（球的一半藏在身體裡），腳掌、三根白爪
    for n_, y in (('leg_L', -.62), ('leg_R', .62)):
        pv = empty(n_, (0, y, 1.0))
        l = meta(n_ + '_m', [(0, y, .95, .5), (0, y, .6, .42, .9, .9, 1.0), (.05, y, .25, .3), (.25, y, .12, .34, 1.55, 1.05, .45)], green, res=.05); parent(l, pv)
        for k in (-1, 0, 1):
            p, nr = stick_on(l, (2, y + k * .14, .12), (-1, 0, 0), sink=.03)
            bpy.ops.mesh.primitive_cone_add(radius1=.055, depth=.15, location=p + Vector((.05, 0, 0)), rotation=(0, math.pi / 2, 0), vertices=8)
            c = bpy.context.object; finish(c, white).name = f'{n_}_claw{k}'; parent(c, pv)
    # 尾巴「會搖」用的掛點：整條身體一塊，網頁轉 tail 只轉尾端那幾節不好做——改成網頁讓整隻身體左右擺一點
    empty('tail', (-1.5, 0, 1.0))
    export('dino')


ONLY = sys.argv[sys.argv.index('--') + 2:] if '--' in sys.argv else []
for f in (build_plane, build_car, build_train, build_grill, build_dino):
    if ONLY and f.__name__[6:] not in ONLY:
        continue
    f()
print('DONE')
