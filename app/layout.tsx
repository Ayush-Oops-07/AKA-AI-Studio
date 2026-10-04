import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingButton } from "@/components/shared/WhatsAppFloatingButton";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { BackToTop } from "@/components/ui/BackToTop";
import { PAGE_META, JSON_LD } from "@/data/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.akaaistudio.in"),
  title: PAGE_META.home.title,
  description: PAGE_META.home.description,
  keywords: [
    "website development Bihar",
    "website for local business India",
    "school website Bihar",
    "hotel website UP",
    "small business website India",
    "AKA AI Studio",
    "web developer Gopalganj",
    "web developer Varanasi",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: PAGE_META.home.title,
    description: PAGE_META.home.description,
    type: "website",
    url: "https://www.akaaistudio.in",
    siteName: "AKA AI Studio",
    locale: "en_IN",
    images: [
      {
        url: "/images/team/group-photo.png",
        width: 1200,
        height: 630,
        alt: "Adarsh, Ayush and Kumari Abhilasha, the three founders of AKA AI Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_META.home.title,
    description: PAGE_META.home.description,
    images: ["/images/team/group-photo.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&display=swap"
          rel="stylesheet"
        />
        {/* LocalBusiness JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </head>
      <body className="overflow-x-clip">
        <Navbar />
        <main className="overflow-x-clip">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
        <MobileStickyBar />
        <BackToTop />
      </body>
    </html>
  );
}
