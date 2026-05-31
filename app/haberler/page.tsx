import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { NewsCard } from "@/components/news-card";
import { PageBanner } from "@/components/page-banner";
import { SectionHeading } from "@/components/section-heading";
import { normalizeLang, withLang } from "@/lib/i18n";
import { getSiteData } from "@/lib/site-data";

type NewsPageProps = {
  searchParams: Promise<{ lang?: string }>;
};

export default async function NewsPage({ searchParams }: NewsPageProps) {
  const params = await searchParams;
  const lang = normalizeLang(params.lang);
  const data = getSiteData(lang);

  return (
    <>
      <PageBanner
        eyebrow={lang === "tr" ? "Haberler / Duyurular" : "News / Announcements"}
        title={data.newsPage.title}
        description={data.newsPage.description}
      />

      <div className="mx-auto w-full max-w-7xl space-y-10 px-6 py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.newsItems.map((item, index) => (
            <AnimatedSection key={item.slug} delay={index * 0.06}>
              <NewsCard
                news={item}
                href={withLang(`/haberler/${item.slug}`, lang)}
                readMore={lang === "tr" ? "Devamını Oku" : "Read More"}
                lang={lang}
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="rounded-3xl border border-slateBrand-100 bg-white p-8 shadow-soft md:p-10">
          <SectionHeading
            eyebrow="Instagram"
            title={lang === "tr" ? "Ziyaretler, Etkinlikler ve Bülten" : "Visits, Events and Bulletin"}
            description={
              lang === "tr"
                ? "Resmi Instagram hesabımızdaki paylaşımlara yönlendiren güncel bülten alanı."
                : "A bulletin area directing users to updates from our official Instagram account."
            }
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {data.instagram.bulletin.map((item) => (
              <article
                key={`${item.label}-${item.title}`}
                className="rounded-2xl border border-slateBrand-100 bg-gradient-to-br from-slateBrand-50 to-primary-50/50 p-6 transition hover:-translate-y-1 hover:shadow-soft"
              >
                <p className="text-xs uppercase tracking-[0.15em] text-primary-700">{item.label}</p>
                <h3 className="mt-2 text-lg font-semibold text-slateBrand-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slateBrand-600">{item.summary}</p>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex text-sm font-semibold text-primary-700 hover:text-primary-800"
                >
                  {lang === "tr" ? "Instagram'da Gör" : "View on Instagram"}
                </Link>
              </article>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
