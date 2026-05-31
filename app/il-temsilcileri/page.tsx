import Image from "next/image";
import { MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { normalizeLang } from "@/lib/i18n";
import { getSiteData } from "@/lib/site-data";

type CityRepresentativesPageProps = {
  searchParams: Promise<{ lang?: string }>;
};

export default async function CityRepresentativesPage({
  searchParams,
}: CityRepresentativesPageProps) {
  const params = await searchParams;
  const lang = normalizeLang(params.lang);
  const data = getSiteData(lang);

  return (
    <div className="mx-auto w-full max-w-7xl space-y-10 px-6 py-16 md:py-20">
      <AnimatedSection>
        <SectionHeading
          eyebrow={lang === "tr" ? "Teşkilat" : "Organization"}
          title={data.cityPage.title}
          description={data.cityPage.description}
        />
      </AnimatedSection>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.cityRepresentatives.map((representative, index) => (
          <AnimatedSection
            key={`${representative.city}-${representative.name}`}
            delay={index * 0.05}
            className="overflow-hidden rounded-2xl border border-slateBrand-100 bg-white shadow-soft"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src="/images/representative-placeholder.svg"
                alt={`${representative.name} profil görseli`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <div className="p-6">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary-700">
                <MapPin className="h-3.5 w-3.5" />
                {representative.city}
              </div>
              <h3 className="text-xl font-semibold text-slateBrand-900">
                {representative.name}
              </h3>
              {representative.affiliation ? (
                <p className="mt-2 text-sm text-slateBrand-700">
                  {representative.affiliation}
                </p>
              ) : null}
              {representative.role ? (
                <p className="mt-1 text-sm font-semibold text-primary-700">
                  {representative.role}
                </p>
              ) : null}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
