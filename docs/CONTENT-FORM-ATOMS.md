# Atom di contenuto e form

Chiusura ONE TOUCH, 2026-10-06. Fonte read-only: progetto Framer LORUNI, session1; alberi correnti, binding CMS, tutte le repliche Desktop/Tablet/Phone e preview corrente. ProcessRow, OurStoryCard e CommunityCard non modificati.

## Componenti e API

- FormControl: attributi HTML nativi, type text/email oppure textarea; textarea height auto|100 distingue il frame contatti dal Template. FormFieldGroup: label e children, label HTML associata al controllo. FormField: composizione dei due con id stabile, label, attributi nativi e integrazione class/style/groupClassName/groupStyle. contactFields contiene le quattro configurazioni reali, senza quattro implementazioni.
- NavItem: variant Desktop|Mobile|Compact, text, color, link, onClick, newTab e className/style tecnici. Varianti scelte dal consumer: Header Tablet usa Desktop; Footer Tablet Compact; Footer Phone Desktop. Nessun cambio automatico per viewport. Nessuno stato applicativo o navigation owner.
- ContentHeadline: title, variant labelled|centered-large|centered|contact, label, color/labelColor e className/style. I sette record usano Headline/180 o /108 e semantica H1/H2 originale. Le copie Home/Esperienza hanno colore 950 esplicito; Community usa il colore 50 del preset/Label. Allocazione del contatto 2fr appartiene al parent.
- SplitContent: title, text, titleMaxWidth 480|640, className/style. Headline/76 H2, Text/32 P, opacity0.7, max640 del paragrafo. Gap8 Desktop,40 Tablet/Phone; colonne fino a810, stack sotto810; padding bottom100.
- StatRow: number string, text, caption compact|display, className/style. Numero Funnel Display600 48/48, letter−.05em; compact Funnel Sans600 12/18 e width122; display Funnel Display600 16/18. Parent flex/grid mantiene width:auto e il testo a larghezza intrinseca, anche se eccede la cella Phone come in Framer.
- CategoryLabelGroup: children, wrap true|phone, className/style. Gap2, overflowclip, allineamento end D/T e start Phone. Eventi wrap sempre; Community wrap solo Phone.
- CommunityDetails: signature, momentType, image, labels tuple di quattro stringhe opzionali, className/style. La firma editoriale è un P con preset Headline/16, non una heading. Il tipo ha opacity0.7. Immagine64, cover/radius56. Firma vuota nasconde anche immagine/tipo; etichette vuote vengono omesse. Token50 per firma e background etichette; token950 per testo etichette. Gap80 root,16 identità,4 testi; stack Phone.
- ImageFill: image, alt, fit cover|contain, clip, hidden, className/style. Media assoluto dentro il frame, 100%/100%, center. La Home usa cover e clip, nascosto Desktop; l’SVG Esperienza usa contain. Dimensioni/anchor/visibility responsive appartengono al parent: canvas1200×420 non diventa un vincolo browser. Canvas Home T810×1080 / P390×844; SVG D1200×848 / T1003×977.156 / P818×796.922.

## Consolidamento form

Sedici record inventario: quattro campi e quattro gruppi in ognuno dei due contesti. Identici contenuti/tipi/name/required/placeholder, typography, bordo overlay e focus. Name=Name required; Gruppo=Gruppo opzionale; Email=Email email required; Message=message textarea required. Label Nome / Gruppo / occasione / Email / Messaggio. Placeholder e case del name preservati nella data condivisa.

Input wrapper48 e padding12; controllo interno24 senza bordo fisico. Il bordo è un overlay1px, token border-form-input. Focus token shadow-form-focus, 2px2px0px0px neutral950. Font Funnel Sans400 18/21.6; placeholder950. Textarea padding12, minheight100 e resize vertical; contatti frame auto cresce con il resize, Template frame100 rimane fisso e clip. Non sono migrati invio, backend, spinner o composizione del form.

## Riuso e motion

Typography canonica, colori, geometria/source primitives, border/shadow esistenti; Label, CategoryLabel, CircularImage e RollingText. Nessun nuovo token o glyph. Nav usa tween RollingText .3s, [.82,.14,.29,.91], stagger60 e spring root .4/bounce.2/delay0. Una proprietà per target: layout root e glyph figli. Live useReducedMotionPreference riduce durata/stagger a0 e disabilita projection; MotionConfig già esistente. Gli altri nuovi atom non hanno effetti propri: nessun reveal aggiunto, RAF, smoothing o timeline.

## Verifica e confini

34 record chiusi; classificazione dei record residui in component-inventory.json.contentFormAtoms. Nessun semplice atom contenuto/form not-migrated rimane. Layer successivi: sezioni/composizioni/CMS lists, form completo e controlli invio/paginazione/accordion, Header/Footer/MobileNav/Logo link, card complesse, TextFitWidth/TextStagger, ticker, sticky, reveal/parallax/grain/preloader e runtime scroll. Button è lavoro concorrente separato, preservato.

