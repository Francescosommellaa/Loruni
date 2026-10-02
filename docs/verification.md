# Verifiche — Fase 03

Verifica del 2026-10-02 Europe/Rome su composizione statica e build production locale. `pnpm check` supera lint, TypeScript strict e build delle due app; `git diff --check` passa. Nessuna nuova dipendenza o modifica del lockfile. La successiva richiesta Fase 04 approva la composizione statica e autorizza il motion, senza ridisegnarla.

## Composizione, responsive e comportamento

Otto scene server/unico H1; socialità continua, cocktail/tavolo caldi e gaming fisicamente distinto. Quote minime 100/95/110/110/110/contenuto/125/100svh, scroll nativo. Altezze effettive 7305/8824/7835px a390×844/768×1024/1440×900. Quattro fotografie sintetiche esplicitamente dichiarate; non documentano la sede. App senza schermate/store reali resta placeholder con CTA disabilitata.

43 catture finali ricatturate e aperte dopo le correzioni: otto scene/menu/full a390/768/1440px; apertura/full a320/430/399/1280/1920px; reduced motion, senza JS e reflow. Due ulteriori catture tavolo/app a320px/root200%. Nessun overflow negli otto viewport standard; reflow200% senza overflow o perdita del finale. Tavolo/app mobile usano una colonna, sei tracce da48rem dove necessarie, composizioni desktop da64rem.

Skip link primo Tab/outline ed Enter→main; menu Enter/focus/ESC/restauro focus e overflow; preview hover/focus, ancore/tema, visita e ritorno all'inizio; app disabled. Reduced motion e senza JS conservano otto scene, contenuto e azioni. Regressione Button/Switch del playground verificata. Nessun errore runtime/console nella matrice finale.

Review Impeccable fresca: tre fix materiali (reflow, persistenza DESIGN/sidecar, Napoli senza eyebrow) corretti e verificati dalla stessa reviewer; verdetto ship limitato ai tre fix. Due round self-QA, nessuna nuova caccia al difetto dopo il verdetto.

## SEO, costo e limiti

HTTP200, canonical https://loruni.it, default noindex/nofollow/sitemap vuota, graph WebSite+LocalBusiness solo con fatti confermati. Nessun indirizzo, telefono, coordinate, rating o orario ufficiale inventato. Playground noindex. Policy crawler invariata; queste sono prove locali, non attestazione di discovery in produzione.

Sette script HTML inclusa compatibilità legacy: **178,1KiB gzip**. Nessun GSAP/third-party nella home statica. Quattro WebP1536×1024:332312byte (324,5KiB); font35.180byte. Misure di payload locale, non Lighthouse/CWV sul campo. Media/copy definitivi, store, indirizzo/telefono e orari ufficiali restano aperti; hardware meno potente, cross-browser/screen reader, audit WCAG completo, deploy e indicizzazione non attestati. Le prove sotto sono storiche.

## Storico Fase 02 — non attesta la nuova UI

Verifica corrente del 2026-10-02 Europe/Rome, Chromium su build production locale predefinita noindex. `pnpm check` supera lint senza warning, TypeScript strict e build delle due app; `git diff --check` passa. Nessuna dipendenza nuova o modifica del lockfile. SHA/CI remoti sono attestati separatamente nel Brain e su GitHub.

## Scheletro e responsive

Otto landmark nell'ordine previsto, cocktail/tavolo in un passaggio comune, digitale distinto, app/eventi brevi, convergenza e finale integrato. Quote 100/90/110/110/110/85/130/100svh: 8,35 viewport, non secondi o pinning. Altezza effettiva 7.047px a390×844, 8.550px a768×1024, 7.515px a1440×900.

Ventuno catture finali aperte: per viewport apertura, passaggio sociale/tavolo, digitale/espansione, convergenza/finale, navbar, menu e pagina intera. Navbar ricatturata dopo il feedback colore. Nessun overflow, asset/font caricati, H1/H2 narrativi entro due righe. Reflow320px + font root200% senza overflow/perdita del finale; corretto il track Grid intrinseco dell'apertura senza nascondere overflow.

## Comportamenti verificati

- Skip link primo Tab/outline ed Enter→main; input conclude subito l'emergenza logo1s senza cancellare input o bloccare scroll.
- Navbar/temi/ancore/progressione, CTA→Vieni e ritorno all'inizio. Corretto il salto Scorri che lasciava la navbar nascosta: stessa altezza misurata per detection e offset, anche al reflow.
- Dialog fullscreen: Enter apre, primo focus Chiudi, background DOM fuori dal Tab, ESC chiude, focus torna a Menu e overflow body ripristinato. La chrome del browser resta raggiungibile secondo comportamento nativo.
- Link menu chiude e sposta focus al landmark. App disabilitata con store TBD; nessun Maps fittizio.
- Reduced motion: logo immediato/animation none e scroll auto. Senza JS otto scene/unico H1 server e CTA fisica funzionante. Nessun errore runtime/console nella matrice.
- Regressione del Button condiviso nel playground: attivazione funzionante; CSS del controllo invariato.

## SEO, costo e limiti correnti

