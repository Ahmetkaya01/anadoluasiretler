import type { Lang } from "@/lib/i18n";

export type NewsItem = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  content: string[];
};

type SiteData = {
  brand: {
    name: string;
    motto: string;
    footerText: string;
  };
  home: {
    heroBadge: string;
    heroTitle: string;
    heroDescription: string;
    heroMissionTitle: string;
    heroMissionDescription: string;
    ctaCorporate: string;
    ctaNews: string;
    trustLine: string;
    sectionNewsTitle: string;
    sectionNewsDescription: string;
    sectionBoardTitle: string;
    sectionBoardDescription: string;
    viewAll: string;
    readMore: string;
    allBoard: string;
  };
  stats: { label: string; value: string; description: string }[];
  corporatePage: {
    title: string;
    description: string;
  };
  corporateSections: { title: string; body: string }[];
  boardPage: {
    title: string;
    description: string;
  };
  boardMembers: { name: string; title: string; bio: string }[];
  cityPage: {
    title: string;
    description: string;
  };
  cityRepresentatives: {
    city: string;
    name: string;
    affiliation: string;
    role: string;
    image: string;
  }[];
  newsPage: {
    title: string;
    description: string;
  };
  newsItems: NewsItem[];
  contactPage: {
    title: string;
    description: string;
    form: {
      fullName: string;
      email: string;
      subject: string;
      message: string;
      send: string;
      fullNamePlaceholder: string;
      emailPlaceholder: string;
      subjectPlaceholder: string;
      messagePlaceholder: string;
    };
    contactCard: string;
    socialCard: string;
    mapPlaceholder: string;
  };
  nav: { href: string; label: string }[];
  contactInfo: {
    address: string;
    phone: string;
    email: string;
    socials: { label: string; href: string }[];
  };
  instagram: {
    title: string;
    description: string;
    cta: string;
    profileUrl: string;
    posts: { image: string; alt: string }[];
    bulletin: {
      label: string;
      title: string;
      summary: string;
      href: string;
    }[];
  };
};

