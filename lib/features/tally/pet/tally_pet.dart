import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';

import 'pet_view.dart';

/// 記帳吉祥物（2026-10-20，設計稿 design-history/2026-10-20_記帳吉祥物.html）：
/// 3D 吉伊卡哇在記帳畫面上當桌面寵物——在卡片上緣、按鈕列上走、跑、跳、坐（有椅子）、
/// 睡，就地拿梯子爬到上面的卡片、從站的那一層往下跳；按住＝捏起來（會掙扎），放開
/// 照甩的方向掉下去，摔大力會頭暈；點一下開心跳。
///
/// 這裡算「牠在哪、在做什麼」（物理、行為），樣子是 web/pet/index.html 那個小 3D
/// 窗格畫的：每一幀把窗格移到牠的位置，模式變了才用 postMessage 告訴它。
/// 只有牠本身那一小塊接手指，其他地方照常點得到。
class TallyPetLayer extends StatefulWidget {
  const TallyPetLayer({super.key, required this.platforms, this.cheers});

  /// 可以站的東西（卡片、按鈕列）的 key，上緣就是地板。
  final List<GlobalKey> Function() platforms;

  /// 記一筆時 +1：牠開心跳一下。
  final ValueNotifier<int>? cheers;

  @override
  State<TallyPetLayer> createState() => _TallyPetLayerState();
}

class _Plat {
  _Plat(this.key, this.x1, this.x2, this.y);
  final GlobalKey key;
  final double x1, x2, y;
}

