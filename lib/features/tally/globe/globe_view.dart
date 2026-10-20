// 結餘卡右邊那顆 3D 雪球的「網頁那一塊」（iframe）。網頁版才有，其他平台（含測試）
// 什麼都不放。用條件匯入的理由同 data/export/file_download.dart。
export 'globe_view_stub.dart' if (dart.library.html) 'globe_view_web.dart';
