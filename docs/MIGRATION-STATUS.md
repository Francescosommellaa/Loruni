# Loruni — stato reale della migrazione

Testimonials Section consolidation2026-10-08: already-completed record retained, required items API and fluid parent allocation, existing Arrow/ImageReveal/Icon/Divider,24settled source comparisons and live reduced/dynamic/native keyboard proof. Counts unchanged; parent Home/Esperienza remain pending. [Contract](TESTIMONIALS-SECTION.md).

Verificato il 2026-10-09 sul codice, export, catalogo e prove presenti. Le successive chiusure Load More, Image Reveal e FAQ Row hanno prove dedicate.

84 unità completed, 51 not-migrated, 2 legacy-unused, 0 to-complete su137unità.43file componenti React consolidano gli84record chiusi;45voci reali in catalogo. Le unità includono repliche, gruppi, pattern e glyph. Logos and Intro closed2026-10-09; parent Color container/pagina e Services Section/Lenis remain pending.

## Correzioni documentali

37 schede COMPONENT_INVENTORY.md avevano metadata not-migrated obsoleti, mentre il JSON era già completed. Metadata e riepilogo aggiornati; nessun nuovo stato completed assegnato. componentExamples.ts non è vuoto:26voci reali. repositoryAudit originale e paragrafi strutturali restano snapshot storici.

## Mapping sorgente → runtime completo

| File runtime / export | Record sorgente coperti |
| --- | --- |
| [EventTestimonial](../src/components/EventTestimonial.tsx) | Testimonial singolo Evento · pattern-EQzpqx6Vl |
| [EventCardSlot / EventCollection / CommunityCollection](../src/components/CmsCollections.tsx) | 11pattern CMS assorbiti, mapping nella chiusura sessione sotto |
| [ArrowForward](../src/components/ArrowForward.tsx) | arrow_forward |
| [Button](../src/components/Button.tsx) | Button |
| [CategoryLabel](../src/components/CategoryLabel.tsx) | Category Label |
| [CategoryLabelGroup](../src/components/CategoryLabelGroup.tsx) | Label Container · /eventi/:Eventi (originale: Label Container) |
| [CircularImage](../src/components/CircularImage.tsx) | Circular Image (originale: Image) |
| [CommunityCard](../src/components/CommunityCard.tsx) | Community Card (originale: Blog Card) |
| [CommunityDetails](../src/components/CommunityDetails.tsx) | Tech Details · /community/:Community (originale: Tech Details) |
| [ContentHeadline](../src/components/ContentHeadline.tsx) | Headline · / (originale: Headline); Headline · /esperienza (originale: Headline); Headline · /esperienza (originale: Headline); Headline · /eventi/:Eventi (originale: Headline); Headline · /community (originale: Headline); Headline · /community/:Community (originale: Headline); Headline · Template (originale: Headline) |
| [Divider](../src/components/Divider.tsx) | Divider |
| [FaqIcon](../src/components/FaqIcon.tsx) | FAQ Icon |
| [FAQRow](../src/components/FAQRow.tsx) | FAQ Row |
| [FAQSection](../src/components/FAQSection.tsx) | FAQ Section; Layout Jump Preventer absorbed |
| [FormControl, FormFieldGroup, FormField](../src/components/FormField.tsx) | Gruppo campo · /vieni-a-trovarci; Campo Name · /vieni-a-trovarci; Gruppo campo · /vieni-a-trovarci; Campo Gruppo · /vieni-a-trovarci; Gruppo campo · /vieni-a-trovarci; Campo Email · /vieni-a-trovarci; Gruppo campo · /vieni-a-trovarci; Campo message · /vieni-a-trovarci; Gruppo campo · Template; Campo Name · Template; Gruppo campo · Template; Campo Gruppo · Template; Gruppo campo · Template; Campo Email · Template; Gruppo campo · Template; Campo message · Template |
| [Icon](../src/components/Icon.tsx) | Red Bull; “ · /eventi/:Eventi (originale: “); Logo · Icon set (originale: Logo); Quote · Icon set (originale: Quote); arrow_forward; Freccia vettoriale · Button |
| [ImageParallax](../src/components/ImageParallax.tsx) | Image Parallax |
| [Grain](../src/components/Grain.tsx) | Grain |
| [LiquidHover](../src/components/LiquidHover.tsx) | Liquid Hover |
| [TextFitWidth](../src/components/TextFitWidth.tsx) | TextFitWidth |
| [TextStagger](../src/components/TextStagger.tsx) | TextStagger |
| [ImageReveal](../src/components/ImageReveal.tsx) | Testimonials Image reveal |
| [ImageFill](../src/components/ImageFill.tsx) | Mobile Image · / (originale: Mobile Image); Image · /esperienza (originale: Image) |
| [Label](../src/components/Label.tsx) | Label |
| [LoadMore](../src/components/LoadMore.tsx) | Load More |
| [MainFormButton](../src/components/MainFormButton.tsx) | Main form button |
| [NavItem](../src/components/NavItem.tsx) | Nav Item |
| [OurStoryCard](../src/components/OurStoryCard.tsx) | Our Story Card |
| [ProjectCard](../src/components/ProjectCard.tsx) | Project Card |
| [ServiceCard](../src/components/ServiceCard.tsx) | Service card |
| [TheStoryTrack](../src/components/TheStoryTrack.tsx) | The story · Our Story Section (Desktop content-slot) |
| [ServicesDesktopTrack](../src/components/ServicesDesktopTrack.tsx) | Desktop · Services Section (content-slot) |
| [ProcessRow](../src/components/ProcessRow.tsx) | Process Row |
| [RollingText](../src/components/RollingText.tsx) | Rolling Text |
| [SplitContent](../src/components/SplitContent.tsx) | Headline · /eventi/:Eventi (originale: Headline); Headline · /eventi/:Eventi (originale: Headline) |
| [Stats](../src/components/Stats.tsx) | Stats · /esperienza, responsive root using existing StatRow |
| [StatRow](../src/components/StatRow.tsx) | Stat Row · /esperienza (originale: Stat Row); Stat Row · /esperienza (originale: Stat Row); Stat Row · /esperienza (originale: Stat Row); Stat Row · /esperienza (originale: Stat Row) |
| [TestimonialsArrow](../src/components/TestimonialsArrow.tsx) | Testimonials Arrow |
| [TestimonialsSection](../src/components/TestimonialsSection.tsx) | Testimonials Section |

