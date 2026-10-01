---
name: Loruni
description: Identità Loruni e fondazioni condivise della Fase 01.
colors:
  grafite: "#1A1917"
  avorio: "#F4F0E8"
  corallo: "#FF5538"
  lime: "#C8F24A"
typography:
  display:
    fontFamily: "Funnel Display, sans-serif"
    fontSize: "clamp(3rem, 8vw, 6rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  heading-1:
    fontFamily: "Funnel Display, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.15
  heading-2:
    fontFamily: "Funnel Display, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.15
  heading-3:
    fontFamily: "Funnel Display, sans-serif"
    fontSize: "clamp(1.25rem, 2vw, 1.5rem)"
    fontWeight: 600
    lineHeight: 1.15
  body-large:
    fontFamily: "Funnel Sans, sans-serif"
    fontSize: "1.125rem"
    lineHeight: 1.5
  body:
    fontFamily: "Funnel Sans, sans-serif"
    fontSize: "1rem"
    lineHeight: 1.5
  small:
    fontFamily: "Funnel Sans, sans-serif"
    fontSize: "0.875rem"
    lineHeight: 1.5
  label:
    fontFamily: "Funnel Sans, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.5
rounded:
  control: "0px"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  2xl: "clamp(2rem, 5vw, 4rem)"
  3xl: "clamp(3rem, 8vw, 6rem)"
components:
  button-primary:
    backgroundColor: "{colors.corallo}"
    textColor: "{colors.grafite}"
    rounded: "{rounded.control}"
    padding: "8px 24px"
  button-secondary:
    rounded: "{rounded.control}"
    padding: "8px 24px"
---

# Design System: Loruni

## Overview

Loruni è sociale, immersivo e contemporaneo. Atmosfera notturna, composizione editoriale ed energia da poster appartengono al contesto della moodboard Figma fornita dall'utente. Palette, Funnel Display per titoli, Funnel Sans per testi e feedback/switch veloci sono confermati; gli asset ufficiali mantengono proporzioni e contenuto originali.

Stato verificato il 2026-10-02: Fase 01 delle fondamenta. La home mostra soltanto logo e «Foundation ready», allineati a sinistra nel container. Il playground verifica tema, controlli e ciclo di vita GSAP. La strategia della futura home continua rimane in `docs/landing-brief.md`: non è un sistema visivo già implementato né un'approvazione di hero, fotografie o sezioni commerciali.

Il frontmatter fotografa i token effettivi, derivati da `packages/ui/src/brand.ts` e `styles.css`; il runtime resta la fonte eseguibile. Spacing, ruoli semantici e metriche sono default tecnici iniziali da validare nella fase narrativa, non una nuova art direction definitiva. La review Fase 01 ha riscontrato coerenza delle fondamenta nelle nove acquisizioni mobile/tablet/desktop, inclusa la prova chiara; non certifica WCAG, deploy o compatibilità fra browser.

**Key Characteristics:**
- Palette e coppia Funnel preservate.
- Fondamenta piane, geometria netta e proprietà del layout esplicite.
- Contenuto leggibile subito, movimento ridotto e controlli nativi.
- Playground interno, senza promozione implicita degli esperimenti.

## Colors

Grafite e avorio costruiscono la base; corallo concentra l'energia e lime introduce segnali rari. Il pannello Color della moodboard indica 70% grafite, 20% avorio, 8% corallo e 2% lime: equilibrio grafico di riferimento, non un conteggio per viewport.

### Primary
- **Corallo:** azione principale e selezione del testo tramite accent/on-accent.

### Secondary
- **Lime:** stato positivo dello switch tramite positive; nessuna associazione fissa a una categoria commerciale.

### Neutral
- **Grafite e avorio:** background/text invertiti nella prova chiara. I layout espongono i quattro valori tramite `brandVariables`; componenti e composizioni consumano i ruoli semantici.
- Background-secondary/surface (4%), surface-elevated (8%), text-secondary (80%), text-muted (65%) e border (50%) mescolano text e background in sRGB; focus usa text. Le percentuali indicano la quota di text. I ruoli si ricalcolano nello scope del tema chiaro, che resta una prova interna.

Usare avorio su grafite e grafite su avorio, corallo o lime. Non usare testo avorio su corallo o lime per normali testi informativi. Contrasti calcolati: grafite/avorio 15.46:1, grafite/corallo 5.53:1, grafite/lime 13.60:1.

