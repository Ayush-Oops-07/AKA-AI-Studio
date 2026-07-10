import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/effects/SmoothScrollProvider";
import { CursorGlow } from "@/components/effects/CursorGlow";
import { Preloader } from "@/components/effects/Preloader";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingButton } from "@/components/shared/WhatsAppFloatingButton";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AKA AI Studio — Building Intelligent Digital Products",
  description:
    "AKA AI Studio is an AI engineering and product design studio founded by Ayush, Komal, and Anushka — building premium web, mobile, and AI-native products.",
  keywords: [
    "AI engineering company",
    "software development studio",
    "AI agents",
    "RAG",
    "LLM development",
    "cloud and DevOps",
  ],
  openGraph: {
    title: "AKA AI Studio — Building Intelligent Digital Products",
    description:
      "AI engineering, software development, and cloud partner for teams building the next generation of intelligent products.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <Preloader />
        <CursorGlow />
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
