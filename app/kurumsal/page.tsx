import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { normalizeLang } from "@/lib/i18n";
import { getSiteData } from "@/lib/site-data";

type CorporatePageProps = {
  searchParams: Promise<{ lang?: string }>;
};

export default async function CorporatePage({ searchParams }: CorporatePageProps) {
  const params = await searchParams;
  const lang = normalizeLang(params.lang);
  const data = getSiteData(lang);

  return (
    <div className="mx-auto w-full max-w-7xl space-y-10 px-6 py-16 md:py-20">
      <AnimatedSection>
        <SectionHeading
          eyebrow={lang === "tr" ? "Kurumsal" : "Corporate"}
          title={data.corporatePage.title}
          description={data.corporatePage.description}
        />
      </AnimatedSection>

      <div className="grid gap-6 md:grid-cols-3">
        {data.corporateSections.map((section, index) => (
          <AnimatedSection
            key={section.title}
            delay={index * 0.08}
            className="rounded-2xl border border-slateBrand-100 bg-white p-6 shadow-soft"
          >
            <h3 className="font-serif text-3xl text-slateBrand-900">{section.title}</h3>
            <p className="mt-4 leading-8 text-slateBrand-700">{section.body}</p>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
