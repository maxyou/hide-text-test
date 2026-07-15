import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Basic Next.js Server Components App",
  description: "A basic Next.js project using Server Components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
