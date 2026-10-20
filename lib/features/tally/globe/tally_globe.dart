import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'globe_view.dart';

/// 結餘卡右邊的雪球（2026-10-20，設計稿 design-history/2026-10-20_雪球放結餘卡.html）。
///
/// - 記帳畫面先出來，雪球晚一點才開始載（使用者要求：不要因為雪球整個 App 等很久），
///   載入中轉圈。
/// - 3D 雪球在 iframe 裡（web/globe/），手指拖著轉、點一下搖一搖。
/// - 3D 開不起來（不支援、載入失敗、太久）就換成 Flutter 畫的 2D 備用雪球，
///   點一下一樣會搖。
class TallyGlobe extends StatefulWidget {
  const TallyGlobe({super.key, this.shakes});

  /// 每次值變就搖一下（記一筆時 +1）。
  final ValueNotifier<int>? shakes;

  @override
  State<TallyGlobe> createState() => _TallyGlobeState();
}

/// none＝不是網頁（測試）：什麼都不放。
enum _Phase { none, waiting, loading, ready, flat }

class _TallyGlobeState extends State<TallyGlobe> {
  var _phase = globeSupported ? _Phase.waiting : _Phase.none;
  final _flatKey = GlobalKey<_FlatGlobeState>();
  void Function()? _unlisten;
  Timer? _start, _timeout;

  @override
  void initState() {
    super.initState();
    widget.shakes?.addListener(_shake);
    if (!globeSupported) return;
    _unlisten = listenGlobe((type, _) {
      if (!mounted) return;
      if (type == 'ready' && _phase == _Phase.loading) {
        _timeout?.cancel();
        setState(() => _phase = _Phase.ready);
      } else if (type == 'error') {
        _timeout?.cancel();
        setState(() => _phase = _Phase.flat);
      }
    });
    // 記帳畫面畫完、先讓它順順地出來，再開始載雪球。
    _start = Timer(const Duration(milliseconds: 600), () {
      if (!mounted) return;
      setState(() => _phase = _Phase.loading);
      _timeout = Timer(const Duration(seconds: 20), () {
        if (mounted && _phase == _Phase.loading) {
          setState(() => _phase = _Phase.flat);
        }
      });
    });
  }

  @override
  void dispose() {
    widget.shakes?.removeListener(_shake);
    _unlisten?.call();
    _start?.cancel();
    _timeout?.cancel();
    super.dispose();
  }

  void _shake() {
    if (_phase == _Phase.flat) {
      _flatKey.currentState?.shake();
    } else {
      shakeGlobe();
    }
  }

  @override
  Widget build(BuildContext context) {
    if (_phase == _Phase.none) return const SizedBox.shrink();
    if (_phase == _Phase.flat) return _FlatGlobe(key: _flatKey);
    return Stack(
      fit: StackFit.expand,
      children: [
        if (_phase != _Phase.waiting)
          AnimatedOpacity(
            // 不能是 0：完全透明 Flutter 就不畫它，iframe 根本不會放上去、也就載不起來。
            opacity: _phase == _Phase.ready ? 1 : 0.01,
            duration: const Duration(milliseconds: 400),
            child: buildGlobeView(),
          ),
        if (_phase != _Phase.ready)
          const IgnorePointer(
            child: Center(
              child: SizedBox(
                width: 22,
                height: 22,
                child: CircularProgressIndicator(
                  strokeWidth: 2,
                  color: Color(0x99F2F1F7),
                  backgroundColor: Color(0x26F2F1F7),
                ),
              ),
            ),
          ),
      ],
    );
  }
}

/// 2D 備用雪球：玻璃球、雪地、小屋、兩棵樹、logo 那隻在裡面走來走去，雪一直飄；
/// 點一下（或記一筆）整顆晃一下、雪下得比較急。
class _FlatGlobe extends StatefulWidget {
  const _FlatGlobe({super.key});

  @override
  State<_FlatGlobe> createState() => _FlatGlobeState();
}

class _FlatGlobeState extends State<_FlatGlobe> with TickerProviderStateMixin {
  late final _loop = AnimationController(
    vsync: this,
    duration: const Duration(seconds: 6),
  )..repeat();
  late final _shakeC = AnimationController(
    vsync: this,
    duration: const Duration(milliseconds: 600),
  );

  void shake() => _shakeC.forward(from: 0);

