export type SiteRoute = {
  key: string;
  path: string;
  title: string;
  description: string;
  index: boolean;
  sitemap: boolean;
  navigation?: "header" | "footer";
};

export const routes = {
  home: {
    key: "home",
    path: "/",
    title: "Loruni",
    description: "Il sito Loruni è in preparazione.",
    index: false,
    sitemap: false,
    navigation: "header",
  },
  app: {
    key: "app",
    path: "/app",
    title: "App",
    description: "La pagina App è in preparazione.",
    index: false,
    sitemap: false,
    navigation: "header",
  },
  giochi: {
    key: "giochi",
    path: "/giochi",
    title: "Giochi",
    description: "La pagina Giochi è in preparazione.",
    index: false,
    sitemap: false,
    navigation: "header",
  },
  eventi: {
    key: "eventi",
    path: "/eventi",
    title: "Eventi",
    description: "La pagina Eventi è in preparazione.",
    index: false,
    sitemap: false,
    navigation: "header",
  },
  community: {
    key: "community",
    path: "/community",
    title: "Community",
    description: "La pagina Community è in preparazione.",
    index: false,
    sitemap: false,
    navigation: "header",
  },
  chiSiamo: {
    key: "chiSiamo",
    path: "/chi-siamo",
    title: "Chi siamo",
    description: "La pagina Chi siamo è in preparazione.",
    index: false,
    sitemap: false,
    navigation: "header",
  },
  faq: {
    key: "faq",
    path: "/faq",
    title: "FAQ",
    description: "La pagina FAQ è in preparazione.",
    index: false,
    sitemap: false,
    navigation: "header",
  },
  contatti: {
    key: "contatti",
    path: "/contatti",
    title: "Contatti",
    description: "La pagina Contatti è in preparazione.",
    index: false,
    sitemap: false,
    navigation: "header",
  },
  privacy: {
    key: "privacy",
    path: "/privacy",
    title: "Privacy",
    description: "Informativa privacy da completare prima della pubblicazione.",
    index: false,
    sitemap: false,
    navigation: "footer",
  },
  cookie: {
    key: "cookie",
    path: "/cookie",
    title: "Cookie",
    description: "Informativa cookie da completare prima della pubblicazione.",
    index: false,
    sitemap: false,
    navigation: "footer",
  },
} as const satisfies Record<string, SiteRoute>;

export type RouteKey = keyof typeof routes;
