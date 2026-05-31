import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BellRing,
  CalendarDays,
  FolderKanban,
  GalleryHorizontalEnd,
  Megaphone,
  MessageSquareQuote,
  PhoneCall,
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { normalizeLang, withLang } from "@/lib/i18n";
import { getSiteData } from "@/lib/site-data";

type HomePageProps = {
  searchParams: Promise<{ lang?: string }>;
};

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

  return (
    <div className="relative overflow-hidden bg-slateBrand-50 dark:bg-slate-950">
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-primary-300/35 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-noble-300/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 left-1/3 h-64 w-64 rounded-full bg-emerald-200/30 blur-3xl" />

      <AnimatedSection className="relative isolate overflow-hidden bg-heroGlow">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1.2fr_0.8fr] md:py-32">
          <div className="space-y-8">
            <span className="inline-flex rounded-full border border-primary-200 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-700 shadow-soft dark:border-primary-900/70 dark:bg-slate-900/80 dark:text-primary-300">
              {data.home.heroBadge}
            </span>
            <h1 className="max-w-4xl font-serif text-5xl leading-tight text-slateBrand-900 dark:text-white md:text-7xl">
              {data.home.heroTitle}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slateBrand-700 dark:text-slate-300">
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
            <p className="text-sm font-medium text-slateBrand-600 dark:text-slate-400">
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
              <div className="mt-8 border-t border-white/20 pt-6">
                <p className="text-xs uppercase tracking-[0.16em] text-accent-cream/90">
                  {lang === "tr" ? "Kuruluş Vurgusu" : "Institutional Focus"}
                </p>
                <p className="mt-2 text-4xl font-bold">81+</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden w-56 rounded-2xl border border-slateBrand-100 bg-white p-4 shadow-card dark:border-slate-800 dark:bg-slate-900 md:block">
              <p className="text-xs uppercase tracking-[0.15em] text-primary-700 dark:text-primary-300">
                {lang === "tr" ? "Hızlı Erişim" : "Quick Access"}
              </p>
              <p className="mt-2 text-sm text-slateBrand-700 dark:text-slate-300">
                {lang === "tr"
                  ? "Duyuru, yönetim ve temsilci bilgilerine tek noktadan erişin."
                  : "Reach announcements, board and representative details from one place."}
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-7xl px-6 pb-16" delay={0.08}>
        <div className="overflow-hidden rounded-2xl border border-slateBrand-100 bg-white/90 dark:border-slate-800 dark:bg-slate-900/70">
          <div className="flex gap-8 whitespace-nowrap px-6 py-3 text-sm font-semibold tracking-wide text-slateBrand-700 dark:text-slate-300">
            {[
              lang === "tr" ? "Kurumsal Güven" : "Institutional Trust",
              lang === "tr" ? "Toplumsal Dayanışma" : "Social Solidarity",
              lang === "tr" ? "Kültürel Miras" : "Cultural Heritage",
              lang === "tr" ? "Sürdürülebilir Temsil" : "Sustainable Representation",
              lang === "tr" ? "Ulusal Organizasyon" : "National Organization",
            ].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-600" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-7xl px-6 py-20" delay={0.1}>
        <div className="grid gap-8 md:grid-cols-3">
          {data.stats.map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-slateBrand-100 bg-white p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="text-4xl font-bold text-primary-700">{item.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-slateBrand-600 dark:text-slate-400">
                {item.label}
              </p>
              <p className="mt-4 text-sm leading-7 text-slateBrand-600 dark:text-slate-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-7xl px-6 pb-20" delay={0.12}>
        <div className="grid gap-4 md:grid-cols-3">
          {quickLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl border border-slateBrand-100 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card dark:border-slate-800 dark:bg-slate-900"
            >
              <item.icon className="h-5 w-5 text-primary-700 dark:text-primary-300" />
              <p className="mt-3 text-lg font-semibold text-slateBrand-900 dark:text-slate-100">
                {item.title}
              </p>
              <p className="mt-1 text-sm text-slateBrand-600 dark:text-slate-300">
                {item.desc}
              </p>
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
        <div className="mb-6 flex flex-wrap gap-2">
          {(lang === "tr"
            ? ["GÜNCEL", "HABERLER", "FOTO HABER", "VİDEO HABER", "DUYURULAR"]
            : ["LATEST", "NEWS", "PHOTO NEWS", "VIDEO NEWS", "ANNOUNCEMENTS"]
          ).map((tab) => (
            <span
              key={tab}
              className="rounded-full border border-slateBrand-200 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-slateBrand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              {tab}
            </span>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {data.newsItems.map((news) => (
            <article
              key={news.slug}
              className="group rounded-2xl border border-slateBrand-100 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-card dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="text-xs uppercase tracking-[0.15em] text-primary-700">
                {new Date(news.date).toLocaleDateString("tr-TR", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>
              <h3 className="mt-3 text-xl font-semibold leading-8 text-slateBrand-900 dark:text-slate-100">
                {news.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slateBrand-600 dark:text-slate-300">
                {news.excerpt}
              </p>
              <Link
                href={withLang(`/haberler/${news.slug}`, lang)}
                className="mt-4 inline-flex text-sm font-semibold text-slateBrand-600 transition group-hover:text-primary-700 dark:text-slate-300"
              >
                {data.home.readMore}
              </Link>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-7xl px-6 pb-24" delay={0.2}>
        <div className="rounded-3xl border border-slateBrand-100 bg-white p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900 md:p-12">
          <SectionHeading
            eyebrow={lang === "tr" ? "Yönetim Kurulu" : "Board"}
            title={data.home.sectionBoardTitle}
            description={data.home.sectionBoardDescription}
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {data.boardMembers.slice(0, 3).map((member) => (
              <article
                key={member.name}
                className="rounded-2xl border border-slateBrand-100 bg-slateBrand-50 p-5 dark:border-slate-800 dark:bg-slate-950"
              >
                <div className="mb-4 h-14 w-14 rounded-full bg-gradient-to-br from-primary-300 to-noble-500" />
                <h3 className="text-lg font-semibold text-slateBrand-900 dark:text-slate-100">
                  {member.name}
                </h3>
                <p className="text-sm text-primary-700">{member.title}</p>
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
          <article className="rounded-3xl border border-slateBrand-100 bg-gradient-to-br from-white to-primary-50 p-8 shadow-soft dark:border-slate-800 dark:from-slate-900 dark:to-slate-900">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-700 dark:text-primary-300">
              {lang === "tr" ? "Başkanın Mesajı" : "President's Message"}
            </p>
            <p className="mt-4 font-serif text-3xl text-slateBrand-900 dark:text-slate-100">
              {lang === "tr"
                ? "Birlik ruhumuzu güçlendirerek kültürel mirasımızı gelecek nesillere taşıyoruz."
                : "We strengthen the spirit of unity and carry our cultural heritage to future generations."}
            </p>
            <p className="mt-4 text-sm leading-7 text-slateBrand-700 dark:text-slate-300">
              {lang === "tr"
                ? "Toplumsal dayanışmayı büyüten her adımı, ortak değerlerimize ve kurum kültürümüze bağlı kalarak atıyoruz."
                : "Every step we take for stronger social solidarity remains rooted in our shared values and institutional culture."}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-700 dark:text-primary-300">
              <Megaphone className="h-4 w-4" />
              {lang === "tr" ? "Ferhat Armağan" : "Ferhat Armagan"}
            </div>
          </article>
          <article className="rounded-3xl border border-slateBrand-100 bg-slateBrand-900 p-8 text-white shadow-card dark:border-slate-800">
            <p className="text-xs uppercase tracking-[0.15em] text-accent-cream">
              {lang === "tr" ? "Kurumsal Etkileşim" : "Institutional Engagement"}
            </p>
            <h3 className="mt-3 font-serif text-3xl">
              {lang === "tr" ? "Üye Kayıt ve İş Birliği" : "Member Registration & Collaboration"}
            </h3>
            <p className="mt-3 text-sm text-slate-200">
              {lang === "tr"
                ? "Federasyon çalışmaları, projeler ve faaliyet duyuruları için iletişimde kalın."
                : "Stay connected for federation initiatives, projects and activity announcements."}
            </p>
            <div className="mt-6 flex gap-3">
              <Button asChild>
                <Link href={withLang("/iletisim", lang)}>
                  {lang === "tr" ? "Başvuru / İletişim" : "Apply / Contact"}
                </Link>
              </Button>
            </div>
          </article>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-7xl px-6 pb-24" delay={0.3}>
        <div className="rounded-3xl border border-slateBrand-100 bg-white p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900">
          <SectionHeading
            eyebrow="Instagram"
            title={data.instagram.title}
            description={data.instagram.description}
          />
          {data.instagram.posts.length > 0 ? (
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {data.instagram.posts.map((post, index) => (
                <div
                  key={`${post.image}-${index}`}
                  className="relative aspect-square overflow-hidden rounded-2xl"
                >
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-6 text-sm text-slateBrand-600 dark:text-slate-300">
              {lang === "tr"
                ? "Instagram görselleri eklendiğinde bu alanda otomatik olarak görünecektir."
                : "Instagram images will appear automatically here once they are added."}
            </p>
          )}
          <div className="mt-6">
            <Button asChild>
              <Link href={data.instagram.profileUrl} target="_blank" rel="noreferrer">
                {data.instagram.cta}
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
