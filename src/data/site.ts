export type Language = "en" | "tr";
export type PageKey =
  | "home"
  | "vision"
  | "platform"
  | "infrastructure"
  | "models"
  | "use-cases"
  | "trust"
  | "roadmap";

export const SITE_URL = "https://projectpulsar.org";

export const paths: Record<PageKey, Record<Language, string>> = {
  home: { en: "/en/", tr: "/tr/" },
  vision: { en: "/en/vision/", tr: "/tr/vision/" },
  platform: { en: "/en/platform/", tr: "/tr/platform/" },
  infrastructure: {
    en: "/en/infrastructure/",
    tr: "/tr/infrastructure/"
  },
  models: { en: "/en/models/", tr: "/tr/models/" },
  "use-cases": { en: "/en/use-cases/", tr: "/tr/use-cases/" },
  trust: { en: "/en/trust/", tr: "/tr/trust/" },
  roadmap: { en: "/en/roadmap/", tr: "/tr/roadmap/" }
};

export const labels = {
  en: {
    skip: "Skip to content",
    nav: "Primary navigation",
    theme: "Change color theme",
    language: "Türkçe",
    languageLabel: "View this page in Turkish",
    menu: "Open navigation",
    closeMenu: "Close navigation",
    initiative: "An open R&D initiative",
    explore: "Explore the local architecture",
    source: "View source",
    footer:
      "An independent R&D initiative for secure, sustainable and locally operated open-weight AI.",
    disclaimer:
      "Project PULSAR publishes reference architectures and planning estimates for research. Validate capabilities, prices, taxes and compliance before implementation."
  },
  tr: {
    skip: "İçeriğe geç",
    nav: "Ana menü",
    theme: "Renk temasını değiştir",
    language: "English",
    languageLabel: "Bu sayfayı İngilizce görüntüle",
    menu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    initiative: "Açık bir Ar-Ge girişimi",
    explore: "Lokal mimariyi incele",
    source: "Kaynak kodu görüntüle",
    footer:
      "Güçlü açık-ağırlık modellerin güvenli, sürdürülebilir ve lokal işletimi için bağımsız Ar-Ge girişimi.",
    disclaimer:
      "Project PULSAR araştırma amaçlı referans mimariler ve planlama tahminleri yayımlar. Uygulamadan önce yetenekleri, fiyatları, vergileri ve mevzuatı doğrulayın."
  }
} satisfies Record<Language, Record<string, string>>;

export const navigation: Record<
  Language,
  Array<{ key: PageKey; label: string; href: string }>
> = {
  en: [
    { key: "vision", label: "Vision", href: paths.vision.en },
    { key: "platform", label: "Platform", href: paths.platform.en },
    {
      key: "infrastructure",
      label: "Local runtime",
      href: paths.infrastructure.en
    },
    { key: "models", label: "Models", href: paths.models.en },
    { key: "use-cases", label: "Use cases", href: paths["use-cases"].en },
    { key: "trust", label: "Trust", href: paths.trust.en },
    { key: "roadmap", label: "Roadmap", href: paths.roadmap.en }
  ],
  tr: [
    { key: "vision", label: "Vizyon", href: paths.vision.tr },
    { key: "platform", label: "Platform", href: paths.platform.tr },
    {
      key: "infrastructure",
      label: "Lokal sistem",
      href: paths.infrastructure.tr
    },
    { key: "models", label: "Modeller", href: paths.models.tr },
    {
      key: "use-cases",
      label: "Kullanım alanları",
      href: paths["use-cases"].tr
    },
    { key: "trust", label: "Güven", href: paths.trust.tr },
    { key: "roadmap", label: "Yol haritası", href: paths.roadmap.tr }
  ]
};
