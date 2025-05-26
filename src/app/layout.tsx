import type { Metadata } from "next";
import "~/assets/globals.css";
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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