I nomi Framer restano tracciabili tramite ID/migration/reconciliation nel JSON; non si duplicano componenti per recuperare il nome legacy. Blog Card→CommunityCard è un rename reale. Mobile Image/Image Esperienza→ImageFill, Headline→ContentHeadline o SplitContent, Tech Details→CommunityDetails, Label Container→CategoryLabelGroup e campi/gruppi→FormControl/FormFieldGroup/FormField sono consolidamenti verificati. Icone/quote/logo grafici/spinner stanno in Icon Engine, non in file con i nomi di ogni glyph.

## Parent ancora da implementare con parti disponibili

Queste voci restano not-migrated. Il lavoro già fatto nei figli viene indicato esplicitamente, senza attribuirgli layout/interazioni del parent.

| Parent sorgente | Parti già convertite |
| --- | --- |
| Header | NavItem |
| Footer | NavItem |
| Services Section | Label, ServiceCard, ServicesDesktopTrack |
| Our Story Section | Label, OurStoryCard, Icon, ImageParallax, TextStagger, TheStoryTrack |
| Logo | Icon |
| Template | MainFormButton, ContentHeadline, FormControl, FormFieldGroup, FormField |
| Hero · / | Button, ImageFill, Grain, LiquidHover, TextFitWidth |
| Hero · / | HeroFittedHeadline, TextFitWidth |
| Color container · / | Label, Icon, ProcessRow, TestimonialsSection, ContentHeadline, TextStagger, ProjectCard, EventCardSlot |
| Logos and Quote · / | Label, Icon, TextStagger |
| Quote · / | Label, Icon, TextStagger |
| Recent Projects · / | ProjectCard, EventCardSlot |
| Headline and 1st project · / | ProjectCard, EventCardSlot |
| Process · / | Label, ProcessRow, TextStagger |
| Process · / | LabelledStaggerHeadline, Label, TextStagger |
| Testimonials · / | Label, TestimonialsSection, ContentHeadline |
| Hero · /esperienza | ImageFill, TextFitWidth |
| Content · /esperienza | TextFitWidth |
| Color container · /esperienza | Label, TestimonialsSection, CommunityCard, StatRow, ContentHeadline, ImageParallax, TextStagger, Stats, CommunityCollection |
| Logos and Intro · /esperienza | Label, TextStagger |
| Testimonials · /esperienza | Label, TestimonialsSection, ContentHeadline |
| Blog · /esperienza | Label, CommunityCard, ContentHeadline, CommunityCollection |
| Hero · /eventi/:Eventi | CategoryLabel, CategoryLabelGroup |
| Content · /eventi/:Eventi | CategoryLabel, CategoryLabelGroup |
| Color container · /eventi/:Eventi | Label, Button, SplitContent, Icon, ContentHeadline, TextStagger, ProjectCard, EventCollection, EventTestimonial |
| Intro · /eventi/:Eventi | Label, Button, TextStagger |
| Section 1 · /eventi/:Eventi | SplitContent |
| Section 2 · /eventi/:Eventi | SplitContent |
| More Projects · /eventi/:Eventi | ContentHeadline, ProjectCard, EventCollection |
| Main · /eventi | LoadMore, ProjectCard, EventCollection, EventCardSlot |
| Recent Projects · /eventi | ProjectCard, EventCardSlot |
| Headline and 1st project · /eventi | ProjectCard, EventCardSlot |
| Main · /vieni-a-trovarci | NavItem, MainFormButton, Label, CommunityCard, FormControl, FormFieldGroup, FormField, ImageParallax, CommunityCollection |
| Contact · /vieni-a-trovarci | NavItem, MainFormButton, FormControl, FormFieldGroup, FormField |
| Modulo · /vieni-a-trovarci | MainFormButton, FormControl, FormFieldGroup, FormField |
| Blog · /vieni-a-trovarci | Label, CommunityCard, CommunityCollection |
| Main · /404 | Button |
| Blog · /community | CommunityCard, ContentHeadline, LoadMore, CommunityCollection |
| Main · /community/:Community | CategoryLabel, CommunityCard, CommunityDetails, ContentHeadline, CommunityCollection |
| Hero · /community/:Community | CategoryLabel, CommunityDetails |
| More content · /community/:Community | CommunityCard, ContentHeadline, CommunityCollection |
| Contact From · Template | MainFormButton, ContentHeadline, FormControl, FormFieldGroup, FormField |
| Content container · Template | MainFormButton, ContentHeadline, FormControl, FormFieldGroup, FormField |
| Modulo · Template | MainFormButton, FormControl, FormFieldGroup, FormField |

