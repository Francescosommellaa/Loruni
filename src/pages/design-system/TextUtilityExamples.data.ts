import type { TextFitWidthProps } from '../../components/TextFitWidth'
import type { TextStaggerProps } from '../../components/TextStagger'

// Current source copy/font controls. References and bindings are documented outside runtime.
export const textFitCases: readonly { key: string; group: string; breakpoint: string; props: TextFitWidthProps }[] = [
  {
    "key": "home-fit-phone",
    "group": "home-fit",
    "breakpoint": "phone",
    "props": {
      "text": "CI\nVEDIAMO\n  DA\n     LORUNI",
      "font": {
        "fontFamily": "var(--font-funnel-display)",
        "fontWeight": 600,
        "fontStyle": "normal",
        "fontSize": "16px",
        "letterSpacing": "-0.03em",
        "lineHeight": "1em",
        "textAlign": "left"
      },
      "text1": "var(--color-brand-primary)",
      "background": "transparent",
      "align": "left"
    }
  },
  {
    "key": "home-fit-tablet",
    "group": "home-fit",
    "breakpoint": "tablet",
    "props": {
      "text": "CI VEDIAMO\n      DA LORUNI",
      "font": {
        "fontFamily": "var(--font-funnel-display)",
        "fontWeight": 600,
        "fontStyle": "normal",
        "fontSize": "16px",
        "letterSpacing": "-0.07em",
        "lineHeight": "0.9em",
        "textAlign": "left"
      },
      "text1": "var(--color-brand-primary)",
      "background": "transparent",
      "align": "left"
    }
  },
  {
    "key": "home-fit-desktop",
    "group": "home-fit",
    "breakpoint": "desktop",
    "props": {
      "text": "CI VEDIAMO\n      DA LORUNI",
      "font": {
        "fontFamily": "var(--font-funnel-display)",
        "fontWeight": 600,
        "fontStyle": "normal",
        "fontSize": "16px",
        "letterSpacing": "-0.07em",
        "lineHeight": "0.9em",
        "textAlign": "left"
      },
      "text1": "var(--color-brand-primary)",
      "background": "transparent",
      "align": "left"
    }
  },
  {
    "key": "experience-fit-phone",
    "group": "experience-fit",
    "breakpoint": "phone",
    "props": {
      "text": "DENTRO\n       LORUNI",
      "font": {
        "fontFamily": "var(--font-funnel-display)",
        "fontWeight": 600,
        "fontStyle": "normal",
        "fontSize": "16px",
        "letterSpacing": "-0.05em",
        "lineHeight": "0.9em",
        "textAlign": "left"
      },
      "text1": "var(--color-neutral-bone-highlight)",
      "background": "transparent",
      "align": "left"
    }
  },
  {
    "key": "experience-fit-tablet",
    "group": "experience-fit",
    "breakpoint": "tablet",
    "props": {
      "text": "DENTRO\n       LORUNI",
      "font": {
        "fontFamily": "var(--font-funnel-display)",
        "fontWeight": 600,
        "fontStyle": "normal",
        "fontSize": "16px",
        "letterSpacing": "-0.07em",
        "lineHeight": "0.9em",
        "textAlign": "left"
      },
      "text1": "var(--color-neutral-bone-highlight)",
      "background": "transparent",
      "align": "left"
    }
  },
  {
    "key": "experience-fit-desktop",
    "group": "experience-fit",
    "breakpoint": "desktop",
    "props": {
      "text": "DENTRO\n       LORUNI",
      "font": {
        "fontFamily": "var(--font-funnel-display)",
        "fontWeight": 600,
        "fontStyle": "normal",
        "fontSize": "16px",
        "letterSpacing": "-0.07em",
        "lineHeight": "0.9em",
        "textAlign": "left"
      },
      "text1": "var(--color-neutral-bone-highlight)",
      "background": "transparent",
      "align": "left"
    }
  }
]

