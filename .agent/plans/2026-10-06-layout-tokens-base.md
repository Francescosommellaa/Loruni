# Token geometrici e base CSS

Richiesta utente: individuare e tokenizzare padding, gap, margin, corner radius e altre primitive reali; completare i default base per una fondazione pulita e aggiornare il catalogo. Nessuna suite test. Fonte Framer read-only sessione1 verificata; preservare tutte le modifiche delle task precedenti.

- [x] Audit live pagine/template/componenti, risoluzione replica e variabili, classificazione di scale ricorrenti contro valori locali.
- [x] Snapshot geometrico con provenienza e copertura; token TS/CSS generati con nomi leggibili, nessun UUID runtime.
- [x] Base reset/defaults per documento/media/form/focus e reduced motion; layout e stili dei componenti restano locali.
- [x] Catalogo mostra scale e contratti reali per spacing/radius/border/layout, non mock di componenti futuri.
- [x] Build e verifiche browser desktop/mobile/keyboard; nessuna suite.
- [x] Docs/AGENTS/Brain aggiornati e salvataggi riletti.

Margini Framer possono non esistere come proprietà: non convertire coordinate absolute in margin. Primitive di spacing condivise possono essere consumate da padding/gap/margin in CSS senza inventare il comportamento della fonte. Evitare clamp arbitrari e normalizzazione dei valori speciali. Default di accessibilità/browser espliciti, senza alterare timing GSAP/Motion o imporre overflow/scrollbar/layout globale.

Prove finali e limiti: docs/FOUNDATION-VERIFICATION.md. Brain aggiornato, nota nuova indicizzata e salvataggi riletti. Nessun commit/push.
