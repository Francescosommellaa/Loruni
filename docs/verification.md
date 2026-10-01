# Verifiche — Fase 01

Verifiche locali completate il 2026-10-02 (Europe/Rome), Node.js 24.13.1, pnpm 11.24.0, Chromium tramite Playwright CLI. Comandi ripetibili: `pnpm install --frozen-lockfile`, `pnpm peers check`, `pnpm check`, `git diff --check`. La CI remota si attesta separatamente sullo SHA finale in GitHub Actions e nel Brain.

## Esiti locali

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

## Payload locale

Misure di build, senza throttling né dati sul campo: somma gzipSync dei sette script dichiarati nell'HTML landing **175.5KiB**, compreso il nomodule legacy; il browser moderno ne carica sei. GSAP+ScrollTrigger differiti **43.8KiB gzip**. I due WOFF2 originali totalizzano **35,180 byte (34.4KiB)**. Nessuno script di terze parti. Sono misure di payload, non risultati Lighthouse/CWV.

## Igiene e limiti

Ignore verificati per copie brand, Next/TypeScript, catture/review, output QA e runtime CLI; `git ls-files --cached --ignored --exclude-standard` senza output. Scansione mirata di marker private key/GitHub token/AWS key nelle fonti pertinenti senza riscontri; non certifica tutta la storia Git.

ESLint 9.39.5 resta fissato per la compatibilità della catena React/Next corrente; nessun aggiornamento estraneo alla fase. Nessuna suite E2E completa o baseline visuale di pagina vuota. La strategia Lighthouse/visual regression è in performance.md.

Restano da attestare: browser/device hardware ulteriori, screen reader e audit WCAG completo, deploy HTTPS/CDN/WAF, social preview sulle piattaforme, Search Console/Bing, indicizzazione/discovery AI e CWV sul campo. Hosting/protezione playground, indirizzo/telefono/store, orari definitivi, media reali e analytics sono TBD. Nessun risultato locale equivale a queste verifiche esterne.
