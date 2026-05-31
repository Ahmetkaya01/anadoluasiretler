import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
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
    <div className="mx-auto w-full max-w-7xl space-y-10 px-6 py-16 md:py-20">
      <AnimatedSection>
        <SectionHeading
          eyebrow={lang === "tr" ? "Haberler / Duyurular" : "News / Announcements"}
          title={data.newsPage.title}
          description={data.newsPage.description}
        />
      </AnimatedSection>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.newsItems.map((item, index) => (
          <AnimatedSection
            key={item.slug}
            delay={index * 0.08}
            className="rounded-2xl border border-slateBrand-100 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-card"
          >
            <p className="text-xs uppercase tracking-[0.16em] text-primary-700">
              {item.category}
            </p>
            <h3 className="mt-3 text-xl font-semibold leading-8 text-slateBrand-900">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slateBrand-600">
              {item.excerpt}
            </p>
            <Link
              className="mt-5 inline-flex text-sm font-semibold text-slateBrand-700 hover:text-primary-700"
              href={withLang(`/haberler/${item.slug}`, lang)}
            >
              {lang === "tr" ? "Devamını Oku" : "Read More"}
            </Link>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="rounded-3xl border border-slateBrand-100 bg-white p-8 shadow-soft">
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
              className="rounded-2xl border border-slateBrand-100 bg-slateBrand-50 p-5"
            >
              <p className="text-xs uppercase tracking-[0.15em] text-primary-700">{item.label}</p>
              <h3 className="mt-2 text-lg font-semibold text-slateBrand-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slateBrand-600">{item.summary}</p>
              <Link
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-primary-700"
              >
                {lang === "tr" ? "Instagram'da Gör" : "View on Instagram"}
              </Link>
            </article>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
