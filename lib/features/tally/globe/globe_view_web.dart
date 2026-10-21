import 'dart:js_interop';
import 'dart:js_interop_unsafe';
import 'dart:ui_web' as ui_web;

import 'package:flutter/widgets.dart';
import 'package:web/web.dart' as web;

/// 網頁版：用 iframe 嵌 web/globe/index.html（Three.js 跟模型都打包在 App 裡）。
const globeSupported = true;

web.HTMLIFrameElement? _frame;
final _registered = <String>{};

Widget buildGlobeView({double petScale = 2.6, double fit = 1.0}) {
  final type = 'tally-globe-$petScale-$fit';
  if (_registered.add(type)) {
    ui_web.platformViewRegistry.registerViewFactory(type, (int id) {
      _passThrough(id);
      final f = web.HTMLIFrameElement()
        ..src = 'globe/index.html?pet=$petScale&fit=$fit'
        ..setAttribute('allowtransparency', 'true')
        ..setAttribute('title', '雪球');
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
  return HtmlElementView(viewType: type);
}

/// 雪球的 iframe 不接手指，手指一律先到 Flutter（2026-10-21 使用者回報：吉祥物走到雪球上就
/// 點不到牠——iframe 在畫面上會直接吃掉手指，Flutter 根本收不到）。Flutter 判斷不是點到吉祥物，
/// 才用 [forwardGlobePointer] 轉給雪球。做法同 pet_view_web.dart 的 _passThrough：Flutter 包在外面的
/// slot 每次重畫都會把 pointer-events 寫回 auto，要在 flt-glass-pane 的 shadow root 裡加 !important 規則。
void _passThrough(int id) {
  var tries = 0;
  void fix() {
    final host =
        web.document.querySelector('flt-platform-view[slot="flt-pv-slot-$id"]')
            as web.HTMLElement?;
    host?.style.pointerEvents = 'none';
    final root = web.document.querySelector('flt-glass-pane')?.shadowRoot;
    if (root != null && root.querySelector('#globe-pass-$id') == null) {
      final css = web.document.createElement('style') as web.HTMLStyleElement
        ..id = 'globe-pass-$id'
        ..textContent =
            'flt-platform-view-slot:has(> slot[name="flt-pv-slot-$id"])'
            '{pointer-events:none !important}';
      root.appendChild(css);
    }
    if ((host == null || root == null) && ++tries < 50) {
      Future.delayed(const Duration(milliseconds: 100), fix);
    }
  }

  Future.delayed(Duration.zero, fix);
}

/// 把 Flutter 收到的手指轉給雪球（type：down／move／up／cancel，座標是雪球左上角起算）。
void forwardGlobePointer(String type, Offset p, int id, bool touch) {
  final w = _frame?.contentWindow;
  if (w == null) return;
  try {
    final o = w as JSObject;
    if (!o.has('globePointer')) return;
    o.callMethodVarArgs('globePointer'.toJS, [
      type.toJS,
      p.dx.toJS,
      p.dy.toJS,
      id.toJS,
      (touch ? 'touch' : 'mouse').toJS,
    ]);
  } catch (_) {}
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
