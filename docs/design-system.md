# Design system

L'app `@loruni/design-system` usa il dominio canonico `https://ds.loruni.it`. Su richiesta dell'utente ospita ora tre **direzioni esplorative** visitabili dalla homepage:

| Direzione | Route | Ipotesi visiva |
| --- | --- | --- |
| Editoriale | `/direzioni/editoriale` | Carta calda, tipografia narrativa, ritmo ampio |
| Segnaletica | `/direzioni/segnaletica` | Blocchi netti, contrasto e orientamento rapido |
| Notturna | `/direzioni/notturna` | Superfici scure, tono raccolto e conviviale |

Nessuna direzione è approvata o implementata nel website. L'utente ha fissato **Funnel Display per i titoli** e l'uso dei segni ufficiali come vincoli comuni alle tre proposte. Colori, spaziature ed esempi di controllo sono **materiale di confronto**, non token o componenti pubblicati. Le tre pagine usano lo stesso contenuto dimostrativo per rendere il confronto più chiaro. La scelta, le correzioni e l'eventuale estrazione in un sistema definitivo spettano a una decisione successiva dell'utente.

Il principio [un owner per decisione visuale](visual-ownership.md) è invece una **regola approvata** comune alle tre proposte e ai futuri consumer. Il sito DS ne applica già il contratto di gutter e larghezza nelle proprie regioni; gli altri ruoli diventano token e primitive di produzione solo dopo una scelta esplicita.

La homepage aggiunge una tabella neutra con nove criteri identici per le tre direzioni. Ogni pagina di dettaglio comprende campioni di componenti e stati, esempi di contenuto lungo, lista e dettaglio evento, FAQ, form, stato vuoto e navigazione mobile, più un inventario di ruoli colore e regole esplorative. Le regole e i valori colore sono in `apps/design-system/src/data/system-profiles.ts`; campioni e interfaccia li leggono dalla stessa fonte. La rappresentazione è in `src/components/system-lab.tsx` e `src/styles/system-lab.css`. Questa è la fonte delle **proposte**, non dei futuri token di produzione. Prima di estrarre un sistema definitivo, riallineare i valori di layout provati nel browser, definire naming e ownership, e verificare accessibilità e consumatori reali.

## Confini dell'app

Le route e i metadata sono locali all'app. Ogni pagina dichiara una chiave della registry, canonical propria e `index: false`, `sitemap: false` in ogni ambiente. La homepage le collega dalla registry. Non ci sono import dal website o package condivisi. Tailwind resta disponibile come styling principale del workspace; il CSS dell'anteprima è confinato al sito DS. Motion e GSAP restano installati ma non caricati nelle proposte statiche.

I segni ufficiali non vengono modificati. `public/brand/logo-{dark,light}.svg`, `icon-{dark,light}.svg` e `watermark-{dark,light}.svg` sono copie byte-identiche dei corrispondenti file trasparenti in `Logo/SVG/`. La homepage usa i segni chiari sulle schede scure, mentre le pagine di dettaglio scelgono la variante che contrasta con il fondo. Il logo PNG già presente resta usato dalla preview social. Gli originali in `Logo/` restano la fonte degli asset.

Funnel Display viene caricato con `next/font/google` come font variabile e distribuito dal sito nella build: i browser non devono richiederlo a Google. Il testo corrente conserva un font di sistema. I pesi dei titoli variano nelle tre proposte, senza cambiare famiglia; la scelta dei colori e della direzione complessiva resta aperta.

La pagina di confronto e ogni proposta hanno `lang="it"`, landmark semantici, un H1, skip link, focus visibile e controlli nativi. Testo, campi e stati mostrati sono simulazioni: non rappresentano eventi, servizi o funzioni già definiti.

I link di navigazione, i campi di testo, select, checkbox, radio, toggle e disclosure si possono provare. Modal, tooltip, toast, error e loading sono campioni visivi esplicitamente statici: non sono componenti pronti per un'app. I media nei contesti sono segnaposto che indicano proporzioni e trattamento; vanno sostituiti solo con contenuti reali confermati.

## Dopo la scelta

Prima di considerare un sistema approvato occorre registrare la direzione scelta, le eventuali modifiche, le regole verificabili, i contenuti reali e i consumer nel website. Solo allora estrarre token e componenti necessari. Seguire [gestione delle pagine](pages.md) e [SEO](seo.md) per ogni nuova route.
