# Playground: prove e promozione

## Banco iniziale

- Layout: composizioni editoriale, griglia e righe con contenuti dimostrativi.
- Componenti: pulsante principale/secondario/disabilitato, contatore di feedback, switch attivo e disabilitato.
- Movimento: posizione e rotazione reversibili, durata 80–300 ms, interruzione con una nuova destinazione e reduced motion.
- Tema: variante chiara/scura locale al playground.

Tab accessibili con frecce sinistra/destra, Home ed End. Switch utilizzabili con tastiera. Le prove non si salvano automaticamente tra le sessioni: il banco riparte dal proprio stato iniziale.

## Aggiungere una prova

Creare componenti e stili sotto `apps/playground/src`, indicando cosa si sta confrontando. Usare contenuti realistici o dichiaratamente dimostrativi. Documentare limiti e risultato, mantenendo gli esperimenti indipendenti dalla landing.

## Rendere definitiva una scelta

1. Confrontare le varianti nel playground.
2. Ricevere una scelta esplicita dall'utente.
3. Aggiornare `docs/design.md` e il Brain con decisione, motivazione e prove.
4. Estrarre il materiale riutilizzabile in `packages/ui` quando serve realmente.
5. Integrare nella landing e verificare di nuovo sul suo contesto desktop/mobile.

Il risultato di un esperimento non aggiorna automaticamente la landing, la palette globale o le approvazioni. I tempi iniziali di movimento sono valori operativi provvisori.
