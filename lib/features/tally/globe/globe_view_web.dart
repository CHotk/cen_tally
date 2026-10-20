import 'dart:js_interop';
import 'dart:ui_web' as ui_web;

import 'package:flutter/widgets.dart';
import 'package:web/web.dart' as web;

/// 網頁版：用 iframe 嵌 web/globe/index.html（Three.js 跟模型都打包在 App 裡）。
const globeSupported = true;

web.HTMLIFrameElement? _frame;
final _registered = <String>{};

Widget buildGlobeView({double petScale = 2.6, double fit = .9}) {
  final type = 'tally-globe-$petScale-$fit';
  if (_registered.add(type)) {
    ui_web.platformViewRegistry.registerViewFactory(type, (int _) {
      final f = web.HTMLIFrameElement()
        ..src = 'globe/index.html?pet=$petScale&fit=$fit'
        ..setAttribute('allowtransparency', 'true')
        ..setAttribute('title', '雪球');
      f.style
        ..border = 'none'
        ..width = '100%'
        ..height = '100%'
        ..background = 'transparent'
        ..colorScheme = 'normal';
      _frame = f;
      return f;
    });
  }
  return HtmlElementView(viewType: type);
}

/// 聽雪球送來的 {globe: 'ready'|'error'}，回傳取消用的函式。
void Function() listenGlobe(void Function(String type, String? message) on) {
  final handler = ((web.MessageEvent e) {
    final d = e.data.dartify();
    if (d is Map && d['globe'] is String) {
      on(d['globe'] as String, d['message']?.toString());
    }
  }).toJS;
  web.window.addEventListener('message', handler);
  return () => web.window.removeEventListener('message', handler);
}

/// 叫雪球搖一下（記一筆時）。
void shakeGlobe() {
  _frame?.contentWindow?.postMessage({'globe': 'shake'}.jsify(), '*'.toJS);
}
