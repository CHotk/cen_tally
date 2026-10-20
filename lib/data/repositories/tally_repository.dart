import 'dart:convert';
import 'dart:math';

import '../../domain/models/tally.dart';
import '../export/device_label.dart';
import '../storage/key_value_store.dart';

/// 簡單記帳的存檔（2026-10-19）：帳本、每一筆、異動紀錄各一個清單，整包
/// JSON 讀寫；帳本跟每一筆刪除用墓碑標記（照 id 合併、比 updatedAt、刪除
/// 永遠贏），異動紀錄只增不刪，跨裝置聯集。獨立一份，不跟其他記錄共用。
class TallyRepository {
  TallyRepository(this._store);

  static const booksKey = 'tally.books.v1';
  static const itemsKey = 'tally.items.v1';
  static const eventsKey = 'tally.events.v1';

  final KeyValueStore _store;
  static final _rng = Random.secure();

  /// 測試換掉用；正式是瀏覽器／系統標籤。
  static String Function() deviceLabel = currentDeviceLabel;

  /// 有人新增／修改／刪除／匯出就通知（每個動作都會寫異動紀錄，在那裡呼叫），
  /// 給自動同步用。
  static void Function()? onLocalChange;

  static String newId() =>
      List.generate(32, (_) => _rng.nextInt(16).toRadixString(16)).join();

  Future<List<T>> _read<T>(
    String key,
    T Function(Map<String, dynamic>) fromJson,
  ) async {
    final raw = await _store.read(key);
    if (raw == null) return <T>[];
    return (jsonDecode(raw) as List)
        .cast<Map<String, dynamic>>()
        .map(fromJson)
        .toList();
  }

  Future<void> _write<T>(
    String key,
    List<T> all,
    Map<String, dynamic> Function(T) toJson,
  ) => _store.write(key, jsonEncode([for (final e in all) toJson(e)]));

  // ── 給同步用：連刪除標記都要看得到 ──────────────────────────
  Future<List<TallyBook>> booksForUpload() =>
      _read(booksKey, TallyBook.fromJson);
  Future<List<TallyItem>> itemsForUpload() =>
      _read(itemsKey, TallyItem.fromJson);
  Future<List<TallyEvent>> eventsForUpload() =>
      _read(eventsKey, TallyEvent.fromJson);

  // ── 給畫面用 ──────────────────────────────────────────────
  Future<List<TallyBook>> books() async =>
      (await booksForUpload()).where((b) => b.deletedAt == null).toList()
        ..sort((a, b) => b.updatedAt.compareTo(a.updatedAt));

  /// 一個帳本的每一筆，舊的在前（算累計結餘用）。
  Future<List<TallyItem>> items([String? bookId]) async =>
      (await itemsForUpload())
          .where(
            (i) =>
                i.deletedAt == null && (bookId == null || i.bookId == bookId),
          )
          .toList()
        ..sort((a, b) {
          final c = a.at.compareTo(b.at);
          return c != 0 ? c : a.createdAt.compareTo(b.createdAt);
        });

  /// 異動紀錄，新的在前。
  Future<List<TallyEvent>> events([String? bookId]) async =>
      (await eventsForUpload())
          .where((e) => bookId == null || e.bookId == bookId)
          .toList()
        ..sort((a, b) => b.at.compareTo(a.at));

  /// 現在的結餘（＋ 減 −）。沒有帳本概念：兩台裝置各自自動建的帳本同步後
  /// 會有兩本，算的是全部。[bookId] 留著只是沿用舊呼叫。
  Future<int> balance([String? bookId]) async {
    var sum = 0;
    for (final i in await items()) {
      sum += i.signed;
    }
    return sum;
  }

  Future<String> _bookName(String bookId) async =>
      (await booksForUpload()).where((b) => b.id == bookId).firstOrNull?.name ??
      '';

  Future<void> _log(
    TallyAction action,
    String bookId,
    String text, {
    String? bookName,
    String? itemId,
    Map<String, dynamic>? before,
    Map<String, dynamic>? after,
    int? balanceBefore,
    int? balanceAfter,
    Map<String, dynamic>? extra,
  }) async {
    final all = await eventsForUpload();
    all.add(
      TallyEvent(
        id: newId(),
        at: DateTime.now(),
        action: action,
        bookId: bookId,
        bookName: bookName ?? await _bookName(bookId),
        text: text,
        device: deviceLabel(),
        itemId: itemId,
        before: before,
        after: after,
        balanceBefore: balanceBefore,
        balanceAfter: balanceAfter,
        extra: extra,
      ),
    );
    await _write(eventsKey, all, (e) => e.toJson());
    onLocalChange?.call();
  }

