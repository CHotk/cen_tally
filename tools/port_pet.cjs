// node tools/port_pet.cjs：把設計稿 design-history/2026-10-21_吉祥物動作優化.html 的吉祥物引擎
// （「引擎開始」到「引擎結束」那段）搬進 App 的 web/pet/index.html。改動作、道具一律改設計稿再跑這支，
// 不要直接改產生出來的檔（同雪球的 tools/port_globe.cjs）。
const fs = require('fs');
const root = require('path').resolve(__dirname, '..') + '/';
const d = fs.readFileSync(root + 'design-history/2026-10-21_吉祥物動作優化.html', 'utf8').replace(/\r\n/g, '\n');
const a = d.indexOf('// ════════ 引擎開始'), b = d.indexOf('// ════════ 引擎結束');
if (a < 0 || b < 0) throw new Error('找不到引擎段');
const engine = d.slice(a, b);

const html = `<!doctype html>
<html lang="zh-Hant">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>吉祥物</title>
<!--
  記帳吉祥物的「樣子」那一塊（蓋滿整個記帳畫面、不接手指）。由 tools/port_pet.cjs 從設計稿
  design-history/2026-10-21_吉祥物動作優化.html 產生，不要直接改這個檔。
  走去哪、掉下來、被捏起來是 Flutter（lib/features/tally/pet/）算的，每一幀呼叫 window.petPose：
    {x, y, s}            位置（腳底，畫面像素）、大小
    {m, f, mv, sp}       模式（idle/look/walk/run/climb/held/fall/chute/happy/dizzy/sleep/enter）、面向、有沒有在走、速度
    {a: 動作}            做一個動作（吃東西、變身、對決、淹水…，見設計稿），做完送 {pet: {done: 動作}}
    {land: 1}            落地壓扁一下
    {say: 台詞, sd: 秒}  說話（泡泡畫在這裡，跟頭頂同一幀）
  送給 Flutter：{pet: {ready: 1}}（畫好第二幀）、{pet: {done: 動作}}。
  Three.js 打包在 ../globe/vendor。※ 角色版權屬原作者，私人使用。
-->
<style>
  html, body { margin: 0; height: 100%; background: transparent; overflow: hidden; user-select: none; -webkit-user-select: none; }
  canvas { position: absolute; inset: 0; display: block; width: 100%; height: 100%; }
  #dim { position: absolute; inset: 0; background: radial-gradient(circle at 50% 50%, rgba(0,0,0,.15), rgba(0,0,0,.6)); opacity: 0; transition: opacity .35s; }
  #water { visibility: hidden; position: absolute; left: 0; right: 0; bottom: 0; height: 0; z-index: 1; background: linear-gradient(rgba(90,190,255,.32), rgba(20,80,170,.5)); }
  #water .wv { position: absolute; left: -40px; right: -40px; top: -9px; height: 18px; background: radial-gradient(14px 9px at 20px 9px, rgba(150,220,255,.75) 98%, transparent) 0 0 / 40px 18px repeat-x; animation: wv 1.6s linear infinite; }
  #water .rays { position: absolute; inset: 0; background: repeating-linear-gradient(100deg, rgba(255,255,255,.07) 0 18px, transparent 18px 60px); animation: rays 6s ease-in-out infinite alternate; }
  @keyframes wv { to { transform: translateX(40px); } } @keyframes rays { to { background-position: 80px 0; } }
  /* 台詞：一行不換行、置中在頭上（2026-10-21 使用者） */
  .bubble { position: absolute; z-index: 3; transform: translate(-50%, -100%); white-space: nowrap; pointer-events: none; opacity: 0; transition: opacity .18s;
    font: 800 12.5px/1.2 -apple-system, "PingFang TC", "Noto Sans TC", "Microsoft JhengHei", sans-serif; color: #fff; text-shadow: 0 0 3px rgba(0,0,0,.55), 0 1px 2px rgba(0,0,0,.5); }
  .bubble .h { color: #FF6FA5; } .bubble.foe { color: #ffc2d4; }
  #big { position: absolute; z-index: 3; left: 50%; top: 32%; transform: translate(-50%, -50%) scale(.6); font: 900 24px/1 -apple-system, "PingFang TC", "Noto Sans TC", "Microsoft JhengHei", sans-serif;
    letter-spacing: 2px; opacity: 0; white-space: nowrap; color: #fff; text-shadow: 0 0 12px rgba(255,200,87,.8), 0 2px 0 #000; transition: opacity .25s, transform .35s cubic-bezier(.2,1.6,.4,1); }
  #big.on { opacity: 1; transform: translate(-50%, -50%) scale(1); }
</style>
<script type="importmap">
{ "imports": { "three": "../globe/vendor/three.module.min.js" } }
</script>
</head>
<body>
<div id="dim"></div>
<canvas id="c"></canvas>
<div id="water"><div class="wv"></div><div class="rays"></div></div>
<div class="bubble" id="bub0"></div>
<div class="bubble foe" id="bub1"></div>
<div id="big"></div>
<script type="module">
import * as THREE from 'three';
const canvas = document.getElementById('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
const scene = new THREE.Scene();
// 正交鏡頭的單位＝螢幕像素（窗格蓋滿整個記帳畫面、固定不動，Flutter 給位置）
const camera = new THREE.OrthographicCamera(0, 1, 0, -1, -3000, 3000);
let W = innerWidth, H = innerHeight;
function resize() { W = innerWidth; H = innerHeight; renderer.setSize(W, H, false); camera.right = W; camera.bottom = -H; camera.updateProjectionMatrix(); }
addEventListener('resize', resize); resize();
scene.add(new THREE.AmbientLight(0xffffff, 1.35));
const sun = new THREE.DirectionalLight(0xffffff, 1.35); sun.position.set(2.5, 5, 4); scene.add(sun);
window.SPRITE_K = 1.7; // App 裡牠只有 23px 一單位，文字特效放大才看得清楚

${engine}
// ════════════════ App 的控制層（Flutter 帶位置跟模式） ════════════════
let springy = true;
const snapNow = () => false;
let cur = 'idle', actT = 0, actionKey = null, fm = 'idle', moving = false, speed = 40, fx = -999, fy = -999, prevFx = null, returning = false, costumeAt = 0;
me.S = foe.S = 23;
// 這幾個動作自己會移動位置（對決、滑倒、忍者瞬移、淹水游泳），做的時候不跟 Flutter 的位置
const OWN = new Set(['duel', 'trip', 'tf_ninja', 'flood']);
// Flutter 那邊的模式（不是設計稿裡的動作）
const APP = {
  loco: { pose(P, t) { if (moving) walkCycle(P, clockT * speed * .16, speed > 80 ? 1 : 0); else ACTS.idle.pose(P, t); } },
  look: { pose(P, t) { P.turn = Math.sin(t * 2.2) * .7; P.roll = Math.sin(t * 1.1) * .04; } },
  climb: { pose(P, t) { P.turn = Math.PI; const ph = clockT * 9, s = Math.sin(ph); hR(P, [.85, 1.45 + s * .35, -.35]); hL(P, [.85, 1.45 - s * .35, -.35]); P.lLy = .06 + Math.max(0, s) * .25; P.lRy = .06 + Math.max(0, -s) * .25; } },
  fall: { pose(P) { both(P, 'high'); P.wide = 1; P.mouth = .6; P.lLy = P.lRy = .2; } },
  happy: { pose(P) { both(P, 'high'); P.happy = 1; P.mouth = .4; P.sy = 1.08; },
    ev(t0, t1) { if (every(t0, t1, .18)) puff('✦', W2(me.body, (Math.random() - .5) * 2, 2.1, 0), { color: ['#ffd36b', '#ff9fbe', '#8fd3ff'][Math.floor(Math.random() * 3)], vy: 40, size: .2, life: .6 }); } },
  chute: { pose(P) { both(P, [.6, 2.15, .1]); P.roll = Math.sin(clockT * 1.8) * .12; P.happy = .6; } },
};
function setAct(name) { if (name === cur) return; (ACTS[cur] || APP[cur])?.exit?.(); chairV1.visible = false; sparkV1.visible = false;
  if (cur === 'sleep' && name !== 'wake') { pillow.visible = false; me.hat.remove(nightcap); me.snot.visible = false; }
  if (OWN.has(cur) && !OWN.has(name)) returning = true;
  cur = name; actT = 0; (ACTS[name] || APP[name])?.enter?.(); if (name.startsWith('tf_')) costumeAt = clockT; }
function modeOf(m) { if (m === 'walk' || m === 'run' || m === 'toLadder' || m === 'enterRun') return 'loco'; if (m === 'sit') return 'sitEdge';
  if (m === 'enter' || m === 'idle') return 'idle'; if (APP[m] || ACTS[m]) return m; return 'idle'; }
function apply(p) {
  if (p.x != null) { fx = p.x; fy = p.y; } if (p.s != null) me.S = foe.S = Math.max(.01, p.s);
  if (p.f) me.dir = p.f; if (p.mv != null) moving = !!p.mv; if (p.sp) speed = p.sp;
  if (p.land) { me.cur.sy = .72; me.cur.sx = 1.2; }
  if (p.say) talk(p.say, p.sd || 1.6);
  if (p.a && ACTS[p.a]) { actionKey = p.a; setAct(p.a); }
  else if (p.m && p.m !== 'act') { fm = p.m; actionKey = null; setAct(modeOf(p.m)); }
}
let drivenAt = -1;
window.petPose = p => { apply(p); if (p.x != null) { drivenAt = performance.now(); frame(); } };
addEventListener('message', e => { const p = e.data && e.data.pet; if (p) apply(p); });
const post = m => { try { parent.postMessage(m, '*'); } catch (_) {} };

const bub = [document.getElementById('bub0'), document.getElementById('bub1')];
const clock = new THREE.Clock();
function frame() { tick(Math.min(clock.getDelta(), 1 / 30)); renderer.render(scene, camera); }
function tick(dt) { clockT += dt; const t0 = actT; actT += dt;
  const a = ACTS[cur] || APP[cur];
  // ── 位置 ──
  if (me.swimOff) { me.px += (me.swimOff.x - me.px) * Math.min(1, dt * 6); me.py += (me.swimOff.y - me.py) * Math.min(1, dt * 6); }
  else if (OWN.has(cur)) { me.py = fy; }
  else if (returning && Math.abs(fx - me.px) + Math.abs(fy - me.py) > 2) { const k = Math.min(1, dt * 9); me.px += (fx - me.px) * k; me.py += (fy - me.py) * k; }
  else { returning = false; me.px = fx; me.py = fy; }
  // 被捏著：放大一點、跟著手指甩（鐘擺）
  const vx = prevFx == null ? 0 : (fx - prevFx) / Math.max(dt, 1e-3); prevFx = fx;
  me.Sk += ((cur === 'held' ? 1.15 : 1) - me.Sk) * Math.min(1, dt * 10);
  if (cur === 'held') { me.swingV += ((THREE.MathUtils.clamp(-vx * .0011, -.7, .7) - me.swing) * 90 - me.swingV * 8) * dt; me.swing += me.swingV * dt; } else me.swing *= Math.pow(.02, dt);
  // ── 姿勢 ──
  const P = { ...BASE }, F = { ...BASE };
  a?.pose?.(P, actT, F);
  if (cur === 'held') P.roll += me.swing;
  a?.ev?.(t0, actT);
  springTo(me, P, dt); if (foe.root.visible) { foe.py = me.py; springTo(foe, F, dt); }
  applyPet(me, dt); if (foe.root.visible) applyPet(foe, dt);
  if (pillow.visible) { pillow.userData.t = (pillow.userData.t || 0) + dt; const k = Math.min(1, pillow.userData.t / .35); const s = Math.max(.001, ease(k) * (1 + Math.sin(k * Math.PI) * .3)); pillow.position.set(-1.25, .25, .1); pillow.scale.set(1.3 * s, .42 * s, .9 * s); }
  // ── 特效 ──
  for (let i = parts.length - 1; i >= 0; i--) { const q = parts[i]; q.age += dt; const k = q.age / q.life; q.v.y += q.g * dt;
    q.sp.position.x += (q.v.x + Math.sin(q.age * 5 + q.ph) * q.wob) * dt; q.sp.position.y += q.v.y * dt; q.sp.material.rotation += q.spin * dt;
    q.sp.material.opacity = k < .15 ? k / .15 : 1 - Math.max(0, (k - .55) / .45); q.sp.scale.setScalar(q.size * (k < .15 ? .6 + k / .15 * .4 : 1) * (1 + q.grow * k));
    if (k >= 1) { scene.remove(q.sp); q.sp.material.dispose(); parts.splice(i, 1); } }
  for (let i = balls.length - 1; i >= 0; i--) { const q = balls[i]; q.age += dt; q.v.y -= q.g * dt; q.m.position.addScaledVector(q.v, dt); q.m.scale.setScalar(Math.max(.01, 1 - q.age / q.life)); if (q.age >= q.life) { scene.remove(q.m); balls.splice(i, 1); } }
  for (let i = fxs.length - 1; i >= 0; i--) { const f = fxs[i]; f.t += dt; const k = Math.min(1, f.t / f.life); f.fn(k); if (k >= 1) { f.end?.(); fxs.splice(i, 1); } }
  if (shakeAmt > .3) { canvas.style.transform = 'translate(' + (Math.random() - .5) * shakeAmt * .6 + 'px,' + (Math.random() - .5) * shakeAmt * .6 + 'px)'; shakeAmt *= Math.pow(.004, dt); } else if (canvas.style.transform) { canvas.style.transform = ''; shakeAmt = 0; }
  if (bigUntil && clockT > bigUntil) { bigEl.classList.remove('on'); bigUntil = 0; }
  // ── 動作做完：告訴 Flutter ──
  if (actionKey && a?.dur && actT >= a.dur) { const k = actionKey; actionKey = null; setAct('idle'); post({ pet: { done: k } }); }
  // 變身久了自己變回來（像卡比一樣先留著能力一陣子）
  if (costume && !cur.startsWith('tf_') && clockT - costumeAt > 40 && cur !== 'held') { for (let i = 0; i < 8; i++) puff('●', W2(me.body, (Math.random() - .5) * 2, Math.random() * 2.2, 0), { color: '#e8e8f0', vy: 20, size: .5, grow: 1.5, life: .7 }); wear(null); }
  // ── 台詞泡泡：跟著頭頂（含跳起來、被捏起來），一行不換行 ──
  for (const [i, p] of [[0, me], [1, foe]]) { const b = bub[i];
    if (say[i] && clockT < sayUntil[i] && p.root.visible && p.S > 2) { const head = W2(p.body, 0, 2.25, 0); b.style.opacity = 1; const html = say[i].replace('♡', '<span class="h">♡</span>'); if (b.innerHTML !== html) b.innerHTML = html; b.style.left = head.x + 'px'; b.style.top = (-head.y - 4) + 'px'; }
    else b.style.opacity = 0; }
}
// 自己的迴圈只在 Flutter 沒在帶的時候畫（剛載入、Flutter 那邊暫停時）
(function loop() { if (performance.now() - drivenAt > 250) frame(); requestAnimationFrame(loop); })();
requestAnimationFrame(() => requestAnimationFrame(() => post({ pet: { ready: 1 } })));
window.__pet = { setAct, get act() { return cur; }, me, foe, ACTS }; // 測試用
</script>
</body>
</html>
`;
fs.writeFileSync(root + 'web/pet/index.html', html);
console.log('ok', html.length);
