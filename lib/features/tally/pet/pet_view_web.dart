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
    ui_web.platformViewRegistry.registerViewFactory('tally-pet', (int id) {
      _passThrough(id);
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

/// 這個窗格蓋滿整個畫面，只把 iframe 設成不接手指不夠：Flutter 包在外面的
/// flt-platform-view／slot 也會接，底下雪球的 iframe 就點不到、轉不動（2026-10-20
/// 使用者回報）。slot 在 Flutter 畫面層（flt-glass-pane 的 shadow root）裡，而且
/// Flutter 每次重畫都會把它的 pointer-events 寫回 auto（2026-10-21 查到：直接改
/// style 沒用），所以在那個 shadow root 裡加一條 !important 的規則壓過去。
void _passThrough(int id) {
  var tries = 0;
  void fix() {
    final host =
        web.document.querySelector('flt-platform-view[slot="flt-pv-slot-$id"]')
            as web.HTMLElement?;
    host?.style.pointerEvents = 'none';
    final root = web.document.querySelector('flt-glass-pane')?.shadowRoot;
    if (root != null && root.querySelector('#pet-pass') == null) {
      final css = web.document.createElement('style') as web.HTMLStyleElement
        ..id = 'pet-pass'
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

/// 3D 那邊做完一個動作（吃東西、變身、對決…，web/pet 送 {pet: {done: 動作}}）就呼叫 [onDone]。
void Function() listenPetDone(void Function(String act) onDone) {
  final handler = ((web.MessageEvent e) {
    final d = e.data.dartify();
    if (d is Map && d['pet'] is Map && (d['pet'] as Map)['done'] != null) {
      onDone('${(d['pet'] as Map)['done']}');
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