export const textStaggerCases: readonly { key: string; group: string; breakpoint: string; props: TextStaggerProps }[] = [
  {
    "key": "home-quote-phone",
    "group": "home-quote",
    "breakpoint": "phone",
    "props": {
      "text": "         I terzi luoghi non sono altro che luoghi pubblici informali di incontro.",
      "font": {
        "fontFamily": "var(--font-funnel-sans)",
        "fontWeight": 400,
        "fontStyle": "normal",
        "fontSize": "36px",
        "letterSpacing": "-0.02em",
        "lineHeight": "1.2em",
        "textAlign": "left"
      },
      "delay": 0.1,
      "durPerLine": 0.5,
      "color": "var(--color-neutral-950)",
      "variableWeight": false,
      "halfOpacity": false,
      "trigger": "inView"
    }
  },
  {
    "key": "home-quote-tablet",
    "group": "home-quote",
    "breakpoint": "tablet",
    "props": {
      "text": "      I terzi luoghi non sono altro che luoghi pubblici informali di incontro.",
      "font": {
        "fontFamily": "var(--font-funnel-sans)",
        "fontWeight": 400,
        "fontStyle": "normal",
        "fontSize": "64px",
        "letterSpacing": "-0.04em",
        "lineHeight": "1.15em",
        "textAlign": "left"
      },
      "delay": 0.1,
      "durPerLine": 0.5,
      "color": "var(--color-neutral-950)",
      "variableWeight": false,
      "halfOpacity": false,
      "trigger": "inView"
    }
  },
  {
    "key": "home-quote-desktop",
    "group": "home-quote",
    "breakpoint": "desktop",
    "props": {
      "text": "      I terzi luoghi non sono altro che luoghi pubblici informali di incontro.",
      "font": {
        "fontFamily": "var(--font-funnel-sans)",
        "fontWeight": 400,
        "fontStyle": "normal",
        "fontSize": "80px",
        "letterSpacing": "-0.04em",
        "lineHeight": "1.16em",
        "textAlign": "left"
      },
      "delay": 0.1,
      "durPerLine": 0.5,
      "color": "var(--color-neutral-950)",
      "variableWeight": false,
      "halfOpacity": false,
      "trigger": "inView"
    }
  },
  {
    "key": "home-process-phone",
    "group": "home-process",
    "breakpoint": "phone",
    "props": {
      "text": "               Avevi detto un drink e via. Poi spuntano le carte. Al tavolo accanto manca un giocatore. Ti siedi. Sbagli la prima mano. Guardi l’ora. Non era quella che pensavi.",
      "font": {
        "fontFamily": "var(--font-funnel-sans)",
        "fontWeight": 400,
        "fontStyle": "normal",
        "fontSize": "28px",
        "letterSpacing": "-0.02em",
        "lineHeight": "1.3em",
        "textAlign": "left"
      },
      "delay": 0.1,
      "durPerLine": 0.5,
      "color": "var(--color-neutral-50)",
      "variableWeight": false,
      "halfOpacity": false,
      "trigger": "inView"
    }
  },
  {
    "key": "home-process-tablet",
    "group": "home-process",
    "breakpoint": "tablet",
    "props": {
      "text": "      Avevi detto un drink e via. Poi qualcuno tira fuori le carte. Al tavolo accanto manca un giocatore. Ti siedi, chiedi le regole, sbagli la prima mano. Intanto parte un pezzo che conosci. Guardi l’ora. Non era quella che pensavi.",
      "font": {
        "fontFamily": "var(--font-funnel-sans)",
        "fontWeight": 400,
        "fontStyle": "normal",
        "fontSize": "48px",
        "letterSpacing": "-0.04em",
        "lineHeight": "1.15em",
        "textAlign": "left"
      },
      "delay": 0.1,
      "durPerLine": 0.5,
      "color": "var(--color-neutral-50)",
      "variableWeight": false,
      "halfOpacity": false,
      "trigger": "inView"
    }
  },
  {
    "key": "home-process-desktop",
    "group": "home-process",
    "breakpoint": "desktop",
    "props": {
      "text": "      Avevi detto un drink e via. Poi qualcuno tira fuori le carte. Al tavolo accanto manca un giocatore. Ti siedi, chiedi le regole, sbagli la prima mano. Intanto parte un pezzo che conosci. Guardi l’ora. Non era quella che pensavi.",
      "font": {
        "fontFamily": "var(--font-funnel-sans)",
        "fontWeight": 400,
        "fontStyle": "normal",
        "fontSize": "56px",
        "letterSpacing": "-0.04em",
        "lineHeight": "1.2em",
        "textAlign": "left"
      },
      "delay": 0.1,
      "durPerLine": 0.5,
      "color": "var(--color-neutral-50)",
      "variableWeight": false,
      "halfOpacity": false,
      "trigger": "inView"
    }
  },
  {
    "key": "experience-intro-phone",
    "group": "experience-intro",
    "breakpoint": "phone",
    "props": {
      "text": "            Le carte girano, le sedie si spostano. C’è chi vuole la rivincita e chi parla con il controller in mano. Al bancone il discorso continua. Un’altra, poi vediamo.",
      "font": {
        "fontFamily": "var(--font-funnel-sans)",
        "fontWeight": 400,
        "fontStyle": "normal",
        "fontSize": "36px",
        "letterSpacing": "-0.02em",
        "lineHeight": "1.2em",
        "textAlign": "left"
      },
      "delay": 0.1,
      "durPerLine": 0.5,
      "color": "var(--color-neutral-50)",
      "variableWeight": false,
      "halfOpacity": false,
      "trigger": "inView"
    }
  },
  {
    "key": "experience-intro-tablet",
    "group": "experience-intro",
    "breakpoint": "tablet",
    "props": {
      "text": "          Qualcuno arriva dopo cena. Qualcuno passa per un drink e si ferma a guardare una partita. Le carte girano, le sedie si spostano. C’è chi vuole la rivincita e chi parla da mezz’ora con il controller in mano. Al bancone il discorso continua. Non serve un programma per tutta la sera.",
      "font": {
        "fontFamily": "var(--font-funnel-sans)",
        "fontWeight": 400,
        "fontStyle": "normal",
        "fontSize": "64px",
        "letterSpacing": "-0.04em",
        "lineHeight": "1.15em",
        "textAlign": "left"
      },
      "delay": 0.1,
      "durPerLine": 0.5,
      "color": "var(--color-neutral-50)",
      "variableWeight": false,
      "halfOpacity": false,
      "trigger": "inView"
    }
  },
  {
    "key": "experience-intro-desktop",
    "group": "experience-intro",
    "breakpoint": "desktop",
    "props": {
      "text": "      Qualcuno arriva dopo cena. Qualcuno passa per un drink e si ferma a guardare una partita. Le carte girano, le sedie si spostano. C’è chi vuole la rivincita e chi parla da mezz’ora con il controller in mano. Al bancone il discorso continua. Non serve un programma per tutta la sera.",
      "font": {
        "fontFamily": "var(--font-funnel-sans)",
        "fontWeight": 400,
        "fontStyle": "normal",
        "fontSize": "80px",
        "letterSpacing": "-0.04em",
        "lineHeight": "1.16em",
        "textAlign": "left"
      },
      "delay": 0.1,
      "durPerLine": 0.5,
      "color": "var(--color-neutral-50)",
      "variableWeight": false,
      "halfOpacity": false,
      "trigger": "inView"
    }
  },
  {
    "key": "event-intro-phone",
    "group": "event-intro",
    "breakpoint": "phone",
    "props": {
      "text": "      Un tabellone al centro, le regole sul tavolo. C’è chi le legge fino in fondo e chi vuole cominciare subito. Board Game Night è una proposta di serata, non un appuntamento confermato. Data, ora e accesso sono ancora da annunciare.",
      "font": {
        "fontFamily": "var(--font-funnel-sans)",
        "fontWeight": 400,
        "fontStyle": "normal",
        "fontSize": "28px",
        "letterSpacing": "-0.02em",
        "lineHeight": "1.3em",
        "textAlign": "left"
      },
      "delay": 0.1,
      "durPerLine": 0.7,
      "color": "var(--color-neutral-50)",
      "variableWeight": false,
      "halfOpacity": false,
      "trigger": "inView"
    }
  },
  {
    "key": "event-intro-tablet",
    "group": "event-intro",
    "breakpoint": "tablet",
    "props": {
      "text": "      Un tabellone al centro, le regole sul tavolo. C’è chi le legge fino in fondo e chi vuole cominciare subito. Board Game Night è una proposta di serata, non un appuntamento confermato. Data, ora e accesso sono ancora da annunciare.",
      "font": {
        "fontFamily": "var(--font-funnel-sans)",
        "fontWeight": 400,
        "fontStyle": "normal",
        "fontSize": "48px",
        "letterSpacing": "-0.04em",
        "lineHeight": "1.15em",
        "textAlign": "left"
      },
      "delay": 0.1,
      "durPerLine": 0.7,
      "color": "var(--color-neutral-50)",
      "variableWeight": false,
      "halfOpacity": false,
      "trigger": "inView"
    }
  },
  {
    "key": "event-intro-desktop",
    "group": "event-intro",
    "breakpoint": "desktop",
    "props": {
      "text": "      Un tabellone al centro, le regole sul tavolo. C’è chi le legge fino in fondo e chi vuole cominciare subito. Board Game Night è una proposta di serata, non un appuntamento confermato. Data, ora e accesso sono ancora da annunciare.",
      "font": {
        "fontFamily": "var(--font-funnel-sans)",
        "fontWeight": 400,
        "fontStyle": "normal",
        "fontSize": "56px",
        "letterSpacing": "-0.04em",
        "lineHeight": "1.2em",
        "textAlign": "left"
      },
      "delay": 0.1,
      "durPerLine": 0.7,
      "color": "var(--color-neutral-50)",
      "variableWeight": false,
      "halfOpacity": false,
      "trigger": "inView"
    }
  },
  {
    "key": "story-quote-mobile",
    "group": "story-quote",
    "breakpoint": "mobile",
    "props": {
      "text": "      Giocare è il tentativo volontario di superare ostacoli non necessari. — Bernard Suits · Traduzione italiana",
      "font": {
        "fontFamily": "var(--font-funnel-sans)",
        "fontWeight": 400,
        "fontStyle": "normal",
        "fontSize": "36px",
        "letterSpacing": "-0.04em",
        "lineHeight": "1.2em",
        "textAlign": "center"
      },
      "delay": 0.1,
      "durPerLine": 0.7,
      "color": "var(--color-neutral-50)",
      "variableWeight": false,
      "halfOpacity": false,
      "trigger": "inView"
    }
  },
  {
    "key": "story-quote-desktop",
    "group": "story-quote",
    "breakpoint": "desktop",
    "props": {
      "text": "      Giocare è il tentativo volontario di superare ostacoli non necessari. — Bernard Suits · Traduzione italiana",
      "font": {
        "fontFamily": "var(--font-funnel-sans)",
        "fontWeight": 400,
        "fontStyle": "normal",
        "fontSize": "36px",
        "letterSpacing": "-0.04em",
        "lineHeight": "1.2em",
        "textAlign": "center"
      },
      "delay": 0.1,
      "durPerLine": 0.7,
      "color": "var(--color-neutral-50)",
      "variableWeight": false,
      "halfOpacity": false,
      "trigger": "inView"
    }
  },
  {
    "key": "story-canvas-canvas",
    "group": "story-canvas",
    "breakpoint": "canvas",
    "props": {
      "text": "      Giocare è il tentativo volontario di superare ostacoli non necessari. — Bernard Suits · Traduzione italiana",
      "font": {
        "fontFamily": "var(--font-funnel-sans)",
        "fontWeight": 400,
        "fontStyle": "normal",
        "fontSize": "64px",
        "letterSpacing": "-0.04em",
        "lineHeight": "1.16em",
        "textAlign": "center"
      },
      "delay": 0.1,
      "durPerLine": 0.7,
      "color": "var(--color-neutral-50)",
      "variableWeight": false,
      "halfOpacity": false,
      "trigger": "inView"
    }
  }
]

