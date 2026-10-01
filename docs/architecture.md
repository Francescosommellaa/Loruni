# Architettura — Fase 01

Una repo pnpm, due app Next.js indipendenti: landing (3000) e playground interno (3001). Nessuna dipendenza fra app; entrambe consumano @loruni/ui tramite transpilePackages. App Router, React, TypeScript strict. Versioni Next/React stabili correnti verificate nel registry all'inizio della task; manifest/catalog e lockfile sono le fonti.

| Casa del codice | Responsabilità attuale |
| --- | --- |
| apps/landing/src/app | Home minimale server, layout, metadata routes e immagine social |
| apps/landing/src/config | Dati globali sito/business, ambiente e SEO |
| apps/playground/src/components | Prove di tema, controlli e ciclo di vita GSAP |
| packages/ui/src | Brand, font, token/reset globali, CSS Modules e primitive realmente usate |
| packages/ui/brand e fonts | SVG ufficiali condivisi, WOFF2 e licenze |
| Logo | Originali del marchio, anche raster usati per social |
| scripts | Sincronizzazione font e copie brand distribuibili |
| docs | Decisioni/brief/verifiche; AGENTS.md contiene il workflow |

Local first, shared when necessary. Niente CMS fittizio, store globale, provider motion, registry o directory vuote per future feature. Dati repository-driven: site.ts distingue gaming digitale/giochi da tavolo e mantiene null per dati mancanti. Quando arriverà un CMS cambierà la fonte, non la responsabilità del rendering.

CSS Modules possiedono composizioni e controlli; styles.css possiede reset e ruoli semantici. brand.ts possiede valori palette e percorsi brand; i due layout li espongono come CSS custom properties. Container possiede larghezza/gutter/centratura, Section solo ritmo verticale, flex parent il gap. Vedere design-system.md.

## Asset
sync-brand-assets.mjs copia gli SVG reali da packages/ui/brand e il PNG ufficiale da Logo nelle cartelle public/brand/{logo,icon,watermark} di ciascuna app, senza trasformazioni. Dev/build delle app eseguono la sincronizzazione. Le copie generate sono ignorate; source/licenze restano versionati. Nessuna variante inventata. Fonts:sync resta manutenzione esplicita dalle versioni Fontsource fissate; next/font/local riserva metriche e precarica le facce locali.

## Motion
Entrypoint separato @loruni/ui/motion: loadMotionEngine importa GSAP/ScrollTrigger solo nel browser, registra il plugin una volta e consente retry se il caricamento fallisce. createMotionScope usa matchMedia scoped con preferenza reattiva e cleanup revert. Il consumer React annulla setup asincroni dopo unmount e restituisce cleanup. Il playground esercita questa boundary senza tween/pin/cinematic motion. La landing non importa GSAP.

Sequenze, transizioni, cursor, smooth scroll e scroll variabile sono sviluppi futuri locali alle superfici interessate; nessun sistema preventivo. Eventuali callback asincroni dovranno essere registrati nel context o puliti esplicitamente; nessun kill globale di trigger altrui.

## Distribuzione e verifica
Dominio pubblico confermato https://loruni.it, unica origine in site.ts. SITE_ENV decide la policy al build: default development, preview esclusa, production solo sul sito pubblico pronto. Vedere seo.md. Il playground resta noindex con header e HTML; l'access control è responsabilità hosting.

CI: install frozen, lint, typecheck, build. Quality gate locale pnpm check. Nessun deploy automatico configurato. Performance/visual regression entrano in CI con la prima home significativa e stabile, secondo performance.md. Future route /app, /cocktail, /gaming, /events, /location e /legal/... restano nel brief, non nel routing corrente.
