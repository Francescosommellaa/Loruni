# Loruni

Foundation del repository Loruni: due applicazioni Next.js indipendenti, con pagine provvisorie e SEO tecnico predisposto. La direzione grafica e il design system devono ancora essere definiti.

| Applicazione | Workspace | Sviluppo | Dominio canonico |
| --- | --- | --- | --- |
| Website | `@loruni/website` | `http://localhost:3000` | `https://loruni.it` |
| Design system | `@loruni/design-system` | `http://localhost:3001` | `https://ds.loruni.it` |

## Avvio

Richiesti Node.js **24.x** e pnpm **10.34.5**. La versione pnpm è fissata nel `packageManager` del manifest root; usare pnpm e il lockfile unico del repository.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Non servono variabili d'ambiente per lo sviluppo locale. `VERCEL_ENV` governa soltanto l'indicizzazione: tutte le pagine iniziali restano `noindex`, anche in produzione.

## Comandi

Eseguire dalla root:

| Comando | Risultato |
| --- | --- |
| `pnpm dev` | Avvia entrambe le app in parallelo |
| `pnpm dev:website` | Avvia il website sulla porta 3000 |
| `pnpm dev:ds` | Avvia il design system sulla porta 3001 |
| `pnpm build` | Compila entrambe le app |
| `pnpm build:website` | Compila il website |
| `pnpm build:ds` | Compila il design system |
| `pnpm lint` | Esegue ESLint in entrambe le app |
| `pnpm typecheck` | Genera i tipi Next.js e verifica TypeScript in entrambe le app |

Dopo la build, `pnpm --filter @loruni/website start` e `pnpm --filter @loruni/design-system start` avviano le rispettive app sulle stesse porte dello sviluppo.

## Struttura e letture

- `apps/website`: sito pubblico, con dieci route provvisorie.
- `apps/design-system`: homepage di confronto e tre direzioni visive esplorative (`/direzioni/editoriale`, `/direzioni/segnaletica`, `/direzioni/notturna`); nessuna è ancora il design system approvato.
- `Logo/`: asset ufficiali originali, da conservare integralmente.
- `docs/`: [indice delle guide](docs/README.md), con letture mirate per ogni attività.

Stack: Next.js, React, TypeScript strict e Tailwind. Motion e GSAP sono installati per il lavoro futuro; i placeholder non li importano. Ogni app possiede configurazione, route, componenti e asset propri. Non esistono import reciproci o package condivisi.

Per gli agenti, partire da [AGENTS.md](AGENTS.md). Per il rilascio, leggere [architettura](docs/architecture.md) e [SEO](docs/seo.md): sono previsti due progetti Vercel separati; questo repository non attesta un deploy.

Il prossimo passo è esaminare le tre direzioni nel sito DS, scegliere cosa funziona e poi definire il design system e la direzione grafica di Loruni.
