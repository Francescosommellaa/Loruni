# Loruni

Una repo, due app web: il biglietto da visita Loruni e uno spazio indipendente per esplorare layout, componenti e animazioni.

| App | Percorso | Sviluppo locale |
| --- | --- | --- |
| Landing | `apps/landing` | http://127.0.0.1:3000 |
| Playground | `apps/playground` | http://127.0.0.1:3001 |

## Avvio

Richiede Node.js 24 e pnpm 11.24.0. La versione Node di riferimento è in `.node-version`; pnpm è fissato in `package.json`.

```sh
corepack enable
corepack prepare pnpm@11.24.0 --activate
pnpm install --frozen-lockfile
pnpm dev
```

Per lavorare su una sola app:

```sh
pnpm dev:landing
pnpm dev:playground
```

Non sono richiesti account, database o variabili d'ambiente per l'avvio locale. Entrambe le app possono essere costruite e distribuite separatamente.

## Comandi

| Comando | Effetto |
| --- | --- |
| `pnpm check` | Lint, controllo TypeScript e build di entrambe le app |
| `pnpm lint` | ESLint sul codice del monorepo |
| `pnpm typecheck` | Tipi delle due app e del pacchetto condiviso |
| `pnpm build` | Build di entrambe le app |
| `pnpm build:landing` | Build della landing |
| `pnpm build:playground` | Build del playground |
| `pnpm --filter @loruni/landing start` | Avvio build landing sulla porta 3000 |
| `pnpm --filter @loruni/playground start` | Avvio build playground sulla porta 3001 |
| `pnpm fonts:sync` | Rigenera font locali e relative licenze dalle dipendenze fissate |

## Struttura

```text
apps/
  landing/       Next.js App Router: base pubblica Loruni
  playground/    Next.js App Router: esperimenti interattivi
packages/
  ui/            Font, palette, asset logo e pochi controlli condivisi
docs/
  architecture.md
  design.md
  playground.md
  verification.md
scripts/
  sync-fonts.mjs
```

Next.js, React e TypeScript sono condivisi nel workspace pnpm. Motion è usato dal playground. I font Funnel Display e Funnel Sans sono locali: il browser non deve contattare Google Fonts. I file e le licenze sono inclusi in `packages/ui/fonts`.

## Dal playground alla landing

Gli esperimenti restano in `apps/playground`. Una scelta esplicita precede la promozione: si documenta il risultato, si estrae quanto riutilizzabile in `packages/ui` e si integra nella landing. La landing non importa codice dal playground. Cambiare tema, composizione o durata nell'app sperimentale non modifica il sito pubblico.

Il playground parte con tre aree: Layout (editoriale, griglia, righe), Componenti (pulsanti e switch) e Movimento (durata e inversione immediata della direzione). Le prove sono identificate come non approvate e usano contenuti dimostrativi.

## Stato iniziale

Questa inizializzazione rende entrambe le app eseguibili. La landing è una prima composizione tipografica: copy, fotografie, contatti e contenuti operativi definitivi devono ancora essere scelti. Non sono inventati indirizzi, prezzi, orari o servizi. Nessun esperimento è stato promosso automaticamente.

Il playground invia direttive `noindex, nofollow` e un `robots.txt` che esclude tutti i percorsi. Queste direttive non sono autenticazione: prima di ospitare materiale riservato occorre proteggere l'accesso sul servizio di hosting.

## Documentazione

- [Prodotto e perimetro](PRODUCT.md)
- [Architettura](docs/architecture.md)
- [Direzione visiva](docs/design.md)
- [Workflow del playground](docs/playground.md)
- [Verifiche e limiti](docs/verification.md)
- [Istruzioni operative](AGENTS.md)

La pipeline GitHub esegue installazione con lockfile congelato, lint, tipi e build di entrambe le app. Il push del codice non pubblica automaticamente un sito: il target di hosting resta da definire.
