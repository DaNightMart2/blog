import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Night's Blog",
  description: "Night's blog of random (and mostly useless) investigation",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
