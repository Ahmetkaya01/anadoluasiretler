"use client";

import Link from "next/link";
import { Menu, Sparkles } from "lucide-react";
import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { getSiteData } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { normalizeLang, type Lang, withLang } from "@/lib/i18n";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lang: Lang = normalizeLang(searchParams.get("lang") ?? undefined);
  const data = getSiteData(lang);

  return (
    <header className="sticky top-0 z-50 border-b border-slateBrand-100/70 bg-white/75 backdrop-blur-xl">
      <div className="border-b border-slateBrand-100/80 bg-slateBrand-50/80">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <p className="text-slateBrand-700">
            {lang === "tr"
              ? "Resmi Platform • Birlik, Kültür, Dayanışma"
              : "Official Platform • Unity, Culture, Solidarity"}
          </p>
          <Link
            href={withLang("/iletisim", lang)}
            className="inline-flex items-center gap-1 font-semibold text-primary-700"
          >
            <Sparkles className="h-3.5 w-3.5" />
            {lang === "tr" ? "İletişime Geç" : "Get in Touch"}
          </Link>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <Link href={withLang("/", lang)} className="space-y-1 pr-2">
          <p className="font-serif text-2xl font-bold tracking-wide text-slateBrand-900">
            {data.brand.name}
          </p>
          <p className="text-xs uppercase tracking-[0.24em] text-primary-700">
            {data.brand.motto}
          </p>
        </Link>

        <nav className="hidden items-center gap-4 text-sm font-medium md:flex">
          {data.nav.map((item) => (
            <Link
              key={item.href}
              href={withLang(item.href, lang)}
              className={cn(
                "relative px-1 py-2 transition-colors",
                pathname === item.href
                  ? "text-primary-700"
                  : "text-slateBrand-700 hover:text-primary-700",
              )}
            >
              {item.label}
              <span
                className={cn(
                  "absolute -bottom-0.5 left-0 h-0.5 w-full origin-left rounded-full bg-primary-700 transition-transform",
                  pathname === item.href ? "scale-x-100" : "scale-x-0",
                )}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href={`${pathname}?lang=tr`}
            className={cn(
              "rounded-full border px-3 py-1 text-xs font-semibold",
              lang === "tr"
                ? "border-primary-700 bg-primary-700 text-white"
                : "border-slateBrand-200 text-slateBrand-700",
            )}
          >
            TR
          </Link>
          <Link
            href={`${pathname}?lang=en`}
            className={cn(
              "rounded-full border px-3 py-1 text-xs font-semibold",
              lang === "en"
                ? "border-primary-700 bg-primary-700 text-white"
                : "border-slateBrand-200 text-slateBrand-700",
            )}
          >
            EN
          </Link>
        </div>

        <button
          type="button"
          aria-label="Menu"
          className="rounded-full border border-slateBrand-200 p-2 md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          <Menu className="h-5 w-5 text-slateBrand-700" />
        </button>
      </div>

      <div
        className={cn(
          "grid overflow-hidden border-t border-slateBrand-100 bg-white px-6 transition-all md:hidden",
          open ? "grid-rows-[1fr] py-3" : "grid-rows-[0fr] py-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-3 text-sm font-medium text-slateBrand-700">
            {data.nav.map((item) => (
              <Link
                key={item.href}
                href={withLang(item.href, lang)}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-2 py-1",
                  pathname === item.href && "bg-primary-700 text-white",
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-1 flex items-center gap-2">
              <Link
                href={`${pathname}?lang=tr`}
                className="rounded-full border px-3 py-1 text-xs"
              >
                TR
              </Link>
              <Link
                href={`${pathname}?lang=en`}
                className="rounded-full border px-3 py-1 text-xs"
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
