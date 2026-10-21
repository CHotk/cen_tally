# Blender 腳本：冰原歷險記角色（奎特、希德、曼佛瑞、迪亞哥）的 Q 版模型，匯出 GLB。
# 2026-10-21 使用者要求。※ 角色版權屬原作者（20th Century / Blue Sky），只放在私人用的設計稿裡。
# 用法：blender -b -P tools/blender/ice_age.py -- <輸出資料夾> [只做哪幾隻]
# 工具函式（材質、metaball、貼表面…）跟 pet_props.py 共用。
import os, sys
_here = os.path.dirname(os.path.abspath(__file__))
_src = open(os.path.join(_here, 'pet_props.py'), encoding='utf-8').read()
exec(_src.split('# ════════ 飛機')[0])  # 只拿工具函式
exec('def meta' + _src.split('def meta')[1].split('def build_dino')[0])
import bpy, math, random
from mathutils import Vector, Matrix

_meta = meta
def meta(name, balls, m, res=.035):
    """這裡的半徑＝看得到的半徑（metaball 實際長出來大約只有設定的 2/3，所以放大 1.5 倍）。"""
    return _meta(name, [(b[0], b[1], b[2], b[3] * 1.5, *b[4:]) for b in balls], m, res=res)


def tube(name, pts, radii, m, sub=1):
    """沿著幾個點拉一條圓管，每個點自己的粗細（四肢、尾巴、象牙、鼻子），兩頭封起來、很圓滑。"""
    cd = bpy.data.curves.new(name, 'CURVE'); cd.dimensions = '3D'
    cd.bevel_depth = 1.0; cd.bevel_resolution = 8; cd.use_fill_caps = True; cd.resolution_u = 16
    sp = cd.splines.new('NURBS'); sp.points.add(len(pts) - 1); sp.use_endpoint_u = True; sp.order_u = min(4, len(pts))
    for i, (p, r) in enumerate(zip(pts, radii)):
        sp.points[i].co = (*p, 1); sp.points[i].radius = r
    o = bpy.data.objects.new(name, cd); bpy.context.collection.objects.link(o)
    sel(o); bpy.ops.object.convert(target='MESH'); o = bpy.context.object; o.name = name
    # 兩頭加圓球蓋（封口是平的）
    finish(o, m, sub=0)
    sphere(name + '_cap0', radii[0] * .98, pts[0], m); sphere(name + '_cap1', radii[-1] * .98, pts[-1], m)
    return o


def eyes(body, x, z, r, iris=0x241a20, look=(1, 0, 0), sink=.05, spread=4):
    W, B = M('eye_w', 0xffffff), M('eye_b', iris)
    for s in (-1, 1):
        p, n = stick_on(body, (x, s * spread, z), (0, -s, 0), sink=sink)
        sphere(f'eye{s}', r, p, W)
        out = p + n * r * .72 + Vector(look) * r * .3
        sphere(f'pupil{s}', r * .52, out, B)
        sphere(f'glint{s}', r * .17, out + n * r * .32 + Vector((r * .22, 0, r * .25)), W)


def patch_on(body, name, origin, direction, size, m, flat=.25):
    p, n = stick_on(body, origin, direction, sink=size * flat * .4)
    o = sphere(name, size, p, m, scale=(1, 1, flat))
    # sphere() 套用縮放時位置也烘進網格了，物件在原點；搬回 p 再轉，才會繞自己轉
    o.data.transform(Matrix.Translation(-p)); o.location = p
    o.rotation_euler = n.to_track_quat('Z', 'Y').to_euler()
    return o


