import { notFound } from "next/navigation";
import { AnimatedSection } from "@/components/animated-section";
import { normalizeLang } from "@/lib/i18n";
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

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16 md:py-20">
      <AnimatedSection className="rounded-3xl border border-slateBrand-100 bg-white p-8 shadow-soft md:p-12">
        <p className="text-xs uppercase tracking-[0.16em] text-primary-700">
          {item.category}
        </p>
        <h1 className="mt-3 font-serif text-4xl text-slateBrand-900 md:text-5xl">
          {item.title}
        </h1>
        <p className="mt-3 text-sm text-slateBrand-600">
          {new Date(item.date).toLocaleDateString("tr-TR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>
        <div className="mt-8 space-y-5 text-base leading-8 text-slateBrand-700">
          {item.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
