import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BellRing,
  CalendarDays,
  Camera,
  FolderKanban,
  GalleryHorizontalEnd,
  MapPin,
  MessageSquareQuote,
  PhoneCall,
  Users,
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { MarqueeTicker } from "@/components/marquee-ticker";
import { NewsCard } from "@/components/news-card";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { normalizeLang, withLang } from "@/lib/i18n";
import { getSiteData } from "@/lib/site-data";

type HomePageProps = {
  searchParams: Promise<{ lang?: string }>;
};

const statIcons = [MapPin, FolderKanban, Users] as const;

export default async function Home({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const lang = normalizeLang(params.lang);
  const data = getSiteData(lang);

  const quickLinks = [
    {
      title: lang === "tr" ? "İletişim" : "Contact",
      desc: lang === "tr" ? "Kurumsal iletişim kanalları" : "Official communication channels",
      href: withLang("/iletisim", lang),
      icon: PhoneCall,
    },
    {
      title: lang === "tr" ? "Etkinlikler" : "Events",
      desc: lang === "tr" ? "Organizasyon ve buluşmalar" : "Organizations and gatherings",
      href: withLang("/haberler", lang),
      icon: CalendarDays,
    },
    {
      title: lang === "tr" ? "Başkanın Mesajı" : "President's Message",
      desc: lang === "tr" ? "Kurumsal vizyon mesajı" : "Institutional vision statement",
      href: withLang("/kurumsal", lang),
      icon: MessageSquareQuote,
    },
    {
      title: lang === "tr" ? "Duyurular" : "Announcements",
      desc: lang === "tr" ? "Güncel duyuru akışı" : "Current announcement feed",
      href: withLang("/haberler", lang),
      icon: BellRing,
    },
    {
      title: lang === "tr" ? "Projeler" : "Projects",
      desc: lang === "tr" ? "Toplumsal fayda programları" : "Social impact programs",
      href: withLang("/kurumsal", lang),
      icon: FolderKanban,
    },
    {
      title: lang === "tr" ? "Galeri" : "Gallery",
      desc: lang === "tr" ? "Etkinliklerden seçkiler" : "Selections from activities",
      href: withLang("/haberler", lang),
      icon: GalleryHorizontalEnd,
    },
  ];

  const tickerItems =
    lang === "tr"
      ? [
          "Kurumsal Güven",
          "Toplumsal Dayanışma",
          "Kültürel Miras",
          "Sürdürülebilir Temsil",
          "Ulusal Organizasyon",
        ]
      : [
          "Institutional Trust",
          "Social Solidarity",
          "Cultural Heritage",
          "Sustainable Representation",
          "National Organization",
        ];

  const instagramPlaceholders =
    lang === "tr"
      ? ["Ziyaretler", "Etkinlikler", "Bülten", "Duyurular"]
      : ["Visits", "Events", "Bulletin", "Announcements"];

  return (
    <div className="relative overflow-hidden bg-slateBrand-50">
      <AnimatedSection className="relative isolate overflow-hidden bg-heroGlow">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-primary-300/30 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-noble-300/25 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-700 shadow-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-gold" />
              {data.home.heroBadge}
            </span>
            <h1 className="max-w-4xl font-serif text-5xl leading-[1.08] text-slateBrand-900 md:text-7xl">
              {data.home.heroTitle}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slateBrand-700">
              {data.home.heroDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="shadow-card">
                <Link href={withLang("/kurumsal", lang)}>{data.home.ctaCorporate}</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href={withLang("/haberler", lang)}>{data.home.ctaNews}</Link>
              </Button>
            </div>
            <p className="text-sm font-medium text-slateBrand-600">
              {data.home.trustLine}
            </p>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-white/70 bg-gradient-to-br from-noble-900 via-primary-800 to-slateBrand-900 p-8 text-white shadow-card">
              <p className="text-sm uppercase tracking-[0.18em] text-accent-cream/90">
                {data.home.heroMissionTitle}
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-100">
                {data.home.heroMissionDescription}
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/20 pt-6">
                {data.stats.map((item) => (
                  <div key={item.label}>
                    <p className="text-2xl font-bold text-accent-gold md:text-3xl">
                      {item.value}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-slate-300">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden w-56 rounded-2xl border border-slateBrand-100 bg-white p-4 shadow-card md:block">
              <p className="text-xs uppercase tracking-[0.15em] text-primary-700">
                {lang === "tr" ? "Hızlı Erişim" : "Quick Access"}
              </p>
              <p className="mt-2 text-sm leading-6 text-slateBrand-700">
                {lang === "tr"
                  ? "Duyuru, yönetim ve temsilci bilgilerine tek noktadan erişin."
                  : "Reach announcements, board and representative details from one place."}
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <MarqueeTicker items={tickerItems} />

      <AnimatedSection className="mx-auto w-full max-w-7xl px-6 py-20" delay={0.1}>
        <div className="grid gap-6 md:grid-cols-3">
          {data.stats.map((item, index) => {
            const Icon = statIcons[index] ?? MapPin;
            return (
              <article
                key={item.label}
                className="group rounded-2xl border border-slateBrand-100 bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-card"
              >
                <div className="mb-5 inline-flex rounded-xl bg-primary-50 p-3 text-primary-700 transition group-hover:bg-primary-700 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-4xl font-bold text-primary-700">{item.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.12em] text-slateBrand-600">
                  {item.label}
                </p>
                <p className="mt-4 text-sm leading-7 text-slateBrand-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-7xl px-6 pb-20" delay={0.12}>
        <SectionHeading
          eyebrow={lang === "tr" ? "Hızlı Bağlantılar" : "Quick Links"}
          title={lang === "tr" ? "Kurumsal Erişim Noktaları" : "Institutional Access Points"}
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {quickLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl border border-slateBrand-100 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-card"
            >
              <div className="inline-flex rounded-lg bg-slateBrand-50 p-2.5 text-primary-700 transition group-hover:bg-primary-700 group-hover:text-white">
                <item.icon className="h-5 w-5" />
              </div>
              <p className="mt-4 text-lg font-semibold text-slateBrand-900">
                {item.title}
              </p>
              <p className="mt-1 text-sm text-slateBrand-600">{item.desc}</p>
            </Link>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-7xl px-6 pb-24" delay={0.15}>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow={lang === "tr" ? "Haberler / Duyurular" : "News / Announcements"}
            title={data.home.sectionNewsTitle}
            description={data.home.sectionNewsDescription}
          />
          <Button asChild variant="ghost">
            <Link href={withLang("/haberler", lang)} className="inline-flex items-center gap-2">
              {data.home.viewAll} <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mb-8 flex flex-wrap gap-2">
          {(lang === "tr"
            ? ["GÜNCEL", "HABERLER", "FOTO HABER", "VİDEO HABER", "DUYURULAR"]
            : ["LATEST", "NEWS", "PHOTO NEWS", "VIDEO NEWS", "ANNOUNCEMENTS"]
          ).map((tab, index) => (
            <span
              key={tab}
              className={`rounded-full border px-3 py-1 text-xs font-semibold tracking-wide ${
                index === 0
                  ? "border-primary-700 bg-primary-700 text-white"
                  : "border-slateBrand-200 bg-white text-slateBrand-700"
              }`}
            >
              {tab}
            </span>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {data.newsItems.map((news) => (
            <NewsCard
              key={news.slug}
              news={news}
              href={withLang(`/haberler/${news.slug}`, lang)}
              readMore={data.home.readMore}
              lang={lang}
            />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-7xl px-6 pb-24" delay={0.2}>
        <div className="rounded-3xl border border-slateBrand-100 bg-white p-8 shadow-soft md:p-12">
          <SectionHeading
            eyebrow={lang === "tr" ? "Yönetim Kurulu" : "Board"}
            title={data.home.sectionBoardTitle}
            description={data.home.sectionBoardDescription}
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {data.boardMembers.slice(0, 3).map((member) => (
              <article
                key={member.name}
                className="overflow-hidden rounded-2xl border border-slateBrand-100 bg-slateBrand-50 transition hover:shadow-soft"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src="/images/representative-placeholder.svg"
                    alt={`${member.name} profil görseli`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-slateBrand-900">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary-700">{member.title}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild variant="outline">
              <Link href={withLang("/yonetim-kurulu", lang)}>{data.home.allBoard}</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-7xl px-6 pb-24" delay={0.25}>
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-3xl border border-slateBrand-100 bg-gradient-to-br from-white to-primary-50 p-8 shadow-soft md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-700">
              {lang === "tr" ? "Başkanın Mesajı" : "President's Message"}
            </p>
            <p className="mt-4 font-serif text-3xl leading-snug text-slateBrand-900 md:text-4xl">
              {lang === "tr"
                ? "Birlik ruhumuzu güçlendirerek kültürel mirasımızı gelecek nesillere taşıyoruz."
                : "We strengthen the spirit of unity and carry our cultural heritage to future generations."}
            </p>
            <p className="mt-4 text-sm leading-7 text-slateBrand-700">
              {lang === "tr"
                ? "Toplumsal dayanışmayı büyüten her adımı, ortak değerlerimize ve kurum kültürümüze bağlı kalarak atıyoruz."
                : "Every step we take for stronger social solidarity remains rooted in our shared values and institutional culture."}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-accent-gold">
                <Image
                  src="/images/representative-placeholder.svg"
                  alt="Ferhat Armağan"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-slateBrand-900">
                  {lang === "tr" ? "Ferhat Armağan" : "Ferhat Armagan"}
                </p>
                <p className="text-xs text-primary-700">
                  {lang === "tr" ? "Federasyon Başkanı" : "Federation President"}
                </p>
              </div>
            </div>
          </article>

          <article className="flex flex-col justify-between rounded-3xl border border-slateBrand-100 bg-slateBrand-900 p-8 text-white shadow-card">
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-accent-gold">
                {lang === "tr" ? "Kurumsal İletişim" : "Institutional Contact"}
              </p>
              <h3 className="mt-3 font-serif text-3xl">
                {lang === "tr" ? "Bizimle İletişime Geçin" : "Get in Touch With Us"}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {lang === "tr"
                  ? "Federasyon çalışmaları, projeler ve faaliyet duyuruları hakkında bilgi almak için iletişim kanallarımızı kullanın."
                  : "Use our contact channels to learn about federation initiatives, projects and activity announcements."}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link href={withLang("/iletisim", lang)}>
                  {lang === "tr" ? "İletişim Formu" : "Contact Form"}
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10">
                <Link href={withLang("/il-temsilcileri", lang)}>
                  {lang === "tr" ? "İl Temsilcileri" : "City Representatives"}
                </Link>
              </Button>
            </div>
          </article>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-7xl px-6 pb-24" delay={0.3}>
        <div className="rounded-3xl border border-slateBrand-100 bg-white p-8 shadow-soft md:p-10">
          <SectionHeading
            eyebrow="Instagram"
            title={data.instagram.title}
            description={data.instagram.description}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.instagram.posts.length > 0
              ? data.instagram.posts.map((post, index) => (
                  <div
                    key={`${post.image}-${index}`}
                    className="relative aspect-square overflow-hidden rounded-2xl"
                  >
                    <Image
                      src={post.image}
                      alt={post.alt}
                      fill
                      className="object-cover transition hover:scale-105"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                ))
              : instagramPlaceholders.map((label) => (
                  <Link
                    key={label}
                    href={data.instagram.profileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary-100 via-white to-noble-100"
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center transition group-hover:bg-primary-900/5">
                      <Camera className="h-7 w-7 text-primary-700" />
                      <span className="text-sm font-semibold text-slateBrand-800">{label}</span>
                    </div>
                  </Link>
                ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild>
              <Link href={data.instagram.profileUrl} target="_blank" rel="noreferrer">
                {data.instagram.cta}
              </Link>
            </Button>
            <p className="text-sm text-slateBrand-600">
              {lang === "tr"
                ? "@anadoluasiretlerfederasyonu"
                : "@anadoluasiretlerfederasyonu"}
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