  Future<void> _putBook(TallyBook b) async {
    final all = await booksForUpload();
    final i = all.indexWhere((x) => x.id == b.id);
    i < 0 ? all.add(b) : all[i] = b;
    await _write(booksKey, all, (e) => e.toJson());
  }

  Future<void> _putItem(TallyItem it) async {
    final all = await itemsForUpload();
    final i = all.indexWhere((x) => x.id == it.id);
    i < 0 ? all.add(it) : all[i] = it;
    await _write(itemsKey, all, (e) => e.toJson());
  }

  Future<TallyBook> addBook(String name) async {
    final now = DateTime.now();
    final b = TallyBook(
      id: newId(),
      name: name,
      createdAt: now,
      updatedAt: now,
    );
    await _putBook(b);
    await _log(TallyAction.bookCreate, b.id, '新增帳本「$name」', after: b.toJson());
    return b;
  }

  Future<void> renameBook(TallyBook b, String name) async {
    if (name == b.name) return;
    final nb = b.copyWith(name: name, updatedAt: DateTime.now());
    await _putBook(nb);
    await _log(
      TallyAction.bookRename,
      b.id,
      '帳本改名：「${b.name}」→「$name」',
      before: b.toJson(),
      after: nb.toJson(),
    );
  }

  Future<void> deleteBook(TallyBook b) async {
    final now = DateTime.now();
    final bal = await balance(b.id);
    final nb = b.copyWith(updatedAt: now, deletedAt: now);
    await _putBook(nb);
    await _log(
      TallyAction.bookDelete,
      b.id,
      '刪除帳本「${b.name}」（當時結餘 ${tallySigned(bal)}）',
      before: b.toJson(),
      after: nb.toJson(),
      balanceBefore: bal,
      balanceAfter: bal,
    );
  }

  Future<TallyItem> addItem({
    required String bookId,
    required bool plus,
    required int amount,
    required String note,
    required DateTime at,
  }) async {
    final now = DateTime.now();
    final it = TallyItem(
      id: newId(),
      bookId: bookId,
      plus: plus,
      amount: amount,
      note: note,
      at: at,
      createdAt: now,
      updatedAt: now,
    );
    final bal = await balance(bookId);
    await _putItem(it);
    await _log(
      TallyAction.itemCreate,
      bookId,
      '新增 ${tallyItemLabel(it)}',
      itemId: it.id,
      after: it.toJson(),
      balanceBefore: bal,
      balanceAfter: bal + it.signed,
    );
    return it;
  }

  Future<void> editItem(
    TallyItem old, {
    required bool plus,
    required int amount,
    required String note,
    required DateTime at,
  }) async {
    final it = old.copyWith(
      plus: plus,
      amount: amount,
      note: note,
      at: at,
      updatedAt: DateTime.now(),
    );
    if (old.plus == plus &&
        old.amount == amount &&
        old.note == note &&
        old.at == at) {
      return;
    }
    final bal = await balance(old.bookId);
    await _putItem(it);
    await _log(
      TallyAction.itemUpdate,
      old.bookId,
      '修改 ${tallyItemLabel(old)} → ${tallyItemLabel(it)}',
      itemId: it.id,
      before: old.toJson(),
      after: it.toJson(),
      balanceBefore: bal,
      balanceAfter: bal - old.signed + it.signed,
    );
  }

  Future<void> deleteItem(TallyItem it) async {
    final now = DateTime.now();
    final bal = await balance(it.bookId);
    final dead = it.copyWith(updatedAt: now, deletedAt: now);
    await _putItem(dead);
    await _log(
      TallyAction.itemDelete,
      it.bookId,
      '刪除 ${tallyItemLabel(it)}',
      itemId: it.id,
      before: it.toJson(),
      after: dead.toJson(),
      balanceBefore: bal,
      balanceAfter: bal - it.signed,
    );
  }

