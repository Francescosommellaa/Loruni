# Catalogo vivo Loruni

Pagina richiesta dall'utente il 2026-10-06: [design system locale](http://127.0.0.1:5173/design-system). Link anche nella schermata root. Documentazione visiva del codice attuale, distinta dal port delle pagine Framer.

## Copertura attuale

- 19 colori, con nome semantico/variabile/valore e campioni su fondo scuro/chiaro per leggere le trasparenze.
- 11 preset di testo usando le classi reali: dimensioni responsive effettive, dettagli nativi con intervalli/line-height/tracking/paragraph spacing, OpenType e enfasi definite.
- Funnel Display, Funnel Sans e IBM Plex Sans: 12 varianti locali mostrate con peso e stile reali.
- Preset Link interattivo e tre query responsive originali.
- 25 spaziature, 3 raggi, bordi, ombra di focus, insets/gap composti e layout responsive da consumer Framer verificati. Base HTML interattiva per gli elementi nativi, con esempi di padding/gap/margin reali nel catalogo.
- Valori della fonte per proprietà; configurazioni motion tween/spring; ricette delle varianti e dei loro elementi nominati, default dei controlli. Sono riferimenti, non componenti React implementati.
- Sezione componenti: vuota finché non portiamo componenti reali. I controlli del catalogo non sono componenti del prodotto.

## Crescita

src/pages/design-system/DesignSystemPage.tsx legge colors/typography/fonts/links/breakpoints/spacing/insets/gaps/radii/borders/shadows/layout da src/styles/token.ts. I token già appartenenti a queste categorie appaiono automaticamente dopo la generazione. Colori di nuovi gruppi hanno anche un fallback Altri colori; nuove categorie di token richiedono una sezione dedicata. Snapshot e policy non entrano nel bundle.

Per ogni nuovo componente importare l'implementazione reale e aggiungere una voce a [componentExamples.ts](../src/pages/design-system/componentExamples.ts): name, description, source e examples. Ogni esempio ha name e preview (ReactNode). Usare createElement da React oppure JSX rinominando il file con estensione .tsx quando serve; non duplicare il markup del componente. Mostrare varianti e stati implementati, comprese interazioni e disabled/error/loading quando esistono. Stato controllato e interattivo possono vivere in un piccolo componente di demo locale. Aggiornare il catalogo nella stessa task del componente.

## Perimetro e verifica

CSS della pagina isolato in DesignSystemPage.css; dimensioni della documentazione non promosse a token di prodotto. Nessuna nuova dependency/router/runtime/motion. /design-system è selezionata in App dal pathname; anchor native per le sezioni, navigazione al reload affidata al fallback HTML di Vite. Hosting futuro deve mantenere il fallback o prerenderizzare la route.

Rispetta le correzioni utente: tre famiglie, nessun UUID nel runtime, nessuna suite aggiunta. L’ultima richiesta autorizza i cinque test inventory preesistenti, eseguiti; prove correnti in TOKEN-AUDIT.md. Verifica browser e build documentata in [FOUNDATION-VERIFICATION.md](FOUNDATION-VERIFICATION.md) (stato corrente); [DESIGN-SYSTEM-VERIFICATION.md](DESIGN-SYSTEM-VERIFICATION.md) (creazione iniziale). Fonte token e limiti in [TOKENS.md](TOKENS.md).
