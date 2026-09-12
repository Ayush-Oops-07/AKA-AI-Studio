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
  title: "AKA AI Studio — Premier AI Engineering & Software Design Studio India",
  description:
    "AKA AI Studio is a premier AI engineering and software design studio founded by Ayush, Kumari Abhilasha, and Adarsh — building high-performance web platforms, mobile apps, and AI systems for ambitious businesses in Bihar, India, and globally.",
  keywords: [
    "AI engineering studio India",
    "web development Bihar",
    "Next.js developers India",
    "software development studio Thawe Gopalganj",
    "AI agents",
    "RAG systems",
    "CBSE school website development",
    "retail website development India",
    "cloud and DevOps India",
  ],
  openGraph: {
    title: "AKA AI Studio — Building Intelligent Digital Products",
    description:
      "AI engineering, web development, and cloud partner for businesses building the next generation of digital products in India.",
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
