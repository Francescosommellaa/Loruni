# Token Framer canonici

Stato corrente: 2026-10-06. File di produzione: [token.ts](../src/styles/token.ts) e [token.css](../src/styles/token.css), generati da scripts/framer/tokens.mjs. Le precedenti versioni tokens.ts/css e geometry.ts/css sono wrapper di compatibilità; base.css importa token.css.

Il sistema comprende gli stili nominati Framer (19 colori, 11 preset di testo, Link), 3 famiglie/12 font locali e la geometria verificata, più i valori espliciti di layout, tipografia inline, opacità, layer, gradienti/maschere, motion e varianti/parti dei componenti. Niente scale interpolate, temi aggiunti, valori arrotondati o ID nel runtime. Primitive, semantic, component, controlDefaults e motion restano distinti.

[Audit completo, uso, tracciabilità, verifiche e limiti](TOKEN-AUDIT.md). La fonte è Framer read-only, con la correzione alle tre famiglie confermata dall'utente in questa task e conservata in docs/framer/token-policy.json. Non modificare a mano gli output.

Le soglie tipografiche derivano dai preset serializzati default/medium/small: 0/810/1200px. Le query pagina preservano max-width809.98/1199.98. I valori e la non monotonicità di Functional/28 restano invariati. Nessun colore nominato ha un dark alternativo; nessun tema inventato.

`pnpm tokens:generate` rigenera tutti gli output; `pnpm tokens:check` controlla sincronizzazione e dipendenze. L'ultima richiesta autorizza anche i cinque test inventory preesistenti; nessuna nuova suite aggiunta. Il confronto browser riguarda i consumer attuali, non certifica pagine Framer ancora assenti dal checkout.

[Geometria](LAYOUT-TOKENS.md), [fondazione HTML/CSS](BASE-CSS.md), [catalogo vivo](DESIGN-SYSTEM.md). Prove iniziali storiche in TOKENS-VERIFICATION.md e FOUNDATION-VERIFICATION.md; prove correnti in TOKEN-AUDIT-VERIFICATION.json.
