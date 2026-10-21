# 預覽：把資料夾裡每個 .glb 各渲染一張 PNG（Workbench 引擎，快）。
# 用法：blender -b -P tools/blender/preview.py -- <glb 資料夾>
import bpy, sys, os, math
from mathutils import Vector

D = sys.argv[sys.argv.index('--') + 1]
for fn in sorted(os.listdir(D)):
    if not fn.endswith('.glb'):
        continue
    bpy.ops.wm.read_factory_settings(use_empty=True)
    bpy.ops.import_scene.gltf(filepath=os.path.join(D, fn))
    objs = [o for o in bpy.context.scene.objects if o.type == 'MESH']
    pts = [o.matrix_world @ Vector(c) for o in objs for c in o.bound_box]
    lo = Vector((min(p.x for p in pts), min(p.y for p in pts), min(p.z for p in pts)))
    hi = Vector((max(p.x for p in pts), max(p.y for p in pts), max(p.z for p in pts)))
    c = (lo + hi) / 2; r = (hi - lo).length
    cam = bpy.data.objects.new('cam', bpy.data.cameras.new('cam')); bpy.context.collection.objects.link(cam)
    cam.location = c + Vector((r * .55, -r * 1.05, r * .45))
    d = c - cam.location; cam.rotation_euler = d.to_track_quat('-Z', 'Y').to_euler()
    bpy.context.scene.camera = cam
    s = bpy.context.scene; s.render.engine = 'BLENDER_WORKBENCH'
    s.display.shading.light = 'STUDIO'; s.display.shading.color_type = 'MATERIAL'
    s.display.shading.show_cavity = True; s.display.shading.show_object_outline = True
    s.render.resolution_x = 640; s.render.resolution_y = 480
    s.render.filepath = os.path.join(D, fn[:-4] + '.png')
    bpy.ops.render.render(write_still=True)
print('PREVIEW DONE')
