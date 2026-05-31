"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { LogoMark } from "@/components/logo-mark";
import { normalizeLang, withLang } from "@/lib/i18n";
import { getSiteData } from "@/lib/site-data";

export function SiteFooter() {
  const searchParams = useSearchParams();
  const lang = normalizeLang(searchParams.get("lang") ?? undefined);
  const data = getSiteData(lang);

  return (
    <footer className="mt-auto border-t border-slateBrand-100 bg-slateBrand-900 text-slate-200">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <LogoMark className="h-10 w-10" />
            <div>
              <p className="font-serif text-lg font-semibold text-white">
                {data.brand.name}
              </p>
              <p className="text-xs uppercase tracking-[0.18em] text-accent-gold">
                {data.brand.motto}
              </p>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-7 text-slate-300">
            {data.brand.footerText}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-gold">
            {lang === "tr" ? "Sayfalar" : "Pages"}
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {data.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={withLang(item.href, lang)}
                  className="text-slate-300 transition hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-gold">
            {lang === "tr" ? "İletişim" : "Contact"}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>{data.contactInfo.address}</li>
            <li>{data.contactInfo.phone}</li>
            <li>{data.contactInfo.email}</li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            {data.contactInfo.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold text-slate-200 transition hover:border-accent-gold hover:text-white"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {data.brand.name}</p>
          <p>
            {lang === "tr"
              ? "Tüm hakları saklıdır."
              : "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
}
