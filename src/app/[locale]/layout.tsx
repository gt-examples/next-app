import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GTProvider } from "gt-next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js + gt-next i18n Example",
  description: "A Next.js app internationalized with gt-next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GTProvider>{children}</GTProvider>
      </body>
    </html>
  );
}
