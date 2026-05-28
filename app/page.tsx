export default function Home() {
  const featuredNews = [
    {
      title: "Federasyon Temsilcileri İstişare Toplantısında Buluştu",
      date: "Mayıs 2026",
    },
    {
      title: "Kültürel Miras Çalışmaları İçin Yeni Komisyon Kuruldu",
      date: "Nisan 2026",
    },
    {
      title: "Gençlik ve Eğitim Odaklı Sosyal Sorumluluk Programı Duyuruldu",
      date: "Mart 2026",
    },
  ];

  const stats = [
    { label: "Temsil Edilen İl", value: "40+" },
    { label: "Kurumsal İş Birliği", value: "120+" },
    { label: "Yıllık Etkinlik", value: "60+" },
  ];

  return (
    <div className="bg-slateBrand-50">
      <section className="relative isolate overflow-hidden bg-heroGlow">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1.3fr_1fr] md:py-32">
          <div className="space-y-8">
            <span className="inline-flex rounded-full border border-primary-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-700 shadow-soft">
              Kurumsal Resmi Platform
            </span>
            <h1 className="font-serif text-5xl leading-tight text-slateBrand-900 md:text-6xl">
              Anadolu&apos;nun Köklü Değerlerini Geleceğe Taşıyan Güçlü Birlik
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slateBrand-700">
              Anadolu Aşiretler Federasyonu; birlik, kültürel mirasın korunması
              ve toplumsal dayanışma ilkeleriyle kurumsal temsil gücünü
              artırmayı hedefleyen bir platformdur.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="rounded-full bg-primary-700 px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-primary-800"
              >
                Kurumsal Bilgiler
              </a>
              <a
                href="#"
                className="rounded-full border border-slateBrand-200 bg-white px-6 py-3 text-sm font-semibold text-slateBrand-900 transition hover:border-primary-300 hover:text-primary-700"
              >
                Haber ve Duyurular
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-white/70 bg-gradient-to-br from-noble-900 via-primary-800 to-slateBrand-900 p-8 text-white shadow-card">
            <p className="text-sm uppercase tracking-[0.18em] text-accent-cream/90">
              Misyon
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-100">
              Toplumsal dayanışmayı güçlendiren, kültürel değerleri çağın
              dinamikleriyle buluşturan ve kurumsal temsiliyeti ileri taşıyan
              sürdürülebilir bir vizyon üretmek.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-slateBrand-100 bg-white p-8 shadow-soft"
            >
              <p className="text-4xl font-bold text-primary-700">{item.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-slateBrand-600">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-24">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-700">
              Haberler / Duyurular
            </p>
            <h2 className="mt-2 font-serif text-4xl text-slateBrand-900">
              Öne Çıkan Gelişmeler
            </h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredNews.map((news) => (
            <article
              key={news.title}
              className="group rounded-2xl border border-slateBrand-100 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-card"
            >
              <p className="text-xs uppercase tracking-[0.15em] text-primary-700">
                {news.date}
              </p>
              <h3 className="mt-3 text-xl font-semibold leading-8 text-slateBrand-900">
                {news.title}
              </h3>
              <p className="mt-4 text-sm font-semibold text-slateBrand-600 transition group-hover:text-primary-700">
                Devamını Oku
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
