// 無頭 Chrome 測真的 App（2026-10-21，規則見 CLAUDE.md「測試」）：起靜態伺服器、
// 開頁面、跑步驟（eval/until/tap/wheel/shot…）。用法：node tools/cdp_test.mjs <步驟.json>
import http from 'node:http';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

// 直接測部署用的 build（base-href /cen_tally/），不用另外建本機那份
const ROOT = fileURLToPath(new URL('../build/web-ghpages/', import.meta.url));
const OUT = (process.env.OUT || os.tmpdir()) + '/';
const PORT = 5078, DBG = 9340;
const types = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.wasm': 'application/wasm', '.css': 'text/css', '.otf': 'font/otf', '.ttf': 'font/ttf', '.yaml': 'text/plain', '.txt': 'text/plain' };
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p.startsWith('/cen_tally/')) p = p.slice(10);
  if (p === '/') p = '/index.html';
  const f = path.join(ROOT, p);
  fs.readFile(f, (e, d) => { if (e) { res.writeHead(404); res.end(); return; } res.writeHead(200, { 'Content-Type': types[path.extname(f)] || 'application/octet-stream' }); res.end(d); });
}).listen(PORT);

const steps = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const prof = OUT + 'chrome-prof-' + Date.now();
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', [
  '--headless=new', `--remote-debugging-port=${DBG}`, `--user-data-dir=${prof}`, '--window-size=420,880', '--use-angle=swiftshader', '--enable-unsafe-swiftshader',
  '--autoplay-policy=no-user-gesture-required', '--hide-scrollbars', 'about:blank']);
const sleep = ms => new Promise(r => setTimeout(r, ms));
let ws, id = 0; const pending = new Map();
function send(method, params = {}) { return new Promise(r => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); }); }
async function main() {
  let target;
  for (let k = 0; k < 40; k++) { try { const r = await fetch(`http://127.0.0.1:${DBG}/json`); const list = await r.json(); target = list.find(t => t.type === 'page'); if (target) break; } catch { } await sleep(250); }
  ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise(r => ws.onopen = r);
  ws.onmessage = e => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m.result); pending.delete(m.id); } };
  await send('Page.enable'); await send('Runtime.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: 400, height: 860, deviceScaleFactor: 1, mobile: true });
  for (const s of steps) {
    if (s.cdp) { const r = await send(s.cdp.method, s.cdp.params || {}); if (s.log) console.log('cdp', JSON.stringify(r).slice(0, 200)); }
    if (s.cpu) await send('Emulation.setCPUThrottlingRate', { rate: s.cpu });
    if (s.pre) await send('Page.addScriptToEvaluateOnNewDocument', { source: s.pre });
    if (s.go !== undefined) { await send('Page.navigate', { url: /^(https?|file):/.test(s.go) ? s.go : `http://localhost:${PORT}/cen_tally/${s.go}` }); await sleep(s.wait || 6000); }
    if (s.eval) { const r = await send('Runtime.evaluate', { expression: s.eval, awaitPromise: true }); if (s.log) console.log('eval:', JSON.stringify(r).slice(0, 400)); }
    if (s.tap) { const [x, y] = s.tap; for (const type of ['mousePressed', 'mouseReleased']) await send('Input.dispatchMouseEvent', { type, x, y, button: 'left', clickCount: 1 }); await sleep(s.wait || 1500); }
    if (s.wheel) { for (let k = 0; k < (s.times || 1); k++) { await send('Input.dispatchMouseEvent', { type: 'mouseWheel', x: 200, y: 500, deltaX: 0, deltaY: s.wheel }); await sleep(120); } await sleep(800); }
    if (s.shot) { const r = await send('Page.captureScreenshot', { format: 'png', ...(s.clip ? { clip: s.clip } : {}) }); fs.writeFileSync(OUT + s.shot, Buffer.from(r.data, 'base64')); console.log('shot', s.shot); }
    if (s.sleep) await sleep(s.sleep);
    // until：一直試這個式子，成立就往下（不用猜要等幾秒）
    if (s.until) { const t0 = Date.now(); for (;;) { const r = await send('Runtime.evaluate', { expression: s.until }); if (r.result && r.result.value) break; if (Date.now() - t0 > (s.max || 30000)) { console.log('until timeout'); break; } await sleep(200); } }
  }
  ws.close(); chrome.kill(); server.close();
  setTimeout(() => { try { fs.rmSync(prof, { recursive: true, force: true }); } catch { } process.exit(0); }, 800);
}
main().catch(e => { console.error(e); chrome.kill(); server.close(); process.exit(1); });
