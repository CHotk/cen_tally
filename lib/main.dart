import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import 'app/providers.dart';
import 'app/theme/app_theme.dart';
import 'data/storage/platform_store.dart';
import 'features/tally/tally_pages.dart';

/// 記帳（2026-10-20 從 Lume 拆出來的獨立 App）：打開就是一本帳，只有
/// ＋ 收入／− 支出，匯出 PDF。沒有其他功能，所以開起來快。
Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  final store = await openPlatformStore();
  runApp(
    ProviderScope(
      overrides: [keyValueStoreProvider.overrideWithValue(store)],
      child: const TallyApp(),
    ),
  );
}

/// 首頁 `#/`：記帳本身。異動紀錄 `#/log` 沒有任何按鈕連過去，只有知道
/// 網址的人進得去（使用者不想讓朋友知道有紀錄異動）。
final _router = GoRouter(
  routes: [
    GoRoute(path: '/', builder: (_, _) => const TallyEntryPage(solo: true)),
    GoRoute(path: '/log', builder: (_, _) => const TallyLogPage()),
  ],
  errorBuilder: (_, _) => const TallyEntryPage(solo: true),
);

class TallyApp extends StatelessWidget {
  const TallyApp({super.key});

  @override
  Widget build(BuildContext context) => MaterialApp.router(
    title: '記帳',
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
