# Website

Il website è il sito pubblico Loruni, con dominio canonico `https://loruni.it`. La foundation fornisce struttura tecnica e pagine provvisorie; i contenuti commerciali e la direzione grafica restano da definire.

## Pagine iniziali

| Percorso | Scopo |
| --- | --- |
| `/` | Homepage provvisoria |
| `/app` | Pagina provvisoria dell'app |
| `/giochi` | Pagina provvisoria giochi |
| `/eventi` | Pagina provvisoria eventi |
| `/community` | Pagina provvisoria community |
| `/chi-siamo` | Pagina provvisoria chi siamo |
| `/faq` | Pagina provvisoria FAQ |
| `/contatti` | Pagina provvisoria contatti |
| `/privacy` | Contenuti legali da completare prima della pubblicazione |
| `/cookie` | Contenuti legali da completare prima della pubblicazione |

L'elenco operativo è la registry locale, non questa tabella. Ogni route ha un file pagina esplicito e richiama il piccolo placeholder interno e `metadataForRoute`. Tutte le voci partono da `index: false` e `sitemap: false`.

## Shell e accessibilità

La shell contiene header, navigazione semplice, contenuto principale e footer con collegamenti legali. I link sono derivati dalla registry; non duplicare i percorsi nei componenti. Skip link e focus visibile permettono di raggiungere il contenuto da tastiera.

Usare italiano, landmark semantici e un H1 per pagina. Le pagine sono Server Component; gli error boundary sono gli unici componenti client iniziali. Sono presenti 404 e recupero errori minimi. Tailwind usa utilities essenziali e font di sistema, senza anticipare un design system.

## Modifiche future

Per una pagina seguire [pagine](pages.md); per canonical, anteprime e pubblicazione seguire [SEO](seo.md). La presenza di un percorso non autorizza a inventarne i contenuti. Privacy e cookie richiedono testi confermati prima della pubblicazione.

La definizione di design system e direzione grafica è il prossimo lavoro da approvare. L'app design system rimane indipendente: non importarne componenti nel website.
