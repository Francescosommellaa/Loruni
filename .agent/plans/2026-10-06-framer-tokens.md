# Importazione token Framer e CSS base

Autorizzazione: richiesta utente 2026-10-06 di importare tutti i token e base.css. La fonte è lo stesso progetto Framer; nessuna nuova palette, redesign o pagina da ricostruire in questa slice.

Stato iniziale: app Vite bootstrap; 19 colori e 11 stili tipografici nel capture del 2026-10-05. Il collegamento precedente è scaduto (session list senza sessioni); riaperto sullo stesso progetto, sessione 1. Modifiche preesistenti da preservare: piano bootstrap modificato, docs/SKILLS.md e skill-installation.json untracked.

Correzioni esplicite utente: solo Funnel Display, Funnel Sans e IBM Plex Sans; nomi dei token leggibili, nessun UUID nel runtime. Fonte originale conservata, policy separata per correggere le enfasi Inter; font reali, senza sintesi. Enfasi normali seguono la famiglia primaria, corsivi Funnel Sans perché Display non ha corsivi; il peso900 errato viene limitato al massimo Funnel800. IBM Plex Sans già presente resta invariato.

## Lavoro

- [x] Leggere stili live e loro responsive/inheritance; registrare fonte e completezza.
- [x] Importare i token nominati in TypeScript con nomi semantici e CSS generato riproducibile; ID conservati solo nello snapshot; conservare eventuali duplicati nominati e override.
- [x] Caricare i font necessari e costruire base.css/reset senza layout globale da homepage.
- [x] Collegare il bootstrap ai valori importati; lasciare il port delle pagine alla prossima slice.
- [x] Verificare corrispondenza source/CSS, responsive alle soglie, font, console, lint/TS/build e digest finale.
- [x] Aggiornare documentazione e Brain, rileggere i salvataggi.

I token di spazio/raggio/motion si importano se nominati nella fonte. Valori locali non diventano automaticamente una scala globale. Gli stili di testo devono rispettare i veri intervalli Framer: verificare il significato delle soglie API prima di emettere media query. Base/reset non aggiunge smooth scroll, RAF, scene, nuove animazioni o nuove sezioni. Asset/font con provenance e licenza, snapshot fuori dal bundle. Reduced motion resta gestito dalla root MotionConfig, nessun GSAP attivo.

Controlli mirati per generazione/coverage/inheritance; check app e smoke desktop/tablet/phone con misure di stili calcolati. Nessun confronto 1:1 dell'intero sito attestabile dal solo layer token. Nessun commit, publish, deploy o modifica del progetto Framer richiesti.

## Chiusura

Importati19colori/11preset/Link e base.css; correzioni utente applicate con policy separata.12font locali, tre famiglie, nessun UUID/Inter nel runtime.Test aggiunti rimossi su richiesta utente; drift, lint, TS, build pass; browser12font caricati,11preset/enfasi/Link/app verificati. Digest38input102cb70b51641c4bd3d9a991d4a059172ed0562f3de459905e9c7b8682d6b988. Prove e limiti in docs/TOKENS-VERIFICATION.md. Brain aggiornato e rilettura in chiusura. Nessun commit/deploy.
