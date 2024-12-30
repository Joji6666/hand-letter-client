import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "모바일 청첩장은 메리엠!",
  description: "모바일 청첩장 맞춤제작전문 메리엠"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body>{children}</body>
    </html>
  );
}
