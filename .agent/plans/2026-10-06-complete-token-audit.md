# Audit completo e token canonici — 2026-10-06

Autorizzazione: fonte Framer unica autorità per i valori; conservare la correzione alle tre famiglie font confermata durante questa task. Nessun redesign/source edit/publish. Tutte le modifiche già presenti all'inizio restano indipendenti; nessun ripristino Logo.

1. Audit live di 8 pagine, template, 24 componenti, preset, controlli dei 9 componenti esterni e due file TSX, incluse proprietà inline/default/motion e variabili. Recupero mirato dei due scope con errori icona. Nessuna copia del codice esterno.
2. Inventario completo fuori runtime: valori esatti, proprietà/contesto, repliche, uso/frequenza, classificazione A/B/C, provenienza, copertura e limiti. Nessun rettangolo misurato convertito in token.
3. `src/styles/token.ts` / `token.css` canonici e generati; export precedenti mantenuti come compatibilità, con primitive deduplicate e riferimenti. Categorie solo documentate. CSS/TS da un'unica derivazione con controllo automatico.
4. Import canonici e sostituzioni hardcoded equivalenti; CSS documentazione e helper tecnici classificati separatamente. Catalogo delle nuove categorie reali, senza nuovi componenti prodotto.
5. tokens:check, lint, typecheck, build e suite inventory preesistente (espressamente richieste dall'ultimo prompt); niente nuove suite. Browser prima/dopo alle soglie responsive, campioni e console. Digest finale, documentazione e Brain riletti.

Limite da risolvere o dichiarare: API generica recupera geometria di Logo/Testimonials Arrow, ma non gli interni delle icone; controlli degli esterni non provano gli interni proprietari. Non attestare completezza assoluta o fidelity delle pagine non portate.

Esito: implementazione canonica e verifiche eseguite. 508 primitive, 71 varianti con parti immediate nominate, 21 transizioni; 19 colori nominati su17 valori. tokens:check/lint/typecheck/build e5testpreesistenti passano; confronto browser6viewport identico nei campioni e nessun overflow. Prova finale53inputSHA598b4aa555a535e9744250e47203420aa8e843d10adaad2dcd2b23cd2ee9154b in docs/TOKEN-AUDIT-VERIFICATION.json. Brain aggiornato/riletto; nessun commit.

Copertura assoluta: hard_stop per interni icone/esterni non esposti dalla fonte; dettagli in TOKEN-AUDIT.md. Non trasformare questo limite in una dichiarazione di design system integralmente certificato.
