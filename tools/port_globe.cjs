// node tools/port_globe.cjs：把設計稿 design-history/2026-10-21_雪球底座與動物.html 的雪球程式搬進 App 的 web/globe/index.html
const fs = require('fs');
const root = require('path').resolve(__dirname, '..') + '/';
let d = fs.readFileSync(root + 'design-history/2026-10-21_雪球底座與動物.html', 'utf8').replace(/\r\n/g, '\n');
const a = d.indexOf("import * as THREE from 'three';"), b = d.indexOf('// ════════ 頁面 ════════');
if (a < 0 || b < 0) throw new Error('cut');
let code = d.slice(a, b);
function rep(x, y) { if (!code.includes(x)) throw new Error('missing: ' + x.slice(0, 80)); code = code.replace(x, () => y); }
// 模型：App 裡是一般檔案（web/globe/models/，Flutter 的 service worker 會快取，離線也有）
const m0 = code.indexOf('// ════════ 模型 ════════'), m1 = code.indexOf('// ════════ 貼圖');
code = code.slice(0, m0) + `// ════════ 模型（web/globe/models/；Kenney 的會自己去讀旁邊 Textures/colormap.png） ════════
const cache = {};
const loadModel = k => cache[k] ??= new GLTFLoader().loadAsync('./models/' + k + '.glb').catch(e => { console.warn(k, e); return null; });

` + code.slice(m1);
// 畫面切走（分頁在背景、捲到看不到）就停，省電
rep(`const clock = new THREE.Clock(); let disposed = false,`, `const clock = new THREE.Clock(); let active = true; let disposed = false,`);
rep(`  function frame() {
    if (disposed) return;`, `  function frame() {
    if (disposed || !active) return;`);
rep(`    stats: () =>`, `    setActive(v) { if (v === active) return; active = v; if (v) { clock.getDelta(); requestAnimationFrame(frame); } },
    stats: () =>`);

const html = `<!doctype html>
<html lang="zh-Hant">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>雪球</title>
<!--
  記帳首頁結餘卡右邊那顆 3D 雪球。Flutter 用 iframe（HtmlElementView）嵌進來。
  程式從設計稿 design-history/2026-10-21_雪球底座與動物.html 搬過來（改那邊再搬過來，兩邊同一套）：
  底座固定「黑曜石切面」；球裡的內容九種場景，每次打開隨機一種、不跟上次一樣
  （2026-10-21 使用者：場景我都要，每次打開隨機顯示一種）。裡面的東西都可以點（各有反應），
  點空白＝搖、連點兩下＝大力搖、長按＝暴風雪、拖＝轉。
  跟 Flutter 溝通用 postMessage：
    收 {globe:'shake'}             搖一搖（記一筆時）
    window.globePointer(type, x, y, id, kind)   Flutter 轉過來的手指（見下面「手指」）
    送 {globe:'ready'}             第一幀畫好了（Flutter 收到才把轉圈換成雪球）
    送 {globe:'error', message}   開不起來（不支援 3D 等）
  網址參數：?pet=動物大小倍數&fit=鏡頭遠近&scene=指定場景（測試用）
  模型（models/）：Kenney Holiday Kit、Cube Pets（CC0，見 License-Kenney.txt）；Fox（Khronos glTF Sample
  Assets：PixelMannen CC0、tomkranis CC-BY 4.0、@AsoboStudio @scurest CC-BY 4.0）；horse/stork/parrot/flamingo
  （three.js 範例，ro.me／mirada）。Three.js：MIT（vendor/LICENSE-three.txt）。
-->
<style>
  /* 長按（暴風雪）不要變成選取／跳出選單（2026-10-21 使用者回報：長按會像選取文字那樣反白） */
  html, body { margin: 0; height: 100%; background: transparent; overflow: hidden;
    user-select: none; -webkit-user-select: none; -webkit-touch-callout: none; -webkit-tap-highlight-color: transparent; }
  canvas { display: block; width: 100%; height: 100%; touch-action: none; outline: none; }
</style>
<script type="importmap">
{ "imports": {
  "three": "./vendor/three.module.min.js",
  "three/addons/": "./vendor/addons/"
} }
</script>
</head>
<body>
<canvas id="g"></canvas>
<script type="module">
${code}
// ════════════════ 頁面 ════════════════
const post = (m) => { try { parent.postMessage(m, '*'); } catch (_) {} };
try {
  const q = new URLSearchParams(location.search);
  // 隨機一個場景，不要跟上次一樣
  let scene = q.get('scene');
  if (!SCENES[scene]) {
    let last = null; try { last = localStorage.getItem('globe.lastScene'); } catch (_) {}
    const pool = Object.keys(SCENES).filter(k => k !== last);
    scene = pool[Math.floor(Math.random() * pool.length)];
  }
  try { localStorage.setItem('globe.lastScene', scene); } catch (_) {}
  const g = makeGlobe(document.getElementById('g'), {
    base: 'obsidian', scene, fit: +(q.get('fit') || 1), elev: +(q.get('elev') || 29), flakes: 700,
    petScale: +(q.get('pet') || 2.6), autoRotate: .9,
  });
  window.__globe = g; // 測試用
  // 手指：這個 iframe 本身不接手指（pointer-events: none），Flutter 先判斷是不是點到吉祥物，
  // 不是才呼叫這裡，假裝成在畫布上按下去（2026-10-21：吉祥物走到雪球上會點不到牠）。
  // 假的指標事件不能 setPointerCapture（會丟錯），改成什麼都不做。
  const cv = document.getElementById('g');
  cv.setPointerCapture = () => {}; cv.releasePointerCapture = () => {}; cv.hasPointerCapture = () => false;
  window.globePointer = (type, x, y, id, kind) => {
    cv.dispatchEvent(new PointerEvent('pointer' + type, { clientX: x, clientY: y, pointerId: id, pointerType: kind, isPrimary: true, button: 0, buttons: type === 'up' || type === 'cancel' ? 0 : 1, bubbles: true, cancelable: true, composed: true }));
  };
  document.addEventListener('contextmenu', e => e.preventDefault());
  addEventListener('message', e => { if (e.data && e.data.globe === 'shake') g.shake(); });
  document.addEventListener('visibilitychange', () => g.setActive(!document.hidden));
  requestAnimationFrame(() => requestAnimationFrame(() => post({ globe: 'ready' })));
} catch (e) {
  post({ globe: 'error', message: String(e) });
}
addEventListener('error', e => post({ globe: 'error', message: String(e.message || e) }));
</script>
</body>
</html>
`;
fs.writeFileSync(root + 'web/globe/index.html', html);
console.log('ok', html.length);
