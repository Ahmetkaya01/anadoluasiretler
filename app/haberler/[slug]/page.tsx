import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { normalizeLang, withLang } from "@/lib/i18n";
import { getSiteData } from "@/lib/site-data";

type NewsDetailPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
};

export default async function NewsDetailPage({
  params,
  searchParams,
}: NewsDetailPageProps) {
  const { slug } = await params;
  const query = await searchParams;
  const lang = normalizeLang(query.lang);
  const data = getSiteData(lang);
  const item = data.newsItems.find((news) => news.slug === slug);

  if (!item) {
    notFound();
  }

  const dateLocale = lang === "tr" ? "tr-TR" : "en-GB";

  return (
    <div className="border-b border-slateBrand-100 bg-heroGlow">
      <div className="mx-auto w-full max-w-4xl px-6 py-10 md:py-14">
        <Link
          href={withLang("/haberler", lang)}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 transition hover:text-primary-800"
        >
          <ArrowLeft className="h-4 w-4" />
          {lang === "tr" ? "Haberlere Dön" : "Back to News"}
        </Link>
      </div>

      <div className="mx-auto w-full max-w-4xl px-6 pb-16 md:pb-20">
        <AnimatedSection className="overflow-hidden rounded-3xl border border-slateBrand-100 bg-white shadow-soft">
          <div className="h-1.5 bg-gradient-to-r from-primary-600 via-accent-gold to-noble-500" />
          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-700">
                {item.category}
              </span>
              <time dateTime={item.date} className="text-sm text-slateBrand-500">
                {new Date(item.date).toLocaleDateString(dateLocale, {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </div>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-slateBrand-900 md:text-5xl">
              {item.title}
            </h1>
            <p className="mt-4 text-lg leading-8 text-slateBrand-600">{item.excerpt}</p>
            <div className="mt-8 space-y-5 border-t border-slateBrand-100 pt-8 text-base leading-8 text-slateBrand-700">
              {item.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
