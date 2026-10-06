# Prove geometria, base CSS e catalogo

2026-10-06 Europe/Rome. HEAD ddf60f332ec9a6fd07baf7c6447bb75cfccd4ca6, modifiche non committate. Token geometrici/base CSS/catalogo richiesti dall'utente; nessuna suite test aggiunta o eseguita.

Digest SHA256 finale dei 48 input: `cbce618ec0cc14531361ca2ed6ce2f4ce8229659857a52a010d875b520339f69`.

Metodo: tutti i file src/scripts/tests/public/fonts e package.json/lock, tre tsconfig, vite.config.ts, .oxlintrc.json, index.html, token-source/policy e geometry-source/audit. Record ordinati relative-path:SHA256(bytes), uniti da LF e poi SHA256. Docs/screenshot esclusi. Manifest temporaneo loruni-foundation-digest.json; font e fonte/policy nominata preservati.

## Verifiche eseguite

- Live Framer read-only: 8 pagine, 1 template, 22/24 componenti; nessun scope acquisito troncato. Capture 2026-10-05T23:30:51.442Z, 6 ottobre locale. Errori icone di Testimonials Arrow/Logo conservati.
- pnpm tokens:generate genera TS/CSS e audit. Nomi semantici, fonte/policy nominata invariata, tre famiglie autorizzate.
- pnpm build finale passa, TypeScript + Vite: 430 moduli; HTML0.56kB/gzip0.35, CSS32.39kB/gzip5.17, JS253.35kB/gzip76.01. Nessuna nuova dependency.
- Browser1440/810/390×900: 25 spaziature, 3 raggi, nessun overflow; gutter80/40/12px, spazio verticale200/200/100px, body Funnel Sans, color-scheme dark. Raggi/bordi/layout ispezionati visivamente.
- Base HTML: input compilato, select seconda opzione, checkbox selezionata, pulsante React aria-pressed attivo, disabled confermato. Tab al checkbox con outline solid visibile. Console senza warning/error.
- Viewport override resettato, catalogo aperto a Spaziature. Prima cattura dopo resize antecedente alla sezione per assestamento del documento: rinavigazione fra anchor e cattura corretta, stato visibile confermato.
- git diff --check passa; soli avvisi LF/CRLF Windows. Nessun commit/push/deploy o modifica Framer.

JPEG locali ignorati: .impeccable/review/geometry/spacing-mobile.jpg, shapes-desktop.jpg, base-mobile.jpg, current-view.jpg. Documentazione locale, non confronto pixel dell'intero sito.

## Limiti

Ricorrenza geometrica distinta dagli stili globali nominati Framer: override isolati restano locali. Nessun margin esplicito, nessuna coordinata convertita in margine. Due componenti non leggibili impediscono l'attestazione di tutti gli internals. Nessun componente prodotto o pagina portata.

Reduced motion CSS opt-in e MotionConfig presenti nel codice, preferenza live non emulata/verificata in questa task. Nessuna prova screen reader, dispositivi fisici, cross-browser/WCAG/CWV, backend o parità1:1. Prove precedenti dei preset/catalogo restano datate; il digest sopra attesta gli input correnti.
