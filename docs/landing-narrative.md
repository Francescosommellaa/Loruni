# Home — architettura narrativa, Fase 02

Brief richiesto dall'utente il 2026-10-02. Implementazione navigabile dello scheletro, **non approvazione del copy, della composizione o del motion definitivo**. Identità, dati reali e obiettivi restano nel [brief](landing-brief.md).

## Contratto della superficie

Una notte dentro Loruni: Entra → Scopri → Gioca → Connettiti → Vieni. Socialità attraversa i tre modi di vivere il locale; tavolo e digitale sono esperienze distinte. Palette, font e asset ereditati. Primo viewport: watermark che lascia emergere il logo entro 1s, claim di due righe, Napoli e invito a scorrere; nessuna CTA commerciale. Scroll verticale nativo e contenuto server sempre disponibile. Il climax ricompone il racconto, il finale richiama il watermark iniziale e rallenta. Questa build termina con verifica responsive, review dello scheletro e documentazione; la prossima fase è Visual direction + Static composition.

## Percorso e ritmo

Quote minime di viewport (`svh`), **non secondi, pin duration o scroll bloccato**. Il contenuto può allungarle, soprattutto con zoom/font grandi. Sono parametri locali di prova, non token globali o timing approvati.

| Momento | Obiettivo e contenuto provvisorio | Ritmo / quota | Relazione e motion candidate future | CTA / mobile |
| --- | --- | --- | --- | --- |
| Entra | Curiosità: «La notte, insieme.»; brand e Napoli | Tensione, 100svh | Watermark → logo → finestra sull'ambiente; futura maschera/reveal, eventuale breve pin | Nessuna CTA; scroll subito, input interrompe l'emergenza di 1s; reduced motion mostra subito il logo |
| Scopri | Vita condivisa: gesti, gruppi, silhouette; «C’è spazio per la tua serata.» | Rilascio, 90svh | Ambiente apre il percorso; futuro media reveal verso bancone | Introduce Vieni a trovarci; su mobile media precede il testo |
| Cocktail | Bere dentro la serata: «Un drink. Ci sei.» | Tensione, 110svh | Bancone → mani → bicchiere; futura espansione/crop media | Pari spazio agli altri giochi; mobile testo poi media |
| Al tavolo | Gioco opzionale: «Al tavolo, scegli tu se giocare.» | Rilascio, 110svh | Stesso bicchiere → tavolo → mani → carte; stessa campitura continua del cocktail | Nessun catalogo; mobile media poi testo, senza cambio d'ambiente |
| Gaming digitale | «Altra stanza. Stessa serata.»; persone e postazioni nella gaming room | Nuova tensione, 110svh | Unico taglio marcato delle esperienze, ora cambio provvisorio di campitura; futura transizione di ambiente | Verticale anche mobile, niente estetica RGB o interazioni mouse necessarie |
| Espansione | App come estensione, slot per schermate reali; teaser eventi | Pausa breve, minimo 85svh | Narrazione riaperta; futura integrazione di poche schermate, nessun calendario | Scarica l’app secondaria e disabilitata con nota store TBD; mobile stack compatto |
| Connettiti | «Tutto è Loruni.»; convergenza di persone, cocktail, tavolo, digitale e brand | Climax strutturale, 130svh | Un solo media slot unitario, non collage; futuro layering/trasformazioni, accelerazione e possibile pin/velocity | Mobile meno livelli, ordine verticale; nessuna comprensione dipende dal motion |
| Vieni | Vieni a trovarci; anche senza giocare, Napoli, orari indicativi e Instagram | Calma, 100svh | Watermark richiama l'inizio; footer dentro l'ultima scena | Destinazione delle CTA; indirizzo/indicazioni TBD, niente finto link Maps |

Totale minimo nominale: **8,35 viewport**, circa 7.050px a 390×844 prima di eventuali espansioni del contenuto. Cocktail/tavolo/digitale hanno la stessa quota; app/eventi restano compressi. Landmark HTML semantici aiutano accessibilità e navigazione; non prescrivono sezioni visivamente isolate nella composizione definitiva.

## Responsabilità implementate

- `narrative-content.ts`: copy provvisorio, intenzioni media e ID/label usati anche dal menu. Config globale/fatti Loruni restano in `config/site.ts`.
- `page.tsx`: composizione server continua, heading e link reali. Non crea un componente per ogni scena. `MediaPlaceholder` identifica chiaramente gli slot neutri in assenza di fotografie/schermate adeguate.
- `narrative.module.css`: ogni scena possiede durata/ritmo verticale, Container gutter/larghezza, grid/gap le relazioni. Soglia locale 48rem quando due colonne entrano; mobile resta la base.
- `NarrativeControls`: navbar dopo l'apertura, tema sotto la navbar, linea di progressione senza numeri, menu fullscreen nativo `dialog` con focus/ESC e ancore. Altezza navbar misurata anche al reflow, condivisa tra offset delle ancore e detection della scena; inizialmente invisibile/inert, senza occupare il flusso. Un RAF coalesca gli eventi scroll, nessun loop continuo. Cleanup listener/RAF/ResizeObserver, ripristino overflow e variabile locale. Senza JS i link server mantengono il percorso navigabile.
- `ButtonLink`: variante semantica anchor del contratto Button, senza copiare CSS. Nessuna dipendenza aggiunta. GSAP resta isolato, non caricato dalla home: oggi CSS e scroll nativo sono sufficienti.

## Aperto alla prossima fase

Copy finale, media reali/diritti, inquadrature, composizione statica, ruolo preciso delle forme brand e del watermark tra scene, clima fotografico, trattamento del menu. Il taglio chiaro del digitale è una prova di leggibilità del cambio, non un colore assegnato al gaming.

Successivamente, dopo le composizioni: maschere, scrub/pin e relative durate, zoom, transizioni, eventuale unica breve sequenza orizzontale, velocity e cursore desktop solo quando giustificati. Nessuno è implementato o necessario allo scroll attuale. Reference Drinkstill: URL preciso ancora TBD; nessuna analisi di un sito non identificato dichiarata. Store, indirizzo/telefono, giorni/orari ufficiali, app screenshot ed eventi reali restano mancanti.

Lo scheletro rimane noindex nell'ambiente di sviluppo/preview. QA e limiti effettivi sono in [verification.md](verification.md).
