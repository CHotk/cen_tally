import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../app/providers.dart';
import '../../app/theme/colors.dart';
import '../../data/cloud/tally_sync.dart';
import '../../shared/widgets/ambient_background.dart';
import '../../shared/widgets/app_notice.dart';
import '../../shared/widgets/glass_card.dart';
import 'tally_pages.dart';

String _two(int v) => v.toString().padLeft(2, '0');
String _ymd(DateTime d) => '${d.year}/${_two(d.month)}/${_two(d.day)}';
String _full(DateTime d) =>
    '${_ymd(d)} ${_two(d.hour)}:${_two(d.minute)}:${_two(d.second)}';

/// 首頁：還沒貼金鑰、或金鑰到期了，先貼金鑰；好了才進記帳。
class TallyGate extends ConsumerStatefulWidget {
  const TallyGate({super.key});

  @override
  ConsumerState<TallyGate> createState() => _TallyGateState();
}

class _TallyGateState extends ConsumerState<TallyGate> {
  TallySyncConfig? _config;
  bool _loaded = false;

  @override
  void initState() {
    super.initState();
    _check();
  }

  Future<void> _check() async {
    final c = await ref.read(tallySyncProvider).config();
    if (!mounted) return;
    setState(() {
      _config = c;
      _loaded = true;
    });
    if (c != null && !c.expired) {
      ref.read(tallySyncProvider).run('開啟 App');
    }
  }

  @override
  Widget build(BuildContext context) {
    if (!_loaded) {
      return const Scaffold(
        body: Center(child: CircularProgressIndicator.adaptive()),
      );
    }
    final c = _config;
    if (c == null || c.expired) {
      return TallyKeyPage(expired: c != null, onDone: _check);
    }
    return const TallyEntryPage(solo: true);
  }
}

/// 貼金鑰（第一次開、或到期了）。端點跟儲存桶預先填好，只要貼兩把金鑰；
/// 存之前先實際連一次，確定讀寫都可以。存在這台裝置，預設三個月後到期。
class TallyKeyPage extends ConsumerStatefulWidget {
  const TallyKeyPage({super.key, this.expired = false, this.onDone});

  final bool expired;
  final VoidCallback? onDone;

  @override
  ConsumerState<TallyKeyPage> createState() => _TallyKeyPageState();
}

class _TallyKeyPageState extends ConsumerState<TallyKeyPage> {
  final _id = TextEditingController();
  final _secret = TextEditingController();
  final _endpoint = TextEditingController(
    text: TallySyncConfig.defaultEndpoint,
  );
  final _bucket = TextEditingController(text: TallySyncConfig.defaultBucket);
  int _months = 3;
  bool _busy = false;
  bool _advanced = false;
  String? _error;

  @override
  void dispose() {
    for (final c in [_id, _secret, _endpoint, _bucket]) {
      c.dispose();
    }
    super.dispose();
  }

  Future<void> _save() async {
    final now = DateTime.now();
    final c = TallySyncConfig(
      endpoint: _endpoint.text.trim(),
      bucket: _bucket.text.trim(),
      accessKeyId: _id.text.trim(),
      secretAccessKey: _secret.text.trim(),
      expiresAt: DateTime(now.year, now.month + _months, now.day, now.hour),
    );
    if (c.accessKeyId.isEmpty || c.secretAccessKey.isEmpty) {
      setState(() => _error = '兩把金鑰都要貼');
      return;
    }
    setState(() {
      _busy = true;
      _error = null;
    });
    final sync = ref.read(tallySyncProvider);
    try {
      await sync.test(c);
    } catch (e) {
      if (mounted) {
        setState(() {
          _busy = false;
          _error = '連不上：$e';
        });
      }
      return;
    }
    await sync.saveConfig(c);
    final r = await sync.run('貼金鑰');
    if (!mounted) return;
    setState(() => _busy = false);
    showAppNotice(
      context,
      r == null || !r.ok
          ? '金鑰存好了，但第一次同步失敗，稍後會再試'
          : '☁️ 已連上雲端，拿到 ${r.downloaded} 筆',
      isError: r == null || !r.ok,
    );
    widget.onDone?.call();
  }