Le luci rosse, verdi e le altre tinte delle fotografie appartengono alla scena; non estendono la palette dei controlli. Blu e giallo dei riferimenti grafici dimostrano tecniche compositive.

**The Single Palette Rule.** I quattro hex e i percorsi brand appartengono soltanto a `brand.ts`; il sidecar è derivato. Le rampe del pannello sono metadati di anteprima, non colori aggiuntivi approvati.

## Typography

Funnel Display per display/heading, Funnel Sans per body/UI, con fallback sans-serif. Font latini variabili locali (300–800) con licenze OFL in `packages/ui/fonts`, caricati tramite `next/font/local`.

Gli otto ruoli `data-type` seguono le metriche del frontmatter: display e heading-1/2/3 per gerarchia visiva; body-large/body per lettura; small/label per UI. La gerarchia HTML resta distinta dal ruolo visivo. Home e diagnostica usano heading-3, il titolo del banco heading-2; nessun display editoriale è già stato scelto per la home. I Button ereditano la dimensione body con peso 600. Frasi e paragrafi in cassa naturale; maiuscolo breve solo quando utile.

Lettere tagliate, ripetizioni e deformazioni della moodboard appartengono alla grafica espressiva. Navigazione, titoli informativi e istruzioni rimangono leggibili per intero.

## Layout

### Decisione sistemica del 2026-10-01

L'utente ha confermato le regole di coerenza UI: ogni responsabilità visiva ha un solo proprietario. Le istruzioni operative e i controlli prima/dopo una modifica sono in `AGENTS.md`; questo documento registra il contratto e la base osservata, senza duplicare l'intero regolamento.

| Responsabilità | Proprietario | Confine |
| --- | --- | --- |
| Larghezza massima e gutter | Pattern container della pagina | I contenuti interni non aggiungono un secondo gutter |
| Ritmo tra sezioni/blocchi | Pagina o sezione | I componenti interni non aggiungono distanza esterna equivalente |
| Distanza tra fratelli | Grid, stack o flex parent | I figli non aggiungono margin che duplica il gap |
| Superficie e spazio interno | Componente che possiede la superficie | I wrapper interni non replicano padding, border o radius |
| Metriche del testo | Ruolo tipografico | Il layout non corregge la baseline con offset arbitrari |
| Responsive | Elemento proprietario della struttura | Cambiamenti raggruppati e guidati dal contenuto |
| Movimento | Elemento che cambia stato | Parent e child non sommano la stessa transizione |

**The Single Owner Rule.** Container possiede larghezza, gutter e centratura; Section soltanto il padding verticale; il parent il gap. Nessun controllo aggiunge margin esterni di default. Le sezioni full bleed richiedono un caso esplicito.

### Fondamenta implementate

La scala condivisa comprende i sette passi del frontmatter. Gutter fluido `clamp(1rem, 4vw, 2rem)` e larghezza massima 72rem alimentano Container; Section usa space-2xl verticalmente. Questi default tecnici sono effettivamente consumati da entrambe le app.

Responsive tramite dimensioni fluide e wrapping, senza breakpoint di layout espliciti nella Fase 01. Nel playground il gruppo azioni va a capo; le descrizioni hanno misura massima 65ch e i controlli 30rem, limiti locali del banco. QA corrente: 390×844, 768×1024 e 1440×900; nessun overflow rilevato e font locali caricati. Queste misure di verifica non sono breakpoint.

### Contesto della moodboard

Griglie, asimmetrie, righe, poster e immagini ampie sono riferimenti compositivi, non pattern già promossi nelle fondamenta. Il loro uso nella home sarà deciso nella fase narrativa; i token attuali non prescrivono una successione di sezioni o card.

Su mobile ricomporre l'ordine di lettura e i ritagli, conservando gerarchia e carattere. Nessuna informazione essenziale tagliata per l'effetto poster. Testi lunghi su fondo stabile; testo sopra foto solo con contrasto verificato.

La moodboard fotografica mostra persone insieme, ambienti e dettagli di gesti/attività, luce ambientale, materiali scuri e caldi, neri leggibili, accenti rossi/verdi localizzati e pause in bianco e nero. Il movimento sfocato è selettivo. Sono riferimenti di atmosfera: non attestano la sede né costituiscono asset finali pubblicabili automaticamente.