Catalogo reale: otto nuove voci, due configurazioni form, tre varianti Nav e interazioni, headline, cinque contenuti Eventi e quattro Community, visibility e due media. Layout/controlli del catalogo sono separati dalle primitive.

Prove e input digest: CONTENT-FORM-ATOMS-VERIFICATION.json. Confronto browser a1200/810/390 e resize1199/809; misure coincidenti per headline, SplitContent, StatRow, dettaglio Community e frame contatto a parità di parent. Verifica focus/typing/email nativa, resize textarea, callback tastiera, target blank, hover/leave, MotionConfig always/user e condizioni CMS. Nessuna suite frontend eseguita, come richiesto dal progetto.

Limiti di evidenza: browser disponibile, snapshot sequenziali non revisione immutabile Framer; nessun confronto sincronizzato frame per frame o matrice multi-browser. Il sito pubblico aveva media/dettagli Community precedenti: per quei casi è stato usato il canvas/preview corrente. Le pagine e i loro parent non sono portati da questa task; le misure sono confrontate in una composizione locale isolata con le stesse larghezze effettive. Nessuna differenza residua osservata negli atom dopo le correzioni.


## Community Label Container — 2026-10-09
Only /esperienza adB9Vb46p and replicas verified/absorbed in existing ContentHeadline labelled wrapper. One unchanged Label Community/Neutral50; explicit wrapper width100% repairs Phone fill. Flex column/center/start/auto height/existing clip; no wrapper breakpoint, inactive gap80 omitted. No new runtime/catalog entry or parent section migration. [Contract](COMMUNITY-LABEL-CONTAINER.md) and scoped proof.


## Headline Sections — ONE TOUCH · 2026-10-09

Revalidazione dei sette ContentHeadline e due SplitContent già completed; solo due nuovi componenti. Nessun componente Headline180/108/76 e nessuna API universale. Mapping degli11pattern nel MIGRATION-STATUS.md e nel JSON autorevole.

- A HeroFittedHeadline: required text/phoneText, normali attributi div/ref/class/style. Unico TextFitWidth Funnel Display600, letter−.07/leading.9 D/T, −.03/1 Phone; whitespace/newline intatti. Root pointer-events:none, z2, max1500interno. D absolute inset120/top50%/translateY−50% verificato nel parent100vh; T inset20/bottom200; P relative/fill. Il Hero possiede altezza/CTA/media/parallax; fixture su fondo neutro conserva allocation/siblingCTA senza portare il parent.
- B LabelledStaggerHeadline: required label/text/phoneText e attributi div. Label canonica50, slot32% D/T, overlayPhone left0/top9 verificato nella preview (coordinate locali, noncanvas). TextStagger unico56/48/28, leading1.2/1.15/1.3, letter−.04/−.02; .1delay/.5dur/inView/variableWeightfalse/halfOpacityfalse. Copie consumer6/15spazi iniziali. In browser space-between rende inattivo il gap audit520; nessun gapfittizio. Nessuna motionaggiunta fuori dalla utility.
- C ContentHeadline labelled: stessa griglia3col/gap8/Title span2 per Home/Esperienza/Community. Label top (corretto align-items:start), h2/180. Phone stack16. Consumer Home gutter12 e Esperienza testimonials20 Phone producono wrapping diverso; quel gutter resta esterno. LabelContainer Community assorbito già esistente/fillPhone invariato.
- D SplitContent: stesso JSX/contratto480|640, h2/76 e p/32P opacity.7/max640; colonneD/T8/40, stackP40, paddingbottom100/clip. Mapping CMS consumer: Titolo esperienza + Racconto esperienza e Titolo gallery / highlights + Gallery / highlights della serata; booleani Section1/2 nel consumer, digital-challenge Section1false. Nessun binding/availability nel visual.
- E ContentHeadline centered: h2/108, flexalign-end/gap80/fill, due titoli consolidati; nessun breakpoint strutturale.
- F ContentHeadline centered-large: unico h1/180 per /community, justifycenter/alignstart/gap8. Title2fr con unico child risolve fill; wrapping1/1/2line D/T/P.
- G ContentHeadline contact: h2/180 left, flexalign-center/gap80/clip; parentalloca2frD/T e fillPhone. Sei liveconsumer (/, Esperienza, Event detail,404,Community,Community detail), disabilitatoEventi/contatti. Nessun deadcode/templatelegacy.

Fondazioni invariate: token.ts/css, typography, Label, TextFitWidth, TextStagger, useSiteBreakpoint e live reduced policy. Catalogo43voci/41file runtime; due nuove voci, consumer esistenti con fixture11pattern/editingCMS/long/availability/reduced e frame resize. Normali tag source: A/B div CodeComponent, C/D/E/Gh2, Fh1; nessun h1aggiunto ad Hero/Process.

