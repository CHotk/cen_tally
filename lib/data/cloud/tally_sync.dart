import 'dart:async';
import 'dart:convert';

import 'package:flutter/foundation.dart';

import '../export/device_label.dart';
import '../repositories/tally_repository.dart';
import '../storage/key_value_store.dart';
import 'r2_client.dart';

/// 雲端同步拿到新資料時 +1，畫面聽這個重讀。
final tallyRevision = ValueNotifier<int>(0);

/// 同步用的金鑰（2026-10-20）：只存在這台裝置，不上傳、不進異動紀錄。
/// 存的時候記下到期日，到期就要重貼（預設三個月）。
class TallySyncConfig {
  const TallySyncConfig({
    required this.endpoint,
    required this.bucket,
    required this.accessKeyId,
    required this.secretAccessKey,
    required this.expiresAt,
  });

  /// 預先填好的（Cloudflare R2 的 cen-tally 儲存桶），只要貼兩把金鑰。
  static const defaultEndpoint =
      'https://bdb55eba423134f08bbf4b695ddc52d5.r2.cloudflarestorage.com';
  static const defaultBucket = 'cen-tally';

  final String endpoint;
  final String bucket;
  final String accessKeyId;
  final String secretAccessKey;
  final DateTime expiresAt;

  bool get expired => DateTime.now().isAfter(expiresAt);

  Map<String, dynamic> toJson() => {
    'endpoint': endpoint,
    'bucket': bucket,
    'accessKeyId': accessKeyId,
    'secretAccessKey': secretAccessKey,
    'expiresAt': expiresAt.toUtc().toIso8601String(),
  };

  factory TallySyncConfig.fromJson(Map<String, dynamic> j) => TallySyncConfig(
    endpoint: j['endpoint'] as String,
    bucket: j['bucket'] as String,
    accessKeyId: j['accessKeyId'] as String,
    secretAccessKey: j['secretAccessKey'] as String,
    expiresAt: DateTime.parse(j['expiresAt'] as String).toLocal(),
  );

  R2Client client() => R2Client(
    credentials: R2Credentials(
      endpoint: endpoint,
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
    ),
    bucket: bucket,
  );
}

/// 每一次同步留一筆（成功、失敗都記），一筆都不刪。
class TallySyncLog {
  const TallySyncLog({
    required this.at,
    required this.trigger,
    required this.device,
    required this.ok,
    this.downloaded = 0,
    this.uploaded = 0,
    this.error,
  });

  final DateTime at;

  /// 怎麼開始的：開啟 App／改了資料自動／按上傳雲端／設定金鑰。
  final String trigger;
  final String device;
  final bool ok;
  final int downloaded;
  final int uploaded;
  final String? error;

  Map<String, dynamic> toJson() => {
    'at': at.toUtc().toIso8601String(),
    'trigger': trigger,
    'device': device,
    'ok': ok,
    'downloaded': downloaded,
    'uploaded': uploaded,
    'error': ?error,
  };

  factory TallySyncLog.fromJson(Map<String, dynamic> j) => TallySyncLog(
    at: DateTime.parse(j['at'] as String).toLocal(),
    trigger: j['trigger'] as String? ?? '',
    device: j['device'] as String? ?? '',
    ok: j['ok'] as bool? ?? false,
    downloaded: (j['downloaded'] as num?)?.toInt() ?? 0,
    uploaded: (j['uploaded'] as num?)?.toInt() ?? 0,
    error: j['error'] as String?,
  );
}

enum TallySyncState { idle, running, ok, failed }

/// 同步的總管：讀寫金鑰、跑同步、記紀錄、改了資料自動排一次。
class TallySync {
  TallySync(this._store, this._repo);

  static const configKey = 'cen_tally.sync.config.v1';
  static const logKey = 'cen_tally.sync.log.v1';

  final KeyValueStore _store;
  final TallyRepository _repo;

  /// 畫面上的狀態（上傳雲端按鈕轉圈／打勾／驚嘆號）。
  final state = ValueNotifier<TallySyncState>(TallySyncState.idle);

  /// 每同步完一次（成功、失敗）就換成那一筆紀錄，main.dart 聽這個在畫面
  /// 上方跳通知。
  final completed = ValueNotifier<TallySyncLog?>(null);

  /// 失敗後自動重試的等待時間：30 秒起跳、每次加倍，最多 5 分鐘。
  Duration _retryWait = const Duration(seconds: 30);
  Timer? _retry;

