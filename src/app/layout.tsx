import type { Metadata } from "next";
import "./globals.css";
import { Header } from "~/entities/header/ui";

export const metadata: Metadata = {
  title: "Kis Portfolio",
  description: "Kis Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="flex flex-col h-screen p-5 justify-flex-start">
        <Header />
        {children}
      </body>
    </html>
  );
}
