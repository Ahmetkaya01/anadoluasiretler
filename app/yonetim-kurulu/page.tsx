import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { normalizeLang } from "@/lib/i18n";
import { getSiteData } from "@/lib/site-data";

type BoardPageProps = {
  searchParams: Promise<{ lang?: string }>;
};

export default async function BoardPage({ searchParams }: BoardPageProps) {
  const params = await searchParams;
  const lang = normalizeLang(params.lang);
  const data = getSiteData(lang);

  return (
    <div className="mx-auto w-full max-w-7xl space-y-10 px-6 py-16 md:py-20">
      <AnimatedSection>
        <SectionHeading
          eyebrow={lang === "tr" ? "Yönetim Kurulu" : "Board"}
          title={data.boardPage.title}
          description={data.boardPage.description}
        />
      </AnimatedSection>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.boardMembers.map((member, index) => (
          <AnimatedSection
            key={member.name}
            delay={index * 0.05}
            className="overflow-hidden rounded-2xl border border-slateBrand-100 bg-white shadow-soft"
          >
            <div className="relative h-60 w-full overflow-hidden">
              <Image
                src="/images/representative-placeholder.svg"
                alt={`${member.name} profil görseli`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-slateBrand-900">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-primary-700">
                {member.title}
              </p>
              <p className="mt-4 text-sm leading-7 text-slateBrand-600">{member.bio}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