44 parent hanno parti disponibili; tutti restano pending.

## Capacità interne, non port autonomi

- ImageReveal e TextStagger sono port autonomi chiusi. ProcessRow/useLineReveal e Testimonials sono effetti nativi RichText distinti, senza equivalenza al Code Component TextStagger.
- useLineReveal implementa il titolo ProcessRow; non implementa i trasparenti Headline trigger100vh delle pagine.
- Icon Engine include visuali ufficiali Logo e spinner Load More. LoadMore ora completa UI/stati/callback; Logo di navigazione e collection pagination restano ai rispettivi parent.
- MainFormButton e il suo mapping lifecycle sono completi; la demo form nel catalogo non è il form di contatto prodotto né un backend.

## Legacy escluso

BTN 2 è legacy-unused/no migration required secondo audit live separato [BTN-2.md](BTN-2.md):non è pending e non è stato assorbito in Button.

## Resta da sviluppare

53 record: parent/sezioni/hero/Template/global navigation e runtime/interazioni/motion autonomi. I piccoli adapter CMS di questa sessione sono completati; le loro pagine prodotto non lo sono. Le otto pagine prodotto, routing/CMSdestinazione/invioform/SEO/hosting restano fuori dai port dei singoli componenti. src/app/App.tsx mostra ancora la shell e /design-system.

Prove tecniche di questa riconciliazione: [MIGRATION-STATUS-VERIFICATION.json](MIGRATION-STATUS-VERIFICATION.json). Runtime invariato nella riconciliazione iniziale. La nuova slice Load More ha check e browser dedicati in [LOAD-MORE-VERIFICATION.json](LOAD-MORE-VERIFICATION.json); nessun altro port riaperto.


FAQRow: sola Row controllata completed, otto slot/source/runtime/motion/a11y verificati. Alla chiusura della sola Row FAQ Section rimaneva pending; ora è chiusa nella task2026-10-08. Pagine/CMS restano esclusi. [Prove](FAQ-ROW-VERIFICATION.json). Le altre chiusure mantengono prove datate indipendenti.


