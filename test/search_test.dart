import 'package:cen_tally/app/providers.dart';
import 'package:cen_tally/data/repositories/tally_repository.dart';
import 'package:cen_tally/data/storage/key_value_store.dart';
import 'package:cen_tally/domain/models/tally.dart';
import 'package:cen_tally/features/tally/tally_pages.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';

/// 頂部搜尋框（2026-11-09 使用者）：備註、金額、日期、豪／岑支出都能搜。
void main() {
  setUp(() => TallyRepository.deviceLabel = () => '測試機');

  TallyItem item({
    bool plus = true,
    int amount = 1200,
    String note = '晚餐 鼎泰豐',
    DateTime? at,
    bool hidden = false,
  }) => TallyItem(
    id: 'i',
    bookId: 'b',
    plus: plus,
    amount: amount,
    note: note,
    at: at ?? DateTime(2026, 11, 2, 19, 30),
    createdAt: DateTime(2026, 11, 2, 19, 30),
    updatedAt: DateTime(2026, 11, 2, 19, 30),
    hidden: hidden,
  );

  test('搜尋：備註、金額（有沒有逗號、NT\$ 都行）、日期、豪／岑支出，空白隔開要全部符合', () {
    final i = item();
    expect(tallyMatches(i, ''), isTrue);
    expect(tallyMatches(i, '鼎泰'), isTrue);
    expect(tallyMatches(i, '1200'), isTrue);
    expect(tallyMatches(i, '1,200'), isTrue);
    expect(tallyMatches(i, r'NT$1,200'), isTrue);
    expect(tallyMatches(i, '12'), isTrue); // 金額的一部分也算
    expect(tallyMatches(i, '11/2'), isTrue);
    expect(tallyMatches(i, '2026/11/02'), isTrue);
    expect(tallyMatches(i, '11月'), isTrue);
    expect(tallyMatches(i, '豪支出'), isTrue);
    expect(tallyMatches(i, '岑支出'), isFalse);
    expect(tallyMatches(i, '鼎泰 1200 11/2'), isTrue);
    expect(tallyMatches(i, '鼎泰 999'), isFalse);
    expect(tallyMatches(i, '壽司'), isFalse);
    // 全形也行。
    expect(tallyMatches(i, '１２００'), isTrue);
    // 岑支出。
    expect(tallyMatches(item(plus: false), '岑支出'), isTrue);
    // 這一筆之後的結餘。
    expect(tallyMatches(i, '結餘 3000', after: 3000), isTrue);
    expect(tallyMatches(i, '3000', after: 3000), isTrue);
    // 遮蔽的備註搜得到、也能用「遮蔽」找出來。
    expect(tallyMatches(item(hidden: true), '遮蔽'), isTrue);
    expect(tallyMatches(item(), '遮蔽'), isFalse);
  });

  test('改過的痕跡：一般頁搜得到「改過」，獨立分享頁不搜', () {
    final edited = TallyItem(
      id: 'i',
      bookId: 'b',
      plus: true,
      amount: 100,
      note: 'x',
      at: DateTime(2026, 11, 2),
      createdAt: DateTime(2026, 11, 2, 10),
      updatedAt: DateTime(2026, 11, 3, 10),
    );
    expect(tallyMatches(edited, '改過'), isTrue);
    expect(tallyMatches(edited, '改過', solo: true), isFalse);
  });

  test('搜尋用快取的字串，結果跟逐筆比對完全一樣（含 5000 筆的速度）', () {
    final items = [
      for (var n = 0; n < 5000; n++)
        TallyItem(
          id: 'i$n',
          bookId: 'b',
          plus: n.isEven,
          amount: 100 + n,
          note: n % 7 == 0 ? '晚餐 鼎泰豐 $n' : '早餐 $n',
          at: DateTime(2026, 1 + n % 12, 1 + n % 28, 12),
          createdAt: DateTime(2026, 1, 1),
          updatedAt: DateTime(2026, 1, 1),
          hidden: n % 50 == 0,
        ),
    ];
    var acc = 0;
    final index = [
      for (final i in items)
        (item: i, hay: tallySearchHay(i, after: acc += i.signed)),
    ];
    for (final q in ['鼎泰', '晚餐 1200', '3/1', '遮蔽', r'NT$1,100', '壽司']) {
      final terms = tallySearchTerms(q);
      acc = 0;
      final slow = [
        for (final i in items)
          if (tallyMatches(i, q, after: acc += i.signed)) i.id,
      ];
      final fast = [
        for (final e in index)
          if (terms.every(e.hay.contains)) e.item.id,
      ];
      expect(fast, slow, reason: q);
    }
    // 比對一次 5000 筆只要幾毫秒（打字每個字都這樣比一次）。
    final terms = tallySearchTerms('鼎泰 晚餐');
    final sw = Stopwatch()..start();
    for (var k = 0; k < 20; k++) {
      index.where((e) => terms.every(e.hay.contains)).length;
    }
    sw.stop();
    expect(sw.elapsedMilliseconds / 20, lessThan(30));
  });

  testWidgets('首頁頂部有搜尋框：打字只留符合的，結餘不變；清掉就回來；沒有符合會說', (t) async {
    t.view.physicalSize = const Size(400, 860);
    t.view.devicePixelRatio = 1;
    addTearDown(t.view.reset);
    final store = _MemoryStore();
    final c = ProviderContainer(
      overrides: [keyValueStoreProvider.overrideWithValue(store)],
    );
    addTearDown(c.dispose);
    final repo = c.read(tallyRepositoryProvider);
    final b = await repo.addBook('記帳');
    await repo.addItem(
      bookId: b.id,
      plus: true,
      amount: 1200,
      note: '晚餐',
      at: DateTime(2026, 11, 2, 19),
    );
    await repo.addItem(
      bookId: b.id,
      plus: false,
      amount: 300,
      note: '電影票',
      at: DateTime(2026, 11, 3, 20),
    );
    await t.pumpWidget(
      UncontrolledProviderScope(
        container: c,
        child: const MaterialApp(home: TallyEntryPage(solo: true)),
      ),
    );
    await t.pumpAndSettle();
    final box = find.byKey(const ValueKey('tallySearch'));
    expect(box, findsOneWidget);
    expect(find.text('晚餐'), findsOneWidget);
    expect(find.text('電影票'), findsOneWidget);

    // 打字不會掉焦點（一直能繼續打）。
    await t.tap(box);
    await t.enterText(box, '電');
    await t.pump(const Duration(milliseconds: 200)); // 停手 0.12 秒才套用到列表
    await t.enterText(box, '電影');
    await t.pump(const Duration(milliseconds: 200)); // 停手 0.12 秒才套用到列表
    expect(find.text('電影票'), findsOneWidget);
    expect(find.text('晚餐'), findsNothing);
    expect(find.text('找到 1 筆・點一筆看詳細'), findsOneWidget);

    // 搜金額也行。
    await t.enterText(box, '1,200');
    await t.pump(const Duration(milliseconds: 200)); // 停手 0.12 秒才套用到列表
    expect(find.text('晚餐'), findsOneWidget);
    expect(find.text('電影票'), findsNothing);

    // 沒有符合。
    await t.enterText(box, '壽司');
    await t.pump(const Duration(milliseconds: 200)); // 停手 0.12 秒才套用到列表
    expect(find.text('沒有符合的記錄'), findsOneWidget);

    // 清除。
    await t.tap(find.byTooltip('清除'));
    await t.pump();
    expect(find.text('晚餐'), findsOneWidget);
    expect(find.text('電影票'), findsOneWidget);
    expect(t.takeException(), isNull);
  });
}

class _MemoryStore implements KeyValueStore {
  final data = <String, String>{};

  @override
  Future<String?> read(String key) async => data[key];

  @override
  Future<void> write(String key, String value) async => data[key] = value;

  @override
  Future<void> remove(String key) async => data.remove(key);
}
