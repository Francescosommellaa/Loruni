// Synthetic references, not photographs of the Loruni venue. Provenance: docs/reference-media.md.
export const referenceMedia = {
  social: { src: '/media/reference/social.webp', alt: 'Reference sintetica: quattro amici parlano intorno a un tavolo, tra bicchieri e luce serale.' },
  cocktail: { src: '/media/reference/cocktail.webp', alt: 'Reference sintetica: una conversazione al bancone, mani e bicchieri con ghiaccio.' },
  table: { src: '/media/reference/table.webp', alt: 'Reference sintetica: amici intorno a un tavolo con carte, pedine e cocktail.' },
  gaming: { src: '/media/reference/gaming.webp', alt: 'Reference sintetica: amici giocano insieme in una stanza, con controller e schermi sullo sfondo.' },
} as const;
export type ReferenceMediaName = keyof typeof referenceMedia;
