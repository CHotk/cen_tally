import 'dart:js_interop';
import 'dart:ui_web' as ui_web;

import 'package:flutter/widgets.dart';
import 'package:web/web.dart' as web;

/// 網頁版：嵌 web/pet/index.html（只畫牠的樣子，動作由 Flutter 用 postMessage 告訴它）。
/// 這個 iframe 不接手指（pointer-events: none），捏、點都是 Flutter 那邊的透明格子在接。
const petSupported = true;

web.HTMLIFrameElement? _frame;
var _registered = false;

Widget buildPetView() {
  if (!_registered) {
    _registered = true;
    ui_web.platformViewRegistry.registerViewFactory('tally-pet', (int _) {
      final f = web.HTMLIFrameElement()
        ..src = 'pet/index.html'
        ..setAttribute('allowtransparency', 'true')
        ..setAttribute('title', '吉祥物');
      f.style
        ..border = 'none'
        ..width = '100%'
        ..height = '100%'
        ..background = 'transparent'
        ..pointerEvents = 'none'
        ..colorScheme = 'normal';
      _frame = f;
      return f;
    });
  }
  return const HtmlElementView(viewType: 'tally-pet');
}

void sendPetPose(Map<String, Object> pose) {
  _frame?.contentWindow?.postMessage({'pet': pose}.jsify(), '*'.toJS);
}
