# Ownership delle decisioni visive

**Regola approvata dall'utente il 28 settembre 2026:** una responsabilità visuale o strutturale ha un solo owner. Una modifica alla decisione deve propagarsi ai consumer senza correzioni manuali in cascata. Questo contratto vale per website, sito DS e futuri consumer. Le tre direzioni nel sito DS restano proposte: questa regola architetturale non ne approva valori, token o componenti.

## Contratto degli owner

| Concern | Owner | Non controlla |
| --- | --- | --- |
| Dimensione disponibile, `dvh`/`svh` quando servono | Viewport e pattern di pagina | Padding dei componenti |
| Gutter laterale e larghezza massima della pagina | `PageContainer` | Gap interni, misura del testo |
| Separazione verticale fra sezioni | `Section` o parent di pagina | Gutter laterale già gestito |
| Distribuzione delle colonne e gap fra figli | `Grid` / `Stack` / parent | Padding interno dei figli |
| Larghezza di lettura | `Prose` o ruolo del contenuto lungo | Larghezza della pagina |
| Padding e struttura interna | Component, con varianti esplicite | Margine rispetto ai sibling, gutter pagina |
| Famiglia, dimensione, peso, leading, tracking | Ruolo tipografico | Spaziatura esterna del componente |
| Colori | Token semantici, dopo l'approvazione della direzione | Scelte primitive locali se il ruolo esiste |
| Raggio, bordo ed elevazione | Foundation semantica o variante ufficiale | Aggiustamenti arbitrari nelle pagine |
| Breakpoint | Sistema responsive della direzione scelta | Breakpoint locali per compensare un layout errato |
| Ordine degli strati | Scala z-index | `z-index` inventati dai componenti |
| Durata ed easing UI | Linguaggio motion | Valori nuovi per ogni consumer |
| Microinterazioni React | Motion, nel confine client che le usa | Timeline e scroll scenografici |
| Sequenze e scroll motivati | Pattern GSAP | Stati ordinari dei controlli |

La gerarchia di responsabilità è `Viewport → Page → PageContainer → Section → Grid/Stack → Component → Element`. Ogni livello aggiunge solo la propria decisione. Il parent controlla la relazione fra figli; il componente controlla il proprio interno.

## Container, larghezze e composizione

Una pagina standard usa un `PageContainer` per regione. Esso applica **una sola volta** gutter laterale e max-width. `Section` gestisce il ritmo verticale, `Grid`/`Stack` gap e colonne, `Card` il padding interno; la card riempie la cella disponibile. Per contenuto lungo, `Prose` limita la misura del testo senza cambiare la larghezza della pagina. La larghezza del viewport appartiene al browser, non alla card.

`PageContainer` dentro `PageContainer` è vietato per impostazione predefinita. Sono leciti container **fratelli** all'interno di regioni a tutta larghezza: per esempio una superficie `FullBleed` occupa il viewport e un `PageContainer` interno allinea i suoi contenuti al resto della pagina. `FullBleed` è un pattern esplicito; non si simula con margini negativi calcolati per annullare il gutter. Una variante di larghezza o densità deve essere visibile nell'API o nel nome del pattern, non nascosta in un override di pagina.

| Primitive | Nesting ammesso | Regola |
| --- | --- | --- |
| `PageContainer` | Dentro una superficie `FullBleed`, non dentro un altro `PageContainer` | Un solo gutter per il contenuto della regione |
| `Section` | Dentro `PageContainer`; sottosezioni semantiche solo se ciascuna ha un ruolo distinto | Non riapplica il gutter |
| `Grid` / `Stack` | Possono contenere altri layout quando cambia realmente la relazione fra figli | Ogni parent gestisce solo i propri sibling |
| `Prose` | Dentro una cella o sezione; non dentro un altro `Prose` | Limita solo la misura di lettura |
| `Card` | Dentro un layout; card annidate vietate di default | Gestisce solo contenuto e padding interni |
| `FullBleed` | Regione esterna con `PageContainer` interno | Non usa margini negativi di compensazione |

Un componente riutilizzabile non imposta margini esterni né conosce pagina, gutter, numero di sibling o distanza dalla sezione precedente. Hero a altezza viewport, overlay e layer devono essere pattern nominati con responsabilità chiare; su mobile scegliere `dvh` o `svh` in base al comportamento richiesto, senza disseminare `height: 100vh`.

## Invarianti

1. Ogni regione standard ha un solo owner del gutter e della max-width.
2. `PageContainer` non è annidato in un altro `PageContainer`.
3. Parent o layout controllano il gap fra sibling; i componenti controllano solo padding e gap interni.
4. Una variazione globale si cambia nel suo owner e raggiunge tutti i consumer senza patch locali.
5. Ruoli tipografici, colori semantici, raggi, layer z-index e motion approvati non vengono ricomposti indipendentemente nei componenti.
6. Una variante rappresenta una differenza semantica reale ed è nominata; non nasce da una compensazione numerica.
7. Un'eccezione è intenzionale, localizzata, motivata e documentata quando non è ovvia; non diventa una seconda regola globale implicita.

Questi invarianti descrivono il **sistema definitivo** e guidano già il codice esplorativo. Non richiedono di creare oggi tutti i token, componenti o layer non ancora scelti. Un nuovo token nasce quando un valore ricorre o esprime una decisione di sistema, non per ogni numero isolato.

## Modifiche e diagnosi per gli agenti

Prima di aggiungere padding, margin, gap, width, max-width, colore, font, raggio, bordo, ombra, z-index, breakpoint o motion, identificare l'owner. Cercare il valore esistente e verificare se il nuovo valore duplicherebbe un parent, un ruolo o una variante. Quando il layout sembra errato, risalire nell'ordine: **token/ruolo → primitive di layout → parent → componente → eventuale eccezione**. Correggere la causa; non aggiungere un valore opposto al figlio.

Valori come `ml-[7px]`, `w-[calc(...)]` e piccoli `translate-x` sono sospetti se compensano una scelta più in alto. Sono ammessi solo per un caso unico e intenzionale, con ragione comprensibile e senza introdurre una convenzione globale nascosta. Prima di creare una nuova convenzione, leggere le foundation, i token, le primitive e le API esistenti. Dopo una modifica globale, controllare più pagine e breakpoint: se richiedono ritocchi manuali, l'ownership è probabilmente sbagliata.

## Stato nell'anteprima DS

Il sito DS usa la classe `page-container` in `src/styles/globals.css` come owner del gutter e della larghezza di ogni regione. `direction-canvas` è la superficie full-bleed; il suo container interno allinea header, hero e sezioni. Le regioni utility e valutazione usano container fratelli, senza nesting. `demo-section` e `system-section` governano solo lo spazio verticale; le griglie governano i gap; i pannelli governano il padding interno. I ruoli colore delle proposte hanno un solo valore in `src/data/system-profiles.ts`: campioni e CSS li ricevono da lì. I valori di layout delle tre proposte restano CSS esplorativo, descritto nel profilo testuale; saranno riconciliati in foundation e token soltanto dopo la scelta. Questa struttura non è ancora una libreria di primitive condivisa con il website.