## Rolling Text / Arrow Right Alt — 2026-10-07

RollingText canonico e consumer NavItem/Button/MainFormButton consolidati con policy live condivisa e catalogo parametrico;14istanze/7config verificate. Il modulo external Arrow Right Alt è legacy-unused (zero riferimenti), distinto dal glyph Material testimonial-arrow già usato dal Default TestimonialsArrow. Mapping erroneo del modulo a Icon rimosso, nessun nuovo runtime/alias. [Contratto/prove](ROLLING-TEXT.md). Altre chiusure e prove datate preservate.

Catalogo osservato al check finale:27voci, inclusa ImageParallax concorrente in corso;26voci/file già chiusi nella riconciliazione restano distinti dal nuovo lavoro non attestato qui. Correzione build incidentale limitata a un ramo TypeScript irraggiungibile del suo esempio, senza cambiamento del valore effettivo.


## Image Parallax — ONE TOUCH CLOSED,2026-10-07

ImageParallax all11sourceinstances: fill media, source X/Y semantics/overscan, ImageFill and live reduced policy, shared GSAP lifecycle. Consumer frames/CMS/pages remain parent scope; native hidden/placeholder limits are documented. Contract IMAGE-PARALLAX.md, evidence IMAGE-PARALLAX-VERIFICATION.json. Current57completed/78pending/2legacyunused and27catalogentries.


## Grain / Liquid Hover — CLOSED,2026-10-07

All3+3sourceinstances and original modules read; original raster/animation, parent masks/stacking and independent fluid math ported. Shared media/reduced/ticker ownership; mobile touch extension explicitly authorized. Hero remains parts-available; page/appear/scroll effects are not migrated.59completed/76pending/2legacy;29runtime/catalogentries. See GRAIN-LIQUID-HOVER.md and verification JSON for executed proof and device/failure limitations.


## TextFitWidth / TextStagger — CLOSED, 2026-10-07

Actual Code Files and21instances analyzed; source fitting/Range segmentation, static weight/half-opacity and one-shot triggers retained, hover guard minimally repaired. Responsive/font/CMS lifecycle and live reduced policy integrated. Catalog31, status61completed/74pending/2legacy; product parents remain pending. [Contract and limits](TEXT-UTILITIES.md), [proof](TEXT-UTILITIES-VERIFICATION.json).


## Project Card — CLOSED, 2026-10-08

Only Cards/Project Card promoted: all21 source prototypes,39 native/local CMS rendering comparisons and exact four-layout/two-hover mapping. Canonical mode main/inner, shared ImageFill/ArrowForward/presets/Motion, optional labels and parent-owned link/CMS/sticky/geometry.62completed/73pending/2legacy,32runtime/catalog,61parts-available parents. Source consumer label1 fallback on Tablet/Phone documented; physical touch/pixel-diff limitations recorded. [Contract](PROJECT-CARD.md), [proof](PROJECT-CARD-VERIFICATION.json).


## Service Card — CLOSED, 2026-10-08

Only Cards/Service card promoted. All12source instances/four Home contents read; isolated native Desktop/Tablet and four Home Phone renderings compared. Single responsive tree reuses ImageParallax, CategoryLabel, Divider and canonical presets. Services Section and its horizontal/visibility ownership remain pending.63completed/72pending/2legacy;33runtime/catalog;60parts-available parents. Native horizontal preview renders empty; source Phone bar label5 cross-binding retained in documentary consumer. [Contract](SERVICE-CARD.md), [proof](SERVICE-CARD-VERIFICATION.json).


### FAQ Section — 2026-10-08

FAQ Section and its one Layout Jump Preventer dependency promoted together; dependency absorbed, no standalone export. One exclusive state, stable identities and existing FAQRow/FaqIcon composition. White Color unused legacy. All18 native/local geometry/font/color/opacity/icon endpoint comparisons match; actual source multi-open is deliberately overridden by user instruction.65completed/70pending/2legacy,34runtime/catalog,59parts-available. [Contract](FAQ-SECTION.md), [proof](FAQ-SECTION-VERIFICATION.json).


