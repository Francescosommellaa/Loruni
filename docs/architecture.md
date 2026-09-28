# Architettura

## Workspace

Il monorepo pnpm contiene due app Next.js App Router indipendenti: `apps/website` (`@loruni/website`) e `apps/design-system` (`@loruni/design-system`). Non ci sono package condivisi o import fra app. La duplicazione delle piccole configurazioni è intenzionale: ogni app deve poter evolvere e venire distribuita separatamente.

La root possiede il lockfile unico e i comandi di orchestrazione. Ogni app possiede Next.js, TypeScript strict, ESLint, Tailwind/PostCSS, registry delle route e configurazione del sito. Non sono previsti Turborepo, formatter aggiuntivi, hook Git o un generatore di pagine.

## Stack approvato

| Strumento | Versione iniziale | Ruolo |
| --- | --- | --- |
| Node.js | 24.x | Runtime |
| pnpm | 10.34.5 | Workspace e dipendenze |
| Next.js | 16.3.6 | App Router e metadata nativi |
| React / React DOM | 19.3.0 | Rendering |
| TypeScript | 6.0.3 | Tipi strict |
| ESLint | 9.39.5 | Analisi statica con configurazione Next.js |
| Tailwind CSS | 4.3.3 | Styling principale tramite PostCSS |
| Motion | 13.4.3 | Future interazioni e transizioni di stato React |
| GSAP | 3.15.0 | Future timeline e animazioni su scroll |

I manifest e `pnpm-lock.yaml` sono la fonte corrente delle versioni. pnpm 10 segue il supporto automatico Vercel; TypeScript ed ESLint restano nelle versioni approvate per la compatibilità dello stack. Un aggiornamento richiede verifica dei peer dependency e ripetizione di lint, typecheck e build.

Le pagine sono Server Component. I soli Client Component iniziali sono gli error boundary richiesti da Next.js. Motion e GSAP sono installati ma non importati: in futuro introdurre piccoli confini client accanto ai consumer reali, senza provider globali preventivi. Non esistono ancora tema brand, token o scala tipografica.

## Fonti di verità

| Tema | Fonte |
| --- | --- |
| Comandi, versioni e dipendenze risolte | Manifest root/app e lockfile |
| Route effettivamente esposte | `src/app/` nell'app |
| Titoli, descrizioni, flag SEO e navigazione | `src/config/routes.ts` nell'app |
| Nome e dominio canonico | `src/config/site.ts` nell'app |
| Ambiente di indicizzazione | `src/config/environment.ts` nell'app e `VERCEL_ENV` |
| Decisioni strutturali | Questa guida, verificata contro il codice |
| Ownership di layout e stile | [Contratto visuale](visual-ownership.md), verificato contro gli owner nel codice |

Il sito pubblico usa la porta 3000; il design system usa la 3001. `pnpm dev` avvia entrambi tramite parallelismo pnpm. I typecheck eseguono `next typegen` prima di `tsc --noEmit`.

## CI e predisposizione Vercel

Il workflow GitHub esegue installazione con lockfile congelato, lint, typecheck e build delle due app. Il successo locale non equivale al successo del workflow remoto.

La configurazione prevista usa due progetti Vercel collegati allo stesso repository:

| Progetto | Root Directory | Preset | Dominio canonico |
| --- | --- | --- | --- |
| Website | `apps/website` | Next.js | `loruni.it` |
| Design system | `apps/design-system` | Next.js | `ds.loruni.it` |

Usare Node 24.x e i comandi standard rilevati da Vercel, con installazione del workspace dal lockfile root. Non serve `vercel.json`. Vercel fornisce `VERCEL_ENV`; non aggiungere variabili per cambiare i domini canonici. Seguire la guida [monorepo Vercel](https://vercel.com/docs/monorepos) e il [supporto package manager](https://vercel.com/docs/package-managers) quando si configurano i progetti.

Non è stato richiesto un deploy. Prima della pubblicazione servono contenuti approvati, verifica SEO per ambiente e prova del rilascio effettivo. Anche la produzione mantiene inizialmente tutti i placeholder `noindex`.
