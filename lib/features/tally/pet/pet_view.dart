// 吉祥物的 3D 樣子（iframe）。網頁版才有，其他平台（含測試）什麼都不放。
export 'pet_view_stub.dart' if (dart.library.html) 'pet_view_web.dart';
