# Catalogo vivo Loruni

Pagina richiesta dall'utente il 2026-10-06: [design system locale](http://127.0.0.1:5173/design-system). Link anche nella schermata root. Documentazione visiva del codice attuale, distinta dal port delle pagine Framer.

## Copertura attuale

- 19 colori, con nome semantico/variabile/valore e campioni su fondo scuro/chiaro per leggere le trasparenze.
- 11 preset di testo usando le classi reali: dimensioni responsive effettive, dettagli nativi con intervalli/line-height/tracking/paragraph spacing, OpenType e enfasi definite.
- Funnel Display, Funnel Sans e IBM Plex Sans: 12 varianti locali mostrate con peso e stile reali.
- Preset Link interattivo e tre query responsive originali.
- 25 spaziature, 3 raggi, bordi, ombra di focus, insets/gap composti e layout responsive da consumer Framer verificati. Base HTML interattiva per gli elementi nativi, con esempi di padding/gap/margin reali nel catalogo.
- Valori della fonte per proprietà; configurazioni motion tween/spring; ricette delle varianti e dei loro elementi nominati, default dei controlli. Sono riferimenti, non componenti React implementati.
- Componenti React registrati in componentExamples.ts, con varianti e stati interattivi reali. Il conteggio segue il registro, anche durante importazioni concorrenti. I controlli del catalogo non sono componenti del prodotto.

## Presentazione e ispezione — 2026-10-06

Rifinitura richiesta dall'utente: superfici scure e testo bone, accenti corallo, Funnel per la gerarchia e IBM Plex Sans per i riferimenti. Colori, spaziature, raggi e dimensioni tipografiche consumano i token canonici; la geometria specifica della documentazione rimane locale. Nessuna modifica dei valori di prodotto o del progetto Framer.

- Indice raggruppato in Fondamenti, In codice e Riferimenti, con sezione corrente e anchor native. Su phone parte chiuso, si apre da tastiera/touch e si richiude dopo una scelta; il cambio breakpoint mantiene la navigazione disponibile.
- Ricerca per nome, variabile, categoria e valore, con conteggio, risultati incrementali, messaggio vuoto e Escape/Cancella. catalogIndex.ts deriva i riferimenti dagli export correnti e dal registro React. Ogni risultato porta al campione/proprietà specifico, apre gli antenati details e sposta il focus. Le stesse ancore funzionano al reload.
- Copia delle variabili/classi tramite Clipboard API con stato accessibile. In caso di rifiuto rimane il testo selezionabile e compare un messaggio; il percorso di rifiuto non è stato esercitato in browser.
- Testo tipografico modificabile e ripristinabile, metriche native preservate. Esempi React in superfici distinte dai metadati; le sezioni complete usano tutta la larghezza del catalogo e gli overflow intrinseci rimangono locali.

CatalogTools.tsx e catalogIndex.ts sono strumenti della documentazione. Gli stili dei campioni prodotto e della Base HTML non ricevono override generici da questi controlli. Nessun nuovo runtime di animazione, smoothing, router o dipendenza. L'IntersectionObserver orienta l'indice, senza timeline o progress dello scroll.

## Crescita

Process Row e Our Story Card (2026-10-06) sono registrati con implementazioni React reali: quattro righe/offset Home e controlli padding/contenuti/testo assente/reveal; due card Esperienza, default Desktop/Mobile e controlli delle sole proprietà sorgente. Il Divider condiviso è riusato da entrambi. Nessuna Home o Our Story Section migrata. API/prove in PROCESS-ROW.md e OUR-STORY-CARD.md; il catalogo mantiene separati layout documentale e prodotto.

src/pages/design-system/DesignSystemPage.tsx legge colors/typography/fonts/links/breakpoints/spacing/insets/gaps/radii/borders/shadows/layout da src/styles/token.ts. I token già appartenenti a queste categorie appaiono automaticamente dopo la generazione. Colori di nuovi gruppi hanno anche un fallback Altri colori; nuove categorie di token richiedono una sezione dedicata. Snapshot e policy non entrano nel bundle.

Per ogni nuovo componente importare l'implementazione reale e aggiungere una voce a [componentExamples.ts](../src/pages/design-system/componentExamples.ts): name, description, source e examples. Ogni esempio ha name e preview (ReactNode). Usare createElement da React oppure JSX rinominando il file con estensione .tsx quando serve; non duplicare il markup del componente. Mostrare varianti e stati implementati, comprese interazioni e disabled/error/loading quando esistono. Stato controllato e interattivo possono vivere in un piccolo componente di demo locale. Aggiornare il catalogo nella stessa task del componente.

## Perimetro e verifica

CSS della pagina isolato in DesignSystemPage.css; dimensioni della documentazione non promosse a token di prodotto. Nessuna nuova dependency/router/runtime/motion. /design-system è selezionata in App dal pathname; anchor native per le sezioni, navigazione al reload affidata al fallback HTML di Vite. Hosting futuro deve mantenere il fallback o prerenderizzare la route.

Rispetta le correzioni utente: tre famiglie, nessun UUID nel runtime, nessuna suite aggiunta o eseguita per questa rifinitura. Prove correnti in [DESIGN-SYSTEM-REFINEMENT.md](DESIGN-SYSTEM-REFINEMENT.md). Verifica precedente della fondazione in [FOUNDATION-VERIFICATION.md](FOUNDATION-VERIFICATION.md); [DESIGN-SYSTEM-VERIFICATION.md](DESIGN-SYSTEM-VERIFICATION.md) documenta la creazione iniziale. Fonte token e limiti in [TOKENS.md](TOKENS.md).
