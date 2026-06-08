import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
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
  metadataBase: new URL("https://www.codewithvini.tech"),
  alternates: {
    canonical: "https://www.codewithvini.tech",
  },
  openGraph: {
    title: "Vinit Vishwakarma | Full Stack Developer & AI Solutions",
    description:
      "Building SaaS Platforms, AI Automations, and Full Stack Applications for Startups and Businesses Worldwide.",
    url: "https://www.codewithvini.tech",
    siteName: "CodeWithVini",
    images: [
      {
        url: "https://www.codewithvini.tech/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodeWithVini Portfolio",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinit Vishwakarma | Full Stack Developer & AI Solutions",
    description:
      "Building SaaS Platforms, AI Automations, and Full Stack Applications for Startups and Businesses Worldwide.",
    images: ["https://www.codewithvini.tech/og-image.png"],
  },
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
        <GoogleAnalytics gaId="G-054E7M38PT" />
      </body>
    </html>
  );
}
