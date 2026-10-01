import { brand } from '@loruni/ui/brand';
export const site = {
  name: brand.name, origin: 'https://loruni.it', language: 'it', locale: 'it_IT',
  description: 'Loruni è un locale serale a Napoli per socializzare, bere cocktail e giocare, anche per chi non gioca.',
  business: {
    city: 'Napoli', address: null, phone: null,
    hours: { opens: '18:30', closes: '02:00', status: 'indicative' },
    experiences: { cocktail: 'Cocktail', digitalGaming: 'Gaming digitale', boardGames: 'Giochi da tavolo' },
  },
  social: { instagram: 'https://www.instagram.com/loruni.it/' },
  app: { appStore: null, googlePlay: null },
  actions: { primary: 'Vieni a trovarci', secondary: 'Scarica l’app' },
  // Only implemented public pages: future routes belong to the brief until built.
  navigation: [{ href: '/', label: brand.name }],
} as const;
export function siteUrl(path = '/') { return new URL(path, site.origin).toString(); }
