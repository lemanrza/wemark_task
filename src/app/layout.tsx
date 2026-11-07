import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const ttHoves = localFont({
  src: [
    {
      path: '../fonts/TTHoves-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/TTHoves-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/TTHoves-Medium.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/TTHoves-Medium.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-tt-hoves',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Wemark",
  description: "Welcome to new-gen marketing",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${ttHoves.variable} h-full antialiased`}
    >
      <body className={`${ttHoves.className} min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
