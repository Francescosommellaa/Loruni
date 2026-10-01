---
name: Loruni
description: Atmosfera notturna, composizione editoriale ed energia da poster.
colors:
  grafite: "#1A1917"
  avorio: "#F4F0E8"
  corallo: "#FF5538"
  lime: "#C8F24A"
typography:
  display:
    fontFamily: "Funnel Display, sans-serif"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Funnel Sans, sans-serif"
    lineHeight: 1.5
rounded:
  control: "0px"
components:
  button-primary:
    backgroundColor: "{colors.corallo}"
    textColor: "{colors.grafite}"
    rounded: "{rounded.control}"
    padding: "12px 24px"
---

## Overview

Loruni prende forma attraverso socialità, atmosfera notturna, fotografia immersiva e composizione editoriale. La moodboard Figma fornita dall'utente è il riferimento visivo. Palette, Funnel Display per titoli, Funnel Sans per testi e animazioni/switch veloci sono confermati in chat.

L'utente ha autorizzato l'inizializzazione di landing e playground il 2026-10-01. Questo documento registra la base condivisa; non approva automaticamente copy, fotografie, layout o varianti del playground. La prima landing è una composizione tipografica provvisoria, senza fotografie di sede o contenuti operativi inventati.

Movimento breve e reattivo: feedback immediato, interazioni interrompibili, niente code o ritardi artificiali. Valori iniziali implementati: feedback 120 ms, switch 160 ms, riferimento reveal 260 ms. Sono valori provvisori, non risultati di un confronto definitivo. Il playground consente prove da 80 a 300 ms; con reduced motion le transizioni diventano immediate.

## Colors

Grafite e avorio costruiscono la base; corallo concentra l'energia e le azioni principali; lime introduce segnali rari. Il pannello Color indica 70% grafite, 20% avorio, 8% corallo e 2% lime: rapporto di equilibrio complessivo delle superfici grafiche, non un conteggio per viewport.

Usare avorio su grafite e grafite su avorio, corallo o lime. Non usare testo avorio su corallo o lime per normali testi informativi. Contrasti calcolati: grafite/avorio 15.46:1, grafite/corallo 5.53:1, grafite/lime 13.60:1.

Le luci rosse, verdi e le altre tinte delle fotografie appartengono alla scena; non estendono la palette dei controlli. Blu e giallo dei riferimenti grafici dimostrano tecniche compositive.

## Typography

Funnel Display per titoli, Funnel Sans per testi. Font latini variabili locali con licenze OFL in `packages/ui/fonts`, caricati tramite `next/font/local`. Navigazione, etichette e controlli usano Funnel Sans nella base iniziale.

Titoli ampi e compatti, gerarchia forte e interruzioni di riga intenzionali. La base implementata usa dimensioni fluide, mai oltre 6 rem per il display. Frasi e paragrafi in cassa naturale; maiuscolo breve solo quando utile.

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

Il container è un pattern di responsabilità, non l'obbligo di introdurre un componente React. Le sezioni full bleed sono casi espliciti. Una scala unica di spacing e soglie responsive documentate devono guidare l'implementazione definitiva; gli esempi numerici delle regole non stabiliscono valori Loruni.

### Stato dello scaffold

Palette, font e durate CSS sono già condivisi in `packages/ui/src/styles.css` e `packages/ui/src/fonts.ts`. La base usa ancora misure locali per gutter, spacing e dimensioni di composizione; non esiste una scala di spacing centralizzata completa. La landing usa una soglia a 640 px; il playground usa 850 px per il banco e 500 px per la composizione stretta. Queste sono scelte provvisorie osservate, non nuovi breakpoint definitivi approvati.

Il recepimento delle regole è documentale: non attesta una migrazione dei CSS né una nuova review visiva. Prima della prossima modifica UI, allineare i valori e i consumer del perimetro ai contratti, documentando eventuali eccezioni. Il playground può confrontare alternative locali senza promuoverle nel sistema.

### Direzione compositiva

Griglia coerente e composizioni asimmetriche, con allineamenti precisi. Alternare densità, grandi vuoti, fotografie immersive e passaggi informativi semplici. Le sezioni avorio segnano pause nel ritmo scuro. Usare righe, poster, elenchi e immagini ampie secondo il contenuto; evitare una sequenza uniforme di card.