  /// 換掉測試用。
  @visibleForTesting
  Future<List<Map<String, dynamic>>?> Function(String file)? getForTest;
  @visibleForTesting
  Future<void> Function(String file, List<Map<String, dynamic>> data)?
  putForTest;

  Future<TallySyncConfig?> config() async {
    final raw = await _store.read(configKey);
    if (raw == null) return null;
    try {
      return TallySyncConfig.fromJson(jsonDecode(raw) as Map<String, dynamic>);
    } catch (_) {
      return null;
    }
  }

  Future<void> saveConfig(TallySyncConfig c) =>
      _store.write(configKey, jsonEncode(c.toJson()));

  Future<void> clearConfig() => _store.remove(configKey);

  /// 金鑰能不能用：先問儲存桶，再寫一個小檔再刪掉，確定讀寫都可以。
  Future<void> test(TallySyncConfig c) async {
    final client = c.client();
    await client.headBucket();
    const key = '_test.json';
    await client.putObject(
      key,
      Uint8List.fromList(utf8.encode('{"test":true}')),
    );
    await client.deleteObject(key);
  }

  Future<List<TallySyncLog>> logs() async {
    final raw = await _store.read(logKey);
    if (raw == null) return [];
    return [
      for (final j in (jsonDecode(raw) as List).cast<Map<String, dynamic>>())
        TallySyncLog.fromJson(j),
    ]..sort((a, b) => b.at.compareTo(a.at));
  }

  Future<void> _addLog(TallySyncLog e) async {
    final raw = await _store.read(logKey);
    final all = raw == null ? <dynamic>[] : jsonDecode(raw) as List;
    all.add(e.toJson());
    await _store.write(logKey, jsonEncode(all));
  }

  Future<TallySyncLog?>? _running;
  bool _again = false;
  /// 改了資料：立刻同步（2026-10-20 使用者要求：操作完可能馬上就關掉 App，
  /// 不能等）。正在同步中就排在後面補跑一次，改的一定會送上去。
  void schedule() => run('改了資料');

  /// 同步一次。正在跑就等它跑完再補跑一次。沒設金鑰或過期就什麼都不做
  /// （回傳 null）。
  Future<TallySyncLog?> run(String trigger) async {
    if (_running != null) {
      _again = true;
      return _running;
    }
    final f = _run(trigger);
    _running = f;
    try {
      return await f;
    } finally {
      _running = null;
      if (_again) {
        _again = false;
        unawaited(run(trigger));
      }
    }
  }

  Future<TallySyncLog?> _run(String trigger) async {
    final c = await config();
    final testing = getForTest != null && putForTest != null;
    if (!testing && (c == null || c.expired)) return null;
    state.value = TallySyncState.running;
    TallySyncLog log;
    try {
      final client = testing ? null : c!.client();
      final r = await _repo.syncWith(
        get:
            getForTest ??
            (file) async {
              final bytes = await client!.getObject(file);
              if (bytes == null) return null;
              return (jsonDecode(utf8.decode(bytes)) as List)
                  .cast<Map<String, dynamic>>();
            },
        put:
            putForTest ??
            (file, data) async {
              await client!.putObject(
                file,
                Uint8List.fromList(utf8.encode(jsonEncode(data))),
              );
            },
      );
      log = TallySyncLog(
        at: DateTime.now(),
        trigger: trigger,
        device: currentDeviceLabel(),
        ok: true,
        downloaded: r.downloaded,
        uploaded: r.uploaded,
      );
      if (r.downloaded > 0) tallyRevision.value++;
      state.value = TallySyncState.ok;
    } catch (e) {
      log = TallySyncLog(
        at: DateTime.now(),
        trigger: trigger,
        device: currentDeviceLabel(),
        ok: false,
        error: '$e',
      );
      state.value = TallySyncState.failed;
    }
    await _addLog(log);
    completed.value = log;
    // 失敗（多半是網路斷了）就晚一點自動再試，不用等使用者再改資料。
    _retry?.cancel();
    if (log.ok) {
      _retryWait = const Duration(seconds: 30);
    } else {
      _retry = Timer(_retryWait, () => run('自動重試'));
      final next = _retryWait * 2;
      _retryWait = next > const Duration(minutes: 5)
          ? const Duration(minutes: 5)
          : next;
    }
    return log;
  }
}
