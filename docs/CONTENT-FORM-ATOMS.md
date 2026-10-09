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