The story static slot closed2026-10-09: parent Our Story Section and Lenis remain pending. [Contract](THE-STORY-TRACK.md), [proof](THE-STORY-TRACK-VERIFICATION.json).


Stats root closed2026-10-09; four StatRow records already completed remain canonical. Parent/page pending. [Contract](STATS.md), [proof](STATS-VERIFICATION.json).


Community Label Container adB9Vb46p /esperienza closed2026-10-09 by absorption in existing ContentHeadline labelled wrapper > Label, not CategoryLabelGroup. All3replicas static; only wrapper fill sizing corrected. No new inventory/catalog unit or status promotion; totals unchanged. See COMMUNITY-LABEL-CONTAINER.md. Full Community parent/page pending.


<a id="session-final-2026-10-09"></a>
## Session final — 2026-10-09

**SESSION CLOSED — COMPONENTI COMPOSTI STILL OPEN.** 137 unità:80completed/55not-migrated/2legacy-unused/0to-complete.39file runtime,41voci catalogo;44parent parts-available. HEAD2492361729a57b7faff01d793693bfb3be9f59e7 al readback finale: commit esterno osservato durante la chiusura, input verificati invariati rispetto al checkout precedente64873750. Nessuna pagina prodotto, backend o nuova macro section implementata.

EventTestimonial: `image?:ImageFillImage, title?, quote?:string|null, name?, role?, id/className/style`. La quote non impostata rimuove l'intera section senza trim/fallback. Grid12/span4+1+7, height750; Phone auto e media/spacer assenti; Quote Icon presente anche Phone. Existing ImageReveal/Divider/Icon/preset/reduced policy. Title word-opacity once spring.5/bounce0/stagger.06 condiviso con TestimonialsSection attraverso WordOpacityReveal, stesso markup/algoritmo senza wrapper aggiuntivo. Quote element once spring.4/delay.4/opacityinitial.001, outeropacity.7. Brand Accent divider; Neutral50 text, Neutral950 image cover. Text2/3/4 legacy hidden esclusi; nessuna logica carousel.

CMS: `EventRecord` conserva slug/image/title/text/label1–3/year/testimonial e compactLabel opzionale; `CommunityRecord` slug/image/title/subtitle. Input normalizzato, null/undefined/draft/missing slug/duplicate slug esclusi; ordine della collection preservato. Nessun ID campo Framer entra nei componenti browser. CurrentCms.data.ts è un dataset documentale normalizzato da5Eventi/4Community correnti, condiviso con le card già esistenti, non un backend.

API adapter: `EventCardSlot({items,offset?,cardStyle?,id/ref/className/style})`; `EventCollection({items,mode:remaining|related,currentSlug?,pagination?,id/ref/className/style})`; `CommunityCollection({items,mode:preview|all|related,currentSlug?,pagination?,id/ref/className/style})`. Pagination opzionale controllata `{loading,hasMore,onLoadMore}` riceve record già caricati della collection; in sua assenza la lista locale espone12item per volta. Eventi remaining applica offset1 alla collection completa; related esclude currentSlug. Cambi di identità/ordine resettano count; i consumer forniscono la data source reale successivamente.