  /// 匯出 PDF 也記一筆（2026-10-19 使用者要求）：檔名、圖上有幾筆、當時結餘、
  /// 怎麼存的（分享／下載）、有沒有成功。
  Future<void> logExport(
    String bookId, {
    required String filename,
    required int itemCount,
    required int balance,
    required bool ok,
    int? pages,
    String? error,
  }) => _log(
    TallyAction.exportPdf,
    bookId,
    ok
        ? '匯出 PDF $filename（$itemCount 筆，結餘 ${tallySigned(balance)}）'
        : '匯出 PDF 失敗：${error ?? '這個裝置不能存檔'}',
    balanceBefore: balance,
    balanceAfter: balance,
    extra: {
      'filename': filename,
      'itemCount': itemCount,
      'pages': ?pages,
      'ok': ok,
      'error': ?error,
    },
  );

  // ── 雲端同步（2026-10-20）：帳本、每一筆、異動紀錄各一個檔 ──────────

  /// 合併規則：照 id；刪掉的永遠贏（墓碑），其他比 updatedAt 後改的贏。
  /// 異動紀錄沒有修改、沒有刪除，等於照 id 聯集。
  static List<T> mergeRecords<T>(
    List<T> local,
    List<T> cloud, {
    required String Function(T) idOf,
    required DateTime Function(T) updatedAtOf,
    required DateTime? Function(T) deletedAtOf,
  }) {
    final out = {for (final e in local) idOf(e): e};
    for (final c in cloud) {
      final m = out[idOf(c)];
      if (m == null) {
        out[idOf(c)] = c;
        continue;
      }
      final md = deletedAtOf(m), cd = deletedAtOf(c);
      if (md != null && cd == null) continue;
      if (cd != null && md == null) {
        out[idOf(c)] = c;
        continue;
      }
      if (updatedAtOf(c).isAfter(updatedAtOf(m))) out[idOf(c)] = c;
    }
    return out.values.toList();
  }

  /// 跟雲端同步一次：每個檔先下載、跟本機合併，本機少了就存回本機，雲端
  /// 少了就上傳。[get] 回傳雲端那個檔的內容（沒有就 null），[put] 上傳。
  /// 回傳「從雲端拿到幾筆」「送上雲端幾筆」（新增或內容不一樣的都算）。
  Future<({int downloaded, int uploaded})> syncWith({
    required Future<List<Map<String, dynamic>>?> Function(String file) get,
    required Future<void> Function(String file, List<Map<String, dynamic>>) put,
  }) async {
    var down = 0, up = 0;
    Future<void> one<T>(
      String file,
      String key,
      T Function(Map<String, dynamic>) fromJson,
      Map<String, dynamic> Function(T) toJson,
      String Function(T) idOf,
      DateTime Function(T) updatedAtOf,
      DateTime? Function(T) deletedAtOf,
    ) async {
      final local = await _read(key, fromJson);
      final cloud = [for (final j in await get(file) ?? const []) fromJson(j)];
      final merged = mergeRecords(
        local,
        cloud,
        idOf: idOf,
        updatedAtOf: updatedAtOf,
        deletedAtOf: deletedAtOf,
      );
      int diff(List<T> from) {
        final have = {for (final e in from) idOf(e): jsonEncode(toJson(e))};
        return merged
            .where((e) => have[idOf(e)] != jsonEncode(toJson(e)))
            .length;
      }

      final d = diff(local), u = diff(cloud);
      if (d > 0) await _write(key, merged, toJson);
      if (u > 0) await put(file, [for (final e in merged) toJson(e)]);
      down += d;
      up += u;
    }

    await one<TallyBook>(
      'books.json',
      booksKey,
      TallyBook.fromJson,
      (e) => e.toJson(),
      (e) => e.id,
      (e) => e.updatedAt,
      (e) => e.deletedAt,
    );
    await one<TallyItem>(
      'items.json',
      itemsKey,
      TallyItem.fromJson,
      (e) => e.toJson(),
      (e) => e.id,
      (e) => e.updatedAt,
      (e) => e.deletedAt,
    );
    await one<TallyEvent>(
      'events.json',
      eventsKey,
      TallyEvent.fromJson,
      (e) => e.toJson(),
      (e) => e.id,
      (e) => e.at,
      (_) => null,
    );
    return (downloaded: down, uploaded: up);
  }
}