# ════════ 奎特：大眼、長鼻、兩顆大門牙、蓬鬆大尾巴、抱著橡實 ════════
def build_scrat():
    reset()
    fur, belly, nose, white, acorn, cap = M('fur', 0x9c8a74), M('belly', 0xd9cbb3), M('nose', 0x3a2a20), M('white', 0xfffdf2), M('acorn', 0xb07a3a), M('cap', 0x6b4a2a)
    body = meta('body', [(0, 0, .75, .38, .85, .75, 1.15), (.08, 0, 1.25, .33), (.2, 0, 1.6, .4, 1.05, .9, .9), (.55, 0, 1.58, .25, 1.4, .7, .55), (.85, 0, 1.55, .17)], fur)
    meta('belly', [(.12, 0, .78, .3, .8, .8, 1.1)], belly).location.x = .08
    sphere('nose', .09, (1.06, 0, 1.56), nose)
    for s in (-1, 1):
        cube(f'tooth{s}', (.06, .065, .2), (.92, s * .04, 1.33), white, bevel=.02)
        tube(f'ear{s}', [(.05, s * .25, 1.85), (.0, s * .32, 2.05), (-.05, s * .34, 2.2)], [.08, .07, .03], fur)
    eyes(body, .45, 1.72, .19, look=(1, 0, .2))
    tube('tail', [(-.25, 0, .55), (-.6, 0, .7), (-.8, 0, 1.15), (-.75, 0, 1.7), (-.45, 0, 2.05), (-.15, 0, 2.05)], [.12, .22, .3, .33, .28, .15], fur)
    for s in (-1, 1):
        tube(f'leg{s}', [(.0, s * .22, .5), (.1, s * .26, .2), (.32, s * .28, .05)], [.13, .1, .09], fur)
        tube(f'arm{s}', [(.3, s * .25, 1.25), (.45, s * .22, 1.05), (.55, s * .12, .98)], [.07, .06, .055], fur)
    sphere('acorn', .19, (.62, 0, .92), acorn, scale=(1, 1, 1.25))
    sphere('acorn_cap', .2, (.62, 0, 1.1), cap, scale=(1.08, 1.08, .55))
    cyl('acorn_stem', .025, .1, (.62, 0, 1.24), cap, verts=8)
    export('scrat')


# ════════ 希德：梨形身體、兩顆眼睛長在頭兩側、大門牙笑、小圓鼻、長手 ════════
def build_sid():
    reset()
    fur, belly, nose, white = M('fur', 0xb7a77a), M('belly', 0xd8cfa6), M('nose', 0x5a4a3a), M('white', 0xfffdf2)
    body = meta('body', [(0, 0, .75, .62, 1, .95, 1.05), (.05, 0, 1.35, .42), (.15, 0, 1.85, .38, 1.15, 1.05, .9), (.45, 0, 1.8, .22, 1.3, .9, .65)], fur)
    meta('belly', [(.15, 0, .75, .5, .8, .85, .95)], belly).location.x = .08
    sphere('nose', .11, (.73, 0, 1.82), nose, scale=(1, 1.2, .9))
    for s in (-1, 1):
        cube(f'tooth{s}', (.05, .07, .14), (.66, s * .045, 1.63), white, bevel=.02)
    eyes(body, .18, 2.0, .18, look=(.3, 0, 0), sink=.09)
    for s in (-1, 1):
        tube(f'arm{s}', [(.05, s * .5, 1.35), (.2, s * .72, 1.05), (.32, s * .78, .7), (.4, s * .76, .5)], [.12, .1, .09, .08], fur)
        for k in (-1, 0, 1):
            bpy.ops.mesh.primitive_cone_add(radius1=.028, depth=.12, location=(.43, s * .76 + k * .045, .4), rotation=(math.pi, 0, 0), vertices=6)
            finish(bpy.context.object, white).name = f'claw{s}{k}'
        tube(f'leg{s}', [(.05, s * .35, .3), (.12, s * .38, .1), (.3, s * .4, .04)], [.17, .14, .12], fur)
    export('sid')


