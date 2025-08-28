import type { Metadata } from "next";
import {
  Hubot_Sans,
  Jura,
  Montserrat,
} from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/navigation";
import Footer from "@/components/sections/footer-section";
import { Analytics } from "@vercel/analytics/next";

const hubotSans = Hubot_Sans({
  variable: "--font-hubot-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jura = Jura({
  variable: "--font-jura",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Igor Adande - Développeur Full-Stack Freelance",
  description:
    "Portfolio professionnel d'Igor Adande, développeur full-stack spécialisé en Next.js, React et TypeScript. Basé à [Ta ville, ex. : Cotonou], je crée des applications web modernes et performantes pour PME et startups.",
  keywords: [
    "Igor Adande",
    "développeur full-stack",
    "freelance",
    "Next.js",
    "React",
    "TypeScript",
    "développeur web",
    "Cotonou",
    "portfolio développeur",
  ],
  authors: [{ name: "Igor Adande" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Igor Adande - Développeur Full-Stack Freelance",
    description:
      "Découvrez le portfolio d'Igor Adande, développeur full-stack basé à [Ta ville]. Spécialisé en Next.js et React, je transforme vos idées en applications web performantes.",
    url: "https://igoradande.vercel.app/images/me.jpg",
    siteName: "Portfolio Igor Adande",
    images: [
      {
        url: "https://igoradande.vercel.app/images/me.jpg", // Remplace par une image réelle (voir section 2.3)
        width: 1200,
        height: 630,
        alt: "Portfolio Igor Adande",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Igor Adande - Développeur Full-Stack Freelance",
    description:
      "Portfolio d'Igor Adande, développeur full-stack spécialisé en Next.js et React. Contactez-moi pour vos projets web !",
    images: ["https://igoradande.vercel.app/images/me.jpg"], // Remplace par une image réelle
  },
  icons: {
    icon: "/images/favicon.ico", // Ajoute un favicon dans public/
    apple: "/images/logo.png", // Ajoute une icône pour Apple
  },
  // PWA metadata
  manifest: "/manifest.json",
  themeColor: "#8447ff",
  colorScheme: "light dark",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Igor Portfolio",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#8447ff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Igor Portfolio" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
      </head>
      <body
        className={`${hubotSans.variable} ${jura.variable} ${montserrat.variable} antialiased`}
      >
        <Analytics />
        <Navigation />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}