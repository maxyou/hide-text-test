import "./globals.css";

export const metadata = {
  title: "Hide Text Test",
  description: "A basic Next.js app using Server Components.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
