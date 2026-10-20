import 'package:flutter/material.dart';

import '../../app/theme/colors.dart';

/// 讀資料時的畫面：logo＋「我的記帳」＋轉圈。跟 web/index.html 的 HTML
/// 載入畫面長得一樣（手機直立時整組往上移 14% 高），Flutter 接手時看起來
/// 是同一個畫面，不會跳。
class TallyLoading extends StatelessWidget {
  const TallyLoading({super.key});

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.sizeOf(context);
    return Scaffold(
      backgroundColor: AppColors.bg,
      body: Padding(
        padding: EdgeInsets.only(
          bottom: size.width <= 600 ? size.height * 0.14 : 0,
        ),
        child: Center(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Image.asset(
                'assets/logo/logo_240.png',
                width: 120,
                errorBuilder: (_, _, _) => const SizedBox(height: 100),
              ),
              const SizedBox(height: 16),
              const Text(
                '我的記帳',
                style: TextStyle(
                  fontSize: 26,
                  fontWeight: FontWeight.w700,
                  letterSpacing: 1,
                  color: AppColors.ink,
                ),
              ),
              const SizedBox(height: 26),
              const Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  SizedBox(
                    width: 14,
                    height: 14,
                    child: CircularProgressIndicator(
                      strokeWidth: 2,
                      color: Color(0x99F2F1F7),
                      backgroundColor: Color(0x26F2F1F7),
                    ),
                  ),
                  SizedBox(width: 8),
                  Text(
                    '載入中…',
                    style: TextStyle(fontSize: 12.5, color: AppColors.ink3),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
