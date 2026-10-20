import 'package:flutter/material.dart';

import '../../app/theme/colors.dart';

/// 整個 App 的背景：「星夜柔光散景」圖（2026-10-20 使用者從設計稿
/// design-history/2026-10-20_記帳背景設計.html 選的）。粉、金、綠三團柔光，
/// 中間乾淨，毛玻璃卡片疊上去看得出邊緣的亮線。圖還沒出來前先是深色底。
/// （原本是程式畫的四團色塊，從 Lume 搬過來的那版。）
class AmbientBackground extends StatelessWidget {
  const AmbientBackground({super.key, required this.child});

  final Widget child;

  @override
  Widget build(BuildContext context) => DecoratedBox(
    decoration: const BoxDecoration(color: AppColors.bg),
    child: Stack(
      fit: StackFit.expand,
      children: [
        Image.asset(
          'assets/bg/starry_bokeh.jpg',
          fit: BoxFit.cover,
          gaplessPlayback: true,
          errorBuilder: (_, _, _) => const SizedBox.shrink(),
        ),
        child,
      ],
    ),
  );
}
