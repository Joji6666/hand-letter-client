import { type ReactElement } from "react";
import type { Metadata } from "next";

import { AntdRegistry } from "@ant-design/nextjs-registry";

import Navbar from "./shared/components/layout/Navbar";

import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "모바일 청첩장은 메리엠!",
  description: "모바일 청첩장 맞춤제작전문 메리엠"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>): ReactElement {
  return (
    <html lang="kr">
      <body>
        <Providers>
          <AntdRegistry>
            <Navbar />
            {children}
          </AntdRegistry>
        </Providers>
      </body>
    </html>
  );
}