Su mobile ricomporre l'ordine di lettura e i ritagli, conservando gerarchia e carattere. Nessuna informazione essenziale tagliata per l'effetto poster. Testi lunghi su fondo stabile; testo sopra foto solo con contrasto verificato.

La fotografia futura deve alternare persone insieme, ambienti e dettagli di gesti/attività: luce ambientale, materiali scuri e caldi, neri leggibili, accenti rossi/verdi localizzati e pause in bianco e nero. Il movimento sfocato è selettivo. I riferimenti della moodboard non attestano la sede e non sono asset pubblicabili automaticamente.

## Elevation & Depth

La base è piana: campiture, contrasto e bordi sottili organizzano lo spazio. La profondità viene soprattutto dalle immagini e dai rapporti di scala. Evitare glow diffuso, vetro sistematico e gradienti ornamentali.

## Shapes

Geometrie nette, campiture piene e angoli prevalentemente retti. Cerchi e arrotondamenti sono selettivi: il thumb e il track dello switch li richiedono funzionalmente. Bande, forme radiali, cifre grandi e ripetizioni possono sostenere una composizione; non diventano decorazioni obbligatorie.

## Components

`packages/ui` contiene Button principale/secondario, Switch e Arrow, oltre a font, CSS base e loghi. Le prove più ampie appartengono al playground. Gli SVG del marchio sono copie degli originali Loruni: mantenere proporzioni e non aggiungere effetti.

Pulsante principale corallo con testo grafite, secondario delineato e focus percepibile. Switch controllato, accessibile con tastiera e stato espresso da `aria-checked`. Target interattivi almeno 44 px; i pulsanti base sono alti almeno 48 px. Stati disabilitati non rispondono all'input. I cambi non spostano la struttura della pagina.

Tab del playground utilizzabili con frecce, Home ed End. Gli esperimenti mostrano il proprio stato non approvato; nessun cambio locale si propaga alla landing. La promozione richiede una scelta esplicita e prove nel contesto finale.

### Contratti osservati

| Famiglia presente | Possiede | Il contesto possiede |
| --- | --- | --- |
| Button e link con classe `button` | Altezza minima 48 px, padding 12/24 px, gap icona 12 px, bordo/radius, tipografia e stati della variant | Posizione, larghezza nel layout e distanza dagli altri elementi |
| Switch | Target 52 × 44 px, track/thumb, etichetta accessibile, stato controllato e feedback | Posizione e distanza dagli altri controlli; lo stato appartiene al consumer |
| Arrow | SVG 20 × 20 px, tratto e orientamento | Significato dell'azione e spazio intorno all'icona |
| Banco e controlli del playground | `.workspace` possiede colonne/gap, `.controls` e `.controls-group` il flusso dei gruppi | La pagina possiede gutter e composizione complessiva |
| Superfici dimostrative | Padding e contenuto locale; il parent organizza la composizione | Nessuna approvazione implicita come Card o pattern pubblico definitivo |

Non esistono ancora contratti di produzione per Card, Modal o famiglie complete di campi: definirli quando un uso reale lo richiede. Le dimensioni meccaniche dello switch e il marker assoluto del test di movimento sono geometrie locali intenzionali; non sono valori della scala di spacing. La regola globale `prefers-reduced-motion` usa `!important` per rispettare la preferenza accessibile, non per correggere un conflitto di layout.

## Do's and Don'ts

- Conservare palette e gerarchia della coppia Funnel.
- Dare a ogni composizione un gesto dominante e spazio per leggere.
- Conservare contenuti e controlli accessibili senza attendere animazioni.
- Verificare mobile, focus, touch e reduced motion sul risultato reale.
- Non inventare sede, contatti, prezzi, orari, servizi o testimonianze.
- Non assegnare un colore fisso a Events/Community/Drink/Gaming senza scelta esplicita.
- Non copiare integralmente layout, simboli o immagini di altri marchi dalla moodboard.
- Non considerare una prova, un default tecnico o un risultato di build come approvazione di design.
