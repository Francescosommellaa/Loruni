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

## Font e asset

I WOFF2 latini variabili sono inclusi in repo con licenza OFL e caricati con `next/font/local`. `scripts/sync-fonts.mjs` li rigenera dalle versioni Fontsource fissate nel manifest. I loghi SVG sono copie degli asset originali presenti in `Logo/`.

## Distribuzione

Entrambe le app possono essere distribuite separatamente impostando la root dell'app e rendendo disponibile il workspace completo. Hosting, domini, URL canonical e controllo di accesso del playground sono decisioni aperte. Le direttive robots non sono controllo di accesso. Nessun deploy automatico è configurato.

Fonti tecniche: [pnpm workspaces](https://pnpm.io/workspaces), [Next.js transpilePackages](https://nextjs.org/docs/app/api-reference/config/next-config-js/transpilePackages), [Motion reduced motion](https://motion.dev/docs/react-accessibility).