| Pattern | Destino / comportamento |
| --- | --- |
| pattern-rG_Llb_4m | ABSORBED INTO CONSUMER — NO DEDICATED COMPONENT REQUIRED → `EventCardSlot`; Home offset0/limit1; allocation fill |
| pattern-Vys401Mev | ABSORBED INTO CONSUMER — NO DEDICATED COMPONENT REQUIRED → `EventCardSlot`; Home offset1/limit1; project-2, allocation100vh |
| pattern-ZZ6z7kb1H | ABSORBED INTO CONSUMER — NO DEDICATED COMPONENT REQUIRED → `EventCardSlot`; Home offset2/limit1; project-3, allocation100vh |
| pattern-PyH9cfIM7 | ABSORBED INTO CONSUMER — NO DEDICATED COMPONENT REQUIRED → `EventCardSlot`; Home offset3/limit1; project-4, allocation100vh |
| pattern-JI34iSQE6 | ABSORBED INTO CONSUMER — NO DEDICATED COMPONENT REQUIRED → `CommunityCollection`; Esperienza previewCommunity limit4D/T,3Phone;2colD/T,1Phone;gap60×8;h3 |
| pattern-whW0aCLUP | ABSORBED INTO CONSUMER — NO DEDICATED COMPONENT REQUIRED → `EventCollection`; Eventi related exclude current;limit6D/T,4Phone;2colD/T,1Phone;gap8 |
| pattern-X2iRXrVnI | ABSORBED INTO CONSUMER — NO DEDICATED COMPONENT REQUIRED → `EventCardSlot`; Eventi featured offset0/limit1; fill allocation |
| pattern-Jo1JXGYo6 | ABSORBED INTO CONSUMER — NO DEDICATED COMPONENT REQUIRED → `EventCollection`; Eventi offset1/pageSize12;2col Desktop,1col Tablet/Phone;gap8;LoadMore bottom−80/−64 |
| pattern-EWW2HEI9X | ABSORBED INTO CONSUMER — NO DEDICATED COMPONENT REQUIRED → `CommunityCollection`; Visit previewCommunity identico;h3 |
| pattern-zkyIqN31n | ABSORBED INTO CONSUMER — NO DEDICATED COMPONENT REQUIRED → `CommunityCollection`; Community pageSize12;2colD/T,1Phone;gap60×8;h2;LoadMore absoluteD/T,flowPhone |
| pattern-yjtNkZRh_ | ABSORBED INTO CONSUMER — NO DEDICATED COMPONENT REQUIRED → `CommunityCollection`; Community related exclude current/limit4;2colD/T,1Phone;gap60×8;h3 |

ProjectCard/CommunityCard sono solo visuali: link completo nel consumer, route `/eventi/:slug` e `/community/:slug`, nessuna nested anchor. Desktop category label1 CMS; Tablet/Phone `compactLabel="Eventi"` nei dati attuali riproduce il fallback nativo già documentato in PROJECT-CARD.md, senza cambiare ProjectCard. Community Phone conserva i60px finali della sorgente davanti al wrapper LoadMore Hidden di height0 attraverso padding, senza un wrapper vuoto; liste vuote tornano null.

**Home ownership verificata**: effetti registrati sulle Collection List riferiscono headline-trigger, sibling successiva e Services Section. Sono una sequenza cross-section: il futuro parent Recent Projects/Headline and 1st project possiede sticky top0, ordine stacking e progress GSAP per opacity/y/scale. EventCardSlot espone id/ref/style/cardStyle per target distinti, senza writer transform. Riferimenti originali in session-final-source.json e inventory: first scale0 → headline target → opacity0/y−120px/scale.5 al target project-2;2→3→4→Services con gli stessi endpoint. Questo scope chiude query/data/link/target adapter; **la scena Home resta pending e non è dichiarata verificata localmente**. Nessun height1%/10000%, canvas offset o backend artificiale.

Riconciliazione: ImageParallax, Grain/LiquidHover, TextFitWidth/TextStagger, ProjectCard, ServiceCard, FAQSection, TestimonialsSection, ServicesDesktopTrack, TheStoryTrack, Stats e Community Label Container hanno implementazione/mapping/prove dedicate reali. Gates finali coprono l'intero checkout; prove precedenti restano datate e non diventano una nuova certificazione di tutte le motion. Label Container assorbito ContentHeadline; Layout Jump Preventer assorbito FAQSection; whiteColor/iconCal unusedlegacy; BTN2/ArrowRightAlt external legacy-unused. Nessuna duplicazione di Icon Engine, RollingText, TextStagger, ImageParallax o carousel.

Verifiche correnti:36source roots e CMS correnti letti, source readback identico; testimonial geometry/typography a1200/810/390 coincide con Framer; main Eventi/Community list native/local geometry e routing;21local consumer cases, empty/one/missing/null/dynamic, related exclusion, pagination12→24→25/Loading/Hidden/native keyboard. Typecheck/lint/build/tokens:check PASS; stale hardcoded audit rigenerato senza cambiamenti ai token canonici. Browser Chromium soltanto; MotionConfig reduced policy esercitata, nessuna certificazione touchfisico/crossengine/screenreader/synchronizedframe/rasterpixel-diff. Link URL risolti correttamente; le pagine prodotto locali mostrano ancora la shell di sviluppo, quindi il routing prodotto end-to-end e CMS fetch/authoring rimangono aperti. Prova corrente e manifest: `docs/MIGRATION-STATUS-VERIFICATION.json.sessionFinal`.

### NEXT SESSION

