# Loruni — stato reale della migrazione

Verificato il 2026-10-07 sul codice, export, catalogo e prove presenti. Le successive chiusure Load More, Image Reveal e FAQ Row hanno prove dedicate.

57 unità completed, 78 not-migrated, 2 legacy-unused, 0 to-complete su137unità.27file componenti React consolidano i57record chiusi;27voci reali in catalogo. Le unità includono repliche, gruppi, pattern e glyph.

## Correzioni documentali

37 schede COMPONENT_INVENTORY.md avevano metadata not-migrated obsoleti, mentre il JSON era già completed. Metadata e riepilogo aggiornati; nessun nuovo stato completed assegnato. componentExamples.ts non è vuoto:26voci reali. repositoryAudit originale e paragrafi strutturali restano snapshot storici.

## Mapping sorgente → runtime completo

| File runtime / export | Record sorgente coperti |
| --- | --- |
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
| [FormControl, FormFieldGroup, FormField](../src/components/FormField.tsx) | Gruppo campo · /vieni-a-trovarci; Campo Name · /vieni-a-trovarci; Gruppo campo · /vieni-a-trovarci; Campo Gruppo · /vieni-a-trovarci; Gruppo campo · /vieni-a-trovarci; Campo Email · /vieni-a-trovarci; Gruppo campo · /vieni-a-trovarci; Campo message · /vieni-a-trovarci; Gruppo campo · Template; Campo Name · Template; Gruppo campo · Template; Campo Gruppo · Template; Gruppo campo · Template; Campo Email · Template; Gruppo campo · Template; Campo message · Template |
| [Icon](../src/components/Icon.tsx) | Red Bull; “ · /eventi/:Eventi (originale: “); Logo · Icon set (originale: Logo); Quote · Icon set (originale: Quote); arrow_forward; Freccia vettoriale · Button |
| [ImageParallax](../src/components/ImageParallax.tsx) | Image Parallax |
| [ImageReveal](../src/components/ImageReveal.tsx) | Testimonials Image reveal |
| [ImageFill](../src/components/ImageFill.tsx) | Mobile Image · / (originale: Mobile Image); Image · /esperienza (originale: Image) |
| [Label](../src/components/Label.tsx) | Label |
| [LoadMore](../src/components/LoadMore.tsx) | Load More |
| [MainFormButton](../src/components/MainFormButton.tsx) | Main form button |
| [NavItem](../src/components/NavItem.tsx) | Nav Item |
| [OurStoryCard](../src/components/OurStoryCard.tsx) | Our Story Card |
| [ProcessRow](../src/components/ProcessRow.tsx) | Process Row |
| [RollingText](../src/components/RollingText.tsx) | Rolling Text |
| [SplitContent](../src/components/SplitContent.tsx) | Headline · /eventi/:Eventi (originale: Headline); Headline · /eventi/:Eventi (originale: Headline) |
| [StatRow](../src/components/StatRow.tsx) | Stat Row · /esperienza (originale: Stat Row); Stat Row · /esperienza (originale: Stat Row); Stat Row · /esperienza (originale: Stat Row); Stat Row · /esperienza (originale: Stat Row) |
| [TestimonialsArrow](../src/components/TestimonialsArrow.tsx) | Testimonials Arrow |
| [TestimonialsSection](../src/components/TestimonialsSection.tsx) | Testimonials Section |

I nomi Framer restano tracciabili tramite ID/migration/reconciliation nel JSON; non si duplicano componenti per recuperare il nome legacy. Blog Card→CommunityCard è un rename reale. Mobile Image/Image Esperienza→ImageFill, Headline→ContentHeadline o SplitContent, Tech Details→CommunityDetails, Label Container→CategoryLabelGroup e campi/gruppi→FormControl/FormFieldGroup/FormField sono consolidamenti verificati. Icone/quote/logo grafici/spinner stanno in Icon Engine, non in file con i nomi di ogni glyph.

## Parent ancora da implementare con parti disponibili

Queste voci restano not-migrated. Il lavoro già fatto nei figli viene indicato esplicitamente, senza attribuirgli layout/interazioni del parent.

