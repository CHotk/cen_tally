import 'package:flutter/material.dart';

import '../../app/theme/colors.dart';
import '../../app/theme/spacing.dart';
import '../../app/theme/typography.dart';

/// 頁面頂部列：標題＋右邊這一頁自己的按鈕。整個 App 就是記帳本身，沒有
/// 返回鍵、功能選單、設定（從 Lume 拆出來時就是這樣要求的）。
class AppTopBar extends StatelessWidget {
  const AppTopBar({
    super.key,
    required this.title,
    this.titleIcon,
    this.titleIconColor = AppColors.accent,
    this.titleWidget,
    this.actions = const [],
    // 以下沿用 Lume 的參數名，這裡都用不到。
    this.showBack = false,
    this.showSettings = false,
    this.standalone = true,
  });

  final String title;
  final IconData? titleIcon;
  final Color titleIconColor;

  /// 有給就整個取代文字標題（首頁放 App logo）。
  final Widget? titleWidget;
  final List<Widget> actions;
  final bool showBack;
  final bool showSettings;
  final bool standalone;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        const SizedBox(width: Gap.xs + Gap.sm),
        Expanded(
          child: titleWidget != null
              ? Align(alignment: Alignment.centerLeft, child: titleWidget)
              : Row(
                  children: [
                    if (titleIcon != null) ...[
                      Icon(titleIcon, size: 19, color: titleIconColor),
                      const SizedBox(width: 6),
                    ],
                    Flexible(
                      child: Text(
                        title,
                        style: AppText.title,
                        overflow: TextOverflow.ellipsis,
                      ),
                    ),
                  ],
                ),
        ),
        for (var i = 0; i < actions.length; i++) ...[
          if (i > 0) const SizedBox(width: 6),
          actions[i],
        ],
      ],
    );
  }
}