Ripartire dai parent ancora not-migrated sotto, senza riaprire i figli chiusi. Boundary pronto: ServicesDesktopTrack + ServiceCard e TheStoryTrack + OurStoryCard/ImageParallax/TextStagger; fullServicesSection/fullOurStorySection e LenisHorizontalSection richiedono una nuova task autorizzata. Gli adapter CMS sono pronti per i parent; Home scene necessita progress/target mapping e routing/backend/hosting restano decisioni aperte. Il tracking esatto dei residui è la tabella seguente, non un elenco di lavori inventati.

| Record ancora aperto | Nome sorgente | Tipo |
| --- | --- | --- |
| framer-E3CLvSQi8 | Header | navigation |
| framer-rN_k4pVAj | Footer | navigation |
| framer-Va_5BuuHV | Services Section | section |
| framer-j6BGVOcku | Mobile Nav | navigation |
| framer-wUaTYVV3U | Our Story Section | section |
| framer-LdaCEGUab | 👀 Pre-Loader | interactive component |
| framer-pDiVZWXZp | Logo | media component |
| bSeEZJm22jsjERCOGQvq | Lenis | interactive component |
| 8OGeHARPZoZUqP5j1buZ | Lenis Horizontal Section | interactive component |
| template-ahDJpZJjb | Template | layout component |
| pattern-H6RV6mcOu | Hero · / | section |
| pattern-T_kKQBX63 | Color container · / | layout component |
| pattern-CU36SWeyR | Logos and Quote · / | section |
| pattern-Npr_ZavYL | Logos · / | section |
| pattern-BvAMtkvhr | Quote · / | section |
| pattern-ut4tqcHWL | Recent Projects · / | section |
| pattern-n8mpVhYJ6 | Headline and 1st project · / | section |
| pattern-oXNPkQNkN | Headline trigger · / | section |
| pattern-MxT1gxvg5 | Process · / | section |
| pattern-dyQ5jBO0A | Testimonials · / | section |
| pattern-I5SNW1MVl | Hero · /esperienza | section |
| pattern-pVmauuZ2g | Content · /esperienza | layout component |
| pattern-jyNRFDvt2 | Color container · /esperienza | layout component |
| pattern-ZPvGsPv3Z | Logos and Intro · /esperienza | section |
| pattern-Jsd2pjqLq | Logos · /esperienza | section |
| pattern-BGa5oNSIN | Testimonials · /esperienza | section |
| pattern-Ik7aKijYN | Blog · /esperienza | section |
| pattern-aj8UocIEh | Hero · /eventi/:Eventi | section |
| pattern-hfPb23Ta6 | Content · /eventi/:Eventi | layout component |
| pattern-zLQBFP6XB | Color container · /eventi/:Eventi | layout component |
| pattern-Rq9qdzotO | Intro · /eventi/:Eventi | section |
| pattern-oeZu6j5Sf | Section 1 · /eventi/:Eventi | section |
| pattern-WFPN6Mc9q | Section 2 · /eventi/:Eventi | section |
| pattern-OC7BXKW3i | More Projects · /eventi/:Eventi | section |
| pattern-F2ZIXiJXy | Main · /eventi | section |
| pattern-xE8PURxwx | Recent Projects · /eventi | section |
| pattern-xXCtTmpiE | Headline and 1st project · /eventi | section |
| pattern-fu2tf1hGp | Headline trigger · /eventi | section |
| pattern-r89Pf6QJy | Main · /vieni-a-trovarci | section |
| pattern-JMRvZFIEA | Contact · /vieni-a-trovarci | section |
| pattern-n_vp9VrGq | Modulo · /vieni-a-trovarci | interactive component |
| pattern-KWxSIDWdL | FAQ · /vieni-a-trovarci | section |
| pattern-OygYg_WNE | Blog · /vieni-a-trovarci | section |
| pattern-JcLLUP2Jf | Main · /404 | section |
| pattern-B853j3_Yd | Blog · /community | section |
| pattern-QOkfs6Ps9 | Main · /community/:Community | section |
| pattern-ndrT49rsU | Hero · /community/:Community | section |
| pattern-sRThMEavK | Content · /community/:Community | layout component |
| pattern-GRPA250EV | More content · /community/:Community | section |
| pattern-POmM3Cn0Y | Overlay menu · Template | interactive component |
| pattern-slofgrfjX | Contact From · Template | section |
| pattern-XXZunElsz | Content container · Template | layout component |
| pattern-sUr7gnSzE | Modulo · Template | interactive component |


