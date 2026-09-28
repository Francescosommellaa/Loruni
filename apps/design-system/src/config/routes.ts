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
    title: "Home",
    description: "Tre direzioni visive esplorative per il futuro design system Loruni.",
    index: false,
    sitemap: false,
  },
  editorial: {
    key: "editorial",
    path: "/direzioni/editoriale",
    title: "Direzione editoriale",
    description: "Esplorazione editoriale per Loruni: ritmo calmo, tipografia espressiva e superfici calde.",
    index: false,
    sitemap: false,
  },
  signal: {
    key: "signal",
    path: "/direzioni/segnaletica",
    title: "Direzione segnaletica",
    description: "Esplorazione segnaletica per Loruni: gerarchia netta, contrasti forti e orientamento immediato.",
    index: false,
    sitemap: false,
  },
  night: {
    key: "night",
    path: "/direzioni/notturna",
    title: "Direzione notturna",
    description: "Esplorazione notturna per Loruni: superfici scure, dettagli luminosi e tono conviviale.",
    index: false,
    sitemap: false,
  },
} as const satisfies Record<string, SiteRoute>;

export type RouteKey = keyof typeof routes;
