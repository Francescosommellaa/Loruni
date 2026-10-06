import { createElement, useState, type ReactNode } from 'react'
import { Icon, type IconProps } from '../../components/Icon'
import { iconNames } from '../../components/Icon.registry'
import { Divider } from '../../components/Divider'
import { CircularImage } from '../../components/CircularImage'
import { RollingText } from '../../components/RollingText'
import { ArrowForward } from '../../components/ArrowForward'
import { CategoryLabel } from '../../components/CategoryLabel'
import { Label } from '../../components/Label'
import { FaqIcon } from '../../components/FaqIcon'
import { TestimonialsArrow, type TestimonialsArrowProps } from '../../components/TestimonialsArrow'
import { TestimonialsSection } from '../../components/TestimonialsSection'
import { defaultTestimonials, type Testimonials } from '../../components/TestimonialsSection.data'
import { colors, primitive, motion as motionTokens } from '../../styles/token'
import { ProcessHomeExample, ProcessRowControlsExample } from './ProcessRowExamples'
import { OurStoryControlsExample, OurStoryDefaultExample, OurStoryRealCardsExample } from './OurStoryCardExamples'
import { CommunityCardControlsExample, CommunityCardDefaultExample, CommunityCardRealExamples } from './CommunityCardExamples'

export type ComponentExample = {
  name: string
  description: string
  source: string
  examples: readonly { name: string; preview: ReactNode }[]
}

// Catalog-only control: the real card supplies rotation through its hover state.
function ArrowForwardTransitionExample({ size }: { size: 28 | 40 }) {
  const [hoverState, setHoverState] = useState(false)
  return createElement('div', null,
    createElement(ArrowForward, { size, rotation: hoverState ? 0 : -45 }),
    createElement('button', {
      type: 'button',
      'aria-pressed': hoverState,
      onClick: () => setHoverState(value => !value),
    }, hoverState ? `Ripristina −45° · ${size}px` : `Riproduci hover 0° · ${size}px`))
}

