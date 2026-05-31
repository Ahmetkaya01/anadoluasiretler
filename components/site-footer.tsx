"use client";

import { useSearchParams } from "next/navigation";
import { normalizeLang } from "@/lib/i18n";
import { getSiteData } from "@/lib/site-data";

export function SiteFooter() {
  const searchParams = useSearchParams();
  const lang = normalizeLang(searchParams.get("lang") ?? undefined);
  const data = getSiteData(lang);

  return (
    <footer className="border-t border-slateBrand-100 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 py-8 text-sm text-slateBrand-600 dark:text-slate-300 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {data.brand.name}
        </p>
        <p>{data.brand.footerText}</p>
      </div>
    </footer>
  );
}