export const eventTexts = [
  {
    "name": "Board Game Night",
    "slug": "board-game-night",
    "text": "      Un tabellone al centro, le regole sul tavolo. C’è chi le legge fino in fondo e chi vuole cominciare subito. Board Game Night è una proposta di serata, non un appuntamento confermato. Data, ora e accesso sono ancora da annunciare."
  },
  {
    "name": "Musica al bar",
    "slug": "musica-al-bar",
    "text": "      Parte un pezzo. Qualcuno lo riconosce, al bancone si continua a parlare. Musica al bar è una proposta per le serate LORUNI, non una data già in calendario. Programma musicale, ora e condizioni di accesso sono ancora da confermare."
  },
  {
    "name": "Community Night",
    "slug": "community-night",
    "text": "      Porti due amici. Qualcuno guarda il vostro tavolo e chiede se può sedersi. Community Night parte da qui: stare al bar senza avere già deciso tutta la sera. È una proposta di format. Data, ora e accesso sono ancora da confermare."
  },
  {
    "name": "Carte al tavolo",
    "slug": "carte-al-tavolo",
    "text": "      C’è chi mescola e chi tiene il conto. Chi perde per colpa delle carte, almeno a sentir lui. Carte al tavolo è una proposta di serata LORUNI. Gioco, data, ora ed eventuale iscrizione saranno annunciati quando confermati."
  },
  {
    "name": "Digital Challenge",
    "slug": "digital-challenge",
    "text": "      Due controller, chi gioca e chi commenta ogni mossa. Digital Challenge è una proposta di sfida al bar, non un torneo già annunciato. Titolo, regolamento, data e accesso sono da confermare. Nessun premio è ancora previsto ufficialmente."
  }
] as const
