# Fondazione HTML e CSS

2026-10-06. [base.css](../src/styles/base.css) importa font locali e il canonico token.css, che include stili nominati e geometria. I default tecnici completano HTML; non sono un export del CSS interno di Framer. Default visuali conservati: Funnel Sans/Text20, Neutral300 e sfondo Neutral950.

Layer `reset, base` e selettori a bassa specificità: preset e CSS dei componenti fuori dai layer possono sovrascriverli.

- Box-sizing uniforme, margini editoriali azzerati; liste con marcatori e indentazione nativi.
- Controlli con font/colore ereditati; campi contenuti nella larghezza disponibile e textarea ridimensionabile verticalmente. Aspetto nativo e disabled conservati.
- Immagini/video proporzionati, media contenuti, tabelle con bordi collassati. Nessun overflow clipping sul documento.
- Altezza minima viewport con fallback vh/svh, wrapping dei testi, color-scheme dark, niente sintesi di font. Code/pre ereditano il font per rispettare le famiglie autorizzate.
- Link con colore ereditato e underline nativo; preset Link corallo esplicito. Focus da tastiera: outline currentColor 2px, offset 4px. Selezione testo leggibile.
- Hidden rispetta until-found; `.visually-hidden` mantiene contenuti accessibili e si rivela al focus.
- Reduced motion disattiva smooth scroll CSS e animazioni/transizioni decorative marcate `data-motion="decorative"`. Non cambia globalmente le durate, non scrive proprietà GSAP e non sostituisce MotionConfig o il futuro lifecycle delle scene.

Eccezioni !important circoscritte a hidden e reduced motion. Consumer proprietari di layout, spaziatura, decorazioni, stati e animazioni. Nessun container universale, appearance:none globale o nuova logica di scroll.

```tsx
<span className="visually-hidden">Descrizione accessibile</span>
<span data-motion="decorative">Decorazione CSS</span>
```

Base HTML nel catalogo mostra elementi nativi e permette di verificare campi, select, checkbox, pulsante e disabled. Non registra componenti prodotto.

Riferimenti: [text-size-adjust](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-size-adjust), [:focus-visible](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:focus-visible), [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion). text-size-adjust:100% non disabilita lo zoom.

[Prove e limiti](FOUNDATION-VERIFICATION.md): build e browser, nessuna suite. Preferenza reduced motion live e dispositivi fisici non attestati in questa task.
