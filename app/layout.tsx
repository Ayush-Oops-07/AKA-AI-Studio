import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
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

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AKA AI Studio",
  url: "https://www.akaaistudio.in",
  description: PAGE_META.home.description,
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.akaaistudio.in/work?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

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
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "AKA AI Studio — Websites and Apps for Local Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_META.home.title,
    description: PAGE_META.home.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "google-site-verification-token",
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        {/* WebSite and LocalBusiness JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSON_LD) }}
        />
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
