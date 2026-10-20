import 'package:flutter/widgets.dart';

/// 非網頁平台（含測試）：沒有 3D 雪球。
const globeSupported = false;

Widget buildGlobeView({double petScale = 2.6, double fit = 1}) =>
    const SizedBox.shrink();

/// 雪球回報的訊息（ready／error），非網頁平台不會有。
void Function() listenGlobe(void Function(String type, String? message) on) =>
    () {};

void shakeGlobe() {}
