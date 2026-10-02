# Visual direction — Fase 03

Composizione statica richiesta dall'utente il 2026-10-02. Notturno, editoriale, materico, audace, immersivo: il percorso è [la narrativa](landing-narrative.md), il motion definitivo resta alla fase successiva.

## Sistema implementato

- Grafite continua, profondità tonale derivata; una pausa avorio per app/eventi. Nessun nero pieno ricorrente, vetro, shadow UI o card. Corallo concentrato sulle frecce di visita; lime resta disponibile, senza essere distribuito per obbligo.
- Funnel Display piena e compatta; ruolo poster per apertura/socialità/cocktail/convergenza/finale, scene per tavolo/digitale/espansione, Funnel Sans per dettagli leggibili. Ruoli HTML distinti dalla scala. Nessuna serif o tracking esteso. La scala poster supera intenzionalmente il vecchio tetto 6rem del display, come richiesto dal brief.
- Griglia locale adattata al contenuto: una colonna per tavolo/app mobile, sei/dodici quando servono allineamenti e overlap. Container mantiene gutter e massimo. 48rem introduce il tablet composto; 64rem introduce sovrapposizioni editoriali desktop. Dimensioni e crop appartengono alla scena, non a un nuovo registry. Le tracce inutili sul mobile non devono moltiplicare i gap al testo ingrandito.
- Fotografie in cornici nette alternate a full bleed. Crop centrati sui gesti; B/W solo nel dettaglio sociale e teaser eventi. Ombre leggibili e gradienti da grafite localizzati per testo su fotografia, niente glow/neon/filtro estremo o texture artificiale.
- Watermark ufficiale: finestra fotografica astratta nell'apertura, presenza stratificata nella convergenza, eco tenue nel finale. SVG originali invariati; icona ridotta in navbar, logo completo solo nell'apertura.

## Composizioni

| Momento | Composizione statica | Mobile |
| --- | --- | --- |
| Entra | Due righe enormi fuori asse, fotografia sociale parziale, watermark/finestra, Napoli e logo nel registro inferiore | Crop orizzontale più ampio, testo leggibile, dettagli e invito a scorrere in flusso; nessuna eyebrow sopra il claim |
| Socialità | Fotografia immersiva, titolo nella zona scura inferiore, CTA testuale sottolineata con freccia | Edge-to-edge, gesto e persone al centro; CTA ≥48px |
| Cocktail | Close-up sociale al bancone dominante, titolo enorme, cornice B/W secondaria, nota materica | Foto full-width; niente overlay fragile; dettaglio piccolo e nota affiancati |
| Tavolo | Grande tavolo caldo, testo sfalsato e continuità di campitura con cocktail | Foto a tutta larghezza; testo sotto, scelta di giocare esplicita |
| Digitale | Stanza profonda full bleed, persone davanti alle postazioni, testo in area scura | Crop verticale su due persone e controller; una sola superficie |
| App/eventi | Respiro avorio, titolo e app affiancati, spazio onesto per schermate mancanti, teaser fotografico B/W | Sequenza verticale; nessun mockup telefono o finta UI |
| Convergenza | Tre fotografie con gerarchia: socialità dominante, tavolo piccolo, digitale sul finale; type e watermark | Meno overlap, tre scale diverse e lettura verticale, stesso universo |
| Vieni | Headline/link quasi viewport, freccia corallo, informazioni e chiusura integrate | Due righe grandi, link reale e dati leggibili, footer in flusso |

## Funzioni e confini

`ReferencePhoto` locale possiede didascalia/alt dichiarativi; `JourneyLink` e freccia locali possiedono affordance della CTA. ButtonLink dello scaffold sostituito e rimosso: niente override del pulsante condiviso per simulare link editoriali. Navbar e menu nativo mantengono focus/ESC/cleanup; menu tipografico con preview fotografica su hover **e focus**, senza animazione. Il main isola i layer fotografici, navbar e skip link usano livelli semantici propri; dialog resta nel top layer nativo.

Ruoli riusati: `poster` per apertura/socialità/cocktail/climax/finale, `scene` per tavolo/digitale/espansione. Il secondo limita la scala per preservare persone e due righe; niente valori tipografici arbitrari per scena. Le richieste `sizes` considerano anche il crop necessario a `object-fit: cover` nei frame verticali.

L'apertura non attende più il reveal CSS di Fase 02. Tutto è visibile staticamente; niente pin, smooth scroll, GSAP, parallax, cursore o transizioni narrative. La visita finale è un anchor Instagram con nota «scrivici per le indicazioni», fino a disponibilità di indirizzo/Maps. Store disabilitati con nota, ore indicative, nessun dato inventato.

Le quattro fotografie sono [reference sintetiche](reference-media.md), non fotografie della sede. Schermate app, media documentari, copy definitivo, indirizzo/telefono/store/orari ufficiali restano aperti. Prossima fase **Motion System + Scroll Choreography**, non iniziata. Le prove effettive e i limiti sono in [verification.md](verification.md).
