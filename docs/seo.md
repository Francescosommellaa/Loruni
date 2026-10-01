# SEO, ricerca e discovery AI

Fonte delle decisioni sistemiche SEO di Loruni. Regole vincolanti fornite dall'utente il 2026-10-01, consolidate qui; `AGENTS.md` definisce quando applicarle. Le regole sono approvate, mentre configurazione e contenuti mancanti restano decisioni aperte. Questo documento non attesta una distribuzione o indicizzazione già avvenuta.

## Perimetro e stato verificato

La landing è il sito pubblico. Il playground è interno e deve restare fuori da sitemap, navigazione pubblica, canonical e discovery del sito. Loruni è un luogo fisico, come confermato nelle istruzioni dell'utente. Categoria dell'attività, città, indirizzo, coordinate, telefono, orari, profili ufficiali e servizi effettivi non sono confermati. Gli esempi del testo non costituiscono dati dell'attività.

Inventario minimo ricavato dal routing corrente, verificato il 2026-10-01:

| App e route | Intento e policy | Fonti eseguibili | Stato |
| --- | --- | --- | --- |
| Landing `/` | Presentare Loruni; candidata all'indicizzazione in produzione dopo completamento | `apps/landing/src/app/page.tsx`, `layout.tsx` | HTML server con H1, sezioni e link; title/description di base; copy provvisorio |
| Playground `/` | Prove interne; esclusa dall'indicizzazione | `apps/playground/src/app/page.tsx`, `layout.tsx`, `robots.ts`, `next.config.ts` | Metadata e header `noindex, nofollow`; robots blocca `/`; protezione hosting da scegliere |

Entrambe le app hanno `src/app/icon.png`. La landing non ha ancora dominio autorevole, `metadataBase`, canonical, Open Graph/X, `robots.ts`, `sitemap.ts` o JSON-LD. Il playground espone `/robots.txt`, senza sitemap. Frammenti come `#loruni` e `#main` non sono pagine separate. Gli endpoint tecnici e gli asset non sono pagine editoriali da indicizzare.

Aggiornare questo inventario solo quando cambia una decisione utile. Derivare l'elenco effettivo delle route dal routing/configurazione e dall'output della build; non mantenere un secondo catalogo manuale di URL, title o description. Non creare un generatore per la singola route attuale.

## Fonti e responsabilità

