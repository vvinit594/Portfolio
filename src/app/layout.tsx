import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vinit Vishwakarma | Full Stack Developer & AI Solutions",
  description:
    "Building SaaS Platforms, AI Automations, and Full Stack Applications for Startups and Businesses Worldwide.",
  keywords: [
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "AI Automation",
    "SaaS Development",
    "Web Development",
    "Portfolio",
    "Vinit Vishwakarma",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#0B0B0F] antialiased`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
