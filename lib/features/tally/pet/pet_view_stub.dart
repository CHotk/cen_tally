import 'package:flutter/widgets.dart';

/// 非網頁平台（含測試）：沒有吉祥物。
const petSupported = false;

Widget buildPetView([String who = 'chiikawa']) => const SizedBox.shrink();

/// 告訴 3D 那邊現在在做什麼（非網頁平台不用）。
void sendPetPose(Map<String, Object> pose, [String who = 'chiikawa']) {}

/// 3D 那邊準備好了（第一幀畫好）就呼叫 [onReady]；回傳取消用的函式。
void Function() listenPetReady(
  void Function() onReady, [
  String who = 'chiikawa',
]) => () {};

/// 3D 那邊做完一個動作（{pet: {done: 動作}}）就呼叫 [onDone]。
void Function() listenPetDone(
  void Function(String act, double? x) onDone, [
  String who = 'chiikawa',
]) => () {};
