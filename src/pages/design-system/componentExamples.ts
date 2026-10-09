import { EventTestimonialExample, CmsCollectionsExample } from './SessionFinalExamples'
import { LogosAndIntroExample, LogosAndIntroFrame } from './LogosAndIntroExamples'
import { HeadlineSectionsExample, HeadlineSectionsFrame } from './HeadlineSectionsExamples'
import { createElement, useState, type ReactNode } from 'react'
import { StatsExample, StatsFrame, StatsControls } from './StatsExamples'
import { TheStoryTrackExample, TheStoryTrackControls, TheStoryTrackFrame } from './TheStoryTrackExamples'
import { ProjectCardDefaultExample, ProjectCardConsumerExample, ProjectCardControlsExample } from './ProjectCardExamples'
import { ServiceCardDefaultExample, ServiceCardSourceExample, ServiceCardControlsExample } from './ServiceCardExamples'
import { ServicesDesktopTrackExample, ServicesDesktopTrackControls, ServicesDesktopTrackFrame } from './ServicesDesktopTrackExamples'
import { Icon, type IconProps } from '../../components/Icon'
import { iconNames } from '../../components/Icon.registry'
import { Divider } from '../../components/Divider'
import { CircularImage } from '../../components/CircularImage'
import { RollingText } from '../../components/RollingText'
import { RollingTextControlsExample, ExistingArrowGlyphFillExample } from './RollingTextExamples'
import { rollingTextConfigurations, rollingTextConfiguration } from './RollingTextExamples.data'
import { Button } from '../../components/Button'
import { ButtonControlsExample } from './ButtonExamples'
import { MainFormButtonLifecycleExample, MainFormButtonStatesExample } from './MainFormButtonExamples'
import { LoadMore } from '../../components/LoadMore'
import { LoadMoreLifecycleExample } from './LoadMoreExamples'
import { FAQSectionControlsExample, FAQSectionEmptyExample, FAQSectionSourceExample } from './FAQSectionExamples'
import { FAQRowExample } from './FAQRowExamples'
import { faqRowSlots } from './FAQRowExamples.data'
import { ImageRevealExample } from './ImageRevealExamples'
import { ImageParallaxExample } from './ImageParallaxExamples'
import { GrainDefaultExample, GrainHeroExample, LiquidControlsExample } from './GrainExamples'
import { TextFitSourceExample, TextFitControlsExample, TextStaggerSourceExample, TextStaggerControlsExample, TextResponsiveExample } from './TextUtilityExamples'
import { textFitCases, textStaggerCases } from './TextUtilityExamples.data'
import { ArrowForward } from '../../components/ArrowForward'
import { CategoryLabel } from '../../components/CategoryLabel'
import { Label } from '../../components/Label'
import { FaqIcon } from '../../components/FaqIcon'
import { TestimonialsArrow, type TestimonialsArrowProps } from '../../components/TestimonialsArrow'
import { TestimonialsSourceExample, TestimonialsControlsExample, TestimonialsFrameComparison } from './TestimonialsSectionExamples'
import { colors } from '../../styles/token'
import { ProcessHomeExample, ProcessRowControlsExample } from './ProcessRowExamples'
import { OurStoryControlsExample, OurStoryDefaultExample, OurStoryRealCardsExample } from './OurStoryCardExamples'
import { CommunityCardControlsExample, CommunityCardDefaultExample, CommunityCardRealExamples } from './CommunityCardExamples'
import { FormFieldsExample, NavItemsExample, HeadlinesExample, SplitContentsExample, StatRowsExample, CategoryLabelsExample, CommunityDetailsExample, ImageFillsExample } from './ContentFormAtomExamples'

export type ComponentExample = {
  name: string
  description: string
  source: string
  examples: readonly { name: string; preview: ReactNode }[]
}

// Catalog-only control: the real card supplies rotation through its hover state.
function ArrowForwardTransitionExample({ size }: { size: 28 | 40 }) {
  const [hoverState, setHoverState] = useState(false)
  return createElement('div', { className: 'ds-demo-inline' },
    createElement(ArrowForward, { size, rotation: hoverState ? 0 : -45 }),
    createElement('button', {
      type: 'button', className: 'ds-demo-action',
      'aria-pressed': hoverState,
      onClick: () => setHoverState(value => !value),
    }, hoverState ? 'Ripristina' : 'Prova hover'))
}

function ButtonArrowVisualExample({ name }: { name: 'button-arrow' | 'button-arrow-secondary' }) {
  const [hovered, setHovered] = useState(false)
  return createElement('div', { className: 'ds-demo-inline' },
    createElement(Icon, { name, hovered }),
    createElement('button', { type: 'button', className: 'ds-demo-action', 'aria-pressed': hovered, onClick: () => setHovered(value => !value) },
      hovered ? 'Ripristina' : 'Prova hover'))
}