const trData: SiteData = {
  brand: {
    name: "Anadolu Aşiretler Federasyonu",
    motto: "Birlik • Kültür • Dayanışma",
    footerText: "Kurumsal kimlik ve toplumsal dayanışma odaklı resmi platform.",
  },
  home: {
    heroBadge: "Kurumsal Resmi Platform",
    heroTitle: "Anadolu'nun Köklü Değerlerini Geleceğe Taşıyan Güçlü Birlik",
    heroDescription:
      "Anadolu Aşiretler Federasyonu, birlik, kültür ve dayanışmanın kurumsal zeminde güçlenmesini hedefleyen; toplumsal hafızayı geleceğe taşıyan bir sivil temsil platformudur.",
    heroMissionTitle: "Misyon",
    heroMissionDescription:
      "Toplumsal dayanışmanın güçlenmesi ve kültürel mirasın korunması için şeffaf, kapsayıcı ve sürdürülebilir bir kurumsal model oluşturmak.",
    ctaCorporate: "Kurumsal Bilgiler",
    ctaNews: "Haber ve Duyurular",
    trustLine: "81 il temsilciliği, 250+ proje, 5000+ gönüllü üye",
    sectionNewsTitle: "Öne Çıkan Gelişmeler",
    sectionNewsDescription:
      "Federasyon faaliyetleri, basın açıklamaları ve toplumsal duyurular.",
    sectionBoardTitle: "Kurumsal Liderlik Kadrosu",
    sectionBoardDescription:
      "Toplumsal değerleri koruma ve gelecek nesillere aktarma sorumluluğunu taşıyan yönetim yapısı.",
    viewAll: "Tümünü Gör",
    readMore: "Devamını Oku",
    allBoard: "Tüm Yönetim Kurulu",
  },
  stats: [
    {
      label: "İl Temsilciliği",
      value: "81",
      description:
        "Türkiye genelinde teşkilatlanma çalışmalarımız kapsamında aktif il temsilciliklerimizle hizmet veriyoruz.",
    },
    {
      label: "Toplumsal Proje",
      value: "250+",
      description:
        "Eğitim, kültür ve sosyal dayanışma alanında hayata geçirilen projelerle toplumsal katkı sağlıyoruz.",
    },
    {
      label: "Gönüllü Üye",
      value: "5000+",
      description:
        "Federasyonumuz çatısı altında birlik ve beraberlik için gönüllü destek veren güçlü bir topluluğa sahibiz.",
    },
  ],
  corporatePage: {
    title: "Köklü Geçmişten Güçlü Geleceğe",
    description:
      "Anadolu Aşiretler Federasyonu kurumsal yapısı; temsil gücü, değer odaklı yönetim anlayışı ve toplumsal katkılar üzerine inşa edilmiştir.",
  },
  corporateSections: [
    {
      title: "Hakkımızda",
      body: "Anadolu Aşiretler Federasyonu; kökeninden aldığı gücü kurumsal bir yapıya dönüştürerek toplumsal birlikteliği, karşılıklı saygıyı ve ortak değerlerin korunmasını esas alır.",
    },
    {
      title: "Tüzük",
      body: "Federasyonumuzun tüzüğü; temsilde adalet, şeffaf yönetim, etik ilkelere bağlılık ve toplumsal fayda odaklı karar mekanizmalarını temel alır.",
    },
    {
      title: "Misyon & Vizyon",
      body: "Misyonumuz kültürümüzü yaşatmak ve dayanışmayı büyütmektir. Vizyonumuz ise ulusal düzeyde güçlü, kapsayıcı ve gelecek odaklı bir sivil toplum modeli oluşturmaktır.",
    },
  ],
  boardPage: {
    title: "Liderlik ve Kurumsal Temsil",
    description:
      "Federasyonumuzun vizyonunu temsil eden yönetim kadromuz, birlik ve dayanışma ruhunu güçlendirmek için çalışmalarını sürdürmektedir.",
  },
  boardMembers: [
    {
      name: "Ferhat Armağan",
      title: "Federasyon Başkanı",
      bio: "Birlik ve dayanışma ruhunu kurumsal düzlemde güçlendiren liderlik vizyonu ile federasyon faaliyetlerine yön verir.",
    },
    {
      name: "Ayşe Nur Demir",
      title: "Genel Başkan Yardımcısı",
      bio: "Kurumsal koordinasyon, proje yönetimi ve toplumsal iletişim süreçlerinde aktif rol alır.",
    },
    {
      name: "Mehmet Ali Kaya",
      title: "Genel Sekreter",
      bio: "Federasyon içindeki idari süreçlerin düzenli ve etkin biçimde yürütülmesini sağlar.",
    },
    {
      name: "Fatma Yıldız",
      title: "Kültür ve Sosyal Projeler Başkanı",
      bio: "Kültürel mirası koruma ve sosyal sorumluluk projelerinin planlanmasına liderlik eder.",
    },
    {
      name: "Hasan Çelik",
      title: "Teşkilat Başkanı",
      bio: "İl temsilcilikleri ağını güçlendirme ve saha organizasyonlarında stratejik koordinasyon sağlar.",
    },
    {
      name: "Zeynep Arslan",
      title: "Medya ve İletişim Başkanı",
      bio: "Kamuoyu bilgilendirme, medya ilişkileri ve dijital iletişim stratejilerini yönetir.",
    },
  ],
  cityPage: {
    title: "İl Temsilcileri",
    description:
      "Resmi kaynaktaki güncel temsilci listesi kurumsal formatta sunulmaktadır.",
  },
  cityRepresentatives: [
    {
      city: "Antalya",
      name: "Murat Kederli",
      affiliation: "Burukan Aşireti",
      role: "Kanaat Önderi",
      image: "/images/representatives/antalya-murat-kederli.jpeg",
    },
    {
      city: "Gaziantep",
      name: "Ali Filiz",
      affiliation: "",
      role: "Yazar",
      image: "/images/representatives/gaziantep-ali-filiz.jpeg",
    },
    {
      city: "Şanlıurfa",
      name: "Zülfikar Emiroğlu",
      affiliation: "Emirler Aşireti",
      role: "",
      image: "/images/representatives/sanliurfa-zulfikar-emiroglu.jpeg",
    },
    {
      city: "Erzurum",
      name: "Salih Aydın",
      affiliation: "Kurdka Aşireti",
      role: "Kanaat Önderi",
      image: "/images/representatives/erzurum-salih-aydin.jpeg",
    },
    {
      city: "Mersin",
      name: "Ersin Gürel Yıldırım",
      affiliation: "Ahıska Türkü",
      role: "Kanaat Önderi",
      image: "/images/representatives/mersin-ersin-gurel-yildirim.jpeg",
    },
    {
      city: "Afyonkarahisar",
      name: "Dr. Özgür Kavak",
      affiliation: "",
      role: "",
      image: "/images/representatives/afyonkarahisar-ozgur-kavak.jpeg",
    },
    {
      city: "Siirt",
      name: "Mirza Tetik",
      affiliation: "Duderan Aşireti",
      role: "Lideri",
      image: "/images/representatives/siirt-mirza-tetik.jpeg",
    },
  ],
  newsPage: {
    title: "Güncel Gelişmeler",
    description: "Federasyon faaliyetleri, basın açıklamaları, etkinlikler ve duyurular.",
  },
  newsItems: [
    {
      slug: "birlik-kultur-dayanisma-catisi",
      title: "Birlik, Kültür ve Dayanışma Çatısı Altında",
      excerpt:
        "Köklü tarihimizden aldığımız güçle birlik, beraberlik ve kültürel mirasımızı yaşatma hedefiyle faaliyetlerimizi sürdürüyoruz.",
      date: "2026-04-21",
      category: "Haber",
      content: [
        "Federasyonumuz, toplumsal dayanışmanın güçlenmesi ve ortak değerlerin korunması için ulusal çapta yeni çalışma başlıkları oluşturmuştur.",
        "Yürütülen programlarda eğitim, kültür, aile yapısının güçlendirilmesi ve gençlik çalışmaları öncelikli alanlar olarak belirlenmiştir.",
        "Yeni dönemde yerel teşkilatlarla koordinasyonun artırılması ve katılımcı yönetim modellerinin yaygınlaştırılması hedeflenmektedir.",
      ],
    },
    {
      slug: "duyarli-yaklasimlarla-blog-yazimi",
      title: "Duyarlı Yaklaşımlarla Blog Yazımı",
      excerpt:
        "Federasyon yayınlarında etkili anlatım, doğru bilgi akışı ve toplumsal sorumluluk ilkeleri öne çıkıyor.",
      date: "2026-04-21",
      category: "Duyuru",
      content: [
        "Kurumsal içeriklerde bilgi doğruluğu, açık dil kullanımı ve toplumsal hassasiyetleri gözeten bir iletişim anlayışı benimsenmektedir.",
        "Yayın politikamız, kamusal faydayı önceleyen ve değer odaklı bir yapıyla sürdürülmektedir.",
      ],
    },
    {
      slug: "ilham-veren-hikayelerle-gunluk-yasam",
      title: "İlham Veren Hikâyelerle Günlük Yaşam",
      excerpt:
        "Kültürümüzden beslenen hikâyeler, toplumsal birlik duygusunu güçlendiren ortak hafızayı canlı tutuyor.",
      date: "2026-04-21",
      category: "Haber",
      content: [
        "Toplumun farklı kesimlerinden gelen başarı hikâyeleri, ortak değerlerin gücünü ortaya koyan önemli birer referans niteliğindedir.",
        "Federasyonumuz bu hikâyeleri kayda alarak gelecek nesillere ilham veren bir kültür arşivi oluşturmaktadır.",
      ],
    },
  ],
  contactPage: {
    title: "Bizimle İletişime Geçin",
    description:
      "Görüş, talep ve kurumsal iş birliği konularında bize ulaşabilirsiniz.",
    form: {
      fullName: "Ad Soyad",
      email: "E-posta",
      subject: "Konu",
      message: "Mesajınız",
      send: "Gönder",
      fullNamePlaceholder: "Adınızı yazın",
      emailPlaceholder: "ornek@eposta.com",
      subjectPlaceholder: "Mesaj konusu",
      messagePlaceholder: "Mesajınızı yazın",
    },
    contactCard: "İletişim Bilgileri",
    socialCard: "Sosyal Medya",
    mapPlaceholder: "Harita alanı (Google Maps/iframe entegrasyonu için hazır)",
  },
  nav: [
    { href: "/", label: "Ana Sayfa" },
    { href: "/kurumsal", label: "Kurumsal" },
    { href: "/yonetim-kurulu", label: "Yönetim Kurulu" },
    { href: "/il-temsilcileri", label: "İl Temsilcileri" },
    { href: "/haberler", label: "Haberler" },
    { href: "/iletisim", label: "İletişim" },
  ],
  contactInfo: {
    address: "Ankara, Türkiye",
    phone: "+90 (312) 000 00 00",
    email: "info@anadoluasiretlerfederasyonu.com",
    socials: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/anadoluasiretlerfederasyonu/",
      },
      { label: "X", href: "#" },
      { label: "YouTube", href: "#" },
    ],
  },
  instagram: {
    title: "Instagram'dan Kareler",
    description:
      "Federasyon faaliyetlerinden güncel paylaşımları Instagram hesabımız üzerinden takip edebilirsiniz.",
    cta: "Instagram Profiline Git",
    profileUrl: "https://www.instagram.com/anadoluasiretlerfederasyonu/",
    posts: [],
    bulletin: [
      {
        label: "Ziyaretler",
        title: "Kurumsal Ziyaret ve Temas Bülteni",
        summary:
          "Federasyon temsilcilerimizin kamu kurumları ve paydaşlarla gerçekleştirdiği resmi temaslar.",
        href: "https://www.instagram.com/anadoluasiretlerfederasyonu/",
      },
      {
        label: "Etkinlikler",
        title: "Etkinlik ve Organizasyon Bülteni",
        summary:
          "Toplumsal dayanışma, kültürel buluşmalar ve sahadaki federasyon etkinliklerinden öne çıkanlar.",
        href: "https://www.instagram.com/anadoluasiretlerfederasyonu/",
      },
      {
        label: "Bülten",
        title: "Güncel Duyuru Bülteni",
        summary:
          "Resmi açıklamalar, duyurular ve kurum gündemine ilişkin güncel paylaşımlar.",
        href: "https://www.instagram.com/anadoluasiretlerfederasyonu/",
      },
    ],
  },
};