  InputDecoration _dec(String label) => InputDecoration(
    labelText: label,
    labelStyle: const TextStyle(color: AppColors.ink3, fontSize: 15),
    filled: true,
    fillColor: Colors.white.withValues(alpha: 0.07),
    contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 16),
    border: OutlineInputBorder(
      borderRadius: BorderRadius.circular(14),
      borderSide: BorderSide.none,
    ),
    focusedBorder: OutlineInputBorder(
      borderRadius: BorderRadius.circular(14),
      borderSide: const BorderSide(color: tallyAccent, width: 1.2),
    ),
  );

  Widget _field(TextEditingController c, String label, {bool secret = false}) =>
      Padding(
        padding: const EdgeInsets.only(bottom: 12),
        child: TextField(
          controller: c,
          obscureText: secret,
          autocorrect: false,
          enableSuggestions: false,
          style: const TextStyle(color: AppColors.ink, fontSize: 16),
          decoration: _dec(label),
        ),
      );

  @override
  Widget build(BuildContext context) => Scaffold(
    body: AmbientBackground(
      child: SafeArea(
        child: ListView(
          padding: const EdgeInsets.fromLTRB(20, 32, 20, 32),
          children: [
            const Icon(Icons.cloud_outlined, size: 44, color: tallyAccent),
            const SizedBox(height: 12),
            Text(
              widget.expired ? '金鑰到期了，請重新貼上' : '先連上雲端',
              textAlign: TextAlign.center,
              style: const TextStyle(
                fontSize: 22,
                fontWeight: FontWeight.w800,
                color: AppColors.ink,
              ),
            ),
            const SizedBox(height: 6),
            const Text(
              '記的帳會存在雲端，換手機、刪掉重裝都拿得回來',
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: 15, color: AppColors.ink2),
            ),
            const SizedBox(height: 24),
            GlassCard(
              padding: const EdgeInsets.fromLTRB(16, 18, 16, 6),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  _field(_id, 'Access Key ID'),
                  _field(_secret, 'Secret Access Key', secret: true),
                  Row(
                    children: [
                      const Text(
                        '這台裝置記住',
                        style: TextStyle(fontSize: 15, color: AppColors.ink2),
                      ),
                      const Spacer(),
                      DropdownButton<int>(
                        value: _months,
                        dropdownColor: const Color(0xFF1C1C28),
                        underline: const SizedBox.shrink(),
                        style: const TextStyle(
                          fontSize: 15,
                          color: AppColors.ink,
                        ),
                        items: [
                          for (final m in [1, 3, 6, 12])
                            DropdownMenuItem(value: m, child: Text('$m 個月')),
                        ],
                        onChanged: (v) => setState(() => _months = v ?? 3),
                      ),
                    ],
                  ),
                  TextButton(
                    onPressed: () => setState(() => _advanced = !_advanced),
                    style: TextButton.styleFrom(
                      foregroundColor: AppColors.ink3,
                    ),
                    child: Text(_advanced ? '收起端點設定' : '端點、儲存桶（已經填好）'),
                  ),
                  if (_advanced) ...[
                    _field(_endpoint, '端點（Endpoint）'),
                    _field(_bucket, '儲存桶'),
                  ],
                ],
              ),
            ),
            if (_error != null)
              Padding(
                padding: const EdgeInsets.only(top: 12),
                child: Text(
                  _error!,
                  style: const TextStyle(fontSize: 14, color: AppColors.bad),
                ),
              ),
            const SizedBox(height: 20),
            FilledButton(
              onPressed: _busy ? null : _save,
              style: FilledButton.styleFrom(
                backgroundColor: tallyAccent,
                foregroundColor: Colors.black,
                padding: const EdgeInsets.symmetric(vertical: 17),
                textStyle: const TextStyle(
                  fontSize: 17,
                  fontWeight: FontWeight.w800,
                ),
              ),
              child: Text(_busy ? '連線中…' : '連上雲端'),
            ),
          ],
        ),
      ),
    ),
  );
}