// Catalog-only state owner; FAQ Icon emits Click without toggling itself.
function FaqIconInteractionExample() {
  const [variant, setVariant] = useState<'Plus' | 'Minus'>('Plus')
  const [clicks, setClicks] = useState(0)
  return createElement('div', null,
    createElement(FaqIcon, {
      variant,
      'aria-label': 'FAQ Icon · Click',
      onClick: () => {
        setClicks(value => value + 1)
        setVariant(value => value === 'Plus' ? 'Minus' : 'Plus')
      },
    }),
    createElement('output', { 'aria-live': 'polite' }, `Click: ${clicks} · ${variant}`))
}

// Add real imported components and their states here as they are implemented.
// Documentation controls are not product components.
function TestimonialsArrowInteractionExample({ icon }: Pick<TestimonialsArrowProps, 'icon'>) {
  const [clicks, setClicks] = useState(0)
  return createElement('div', null,
    createElement(TestimonialsArrow, { icon, onClick: () => setClicks(value => value + 1) }),
    createElement('output', { 'aria-live': 'polite' }, `Click: ${clicks}`))
}

export const componentExamples: readonly ComponentExample[] = [
  { name: 'Logos and Intro', description: 'Esperienza: sei brand affini, non partner, ticker originale e Intro responsive. Background e blocchi successivi appartengono al parent.', source: 'Framer · Logos and Intro → LogosAndIntro', examples: [{ name: 'Esperienza · composizione completa', preview: createElement(LogosAndIntroExample) }, { name: 'Resize · viewport reale', preview: createElement(LogosAndIntroFrame) }] },
  { name: 'Brand Ticker', description: 'Asset originali Icon Engine; loop lineare 80px/s verso sinistra, hover100%, nessun drag. Tutti i marchi disponibili nel percorso reduced/static.', source: 'Framer · Logos ticker → BrandTicker', examples: [{ name: 'Ticker · motion e reduced', preview: createElement(LogosAndIntroExample, { tickerOnly: true }) }] },
  { name: 'Hero Fitted Headline', description: 'Headline Home, TextFitWidth canonico; due righe Desktop/Tablet, quattro Phone. Il parent Hero possiede altezza, CTA e motion.', source: 'Framer · Headline Home Hero → HeroFittedHeadline', examples: [{ name: 'Home · allocazione originale', preview: createElement(HeadlineSectionsExample) }, { name: 'Resize continuo · viewport reale', preview: createElement(HeadlineSectionsFrame) }] },
  { name: 'Labelled Stagger Headline', description: 'Label + TextStagger del Process Home. Copy Phone distinta, whitespace originale, reveal canonico per linea.', source: 'Framer · Headline Home Process → LabelledStaggerHeadline', examples: [{ name: 'Home · La serata', preview: createElement(HeadlineSectionsExample, { initial: 'process' }) }] },
  { name: 'Event Testimonial', description: 'Singolo testimonial CMS Evento; quote isSet, immagine Desktop/Tablet, Quote Icon anche Phone. Nessun carousel.', source: 'Framer · /eventi/:Eventi · Testimonial', examples: [{ name: 'Citazione evento', preview: createElement(EventTestimonialExample) }] },
  { name: 'Event Card Slot', description: 'Adapter della prima card Eventi e dei quattro consumer Home. Routing, offset, id/ref; la scena Home possiede sticky e trasformazioni tra target.', source: 'Framer · Collection List Eventi · Home / Eventi', examples: [{ name: 'Evento in evidenza', preview: createElement(CmsCollectionsExample, { initial: 'featured' }) }] },
  { name: 'Event Collection', description: 'Lista restante e correlati Eventi. Inner ProjectCard, esclusione del corrente, responsive e pagination controllata.', source: 'Framer · /eventi · /eventi/:Eventi', examples: [{ name: 'Elenco Eventi', preview: createElement(CmsCollectionsExample) }] },
  { name: 'Community Collection', description: 'Preview Esperienza/visita, elenco Community e correlati. CommunityCard, heading semantics e LoadMore originali.', source: 'Framer · Community Collection List', examples: [{ name: 'Elenco Community', preview: createElement(CmsCollectionsExample, { initial: 'community' }) }] },
  {
    name: 'Stats',
    description: 'Section fluida di StatRow statiche: Desktop/Tablet distribuiti, Phone grid2×2; primo label compact originale. Copy fornito dal consumer.',
    source: 'Stats · /esperienza → Stats · docs/STATS.md',
    examples: [
      { name: 'Esperienza · quattro contenuti correnti', preview: createElement(StatsExample) },
      { name: 'Desktop / Tablet / Phone · browser reale', preview: createElement(StatsFrame) },
      { name: 'Stringhe, label lungo e compact/display', preview: createElement(StatsControls) },
    ],
  },
  {
    name: 'The Story Track',
    description: 'Slot orizzontale statico: Intro, ImageParallax, due OurStoryCard e Quote con TextStagger. Il parent possiede responsive selection e trasporto scroll.',
    source: 'The story · Our Story Section → TheStoryTrack · docs/THE-STORY-TRACK.md',
    examples: [
      { name: 'Esperienza · composizione reale', preview: createElement(TheStoryTrackExample) },
      { name: 'Default sorgente, contenuto dinamico, standalone e viewport', preview: createElement(TheStoryTrackControls) },
      { name: 'Desktop/Tablet · resize browser reale', preview: createElement(TheStoryTrackFrame) },
    ],
  },
  {
    name: 'Services Desktop Track',
    description: 'Content-slot statico Desktop/Tablet: intro e ServiceCard, larghezza intrinseca, item opzionali e target stabili. Il parent possiede viewport, trasporto e selezione Mobile.',
    source: 'Desktop · Services Section → ServicesDesktopTrack · docs/SERVICES-DESKTOP-TRACK.md',
    examples: [
      { name: 'Home · quattro service e intro', preview: createElement(ServicesDesktopTrackExample) },
      { name: 'Item disattivato · nessuno spazio fantasma', preview: createElement(ServicesDesktopTrackExample, { optional: true }) },
      { name: '0–8 item, target, altezza, contenuto e viewport', preview: createElement(ServicesDesktopTrackControls) },
      { name: 'Desktop/Tablet · browser iframe', preview: createElement(ServicesDesktopTrackFrame) },
    ],
  },
  {
    name: 'Service Card',
    description: 'Card responsive con Image Parallax, labels opzionali e copy price. Parent possiede visibilità, scroll, ID e dimensioni.',
    source: 'Cards/Service card → ServiceCard; due varianti sorgente, nessuna variant pubblica o Services Section.',
    examples: [
      { name: 'Default sorgente', preview: createElement(ServiceCardDefaultExample) },
      ...['Al tavolo', 'Gioco', 'Eventi', 'Il bar'].map((name, index) => ({ name, preview: createElement(ServiceCardSourceExample, { index }) })),
      { name: 'Labels, price, media, parent e lifecycle', preview: createElement(ServiceCardControlsExample) },
    ],
  },
  {
    name: 'Project Card',
    description: 'Main / Inner, Desktop + Tablet / Phone. ImageFill, typography e arrow_forward originali; label opzionali. Il parent gestisce link, dimensioni e CMS. Hover desktop: freccia −45°→0°, zoom 1→1.1 solo Inner, tween 0.5s. Nessuna interazione tap aggiunta.',
    source: 'Framer · Cards/Project Card · 21 istanze · docs/PROJECT-CARD.md',
    examples: [
      { name: 'Main · responsive', preview: createElement(ProjectCardDefaultExample, { mode: 'main' }) },
      { name: 'Inner · responsive / hover', preview: createElement(ProjectCardDefaultExample, { mode: 'inner' }) },
      { name: 'Home · 4 contenuti CMS / parent fill e 100vh', preview: createElement(ProjectCardConsumerExample, { page: 'home' }) },
      { name: 'Eventi · Main e Inner / parent auto', preview: createElement(ProjectCardConsumerExample, { page: 'events' }) },
      { name: 'Dettaglio evento · Inner', preview: createElement(ProjectCardConsumerExample, { page: 'event-detail' }) },
      { name: 'CMS, label mancanti, media, sizing e reduced motion', preview: createElement(ProjectCardControlsExample) },
    ],
  },
  {
    name: 'TextFitWidth',
    description: 'Ricerca binaria originale sulla riga preformattata più larga. Font parametrico, whitespace e newline intatti; parent e font loading invalidano il fitting.',
    source: 'Framer · Text_fit.tsx · 6 istanze Home / Esperienza',
    examples: [
      ...textFitCases.map(c => ({ name: c.key, preview: createElement(TextFitSourceExample, { caseKey: c.key }) })),
      { name: 'Testo dinamico / font / resize / align / lifecycle', preview: createElement(TextFitControlsExample) },
      { name: 'Home · parent responsive', preview: createElement(TextResponsiveExample) },
      { name: 'Esperienza · parent responsive', preview: createElement(TextResponsiveExample, { page: 'experience' }) },
    ],
  },
  {
    name: 'TextStagger',
    description: 'DOM Range rileva il wrapping reale; reveal per linea y70→0. Trigger una volta, wght500/700 statico e half-opacity per inizio linea, come nel sorgente.',
    source: 'Framer · Workshop_Component/TextStagger_1.tsx · 15 istanze',
    examples: [
      ...textStaggerCases.map(c => ({ name: c.key, preview: createElement(TextStaggerSourceExample, { caseKey: c.key }) })),
      { name: 'CMS / trigger / weight / half-opacity / resize / reduced / lifecycle', preview: createElement(TextStaggerControlsExample) },
    ],
  },
  {
    name: 'Grain',
    description: 'Raster originale ripetuto, ciclo 8s a step verificato. Opacity interna separata dal layer. Mask, sizing e stacking appartengono al consumer Hero; overlay sempre passivo.',
    source: 'Framer · Grain · Home Desktop / Tablet / Phone',
    examples: [
      { name: 'Default · opacity 0.5', preview: createElement(GrainDefaultExample) },
      { name: 'Hero · opacity 1 × layer 0.1 · mask responsive', preview: createElement(GrainHeroExample) },
    ],
  },
  {
    name: 'Liquid Hover',
    description: 'Distorsione fluida WebGL dell’immagine. Pointer e touch/drag; ImageFill statico per reduced motion o WebGL non disponibile. GSAP ticker condiviso, risorse GPU scoped.',
    source: 'Framer · Liquid Hover · Home Desktop, replica Tablet/Phone nascoste; estensione touch autorizzata',
    examples: [{ name: 'Controlli reali · image / resolution / cursor / power / distortion / touch', preview: createElement(LiquidControlsExample) }],
  },
  {
    name: 'Image Parallax',
    description: 'Primitive media fill. Y segue il passaggio verticale nel viewport; X la posizione orizzontale del parent. Overscan proporzionale, crop cover, policy reduced motion condivisa. Il parent seleziona breakpoint e risolve immagini/binding.',
    source: 'Framer · Image Parallax · 11 istanze · Esperienza / Contatti / Service Card / Our Story',
    examples: [
      { name: '/esperienza · Y30 · 92vh', preview: createElement(ImageParallaxExample, { kind: 'experience' }) },
      { name: '/vieni-a-trovarci · Y30 · 92vh', preview: createElement(ImageParallaxExample, { kind: 'contact' }) },
      { name: 'Service Card · Desktop X−50 / Phone Y50 · fill', preview: createElement(ImageParallaxExample, { kind: 'service' }) },
      { name: 'Our Story · Y50 · 640px', preview: createElement(ImageParallaxExample, { kind: 'story' }) },
      { name: 'Our Story · X−50 · 660px × fill', preview: createElement(ImageParallaxExample, { kind: 'story-horizontal' }) },
      { name: 'X+Y / immagine dinamica / crop / decorazioni / reduced / unmount', preview: createElement(ImageParallaxExample) },
      { name: 'Confronto media a viewport intero', preview: createElement('a', { href: '/design-system?fixture=image-parallax' }, 'Apri confronto Image Parallax') },
    ],
  },
  {
    name: 'FAQ Section',
    description: 'Accordion esclusivo con FAQRow/FaqIcon esistenti. Domande vuote omesse; identità persistenti, riserva del layout e policy reduced condivisa.',
    source: 'Framer · Section/FAQ Section · tre istanze /vieni-a-trovarci',
    examples: [
      { name: 'Cinque FAQ reali · tre slot vuoti · tutti Closed iniziali', preview: createElement(FAQSectionSourceExample) },
      { name: 'Accordion · resize · contenuto dinamico · focus · reduced motion', preview: createElement(FAQSectionControlsExample) },
      { name: 'Question assente · answer sola · nessuna row o gap', preview: createElement(FAQSectionEmptyExample) },
      { name: 'Confronto nei viewport nativi · Desktop / Tablet / Phone', preview: createElement('a', { href: '/design-system?fixture=faq-section-frame' }, 'Apri confronto FAQ Section') },
    ],
  },
  {
    name: 'FAQ Row',
    description: 'Row/FAQ Row · Opened / Closed, API controllata e Click. FAQ Icon riusato; il parent possiede sibling policy e title isSet. Risposta fuori flow/inert in Closed, tween originale 0.2s.',
    source: 'Framer · Row/FAQ Row · FAQ Section · 8 istanze',
    examples: [
      { name: 'Prova apertura e chiusura', preview: createElement(FAQRowExample) },
      ...(['Opened', 'Closed'] as const).map(state => ({ name: state === 'Opened' ? 'Inizialmente aperta' : 'Inizialmente chiusa', preview: createElement(FAQRowExample, { initialOpen: state === 'Opened' }) })),
      ...faqRowSlots.map((item, slot) => ({ name: `Istanza ${slot + 1} · ${item.title || 'title isSet=false'}`, preview: createElement(FAQRowExample, { slot }) })),
    ],
  },
  {
    name: 'Image Reveal',
    description: 'Utility media condivisa: copertura che si ritrae verso sinistra dopo 0.6s, tween 0.3s originale. Il parent decide dimensioni, presenza e identità; il cambio immagine su un’istanza conservata non riavvia il reveal.',
    source: 'Framer · Misc/Testimonials Image reveal · Testimonials Section / dettaglio Eventi · 35 istanze, 5 slot indipendenti',
    examples: [
      { name: 'Frame sorgente · 260×256 · reveal / reduced motion', preview: createElement(ImageRevealExample, { intrinsic: true }) },
      { name: 'Testimonials · Neutral50 · fluido / remount / visibility / image update', preview: createElement(ImageRevealExample) },
      { name: 'Event detail · Neutral950 · immagine assegnata dal parent', preview: createElement(ImageRevealExample, { event: true }) },
      { name: 'Image assente · nessun media', preview: createElement(ImageRevealExample, { empty: true }) },
    ],
  },
  {
    name: 'Load More',
    description: 'Nav/Load More · Default / Loading / Hidden. Il parent passa loading, hasMore e onLoadMore; layout e paginazione restano al consumer. Spinner originale condiviso nell’Icon Engine.',
    source: 'Framer · Nav/Load More · /eventi /community · 6 istanze',
    examples: [
      { name: 'Default · hover / click / focus / keyboard', preview: createElement(LoadMoreLifecycleExample) },
      { name: 'Loading · spinner 20×20 · callback bloccato', preview: createElement(LoadMore, { hasMore: true, loading: true, onLoadMore: () => {} }) },
      { name: 'Hidden · hasMore=false · nessun ingombro o controllo', preview: createElement(LoadMore, { hasMore: false, onLoadMore: () => {} }) },
      ...(['Eventi', 'Community'] as const).flatMap(consumer => (['Desktop', 'Tablet', 'Phone'] as const).map(breakpoint => ({
        name: `${consumer} · ${breakpoint} · geometria invariata`,
        preview: createElement(LoadMoreLifecycleExample),
      }))),
    ],
  },
  {
    name: 'Main form button', description: 'Nav/Main form button · Default, Loading, Disabled, Success, Error. Mapping reale pending/incomplete/success/error; submit nativo, Rolling Text e spinner originali. Auto-width del contatto e fill del Template.',
    source: 'Framer · Nav/Main form button · /vieni-a-trovarci / Template · 6 istanze',
    examples: [
      { name: 'Cinque stati · auto width · hover / focus / keyboard', preview: createElement(MainFormButtonStatesExample) },
      { name: 'Cinque stati · fill width', preview: createElement(MainFormButtonStatesExample, { width: 'fill' }) },
      { name: 'Form lifecycle · submit / pending / incomplete / success / error', preview: createElement(MainFormButtonLifecycleExample) },
    ],
  },
  { name: 'Form Field', description: 'FormControl + FormFieldGroup: label nativa, input text/email e textarea ridimensionabile. Configurazioni condivise Name/Gruppo/Email/Message.', source: 'Framer · /vieni-a-trovarci + Template · 16 record', examples: [{ name: 'Contatti · altezza Message automatica', preview: createElement(FormFieldsExample) }, { name: 'Template · contenitore Message 100px', preview: createElement(FormFieldsExample, { fixed: true }) }] },
  { name: 'Nav Item', description: 'Desktop 22px / Mobile 28px / Compact 16px, selezionati dal parent. Rolling Text, link, callback e nuova scheda.', source: 'Framer · Nav Item · 48 istanze', examples: [{ name: 'Variant / hover / leave / callback / link', preview: createElement(NavItemsExample) }] },
  { name: 'Content Headline', description: 'Composizioni consolidate: Label + titolo, h1 Community, h2 correlati e contatto Template live. Il consumer possiede allocation e colori.', source: 'Framer · Home / Esperienza / Eventi / Community / Template · 7 record', examples: [{ name: 'Tutte le configurazioni reali', preview: createElement(HeadlinesExample) }, { name: 'Consumer sorgente · responsive', preview: createElement(HeadlineSectionsExample, { initial: 'home-section' }) }] },
  { name: 'Split Content', description: 'Headline/76 + Text/32 P; due colonne Desktop/Tablet, stack Phone, misure titolo 480/640. Binding e visibilità CMS nel consumer.', source: 'Framer · dettagli Eventi · 2 record', examples: [{ name: 'Cinque contenuti CMS · due blocchi', preview: createElement(SplitContentsExample) }, { name: 'Consumer CMS · testo lungo e visibilità', preview: createElement(HeadlineSectionsExample, { initial: 'event-first' }) }] },
  { name: 'Stat Row', description: 'Numeri stringa, incluso ∞. Due configurazioni reali della didascalia.', source: 'Framer · Esperienza · 4 record', examples: [{ name: 'Quattro righe reali', preview: createElement(StatRowsExample) }] },
  { name: 'Category Label Group', description: 'Wrapper con gap 2px: allineamento a destra Desktop/Tablet, a sinistra Phone. Etichette e condizioni appartengono al consumer.', source: 'Framer · dettagli Eventi / Community', examples: [{ name: 'Etichette evento', preview: createElement(CategoryLabelsExample) }] },
  { name: 'Community Details', description: 'Firma editoriale, tipo di momento, immagine e quattro etichette condizionali. Colori della sorgente conservati.', source: 'Framer · TechDetails · dettaglio Community', examples: [{ name: 'Contenuti e visibilità', preview: createElement(CommunityDetailsExample) }] },
  { name: 'Image Fill', description: 'Media semplice cover/contain, center: dimensioni, posizione e visibility responsive assegnate dal parent.', source: 'Framer · Mobile Image Home / Image Esperienza', examples: [{ name: 'Due media sorgente', preview: createElement(ImageFillsExample) }] },
  {
    name: 'Button',
    description: 'Nav/Button · tre variant pubbliche. Rolling Text e freccia originali; hover separato dalla configurazione, link nativo e focus globale. Il consumer seleziona variant responsive e risolve contenuto/href dinamici.',
    source: 'Framer · Nav/Button · Home / 404 / Evento · 9 istanze',
    examples: [
      ...(['Primary', 'Secondary', 'Primary Mobile'] as const).map(variant => ({ name: `${variant} · default / hover / leave / focus`, preview: createElement('div', { style: { overflowX: 'auto', padding: '8px' } }, createElement(Button, { variant, link: '#ds-component-button' })) })),
      ...(['Desktop', 'Tablet', 'Phone'] as const).flatMap(breakpoint => [
        { name: `Home · ${breakpoint}`, preview: createElement('div', { style: { overflowX: 'auto', padding: '8px' } }, createElement(Button, { variant: breakpoint === 'Phone' ? 'Primary Mobile' : 'Primary', text: 'VEDI LE SERATE', link: '/eventi' })) },
        { name: `404 · ${breakpoint}`, preview: createElement('div', { style: { overflowX: 'auto', padding: '8px' } }, createElement(Button, { variant: breakpoint === 'Phone' ? 'Primary Mobile' : 'Primary', text: 'TORNA A LORUNI', link: '/' })) },
        { name: `Evento · ${breakpoint} · contenuto/link dal consumer`, preview: createElement(Button, { variant: 'Secondary', text: 'INFO SULLA SERATA', link: '/vieni-a-trovarci' }) },
      ]),
      { name: 'Personalizza il pulsante', preview: createElement(ButtonControlsExample) },
      { name: 'Link esterno · nuova scheda', preview: createElement(Button, { variant: 'Secondary', text: 'LORUNI · Framer', link: 'https://framer.com/projects/Loruni--F3868vuk7YeE7pDEgpP6', newTab: true }) },
      { name: 'Link non configurato · default sorgente', preview: createElement('div', { style: { overflowX: 'auto' } }, createElement(Button)) },
    ],
  },
  {
    name: 'Community Card',
    description: 'Fotografia e momento Community. Un’unica card fluida, titolo H2/H3 e zoom hover originale; griglia, link e selezione CMS appartengono al parent.',
    source: 'Community Card · legacy Cards/Blog Card',
    examples: [
      { name: 'Community · H2 · quattro momenti reali', preview: createElement(CommunityCardRealExamples, { h3: false }) },
      { name: 'Esperienza / Vieni a trovarci / altri momenti · H3', preview: createElement(CommunityCardRealExamples, { h3: true }) },
      { name: 'Personalizza la card', preview: createElement(CommunityCardControlsExample) },
      { name: 'Default nativo · nessuna fotografia', preview: createElement(CommunityCardDefaultExample) },
    ],
  },
  {
    name: 'Our Story Card',
    description: 'Due sole varianti native Desktop/Mobile, quattro contenuti stringa e spring originale. Selezione variante e sizing esterno appartengono al consumer.',
    source: 'Cards/Our Story Card',
    examples: [
      { name: 'Le due card reali · Esperienza', preview: createElement(OurStoryRealCardsExample) },
      { name: 'Default controls · Desktop 960×1080', preview: createElement(OurStoryDefaultExample, { variant: 'Desktop' }) },
      { name: 'Default controls · Mobile 390×auto', preview: createElement(OurStoryDefaultExample, { variant: 'Mobile' }) },
      { name: 'Varianti e contenuti configurabili', preview: createElement(OurStoryControlsExample) },
    ],
  },
  {
    name: 'Divider',
    description: 'Atom decorativo · 80×6 / 82×6. Fill Brand/Primary o Brand/Accent secondo il nodo sorgente; nessuna animazione o offset proprio.',
    source: 'Framer · Service card / Process Row / Testimonials / Our Story Card / Evento',
    examples: [
      { name: '80×6 · Brand/Primary', preview: createElement(Divider, { color: `var(${colors.brandPrimary.cssVariable})` }) },
      { name: '80×6 · Brand/Accent', preview: createElement(Divider, { color: `var(${colors.brandAccent.cssVariable})` }) },
      { name: '82×6 · Our Story Card', preview: createElement(Divider, { width: 82, color: `var(${colors.brandPrimary.cssVariable})` }) },
    ],
  },
  {
    name: 'Circular Image',
    description: 'inferred-name · Image 64×64 oppure Home Phone 56×56 effettivi (canvas height 60px, aspect 1). Radius originale 56px, crop cover centrato. Asset e presenza CMS rimangono dati del consumer.',
    source: 'Framer · Home Quote / Community Tech Details',
    examples: [
      { name: 'Home Desktop / Tablet · immagine originale 64×64', preview: createElement(CircularImage, { src: 'https://framerusercontent.com/images/DNw1LVgfe6vA5TOajXNwumUqIY.png' }) },
      { name: 'Home Phone · immagine originale 56×56', preview: createElement(CircularImage, { size: 56, src: 'https://framerusercontent.com/images/DNw1LVgfe6vA5TOajXNwumUqIY.png' }) },
    ],
  },
  {
    name: 'Rolling Text',
    description: 'Hover per carattere con copia text-shadow, stagger 60%, tween originale. Font e colori delle sette configurazioni realmente utilizzate; il consumer possiede la scelta responsive.',
    source: 'Framer · Rolling Text / Nav Item / Main form button / Button',
    examples: [
      ...rollingTextConfigurations.map((item, index) => ({ name: `${item.name} · hover / leave`, preview: createElement(RollingText, rollingTextConfiguration(index)) })),
      { name: 'Parametri reali · tag / transform / reverse / testo / reduced motion', preview: createElement(RollingTextControlsExample) },
    ],
  },
  {
    name: 'Process Row',
    description: 'Row/Process Row · contenuti configurabili, offset fornito dal consumer ai tre breakpoint. Titolo per linee onInView, divider80×6, testo opzionale e numero stringa.',
    source: 'Framer · Row/Process Row · una variante / quattro configurazioni Home / Desktop, Tablet, Phone',
    examples: [
      { name: 'Home · Entra / Siediti / Gioca / Resta · offset responsive', preview: createElement(ProcessHomeExample) },
      { name: 'Title / Text / Number / Padding · text assente · replay reveal', preview: createElement(ProcessRowControlsExample) },
    ],
  },
  {
    name: 'Icon Engine',
    description: 'Registry unico: glyph originali, tre frecce Button, quote e spinner distinti. I controlli di stato e gli asset del brand restano separati dalle logiche applicative.',
    source: 'Framer · SVG originali / Logo/SVG ufficiali',
    examples: [
      { name: 'testimonial-arrow · glyph esistente / fill configurabile', preview: createElement(ExistingArrowGlyphFillExample) },
      ...iconNames.map(name => ({ name, preview: createElement('div', { style: { maxWidth: '100%', overflowX: 'auto', backgroundColor: name === 'load-more-spinner' || name.startsWith('brand-') ? `var(${colors.neutral50.cssVariable})` : `var(${colors.neutral950.cssVariable})` } }, createElement(Icon, { name, label: name } as IconProps)) })),
      ...[{ width: 63, height: 52.5 }, { width: 55, height: 52.5 }, { width: 50, height: 45.5 }].map(dimensions => ({ name: `Quote · ${dimensions.width}×${dimensions.height} · istanza originale`, preview: createElement('div', { style: dimensions }, createElement(Icon, { name: 'quote', width: dimensions.width })) })),
      { name: 'Quote · Phone Testimonials · assente', preview: createElement(Icon, { name: 'quote', width: 50, height: 45.5, visible: false }) },
      { name: 'Button Primary · hover 135°', preview: createElement(ButtonArrowVisualExample, { name: 'button-arrow' }) },
      { name: 'Button Secondary · hover 45°', preview: createElement(ButtonArrowVisualExample, { name: 'button-arrow-secondary' }) },
    ],
  },

  {
    name: 'Testimonials Section',
    description: 'Section/Testimonials Section · quattro testimonial configurabili, loop precedente/successivo, griglia Desktop/Tablet e stack Phone. Reveal immagine, titolo per parole e testo con gli effetti originali.',
    source: 'Framer · Section/Testimonials Section · Desktop 1–4 / Mobile 1–4',
    examples: [
      { name: 'Controlli sorgente · quattro testimonial', preview: createElement(TestimonialsSourceExample, { sourceDefaults: true }) },
      { name: 'Home / Esperienza · contenuti reali', preview: createElement(TestimonialsSourceExample) },
      { name: 'Desktop / Tablet / Phone · consumer', preview: createElement(TestimonialsFrameComparison) },
      { name: 'Contenuti dinamici, parent, reduced motion e lifecycle', preview: createElement(TestimonialsControlsExample) },
    ],
  },
  {
    name: 'Testimonials Arrow',
    description: 'Misc/Testimonials Arrow · 40×40px. Default, hover e pressed (opacity 0.8), spring originale. Il callback emette solo Click; nessuna logica carousel.',
    source: 'Framer · Misc/Testimonials Arrow · Material · Icon / Click',
    examples: [
      { name: 'Default originale · Arrow Right Alt · hover / pressed / Click', preview: createElement(TestimonialsArrowInteractionExample, { icon: 'Arrow Right Alt' }) },
      { name: 'Testimonials Section · Arrow Back · hover / pressed / Click', preview: createElement(TestimonialsArrowInteractionExample, { icon: 'Arrow Back' }) },
      { name: 'Testimonials Section · Arrow Forward · hover / pressed / Click', preview: createElement(TestimonialsArrowInteractionExample, { icon: 'Arrow Forward' }) },
    ],
  },
  {
    name: 'FAQ Icon',
    description: 'Misc/FAQ Icon · Plus / Minus. Evento Click, variant controllata dal parent; frame 24px, padding 4px. Il segno cresce verticalmente dal centro, secondo la correzione richiesta dall’utente.',
    source: 'Framer · Misc/FAQ Icon · FAQ Row Opened/Closed',
    examples: [
      { name: 'Plus · FAQ Row Closed', preview: createElement(FaqIcon) },
      { name: 'Minus · FAQ Row Opened', preview: createElement(FaqIcon, { variant: 'Minus' }) },
      { name: 'Prova il segno', preview: createElement(FaqIconInteractionExample) },
    ],
  },
  {
    name: 'Label',
    description: 'Misc/Label · Variant 1. Controlli originali: title e color. Posizionamento delle istanze escluso.',
    source: 'Framer · Misc/Label · Functional/Compact Label',
    examples: [
      {
        name: 'Controlli predefiniti · Intro',
        preview: createElement(Label, { color: `var(${colors.neutral50.cssVariable})` }),
      },
      {
        name: 'Home · LORUNI',
        preview: createElement(Label, { title: 'LORUNI', color: `var(${colors.neutral50.cssVariable})` }),
      },
      {
        name: 'Home · La serata',
        preview: createElement(Label, { title: 'La serata', color: `var(${colors.neutral50.cssVariable})` }),
      },
      {
        name: 'Home · Dentro LORUNI',
        preview: createElement(Label, { title: 'Dentro LORUNI', color: `var(${colors.neutral50.cssVariable})` }),
      },
      {
        name: 'Evento · Partecipazione',
        preview: createElement(Label, { title: 'Partecipazione', color: `var(${colors.neutral50.cssVariable})` }),
      },
      {
        name: 'Evento · Dove',
        preview: createElement(Label, { title: 'Dove', color: `var(${colors.neutral50.cssVariable})` }),
      },
    ],
  },
  {
    name: 'Category Label',
    description: 'Misc/Category Label · Variant 1. Controlli originali: title, background color e text color. Visibilità e trasformazioni CMS appartengono ai consumer.',
    source: 'Framer · Misc/Category Label · Functional/Compact Label',
    examples: [
      {
        name: 'Controlli predefiniti · Label',
        preview: createElement(CategoryLabel),
      },
      {
        name: 'Evento · Serate LORUNI',
        preview: createElement(CategoryLabel, {
          title: 'Serate LORUNI',
          backgroundColor: `var(${colors.neutralBoneHighlight.cssVariable})`,
          textColor: `var(${colors.neutral950.cssVariable})`,
        }),
      },
      {
        name: 'Evento · Giochi da tavolo',
        preview: createElement(CategoryLabel, {
          title: 'Giochi da tavolo',
          backgroundColor: `var(${colors.neutralBoneHighlight.cssVariable})`,
          textColor: `var(${colors.neutral950.cssVariable})`,
        }),
      },
      {
        name: 'Evento · Da annunciare',
        preview: createElement(CategoryLabel, {
          title: 'Da annunciare',
          backgroundColor: `var(${colors.neutralBoneHighlight.cssVariable})`,
          textColor: `var(${colors.neutral950.cssVariable})`,
        }),
      },
    ],
  },
  {
    name: 'arrow_forward',
    description: 'SVG originale Project Card. Dimensioni 40/28px; rotazione −45°/0°; assente nelle due varianti mobile. Fill originale invariato.',
    source: 'Framer · Cards/Project Card · arrow_forward',
    examples: [
      { name: 'Main page Desktop · 40px · −45°', preview: createElement(ArrowForward) },
      { name: 'Inner page Desktop · 28px · −45°', preview: createElement(ArrowForward, { size: 28 }) },
      { name: 'Main page Desktop · Hover · 40px · 0°', preview: createElement(ArrowForward, { rotation: 0 }) },
      { name: 'Inner page Desktop · Hover · 28px · 0°', preview: createElement(ArrowForward, { size: 28, rotation: 0 }) },
      { name: 'Main Mobile · assente', preview: createElement(ArrowForward, { visible: false }) },
      { name: 'Inner page mobile · assente', preview: createElement(ArrowForward, { visible: false }) },
      { name: 'Transizione originale · Main · 40px', preview: createElement(ArrowForwardTransitionExample, { size: 40 }) },
      { name: 'Transizione originale · Inner · 28px', preview: createElement(ArrowForwardTransitionExample, { size: 28 }) },
    ],
  },
]
