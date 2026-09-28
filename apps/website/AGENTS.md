# Website Loruni

Applicare anche [AGENTS.md root](../../AGENTS.md). Prima di lavorare leggere [website](../../docs/website.md); per route e metadata aggiungere [pagine](../../docs/pages.md) e [SEO](../../docs/seo.md).

- Questo workspace possiede tutte le proprie configurazioni, pagine e risorse. Nessun import da `apps/design-system`.
- Usare pagine Server Component esplicite e la registry locale; ogni pagina deve chiamare `metadataForRoute` con la propria chiave.
- Derivare i link di navigazione dalla registry. Verificare sempre canonical, indicizzazione, sitemap e navigazione quando cambia una pagina.
- Mantenere i placeholder `index: false` e `sitemap: false` finché contenuti e pubblicazione non sono approvati. Non scrivere testi commerciali o legali autonomamente.
- Usare Tailwind senza anticipare un tema o token. Motion e GSAP restano senza import finché non esiste un comportamento approvato.
- Conservare `lang="it"`, landmark, un H1 per pagina, skip link, focus visibile e uso da tastiera.

Comandi dalla root: `pnpm dev:website`, `pnpm build:website`, `pnpm --filter @loruni/website lint`, `pnpm --filter @loruni/website typecheck`.
