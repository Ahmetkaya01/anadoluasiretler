"use client";

import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { LogoMark } from "@/components/logo-mark";
import { getSiteData } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { normalizeLang, type Lang, withLang } from "@/lib/i18n";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lang: Lang = normalizeLang(searchParams.get("lang") ?? undefined);
  const data = getSiteData(lang);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-slateBrand-100/90 bg-white/95 py-0 shadow-soft backdrop-blur-xl"
          : "border-transparent bg-white/80 backdrop-blur-md",
      )}
    >
      <div
        className={cn(
          "border-b border-slateBrand-100/80 bg-slateBrand-50/90 transition-all",
          scrolled ? "max-h-0 overflow-hidden opacity-0" : "max-h-12 opacity-100",
        )}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <p className="text-slateBrand-600">
            {lang === "tr"
              ? "Resmi Platform • Birlik, Kültür, Dayanışma"
              : "Official Platform • Unity, Culture, Solidarity"}
          </p>
          <Link
            href={withLang("/iletisim", lang)}
            className="inline-flex items-center gap-1.5 font-semibold text-primary-700 transition hover:text-primary-800"
          >
            <Phone className="h-3.5 w-3.5" />
            {lang === "tr" ? "İletişime Geç" : "Get in Touch"}
          </Link>
        </div>
      </div>

      <div
        className={cn(
          "mx-auto flex w-full max-w-7xl items-center justify-between px-6 transition-all",
          scrolled ? "py-3" : "py-4",
        )}
      >
        <Link
          href={withLang("/", lang)}
          className="flex items-center gap-3 pr-2"
        >
          <LogoMark className="h-11 w-11 shrink-0" />
          <div className="space-y-0.5">
            <p className="font-serif text-xl font-bold leading-tight tracking-wide text-slateBrand-900 md:text-2xl">
              {data.brand.name}
            </p>
            <p className="text-[10px] uppercase tracking-[0.22em] text-primary-700 md:text-xs">
              {data.brand.motto}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 text-sm font-medium lg:flex">
          {data.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={withLang(item.href, lang)}
                className={cn(
                  "relative rounded-lg px-3 py-2 transition-colors",
                  active
                    ? "bg-primary-50 text-primary-800"
                    : "text-slateBrand-700 hover:bg-slateBrand-50 hover:text-primary-700",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href={`${pathname}?lang=tr`}
            className={cn(
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              lang === "tr"
                ? "border-primary-700 bg-primary-700 text-white"
                : "border-slateBrand-200 text-slateBrand-700 hover:border-primary-300",
            )}
          >
            TR
          </Link>
          <Link
            href={`${pathname}?lang=en`}
            className={cn(
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              lang === "en"
                ? "border-primary-700 bg-primary-700 text-white"
                : "border-slateBrand-200 text-slateBrand-700 hover:border-primary-300",
            )}
          >
            EN
          </Link>
        </div>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          className="rounded-xl border border-slateBrand-200 p-2.5 lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          <Menu className="h-5 w-5 text-slateBrand-700" />
        </button>
      </div>

      <div
        className={cn(
          "grid overflow-hidden border-t border-slateBrand-100 bg-white px-6 transition-all lg:hidden",
          open ? "grid-rows-[1fr] py-4" : "grid-rows-[0fr] py-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-1 text-sm font-medium text-slateBrand-700">
            {data.nav.map((item) => (
              <Link
                key={item.href}
                href={withLang(item.href, lang)}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2.5",
                  pathname === item.href && "bg-primary-700 text-white",
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex items-center gap-2 border-t border-slateBrand-100 pt-3">
              <Link
                href={`${pathname}?lang=tr`}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs font-semibold",
                  lang === "tr" && "border-primary-700 bg-primary-700 text-white",
                )}
              >
                TR
              </Link>
              <Link
                href={`${pathname}?lang=en`}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs font-semibold",
                  lang === "en" && "border-primary-700 bg-primary-700 text-white",
                )}
              >
                EN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