/// `#/sync`（沒有按鈕連過來）：金鑰到期日、換金鑰、每一次同步的紀錄。
class TallySyncPage extends ConsumerStatefulWidget {
  const TallySyncPage({super.key});

  @override
  ConsumerState<TallySyncPage> createState() => _TallySyncPageState();
}

class _TallySyncPageState extends ConsumerState<TallySyncPage> {
  TallySyncConfig? _config;
  List<TallySyncLog> _logs = const [];
  bool _editing = false;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final s = ref.read(tallySyncProvider);
    final c = await s.config();
    final l = await s.logs();
    if (mounted) {
      setState(() {
        _config = c;
        _logs = l;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    if (_editing || _config == null) {
      return TallyKeyPage(
        expired: _config?.expired ?? false,
        onDone: () {
          setState(() => _editing = false);
          _load();
        },
      );
    }
    final c = _config!;
    return Scaffold(
      body: AmbientBackground(
        child: SafeArea(
          child: ListView(
            padding: const EdgeInsets.fromLTRB(16, 16, 16, 32),
            children: [
              const Text(
                '雲端同步',
                style: TextStyle(
                  fontSize: 21,
                  fontWeight: FontWeight.w800,
                  color: AppColors.ink,
                ),
              ),
              const SizedBox(height: 14),
              GlassCard(
                padding: const EdgeInsets.all(16),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      '儲存桶：${c.bucket}',
                      style: const TextStyle(color: AppColors.ink),
                    ),
                    const SizedBox(height: 4),
                    Text(
                      'Access Key ID：${c.accessKeyId.length > 6 ? '${c.accessKeyId.substring(0, 6)}…' : c.accessKeyId}',
                      style: const TextStyle(color: AppColors.ink2),
                    ),
                    const SizedBox(height: 4),
                    Text(
                      '這台裝置記到 ${_ymd(c.expiresAt)}${c.expired ? '（已到期）' : ''}',
                      style: TextStyle(
                        color: c.expired ? AppColors.bad : AppColors.ink2,
                      ),
                    ),
                    const SizedBox(height: 12),
                    Row(
                      children: [
                        Expanded(
                          child: OutlinedButton(
                            onPressed: () => setState(() => _editing = true),
                            child: const Text('換金鑰'),
                          ),
                        ),
                        const SizedBox(width: 10),
                        Expanded(
                          child: FilledButton(
                            onPressed: () async {
                              await ref.read(tallySyncProvider).run('按立即同步');
                              _load();
                            },
                            style: FilledButton.styleFrom(
                              backgroundColor: tallyAccent,
                              foregroundColor: Colors.black,
                            ),
                            child: const Text('立即同步'),
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(4, 18, 4, 8),
                child: Text(
                  '同步紀錄・共 ${_logs.length} 筆（一筆都不刪）',
                  style: const TextStyle(fontSize: 14, color: AppColors.ink2),
                ),
              ),
              GlassCard(
                padding: const EdgeInsets.symmetric(vertical: 4),
                child: Column(
                  children: [
                    if (_logs.isEmpty)
                      const Padding(
                        padding: EdgeInsets.all(16),
                        child: Text(
                          '還沒有同步過',
                          style: TextStyle(color: AppColors.ink3),
                        ),
                      ),
                    for (final l in _logs)
                      ListTile(
                        leading: Icon(
                          l.ok
                              ? Icons.check_circle_rounded
                              : Icons.error_rounded,
                          color: l.ok ? AppColors.ok : AppColors.bad,
                        ),
                        title: Text(
                          l.ok
                              ? '${l.trigger}・拿到 ${l.downloaded}、送出 ${l.uploaded}'
                              : '${l.trigger}・失敗',
                          style: const TextStyle(color: AppColors.ink),
                        ),
                        subtitle: Text(
                          [
                            _full(l.at),
                            l.device,
                            if (l.error != null) l.error!,
                          ].join('\n'),
                          style: const TextStyle(
                            fontSize: 12.5,
                            color: AppColors.ink3,
                          ),
                        ),
                      ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
