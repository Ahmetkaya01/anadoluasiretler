import type { Metadata } from "next";
import { Suspense } from "react";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin-ext"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Anadolu Aşiretler Federasyonu",
  description:
    "Anadolu Aşiretler Federasyonu resmi web sitesi: kurumsal bilgiler, yönetim, haberler ve iletişim.",
  metadataBase: new URL("http://anadoluasiretlerfederasyonu.com"),
  openGraph: {
    title: "Anadolu Asiretler Federasyonu",
    description:
      "Birlik, kultur ve dayanisma odakli kurumsal federasyon platformu.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Anadolu Asiretler Federasyonu",
    url: "http://anadoluasiretlerfederasyonu.com",
    description:
      "Birlik, kultur ve dayanisma odakli kurumsal federasyon platformu.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      areaServed: "TR",
    },
  };

  return (
    <html
      lang="tr"
      className={`${manrope.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slateBrand-50 text-slateBrand-900 selection:bg-primary-700/20">
        <Suspense fallback={<div className="h-20 border-b border-slateBrand-100/70" />}>
          <SiteHeader />
        </Suspense>
        <main className="flex-1">{children}</main>
        <Suspense fallback={<div className="h-16 border-t border-slateBrand-100" />}>
          <SiteFooter />
        </Suspense>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