  @override
  void dispose() {
    _loop.dispose();
    _shakeC.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => GestureDetector(
    onTap: shake,
    child: AnimatedBuilder(
      animation: Listenable.merge([_loop, _shakeC]),
      builder: (context, _) {
        final s = _shakeC.value;
        final wobble = s == 0 || s == 1
            ? 0.0
            : math.sin(s * math.pi * 6) * (1 - s) * 0.14;
        return LayoutBuilder(
          builder: (context, c) {
            final ball = math.min(c.maxWidth * .8, c.maxHeight * .78);
            return Transform.rotate(
              angle: wobble,
              alignment: Alignment.bottomCenter,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.end,
                children: [
                  SizedBox(
                    width: ball,
                    height: ball,
                    child: ClipOval(
                      child: CustomPaint(
                        painter: _FlatPainter(_loop.value, s),
                        child: Align(
                          alignment: Alignment(
                            -0.55 +
                                1.1 *
                                    (0.5 -
                                        0.5 *
                                            math.cos(
                                              _loop.value * math.pi * 2,
                                            )),
                            0.78,
                          ),
                          child: Transform.translate(
                            offset: Offset(
                              0,
                              -2 * math.sin(_loop.value * math.pi * 26).abs(),
                            ),
                            child: Image.asset(
                              'assets/logo/logo_240.png',
                              width: ball * .34,
                              errorBuilder: (_, _, _) => const SizedBox(),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                  Container(
                    width: ball * 1.04,
                    height: ball * .24,
                    margin: EdgeInsets.only(top: ball * -.1),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(10),
                      gradient: const LinearGradient(
                        begin: Alignment.topCenter,
                        end: Alignment.bottomCenter,
                        colors: [Color(0xFF6B3D26), Color(0xFF3D2215)],
                      ),
                      border: const Border(
                        top: BorderSide(color: Color(0xFFD9A74E), width: 2),
                      ),
                    ),
                  ),
                ],
              ),
            );
          },
        );
      },
    ),
  );
}

class _FlatPainter extends CustomPainter {
  _FlatPainter(this.t, this.shake);

  final double t;
  final double shake;

  @override
  void paint(Canvas canvas, Size size) {
    final w = size.width, h = size.height;
    // 夜空
    canvas.drawRect(
      Offset.zero & size,
      Paint()
        ..shader = const RadialGradient(
          center: Alignment(0, -.3),
          colors: [Color(0xFF26304F), Color(0xFF121628)],
        ).createShader(Offset.zero & size),
    );
    // 雪地
    canvas.drawOval(
      Rect.fromLTWH(-w * .1, h * .72, w * 1.2, h * .6),
      Paint()
        ..shader = const LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [Color(0xFFF4F7FF), Color(0xFFCFD9EE)],
        ).createShader(Rect.fromLTWH(0, h * .72, w, h * .3)),
    );
    // 兩棵樹
    final tree = Paint()..color = const Color(0xFF1F5A3C);
    for (final (x, s) in [(.18, 1.0), (.84, .8)]) {
      final base = h * .76, th = h * .26 * s, tw = w * .16 * s;
      canvas.drawPath(
        Path()
          ..moveTo(w * x, base - th)
          ..lineTo(w * x - tw / 2, base)
          ..lineTo(w * x + tw / 2, base)
          ..close(),
        tree,
      );
    }
    // 小屋
    final hx = w * .5, hy = h * .62, hw = w * .26, hh = h * .14;
    canvas.drawRect(
      Rect.fromLTWH(hx - hw / 2, hy, hw, hh),
      Paint()..color = const Color(0xFF8A3A2C),
    );
    canvas.drawPath(
      Path()
        ..moveTo(hx - hw * .62, hy + 1)
        ..lineTo(hx, hy - hh * .75)
        ..lineTo(hx + hw * .62, hy + 1)
        ..close(),
      Paint()..color = const Color(0xFFF4F7FF),
    );
    final win = Paint()
      ..color = const Color(0xFFFFC46B)
      ..maskFilter = const MaskFilter.blur(BlurStyle.solid, 3);
    for (final dx in [-.22, .22]) {
      canvas.drawRect(
        Rect.fromCenter(
          center: Offset(hx + hw * dx, hy + hh * .45),
          width: hw * .2,
          height: hw * .2,
        ),
        win,
      );
    }
    // 雪：一直飄；搖的時候下得急
    final flake = Paint()..color = Colors.white.withValues(alpha: .85);
    final speed = 1 + shake * (1 - shake) * 8;
    for (var i = 0; i < 26; i++) {
      final x = ((i * 37) % 100) / 100 * w + math.sin(t * math.pi * 2 + i) * 4;
      final y = ((t * speed * (1 + (i % 5) * .15) + i * .37) % 1) * h;
      canvas.drawCircle(Offset(x, y), 1 + (i % 3) * .6, flake);
    }
    // 玻璃反光、邊
    canvas.drawOval(
      Rect.fromLTWH(w * .14, h * .1, w * .22, h * .34),
      Paint()
        ..shader = LinearGradient(
          colors: [
            Colors.white.withValues(alpha: .4),
            Colors.white.withValues(alpha: 0),
          ],
        ).createShader(Rect.fromLTWH(w * .14, h * .1, w * .22, h * .34)),
    );
    canvas.drawCircle(
      Offset(w / 2, h / 2),
      w / 2 - .75,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 1.5
        ..color = Colors.white.withValues(alpha: .35),
    );
  }

  @override
  bool shouldRepaint(_FlatPainter old) => old.t != t || old.shake != shake;
}
