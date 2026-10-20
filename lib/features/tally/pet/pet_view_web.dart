import 'dart:js_interop';
import 'dart:js_interop_unsafe';
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

/// 3D 那邊準備好了（web/pet 送 {pet: {ready: 1}}）就呼叫 [onReady]。
void Function() listenPetReady(void Function() onReady) {
  final handler = ((web.MessageEvent e) {
    final d = e.data.dartify();
    if (d is Map && d['pet'] is Map && (d['pet'] as Map)['ready'] != null) {
      onReady();
    }
  }).toJS;
  web.window.addEventListener('message', handler);
  return () => web.window.removeEventListener('message', handler);
}

/// 直接呼叫 3D 頁的 petPose（同一個網站），當場畫，跟 Flutter 同一幀；
/// 還沒載好（沒有 petPose）才退回 postMessage。
void sendPetPose(Map<String, Object> pose) {
  final w = _frame?.contentWindow;
  if (w == null) return;
  try {
    final o = w as JSObject;
    if (o.has('petPose')) {
      o.callMethod('petPose'.toJS, pose.jsify());
      return;
    }
  } catch (_) {}
  w.postMessage({'pet': pose}.jsify(), '*'.toJS);
}
