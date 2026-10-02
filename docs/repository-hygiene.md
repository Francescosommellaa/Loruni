# Git e igiene del repository

Policy vincolante consolidata dalle 68 regole dell'utente il 2026-10-01. `AGENTS.md` definisce il workflow; `.gitignore` contiene le regole eseguibili. La scelta di versionare dipende dalla funzione del file e dalla riproducibilità, non dal suo autore o dal nome della directory.

## File condivisi e file locali

| Categoria | Policy Loruni |
| --- | --- |
| Source, componenti, CSS/token, route e source SEO | Versionati, comprese convenzioni Next.js come `robots.ts`, `sitemap.ts` e `manifest.ts` quando presenti |
| Configurazione package/TypeScript/Next/ESLint, `.node-version`, workflow GitHub | Versionata; pnpm è il solo package manager e `pnpm-lock.yaml` il lockfile ufficiale |
| AGENTS, documentazione, decisioni di design e prodotto | Versionate; nessuna credenziale o path personale necessario al workflow |
| Asset in Logo, font/loghi in packages/ui, icone e futuri asset public | Versionati quando pubblicabili; nessun ignore globale di immagini/font/SVG o public |
| Test, fixture, snapshot e golden screenshot intenzionali | Versionabili; non confonderli con report e screenshot temporanei |
| Dependency installate, `.next`, `out`, `dist`, TypeScript incrementale | Ignorati; non fanno parte del source |
| `next-env.d.ts` nelle due app | Generato da Next.js, ignorato e rimosso dall'indice; `next typegen` precede `tsc` negli script typecheck |
| Environment reali, chiavi private e JSON di credenziali | Fuori Git; eccezioni pubbliche solo se necessarie e verificate |
| Report, log, screenshot/browser output temporanei | Fuori Git; output locale nella directory root `output/`, report locali in `reports/local/` quando usati |
| Preferenze IDE/OS, backup e file temporanei | Ignorati; configurazioni `.vscode` davvero condivise restano visibili |

Il template root `.env.example` documenta che l'avvio locale non richiede variabili. Non aggiungere DATABASE_URL/API_KEY o altre variabili speculative: quando arriva una necessità reale, documentare il proprietario e aggiungere il nome con valore vuoto al template pertinente. I template per ambiente `.env.*.example` sono ammessi; i valori reali restano locali. Qualunque dato inviato al browser, compreso `NEXT_PUBLIC_*`, è pubblico.

## Tooling AI condiviso

La strategia corrente è repo-local per le skill condivise già presenti in `.agents/skills`, non una conversione automatica a tooling personale. Conservare fonti e versioni/provenienza quando disponibili. Il manifest `.agents/skills/.impeccable-install.json` identifica repository, tag, commit e hash del payload: è metadato condiviso di provenienza, non stato di una sessione. Non copiarvi percorsi personali o credenziali. Skill personali vanno installate nell'ambiente utente; non introdurre copie divergenti della stessa installazione.

`.codex/hooks.json` è condiviso: invoca gli script Impeccable tramite un percorso relativo al repository. Non c'è motivo di nascondere l'intera `.codex`. Configurazione ufficiale eventualmente aggiunta deve essere portabile; credenziali, trust/preferenze individuali, override, sessioni e cache appartengono all'ambiente utente o a percorsi locali ignorati. Le regole attuali coprono auth, config/hooks locali, cache, sessioni e log; un nuovo file runtime richiede verifica e un pattern preciso.

`.impeccable/config.json` e `.impeccable/design.json` restano versionati. Configurazioni condivise `live/config.json` ed eventuali specifiche ufficiali in `surfaces/` e `critique/` devono restare visibili quando presenti. Cache hook, pending state, PNG temporanei, review/questions, stato server, sessioni, preview, annotazioni, cache e transazioni manuali live sono ignorati tramite il blocco fornito dall'utente, mantenuto con i marker `impeccable-ignore-start/end`. I mock temporanei già usati dal tool sono ignorati separatamente. Non usare `.impeccable/` come ignore globale.

Non versionare conversazioni, prompt temporanei, scratchpad, browser state o log grezzi degli agenti. Una decisione utile diventa documentazione ufficiale, distinta dalla sessione che l'ha prodotta. Il Brain Loruni resta separato dal repository e si usa esclusivamente tramite MCP; credenziali MCP non vanno nelle configurazioni condivise.

## Eccezioni concrete per artefatti generati

