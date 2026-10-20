{{flutter_js}}
{{flutter_build_config}}

// 開機不等離線快取程式（service worker）（2026-10-20 使用者回報：一開始要等 2 秒
// 以上）。Flutter 預設的 load({serviceWorkerSettings}) 會先等 service worker
// 裝好、最多等 4 秒，才開始下載 main.dart.js 跟繪圖引擎——實測每次都卡滿 4 秒，
// 真正載入不到 0.5 秒。改成馬上載入 App，service worker 在背景照樣註冊（離線
// 快取、雪球離線也看得到都靠它），只是不擋開機。
_flutter.loader.load();

// 這個檔是 async 載入的，跑到這裡時頁面的 load 事件常常已經發生過了，
// 只掛監聽會永遠等不到（2026-10-20 實測沒註冊成功）：已經載完就馬上註冊。
function registerServiceWorker() {
  navigator.serviceWorker
    .register('flutter_service_worker.js?v=' + {{flutter_service_worker_version}})
    .catch(function () {});
}
if ('serviceWorker' in navigator) {
  if (document.readyState === 'complete') registerServiceWorker();
  else window.addEventListener('load', registerServiceWorker);
}
