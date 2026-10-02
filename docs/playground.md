# Playground — banco delle fondamenta

App interna indipendente sulla porta 3001. Fase 01: tema chiaro/scuro locale, Button/Switch con stato e prova su richiesta del ciclo di vita GSAP/ScrollTrigger. Nessuna animazione decorativa, tab di layout o modello della home.

Verifica GSAP carica l'entrypoint separato e mostra registrazione, preferenza reduced motion e numero di trigger attivi (zero nella prova). Rimuovi prova fa unmount/cleanup; riapertura esercita il ciclo senza registrazioni duplicate. Caricamento/errore sono visibili, con riprova tramite rimozione/riapertura. La preferenza OS aggiorna il matchMedia attivo.

Fondazioni comuni in @loruni/ui, composizione/controlli di prova locali. Non importare dal playground nella landing. Le prove non sono scelte approvate; promozione solo dopo una decisione esplicita e QA nel contesto reale.

Noindex/nofollow nell'HTML e in X-Robots-Tag; robots consente scansione per leggere la direttiva. Nessuna sitemap o link pubblico. Questo non protegge materiale riservato: access control da configurare nell'hosting prima di pubblicarlo.
