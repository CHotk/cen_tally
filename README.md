# 記帳

從 Lume 拆出來的獨立記帳 App：只有 ＋ 收入／− 支出，跨裝置同步到 Cloudflare R2（`cen-tally` 儲存桶）。

- 網址：https://chotk.github.io/cen_tally/
- 第一次打開要貼 R2 金鑰（Access Key ID、Secret Access Key），存在那台裝置，預設三個月到期。
- 同步：先下載、合併、再上傳。同一筆後改的贏；刪除留墓碑、刪除永遠贏；異動紀錄聯集。
  - 新增／修改／刪除完自動同步（不跳通知）；打開 App、回到 App 也自動同步一次。
  - 右上角「雲端同步」手動同步，完成會跳通知；失敗變紅色雲朵，並自動重試。
  - 雲端三個檔：`books.json`、`items.json`、`events.json`。
- 隱藏頁（畫面上沒有按鈕）：`#/log` 異動紀錄、`#/sync` 同步紀錄與換金鑰。
- Logo 原圖：`assets/logo/cen-tally_logo.png`（圖示產生在 `web/favicon.png`、`web/icons/`）。

## 部署

```
flutter build web --base-href /cen_tally/ -o build/web-ghpages
```
（Git Bash 要加 `MSYS_NO_PATHCONV=1`。）產出鏡射到 gh-pages 分支（保留 `.nojekyll`），commit＋push。
