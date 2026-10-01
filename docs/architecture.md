# Architettura

## Workspace

Il workspace pnpm include `apps/*` e `packages/*`. Una versione comune di Next.js, React e Motion è definita nel catalogo di `pnpm-workspace.yaml`; le dipendenze locali usano `workspace:*`. Il lockfile è unico e la CI usa `--frozen-lockfile`.

Le app Next.js App Router sono indipendenti, con build, avvio e metadati propri. `transpilePackages` compila il sorgente TypeScript di `@loruni/ui`; non serve un processo di build separato per il pacchetto. Turbopack usa la root del monorepo.

## Confini

```text
apps/landing ──────┐
                  ├── packages/ui
apps/playground ──┘
```

Nessuna dipendenza fra le app. I prototipi appartengono al playground. Solo il materiale confermato può entrare nel pacchetto comune e poi nella landing. Il pacchetto contiene attualmente font, palette, loghi, Button, Switch e Arrow: nessun catalogo astratto preventivo.

Le pagine e i layout della landing sono Server Components. Il playground usa un Client Component per il banco interattivo. Il componente Switch è una piccola boundary client; Motion resta nella sola app sperimentale.

## Mappa del codice

Le regole vincolanti e le convenzioni di naming sono in [AGENTS.md](../AGENTS.md). Questa mappa assegna una casa al codice; i percorsi non ancora necessari non vanno creati vuoti.

| Percorso | Responsabilità |
| --- | --- |
| `apps/<app>/src/app` | Route, layout, metadati e composizione Next.js; CSS di ingresso dell'app |
| `apps/<app>/src/components` | Componenti specifici dell'app; oggi il banco interattivo del playground |
| `apps/<app>/src/features/<feature>` | Feature quando nasce una responsabilità distinta: componenti, hook, servizi, funzioni e tipi locali |
| `apps/<app>/src/hooks` | Hook realmente condivisi tra feature dell'app |
| `apps/<app>/src/utils/<concetto>.ts` | Funzioni pure condivise nell'app, raggruppate per significato |
| `apps/<app>/src/services/<dominio>.ts` | Accesso a un servizio esterno condiviso nell'app; servizi esclusivi restano nella feature |
| `apps/<app>/src/types/<dominio>.ts` | Tipi comuni a consumer distinti nell'app; tipi locali accanto al codice |
| `apps/<app>/src/constants/<concetto>.ts` | Valori applicativi condivisi; valori locali nel modulo proprietario |
| `apps/<app>/src/config` | Configurazione applicativa e ambientale; configurazione Next.js nella root dell'app |
| `apps/<app>/src/styles` | CSS specifico di feature/composizioni quando richiede file propri |
| `apps/<app>/public` | Asset esclusivi serviti dall'app; icone/metadati possono usare le convenzioni `src/app` di Next.js |
| `packages/ui/src` | Primitive UI, font e CSS/token realmente comuni alle app |
| `packages/ui/brand`, `packages/ui/fonts` | Asset condivisi utilizzati e relative licenze |
| `Logo` | Originali del marchio; non è il percorso d'importazione del codice |
| `scripts` | Operazioni di manutenzione del repository, oggi sincronizzazione font |
| `docs` | Decisioni architetturali, workflow e prove; regole di sviluppo soltanto in `AGENTS.md` |

Il codice non viene spostato per riempire la mappa. Un modulo piccolo conserva funzioni e tipi locali; una feature si articola quando contiene responsabilità reali. I pacchetti aggiuntivi richiedono consumer e necessità concreti.

## Font e asset

I WOFF2 latini variabili sono inclusi in repo con licenza OFL e caricati con `next/font/local`. `scripts/sync-fonts.mjs` li rigenera dalle versioni Fontsource fissate nel manifest. I loghi SVG sono copie degli asset originali presenti in `Logo/`.

## Distribuzione

Entrambe le app possono essere distribuite separatamente impostando la root dell'app e rendendo disponibile il workspace completo. Hosting, domini, URL canonical e controllo di accesso del playground sono decisioni aperte. Le direttive robots non sono controllo di accesso. Nessun deploy automatico è configurato.

Fonti tecniche: [pnpm workspaces](https://pnpm.io/workspaces), [Next.js transpilePackages](https://nextjs.org/docs/app/api-reference/config/next-config-js/transpilePackages), [Motion reduced motion](https://motion.dev/docs/react-accessibility).
