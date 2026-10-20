import 'package:flutter/widgets.dart';

/// 非網頁平台（含測試）：沒有吉祥物。
const petSupported = false;

Widget buildPetView() => const SizedBox.shrink();

/// 告訴 3D 那邊現在在做什麼（非網頁平台不用）。
void sendPetPose(Map<String, Object> pose) {}

/// 3D 那邊準備好了（第一幀畫好）就呼叫 [onReady]；回傳取消用的函式。
void Function() listenPetReady(void Function() onReady) => () {};
