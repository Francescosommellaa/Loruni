# Design system Loruni

Applicare anche [AGENTS.md root](../../AGENTS.md) e leggere [design system](../../docs/design-system.md). Per nuove route leggere anche [pagine](../../docs/pages.md) e [SEO](../../docs/seo.md).

- Questo workspace è un'app indipendente. Nessun import da `apps/website` e nessun package condiviso implicito.
- La homepage e le tre route `/direzioni/*` sono esplorazioni richieste dall'utente. Non presentarle come sistema ufficiale, non importarle nel website e non estrarre token o componenti di produzione prima di una scelta esplicita.
- `src/data/system-profiles.ts` raccoglie le regole e i criteri di confronto delle proposte; `src/components/system-lab.tsx` e `src/styles/system-lab.css` mostrano la prova nelle stesse schermate tipo. Quando si cambia una proposta, controllare che testo, ruoli colore e resa restino coerenti. I campioni statici non sono componenti di produzione.
- Rispettare [ownership visiva](../../docs/visual-ownership.md). `.page-container` è l'unico owner del gutter e della max-width per regione; non annidarlo e non rimettere padding laterale su sezioni, griglie o card per compensare il layout.
- Funnel Display per i titoli e logo, icona e watermark ufficiali di `Logo/` sono vincoli espliciti dell'utente per le proposte. Usare le copie SVG chiare o scure appropriate alla superficie, senza alterare il segno o il colore.
- Conservare la registry e i metadata locali; ogni pagina deve chiamare `metadataForRoute` con la propria chiave. Verificare canonical, indicizzazione, sitemap e navigazione per ogni modifica di route.
- Mantenere `index: false` e `sitemap: false` per tutte le esplorazioni. Tailwind resta lo styling principale; Motion e GSAP non vanno importati senza un comportamento concreto.
- Conservare `lang="it"`, landmark, un H1 per pagina, skip link, focus visibile e uso da tastiera.

Comandi dalla root: `pnpm dev:ds`, `pnpm build:ds`, `pnpm --filter @loruni/design-system lint`, `pnpm --filter @loruni/design-system typecheck`.