HTTP200, canonical https://loruni.it, noindex/nofollow e sitemap vuota predefiniti. Graph WebSite+LocalBusiness corrisponde a dati presentati: Napoli/Instagram/descrizione, senza via/telefono/coordinate/rating/orari ufficiali finti. Policy production/crawler invariata; la prova Fase01 dei due ambienti sotto resta storica, non un nuovo deploy.

Sette script dichiarati nell'HTML: **177,7KiB gzip**, incluso nomodule legacy. Nessun GSAP o script esterno caricato dalla home. Payload locale, non Lighthouse/CWV sul campo.

Climax strutturale, placeholder dichiarati e copy provvisorio; review indipendente del perimetro Fase02, non approvazione del visual finale. Contratti/documentazione allineati a chiusura, verdetto e SHA nel Brain. Screen reader, hardware/cross-browser, audit WCAG completo, deploy/CDN-WAF, indicizzazione/discovery AI/CWV sul campo non attestati. Dati operativi mancanti e visual/motion definitivi restano TBD. Strategia visual regression/performance futura in performance.md.

## Storico Fase 01 — non attesta la nuova UI

Verifiche locali completate il 2026-10-02 (Europe/Rome), Node.js 24.13.1, pnpm 11.24.0, Chromium tramite Playwright CLI. Comandi ripetibili: `pnpm install --frozen-lockfile`, `pnpm peers check`, `pnpm check`, `git diff --check`. La CI remota si attesta separatamente sullo SHA finale in GitHub Actions e nel Brain.

### Esiti locali Fase 01

- Installazione deterministica e peer check senza incompatibilità; lint senza warning/errori, TypeScript strict e build production delle due app superati.
- Home deliberatamente limitata a logo/stato; nessuna hero, sezione commerciale, fotografia inventata, effetto decorativo o futura pagina.
- Catture 390×844, 768×1024 e 1440×900 per entrambe le app e tema chiaro del playground: nove file aperti/ispezionati, font e logo caricati, nessun overflow. Due round di ispezione, con correzione del bordo dello switch per contrasto sul chiaro.
- Skip link primo Tab con focus visibile, Enter raggiunge main; Switch via Space, Button via Enter, contatore/reset funzionanti. Target Switch 52×44px, Button almeno 48px.
- GSAP/ScrollTrigger scaricati soltanto all'attivazione della diagnostica; cambio reduced motion live in entrambe le direzioni, CSS 0s, rimozione/rimontaggio con stato corretto e zero trigger. Nessuna animazione narrativa o smooth scroll.
- Contrasti misurati sui colori effettivi del tema chiaro: testo 15.46:1, bordo switch 3.24:1. Nessun errore console/pageerror durante i flussi verificati.
- HTTP landing/playground 200; lingua it, canonical normalizzata da Next a https://loruni.it, WebSite JSON-LD, nessun verification token finto. LocalBusiness preparato ma non emesso finché la home presenta i fatti del locale.
- Build predefinita noindex/nofollow e sitemap vuota; build locale di prova SITE_ENV=production con index/follow e sola URL / nella sitemap. Robots permette search e separa GPTBot/Google-Extended; nessuna pubblicazione eseguita.
- Playground sempre noindex/nofollow in header/HTML e crawlable per leggere la direttiva; non è access control.
- Manifest valido, favicon disponibile, immagine OG PNG 1200×630 (20,340 byte), 404 su percorso inesistente.
- Copie degli asset verificate contro le fonti ufficiali tramite hash; source e licenze preservati, cartelle public/brand ricostruite e ignorate.
- Review Impeccable fresca: **disposition ship** al perimetro delle fondamenta, nessun material fix. Il verdetto non approva una futura home.
- Hook attivo: sola eccezione puntuale del radius meccanico track 20px in switch.module.css; nessuna soppressione globale. DESIGN.md/sidecar aggiornati dal sistema effettivo.

### Payload locale Fase 01

Misure di build, senza throttling né dati sul campo: somma gzipSync dei sette script dichiarati nell'HTML landing **175.5KiB**, compreso il nomodule legacy; il browser moderno ne carica sei. GSAP+ScrollTrigger differiti **43.8KiB gzip**. I due WOFF2 originali totalizzano **35,180 byte (34.4KiB)**. Nessuno script di terze parti. Sono misure di payload, non risultati Lighthouse/CWV.

### Igiene e limiti Fase 01

Ignore verificati per copie brand, Next/TypeScript, catture/review, output QA e runtime CLI; `git ls-files --cached --ignored --exclude-standard` senza output. Scansione mirata di marker private key/GitHub token/AWS key nelle fonti pertinenti senza riscontri; non certifica tutta la storia Git.

ESLint 9.39.5 resta fissato per la compatibilità della catena React/Next corrente; nessun aggiornamento estraneo alla fase. Nessuna suite E2E completa o baseline visuale di pagina vuota. La strategia Lighthouse/visual regression è in performance.md.

Restano da attestare: browser/device hardware ulteriori, screen reader e audit WCAG completo, deploy HTTPS/CDN/WAF, social preview sulle piattaforme, Search Console/Bing, indicizzazione/discovery AI e CWV sul campo. Hosting/protezione playground, indirizzo/telefono/store, orari definitivi, media reali e analytics sono TBD. Nessun risultato locale equivale a queste verifiche esterne.
