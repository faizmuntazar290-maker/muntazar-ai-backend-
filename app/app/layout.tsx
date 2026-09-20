import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muntazar AI",
  description:
    "Ilmi • Hujja • Intizar — Islamic learning and research assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ha">
      <body>{children}</body>
    </html>
  );
}