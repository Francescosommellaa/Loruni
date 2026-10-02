# Home — architettura narrativa

Percorso Fase 02 richiesto dall'utente il 2026-10-02, portato alla composizione statica in Fase 03. Non costituisce approvazione finale di copy/media/motion. Identità e fatti nel [brief](landing-brief.md); aspetto implementato in [visual-direction.md](visual-direction.md).

## Contratto della superficie

Una notte dentro Loruni: Entra → Scopri → Gioca → Connettiti → Vieni. Socialità attraversa cocktail, tavolo e stanza digitale distinta. Apertura astratta con fotografia parziale, claim di due righe, Napoli e invito a scorrere; CTA primaria introdotta nel rilascio sociale. Climax ricompone gli stessi ambienti, finale rallenta e richiama il watermark iniziale. Contenuto server disponibile, scroll verticale nativo, nessuna attesa o pin necessario alla comprensione.

## Percorso e ritmo

Quote svh sono minimi di composizione, non secondi/pin duration. Il contenuto può allungarle, soprattutto al reflow. Parametri locali, non token globali o timing approvati.

| Momento | Obiettivo / copy provvisorio | Ritmo / quota | Relazione e motion candidate future | CTA / mobile |
| --- | --- | --- | --- | --- |
| Entra | Curiosità: «La notte, insieme.» | Tensione, 100svh | Fotografia parziale + watermark/finestra; futuro reveal, possibile breve pin | Nessuna CTA; scroll immediato, brand già leggibile staticamente |
| Scopri | Vita condivisa: «C’è posto per te.» | Rilascio, 95svh | Primo media sociale immersivo; futuro passaggio al bancone | Vieni a trovarci → finale; full bleed anche mobile |
| Cocktail | «Un drink. Ci sei.» | Tensione, 110svh minimo | Bancone, mani, ghiaccio, conversazione; futura espansione/crop | Mobile type poi fotografia e piccolo dettaglio |
| Al tavolo | «Al tavolo, scegli tu.»; gioco opzionale esplicito | Rilascio, 110svh | Stessa luce/materiali/campitura del cocktail, bicchiere → carte | Mobile fotografia poi testo, niente catalogo |
| Gaming digitale | «Altra stanza. Stessa serata.» | Nuova tensione, 110svh | Taglio d'ambiente scuro, persone davanti alle postazioni | Verticale mobile, niente interazione mouse necessaria |
| Espansione | «La notte va oltre.»; app e breve teaser eventi | Pausa chiara, altezza da contenuto | Schermate reali ancora mancanti, futuro montaggio UI/media | CTA app disabilitata e spiegata; mobile stack compatto |
| Connettiti | «Tutto è Loruni.» | Climax, 125svh minimo | Socialità dominante con tavolo/digitale convergenti; futuro layering/velocity/pin | Mobile tre scale ordinate, meno sovrapposizioni |
| Vieni | Vieni a trovarci, anche senza giocare | Calma, 100svh minimo | Eco del watermark, informazioni e footer nella scena | Link Instagram con destinazione spiegata; niente Maps inventato |

Cocktail/tavolo/digitale hanno pari quota minima. Le altezze effettive dipendono da composizione, viewport e contenuti; misure e screenshot in [verification.md](verification.md). Landmark HTML servono semantica/navigazione e non impongono blocchi visivi isolati.

## Responsabilità

narrative-content.ts: copy e ID/label condivisi col menu. reference-media.ts: percorsi/alt; ReferencePhoto: figura e dichiarazione sintetica; JourneyLink: CTA editoriale locale. page.tsx compone le scene server, senza componenti per ogni momento. narrative.module.css possiede ritmo, grid, crop e sovrapposizioni; Container possiede gutter/larghezza.

NarrativeControls: navbar dopo l'apertura, tema sottostante, progressione discreta, dialog nativo con ESC/focus/ancore e preview fotografica su hover/focus. Altezza navbar misurata per offset e detection anche al reflow. Un RAF coalesca scroll, nessun loop continuo; cleanup listener/observer/RAF e overflow. Senza JS tutti i contenuti/link server restano navigabili.

## Prossima fase

Motion System + Scroll Choreography: maschere/reveal, timing/easing, scrub/pin brevi e motivati, transizioni, eventuale scroll controllato/velocity/cursor. Nessuno è implementato in Fase 03. La composizione statica precede la coreografia; mobile e reduced motion mantengono tutto il racconto. App/media reali, copy definitivo e dati operativi mancanti restano decisioni distinte.
