import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

import Navigation from "@/components/navigation/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Igor ADANDE - Développeur Fullstack",
  description: "Portfolio de Igor ADANDE, développeur fullstack passionné par l'innovation et la création d'applications web modernes.",
  keywords: ["développeur", "fullstack", "react", "next.js", "typescript", "portfolio"],
  authors: [{ name: "Igor ADANDE" }],
  creator: "Igor ADANDE",
  publisher: "Igor ADANDE",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Igor ADANDE - Développeur Fullstack",
    description: "Portfolio de Igor ADANDE, développeur fullstack passionné par l'innovation et la création d'applications web modernes.",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    siteName: "Igor ADANDE Portfolio",
    images: [
      {
        url: '/images/me.jpg',
        width: 1200,
        height: 630,
        alt: 'Igor ADANDE - Développeur Fullstack',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Igor ADANDE - Développeur Fullstack",
    description: "Portfolio de Igor ADANDE, développeur fullstack passionné par l'innovation et la création d'applications web modernes.",
    images: ['/images/me.jpg'],
  },
  manifest: '/manifest.json',
  themeColor: '#8447ff',
  colorScheme: 'light dark',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Igor ADANDE Portfolio',
  },
};


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html  suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#8447ff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Igor ADANDE Portfolio" />
        
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
          <main id="main-content">
            
            <Navigation/>
            {children}
          </main>
      </body>
    </html>
  );
}
