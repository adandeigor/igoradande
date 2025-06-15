import type { Metadata } from "next";
import {
  Hubot_Sans,
  Jura,
  Montserrat,
} from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/navigation";
import Footer from "@/components/sections/footer-section";
import { Analytics } from "@vercel/analytics/next"
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
  title: "Igor ADANDE",
  description: "Professional Portfolio of Igor ADANDE, a Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={` ${hubotSans.variable} ${jura.variable} ${montserrat.variable} antialiased`}
      >
        <Analytics/>
        <Navigation/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
