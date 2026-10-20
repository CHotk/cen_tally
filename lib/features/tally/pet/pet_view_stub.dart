import 'package:flutter/widgets.dart';

/// 非網頁平台（含測試）：沒有吉祥物。
const petSupported = false;

Widget buildPetView() => const SizedBox.shrink();

/// 告訴 3D 那邊現在在做什麼（非網頁平台不用）。
void sendPetPose(Map<String, Object> pose) {}
