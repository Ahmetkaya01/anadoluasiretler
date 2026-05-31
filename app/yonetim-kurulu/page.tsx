import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";
import { PageBanner } from "@/components/page-banner";
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
    <>
      <PageBanner
        eyebrow={lang === "tr" ? "Yönetim Kurulu" : "Board"}
        title={data.boardPage.title}
        description={data.boardPage.description}
      />

      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.boardMembers.map((member, index) => (
            <AnimatedSection
              key={member.name}
              delay={index * 0.05}
              className="group overflow-hidden rounded-2xl border border-slateBrand-100 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src="/images/representative-placeholder.svg"
                  alt={`${member.name} profil görseli`}
                  fill
                  className="object-cover object-top transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slateBrand-900/40 to-transparent" />
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
    </>
  );
}
