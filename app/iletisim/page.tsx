import { Mail, MapPin, Phone } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { PageBanner } from "@/components/page-banner";
import { normalizeLang } from "@/lib/i18n";
import { getSiteData } from "@/lib/site-data";

type ContactPageProps = {
  searchParams: Promise<{ lang?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const lang = normalizeLang(params.lang);
  const data = getSiteData(lang);

  return (
    <>
      <PageBanner
        eyebrow={lang === "tr" ? "İletişim" : "Contact"}
        title={data.contactPage.title}
        description={data.contactPage.description}
      />

      <div className="mx-auto w-full max-w-7xl space-y-10 px-6 py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <AnimatedSection className="rounded-3xl border border-slateBrand-100 bg-white p-8 shadow-soft md:p-10">
            <form className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-semibold text-slateBrand-700">
                    {data.contactPage.form.fullName}
                  </span>
                  <input
                    className="w-full rounded-xl border border-slateBrand-200 bg-slateBrand-50/50 px-4 py-3 outline-none transition focus:border-primary-400 focus:bg-white"
                    placeholder={data.contactPage.form.fullNamePlaceholder}
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-semibold text-slateBrand-700">
                    {data.contactPage.form.email}
                  </span>
                  <input
                    type="email"
                    className="w-full rounded-xl border border-slateBrand-200 bg-slateBrand-50/50 px-4 py-3 outline-none transition focus:border-primary-400 focus:bg-white"
                    placeholder={data.contactPage.form.emailPlaceholder}
                  />
                </label>
              </div>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slateBrand-700">
                  {data.contactPage.form.subject}
                </span>
                <input
                  className="w-full rounded-xl border border-slateBrand-200 bg-slateBrand-50/50 px-4 py-3 outline-none transition focus:border-primary-400 focus:bg-white"
                  placeholder={data.contactPage.form.subjectPlaceholder}
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slateBrand-700">
                  {data.contactPage.form.message}
                </span>
                <textarea
                  className="h-36 w-full resize-none rounded-xl border border-slateBrand-200 bg-slateBrand-50/50 px-4 py-3 outline-none transition focus:border-primary-400 focus:bg-white"
                  placeholder={data.contactPage.form.messagePlaceholder}
                />
              </label>
              <button
                type="submit"
                className="rounded-full bg-primary-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-800"
              >
                {data.contactPage.form.send}
              </button>
            </form>
          </AnimatedSection>

          <div className="space-y-6">
            <AnimatedSection className="rounded-2xl border border-slateBrand-100 bg-white p-6 shadow-soft">
              <h3 className="font-serif text-2xl text-slateBrand-900">
                {data.contactPage.contactCard}
              </h3>
              <ul className="mt-5 space-y-4 text-sm text-slateBrand-700">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-700" />
                  <span>{data.contactInfo.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-700" />
                  <span>{data.contactInfo.phone}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary-700" />
                  <span>{data.contactInfo.email}</span>
                </li>
              </ul>
            </AnimatedSection>

            <AnimatedSection className="rounded-2xl border border-slateBrand-100 bg-white p-6 shadow-soft">
              <h3 className="font-serif text-2xl text-slateBrand-900">
                {data.contactPage.socialCard}
              </h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {data.contactInfo.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-slateBrand-200 px-4 py-2 text-sm font-semibold text-slateBrand-700 transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection className="rounded-2xl border border-slateBrand-100 bg-gradient-to-br from-primary-700 to-noble-800 p-6 text-white shadow-card">
              <h3 className="font-serif text-2xl">Instagram</h3>
              <p className="mt-2 text-sm leading-7 text-slate-200">
                {lang === "tr"
                  ? "Federasyonumuzun güncel duyuru ve etkinlik paylaşımlarını resmi Instagram hesabımızdan takip edin."
                  : "Follow our official Instagram account for the latest announcements and activity updates."}
              </p>
              <a
                href={data.instagram.profileUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary-800 transition hover:bg-accent-cream"
              >
                {lang === "tr" ? "Instagram'a Git" : "Go to Instagram"}
              </a>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </>
  );
}