const enData: SiteData = {
  ...trData,
  brand: {
    name: "Anatolian Tribes Federation",
    motto: "Unity • Culture • Solidarity",
    footerText: "Official platform focused on institutional identity and social solidarity.",
  },
  home: {
    heroBadge: "Official Corporate Platform",
    heroTitle: "A Strong Union Carrying Anatolia's Deep-Rooted Values Into the Future",
    heroDescription:
      "The Anatolian Tribes Federation is a civil representation platform that strengthens unity, culture and solidarity at an institutional level while carrying social memory into the future.",
    heroMissionTitle: "Mission",
    heroMissionDescription:
      "To build a transparent, inclusive and sustainable institutional model for stronger social solidarity and preservation of cultural heritage.",
    ctaCorporate: "Corporate Information",
    ctaNews: "News & Announcements",
    trustLine: "81 provincial representatives, 250+ projects, 5000+ volunteers",
    sectionNewsTitle: "Featured Developments",
    sectionNewsDescription:
      "Federation activities, press statements and public announcements.",
    sectionBoardTitle: "Institutional Leadership Team",
    sectionBoardDescription:
      "A leadership structure responsible for preserving social values and transferring them to future generations.",
    viewAll: "View All",
    readMore: "Read More",
    allBoard: "Full Board",
  },
  stats: [
    {
      label: "Provincial Representatives",
      value: "81",
      description:
        "We operate with active provincial representatives across Türkiye as part of our nationwide organizational structure.",
    },
    {
      label: "Social Projects",
      value: "250+",
      description:
        "We contribute to society through projects in education, culture and social solidarity.",
    },
    {
      label: "Volunteer Members",
      value: "5000+",
      description:
        "We have a strong volunteer community supporting unity and solidarity under our federation.",
    },
  ],
  corporatePage: {
    title: "From a Deep-Rooted Past to a Strong Future",
    description:
      "The institutional structure of the Anatolian Tribes Federation is built on representative strength, value-based governance and social contribution.",
  },
  corporateSections: [
    {
      title: "About Us",
      body: "The Anatolian Tribes Federation transforms its roots into an institutional structure centered on social unity, mutual respect and protection of shared values.",
    },
    {
      title: "Charter",
      body: "Our charter is built on fairness in representation, transparent governance, commitment to ethics and social benefit-oriented decision-making.",
    },
    {
      title: "Mission & Vision",
      body: "Our mission is to preserve our culture and expand solidarity. Our vision is to establish a strong, inclusive and future-oriented civil society model nationwide.",
    },
  ],
  boardPage: {
    title: "Leadership and Institutional Representation",
    description:
      "Our management team represents the federation's vision and continues its work to strengthen the spirit of unity and solidarity.",
  },
  cityPage: {
    title: "Provincial Representatives",
    description:
      "The up-to-date representative list from the official source is presented in a corporate format.",
  },
  newsPage: {
    title: "Latest Developments",
    description:
      "Federation activities, press statements, events and announcements.",
  },
  newsItems: [
    {
      slug: "birlik-kultur-dayanisma-catisi",
      title: "Under the Roof of Unity, Culture and Solidarity",
      excerpt:
        "With the strength of our rooted history, we continue our activities to preserve unity and cultural heritage.",
      date: "2026-04-21",
      category: "News",
      content: [
        "Our federation has created new national workstreams to strengthen social solidarity and protect shared values.",
        "Education, culture, strengthening family structure and youth programs were prioritized in ongoing initiatives.",
        "In the new period, we aim to increase coordination with local organizations and expand participatory governance models.",
      ],
    },
    {
      slug: "duyarli-yaklasimlarla-blog-yazimi",
      title: "Responsible Approach to Institutional Publishing",
      excerpt:
        "Effective communication, accurate information flow and social responsibility stand out in our publications.",
      date: "2026-04-21",
      category: "Announcement",
      content: [
        "Our institutional content approach prioritizes factual accuracy, clear language and social sensitivity.",
        "Our publishing policy continues with a public-benefit and value-oriented structure.",
      ],
    },
    {
      slug: "ilham-veren-hikayelerle-gunluk-yasam",
      title: "Daily Life Through Inspiring Stories",
      excerpt:
        "Stories rooted in our culture keep collective memory alive and strengthen social unity.",
      date: "2026-04-21",
      category: "News",
      content: [
        "Success stories from different communities are important references revealing the power of shared values.",
        "Our federation archives these stories to build a cultural memory that inspires future generations.",
      ],
    },
  ],
  contactPage: {
    title: "Get in Touch With Us",
    description:
      "You can contact us regarding opinions, requests and institutional collaborations.",
    form: {
      fullName: "Full Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send",
      fullNamePlaceholder: "Enter your full name",
      emailPlaceholder: "example@email.com",
      subjectPlaceholder: "Message subject",
      messagePlaceholder: "Write your message",
    },
    contactCard: "Contact Information",
    socialCard: "Social Media",
    mapPlaceholder: "Map area (ready for Google Maps/iframe integration)",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/kurumsal", label: "Corporate" },
    { href: "/yonetim-kurulu", label: "Board" },
    { href: "/il-temsilcileri", label: "Representatives" },
    { href: "/haberler", label: "News" },
    { href: "/iletisim", label: "Contact" },
  ],
  contactInfo: {
    ...trData.contactInfo,
    address: "Ankara, Türkiye",
  },
  instagram: {
    title: "Moments from Instagram",
    description:
      "Follow up-to-date posts from federation activities on our official Instagram account.",
    cta: "Visit Instagram Profile",
    profileUrl: "https://www.instagram.com/anadoluasiretlerfederasyonu/",
    posts: [],
    bulletin: [
      {
        label: "Visits",
        title: "Institutional Visits Bulletin",
        summary:
          "Official meetings and institutional visits carried out by federation representatives.",
        href: "https://www.instagram.com/anadoluasiretlerfederasyonu/",
      },
      {
        label: "Events",
        title: "Events & Organization Bulletin",
        summary:
          "Highlights from social solidarity, cultural gatherings and federation field activities.",
        href: "https://www.instagram.com/anadoluasiretlerfederasyonu/",
      },
      {
        label: "Bulletin",
        title: "Current Announcements Bulletin",
        summary:
          "Latest official announcements, notices and institutional agenda updates.",
        href: "https://www.instagram.com/anadoluasiretlerfederasyonu/",
      },
    ],
  },
};

export function getSiteData(lang: Lang) {
  return lang === "en" ? enData : trData;
}