## Headline Sections — CLOSED · 2026-10-09

Undici pattern e33repliche riletti in Framer; due nuovi port A/B, nove composition esistenti revalidate. Sette famiglie semantiche consolidate in quattro implementazioni. Nessun universal headline, nuovo preset/token, glyph o motore fit/stagger.

| Framer pattern | Famiglia | Runtime | Stato |
| --- | --- | --- | --- |
| pattern-l4Hx2sTr1 | A | `HeroFittedHeadline` | MIGRATED |
| pattern-DUIrhpb0e | B | `LabelledStaggerHeadline` | MIGRATED |
| pattern-wIf2vBmrp | C | `ContentHeadline` | CONSOLIDATED WITH ContentHeadline labelled |
| pattern-VuSLlvonD | C | `ContentHeadline` | CONSOLIDATED WITH ContentHeadline labelled |
| pattern-qgLuHW8XG | C | `ContentHeadline` | CONSOLIDATED WITH ContentHeadline labelled |
| pattern-RuA0JWZsP | D | `SplitContent` | CONSOLIDATED WITH SplitContent |
| pattern-nN8BISdtN | D | `SplitContent` | CONSOLIDATED WITH SplitContent |
| pattern-UNMBQYnKg | E | `ContentHeadline` | CONSOLIDATED WITH ContentHeadline centered |
| pattern-IMQdwgcx4 | E | `ContentHeadline` | CONSOLIDATED WITH ContentHeadline centered |
| pattern-dR7SkYjAS | F | `ContentHeadline` | ABSORBED INTO ContentHeadline centered-large |
| pattern-GXDcxsQa9 | G | `ContentHeadline` | ABSORBED INTO ContentHeadline contact |

G è Template live su sei pagine abilitate, non legacy. Wrapper Community Label Container resta assorbito nel ContentHeadline; CMS field mapping/Section1–2 availability nel consumer. digital-challenge ha Section1=false e Section2=true. Hero/Process/Testimonials/Blog/MoreContent/form/pagine rimangono parent aperti.

33confronti geometry/typography PASS a1200/810/390, righe Fit/Stagger e whitespace identici,30casi CMS e copy lunga, resize continuo tramite slider nativo con transizioni809/810 e1199/1200 senza overflow, live MotionConfig always/user e console pulita. Typecheck/lint/build/tokens:check PASS; audit obsoleto rigenerato, token canonici byte-identici. Build602moduli, warning chunk>500kB esistente. Nessuna suite frontend.

Prova/manifest corrente: MIGRATION-STATUS-VERIFICATION.json.headlineSections. Limiti: Chromium e osservazioni sequenziali; nessun rasterpixel-diff/synchronizedframe/OSpreference/screenreader attestato. Fixture Hero verifica allocation su fondo neutro; media/parallax del parent non migrati.82completed/53pending/2legacy,41runtime/43catalog,42parts-available. Le prove sessionFinal precedenti restano snapshot storici. Non procedere a Logos senza nuova task.


## LOGOS AND INTRO — CLOSED, 2026-10-09

Esperienza `pattern-ZPvGsPv3Z` → `LogosAndIntro` (MIGRATED); contained `pattern-Jsd2pjqLq` → internal Logos + `BrandTicker` (ABSORBED INTO); Intro `OhvkaBGPZ` and responsive replicas → internal Intro (ABSORBED INTO). All three mappings CLOSED. Intro has no separate inventory unit: no phantom record added. 137 units: **84 completed / 51 not-migrated / 2 legacy-unused / 0 to-complete; 43 runtime files / 45 catalog entries / 41 pending parents parts-available**. Parent Color container and product Esperienza page remain pending.


Contracts, motion details and original assets: CONTENT-FORM-ATOMS.md#logos-and-intro--closed-2026-10-09; authoritative proof MIGRATION-STATUS-VERIFICATION.json.logosAndIntro. Native/local geometry, copy, line splitting, whitespace and Label placement match except explicitly retained Phone heading (+41.59375px). Typecheck/lint/build/tokens pass; source preview clock discrepancy and actual hidden-tab limitation retained in proof. No full Color container/product page migration.