## Elevation & Depth

La base è piana, senza shadow: campiture, contrasto e bordi sottili organizzano lo spazio. Surface/elevated sono ruoli tonali disponibili, non una famiglia Card già implementata. Immagini e rapporti di scala appartengono al contesto della moodboard. Evitare glow diffuso, vetro sistematico e gradienti ornamentali.

## Shapes

Geometrie nette, campiture piene e controlli ad angoli retti. Track (20px) e thumb circolare dello switch sono geometria meccanica locale preesistente, non token di superficie; l'eccezione detector è limitata a `packages/ui/src/switch.module.css` in `.impeccable/config.json`. Bande, forme radiali, cifre grandi e ripetizioni restano risorse della moodboard, non decorazioni obbligatorie.

## Components

`packages/ui` contiene Button primary/secondary, Switch, Container e Section, oltre a brand, font, CSS base e entrypoint motion separato. Gli SVG del marchio e il raster ufficiale sono copie senza trasformazioni: mantenere proporzioni e non aggiungere effetti.

Pulsante principale corallo con testo grafite, secondario delineato e focus percepibile. Switch controllato, accessibile con tastiera e stato espresso da `aria-checked`. Target interattivi almeno 44 px; i pulsanti base sono alti almeno 48 px. Stati disabilitati non rispondono all'input. I cambi non spostano la struttura della pagina.

Il playground mantiene locale tema, contatore e diagnostica; la promozione richiede una scelta esplicita e prove nel contesto finale. Non contiene tab, selettori di composizione o range di durata.

### Contratti osservati

| Famiglia presente | Possiede | Il contesto possiede |
| --- | --- | --- |
| Button | Altezza minima 48 px, padding sm/lg (8/24 px), gap sm (8 px), radius-control, peso 600 e stati semantici | Posizione, larghezza e distanza dagli altri elementi |
| Switch | Target 52 × 44 px, track/thumb, etichetta, stato controllato e feedback; field possiede gap lg | Posizione esterna e stato nel consumer |
| Container | Larghezza, gutter, centratura | Ritmo verticale e gap interni |
| Section | Padding verticale section-space | Larghezza e gutter tramite Container |
| Banco del playground | Stack/gap, wrapping azioni e limiti di lettura locali | Nessuna approvazione come composizione pubblica |

Primary usa accent/on-accent; hover text/background. Secondary usa bordo semantico su fondo trasparente; hover rafforza il bordo. Active cambia il bordo, senza spostamenti; disabled opacità 0.45 e input disattivato. Focus comune: outline 2px e offset xs. Lo switch ha bordo semantico anche attivo, per distinguere il track lime su avorio (contrasto del bordo verificato 3.24:1).

CSS per feedback (120ms) e switch (160ms), easing condiviso `cubic-bezier(0.16, 1, 0.3, 1)` sul thumb. Sono default tecnici effettivi, non timing narrativi approvati. Reduced motion porta durate e ritardi a 0ms; il solo `!important` globale è l'override accessibile, non una patch di layout.

GSAP/ScrollTrigger passano da `@loruni/ui/motion`: import lazy nel browser, registrazione centralizzata una volta, scope e cleanup. `matchMedia` reagisce alla preferenza e `revert` pulisce il consumer. La diagnostica verifica caricamento/lifecycle senza tween decorativi; la landing non carica il motore. Non esistono Arrow, Tab, Card, Modal o contratti completi per campi.

## Do's and Don'ts

### Do:
- **Do** conservare palette, asset ufficiali e gerarchia della coppia Funnel.
- **Do** assegnare un solo proprietario a gutter, gap, padding, superficie e movimento.
- **Do** conservare contenuti e controlli accessibili senza attendere animazioni.
- **Do** verificare mobile, focus, touch e reduced motion sul risultato reale.

### Don't:
- **Don't** inventare sede, contatti, prezzi, orari, servizi o testimonianze.
- **Don't** assegnare un colore fisso a Events/Community/Drink/Gaming senza scelta esplicita.
- **Don't** copiare integralmente layout, simboli o immagini di altri marchi dalla moodboard.
- **Don't** considerare una prova, un default tecnico o un risultato di build come approvazione di design.
