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
  const TallyPetLayer({
    super.key,
    required this.platforms,
    this.rows,
    this.globe,
    this.cheers,
  });

  /// 可以站的東西（卡片、按鈕列）的 key，上緣就是地板。
  final List<GlobalKey> Function() platforms;

  /// 其中明細那幾筆（進場時開門、跑進來、降落傘要落在哪一筆用）。
  final List<GlobalKey> Function()? rows;

  /// 雪球那一格（「從雪球跳出來」進場用）。
  final GlobalKey? globe;

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

  /// 動作之間停多久的倍數（2026-10-20 使用者：切換有點快，慢到 1.4 倍）。
  static const _pace = 1.4;

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
    '馨岑快記帳！',
    '要早點睡喔',
    '嘿嘿',
  ];

  void _chat() => _say(_lines[_rng.nextInt(_lines.length)], 2.4);

  @override
  void initState() {
    super.initState();
    if (!petSupported) return; // 測試、非網頁：沒有吉祥物
    widget.cheers?.addListener(_cheer);
    // 出場：等 3D 那邊說準備好了（模型編譯好、畫完第一幀），再多等一下下才淡入、
    // 從上面掉到卡片上（2026-10-20 使用者：剛開時東西還在載入，進場會卡，要準備好
    // 才出場）。3D 一直沒回報（太久）也照樣出場。
    var started = false;
    void start() {
      if (started || !mounted) return;
      started = true;
      _unready?.call();
      Timer(const Duration(milliseconds: 700), () {
        if (!mounted) return;
        (_ticker = createTicker(_tick)).start();
        WidgetsBinding.instance.addPostFrameCallback((_) {
          if (mounted) _enter();
        });
      });
    }

    _unready = listenPetReady(start);
    Timer(const Duration(seconds: 12), start);
  }

  void Function()? _unready;

  // ── 進場（2026-10-20 使用者：六種隨機，設計稿同一套） ──
  // 出場固定說這句（2026-10-21 使用者要求，愛心是粉紅色）。
  void _greet() => _say('馨岑妳好啊♡', 2.8);

  /// 照 [clock] 排的待辦（不用 Timer：關頁面就跟著 ticker 一起停）。
  final _todo = <(double, void Function())>[];
  void _later(double sec, void Function() fn) => _todo.add((clock + sec, fn));

  double _pop = 1, _popT = -1; // 從小彈出來
  double? doorX, doorY, doorAt; // 門
  double? chuteGoneAt, chuteGoneX, chuteGoneY; // 降落傘落地後飛走
  GlobalKey? landOn;
  double? puffX, puffY, puffAt; // 魔法煙霧

  List<_Plat> _rows() {
    final keys = widget.rows?.call().toSet() ?? const {};
    return _plats().where((p) => keys.contains(p.key)).toList()
      ..sort((a, b) => a.y.compareTo(b.y));
  }

  void _show() => setState(() => _visible = true);

  void _popIn() {
    _pop = 0;
    _popT = 0;
  }

  void _enter() {
    const kinds = ['drop', 'door', 'chute', 'globe', 'run', 'poof'];
    // 網址加 ?ent=door 之類可以指定（看效果、測試用）
    final forced = Uri.base.queryParameters['ent'];
    var kind = kinds.contains(forced)
        ? forced!
        : kinds[_rng.nextInt(kinds.length)];
    final rows = _rows();
    final row = rows.isNotEmpty ? rows.first : null;
    final g = widget.globe?.currentContext?.findRenderObject() as RenderBox?;
    final me = context.findRenderObject() as RenderBox?;
    if (row == null && kind != 'chute') kind = 'drop';
    if (kind == 'globe' && (g == null || me == null || !g.hasSize)) {
      kind = 'drop';
    }
    x = y = -300;
    plat = null;
    switch (kind) {
      case 'door':
        doorX = row!.x1 + 60;
        doorY = row.y;
        doorAt = clock;
        _setMode('enter');
        _later(.95, () {
          _show();
          x = doorX!;
          y = row.y;
          plat = row.key;
          face = 1;
          target = x + 64;
          speed = 34;
          _setMode('walk');
        });
        _later(2.9, _greet);
      case 'chute':
        // 落在第二或第三筆（使用者：第一張太近，飄一下就落地看不到）
        final land = rows.isEmpty
            ? null
            : rows[math.min(rows.length - 1, 1 + _rng.nextInt(2))];
        landOn = land?.key;
        x = land != null
            ? (land.x1 + land.x2) / 2 + (_rng.nextDouble() - .5) * 60
            : 160;
        y = 95;
        _show();
        _setMode('chute');
      case 'globe':
        final o = me!.globalToLocal(g!.localToGlobal(Offset.zero));
        x = o.dx + g.size.width / 2;
        y = o.dy + g.size.height * .55;
        _popIn();
        _show();
        _setMode('happy', vx0: -130, vy0: -560);
        _later(1.6, _greet);
      case 'run':
        x = -30;
        y = row!.y;
        plat = row.key;
        face = 1;
        target = row.x1 + 90;
        speed = 150;
        _show();
        _setMode('enterRun');
      case 'poof':
        puffX = row!.x1 + 120;
        puffY = row.y - 22;
        puffAt = clock;
        _later(.16, () {
          x = puffX!;
          y = row.y;
          plat = row.key;
          _popIn();
          _show();
          _setMode('idle', until0: 1.2 * _pace);
          _say('登登！', 1);
        });
        _later(1.5, _greet);
      default: // drop：原本的，淡入、從上面掉到卡片上
        x = 90 + _rng.nextDouble() * 140;
        y = 110;
        _show();
        _setMode('fall', vx0: 30, vy0: 0);
        _later(.9, _greet);
    }
  }

  @override
  void dispose() {
    _unready?.call();
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
    sendPetPose({
      'm': m == 'enterRun' ? 'run' : m,
      'f': face,
      'mv': 0,
      'sp': speed,
    });
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
    if (_todo.isNotEmpty) {
      final due = _todo.where((e) => e.$1 <= clock).toList();
      _todo.removeWhere((e) => e.$1 <= clock);
      for (final e in due) {
        e.$2();
      }
    }
    if (_popT >= 0) {
      _popT += dt;
      final k = math.min(1.0, _popT / .35);
      _pop = k < 1 ? 1.25 * math.sin(k * math.pi / 2) - .25 * k : 1;
      if (k >= 1) _popT = -1;
    }
    if (doorAt != null && clock - doorAt! > 3.3) doorAt = null;
    if (puffAt != null && clock - puffAt! > .7) puffAt = null;
    if (chuteGoneAt != null && clock - chuteGoneAt! > .9) chuteGoneAt = null;

    if (plat != null) {
      final p = _platOf(plat, all);
      if (p == null) {
        plat = null;
        _setMode('fall', vx0: 0, vy0: 0);
      } else {
        y = p.y;
        if (mode != 'enterRun') x = x.clamp(p.x1, p.x2);
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
      case 'enter':
        break;
      case 'enterRun':
        if (step()) {
          _setMode('idle', until0: 1.5);
          _greet();
        }
      case 'chute': // 撐降落傘：慢慢晃著飄下來，落在指定那一筆
        final prevY = y;
        y += 85 * dt;
        x += math.sin(clock * 1.8) * 26 * dt;
        for (final p in all) {
          if ((landOn == null || p.key == landOn) &&
              x >= p.x1 &&
              x <= p.x2 &&
              prevY <= p.y &&
              y >= p.y) {
            y = p.y;
            plat = p.key;
            landOn = null;
            chuteGoneAt = clock;
            chuteGoneX = x;
            chuteGoneY = y - _s * 1.7;
            _setMode('idle', until0: 1.5);
            sendPetPose({'land': 1});
            _greet();
            break;
          }
        }
        // 要落的那筆捲走了：哪一層都可以
        if (mode == 'chute' && landOn != null && _platOf(landOn, all) == null) {
          landOn = null;
        }
        if (y > size.height + 40) _setMode('fall', vx0: 0, vy0: 0);
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
    sendPetPose({'x': x, 'y': y, 's': _s * math.max(.001, _pop)});
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
        // 下面每一個都一直在、只切換看不看得見（2026-10-20 修：落地時影子才「加進來」，
        // 3D 窗格在畫面元件裡的位置就往後挪一格，網頁版會整個重貼一次，看起來閃一下）。
        Positioned(
          left: x - 13,
          top: (ladderTop ?? 0) - 6,
          width: 26,
          height: ladderTop != null && ladderBot != null
              ? (ladderBot! - ladderTop! + 6).clamp(0, 2000).toDouble()
              : 0,
          child: const IgnorePointer(
            child: CustomPaint(painter: _LadderPainter()),
          ),
        ),
        Positioned(
          left: x - _s * 1.1,
          top: (shadowY ?? -100) - 4,
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
        _doorWidget(),
        _chuteWidget(),
        _puffWidget(),
        // 3D 樣子：窗格蓋滿整個畫面、固定不動（2026-10-20 修：原本每一幀把窗格搬到
        // 牠的位置，Flutter 網頁版搬動嵌入窗格會閃、捏著跟手也不順），每一幀把牠的
        // 位置傳進去，3D 自己畫在那裡。
        Positioned.fill(
          child: IgnorePointer(
            child: AnimatedOpacity(
              opacity: _visible ? 1 : 0.01,
              duration: const Duration(milliseconds: 500),
              child: buildPetView(),
            ),
          ),
        ),
        Positioned(
          left: x - 60,
          top: y - _s * 2.9,
          width: 120,
          child: IgnorePointer(
            child: Stack(
              children: [
                // 先把所有台詞的字排版一次（不畫出來）：網頁版的中文字型是用到哪些字才去
                // 下載，某句第一次說時有幾個字還沒下載就會先空白（2026-10-21 使用者回報），
                // 開頁時先排一次，字就提前下載好了。
                const Offstage(child: Text(_allSaid, style: _bubbleStyle)),
                _bubbleText(),
              ],
            ),
          ),
        ),
        // 接手指的透明格子（只有牠那麼大）
        Positioned(
          left: _visible ? x - _s : -999,
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
                  // 輕輕一拋不要飛太遠（2026-10-20 使用者回報）：打五五折，很輕的
                  // 動作當成只是放開。
                  v = (b.$1 - a.$1) / dt * .55;
                  if (v.distance < 260) v = Offset.zero;
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

  // ── 進場道具 ──
  Widget _doorWidget() {
    final at = doorAt;
    if (at == null) return const Positioned(left: 0, top: 0, child: SizedBox());
    final d = clock - at;
    final grow = Curves.easeOutBack.transform((d / .32).clamp(0.0, 1.0));
    final open = d < 2.3
        ? Curves.easeOut.transform(((d - .55) / .55).clamp(0.0, 1.0))
        : 1 - Curves.easeIn.transform(((d - 2.3) / .55).clamp(0.0, 1.0));
    final alpha = 1 - ((d - 2.9) / .3).clamp(0.0, 1.0);
    return Positioned(
      left: doorX! - 22,
      top: doorY! - 55,
      width: 44,
      height: 55,
      child: IgnorePointer(
        child: Opacity(
          opacity: alpha,
          child: Transform(
            alignment: Alignment.bottomCenter,
            transform: Matrix4.diagonal3Values(1, grow, 1),
            child: Stack(
              children: [
                Positioned.fill(
                  child: DecoratedBox(
                    decoration: BoxDecoration(
                      color: const Color(0xFF140B06),
                      borderRadius: const BorderRadius.vertical(
                        top: Radius.circular(20),
                      ),
                      border: Border.all(
                        color: const Color(0xFF6B4226),
                        width: 3,
                      ),
                    ),
                  ),
                ),
                Positioned(
                  left: 4,
                  right: 4,
                  top: 3,
                  bottom: 0,
                  child: Transform(
                    alignment: Alignment.centerLeft,
                    transform: Matrix4.identity()
                      ..setEntry(3, 2, .004)
                      ..rotateY(-1.83 * open),
                    child: const _DoorPanel(),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _chuteWidget() {
    double? cx, cy;
    var alpha = 1.0, rot = 0.0;
    if (mode == 'chute' && _visible) {
      cx = x;
      cy = y - _s * 1.7;
    } else if (chuteGoneAt != null) {
      final k = Curves.easeIn.transform(
        ((clock - chuteGoneAt!) / .9).clamp(0.0, 1.0),
      );
      cx = chuteGoneX;
      cy = chuteGoneY! - k * 90;
      alpha = 1 - k;
      rot = k * .44;
    }
    if (cx == null) {
      return const Positioned(left: 0, top: 0, child: SizedBox());
    }
    return Positioned(
      left: cx - 35,
      top: cy! - 64,
      width: 70,
      height: 64,
      child: IgnorePointer(
        child: Opacity(
          opacity: alpha,
          child: Transform.rotate(
            angle: rot,
            child: const CustomPaint(painter: _ChutePainter()),
          ),
        ),
      ),
    );
  }

  Widget _puffWidget() {
    final at = puffAt;
    if (at == null) return const Positioned(left: 0, top: 0, child: SizedBox());
    final k = Curves.easeOut.transform(((clock - at) / .65).clamp(0.0, 1.0));
    return Positioned(
      left: puffX! - 60,
      top: puffY! - 50,
      width: 120,
      height: 100,
      child: IgnorePointer(child: CustomPaint(painter: _PuffPainter(k))),
    );
  }

  static const _bubbleStyle = TextStyle(
    fontSize: 12.5,
    fontWeight: FontWeight.w800,
    color: Colors.white,
    shadows: [Shadow(blurRadius: 3, color: Colors.black54)],
  );

  /// 牠會說的每一句（字型預先下載用）：台詞＋各動作的話。新增 _say 的話要加進來。
  static const _allSaid =
      '馨岑妳好啊♡馨岑今天過得怎麼樣？馨岑辛苦了～鑫鑫腸買了沒？今天有好好吃飯嗎？'
      '馨岑快記帳！要早點睡喔嘿嘿♪到了！哇啊——嗯…睡飽了嘿咻！放開我～！'
      '爬上去看看！登登！記好了！頭好暈…zZ';

  /// 對話泡泡：「♡」用粉紅色（打招呼那句）。
  Widget _bubbleText() {
    final s = mode == 'sleep' && !(bubble != null && clock < bubbleUntil)
        ? '${'z' * (1 + (t * 1.5).floor() % 3)}Z'
        : (bubble != null && clock < bubbleUntil ? bubble! : '');
    final parts = s.split('♡');
    return Text.rich(
      TextSpan(
        children: [
          for (var i = 0; i < parts.length; i++) ...[
            if (i > 0)
              const TextSpan(
                text: '♡',
                style: TextStyle(color: Color(0xFFFF6FA5)),
              ),
            TextSpan(text: parts[i]),
          ],
        ],
      ),
      textAlign: TextAlign.center,
      style: _bubbleStyle,
    );
  }

  Offset _localOf(Offset global) {
    final me = context.findRenderObject() as RenderBox?;
    return me == null ? global : me.globalToLocal(global);
  }
}

/// 進場的門板（木紋＋門把）。
class _DoorPanel extends StatelessWidget {
  const _DoorPanel();

  @override
  Widget build(BuildContext context) => DecoratedBox(
    decoration: BoxDecoration(
      borderRadius: const BorderRadius.vertical(top: Radius.circular(17)),
      gradient: const LinearGradient(
        colors: [Color(0xFFB07A45), Color(0xFFA06A38)],
        stops: [.5, .5],
        tileMode: TileMode.repeated,
        end: Alignment(-.8, 0),
      ),
      border: Border.all(color: Colors.black26, width: 2),
    ),
    child: const Align(
      alignment: Alignment(.6, .1),
      child: SizedBox(
        width: 5,
        height: 5,
        child: DecoratedBox(
          decoration: BoxDecoration(
            color: Color(0xFFF2C46D),
            shape: BoxShape.circle,
          ),
        ),
      ),
    ),
  );
}

/// 降落傘：粉白條紋的傘面＋三條繩子（底邊中間＝牠頭上）。
class _ChutePainter extends CustomPainter {
  const _ChutePainter();

  @override
  void paint(Canvas canvas, Size size) {
    final w = size.width;
    final canopy = Path()
      ..moveTo(0, 34)
      ..arcToPoint(Offset(w, 34), radius: Radius.elliptical(w / 2, 34))
      ..close();
    canvas.save();
    canvas.clipPath(canopy);
    for (var i = 0; i < 5; i++) {
      canvas.drawRect(
        Rect.fromLTWH(i * 14.0, 0, 14, 34),
        Paint()
          ..color = i.isEven
              ? const Color(0xFFFF9FBE)
              : const Color(0xFFFFF4F7),
      );
    }
    canvas.restore();
    final line = Paint()
      ..color = const Color(0xFF3A2A33)
      ..strokeWidth = 1.6
      ..style = PaintingStyle.stroke;
    canvas.drawPath(canopy, line..strokeWidth = 2);
    line.strokeWidth = 1.4;
    canvas.drawLine(const Offset(4, 34), Offset(w / 2 - 5, size.height), line);
    canvas.drawLine(Offset(w - 4, 34), Offset(w / 2 + 5, size.height), line);
    canvas.drawLine(Offset(w / 2, 34), Offset(w / 2, size.height), line);
  }

  @override
  bool shouldRepaint(covariant CustomPainter old) => false;
}

/// 魔法煙霧：七團白煙從中間往外散開、變淡。
class _PuffPainter extends CustomPainter {
  const _PuffPainter(this.k);
  final double k;

  @override
  void paint(Canvas canvas, Size size) {
    final c = size.center(Offset.zero);
    final p = Paint()..color = Colors.white.withValues(alpha: .9 * (1 - k));
    for (var i = 0; i < 7; i++) {
      final a = i / 7 * math.pi * 2;
      canvas.drawCircle(
        c + Offset(math.cos(a) * 34 * k, math.sin(a) * 24 * k),
        11 * (.3 + 1.2 * k),
        p,
      );
    }
  }

  @override
  bool shouldRepaint(_PuffPainter old) => old.k != k;
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
