import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { NewsItem } from "@/lib/site-data";

type NewsCardProps = {
  news: NewsItem;
  href: string;
  readMore: string;
  lang: "tr" | "en";
};

export function NewsCard({ news, href, readMore, lang }: NewsCardProps) {
  const dateLocale = lang === "tr" ? "tr-TR" : "en-GB";

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slateBrand-100 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card">
      <div className="h-1.5 bg-gradient-to-r from-primary-600 via-accent-gold to-noble-500" />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-700">
            {news.category}
          </span>
          <time
            dateTime={news.date}
            className="text-xs font-medium text-slateBrand-500"
          >
            {new Date(news.date).toLocaleDateString(dateLocale, {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </time>
        </div>
        <h3 className="mt-4 text-xl font-semibold leading-8 text-slateBrand-900 transition group-hover:text-primary-800">
          {news.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-slateBrand-600">
          {news.excerpt}
        </p>
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 transition group-hover:gap-2.5"
        >
          {readMore}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
