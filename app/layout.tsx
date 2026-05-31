import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "김원태 | PM · Service Planner",
  description: "IT/커머스 플랫폼 기획자 김원태 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
