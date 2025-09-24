import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { RuleCMSProvider } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RuleCMS Widget Demo - Next.js",
  description: "Demonstration Next.js app showing how to integrate RuleCMS widgets using @rulecms/widget-react package",
  keywords: ["rulecms", "nextjs", "react", "widgets", "cms", "demo"],
  authors: [{ name: "RuleCMS Team" }],
  openGraph: {
    title: "RuleCMS Widget Demo - Next.js",
    description: "Learn how to integrate RuleCMS widgets into your Next.js applications",
    type: "website",
  },
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
        <RuleCMSProvider>
          {children}
        </RuleCMSProvider>
      </body>
    </html>
  );
}
