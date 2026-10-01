# Loruni

Un repository pnpm, due app indipendenti: landing pubblica e playground. **Fase 02: architettura narrativa**. La home è uno scheletro navigabile di «una notte dentro Loruni», con copy provvisorio e placeholder neutri. Design/static composition e motion definitivi verranno sviluppati nelle fasi successive.

| App | Percorso | Avvio locale |
| --- | --- | --- |
| Landing | `apps/landing` | http://127.0.0.1:3000 |
| Playground | `apps/playground` | http://127.0.0.1:3001 |

## Avvio

Richiede Node.js 24 (`.node-version`) e pnpm 11.24.0, fissato nel manifest.

```sh
corepack enable
corepack prepare pnpm@11.24.0 --activate
pnpm install --frozen-lockfile
pnpm dev
```

Nessun account, database o environment reale è richiesto per lo sviluppo locale. Entrambe le app si costruiscono e distribuiscono separatamente.

| Comando | Effetto |
| --- | --- |
| `pnpm dev:landing` / `pnpm dev:playground` | Sviluppo di una sola app |
| `pnpm check` | Lint, TypeScript e build delle due app |
| `pnpm lint` / `pnpm typecheck` / `pnpm build` | Gate separati |
| `pnpm build:landing` / `pnpm build:playground` | Build indipendenti |
| `pnpm --filter @loruni/landing start` | Landing production locale, porta 3000 |
| `pnpm --filter @loruni/playground start` | Playground production locale, porta 3001 |
| `pnpm assets:sync` | Copie pubbliche degli asset ufficiali; automatico prima di dev/build |
| `pnpm fonts:sync` | Sincronizza font locali e licenze dalle versioni fissate |

## Struttura

```text
apps/
  landing/src/
    app/              Route, layout, metadata nativi Next.js
    config/           Site/business, ambiente e policy SEO
  playground/src/
    app/              Layout e route interne
    components/       Controlli e diagnostica GSAP
packages/ui/
  src/                CSS Modules, token globali, primitive e motion scope
  fonts/              Funnel Display, Funnel Sans e licenze
  brand/              SVG ufficiali condivisi
Logo/                 Export originali del marchio
scripts/              Sincronizzazione font/asset
docs/                 Decisioni e verifiche
```

Next.js App Router, React, TypeScript strict e CSS Modules. GSAP/ScrollTrigger sono importati su richiesta tramite il modulo motion condiviso, con scope, cleanup e reduced motion; nessuna animazione scenografica è implementata. I font usano `next/font/local`, senza richieste a Google Fonts.

Il playground prova tema, pulsanti e ciclo di vita del motore. Gli esperimenti restano locali: una scelta esplicita precede la promozione nella landing. La landing non importa dal playground.

## SEO e pubblicazione

Origine pubblica confermata: **https://loruni.it**, in `apps/landing/src/config/site.ts`. Dati mancanti rimangono null/TBD.

La build predefinita dello scaffold è **noindex** e ha sitemap vuota. `SITE_ENV=production` abilita indicizzazione e sitemap: impostarlo **prima della build**, soltanto quando la home reale sarà pronta sul dominio ufficiale. Le verification Google/Bing sono opzionali e reali, senza placeholder; vedere `.env.example` e [SEO](docs/seo.md).

Il playground è sempre noindex/nofollow, con header e metadata; robots consente la scansione per leggere noindex. Queste direttive non proteggono l'accesso: hosting e protezione del laboratorio sono TBD.

GitHub Actions verifica installazione deterministica, lint, tipi e build su push/PR. Nessun deploy automatico è configurato.

## Documentazione

- [Prodotto](PRODUCT.md) e [brief landing](docs/landing-brief.md)
- [Narrativa home](docs/landing-narrative.md): scene, ritmo relativo, transizioni future e mobile
- [Architettura](docs/architecture.md)
- [Design system](docs/design-system.md) e [DESIGN.md](DESIGN.md)
- [SEO e discovery AI](docs/seo.md)
- [Budget performance e strategia visual regression](docs/performance.md)
- [Playground](docs/playground.md)
- [Git e igiene repository](docs/repository-hygiene.md)
- [Verifiche](docs/verification.md)
- [Istruzioni operative](AGENTS.md)
