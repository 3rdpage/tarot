import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "장타로 단타로",
  description: "'장타로 단타로'에서는 매일 제공되는 주식 및 코인 시장 분석을 타로 카드를 통해 예측합니다. 투자의 흐름을 타로로 확인해보세요.",
  keywords: "타로 점, 주식 예측, 코인 타로, 투자 분석, 금융 타로 서비스, 매일 타로 점",
  authors: [{ name: "세번째페이지", url: "https://github.com/3rdpage" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
