export type Language = "en" | "tr";
export type PageKey =
  | "home"
  | "vision"
  | "platform"
  | "use-cases"
  | "trust"
  | "roadmap";

export const SITE_URL = "https://projectpulsar.org";

export const paths: Record<PageKey, Record<Language, string>> = {
  home: { en: "/en/", tr: "/tr/" },
  vision: { en: "/en/vision/", tr: "/tr/vision/" },
  platform: { en: "/en/platform/", tr: "/tr/platform/" },
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
    initiative: "A vision in validation",
    explore: "Explore the platform",
    source: "View source",
    footer:
      "A public vision for sovereign, trusted and adaptive AI infrastructure.",
    disclaimer:
      "Project PULSAR describes a forward-looking platform vision. Capabilities and outcomes remain subject to validation."
  },
  tr: {
    skip: "İçeriğe geç",
    nav: "Ana menü",
    theme: "Renk temasını değiştir",
    language: "English",
    languageLabel: "Bu sayfayı İngilizce görüntüle",
    menu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    initiative: "Doğrulama aşamasında bir vizyon",
    explore: "Platformu keşfet",
    source: "Kaynak kodu görüntüle",
    footer:
      "Egemen, güvenilir ve uyarlanabilir AI altyapısı için kamusal bir vizyon.",
    disclaimer:
      "Project PULSAR ileriye dönük bir platform vizyonunu anlatır. Yetenekler ve sonuçlar doğrulamaya tabidir."
  }
} satisfies Record<Language, Record<string, string>>;

export const navigation: Record<
  Language,
  Array<{ key: PageKey; label: string; href: string }>
> = {
  en: [
    { key: "vision", label: "Vision", href: paths.vision.en },
    { key: "platform", label: "Platform", href: paths.platform.en },
    { key: "use-cases", label: "Use cases", href: paths["use-cases"].en },
    { key: "trust", label: "Trust", href: paths.trust.en },
    { key: "roadmap", label: "Roadmap", href: paths.roadmap.en }
  ],
  tr: [
    { key: "vision", label: "Vizyon", href: paths.vision.tr },
    { key: "platform", label: "Platform", href: paths.platform.tr },
    {
      key: "use-cases",
      label: "Kullanım alanları",
      href: paths["use-cases"].tr
    },
    { key: "trust", label: "Güven", href: paths.trust.tr },
    { key: "roadmap", label: "Yol haritası", href: paths.roadmap.tr }
  ]
};
