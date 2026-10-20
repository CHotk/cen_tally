import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../data/repositories/tally_repository.dart';
import '../data/storage/key_value_store.dart';

/// 開機時在 main.dart 換成真的儲存後端（網頁是 IndexedDB）。
final keyValueStoreProvider = Provider<KeyValueStore>(
  (ref) => throw UnimplementedError('main.dart 要 override'),
);

final tallyRepositoryProvider = Provider<TallyRepository>(
  (ref) => TallyRepository(ref.watch(keyValueStoreProvider)),
);
