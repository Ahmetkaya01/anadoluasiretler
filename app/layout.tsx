import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${manrope.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slateBrand-50 text-slateBrand-900">
        <header className="sticky top-0 z-50 border-b border-slateBrand-100/70 bg-white/90 backdrop-blur">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
            <div>
              <p className="font-serif text-2xl font-bold tracking-wide text-slateBrand-900">
                Anadolu Aşiretler Federasyonu
              </p>
              <p className="text-xs uppercase tracking-[0.24em] text-primary-700">
                Birlik - Kültür - Dayanışma
              </p>
            </div>
            <nav className="hidden items-center gap-6 text-sm font-medium text-slateBrand-700 md:flex">
              <a href="#" className="transition-colors hover:text-primary-700">
                Ana Sayfa
              </a>
              <a href="#" className="transition-colors hover:text-primary-700">
                Kurumsal
              </a>
              <a href="#" className="transition-colors hover:text-primary-700">
                Yönetim Kurulu
              </a>
              <a href="#" className="transition-colors hover:text-primary-700">
                Haberler
              </a>
              <a href="#" className="transition-colors hover:text-primary-700">
                İletişim
              </a>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-slateBrand-100 bg-white">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 py-8 text-sm text-slateBrand-600 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Anadolu Aşiretler Federasyonu</p>
            <p>Kurumsal kimlik ve toplumsal dayanışma odaklı resmi platform.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
