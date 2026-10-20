import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import 'app/providers.dart';
import 'app/theme/app_theme.dart';
import 'data/cloud/tally_sync.dart';
import 'data/repositories/tally_repository.dart';
import 'data/storage/platform_store.dart';
import 'features/tally/sync_pages.dart';
import 'features/tally/tally_pages.dart';
import 'shared/widgets/app_notice.dart';

/// 記帳（2026-10-20 從 Lume 拆出來的獨立 App）：打開就是一本帳，只有
/// ＋ 收入／− 支出，跨裝置同步到雲端（Cloudflare R2）。
Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  final store = await openPlatformStore();
  final container = ProviderContainer(
    overrides: [keyValueStoreProvider.overrideWithValue(store)],
  );
  // 新增／修改／刪除完自動同步（等一下，連續改只同步一次）。
  final sync = container.read(tallySyncProvider);
  TallyRepository.onLocalChange = sync.schedule;
  runApp(
    UncontrolledProviderScope(container: container, child: const TallyApp()),
  );
}

final _rootKey = GlobalKey<NavigatorState>();

/// 首頁 `#/`：沒貼金鑰先貼，好了就是記帳本身。異動紀錄 `#/log`、同步設定
/// `#/sync` 都沒有按鈕連過去，只有知道網址的人進得去（使用者不想讓朋友
/// 知道有紀錄異動）。
final _router = GoRouter(
  navigatorKey: _rootKey,
  routes: [
    GoRoute(path: '/', builder: (_, _) => const TallyGate()),
    GoRoute(path: '/log', builder: (_, _) => const TallyLogPage()),
    GoRoute(path: '/sync', builder: (_, _) => const TallySyncPage()),
  ],
  errorBuilder: (_, _) => const TallyGate(),
);

class TallyApp extends ConsumerStatefulWidget {
  const TallyApp({super.key});

  @override
  ConsumerState<TallyApp> createState() => _TallyAppState();
}

class _TallyAppState extends ConsumerState<TallyApp>
    with WidgetsBindingObserver {
  late final TallySync _sync = ref.read(tallySyncProvider);

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    _sync.completed.addListener(_notify);
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    _sync.completed.removeListener(_notify);
    super.dispose();
  }

  /// 回到 App 時拿別台的新資料；切走／關掉前把還沒傳的送上去。
  @override
  void didChangeAppLifecycleState(AppLifecycleState s) {
    if (s == AppLifecycleState.resumed) _sync.run('回到 App');
    if (s == AppLifecycleState.paused || s == AppLifecycleState.hidden) {
      _sync.run('離開 App');
    }
  }

  /// 同步完在畫面上方跳一個簡單通知（2026-10-20 使用者要求）。
  void _notify() {
    final l = _sync.completed.value;
    final overlay = _rootKey.currentState?.overlay;
    final ctx = _rootKey.currentContext;
    if (l == null || overlay == null || ctx == null) return;
    final parts = [
      if (l.downloaded > 0) '拿到 ${l.downloaded} 筆',
      if (l.uploaded > 0) '送出 ${l.uploaded} 筆',
    ];
    // 只有自己按「雲端同步」才跳（2026-10-20 使用者要求）；自動同步（開啟、
    // 回到 App、改了資料、重試）都不跳，失敗看右上角那顆變紅。
    if (l.trigger != '按雲端同步') return;
    showAppNotice(
      ctx,
      l.ok ? '☁️ 同步完成' : '雲端同步失敗，稍後自動再試',
      detail: l.ok ? (parts.isEmpty ? null : parts.join('・')) : l.error,
      isError: !l.ok,
      overlay: overlay,
      duration: const Duration(seconds: 2),
    );
  }

  @override
  Widget build(BuildContext context) => MaterialApp.router(
    title: '我的記帳',
    debugShowCheckedModeBanner: false,
    routerConfig: _router,
    locale: const Locale('zh', 'TW'),
    supportedLocales: const [Locale('zh', 'TW'), Locale('en')],
    localizationsDelegates: GlobalMaterialLocalizations.delegates,
    scrollBehavior: const MaterialScrollBehavior().copyWith(
      dragDevices: PointerDeviceKind.values.toSet(),
    ),
    theme: buildAppTheme(),
  );
}
