# 給 Claude 的專案規則（cen_tally・我的記帳）

## 每完成一個需求：commit＋push master＋部署 gh-pages

使用者是透過 GitHub Pages（https://chotk.github.io/cen_tally/）在用，改到
`lib/`、`web/` 就要同一次部署，不用問。只改 `design-history/`、文件的可以只 push master。

1. 建部署用的 build（跟本機 `build/web` 分開輸出）：
   `flutter build web --release --base-href /cen_tally/ -o build/web-ghpages`
   （Git Bash 底下要加 `MSYS_NO_PATHCONV=1`，不然 `/cen_tally/` 會被路徑轉譯吃掉；
   用 PowerShell 就沒這問題。）
2. **先拿這份測**（見下面「測試」），過了再部署。
3. `git worktree add ../cen_tally-ghpages gh-pages`
4. `robocopy build\web-ghpages ..\cen_tally-ghpages /MIR /XF ".git" ".nojekyll"`
   （`.git` 在 worktree 裡是檔案不是資料夾，要用 `/XF`，用 `/XD` 會把 worktree 弄壞）
5. 進 worktree `git add -A`、`git commit -m "Deploy: …"`、`git push origin gh-pages`
6. `git worktree remove ../cen_tally-ghpages`
7. 本機 `build/web` 部署完再**背景**重建（`flutter build web --release`），不要擋著。

## 測試（2026-10-21 使用者：測試太慢，自己優化流程）

- **只建一次**：測試直接用部署那份 `build/web-ghpages`，不要為了測再建一份本機
  `build/web`（建一次 release 要一分多鐘，原本測一次建兩份）。
- **用 `tools/cdp_test.mjs`**：無頭 Chrome，自己起伺服器把 `/cen_tally/` 對到
  `build/web-ghpages`。`node tools/cdp_test.mjs 步驟.json`，截圖存到 `OUT` 環境變數的
  資料夾（預設系統暫存）。步驟是一個陣列，每步可以有：
  - `go`：開哪個網址（接在 `/cen_tally/` 後面，例如 `"#/"`、`"?ent=door#/"`），`wait` 毫秒
  - `until`：一直試這個 JS 式子直到成立（`max` 上限毫秒）。**等東西出來一律用 until，
    不要寫死 sleep 幾秒**——原本每步固定等 5～6 秒，一次測試四十秒，改了之後幾秒。
  - `eval`（加 `log: 1` 印結果）、`tap: [x, y]`、`wheel`、`shot: "檔名.png"`（可加 `clip`）、
    `pre`（每次開頁前先跑的 JS）、`cpu`（CPU 降速倍數）、`cdp`（直接送 CDP 指令）
- **能用數字驗的就不要截圖**：例如「雪球點得到嗎」→ 在雪球 iframe 掛 pointerdown 計數、
  `tap` 一下、`eval` 讀計數；「吉祥物出場沒」→ `until` 等 iframe 有 canvas。截圖要看圖，
  慢又容易看錯，留給真的要看樣子的時候。
- 測試資料（使用者的真實帳）**不要放進 repo**（這個 repo 是公開的），放暫存資料夾。
- 無頭 Chrome 用軟體繪圖，3D 很慢；看「順不順、閃不閃」不準，那部分要請使用者在手機上看。
- 吉祥物進場可以用網址參數指定：`?ent=drop|door|chute|globe|run|poof`。

## Flutter 網頁版嵌 iframe（platform view）的坑

- 透明度 0 的 platform view 根本不會畫，要隱藏用 0.01。
- 同一個 Stack 裡 platform view **前面的子元件數量不能變**（條件式 `if (...)` 加減元件），
  不然它在樹裡的位置一變就整個重貼，看起來閃一下。一律一直放著、只切換看不看得見。
- 蓋滿畫面又不想擋手指的 platform view：iframe 設 `pointer-events: none` 不夠，Flutter
  包在外面的 `flt-platform-view-slot`（在 `flt-glass-pane` 的 shadow root 裡）每次重畫
  都會被寫回 `auto`，要在那個 shadow root 裡加 `!important` 規則壓過去
  （見 `lib/features/tally/pet/pet_view_web.dart`）。
- 要跟 Flutter 同一幀畫的東西（吉祥物位置）不要用 postMessage（會慢一拍），同網站的
  iframe 直接呼叫它 window 上的函式。
- 要跟著捲動的東西不要在 Ticker 裡讀別的元件位置（Ticker 在排版前跑，讀到上一幀的位置，
  捲動時永遠慢一幀）。在「畫的那一刻」讀（自訂 RenderObject 的 paint，見 tally_pet.dart 的 `_Follow`），
  同一刻把位置送給 iframe。

## 設計稿

- 放 `design-history/`，**每個新設計一個新檔案**（不要塞進既有的設計稿檔裡），
  做完不要幫使用者打開、不要發佈，告訴他路徑就好。
- 設計問題先出設計稿給使用者挑，挑完才做進 App。

## 雪球（web/globe/index.html）

App 裡的雪球程式是從設計稿 `design-history/2026-10-21_雪球底座與動物.html` 搬過來的（同一套）：
改雪球要**先改設計稿**，再跑 `node tools/port_globe.cjs` 重新產生 `web/globe/index.html`，不要直接改
產生出來的檔。模型在 `web/globe/models/`（Kenney 的放 `h/`、`p/`，旁邊要有 `Textures/colormap.png`）；
設計稿用的是同一批模型打包成的 `design-history/assets/globe_models.js`（file:// 開也能載），加模型兩邊都要放。
單獨測雪球：`go: "globe/index.html?scene=train"`，`window.__globe.stats()` 讀效果／粒子數。
