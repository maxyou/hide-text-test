import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hide Text Test",
  description: "A basic Next.js app using Server Components.",
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