| Parent sorgente | Parti già convertite |
| --- | --- |
| Project Card | ArrowForward, Icon |
| Service card | CategoryLabel, Divider |
| Header | NavItem |
| Footer | NavItem |
| FAQ Section | FAQRow |
| Services Section | Label |
| Our Story Section | Label, OurStoryCard, Icon |
| Logo | Icon |
| Template | MainFormButton, ContentHeadline, FormControl, FormFieldGroup, FormField |
| Hero · / | Button, ImageFill |
| Color container · / | Label, Icon, ProcessRow, TestimonialsSection, ContentHeadline, CircularImage |
| Logos and Quote · / | Label, Icon, CircularImage |
| Quote · / | Label, Icon, CircularImage |
| Process · / | Label, ProcessRow |
| Headline · / | Label |
| Testimonials · / | Label, TestimonialsSection, ContentHeadline |
| Hero · /esperienza | ImageFill |
| Color container · /esperienza | Label, TestimonialsSection, CommunityCard, StatRow, ContentHeadline |
| Logos and Intro · /esperienza | Label |
| Stats · /esperienza | StatRow |
| Testimonials · /esperienza | Label, TestimonialsSection, ContentHeadline |
| Blog · /esperienza | Label, CommunityCard, ContentHeadline |
| Lista CMS · /esperienza | CommunityCard |
| Hero · /eventi/:Eventi | CategoryLabel, CategoryLabelGroup |
| Content · /eventi/:Eventi | CategoryLabel, CategoryLabelGroup |
| Color container · /eventi/:Eventi | Label, Button, SplitContent, Icon, ContentHeadline, Divider |
| Intro · /eventi/:Eventi | Label, Button |
| Section 1 · /eventi/:Eventi | SplitContent |
| Section 2 · /eventi/:Eventi | SplitContent |
| Testimonial · /eventi/:Eventi | Icon, Divider |
| More Projects · /eventi/:Eventi | ContentHeadline |
| Main · /vieni-a-trovarci | NavItem, MainFormButton, Label, CommunityCard, FormControl, FormFieldGroup, FormField |
| Contact · /vieni-a-trovarci | NavItem, MainFormButton, FormControl, FormFieldGroup, FormField |
| Modulo · /vieni-a-trovarci | MainFormButton, FormControl, FormFieldGroup, FormField |
| Blog · /vieni-a-trovarci | Label, CommunityCard |
| Lista CMS · /vieni-a-trovarci | CommunityCard |
| Main · /404 | Button |
| Main · /eventi | LoadMore |
| Lista CMS · /eventi | LoadMore |
| Blog · /community | CommunityCard, ContentHeadline, LoadMore |
| Lista CMS · /community | CommunityCard, LoadMore |
| Main · /community/:Community | CategoryLabel, CommunityCard, CommunityDetails, ContentHeadline, CircularImage |
| Hero · /community/:Community | CategoryLabel, CommunityDetails, CircularImage |
| More content · /community/:Community | CommunityCard, ContentHeadline |
| Lista CMS · /community/:Community | CommunityCard |
| Contact From · Template | MainFormButton, ContentHeadline, FormControl, FormFieldGroup, FormField |
| Content container · Template | MainFormButton, ContentHeadline, FormControl, FormFieldGroup, FormField |
| Modulo · Template | MainFormButton, FormControl, FormFieldGroup, FormField |
| Desktop · Services Section | Label |
| The story · Our Story Section | Label, OurStoryCard, Icon |

## Capacità interne, non port autonomi

- ImageReveal è stato chiuso dal suo port autonomo e riusato da TestimonialsSection/ImageFill; TextStagger resta una capacità scoped non un port autonomo.
- useLineReveal implementa il titolo ProcessRow; non implementa i trasparenti Headline trigger100vh delle pagine.
- Icon Engine include visuali ufficiali Logo e spinner Load More. LoadMore ora completa UI/stati/callback; Logo di navigazione e collection pagination restano ai rispettivi parent.
- MainFormButton e il suo mapping lifecycle sono completi; la demo form nel catalogo non è il form di contatto prodotto né un backend.

## Legacy escluso

BTN 2 è legacy-unused/no migration required secondo audit live separato [BTN-2.md](BTN-2.md):non è pending e non è stato assorbito in Button.

## Resta da sviluppare

79 record: parent/sezioni/hero/Template/globalnavigation/cardnonmigrate/CMSlists e interazioni/motion autonomi. Le otto pagine prodotto, routing/CMSdestinazione/invioform/SEO/hosting restano fuori dai port dei singoli componenti. src/app/App.tsx mostra ancora la shell e /design-system.

Prove tecniche di questa riconciliazione: [MIGRATION-STATUS-VERIFICATION.json](MIGRATION-STATUS-VERIFICATION.json). Runtime invariato nella riconciliazione iniziale. La nuova slice Load More ha check e browser dedicati in [LOAD-MORE-VERIFICATION.json](LOAD-MORE-VERIFICATION.json); nessun altro port riaperto.


FAQRow: sola Row controllata completed, otto slot/source/runtime/motion/a11y verificati. FAQ Section rimane pending con la Row disponibile; nessuna sibling policy/page/CMS migrata. [Prove](FAQ-ROW-VERIFICATION.json). Le altre chiusure mantengono prove datate indipendenti.


## Rolling Text / Arrow Right Alt — 2026-10-07

RollingText canonico e consumer NavItem/Button/MainFormButton consolidati con policy live condivisa e catalogo parametrico;14istanze/7config verificate. Il modulo external Arrow Right Alt è legacy-unused (zero riferimenti), distinto dal glyph Material testimonial-arrow già usato dal Default TestimonialsArrow. Mapping erroneo del modulo a Icon rimosso, nessun nuovo runtime/alias. [Contratto/prove](ROLLING-TEXT.md). Altre chiusure e prove datate preservate.

Catalogo osservato al check finale:27voci, inclusa ImageParallax concorrente in corso;26voci/file già chiusi nella riconciliazione restano distinti dal nuovo lavoro non attestato qui. Correzione build incidentale limitata a un ramo TypeScript irraggiungibile del suo esempio, senza cambiamento del valore effettivo.


## Image Parallax — ONE TOUCH CLOSED,2026-10-07

ImageParallax all11sourceinstances: fill media, source X/Y semantics/overscan, ImageFill and live reduced policy, shared GSAP lifecycle. Consumer frames/CMS/pages remain parent scope; native hidden/placeholder limits are documented. Contract IMAGE-PARALLAX.md, evidence IMAGE-PARALLAX-VERIFICATION.json. Current57completed/78pending/2legacyunused and27catalogentries.
