# Pagina design system

Richiesta esplicita utente: mostrare tutti i token e componenti mentre vengono aggiunti. Questa pagina di documentazione è autorizzata e supera il precedente divieto di cataloghi preventivi per questo perimetro. Non è il port della Home.

Fonte: src/styles/tokens.ts e CSS generati correnti, tre font approvati,19colori/11preset/Link. Nessun nuovo token globale o componente prodotto inventato. Modifiche token/font e skill preesistenti preservate. Nessuna suite test aggiunta/eseguita.

- [x] Creare /design-system con navigazione sezioni,19campioni colore/alpha,11preset e responsive/enfasi,3famiglie/12varianti,Link e breakpoint.
- [x] Derivare le sezioni token dagli export correnti; prevedere esempi React espliciti per i componenti futuri, con stato vuoto onesto.
- [x] Collegare dalla schermata root, mantenere markup e CSS della pagina isolati.
- [x] Verificare nel browser desktop/mobile, navigazione e build; nessun test automatico.
- [x] Documentare come aggiungere componenti e salvare/rileggere Brain.

Layout documentazione: pagina scura, indice laterale desktop e navigazione avvolgente mobile, campioni come contenuto principale, metadati leggibili, dettagli nativi espandibili. Dimensioni reali dei preset anche sopra96px: la visualizzazione della fonte prevale sul limite generico della skill. Controlli e focus appartenenti alla documentazione non promossi a componenti prodotto. Nessuna nuova animazione/RAF/GSAP.

## Chiusura

Pagina live, dati dagli export, componenti futuri registrati esplicitamente. Build/browser pass; nessuna suite. Review e documenter scoped completati, docs/prove e Brain aggiornati. Digest41input41afd5c45a09c10f01d82bc97cb3ff794ff1e36cb73b7bb606c0784a82c44ba3. Vedi docs/DESIGN-SYSTEM-VERIFICATION.md per prove e limiti.