33native/local comparisons geometry/typography identiche a1200/810/390 (scrollbar15px, larghezze effettive1185/795/375), righe Fit/Stagger whitespace identiche.30CMS cases/3longCMS, sliderkeyboardcontinuous900steps per struttura4famiglie con809/810/1199/1200, no horizontaloverflow dopo correzione solo controlsdoc. Source33roots reread identico escludendo rettangoli editor; source read-only. Typecheck/lint/build/tokenscheckPASS,602modules, existingchunkwarning. Prova unica in MIGRATION-STATUS-VERIFICATION.json.headlineSections. Limiti: Chromium, screenshotsequenziali, no rasterpixel-diff/syncframe/physicaltouch/OSpreference/screenreader. Fullparent/productpages/Logos non attestati.


## LOGOS AND INTRO — CLOSED, 2026-10-09

Esperienza `pattern-ZPvGsPv3Z` → `LogosAndIntro` (MIGRATED); contained `pattern-Jsd2pjqLq` → internal Logos + `BrandTicker` (ABSORBED INTO); Intro `OhvkaBGPZ` and responsive replicas → internal Intro (ABSORBED INTO). All three mappings CLOSED. Intro has no separate inventory unit: no phantom record added. 137 units: **84 completed / 51 not-migrated / 2 legacy-unused / 0 to-complete; 43 runtime files / 45 catalog entries / 41 pending parents parts-available**. Parent Color container and product Esperienza page remain pending.

One composition receives required semantic content; current copy/data is separate in `LogosAndIntro.data.ts`. Root vertical center/center, overflow clip, gap140 Desktop/Tablet and60 Phone. Logos section horizontal D/T gap92, padding24 0 24 80/40; Phone vertical gap24/padding-left20. Original Headline16 h3 and separator token; pseudo borders preserve source81px row height. User explicitly retains heading on Phone, where source hides it: authorized +41.59375px Logos/wrapper height. No background or later blocks owned here.

All six original concept marks reuse unchanged Icon Engine: Aperol108×27, Red Bull85×33 slot/original33×33 glyph, m2o95×33, King134×24, ASUS88×21, NVIDIA136×33 luminance mask with original105×33 grayscale inner raster. Original alpha masks/black fills and resulting ticker inversion preserved; no new asset, search, logo font or approximate geometry. Aria-labels say reference of concept, not LORUNI partner; noninteractive originals exposed once, loop replicas aria-hidden.

BrandTicker owns only a linear Web Animations transform: source velocity80px/s left, hover100/100=1 unchanged, no drag. Two bounded groups; natural widths1246/1046, loop periods1366/1126px from original gaps120/80. Measure on resize only; phase retained across remeasurement, IntersectionObserver margin100px and document visibility gate play/pause; scoped cancellation/disconnect/listener removal. No React frame state, per-frame measurement or custom RAF. Shared reduced policy/static failure path wraps all six logos, hides duplicate and removes motion; narrow D/T columns verified to keep every mark available.

Intro uses unchanged Label/TextStagger: section start/center gap4, padding0 80/40 200 D/T and0 12 100 Phone. Verified relative Label offsets80/40,40/33,12/14; absolute positioning is local to Intro. FunnelSans config80/64/36px, tracking−.04/−.04/−.02em, leading1.16/1.15/1.2; source utility renders revealed lines at weight500 as its existing contract. Delay.1/durPerLine.5/inView/variableWeightfalse/halfOpacityfalse. Six/ten/twelve leading spaces preserved verbatim; Phone shorter copy. Current preview actual text/Label token resolves Neutral50 rgb244240232 on dark parent, superseding historical Neutral950 naming in task audit.

Source CLI session1/read-only: three responsive trees reread unchanged excluding editor rects; no Framer edits/publish. Native/local1200/810/390 content clients1185/795/375: wrapper/Logos/Intro/ticker geometry and Label offsets equal except authorized Phone heading delta; 10/12/8 original lines and whitespace equal. Resize320↔2560 three continuous UI drags plus repeated extremes/boundaries809/810/811/1199/1200, no horizontal overflow or DOM growth. Offscreen pause/resume source/runtime, loop continuity, hover unchanged, reveal entry/settled/reduced and mount cleanup checked. Live MotionConfig always/user keeps all six originals available. Catalog has real composition, ticker, controls and responsive fixtures.

Authoritative proof: [MIGRATION-STATUS-VERIFICATION.json](MIGRATION-STATUS-VERIFICATION.json), `logosAndIntro`; working source/captures remain ignored. Typecheck/lint/build/tokens:check PASS; stale hardcoded audit regenerated without canonical token changes. Existing Vite chunk>500kB warning retained; no frontend suite added/run. Motion timing limit: nominal source formula/config80px/s preserved; native preview Date.now samples measure about87–88px/s against local about80. No speculative speed compensation or synchronized-clock certification. Actual hidden/background tab transitions unavailable in IAB (documents remain visible); visibility handling inspected, offscreen transitions exercised. No raster pixel-diff, OS preference toggle, hardware touch, screen reader or other engine certification.
