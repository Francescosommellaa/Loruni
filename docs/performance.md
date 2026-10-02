# Performance — budget iniziali

Esperienza/motion 9/10 e priorità 60/40 del brief non eliminano usabilità e budget. Questi sono limiti tecnici iniziali da verificare sulla prima home reale; superamenti importanti richiedono misura, motivo narrativo, alternative e decisione documentata.

| Voce | Budget/obiettivo iniziale |
| --- | --- |
| Core Web Vitals, p75 separato mobile/desktop | LCP ≤2.5s, CLS ≤0.1, INP ≤200ms |
| JavaScript iniziale landing | ≤180KiB gzip, inclusi runtime framework; GSAP fuori dal percorso iniziale |
| Motore motion differito | ≤70KiB gzip per GSAP+ScrollTrigger, caricato solo dal consumer reale |
| Immagine dominante futura, mobile | ≤250KiB come punto di partenza; ratio/spazio riservato, dimensioni responsive, niente lazy sull'LCP |
| Video | Nessuno in Fase 01; futuro poster ≤150KiB, segmento iniziale ≤1.5MiB, caricamento secondo visibilità/rete, controllo e fallback |
| Font | Due WOFF2 latini variabili locali, totale ≤100KiB; metriche fallback e precaricamento Next |
| Script terze parti | Zero nella foundation; ogni introduzione ha un costo e una necessità espliciti |
| Motion quando esisterà | Nessun loop continuo senza scopo; target lavoro JS animazioni ≤4ms/frame su mobile di riferimento, da profilare |

Soglie CWV e distinzione lab/campo: [web.dev](https://web.dev/articles/vitals). Lighthouse/TBT non certificano INP reale. I budget byte e costo animazione sono scelte iniziali del progetto, non requisiti universali né misure già passate in produzione.

## Regole
Preferire transform/opacity; animazioni di layout/repaint soltanto se necessarie e misurate. Nessun will-change globale, RAF infinito o engine pesante inizializzato su superfici statiche. Reduced motion elimina cinematic motion, parallax e smooth scroll futuri mantenendo contenuti/interazioni completi. Niente smooth-scroll library nella foundation.

Misurare la pagina production su mobile meno potente con throttling CPU/rete e su hardware quando disponibile. Conservare report/trace in output o reports/local, fuori Git; riportare metrica, SHA, viewport/device, condizioni e limiti. Non inseguire Lighthouse 100 sacrificando esperienza.

## Strategia CI e visual regression
Ora CI semplice: install deterministico, lint, TypeScript, build. QA browser della foundation e controlli di payload locali; nessuna suite E2E completa o decine di screenshot come baseline.

Fase 03 dispone di una home significativa statica: il payload locale viene misurato e confrontato con i budget; screenshot responsive temporanei verificano il poster test. Composizioni/reference non sono ancora baseline approvate. Alla conferma della prima UI stabile introdurre baseline intenzionali 390×844, 768×1024, 1440×900 e Lighthouse/performance regression in CI, prima di consolidare il motion. Font/media pronti, stato deterministico e reduced motion per capture; mobile sotto throttling e byte iniziali nel confronto. Distinguere baseline versionate da report/screenshot temporanei ignorati. Le soglie si aggiornano con evidenza, non per far passare una regressione.

Analytics privacy-friendly/RUM da scegliere sui bisogni reali; niente GA o consenso preventivo. Core Web Vitals sul campo e costi delle esperienze future rimangono da attestare dopo distribuzione.
