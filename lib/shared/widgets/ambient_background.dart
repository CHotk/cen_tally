import 'package:flutter/material.dart';

import '../../app/theme/colors.dart';

/// 整個 App 的背景：「夢幻星塵夜色」圖（2026-10-20 使用者換的；之前是設計稿
/// design-history/2026-10-20_記帳背景設計.html 選的星夜柔光散景）。暗底、粉金藍三團淡淡的柔光，
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
          'assets/bg/stardust_night.jpg',
          fit: BoxFit.cover,
          gaplessPlayback: true,
          errorBuilder: (_, _, _) => const SizedBox.shrink(),
        ),
        child,
      ],
    ),
  );
}
