# Design system — Fase 01

Contratti e valori eseguibili: packages/ui/src/brand.ts e styles.css; le componenti usano CSS Modules. DESIGN.md conserva il contesto visivo e descrive la base effettiva; il sidecar Impeccable è derivato.

- Palette esistente preservata, senza nuove tinte definitive. brand.ts è la sola fonte dei quattro hex e dei percorsi asset; i layout espongono brandVariables, manifest/social consumano gli stessi valori.
- Ruoli colore: background/secondary, surface/elevated, text/secondary/muted, accent/on-accent, positive, border, focus. Il tema chiaro è una prova interna, con ruoli derivati ricalcolati nel suo scope.
- Funnel Display per display/heading, Funnel Sans per body/UI; variabili locali next/font/local con OFL. Otto ruoli data-type: display, heading-1/2/3, body-large, body, small, label. Dimensioni heading/display fluide, display massimo 6rem; tracking -0.025em. Gerarchia HTML distinta dal ruolo visivo.
- Spacing ridotto: xs .25rem, sm .5rem, md 1rem, lg 1.5rem, xl 2rem; 2xl/3xl fluidi. Default tecnici iniziali, da validare nella narrativa, non nuova identità approvata.
- Container: massimo 72rem e gutter fluido 1–2rem, centratura. Section: padding verticale tramite section-space, nessun gutter. Gap dei figli dal parent; nessun margin esterno dei controlli.
- Button: altezza minima 3rem, padding sm/lg, gap sm, radius-control 0, variant semantiche primary/secondary, focus/hover/active/disabled. Nessuno spostamento attivo decorativo.
- Switch: target 52×44px, track/thumb e label/state accessibili; bordo semantico rende distinguibile il track anche lime su avorio. Dimensioni/20px di radius track sono geometria meccanica locale preesistente, non una superficie o una scala radius di pagina.
- CSS feedback 120ms, switch 160ms, preferenza reduced motion immediata. Nessuna animazione narrativa di riferimento già scelta.

Baseline WCAG AA: foreground/secondary/muted leggibili sui temi, focus visibile, skip link, HTML semantico, controlli da tastiera e target ≥44px per questa base. Stato dei contenuti sempre accessibile, anche se JS o motion non sono disponibili. La baseline non è una certificazione WCAG completa.

La home attuale contiene solo logo e stato foundation. Il playground è Operate: serve verificare le primitive, non proporre una home. Nessuna hero, pattern SaaS, placeholder fotografico necessario, glow/glass/parallax o decorazione. Responsive guidato dal contenuto e wrapping, senza breakpoint artificiali. QA richiesta 390×844, 768×1024, 1440×900, con controllo stretto/zoom quando pertinente.
