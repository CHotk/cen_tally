import 'package:cen_tally/data/cloud/tally_sync.dart';
import 'package:cen_tally/data/repositories/tally_repository.dart';
import 'package:cen_tally/data/storage/key_value_store.dart';
import 'package:flutter_test/flutter_test.dart';

/// 兩台裝置透過同一個雲端（記憶體假的）同步（2026-10-20：使用者沒空測，
/// 要仔細檢查）。規則跟 Lume 一樣：先下載、合併、再上傳；同一筆後改的贏；
/// 刪除留墓碑、刪除永遠贏；異動紀錄聯集。
void main() {
  late Map<String, List<Map<String, dynamic>>> cloud;
  late _Device a;
  late _Device b;

  setUp(() {
    TallyRepository.deviceLabel = () => '測試機';
    TallyRepository.onLocalChange = null;
    cloud = {};
    a = _Device(cloud);
    b = _Device(cloud);
  });

  Future<void> later() => Future<void>.delayed(const Duration(milliseconds: 3));

  test('A 新增 → A 同步 → B 同步，B 看得到；B 改 → 兩邊同步，A 是改過的', () async {
    final book = await a.repo.addBook('記帳');
    final it = await a.repo.addItem(
      bookId: book.id,
      plus: false,
      amount: 100,
      note: '午餐',
      at: DateTime(2026, 10, 20),
    );
    final r1 = await a.sync.run('測試');
    expect(r1!.ok, isTrue);
    expect(r1.uploaded, greaterThan(0));

    final r2 = await b.sync.run('測試');
    expect(r2!.downloaded, greaterThan(0));
    expect((await b.repo.items()).single.note, '午餐');
    expect(await b.repo.balance(), -100);

    await later();
    final onB = (await b.repo.items()).single;
    await b.repo.editItem(
      onB,
      plus: false,
      amount: 150,
      note: '午餐＋飲料',
      at: onB.at,
    );
    await b.sync.run('測試');
    await a.sync.run('測試');
    final onA = (await a.repo.items()).single;
    expect(onA.id, it.id);
    expect(onA.amount, 150);
    expect(onA.note, '午餐＋飲料');
    expect(onA.createdAt, it.createdAt);
    expect(onA.edited, isTrue);
  });

  test('兩台同時改同一筆：後改的贏', () async {
    final book = await a.repo.addBook('記帳');
    await a.repo.addItem(
      bookId: book.id,
      plus: true,
      amount: 10,
      note: '',
      at: DateTime(2026, 10, 1),
    );
    await a.sync.run('測試');
    await b.sync.run('測試');

    final x = (await a.repo.items()).single;
    await a.repo.editItem(x, plus: true, amount: 20, note: 'A', at: x.at);
    await later();
    final y = (await b.repo.items()).single;
    await b.repo.editItem(y, plus: true, amount: 30, note: 'B', at: y.at);

    await a.sync.run('測試');
    await b.sync.run('測試');
    await a.sync.run('測試');
    for (final d in [a, b]) {
      expect((await d.repo.items()).single.note, 'B');
      expect(await d.repo.balance(), 30);
    }
  });

  test('刪除留墓碑：另一台後來又改了，刪除還是贏，兩邊都不見', () async {
    final book = await a.repo.addBook('記帳');
    await a.repo.addItem(
      bookId: book.id,
      plus: true,
      amount: 10,
      note: '',
      at: DateTime(2026, 10, 1),
    );
    await a.sync.run('測試');
    await b.sync.run('測試');

    await a.repo.deleteItem((await a.repo.items()).single);
    await later();
    final y = (await b.repo.items()).single;
    await b.repo.editItem(y, plus: true, amount: 99, note: '改', at: y.at);

    await a.sync.run('測試');
    await b.sync.run('測試');
    await a.sync.run('測試');
    for (final d in [a, b]) {
      expect(await d.repo.items(), isEmpty);
      // 墓碑還在（才擋得住還沒同步的舊版本）。
      expect((await d.repo.itemsForUpload()).single.deletedAt, isNotNull);
    }
    expect(
      cloud['items.json']!.single['deletedAt'],
      isNotNull,
      reason: '雲端也是墓碑',
    );
  });

  test('兩台都離線各記各的，連上後兩邊都有全部；兩本自動建的帳也合在一起算', () async {
    final ba = await a.repo.addBook('記帳');
    final bb = await b.repo.addBook('記帳');
    await a.repo.addItem(
      bookId: ba.id,
      plus: true,
      amount: 500,
      note: 'A 收入',
      at: DateTime(2026, 10, 2),
    );
    await b.repo.addItem(
      bookId: bb.id,
      plus: false,
      amount: 200,
      note: 'B 支出',
      at: DateTime(2026, 10, 3),
    );
    await a.sync.run('測試');
    await b.sync.run('測試');
    await a.sync.run('測試');
    for (final d in [a, b]) {
      expect((await d.repo.items()).map((i) => i.note), ['A 收入', 'B 支出']);
      expect(await d.repo.balance(), 300);
      expect((await d.repo.books()).length, 2);
    }
  });

  test('異動紀錄兩台聯集、一筆不少；再同步一次沒有任何異動', () async {
    final ba = await a.repo.addBook('記帳');
    await a.repo.addItem(
      bookId: ba.id,
      plus: true,
      amount: 1,
      note: '',
      at: DateTime(2026, 10, 1),
    );
    final bb = await b.repo.addBook('記帳');
    await b.repo.addItem(
      bookId: bb.id,
      plus: true,
      amount: 2,
      note: '',
      at: DateTime(2026, 10, 1),
    );
    await a.sync.run('測試');
    await b.sync.run('測試');
    await a.sync.run('測試');
    expect((await a.repo.events()).length, 4);
    expect((await b.repo.events()).length, 4);
    final again = await a.sync.run('測試');
    expect((again!.downloaded, again.uploaded), (0, 0));
  });

  test('同步中又改了資料：跑完會再補同步一次，改的有送上去', () async {
    final book = await a.repo.addBook('記帳');
    final first = a.sync.run('測試');
    await a.repo.addItem(
      bookId: book.id,
      plus: true,
      amount: 7,
      note: '同步中加的',
      at: DateTime(2026, 10, 1),
    );
    final second = a.sync.run('測試'); // 正在跑 → 排隊
    await first;
    await second;
    await Future<void>.delayed(const Duration(milliseconds: 20));
    expect(
      cloud['items.json']!.map((j) => j['note']),
      contains('同步中加的'),
    );
  });

  test('雲端連不上：記一筆失敗、狀態是失敗、本機資料不動；網路好了再同步就上去', () async {
    final book = await a.repo.addBook('記帳');
    await a.repo.addItem(
      bookId: book.id,
      plus: true,
      amount: 5,
      note: '離線記的',
      at: DateTime(2026, 10, 1),
    );
    a.offline = true;
    final r = await a.sync.run('測試');
    expect(r!.ok, isFalse);
    expect(a.sync.state.value, TallySyncState.failed);
    expect((await a.repo.items()).single.note, '離線記的');

    a.offline = false;
    final r2 = await a.sync.run('測試');
    expect(r2!.ok, isTrue);
    expect(cloud['items.json']!.single['note'], '離線記的');
    final logs = await a.sync.logs();
    expect(logs.length, 2); // 失敗那筆也留著
  });

  test('改了資料立刻同步', () async {
    TallyRepository.onLocalChange = a.sync.schedule;
    final book = await a.repo.addBook('記帳');
    await a.repo.addItem(
      bookId: book.id,
      plus: true,
      amount: 3,
      note: '自動',
      at: DateTime(2026, 10, 1),
    );
    await Future<void>.delayed(const Duration(milliseconds: 50));
    expect(cloud['items.json']!.single['note'], '自動');
  });

  test('金鑰到期判斷、存取來回不變', () async {
    final store = _MemoryStore();
    final s = TallySync(store, TallyRepository(store));
    expect(await s.config(), isNull);
    final c = TallySyncConfig(
      endpoint: TallySyncConfig.defaultEndpoint,
      bucket: TallySyncConfig.defaultBucket,
      accessKeyId: 'id',
      secretAccessKey: 'secret',
      expiresAt: DateTime.now().add(const Duration(days: 90)),
    );
    await s.saveConfig(c);
    final back = (await s.config())!;
    expect(back.accessKeyId, 'id');
    expect(back.expired, isFalse);
    await s.saveConfig(
      TallySyncConfig(
        endpoint: c.endpoint,
        bucket: c.bucket,
        accessKeyId: 'id',
        secretAccessKey: 'secret',
        expiresAt: DateTime.now().subtract(const Duration(days: 1)),
      ),
    );
    expect((await s.config())!.expired, isTrue);
  });
}

/// 一台裝置：自己的本機儲存＋接到共用的假雲端。
class _Device {
  _Device(Map<String, List<Map<String, dynamic>>> cloud) {
    final store = _MemoryStore();
    repo = TallyRepository(store);
    sync = TallySync(store, repo)
      ..getForTest = (file) async {
        if (offline) throw Exception('Load failed');
        final v = cloud[file];
        return v == null ? null : [for (final m in v) Map.of(m)];
      }
      ..putForTest = (file, data) async {
        if (offline) throw Exception('Load failed');
        cloud[file] = [for (final m in data) Map.of(m)];
      };
  }

  late final TallyRepository repo;
  late final TallySync sync;
  bool offline = false;
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