function ButtonArrowVisualExample({ name }: { name: 'button-arrow' | 'button-arrow-secondary' }) {
  const [hovered, setHovered] = useState(false)
  return createElement('div', null,
    createElement(Icon, { name, hovered }),
    createElement('button', { type: 'button', 'aria-pressed': hovered, onClick: () => setHovered(value => !value) },
      hovered ? `Ripristina ${name}` : `Riproduci hover ${name}`))
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

function attributedTestimonials(): Testimonials {
  const names = ['Ray Oldenburg', 'Bernard Suits', 'Sid Meier', 'Ray Oldenburg & Karen Christensen'] as const
  const jobTitles = ['Sociologo · Traduzione italiana', 'Filosofo · Traduzione italiana', 'Game designer · Traduzione italiana', 'Traduzione italiana'] as const
  const item = (index: 0 | 1 | 2 | 3) => ({ ...defaultTestimonials[index], name: names[index], jobTitle: jobTitles[index] })
  return [item(0), item(1), item(2), item(3)]
}

export const componentExamples: readonly ComponentExample[] = [
  {
    name: 'Community Card',
    description: 'Fotografia e momento Community. Un’unica card fluida, titolo H2/H3 e zoom hover originale; griglia, link e selezione CMS appartengono al parent.',
    source: 'Community Card · legacy Cards/Blog Card',
    examples: [
      { name: 'Community · H2 · quattro momenti reali', preview: createElement(CommunityCardRealExamples, { h3: false }) },
      { name: 'Esperienza / Vieni a trovarci / altri momenti · H3', preview: createElement(CommunityCardRealExamples, { h3: true }) },
      { name: 'Contenuti configurabili e semantica', preview: createElement(CommunityCardControlsExample) },
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
      ...([
        { name: 'Nav Item Desktop', text: 'NAV ITEM', size: 22, weight: 400, line: '1em', color: colors.neutral50 },
        { name: 'Nav Item Mobile', text: 'NAV ITEM', size: 28, weight: 400, line: '1em', color: colors.neutral50 },
        { name: 'Nav Item Compact', text: 'NAV ITEM', size: 16, weight: 400, line: '1em', color: colors.neutral50 },
        { name: 'Main form button', text: 'INVIA MESSAGGIO', size: 20, weight: 400, line: '1em', color: colors.neutral50 },
        { name: 'Button Primary', text: 'VEDI LE SERATE', size: 48, weight: 600, line: '1.1em', color: colors.brandPrimary },
        { name: 'Button Secondary', text: 'VEDI LE SERATE', size: 16, weight: 600, line: '1.1em', color: colors.neutral50 },
        { name: 'Button Primary Mobile', text: 'VEDI LE SERATE', size: 28, weight: 600, line: '1.1em', color: colors.brandPrimary },
      ] as const).map(item => ({ name: `${item.name} · hover / leave`, preview: createElement(RollingText, {
        text: item.text, color: `var(${item.color.cssVariable})`, stagger: 60,
        font: { fontFamily: 'var(--font-funnel-sans)', fontSize: primitive.fontSize[`value${item.size}px`].value, fontWeight: item.weight, lineHeight: item.line, letterSpacing: primitive.letterSpacing.valueNegative0Point04em.value },
        transition: { type: 'tween', duration: parseFloat(motionTokens.transitions.buttonPrimaryTransition.config.duration), ease: [...motionTokens.transitions.buttonPrimaryTransition.config.ease] },
      }) })),
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
      ...iconNames.map(name => ({ name, preview: createElement('div', { style: { maxWidth: '100%', overflowX: 'auto', backgroundColor: name === 'faq' || name === 'load-more-spinner' || name.startsWith('brand-') ? `var(${colors.neutral50.cssVariable})` : `var(${colors.neutral950.cssVariable})` } }, createElement(Icon, { name, label: name } as IconProps)) })),
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
      { name: 'Controlli predefiniti · tutti i quattro testimonial', preview: createElement('div', { style: { maxWidth: '100%', overflowX: 'auto', backgroundColor: `var(${colors.neutral50.cssVariable})` } }, createElement(TestimonialsSection)) },
      { name: 'Home / Esperienza · override dei contenuti · larghezza del parent', preview: createElement('div', { style: { backgroundColor: `var(${colors.neutral50.cssVariable})` } }, createElement(TestimonialsSection, {
        style: { width: '100%' },
        testimonials: attributedTestimonials(),
      })) },
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
    description: 'Misc/FAQ Icon · Plus / Minus. Evento Click, variant controllata dal parent; frame 24px, padding 4px. Nel ritorno da Minus a Plus la sorgente conserva la rotazione della barra.',
    source: 'Framer · Misc/FAQ Icon · FAQ Row Opened/Closed',
    examples: [
      { name: 'Plus · FAQ Row Closed', preview: createElement('div', { style: { backgroundColor: `var(${colors.neutral50.cssVariable})` } }, createElement(FaqIcon)) },
      { name: 'Minus · FAQ Row Opened', preview: createElement('div', { style: { backgroundColor: `var(${colors.neutral50.cssVariable})` } }, createElement(FaqIcon, { variant: 'Minus' })) },
      { name: 'Click / tap · transizione originale', preview: createElement('div', { style: { backgroundColor: `var(${colors.neutral50.cssVariable})`, color: `var(${colors.neutral950.cssVariable})` } }, createElement(FaqIconInteractionExample)) },
    ],
  },
  {
    name: 'Label',
    description: 'Misc/Label · Variant 1. Controlli originali: title e color. Posizionamento delle istanze escluso.',
    source: 'Framer · Misc/Label · Functional/Compact Label',
    examples: [
      {
        name: 'Controlli predefiniti · Intro',
        preview: createElement(Label),
      },
      {
        name: 'Home · LORUNI',
        preview: createElement('div', { style: { backgroundColor: `var(${colors.neutral50.cssVariable})` } },
          createElement(Label, { title: 'LORUNI', color: `var(${colors.neutral950.cssVariable})` })),
      },
      {
        name: 'Home · La serata',
        preview: createElement(Label, { title: 'La serata', color: `var(${colors.neutral50.cssVariable})` }),
      },
      {
        name: 'Home · Dentro LORUNI',
        preview: createElement('div', { style: { backgroundColor: `var(${colors.neutral50.cssVariable})` } },
          createElement(Label, { title: 'Dentro LORUNI', color: `var(${colors.neutral950.cssVariable})` })),
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