# ════════ 曼佛瑞：大圓頂身體、長毛一叢一叢、彎彎的長象牙、鼻子垂下來 ════════
def build_manny():
    reset()
    fur, dark, tusk, eye = M('fur', 0x7a5236), M('fur_dark', 0x5a3a24), M('tusk', 0xf3ead6), M('eye', 0x241a20)
    body = meta('body', [(0, 0, 1.9, 1.1, 1.25, 1.0, 1.0), (1.0, 0, 2.4, .7, 1.0, .9, 1.0), (1.35, 0, 2.85, .5), (-.85, 0, 1.75, .75)], fur, res=.05)
    tube('trunk', [(1.75, 0, 2.3), (1.95, 0, 1.75), (1.95, 0, 1.2), (2.05, 0, .9), (2.25, 0, .85)], [.26, .2, .16, .13, .1], fur)
    for s in (-1, 1):
        pts = [(1.6 + math.sin(i / 6 * 2.4) * .75, s * (.38 + i * .03), 1.95 - math.cos(i / 6 * 2.4) * .5 + i * .12) for i in range(7)]
        tube(f'tusk{s}', pts, [.11 - i * .012 for i in range(7)], tusk)
        p, n = stick_on(body, (1.3, s * 4, 2.65), (0, -s, 0), sink=.02)
        sphere(f'eye{s}', .08, p, eye)
        patch_on(body, f'ear{s}', (.7, s * 4, 2.55), (0, -s, 0), .32, dark, flat=.3)
    random.seed(3)
    for i in range(80):
        th = random.uniform(-math.pi, math.pi); z = random.uniform(1.0, 2.9)
        o = Vector((math.cos(th) * 3, math.sin(th) * 3, z))
        p, n = stick_on(body, o, Vector((0, 0, z)) - o, sink=.06)
        if (p - o).length < 1e-6:
            continue
        c = sphere(f'tuft{i}', .14, p - Vector((0, 0, .12)), dark if i % 3 == 0 else fur, scale=(.6, .6, 1.6))
    for x in (-.65, .65):
        for s in (-1, 1):
            tube(f'leg{x}{s}', [(x, s * .55, 1.2), (x, s * .58, .6), (x + .05, s * .58, .18)], [.4, .36, .38], fur)
    export('manny')


# ════════ 迪亞哥：橘褐色劍齒虎、深色眉頭、兩根長長的劍齒、尾巴 ════════
def build_diego():
    reset()
    fur, belly, dark, white, nose = M('fur', 0xd08a3c), M('belly', 0xf1d9a8), M('dark', 0x8a4a1e), M('white', 0xfffdf2), M('nose', 0x3a2a20)
    body = meta('body', [(0, 0, 1.05, .55, 1.45, .8, .85), (.75, 0, 1.3, .42), (1.15, 0, 1.6, .4, 1.15, .95, .9), (1.55, 0, 1.48, .25, 1.3, .85, .75)], fur)
    meta('belly', [(.1, 0, .98, .45, 1.35, .7, .7)], belly).location.z = -.06
    sphere('nose', .09, (1.86, 0, 1.55), nose, scale=(.8, 1.2, .8))
    for s in (-1, 1):
        bpy.ops.mesh.primitive_cone_add(radius1=.055, depth=.45, location=(1.7, s * .13, 1.15), rotation=(math.pi - .15, 0, 0), vertices=10)
        finish(bpy.context.object, white).name = f'saber{s}'
        tube(f'ear{s}', [(1.05, s * .3, 1.9), (1.0, s * .36, 2.08)], [.1, .04], fur)
        patch_on(body, f'brow{s}', (1.42, s * 4, 1.7), (0, -s, 0), .12, dark, flat=.35)
        for k in range(3):
            patch_on(body, f'stripe{s}{k}', (-.35 + k * .35, s * 4, 1.3), (0, -s, 0), .17, dark, flat=.25)
    eyes(body, 1.4, 1.72, .1, iris=0xe0b030, look=(1, 0, 0), sink=.03)
    for x in (-.55, .7):
        for s in (-1, 1):
            tube(f'leg{x}{s}', [(x, s * .32, .95), (x, s * .34, .45), (x + .12, s * .34, .08)], [.16, .13, .13], fur)
    tube('tail', [(-.85, 0, 1.15), (-1.3, 0, 1.0), (-1.7, 0, .95), (-1.95, 0, 1.1)], [.1, .08, .07, .08], fur)
    export('diego')


ONLY = sys.argv[sys.argv.index('--') + 2:] if '--' in sys.argv else []
for f in (build_scrat, build_sid, build_manny, build_diego):
    if ONLY and f.__name__[6:] not in ONLY:
        continue
    f()
print('DONE')
