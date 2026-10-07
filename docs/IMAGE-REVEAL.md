# ImageReveal — ONE TOUCH

Chiusura 2026-10-07. Nome runtime `ImageReveal`: utility media condivisa; il nome
Framer `Misc/Testimonials Image reveal` rimane nella provenienza.
Fonte read-only `dmfgfOdOP`, cattura [image-reveal-source.json](framer/image-reveal-source.json),
prove [IMAGE-REVEAL-VERIFICATION.json](IMAGE-REVEAL-VERIFICATION.json).

## Contratto

`image?: string | { src: string; srcSet?: string; sizes?: string; alt?: string }`,
`backgroundColor?: CSSProperties['backgroundColor']`. Il default colore riusa il
controllo canonico Neutral50; il consumer Eventi usa Neutral950. `className` e
`style` sono integrazione tecnica. Nessuna variante pubblica, indice, carousel,
array, visibility o ID Framer nel runtime. Il parent assegna contenuto e hint
responsive-image; ImageFill inoltra srcSet/sizes senza costruire URL CDN.

Il root riempie il frame del parent, senza dimensioni intrinseche o rapporto
inventati. Cover e immagine seguono la stessa altezza. ImageFill mantiene
object-fit cover e object-position50%50%, verificati nel preview nativo.
L'overflow è clip. Il parent decide altezza, rapporto e assenza sui breakpoint.

## Reveal

La copertura assoluta sopra l'immagine, z-index2, parte da left0/width100%.
Alla prima apparizione effettiva nel viewport aspetta0.6s, poi si ritrae verso
sinistra fino a left−1px/width1px, tween0.3s/cubic[.82,.18,.23,.74]. Altezza
sempre piena; immagine ferma, senza opacity/scale/clip-path. La fonte usa
proiezione del layout: i rettangoli canvas1×800 e1×260 non rappresentano la
copertura renderizzata. Il preview Eventi mantiene lo stato iniziale finché
il media sotto viewport non appare: un timer al solo mount era insufficiente.

Motion useInView once/some e useAnimationControls possiedono esclusivamente
left/width della cover, con stop allo smontaggio/cambio policy. Configurazione
e delay sono token esistenti. useReducedMotionPreference riusa la policy live
OS/MotionConfig: copertura immediatamente fuori dal frame, senza attesa. Se
IntersectionObserver non è disponibile, l'immagine è subito leggibile. Nessun
timeout, RAF, progress owner o helper accessibility aggiuntivo.

Un cambio immagine su istanza conservata mantiene lo stato, come la callback
nativa che non dipende dal controllo image. Nascondere e mostrare una istanza
già rivelata non riavvia. Smontare e rimontare parte coperto e riavvia alla nuova
apparizione. TestimonialsSection conserva il key dell'indice attivo: precedente,
successivo e ritorno a una slide producono un nuovo mount. Il carousel rimane
interamente nel parent, incluso reset al passaggio Phone.

## Consumer e prove

Tutte35istanze lette: quattro slot attraverso otto varianti Section(32), più
tre istanze Eventi Desktop/Tablet/Phone. Cinque slot indipendenti dopo replica
deduplication. Section è consumata da Home/Esperienza; gli altri scope correnti
sono stati scansionati e non aggiungono istanze dirette della utility.

Native Home1440/810: media416.328×762.453 e233×584. Native Eventi1440/810:
416.328×734 e233×734. Phone390: entrambi i parent rimuovono il media. Native
Section standalone:384×734, tutti quattro asset/crop; il componente260×256
mostra la stessa copertura a tutta altezza. I rapporti diversi appartengono ai
parent, non alla utility. Localmente verificati il vero Section, quattro slide,
loop/precedente Enter/click rapidi, Desktop→Tablet indice conservato e Phone
assenza/reset; catalogo1440/810/390 fluido, due colori, remount, cambio immagine,
hidden conservato, reduced live e forwarding responsive-image.

I campioni temporali sono osservazioni browser con latenza dello strumento;
delay/easing/durata esatti sono inoltre verificati nel modulo sorgente. Non sono
un benchmark sincronizzato frame per frame o una prova touch/cross-browser.
La policy live è stata commutata attraverso il contesto MotionConfig condiviso,
senza modificare le preferenze OS del computer.

## Confini e differenze

Nessuna differenza visiva rilevata per i media popolati confrontati. Il DOM locale
interpola left/width invece di copiare il DOM/projection Framer; arrotondamento e
campionamento possono differire fra motori. La fonte senza immagine mostra un
checker editoriale del preview: il runtime locale omette img e lascia il frame
trasparente dopo il reveal. Nessun consumer reale analizzato richiede quel checker.
Le URL/candidate/sizes CDN appartengono al dato image del parent; le stringhe
esistenti Section conservano i propri URL. Il catalogo verifica esplicitamente
il descriptor responsive con candidate catturate e sizes260px del proprio frame.
La pagina CMS `/eventi/:Eventi` non è portata in questa task: il suo slot nativo,
immagine dinamica, Neutral950 e visibilità sono verificati, il componente locale
equivalente è dimostrato nel catalogo. Nessuna utility successiva affrontata.

## File della task

- Nuovi: src/components/ImageReveal.tsx/css; src/pages/design-system/ImageRevealExamples.tsx.
- Modificati: ImageFill.tsx; TestimonialsSection.tsx/css/data.ts; componentExamples.ts.
- Documentazione: questo contratto/prova, docs/framer/image-reveal-source.json,
  component-inventory.json e audit generato hardcoded-audit.json, COMPONENT_INVENTORY.md, ARCHITECTURE.md, MOTION.md,
  DESIGN-SYSTEM.md, .agent/PLANS.md e piano2026-10-07-image-reveal.md.
- Prove browser e screenshot: .agent/proofs/image-reveal-*.

Le altre modifiche presenti nel checkout restano lavoro preesistente/concorrente.
Typecheck/lint/build/tokens:check e digest finali sono registrati nella prova JSON.
