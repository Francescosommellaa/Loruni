# Audit token canonici — 2026-10-06

Fonte unica dei valori: progetto Loruni Framer, letto senza modifiche nella sessione 2 di questa chat. Acquisizione 2026-10-05T23:59:43.645Z (6 ottobre Europe/Rome), letture sequenziali. Eccezione confermata dall’utente in questa task: conservare soltanto Funnel Display, Funnel Sans e IBM Plex Sans e la correzione già registrata in token-policy.json. Nessuna nuova scelta di palette, scala, breakpoint o tema.

## File e uso

`src/styles/token.ts` e `token.css` sono i file canonici generati. `tokens.ts/css` e `geometry.ts/css` rimangono wrapper di compatibilità. base.css e i consumer correnti usano il canonico. Gli snapshot con gli ID Framer restano fuori dal browser.

```tsx
import { tokens, typography, component, motion } from './styles/token'

const heading = typography.headline108.className
const arrowWidth = component.button.primary.arrowWidth.value
const spring = motion.transitions.homeDesktopTransition.config
// I dati di transizione conservano le unità della fonte: duration/delay possono essere stringhe in s.
```

```css
.button-arrow { width: var(--component-button-primary-arrow-width); }
```

`tokens` separa primitive, semantic, component, controlDefaults e motion. I ruoli semantici preservano i nomi Framer e i contratti geometrici provati. Le proprietà non interpretabili usano nomi della proprietà/valore o rimangono nell’audit. Nessun sistema light/dark aggiunto: tutti i colori nominati hanno dark null. Le varianti di componente su fondi diversi restano varianti, senza essere reinterpretate come temi.

## Copertura e tracciabilità

Audit di tutte le 8 pagine, del template, di 24 componenti locali, dei controlli dei 9 esterni e dei 2 file TSX. Include preset, variabili, repliche, hover/varianti, font inline, gradienti/maschere, opacità, dimensioni/vincoli, bordi, shadow, z-index, tween, spring fisiche e spring a durata, delay/stagger/loop e trasformazioni. Le proprietà di layout/posizionamento e i rettangoli misurati non diventano automaticamente token.

- `docs/framer/design-source.json`: attributi originali, antenati, gesto hover, controlli/default e letterali di codice con file/riga/ramo condizionale. Nessuna copia integrale dei due file di codice.
- `design-audit.json`: valore esatto, unità nel valore originale, proprietà, contesto, conteggio delle occorrenze, nodi indipendenti dopo deduplica, mapping ai token e classificazione A/B/C. Per i dati recuperati dall’API generica la deduplica non è attestata; canonicalId null.
- `token-source.json`: 31 stili nominati verificati live, preservati incluse le metriche responsive serializzate. `token-policy.json`: sola eccezione font autorizzata.
- `geometry-source.json` / `geometry-audit.json`: contratti e 25 spaziature condivise da almeno due nodi indipendenti; valori isolati mantenuti nelle ricette locali.
- `hardcoded-audit.json`: scansione dei file CSS/TS/TSX/JS/JSX authored in src, con file/riga e motivazione. Reset/accessibilità, documentazione e dimensioni relative/calcolate restano locali. Le sostituzioni eseguite riguardano valori px di spazio identici e max-width640px del campione. Nessuna conversione rem/em o modifica del layout.
- `external-audit.json`: lettura diretta di tutti i 9 riferimenti esterni con serialize(depth30); restituisce soltanto ExternalModuleNode identificativi, senza attributi o albero interno. La disponibilità dei controlli non è una lettura del codice interno.

Primitive deduplicate per proprietà e rappresentazione esatta. Colori nominati equivalenti mantengono il nome con alias; componenti, raggi/shadow e spacing riusano i riferimenti TS/CSS. Formati diversi, come HEX nei default di codice e RGB nella palette, restano distinti per preservare il formato. I font inline e i default non creano nuove enfasi globali.

I component token includono le radici di variante e le parti immediate nominate dalla fonte, ad esempio Rolling Text e Arrow di Button, senza attribuire nomi a nodi anonimi. Geometria più profonda, algoritmi di fitting e binding ai contenuti restano nel loro contesto. I default dei controlli sono dichiarazioni della definizione, non una prova del valore attivo in ogni istanza.

## Verifica

`pnpm tokens:generate` deriva TS e CSS dallo stesso grafo. `pnpm tokens:check` confronta tutti gli output con la derivazione corrente e rifiuta dipendenze CSS mancanti, collisioni e residui di binding/artefatti. Lint, typecheck e build eseguiti; i cinque test inventory preesistenti passano. Nessuna nuova suite.

Browser prima/dopo a390/809/810/1199/1200/1440px: medesimi stili computati e dimensioni per 11 preset, 19 swatch, preview layout e campione nativo; nessun overflow finale. L’overflow introdotto dai nomi lunghi del catalogo è stato corretto con wrapping. Controllati dettagli spring500/60/1, varianti Primary/Primary Hover di Button e console senza warning/error. Catalogo ampliato con dati reali; i componenti React del prodotto non sono ancora portati.

## Limiti che impediscono una certificazione assoluta

La serializzazione completa di Testimonials Arrow e Logo fallisce ancora con `Could not resolve the icon set for variable "Icon"` / `"Upload Logo"`. Recuperati frame/varianti e geometria delle istanze tramite API generica e serializzazione dei figli, non gli interni delle icone. Gli esterni espongono controlli/istanze ma non il proprio codice interno. Binding media/CMS non risolti, minHeight numerico senza unità e artefatti del serializer non sono emessi come token.

Non si attesta il design system integrale non leggibile, la parità visiva dell’intero sito Framer, motion/scroll runtime, dispositivi fisici o cross-browser. Il sito non è ancora portato. Questa distinzione è necessaria: completezza della checklist non autorizza valori o ruoli inventati. Nessuna modifica a Framer, pubblicazione, deploy, commit/push o memoria globale.

Evidenza finale e digest: `TOKEN-AUDIT-VERIFICATION.json`.
