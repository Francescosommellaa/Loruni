# SEO, ricerca e discovery AI — Fase 02

Fonte delle decisioni sistemiche, aggiornata allo scheletro narrativo Fase 02 e alla conferma del dominio. Le regole SEO fornite dall'utente restano vincolanti; implementazione locale non equivale a indicizzazione o distribuzione.

## Fonti
config/site.ts possiede https://loruni.it, lingua it, identità/business, profilo Instagram, CTA e sola route pubblica implementata /. config/environment.ts possiede SITE_ENV e token di verifica opzionali; config/seo.ts deriva metadata, robots e graph. brand.ts possiede palette/asset. Niente origine preview/localhost nelle URL pubbliche, duplicazione di dati, CMS fittizio o libreria SEO.

Loruni: locale serale a Napoli di socialità, cocktail e gaming, anche per chi non gioca. Orari 18:30–02:00 indicativi, omessi dallo schema; indirizzo completo, telefono, coordinate, store e orari/giorni definitivi TBD. Gaming digitale/giochi da tavolo distinti nella fonte. Nessuna recensione, rating, evento o FAQ inventata.

## Route e output correnti
| Fonte/output | Decisione |
| --- | --- |
| Landing / | Scheletro narrativo server; unico H1, heading/ancore reali, metadata globali con title/description, canonical, OG e X |
| robots.txt | Nativo Next; policy ambiente e search/training distinti |
| sitemap.xml | Solo / in production; vuota negli altri ambienti, niente lastmod inventato |
| manifest.webmanifest e icon.png | Identità/lingua, browser display; non una promessa PWA/installazione |
| opengraph-image | PNG 1200×630 con logo raster ufficiale invariato, da verificare sulle piattaforme dopo deploy |
| JSON-LD | Graph WebSite + LocalBusiness ora emesso: la home presenta il locale, Napoli e Instagram. ID stabili e solo addressLocality Napoli, nessuna via/coordinate/orari inventati; schema locale incompleto, non prova di rich result |
| Playground / | Noindex/nofollow HTML+header, robots crawlable per leggere noindex, nessuna sitemap |

Inventario derivato dal routing e dalla build; non mantenere un catalogo duplicato di title/URL. Frammenti e endpoint tecnici non sono pagine editoriali. Future route restano nel brief finché implementate.

## Ambienti e crawl policy
SITE_ENV vuoto/default development, oppure preview: HTML noindex/nofollow e sitemap vuota. Robots consente scansione per leggere noindex. La foundation locale rimane esclusa anche con next build/start; NODE_ENV production da solo non equivale al deploy pubblico.

Solo SITE_ENV=production **durante build e distribuzione del sito pubblico pronto** abilita index/follow e sitemap /. Non pubblicare la pagina foundation come home definitiva. Configurare la separazione preview/production nell'hosting; access protection per materiale riservato, non affidarsi a robots. La policy compilata non cambia impostando solo l'env dopo una build statica.

Search/discovery consentiti per Googlebot, bingbot e OAI-SearchBot; normale crawling pubblico consentito. GPTBot e Google-Extended disabilitati prudenzialmente in ogni ambiente, separati dalla ricerca. La scelta consente la ricerca richiesta senza un'autorizzazione implicita al training. Altri token training/proprietari vanno valutati su fonte ufficiale e scopo, senza blanket allow dedicati a bot AI. Google-Extended controlla anche alcuni usi di grounding Gemini/Vertex: il diniego può limitarli e non equivale a disabilitare Google Search. [OpenAI](https://developers.openai.com/api/docs/bots), [Google crawler](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers)

Verificare CDN/WAF, bot protection e IP ufficiali quando necessario: nome user agent non prova identità. ChatGPT-User riguarda azioni utente, distinto da SearchBot e GPTBot. Nessuna garanzia di inclusion/ranking/risposta AI; controllare i requisiti correnti delle piattaforme al deploy, inclusa l'idoneità AI in Search Console. llms.txt sperimentale/facoltativo e IndexNow solo per una necessità reale, non implementati.

## Contratti per le future pagine
Ogni pagina: intento reale distinto, URL leggibile/stabile, title/description/H1 specifici, link href interni descrittivi, canonical/indexability, preview social, sitemap e schema pertinenti. Default/layout non devono mascherare metadata mancanti. Niente cannibalizzazione, pagine sottili/keyword o copy AI generato ciecamente; contenuto originale Loruni people-first.

HTML server e semantico, main e gerarchia heading, contenuti accessibili senza JS/animazione. No hidden text, versioni separate per bot, informazioni essenziali soltanto in immagini o FAQ artificiali. Performance/accessibilità fanno parte della SEO; ratio/alt/media/font, LCP/CLS/INP e costo JS secondo performance.md. Non usare alt/heading come keyword stuffing.

URL canonica unica; query tracking/varianti tecniche non diventano pagine. Filtri/paginazione con policy e link percorribili quando esistono; breadcrumb con gerarchia reale. Rinomine: redirect permanente appropriato, link/canonical/sitemap/social/schema aggiornati, nessun loop/catena. Rimozioni: destinazione equivalente solo se reale, altrimenti 404/410 corretti; nessun soft-404 o redirect indiscriminato alla home.

Schema corrispondente a contenuti/fatti reali e UI, con entità/@id stabili, profili ufficiali in sameAs e fonti dati comuni. LocalBusiness è un tipo prudente per l'identità mista; schema locale incompleto non attesta idoneità rich result. Futuri eventi con date/fuso/stato/offerte reali; aggiornare eventi passati senza inventare novità. Nessun aggregateRating/review/FAQ non autentico. [Schema.org](https://schema.org/LocalBusiness)

Solo it ora; multilingua e hreflang reciproci solo per vere traduzioni/URL equivalenti. Canonical/sitemap/locale coerenti. Verifiche Google/Bing tramite env reali, nessun token finto. Analytics e consent management secondo servizi realmente scelti.

## Done e pubblicazione
Preflight: intento/URL, metadata ereditati, indexability, link, canonical, sitemap, schema/social e proprietario. Postflight: HTML/risposte reali, status/errori/redirect/link, metadata finali, robots/header/env, sitemap solo URL canoniche valide, schema/UI, media/accessibilità e performance. Automatizzare invarianti ripetibili pertinenti; significato editoriale/categoria/copy richiedono review.

Prima/dopo deploy: HTTPS/origine canonica, CDN/WAF, robots/sitemap/header, social preview e strumenti Search Console/Bing/validazione schema. Robots non è noindex né protezione d'accesso; il crawler deve leggere la direttiva. [Google noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing)

Audit al cambio route, contenuti, dati locali, dominio, lingue o policy; periodicità operativa da concordare. Fonti: documentazione ufficiale piattaforme, standard web, Schema.org, framework; per standard emergenti verificare data/adozione/scopo. API native [Next metadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata) e convenzioni robots/sitemap/manifest/OG, nessuna nuova libreria.

TBD reali: hosting e access protection playground, indirizzo/telefono/store, orari definitivi, media e contenuti della futura home, verifiche motori e analytics. Tutta la presenza sui motori/CWV di produzione resta da attestare.
