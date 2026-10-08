# Prove importazione token

Stato finale 2026-10-06 Europe/Rome, dopo le correzioni esplicite utente: solo Funnel Display, Funnel Sans e IBM Plex Sans; nomi e riferimenti token semantici, senza UUID nel runtime. HEAD base ddf60f332ec9a6fd07baf7c6447bb75cfccd4ca6; modifiche non committate. Preservati piano bootstrap e documenti skill preesistenti. Nessuna modifica a Framer, publish o deploy.

## Input finali

SHA256: 102cb70b51641c4bd3d9a991d4a059172ed0562f3de459905e9c7b8682d6b988.

38 file: tutti i file sotto src/scripts/tests/public/fonts; package.json/pnpm-lock.yaml, tre tsconfig, vite.config.ts, .oxlintrc.json, index.html, token-source.json e token-policy.json. Metodo: record ordinati relative-path:SHA256(file bytes), uniti da LF e SHA256 della stringa. Documentazione/prove escluse per evitare autoreferenza. I 12 WOFF2 corrispondono ai digest/byte/URL del capture e della policy e hanno header wOF2; 303360 byte totali. Licenze delle tre famiglie conservate.

## Prove eseguite

- Fonte Framer letta in sessione1 dello stesso progetto: getProjectInfo/getColorStyles/getTextStyles/getNodesOfTypes/serializeNodes/serialize. Capture iniziato 2026-10-05T22:54:03.015Z, 2026-10-06 locale: 19 colori/11 testi/1 Link canonici, breakpoint e superfici Home verificati. Letture sequenziali, non snapshot atomico. Capture originale invariato; policy separata per le correzioni utente.
- pnpm tokens:generate e tokens:check passano; output riproducibili da fonte più policy.
- Prima della successiva indicazione utente erano stati eseguiti10test. L’utente ha poi richiesto di non fare test: tests/tokens.test.mjs aggiunto in questa task è stato rimosso, suite non ripetuta sullo stato finale. I test inventory preesistenti sono preservati. La validazione finale usa browser, generazione e build.
- pnpm lint, typecheck e build passano sullo stato finale. Build HTML 0.56kB, CSS 18.87kB/2.02 gzip, JS 230.48kB/70.16 gzip. Nessuna nuova dependency; lockfile invariato.
- git diff --check passa. Ricerca nei CSS/TS runtime: nessuna corrispondenza per Inter, --token- o UUID. Font validati con SHA256, byte e header.
- Prima della correzione: 11 preset misurati a390/809/810/1199/1200/1440px per size/line-height/letter-spacing; le correzioni non modificano questi valori. Valori responsive non modificati; non ripetuta l'intera matrice browser dopo la correzione.
- Dopo la correzione: fixture temporaneo con 11 preset ed enfasi strong/em/nidificate. Misurate famiglie, pesi e colori: i campi corretti di enfasi usano Funnel Display/Sans, quelli IBM Plex restano IBM Plex. Link rgb(255, 85, 56). Il caricamento nativo document.fonts.load esposto nel DOM conferma tutti i12 font-face su campione italiano, una faccia per richiesta. Console warning/error vuota. Fixture rimosso.
- App finale dopo la correzione: titolo Funnel Display, body Funnel Sans, testo avorio, sfondo rgb(26, 25, 23), nessun overflow al viewport browser corrente. Il precedente controllo app390/810/1440 è antecedente alla correzione; nessuna nuova composizione/layout introdotta.

## Limiti

Prova del layer token e della schermata di sviluppo, non equivalenza1:1 delle pagine Framer. Base.css traduce default/reset, non esporta il CSS interno di Framer. Le enfasi Inter corrette non sono presentate come copia invariata della fonte. Preset senza font di enfasi espliciti continuano a usare le regole native ereditate, con font-synthesis none.

Non verificati glyph di tutte le lingue, dispositivi fisici, screen-reader/cross-browser/CWV, componenti e animazioni futuri. Nessun runtime GSAP attivo. Valori locali di layout/raggio/motion non promossi a token globali. Snapshot e policy fuori dagli import browser.