- Le route possiedono intento, contenuti e metadata specifici; il layout dell'app possiede default sensati e title template quando necessario. Le pagine dinamiche derivano metadata e contenuti dagli stessi dati.
- Usare le API native Next.js: Metadata API, `generateMetadata`, convenzioni `robots.ts`, `sitemap.ts`, icone e immagini social. Nessuna libreria SEO aggiuntiva senza una necessità concreta. [Metadata Next.js](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- Quando viene confermato il dominio, configurare una sola origine pubblica autorevole nell'app landing. Derivare da essa canonical, URL social, sitemap e identificatori delle entità. Validare configurazione e ambiente: produzione non può usare localhost, staging, preview o un dominio fittizio come fallback.
- Quando arrivano dati locali confermati, introdurre una sola configurazione dell'attività nell'app proprietaria. UI, contatti, footer, pagine locali, schema e social devono consumarla. Non duplicare dati nel documento, nei componenti e nel JSON-LD.
- I token di verifica per Search Console/Bing appartengono alla configurazione prevista dal framework/hosting; nessuna credenziale nel codice, nei log o nel Brain. La memoria dell'agente non sostituisce queste fonti.

## URL, intento e collegamenti

Ogni pagina risponde a un intento reale distinto. Prima di aggiungerla, cercare pagine equivalenti ed evitare cannibalizzazione, pagine sottili o varianti generate per parole chiave. URL brevi, leggibili, descrittivi e stabili; una sola convenzione per slash finale, maiuscole e dominio, definita con l'hosting.

Ogni pagina pubblica utile deve essere raggiungibile tramite link interni reali con `href`, anchor descrittive e navigazione coerente. Non usare pulsanti JavaScript come unico accesso né creare pagine orfane. Breadcrumb solo con una gerarchia reale; paginazione con URL e link percorribili quando esiste contenuto paginato.

Query di tracking e varianti tecniche non generano nuove pagine indicizzabili automaticamente. Definire canonical coerenti con il contenuto e con l'intento; per filtri e parametri funzionali scegliere esplicitamente la policy. Una canonical non sostituisce un redirect o una decisione di esclusione.

Quando cambia una route: stabilire la destinazione, applicare un redirect permanente appropriato, aggiornare link, canonical, sitemap, metadata social e schema, eliminando riferimenti interni obsoleti. Evitare catene e loop. Quando una pagina viene rimossa: usare una sostituzione equivalente solo se esiste, altrimenti uno stato 404/410 appropriato; rimuovere riferimenti e sitemap. Nessun redirect indiscriminato alla home né errore servito con status 200. Le pagine 404 devono aiutare la navigazione senza risultare contenuto valido.

## Indicizzazione e ambienti

| Ambiente | Policy richiesta prima della pubblicazione |
| --- | --- |
| Landing produzione | Consentire discovery delle sole pagine pubbliche valide; canonical sul dominio confermato; robots e sitemap coerenti; nessun `noindex` accidentale |
| Landing preview/staging | Esclusione dall'indicizzazione, indipendente dalla policy produzione; protezione d'accesso quando opportuna; nessuna URL preview nelle fonti pubbliche |
| Playground, in ogni ambiente | Nessuna sitemap o promozione pubblica; protezione d'accesso per materiale riservato; verificare l'esclusione effettiva sul servizio scelto |
| Locale | Non è un'origine pubblica; nessuna prova di indicizzazione o visibilità reale |

`robots.txt` controlla la scansione e non protegge l'accesso. Un crawler bloccato da robots può non vedere una direttiva `noindex`; una URL può quindi apparire nei risultati tramite riferimenti esterni. Il playground attuale combina entrambe le direttive: prima di ospitarlo scegliere protezione d'accesso oppure una policy che consenta di leggere `noindex` per contenuto pubblico non riservato. Non dichiarare garantita l'esclusione sulla base dei soli file locali. [Google: noindex e robots](https://developers.google.com/search/docs/crawling-indexing/block-indexing)

La produzione deve esporre `/robots.txt` valido con il riferimento alla sitemap. Non bloccare risorse necessarie a rendere le pagine. La policy deve distinguere host e ambiente, essere verificata sulla risposta realmente servita e non copiata alla cieca dalla preview.

## Sitemap

Generare con gli strumenti nativi dalle fonti del sito: solo URL pubbliche, canoniche, indicizzabili e valide, che rispondono correttamente. Escludere playground, preview, pagine private/noindex, errori, redirect, duplicati e varianti di tracking. Nuove pagine, eliminazioni e rinomine devono aggiornare automaticamente l'output insieme alla fonte delle route. [Sitemap Next.js](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap)

`lastmod` descrive una modifica significativa del contenuto, se la data è disponibile e attendibile. Non usare l'ora corrente di ogni build come aggiornamento editoriale né inventare date. Gestire suddivisione e indici solo se il volume reale li richiede.

## Metadata, HTML e contenuti

Ogni pagina indicizzabile deve avere title specifico, description utile e coerente con la pagina, H1 descrittivo, canonical e preview social appropriate. Il title template aggiunge il brand senza ripetizioni. Default e fallback non devono mascherare dati mancanti o rendere tutte le pagine identiche; la lunghezza deve favorire chiarezza, senza una soglia magica universale.

Contenuti e metadata devono arrivare dal server attraverso il framework, non essere inseriti soltanto dopo il caricamento client. Usare `main`, header/nav/footer, sezioni e heading con gerarchia logica; un H1 principale per pagina, senza scegliere il livello soltanto per la dimensione visiva. Informazioni chiave disponibili come testo HTML reale, accessibile anche senza un'animazione iniziale o un'interazione obbligatoria.

Scrivere per le persone: identità, offerta reale, ubicazione, modalità di visita o contatto quando confermate. Brand, categoria e luogo devono essere comprensibili e coerenti; mai dedurre una categoria o una città dagli esempi. Rispondere alle domande utili con contenuti chiari, non FAQ artificiali o una sequenza di keyword. Niente testo nascosto, contenuti diversi per crawler, recensioni/citazioni inventate, menzioni simulate o pagine AI generate in massa. Il design e le animazioni devono preservare leggibilità, tastiera, focus e movimento ridotto.

L'italiano è l'unica lingua attuale (`lang="it"`). Introdurre altre lingue solo con contenuti realmente tradotti e URL proprie. `hreflang` reciproci, canonical e sitemap devono riferirsi a equivalenti reali; niente alternati verso pagine inesistenti o tutte verso la home.

## Entità e structured data

JSON-LD solo per entità e contenuti realmente presenti, pertinenti alla pagina e coerenti con la UI. Usare il tipo più preciso sostenuto dai fatti, non categorie incompatibili per intercettare ricerche. Loruni è un luogo fisico: il sottotipo di `LocalBusiness` resta da scegliere sui dati confermati. [Schema.org: LocalBusiness](https://schema.org/LocalBusiness)

Collegare sito, attività, pagine ed eventuali eventi con identificatori `@id` stabili derivati dall'origine pubblica. Non introdurre ora URL inventate. `sameAs` contiene soltanto profili ufficiali verificati. Nome, logo, indirizzo, coordinate, contatti e orari devono essere coerenti fra sito e profili pubblici; includere eccezioni agli orari soltanto quando reali.

Eventi soltanto se confermati: titolo, date/fuso, luogo, stato ed eventuali offerte reali. Non trasformare ogni promozione in un evento né inventare disponibilità o prezzi. Per eventi passati conservare informazioni storiche corrette se utili, aggiornare stato e collegamenti secondo la decisione editoriale, senza riciclare date per simulare novità. Nessuna recensione, rating o FAQ schema senza contenuto autentico e requisiti applicabili.

Validare sintassi, proprietà, identificatori e corrispondenza con la pagina con gli strumenti appropriati. La validità non garantisce rich result o visibilità.

## Media, social e performance

Usare immagini pertinenti e originali quando disponibili, nomi leggibili, formati/dimensioni adeguati, ratio e spazio riservato per evitare spostamenti. Alt descrittivo secondo il contenuto; alt vuoto per decorazioni, senza keyword stuffing. Non sostituire informazioni essenziali con testo dentro immagini.

Ottimizzare l'immagine LCP: non caricarla pigramente; lazy loading per media fuori dalla prima vista quando appropriato. Controllare font, CSS, peso media, JavaScript, layout shift e risposta alle interazioni. LCP, CLS e INP richiedono misurazioni appropriate; una build riuscita non attesta Core Web Vitals sul campo. Le animazioni non devono nascondere contenuti se lo script fallisce né bloccare la lettura o le interazioni.

Open Graph e X condividono contenuti, identità e origine con i metadata della pagina. Prevedere una social image del brand e immagini specifiche dove utili, raggiungibili pubblicamente, con proporzioni, dimensioni e alt dichiarati; verificare la preview reale. Favicon e logo devono riflettere Loruni. Non considerare la sola favicon una social preview completa.

## Ricerca AI e crawler

La discovery AI usa lo stesso sito utile alle persone, con informazioni esplicite, entità coerenti e contenuto originale. Nessuna versione parallela per i bot, protocollo futuro ipotetico o ottimizzazione basata su promesse non documentate. Verificare i requisiti correnti della piattaforma prima della distribuzione; la guida Google consultata il 2026-10-01 comprende anche l'idoneità delle funzionalità AI in Search Console. Nessuna garanzia di inclusione o ranking. [Google: ricerca generativa](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)

Per OpenAI distinguere tre scopi: `OAI-SearchBot` per la ricerca ChatGPT, `GPTBot` per contenuti utilizzabili nell'addestramento, `ChatGPT-User` per richieste avviate dall'utente. Ricerca e addestramento hanno impostazioni indipendenti; una scelta non autorizza automaticamente l'altra. La policy di produzione per ricerca e training va registrata esplicitamente prima di configurare robots e hosting. È ancora aperta: il testo dell'utente richiede la distinzione, non decide i permessi. [OpenAI: crawler](https://developers.openai.com/api/docs/bots)

Per ogni altro crawler identificare proprietario, documentazione ufficiale, scopo (search, training, user fetch o altro) e policy applicabile prima di aggiungerlo. Controllare anche CDN/WAF e, se richiesto, gli intervalli IP pubblicati ufficialmente; il nome dello user agent da solo non prova l'identità. Non copiare liste di bot da fonti non verificate.

`llms.txt` rimane sperimentale e facoltativo, da introdurre solo con un consumer e un beneficio verificabili; non è un requisito universale SEO. IndexNow solo con una reale esigenza e una piattaforma che lo supporta. Nessuno dei due è implementato ora.

## Verifiche e definizione di done

Prima di creare o cambiare una pagina stabilire: intento distinto, URL, ambiente/indexability, title, description, H1, accesso tramite link, canonical, sitemap, preview social e structured data realmente applicabile. Leggere metadata ereditati, robots/header, routing, redirect e policy hosting prima di scegliere il proprietario della modifica.

Dopo una modifica pertinente verificare sulla risposta e sull'HTML prodotti:

- URL/status, redirect e 404 reali; link interni validi e assenza di pagine orfane, loop o destinazioni obsolete.
- Metadata finali, canonical assoluta sul dominio corretto, coerenza fra robots/header e ambiente; nessun noindex accidentale in produzione.
- Sitemap valida e aggiornata, solo URL canoniche indexable; riferimento corretto da robots.
- H1, heading, contenuto leggibile, accessibilità e assenza di informazioni false o nascoste.
- JSON-LD coerente con UI, identità e dati locali; media, social preview e prestazioni secondo il cambiamento.

Automatizzare gli invarianti tecnici ripetibili quando implementati: origine valida, campi richiesti, riferimenti/URL, unicità pertinente, output robots/sitemap/schema e regressioni di routing. Non imporre unicità cieca dove un contenuto condiviso è intenzionale né automatizzare significato editoriale, categoria o copy senza review. Usare build e convenzioni native, senza creare un secondo sistema di routing o un'infrastruttura SEO preventiva.

Prima della pubblicazione servono controlli sull'host reale: HTTPS e dominio canonico, HTML servito, sitemap/robots, header, CDN/WAF, preview social, strumenti di validazione e proprietà Search Console/Bing quando configurate. Dopo, monitorare scansione, indicizzazione, errori e prestazioni, riesaminando anche l'idoneità AI secondo le fonti ufficiali. Un push GitHub non dimostra questi esiti.

Audit quando cambiano architettura, route, contenuti, dati locali, dominio, lingue o policy crawler; definire la periodicità operativa con chi gestisce il sito. Priorità delle fonti: documentazione ufficiale del motore/piattaforma, standard web, Schema.org, framework, poi fonti tecniche autorevoli. Per standard emergenti controllare fonte, data, adozione e scopo; non presentare una sperimentazione come requisito consolidato.

## Decisioni aperte e prossima implementazione

- Dominio pubblico, hosting e separazione produzione/preview/playground.
- Categoria, ubicazione, contatti, orari, profili e servizi confermati; copy e azione principale della landing.
- Permessi distinti per crawler di ricerca e addestramento; protezione del playground.
- Implementazione nativa di origine, metadata/canonical/social, robots/sitemap e schema applicabile una volta disponibili le fonti reali.
- Strumenti di verifica/monitoraggio sul dominio e soglie operative fondate sulle misure.

Le modifiche del 2026-10-01 recepiscono le regole nella documentazione; non implementano queste integrazioni né certificano la SEO della futura produzione.