- I WOFF2 e le licenze in `packages/ui/fonts` sono asset distribuiti dal prodotto e consumati da `next/font/local`: restano disponibili nel checkout senza una generazione obbligatoria prima della build. `scripts/sync-fonts.mjs` li sincronizza dalle versioni fissate nel manifest. Le licenze incluse sono SIL OFL; preservarle insieme ai font. Non pubblicare futuri font con licenza non redistribuibile.
- `.impeccable/design.json` è il sidecar condiviso utilizzato dagli strumenti di design, esplicitamente ammesso dalla policy. È derivato: brand config, CSS e `DESIGN.md` restano le fonti del sistema, senza una seconda configurazione da modificare indipendentemente.
- `apps/*/public/brand/` contiene esclusivamente copie generate da `scripts/sync-brand-assets.mjs` prima di dev/build. È ignorato; SVG sorgenti in `packages/ui/brand` e PNG originali in `Logo` restano versionati. Non inserire qui asset nuovi senza aggiungerne la fonte e la sincronizzazione.
- Loghi esportati, icone e baseline intenzionali appartengono al prodotto o alla documentazione quando scelti esplicitamente; non sono screenshot di debug solo perché esportati da uno strumento.

Per ogni altro generato chiedere se serve per utilizzo, distribuzione/pubblicazione o come artefatto intenzionale. Se ricostruibile durante install/build senza tale motivo, preferire di non tracciarlo. Non introdurre cartelle di backup o copie `final2` per conservare vecchie versioni: la cronologia è Git.

## Sicurezza e configurazione ignore

Assumere che un file committato possa diventare pubblico. Cercare anche in commenti, test, documenti ed esempi: token, chiavi, credenziali, endpoint privati, dati personali superflui e percorsi personali. Nei workflow usare il secret store GitHub; per servizi/MCP usare variabili o un secret manager, mai valori reali nel JSON/TOML. `.gitignore` non è una verifica completa dei contenuti né un secret manager.

Se una credenziale è stata pubblicata: considerarla compromessa, revocarla/ruotarla, rimuoverla dalle fonti e valutare la cronologia. La sola aggiunta di un ignore non risolve l'esposizione. Bonifica storica e force push richiedono coordinamento e autorizzazione; evitare di stampare o conservare il valore nei log delle verifiche.

Gli ignore sono adattati a Next.js/pnpm e al tooling realmente presente. Non aggiungere regole per Turbo, Vite, Prisma, provider hosting, test runner o database non usati. Quando viene introdotto un tool: distinguere configurazione/source, output, cache e credenziali; configurare prima destinazioni corrette, poi ignore precisi. Per database/upload locali ignorare il percorso runtime reale, non tutte le estensioni `.db` o tutte le directory di asset.

Non nascondere errori organizzativi con centinaia di pattern. Non ignorare genericamente `.json`, `.md`, `.png`, `.svg`, `.css`, file config, public/docs, `.github`, `.agents`, `.codex` o `.impeccable`. Per PEM/credenziali nominali gli ignore attuali sono prudenziali: un certificato pubblico o una fixture necessaria richiede un'eccezione puntuale, controllo del contenuto e motivazione documentata.

## Verifiche prima e dopo un commit

1. Leggere `git status --short`, diff e staged diff; distinguere il lavoro della task da modifiche preesistenti.
2. Controllare contenuti e nomi: source/config necessari, segreti, output generati, stato personale/AI e asset/licenze.
3. Usare `git check-ignore -v --no-index <percorso>` per verificare il pattern applicato anche ai file tracciati; provare sia file locali che file condivisi. Considerare anche exclude globali o `.git/info/exclude`, senza modificarli implicitamente.
4. Cercare file già tracciati che ora corrispondono a ignore con `git ls-files --cached --ignored --exclude-standard`. Un ignore non li rimuove: usare `git rm --cached` soltanto per file identificati nel perimetro, conservandoli sul disco quando necessario.
5. Stage esplicito e review del diff finale; eseguire le verifiche proporzionate e quelle richieste in AGENTS. Dopo install/build/lint/typecheck confrontare lo stato: nessun nuovo file locale o modifica automatica tracciata.

Un checkout con lavoro utente preesistente può restare dirty: la verifica corretta è che i comandi non aggiungano rumore. Non usare reset/clean, ignore o staging indiscriminato per farlo risultare pulito. Un audit dei nomi/file correnti non certifica l'assenza di segreti in tutta la cronologia.

Rivedere questa policy quando cambia tooling, struttura di output o strategia di configurazione. Se in futuro si decide esplicitamente un repository senza tooling specifico Codex/Impeccable, migrare prima la configurazione personale nell'ambiente utente; non simulare la migrazione nascondendo directory ancora necessarie.
