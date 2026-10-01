# Verifiche dell'inizializzazione

Verifiche eseguite il 2026-10-01 su Node.js 24.13.1, pnpm 11.24.0 e Chrome. Per riprodurre i controlli della base: `pnpm install --frozen-lockfile` e `pnpm check`.

## Esiti locali

- Installazione con lockfile congelato completata; `pnpm peers check` senza incompatibilità.
- `pnpm check` superato: ESLint senza warning, TypeScript per app e UI, build di produzione di entrambe le app.
- Landing e playground avviati separatamente sulle porte 3000 e 3001, risposte HTTP 200; font locali caricati e icone presenti nella build.
- Browser a 1440 e 390 px: nessun overflow orizzontale; screenshot desktop/mobile ispezionati per entrambe le app.
- Landing: collegamento principale raggiunge la sezione `#loruni`.
- Playground: composizioni editoriale/griglia/righe, tema chiaro/scuro, contatore pulsante, reset, switch e cambio posizione funzionanti. Tab con frecce e switch con Space verificati; riferimenti ARIA risolti.
- Movimento ridotto: transizioni CSS immediate e preferenza JavaScript aggiornata anche durante la sessione; cambio posizione e ripristino della modalità normale verificati.
- Review Impeccable dello scaffold: frecce sulle righe statiche e riferimenti ARIA dei tab corretti; verdict successivo `ship` limitato alle due correzioni.

La pipeline ripete installazione, lint, tipi e build su Linux per push su `main`, `codex/**` e pull request. L'esito locale non attesta l'esito remoto: la verifica GitHub è associata al commit nella cronologia Actions e nel Brain.

## Perimetro

Due app e pacchetto condiviso, comandi Windows/Linux, font locali, CI, interazioni del playground e comportamento mobile. Nessun deploy né servizio esterno sono inclusi nella verifica.

## Limiti noti

Copy e composizioni dimostrative da confermare, fotografie e contenuti operativi non forniti. Le direttive di non indicizzazione del playground non sono autenticazione. Nessun esperimento è stato approvato automaticamente.

ESLint 9.39.5 è fissato perché la versione 10 provata è incompatibile con i plugin React del pacchetto Next.js corrente; l'aggiornamento richiede una versione compatibile della catena di lint. Non sono inclusi test esaustivi su tutti i browser, screen reader o hosting.
