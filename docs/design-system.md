# Design system — fondamenta e stato Fase 02

Contratti e valori eseguibili: packages/ui/src/brand.ts e styles.css; le componenti usano CSS Modules. DESIGN.md conserva il contesto visivo e descrive la base effettiva; il sidecar Impeccable è derivato.

- Palette esistente preservata, senza nuove tinte definitive. brand.ts è la sola fonte dei quattro hex e dei percorsi asset; i layout espongono brandVariables, manifest/social consumano gli stessi valori.
- Ruoli colore: background/secondary, surface/elevated, text/secondary/muted, accent/on-accent, positive, border, focus. I ruoli derivati si ricalcolano nello scope del tema chiaro. La prova tema del playground resta interna; nella home il digitale usa una campitura chiara provvisoria per il cambio d'ambiente, senza un colore definitivo assegnato al gaming.
- Funnel Display per display/heading, Funnel Sans per body/UI; variabili locali next/font/local con OFL. Otto ruoli data-type: display, heading-1/2/3, body-large, body, small, label. Dimensioni heading/display fluide, display massimo 6rem; tracking -0.025em. Gerarchia HTML distinta dal ruolo visivo.
- Spacing ridotto: xs .25rem, sm .5rem, md 1rem, lg 1.5rem, xl 2rem; 2xl/3xl fluidi. Default tecnici condivisi Fase 01, consumati nello scheletro Fase 02, non nuova identità approvata.
- Container: massimo 72rem e gutter fluido 1–2rem, centratura. Section: padding verticale tramite section-space, nessun gutter. Gap dei figli dal parent; nessun margin esterno dei controlli.
- Button: altezza minima 3rem, padding sm/lg, gap sm, radius-control 0, variant semantiche primary/secondary, focus/hover/active/disabled. Nessuno spostamento attivo decorativo.
- ButtonLink: anchor nativa con href obbligatorio e variant primary/secondary; condivide CSS, metriche e stati applicabili di Button, senza dipendenze o token nuovi. Disabled resta nel Button nativo; la CTA app senza store usa quello disabilitato con nota esplicita.
- Switch: target 52×44px, track/thumb e label/state accessibili; bordo semantico rende distinguibile il track anche lime su avorio. Dimensioni/20px di radius track sono geometria meccanica locale preesistente, non una superficie o una scala radius di pagina.
- CSS feedback 120ms, switch 160ms, preferenza reduced motion immediata. Nessuna animazione narrativa di riferimento già scelta.

Baseline WCAG AA: foreground/secondary/muted leggibili sui temi, focus visibile, skip link, HTML semantico, controlli da tastiera e target ≥44px per questa base. Stato dei contenuti sempre accessibile, anche se JS o motion non sono disponibili. La baseline non è una certificazione WCAG completa.

Stato verificato nel codice il 2026-10-02: la home Fase 02 rende otto momenti server navigabili in un percorso verticale nativo, con copy provvisorio e placeholder media neutri identificati. Apertura, convergenza e visita usano display; gli altri titoli di scena heading-1; app/testo di convergenza heading-3 e menu heading-2. Percorso, ritmo e parametri di scena restano nel contratto `docs/landing-narrative.md`; Visual direction + Static composition è la prossima fase.

La composizione della landing possiede la soglia locale 48rem per due colonne; le fondamenta condivise restano fluide e senza breakpoint globali. Container possiede larghezza/gutter, scena il ritmo verticale, grid/flex i gap. Le geometrie dei placeholder non sono token o componenti condivisi. Il playground resta Operate e non cambia per lo scheletro pubblico. QA richiesta 390×844, 768×1024, 1440×900, con controllo stretto/zoom quando pertinente.

La sola emergenza iniziale watermark/logo usa CSS entro 1s, termina su input/scroll ed è immediata con reduced motion. Navbar e progressione sono locali; l'altezza misurata `--journey-nav-height` possiede offset delle ancore e soglia del tema, con cleanup di ResizeObserver/listener/RAF. Il menu è un dialog nativo fullscreen con focus/ESC e ripristino dell'overflow alla chiusura. La landing non carica GSAP e non implementa pinning, smooth scroll, cursore o motion narrativo definitivo.
