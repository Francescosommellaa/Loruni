# Catalogo vivo Loruni

Services Desktop Track2026-10-09:35 real catalog entries. Four new examples reuse current ServiceCard data and one canonical track: four services, inactive item, variable-content/height/viewport controls, native Desktop/Tablet iframe. ?fixture=services-track and services-track-frame are documentation consumers only. See SERVICES-DESKTOP-TRACK.md.

TestimonialsSection2026-10-08: four real examples (explicit source data, attributed Home/Esperienza, native viewport comparison and dynamic/reduced/lifecycle controls), all using one canonical Section. Existing catalog count unchanged. See TESTIMONIALS-SECTION.md.

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

Community Card: four current Community CMS photos with H2/H3, content/heading controls and native empty-image default. Actual component in CommunityCard.tsx, example data in CommunityCardExamples.data.ts; responsive grid is catalog-only. Legacy Blog Card naming appears only in provenance/source tokens, not the new API.

Button: fifteen real examples at #ds-component-button cover three public variants, nine Home/404/Event configurations, editable text/link/newTab, external new tab and missing href. Source/API/interaction evidence is in BUTTON.md and BUTTON-VERIFICATION.json.

Content/form atoms add eight real catalog entries with shared form configurations, Nav variants/callback/link/reduced controls, seven headline records, five Event content choices, four Community details and conditional visibility, four stats, label wrapping and source media. See CONTENT-FORM-ATOMS.md.

Main form button: real five-state auto/fill matrices and native form lifecycle example, with existing FormField and production mapping/submit guard. Documentation completion controls never submit externally. See MAIN-FORM-BUTTON.md.


Load More adds nine real examples at #ds-component-load-more: Default parent lifecycle, Loading, Hidden and six Eventi/Community configurations. Catalog parent completion/retry/exhaustion controls are separate from the production pagination UI. See LOAD-MORE.md.


Image Reveal adds four real examples at #ds-component-image-reveal: source260×256, fluid Testimonials/Neutral50, Eventi/Neutral950 and empty media. Catalog-only controls exercise remount, image update, retained visibility and live reduced policy; responsive descriptor uses captured source candidates. See IMAGE-REVEAL.md.


FAQ Row adds eleven real examples at #ds-component-faq-row: controlled toggle/Click/reduced policy and measured widths, Opened/Closed, all eight source slots (five populated, three consumer-hidden). Fixtures and document controls remain outside the product row. See FAQ-ROW.md.


### Rolling Text / Arrow Right Alt — closed 2026-10-07

Rolling Text has the seven real font configurations plus one interactive canonical-utility example for all tags, transforms, reverse, stagger, padding, short/long text and live reduced policy. Icon Engine adds an existing testimonial-arrow fill specimen; no orphan external-module entry or duplicate icon implementation. [Contract and evidence](ROLLING-TEXT.md).


### Image Parallax — 2026-10-07

Seven real examples at #ds-component-image-parallax: page92vh Y30, Service responsive X−50/Y50, Our Story640px Y50/660px X−50, controls for both axes, image/crop/decorations/reduced/unmount and full-width comparison. Fixture /design-system?fixture=image-parallax reuses the same examples; only this documentation parent owns geometry and breakpoints. See IMAGE-PARALLAX.md and IMAGE-PARALLAX-VERIFICATION.json.

### Grain / Liquid Hover — 2026-10-07

Two real Grain examples at #ds-component-grain (default0.5 and responsive Hero media), one Liquid controls example at #ds-component-liquid-hover. /design-system?fixture=grain reuses the media consumer for source comparison; parent owns100vh, the three existing mask variables, outer0.1, DOM stacking and explicit mobile opt-in. Controls cover opacity, image change, live reduced motion, mount/empty and Liquid numerical settings/touch. No product Hero headline/nav/page port. Contract and executed limitations: GRAIN-LIQUID-HOVER.md and verification JSON. Current29real catalog entries.


### TextFitWidth / TextStagger — 2026-10-07

31 real component entries. TextFitWidth has six source fixtures, controls and Home/Esperienza responsive consumers; TextStagger has fifteen fixtures and CMS/trigger/font/weight/half-opacity/reduced/lifecycle controls. Parent-width sliders and isolated ?fixture=text-utilities comparisons reuse canonical utilities. Consumer controls/layout are documentation-only. See [TEXT-UTILITIES.md](TEXT-UTILITIES.md) and executed proof.


### Project Card — 2026-10-08

32 real component entries. Project Card has Main/Inner responsive examples, all current Home/Eventi/Related CMS contents and controls for missing labels, media descriptors/static/dynamic/empty images, auto/fill/100vh, live reduced and mount lifecycle. ?fixture=project-card compares allocated native dimensions; source21 allocations are listed. Catalog-only parent grids/links/CMS fixtures do not implement product pages. See PROJECT-CARD.md.

### Service Card — 2026-10-08

33 real component entries. Service Card exposes original defaults/four current Home contents, optional labels0–6/price, dynamic copy/media, parent width/height/offset, resize/reduced/lifecycle controls. ?fixture=service-card exposes isolated geometry without implementing Services Section. Its source Phone bar label5 cross-binding is resolved in documentary data. See SERVICE-CARD.md for native horizontal preview limitations.


### FAQ Section — 2026-10-08

34real component entries. FAQ Section has four real catalog examples: five source FAQs/eight slots, dynamic/exclusive/resize/reduced/lifecycle controls, answer-only empty state and native viewport iframe sandbox at ?fixture=faq-section-frame. Direct ?fixture=faq-section exposes isolated geometry and optional parent top offset for scroll verification. No product page or Layout Jump Preventer standalone entry.

### The Story Track — 2026-10-09

36real component entries. Three examples: real Esperienza horizontal composition, editable default/canvas/long/missing-image/standalone/viewport specimen, Desktop/Tablet iframe resize. Fixtures ?fixture=the-story-track and ?fixture=the-story-track-frame remain documentation-only; no product pages/full-section/scroll wrapper.

### Stats — 2026-10-09

37real entries. Stats adds3examples: currentEsperienza array, realiframe viewport390/809/810/1024/1200/1440 and string/caption controls. Existing StatRow examples share one confirmed copy dataset. ?fixture=stats and stats-frame are documentation-only, no productpage.


### Session final — 2026-10-09
41real entries/39component files. EventTestimonial and shared EventCardSlot/EventCollection/CommunityCollection have actual React examples with normalized current CMS input; empty/dynamic/reduced/one/missing-image/pagination/controlled-loading cases. Fixtures `?fixture=event-testimonial` and `?fixture=cms-collections` are documentation only. Existing CommunityCard examples share the same current dataset; no duplicate source-ID model or product pages. Contracts/verification/NEXT SESSION are in MIGRATION-STATUS.md and MIGRATION-STATUS-VERIFICATION.json.sessionFinal.