class _TallyPetLayerState extends State<TallyPetLayer>
    with SingleTickerProviderStateMixin {
  /// 牠多大：每單位幾像素（牠大約 2 單位高 → 約 46px）。2026-10-20 使用者：縮小一點。
  static const _s = 23.0;
  static const _boxW = _s * 3.2, _boxH = _s * 3.4;

  /// 動作之間停多久的倍數（2026-10-20 使用者：切換有點快，慢到 1.4 倍）。
  static const _pace = 1.4; // 3D 窗格大小（web/pet 的正交鏡頭同比例）

  /// 真的出場才建（測試、非網頁不建，關頁面時也不會才去建它）。
  Ticker? _ticker;
  Duration _last = Duration.zero;
  final _rng = math.Random();

  // 狀態
  double x = 80, y = 120, vx = 0, vy = 0;
  GlobalKey? plat, ignore, climbTo;
  int face = 1;
  String mode = 'fall';
  double t = 0, until = 0, target = 0, speed = 40;
  String? next;
  double gx = 0, gy = 0; // 捏著時手指要牠去的位置
  double? ladderTop, ladderBot;
  String? bubble;
  double bubbleUntil = 0, clock = 0;
  bool _visible = false; // 3D 窗格載好沒（還沒好不要接手指）

  /// 台詞（2026-10-20 使用者：多一些，主人叫馨岑）。發呆、東張西望、被點時偶爾說。
  static const _lines = [
    '馨岑今天過得怎麼樣？',
    '馨岑辛苦了～',
    '鑫鑫腸買了沒？',
    '今天有好好吃飯嗎？',
    '記帳好棒！',
    '要早點睡喔',
    '嘿嘿',
  ];

  void _chat() => _say(_lines[_rng.nextInt(_lines.length)], 2.4);

  @override
  void initState() {
    super.initState();
    if (!petSupported) return; // 測試、非網頁：沒有吉祥物
    widget.cheers?.addListener(_cheer);
    // 記帳畫面先出來，牠晚一點才出場（跟雪球一樣不搶開機）。
    Timer(const Duration(milliseconds: 1800), () {
      if (!mounted) return;
      setState(() => _visible = true);
      (_ticker = createTicker(_tick)).start();
    });
  }

  @override
  void dispose() {
    widget.cheers?.removeListener(_cheer);
    _ticker?.dispose();
    super.dispose();
  }

  void _cheer() {
    if (plat != null && mode != 'held') _setMode('happy', vy0: -330);
    _say('記好了！');
  }

  // ── 平台：key 對應的方塊上緣 ──
  List<_Plat> _plats() {
    final me = context.findRenderObject() as RenderBox?;
    if (me == null || !me.hasSize) return const [];
    final out = <_Plat>[];
    for (final k in widget.platforms()) {
      final box = k.currentContext?.findRenderObject() as RenderBox?;
      if (box == null || !box.hasSize || !box.attached) continue;
      final o = me.globalToLocal(box.localToGlobal(Offset.zero));
      // 捲到上面標題列那裡、或捲出畫面的不算
      if (o.dy < 56 || o.dy > me.size.height - 16) continue;
      out.add(_Plat(k, o.dx + 8, o.dx + box.size.width - 8, o.dy));
    }
    return out;
  }

  _Plat? _platOf(GlobalKey? k, [List<_Plat>? all]) {
    if (k == null) return null;
    for (final p in all ?? _plats()) {
      if (p.key == k) return p;
    }
    return null;
  }

  void _say(String s, [double sec = 1.6]) {
    bubble = s;
    bubbleUntil = clock + sec;
  }

  void _setMode(String m, {double? until0, double? vy0, double? vx0}) {
    if (m != 'fall') ignore = null;
    mode = m;
    t = 0;
    if (until0 != null) until = until0;
    if (vy0 != null) {
      vy = vy0;
      if (m == 'happy') plat = null;
    }
    if (vx0 != null) vx = vx0;
    if (m != 'climb') ladderTop = ladderBot = null;
    sendPetPose({'m': m, 'f': face, 'mv': 0, 'sp': speed});
  }

  List<_Plat> _above(_Plat here, List<_Plat> all) =>
      all
          .where(
            (p) =>
                p.y < here.y - 30 &&
                p.y > here.y - 330 &&
                x >= p.x1 &&
                x <= p.x2,
          )
          .toList()
        ..sort((a, b) => b.y.compareTo(a.y));

  void _think(List<_Plat> all) {
    final here = _platOf(plat, all);
    if (here == null) return _setMode('fall', vx0: 0, vy0: 0);
    final r = _rng.nextDouble();
    final above = _above(here, all);
    final below = all.any((p) => p.y > here.y + 20 && x >= p.x1 && x <= p.x2);
    if (r < .16 && above.isNotEmpty) return _climb(here, above.first);
    if (r < .27 && below) return _jumpDown(here);
    void go(double spd) {
      target = here.x1 + _rng.nextDouble() * (here.x2 - here.x1);
      speed = spd;
    }

    if (r < .5) {
      go(42);
      return _setMode('walk');
    }
    if (r < .6) {
      go(120);
      return _setMode('run');
    }
    if (r < .72) {
      if (_rng.nextDouble() < .45) _chat();
      return _setMode('look', until0: 2.2 * _pace);
    }
    if (r < .8) return _setMode('sit', until0: 4.5 * _pace);
    if (r < .86) return _setMode('sleep', until0: 6 * _pace);
    if (r < .93) return _setMode('happy', vy0: -330);
    if (_rng.nextDouble() < .3) _chat();
    _setMode('idle', until0: (1.5 + _rng.nextDouble() * 2) * _pace);
  }

  // 就地爬：正上方有卡片就直接拿梯子爬。
  void _climb(_Plat here, _Plat top) {
    ladderTop = top.y;
    ladderBot = here.y;
    climbTo = top.key;
    _setMode('climb');
    ladderTop = top.y;
    ladderBot = here.y;
    _say('爬上去看看！');
  }

  // 跳下去：從站的那一層往下穿過去，掉到下面那一層。
  void _jumpDown(_Plat here) {
    ignore = here.key;
    plat = null;
    final ig = ignore;
    _setMode('fall', vx0: face * 40.0, vy0: -230);
    ignore = ig;
    _say('嘿咻！', 1);
  }

  void _tick(Duration now) {
    final dt = math.min((now - _last).inMicroseconds / 1e6, 1 / 30);
    _last = now;
    if (dt <= 0) return;
    clock += dt;
    t += dt;
    final size = (context.findRenderObject() as RenderBox?)?.size;
    if (size == null) return;
    final all = _plats();

    if (plat != null) {
      final p = _platOf(plat, all);
      if (p == null) {
        plat = null;
        _setMode('fall', vx0: 0, vy0: 0);
      } else {
        y = p.y;
        x = x.clamp(p.x1, p.x2);
      }
    }

    var moving = false;
    bool step() {
      final d = target - x;
      if (d.abs() < 2) return true;
      final f = d.sign.toInt();
      if (f != face) {
        face = f;
        sendPetPose({'f': face});
      }
      x += d.sign * math.min(d.abs(), speed * dt);
      moving = true;
      return false;
    }

    switch (mode) {
      case 'idle' || 'look' || 'sit' || 'sleep':
        if (t > until) {
          if (mode == 'sleep') _say('嗯…睡飽了', 1.2);
          _think(all);
        }
      case 'walk' || 'run':
        if (step()) {
          _setMode('idle', until0: (.6 + _rng.nextDouble() * 1.5) * _pace);
        }
      case 'climb':
        final top = _platOf(climbTo, all);
        if (top == null) {
          _setMode('fall', vx0: 0, vy0: 0);
          break;
        }
        ladderTop = top.y;
        if (t < .35) break;
        plat = null;
        y -= 52 * dt;
        if (y <= top.y) {
          y = top.y;
          plat = top.key;
          _setMode('happy', vy0: -220);
          plat = null;
          _say('到了！', 1.2);
        }
      case 'held':
        final k = 1 - math.exp(-dt * 28);
        x += (gx - x) * k;
        y += (gy - y) * k;
      case 'fall' || 'happy':
        final prevY = y;
        vy += 1700 * dt;
        x += vx * dt;
        y += vy * dt;
        if (x < 20) {
          x = 20;
          vx = vx.abs() * .5;
        }
        if (x > size.width - 20) {
          x = size.width - 20;
          vx = -vx.abs() * .5;
        }
        if (vy > 0) {
          for (final p in all) {
            if (p.key != ignore &&
                x >= p.x1 - 6 &&
                x <= p.x2 + 6 &&
                prevY <= p.y &&
                y >= p.y) {
              // 用力往下扔：穿過這一層、減速，繼續掉（2026-10-20 使用者：扔大力要能
              // 掉兩三格，不是停在最近那格）。越用力穿越多層。
              if (vy > 1250) {
                vy *= .72;
                continue;
              }
              final impact = vy;
              y = p.y;
              plat = p.key;
              vx = vy = 0;
              ignore = null;
              if (impact > 1100) {
                _setMode('dizzy', until0: 1.8);
                _say('頭好暈…');
              } else {
                _setMode(
                  'idle',
                  until0: (.5 + _rng.nextDouble() * 1.2) * _pace,
                );
                sendPetPose({'land': 1});
              }
              break;
            }
          }
        }
        if (y > size.height + 80) {
          x = size.width / 2;
          y = -40;
          vy = 0;
        }
      case 'dizzy':
        if (t > until) _setMode('idle', until0: 1);
    }
    if (moving != _wasMoving) {
      _wasMoving = moving;
      sendPetPose({'mv': moving ? 1 : 0, 'sp': speed, 'f': face});
    }
    setState(() {});
  }

  bool _wasMoving = false;

  // ── 手指 ──
  Offset? _down;
  double _downAt = 0;
  bool _held = false;
  Timer? _holdTimer;
  final _hist = <(Offset, double)>[];

  void _grab() {
    if (_held) return;
    _held = true;
    gx = x;
    gy = y;
    plat = null;
    _setMode('held');
    _say('放開我～！', 1.4);
  }

  Offset? _grabOffset;

  @override
  Widget build(BuildContext context) {
    if (!petSupported) return const SizedBox.shrink();
    final shadowY = plat != null ? y : null;
    return Stack(
      clipBehavior: Clip.none,
      children: [
        if (ladderTop != null && ladderBot != null)
          Positioned(
            left: x - 13,
            top: ladderTop! - 6,
            width: 26,
            height: (ladderBot! - ladderTop! + 6).clamp(0, 2000).toDouble(),
            child: const IgnorePointer(
              child: CustomPaint(painter: _LadderPainter()),
            ),
          ),
        if (shadowY != null)
          Positioned(
            left: x - _s * 1.1,
            top: shadowY - 4,
            width: _s * 2.2,
            height: 8,
            child: IgnorePointer(
              child: DecoratedBox(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(8),
                  color: Colors.black.withValues(alpha: .3),
                ),
              ),
            ),
          ),
        // 3D 樣子：窗格底部中間＝牠的腳
        Positioned(
          left: x - _boxW / 2,
          top: y - _boxH + _s * .15,
          width: _boxW,
          height: _boxH,
          child: IgnorePointer(
            child: Opacity(opacity: _visible ? 1 : 0.01, child: buildPetView()),
          ),
        ),
        if (bubble != null && clock < bubbleUntil || mode == 'sleep')
          Positioned(
            left: x - 60,
            top: y - _s * 2.9,
            width: 120,
            child: IgnorePointer(
              child: Text(
                mode == 'sleep' && !(bubble != null && clock < bubbleUntil)
                    ? '${'z' * (1 + (t * 1.5).floor() % 3)}Z'
                    : bubble ?? '',
                textAlign: TextAlign.center,
                style: const TextStyle(
                  fontSize: 12.5,
                  fontWeight: FontWeight.w800,
                  color: Colors.white,
                  shadows: [Shadow(blurRadius: 3, color: Colors.black54)],
                ),
              ),
            ),
          ),
        // 接手指的透明格子（只有牠那麼大）
        if (_visible)
          Positioned(
            left: x - _s,
            top: y - _s * 2.3,
            width: _s * 2,
            height: _s * 2.3,
            child: Listener(
              behavior: HitTestBehavior.opaque,
              onPointerDown: (e) {
                _down = e.position;
                _downAt = clock;
                _held = false;
                _hist.clear();
                _holdTimer?.cancel();
                _holdTimer = Timer(const Duration(milliseconds: 220), () {
                  if (_down != null) {
                    _grabOffset = Offset(x, y) - _localOf(e.position);
                    _grab();
                  }
                });
              },
              onPointerMove: (e) {
                if (_down == null) return;
                _hist.add((e.position, clock));
                if (_hist.length > 6) _hist.removeAt(0);
                if (!_held && (e.position - _down!).distance > 5) {
                  _grabOffset = Offset(x, y) - _localOf(_down!);
                  _grab();
                }
                if (_held) {
                  final p = _localOf(e.position) + (_grabOffset ?? Offset.zero);
                  gx = p.dx;
                  gy = p.dy;
                }
              },
              onPointerUp: (e) {
                _holdTimer?.cancel();
                if (_held) {
                  var v = Offset.zero;
                  if (_hist.length >= 2) {
                    final a = _hist.first, b = _hist.last;
                    final dt = math.max(.016, b.$2 - a.$2);
                    v = (b.$1 - a.$1) / dt;
                  }
                  _held = false;
                  _setMode(
                    'fall',
                    vx0: v.dx.clamp(-1200, 1200),
                    vy0: v.dy.clamp(-1400, 2600),
                  );
                  _say('哇啊——', 1);
                } else if (clock - _downAt < .3 && plat != null) {
                  _setMode('happy', vy0: -340);
                  if (_rng.nextBool()) {
                    _chat();
                  } else {
                    _say('♪', .8);
                  }
                }
                _down = null;
              },
              onPointerCancel: (_) {
                _holdTimer?.cancel();
                if (_held) {
                  _held = false;
                  _setMode('fall', vx0: 0, vy0: 0);
                }
                _down = null;
              },
            ),
          ),
      ],
    );
  }

  Offset _localOf(Offset global) {
    final me = context.findRenderObject() as RenderBox?;
    return me == null ? global : me.globalToLocal(global);
  }
}

/// 木頭梯子：兩根側桿＋一格一格的橫木。
class _LadderPainter extends CustomPainter {
  const _LadderPainter();

  @override
  void paint(Canvas canvas, Size size) {
    final rail = Paint()..color = const Color(0xFF8A5A32);
    final rung = Paint()..color = const Color(0xFFB07A45);
    canvas.drawRect(Rect.fromLTWH(0, 0, 4, size.height), rail);
    canvas.drawRect(Rect.fromLTWH(size.width - 4, 0, 4, size.height), rail);
    for (var y = size.height - 10; y > 4; y -= 14) {
      canvas.drawRect(Rect.fromLTWH(4, y, size.width - 8, 4), rung);
    }
  }

  @override
  bool shouldRepaint(_LadderPainter old) => false;
}
