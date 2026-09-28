# SEO e asset

Ogni app mantiene configurazione e metadata propri. I domini canonici sono fissi: `https://loruni.it` per il website e `https://ds.loruni.it` per il design system. Una preview usa comunque il dominio canonico del sito.

## Metadata e registry

`src/config/site.ts` contiene identità tecnica e dominio. `src/config/routes.ts` contiene title, description, flag `index`/`sitemap` e navigazione. `metadataForRoute(key)` in `src/lib/seo.ts` restituisce i metadata completi della pagina; `absoluteUrl(path)` costruisce gli URL dal dominio locale dell'app.

Il layout definisce default e template del title, senza una canonical homepage ereditabile. Ogni pagina dichiara la propria canonical. La utility ricompone Open Graph e Twitter integralmente: il merge superficiale di Next.js non deve far perdere immagini o altri campi annidati. Non aggiungere canonical alle 404, priorità sitemap, frequenze o date di modifica inventate.

## Indicizzazione per ambiente

L'unico valore che abilita i flag della registry è `VERCEL_ENV=production`, letto tramite `src/config/environment.ts`. `NODE_ENV=production` da solo non abilita l'indicizzazione.

| Ambiente | Metadata robots | Header HTTP | robots.txt | sitemap.xml |
| --- | --- | --- | --- | --- |
| `VERCEL_ENV=production` | Dipendono da `index`; i placeholder restano `noindex` | Nessun blocco di ambiente | Crawling consentito e URL sitemap canonica | Include solo voci con `sitemap: true` |
| Preview, development, valore assente o diverso | `noindex, nofollow` | `X-Robots-Tag: noindex, nofollow` | Crawling consentito, senza riferimento sitemap | Vuota |

Tutte le route iniziali hanno `index: false` e `sitemap: false`, incluse le homepage. Le sitemap sono quindi valide ma inizialmente vuote anche in produzione. Per pubblicare una pagina, approvare contenuti e indicizzazione e aggiornare consapevolmente entrambi i flag.

Consentire il crawling permette ai motori di leggere `noindex`: non usare `Disallow: /` come protezione dall'indicizzazione. `noindex` non è un controllo di accesso. Per il comportamento dei crawler vedere la [documentazione Google](https://developers.google.com/search/docs/crawling-indexing/block-indexing).

Ambiente e flag SEO sono valutati nella build: dopo una modifica ricompilare e verificare la risposta servita. Per simulare production o preview in locale, impostare `VERCEL_ENV` al valore desiderato nel processo di build e avvio, poi ripristinare l'ambiente al termine. Non usare una vecchia `.next` per attestare un ambiente diverso.

## Convenzioni e sostituzione degli asset

Gli originali in `Logo/` restano intatti. Le app contengono soltanto copie necessarie; non c'è sincronizzazione automatica. Preservare forme, colori e proporzioni ufficiali quando si esportano nuove dimensioni.

I percorsi seguenti sono relativi a ciascuna app, salvo dove indicato:

| File | Uso e modifica |
| --- | --- |
| `src/app/favicon.ico` | Favicon nativa; sostituire il file con una nuova esportazione dell'icona ufficiale |
| `src/app/icon.svg` | Icona vettoriale nativa; sostituire con la variante ufficiale approvata |
| `src/app/apple-icon.png` | Icona Apple; sostituire con esportazione quadrata 180×180 |
| `public/brand/logo.png` | Logo ufficiale usato dalla preview social; sostituire la copia e mantenere le proporzioni nel generatore |
| `src/app/opengraph-image.tsx` | Anteprima neutra generata tramite `next/og`; aggiornare qui composizione e indicazione provvisoria |
| `public/icons/icon-192.png`, `public/icons/icon-512.png` | Solo website: icone manifest, rispettivamente 192×192 e 512×512 |
| `src/app/manifest.ts` | Solo website: nome, icone e manifest con `display: "browser"`; non è prevista installazione PWA né service worker |

`src/app/robots.ts` e `src/app/sitemap.ts` generano gli endpoint nativi. L'endpoint dell'anteprima social è `/opengraph-image`; Open Graph e Twitter condividono l'immagine configurata dalla utility SEO. Dopo una sostituzione controllare sia i metadata che la risposta HTTP degli asset e delle anteprime.

## JSON-LD futuro

La foundation non emette dati strutturati e non contiene helper preventivi. Quando esisteranno contenuti e un tipo di schema approvati, inserire lo script nel relativo Server Component. Il seguente frammento mostra soltanto la serializzazione sicura di un oggetto `structuredData` già validato e fondato su contenuti confermati:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
  }}
/>
```

Non inserire recensioni, indirizzi, prezzi, organizzazioni o altri dati non confermati. L'escape di `<` impedisce che una stringa chiuda il tag script; non sostituisce la validazione dello schema e dei contenuti.

## Prova prima della pubblicazione

Verificare HTML e header reali per home, pagine interne e 404: title, description, canonical, robots, OG e Twitter. Aprire robots, sitemap, manifest website e asset. Provare tutti gli ambienti; per verificare la pubblicazione usare temporaneamente una route con flag attivi, poi ripristinare i flag provvisori e ricompilare. Nessuna prova locale attesta da sola un deploy Vercel.
