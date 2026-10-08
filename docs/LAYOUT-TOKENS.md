# Geometria dalla fonte Framer

2026-10-06. Estrazione read-only autorizzata di padding, gap, raggi, bordi, ombre e contratti responsive. [geometry-source.json](framer/geometry-source.json) conserva attributi espliciti, scope, antenati, originalId delle repliche e variabili geometriche; [geometry-audit.json](framer/geometry-audit.json) rende consultabile ogni occorrenza. Gli snapshot non entrano nel browser.

## Copertura e criterio

Audit aggiornato 2026-10-06: 8 pagine, 1 template e 22 componenti completi, più acquisizioni parziali di Testimonials Arrow e Logo tramite serializzazione dei figli/API generica. Gli interni delle icone restano non acquisiti. Vedi TOKEN-AUDIT.md e design-source.json; non confondere il recupero della geometria con una lettura completa.

La scala comprende valori espliciti di padding/gap presenti su almeno due nodi sorgente indipendenti. Le repliche sono ricondotte a originalId prima del conteggio. È una derivazione dai consumer reali, non una raccolta di stili globali nominati da Framer. Valori conservati senza arrotondamento o normalizzazione a una scala standard.

25 spaziature in px: 0, 2, 4, 8, 10, 12, 16, 20, 24, 32, 36, 40, 52, 56, 60, 64, 80, 92, 96, 100, 120, 140, 160, 200, 320. Nomi come `spacing.space24` / `--space-24` descrivono il valore. Il numero dei nodi prova la ricorrenza, non la visibilità o l'applicabilità universale.

Nessuna proprietà margin esplicita rilevata. La scala si può usare anche per margin CSS, senza attribuire margini inventati alla fonte. Coordinate e controlli di offset non diventano padding/margin automaticamente. Valori isolati, incluso padding 48px dell'header e gap narrativi 1129/1486px, restano locali nell'audit.

## Contratti e forme

| Token | Fonte / comportamento |
| --- | --- |
| pageGutter | Quote della Home: 12px phone, 40px tablet, 80px desktop |
| sectionBlock | Process della Home: 100px phone, 200px tablet/desktop |
| contentMeasure | maxWidth 640px su 6 nodi indipendenti |
| inset-page-inline | 0px + gutter orizzontale di Quote |
| inset-section | padding verticale Process + gutter orizzontale |
| gap rows/columns | griglie effettive 0/8, 8/8 e 60/8px |
| radius-none / subtle / avatar | 0px, 1px, 56px; 56px osservato su immagini, non universale per card |
| border-width-hairline | 1px |
| border-separator | 1px solid Neutral600 dai bordi top/bottom |
| border-form-input | 1px solid Neutral950 dai campi Framer |
| shadow-form-focus | 2px 2px 0px 0px Neutral950, dai campi su fondo chiaro |

Soglie 0/810/1200px. Variabili responsive disponibili in :root, senza imporre padding/max-width/raggi ai consumer. Header, Hero e altri override restano locali. L'ombra del campo non sostituisce il focus accessibile globale.

## Generazione e uso

`scripts/framer/capture-geometry.js` si esegue nella VM della sessione Framer verificata secondo la skill, non con Node locale. Solo letture di attributi/variabili geometrici, senza CMS, codice o contenuti. Salvare il JSON restituito come geometry-source.json dopo verifica di identità e copertura.

`pnpm tokens:generate` legge anche geometry-source.json. `scripts/framer/geometry.mjs` risolve variabili/colori, deduplica repliche e produce la geometria dentro token.ts/token.css e il relativo audit. geometry.ts/geometry.css sono wrapper di compatibilità. Rifiuta dipendenze mancanti e contratti responsive non risolti. Export anche da tokens.ts; ID nei soli riferimenti di sviluppo.

```css
.consumer {
  padding: var(--space-24);
  gap: var(--space-16);
  margin-block-end: var(--space-24);
}
.process-section { padding: var(--inset-section); }
```

Applicare le ricette dopo confronto con il consumer Framer. Il [catalogo](DESIGN-SYSTEM.md) mostra automaticamente i gruppi geometrici correnti. [Prove finali](FOUNDATION-VERIFICATION.md).
