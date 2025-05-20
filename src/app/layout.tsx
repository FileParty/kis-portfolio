import type { Metadata } from "next";
import "./globals.css";

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
      <body className="flex flex-col justify-flex-start h-screen p-5">
        {children}
      </body>
    </html>
  );
}
