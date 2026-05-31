import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "포트폴리오 | 김원태",
  description: "PM · Service Planner Portfolio",
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
