import { BookOpen, Eye, Target } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { PageBanner } from "@/components/page-banner";
import { normalizeLang } from "@/lib/i18n";
import { getSiteData } from "@/lib/site-data";

type CorporatePageProps = {
  searchParams: Promise<{ lang?: string }>;
};

const sectionIcons = [BookOpen, Target, Eye] as const;

export default async function CorporatePage({ searchParams }: CorporatePageProps) {
  const params = await searchParams;
  const lang = normalizeLang(params.lang);
  const data = getSiteData(lang);

  return (
    <>
      <PageBanner
        eyebrow={lang === "tr" ? "Kurumsal" : "Corporate"}
        title={data.corporatePage.title}
        description={data.corporatePage.description}
      />

      <div className="mx-auto w-full max-w-7xl space-y-10 px-6 py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {data.corporateSections.map((section, index) => {
            const Icon = sectionIcons[index] ?? BookOpen;
            return (
              <AnimatedSection
                key={section.title}
                delay={index * 0.05}
                className="rounded-2xl border border-slateBrand-100 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-card"
              >
                <div className="mb-5 inline-flex rounded-xl bg-primary-50 p-3 text-primary-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-3xl text-slateBrand-900">{section.title}</h3>
                <p className="mt-4 leading-8 text-slateBrand-700">{section.body}</p>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </>
  );
}
