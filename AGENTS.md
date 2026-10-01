# Loruni — istruzioni operative

Fonte di verità delle regole di sviluppo. Regole vincolanti consolidate dal testo fornito dall'utente il 2026-10-01; mantenerle brevi, verificabili e aggiornate quando emerge un pattern reale.

## Principio di sviluppo

Scrivere il minor codice ragionevolmente necessario, nel posto corretto e leggibile da esseri umani. Preferire semplicità, chiarezza, composizione e convenzioni prevedibili. Non costruire per problemi ipotetici: «potrebbe servire in futuro» non giustifica codice, directory, dipendenze o layer.

Quando un concetto ricorre, identificarlo, standardizzarlo e riutilizzarlo. Prima occorrenza: soluzione locale; seconda: confrontare il concetto; terza: estrarre se è realmente condiviso. Anticipare l'estrazione solo quando il riuso è evidente e stabile. Una piccola duplicazione tra concetti diversi è preferibile a un'astrazione piena di flag ed eccezioni.

## Repo

- `apps/landing`: biglietto da visita pubblico.
- `apps/playground`: campo di prova per layout, componenti e movimento.
- `packages/ui`: fondamenta e componenti realmente condivisi.
- Non importare esperimenti dal playground nella landing. Una scelta esplicita precede la promozione.
- Il playground è richiesto dall'utente dal 2026-10-01; il precedente divieto di laboratorio è superato.
- Conservare modifiche non pertinenti. Leggere `PRODUCT.md`, `docs/design.md` e `docs/architecture.md` prima di cambiare il perimetro.
- Verificare secondo la modifica. Prima del push eseguire `pnpm check` e `git diff --check`; per UI verificare browser, mobile, tastiera e reduced motion dove applicabili.

## Git e igiene del repository

Regole vincolanti approvate dall'utente il 2026-10-01. Versionare source, contratti e configurazione condivisa necessari a comprendere e riprodurre il progetto; escludere segreti, stato locale, cache, build, log, sessioni, output temporanei e configurazioni personali. La policy e le eccezioni concrete sono in `docs/repository-hygiene.md`; `.gitignore` è la fonte eseguibile.

- Analizzare la funzione del file, non il nome, il prefisso `.` o il fatto che sia stato prodotto da un agente. Conservare source/test/fixture/baseline intenzionali, asset pubblici, licenze, pnpm-lock.yaml, workflow, regole AGENTS e configurazioni/skill realmente condivise.
- Non committare valori environment reali, credenziali MCP/deploy/CI o chiavi private, neppure in commenti, documenti, fixture e messaggi Git. Template `.env.example`/`.env.*.example` solo con nomi necessari e valori vuoti; gli esempi di test devono essere palesemente falsi. `NEXT_PUBLIC_*` è pubblico.
- `.gitignore` non elimina file già tracciati né protegge un segreto già pubblicato. Una credenziale committata va considerata compromessa: revocare/ruotare, rimuovere e valutare bonifica della cronologia; non riscrivere o forzare la storia condivisa senza autorizzazione.
- Usare ignore precisi per lo stack reale. Non nascondere genericamente JSON/Markdown/immagini, public/docs, .github, .agents, .codex o .impeccable. Separare configurazione condivisa da runtime personale e verificare sia ciò che deve essere ignorato sia ciò che deve restare visibile.
- Skill terze parti necessarie al workflow condiviso restano repo-local con provenienza/versione quando disponibili; strumenti personali appartengono all'ambiente utente. Non migrare/cancellare tooling o mantenere installazioni divergenti implicitamente. Codex condiviso deve usare percorsi portabili e variabili per credenziali; stato/sessioni restano fuori Git.
- File generati versionati richiedono una ragione concreta documentata. Build e install non devono produrre nuove modifiche Git; prima di aggiungere un tool distinguere source, output, cache e dati personali, poi configurare destinazioni prevedibili e ignore pertinenti.
- Prima del commit rivedere `git status`, diff e staged diff; cercare segreti/file locali e controllare che source/config necessari non siano ignorati. Stage esplicito del solo perimetro autorizzato; preservare modifiche altrui. Non usare ignore/reset/clean per far apparire pulito un checkout con lavoro reale.

## Posizione del codice e dipendenze

- Seguire la mappa in `docs/architecture.md`. Creare le directory previste soltanto quando contengono codice necessario; non aggiungere nuovi contenitori equivalenti.
- Tenere componenti, hook, servizi, tipi e funzioni esclusivi di una feature vicino alla feature. Condividere soltanto concetti realmente usati da consumer distinti.
- `src/app` compone route e layout; una feature non importa le route. La UI generica non importa feature o business logic. Le funzioni pure non dipendono da React o markup. Evitare cicli.
- Le app possono importare `packages/ui`; il pacchetto non importa le app. Non collocare componenti di dominio nella UI generica.
- File focalizzati e nomi semantici: file e cartelle `kebab-case`, componenti e tipi `PascalCase`, funzioni/variabili `camelCase`, hook `useNomeEsplicito`. Costanti di modulo `UPPER_SNAKE_CASE`; rispettare i nomi speciali del framework.
- Import relativi brevi dentro un modulo e `@loruni/ui` per il pacchetto. Se import profondi rendono necessario un alias nell'app, configurare soltanto `@/*` → `src/*`; oggi non è necessario. Usare barrel solo per un'API pubblica piccola e chiara, senza cicli o re-export intermedi inutili.

## Componenti, hook e funzioni

- Ogni componente ha una responsabilità chiara e un'API minima. Dividere per separazioni concettuali, non per raggiungere un numero arbitrario di righe.
- Preferire composizione e primitive native accessibili. Usare variant semantiche soltanto per casi reali; evitare componenti universali e combinazioni di boolean prop.
- Creare un hook solo per vera logica React riutilizzabile o un miglioramento concreto della leggibilità. Non incapsulare automaticamente ogni `useState` o `useEffect`.
- Dare alle funzioni input e risultati prevedibili; limitare i side effect. Preparare trasformazioni significative prima del JSX, mantenendo il render leggibile.
- Non aggiungere wrapper che chiamano soltanto un'altra funzione, provider/context senza necessità, factory, adapter, event bus, plugin interni o sistemi generici di configurazione senza un problema concreto.

## Stato, tipi e valori condivisi

- Preferire variabile locale, stato locale, composizione con parent, poi context e infine store globale. Non introdurre uno store per evitare uno o due passaggi di prop.
- Derivare lo stato calcolabile; mantenere una sola fonte per ogni dato. Gli esperimenti del playground restano locali.
- TypeScript preciso: niente `any` come scorciatoia, generics teorici o copie manuali di tipi derivabili da una fonte affidabile. Validare dati esterni quando necessario; derivare tipi e validazione dagli schemi esistenti senza code generation superflua.
- Centralizzare route, limiti, status, chiavi storage e altri valori solo quando rappresentano concetti condivisi. Un numero occasionale resta vicino al suo uso.
- Mantenere configurazione ambientale nell'app proprietaria e validarla quando appropriato; non leggere variabili d'ambiente in file casuali.

## Servizi, errori e dipendenze

- Usare `fetch` nativo come punto di partenza, nel servizio del dominio proprietario. Stabilire un solo pattern per richieste, parsing, autenticazione ed errori quando nasce il primo accesso dati reale; non creare ora client, repository o wrapper preventivi.
- Gestire gli errori nel livello appropriato, usando i meccanismi del framework quando sufficienti. Non ignorare errori con `catch {}`; separare diagnostica tecnica e messaggi per l'utente.
- Aggiungere una dipendenza solo per un problema concreto che giustifica manutenzione e bundle. Riutilizzare quelle esistenti, senza reinventare problemi complessi già risolti né installare librerie per poche righe standard.
- Correttezza, semplicità e leggibilità precedono le ottimizzazioni. `memo`, caching, lazy loading e altri accorgimenti richiedono una ragione reale.

## Styling, movimento e asset

- Usare CSS e classi semantiche; fondamenta condivise in `packages/ui/src/styles.css`, composizioni specifiche nell'app. Riutilizzare token per valori ricorrenti dello stesso concetto; non globalizzare ogni misura locale.
- I CSS sono la fonte eseguibile dei token; `DESIGN.md` ne documenta uso e direzione. `.impeccable/design.json` è un artefatto derivato, non una seconda fonte da aggiornare indipendentemente.
- Adattare la stessa struttura al responsive, salvo un'esperienza realmente diversa. Conservare HTML semantico, focus, tastiera, touch e movimento ridotto.
- Usare CSS per feedback semplici e Motion per movimento React che lo richiede. GSAP solo per una necessità concreta, senza più librerie per lo stesso comportamento.
- Conservare originali del marchio in `Logo/`; usare gli asset condivisi tramite `packages/ui`. Asset esclusivi restano nell'app. Non duplicare asset senza un vincolo tecnico o un uso concreto.

## Coerenza UI e layout

Regole vincolanti approvate dall'utente il 2026-10-01. Consultare i contratti e lo stato della base in `DESIGN.md` prima di ogni modifica visiva.

- Assegnare un solo proprietario a ogni responsabilità: container per larghezza/gutter, pagina o sezione per ritmo tra blocchi, grid/stack/flex per gap tra fratelli, superficie per padding interno, ruolo tipografico per metriche del testo. Un figlio non replica la responsabilità del parent.
- Distinguere gutter della pagina, distanza tra sezioni, gap del gruppo e padding interno. I componenti riutilizzabili non aggiungono margin esterni di default. Non basare il layout sul margin collapsing.
- Prima di cambiare spazio, ricostruire parent, child e wrapper: gap, padding, margin, line-height, metriche font, baseline, icona e bordi. Correggere la causa nel livello proprietario, non compensarla con offset, margin negativi o transform arbitrari.
- Non sommare padding sullo stesso asse senza intenzione esplicita. Per una sola superficie evitare anche border, background, shadow e radius duplicati tra wrapper e contenuto. Eliminare wrapper senza responsabilità reale.
- Usare una scala condivisa per spacing e ruoli semantici per tipografia, icone, radius, motion e livelli di sovrapposizione. Consumare i token esistenti; introdurre quelli mancanti nella fonte CSS condivisa quando si implementa il concetto. Non copiare gli esempi numerici delle istruzioni come valori approvati né creare scale preventive.
- Mantenere un pattern principale di container; rendere esplicite le sezioni full bleed. Non cambiare il container globale per una sola pagina. La pagina decide posizione e larghezza nel contesto; il componente decide la propria superficie e i controlli interni.
- Definire responsive e relativo proprietario insieme al componente: cosa cambia e a quale soglia. Preferire adattamento al contenuto con grid, minmax, wrapping e clamp; usare soglie documentate del sistema, evitando media query disperse per lo stesso layout.
- Definire un contratto per ogni famiglia realmente presente: Button, campi, superfici, layout e tipografia. Riutilizzare altezza, padding, radius, gap icona e stati della stessa variant. Aggiungere variant semantiche solo per differenze reali; `className` e `style` non devono aggirare abitualmente il contratto.
- Documentare le eccezioni presso il codice e, se sistemiche, in `DESIGN.md`: motivo, proprietario, consumer coinvolti e limiti. Le prove locali del playground restano identificate come esperimenti, senza alterare silenziosamente le fondamenta comuni.
- Usare flusso normale per il layout; absolute soltanto per sovrapposizioni intenzionali, decorazioni e dimostrazioni che lo richiedono. Preferire dimensioni guidate dal contenuto, min-height o ratio ai contenitori di testo con altezza fissa; definire ratio e fit dei media quando necessari.
- Ogni animazione ha un proprietario: controllo per feedback, superficie per ingresso/uscita, sezione per reveal, navigazione per transizioni di pagina. Evitare delay, transform e fade sommati tra parent e child. Usare durate/easing condivisi e rispettare movimento ridotto.
- Prima di aggiungere z-index, transform, opacity, filter o isolation, verificare gli stacking context. Usare livelli semantici quando servono, senza valori enormi per vincere conflitti. Risolvere specificità e ownership; non usare `!important` come patch visiva.
- Il CSS condiviso contiene soltanto fondamenta, primitive e regole comuni, senza fix di pagina. Le composizioni appartengono all'app o alla feature; non distribuire la stessa proprietà fra globale, componente, inline e override locali.
- Considerare default, hover, active, focus, disabled, selected, loading ed error quando applicabili. Preservare focus accessibile; riutilizzare pattern coerenti per vuoto/caricamento/errore quando esistono consumer reali.
- Verificare contenuti corti/lunghi, assenti o numerosi e media mancanti. Per modifiche condivise cercare tutti i consumer e confrontare pagine analoghe; non riparare regressioni globali con patch locali senza localizzarne la causa.
- Quando cambia una decisione sistemica, implementarla nel proprietario, allineare i consumer interessati e aggiornare `DESIGN.md` nella stessa task. Una decisione precedente resta il default; nuove primitive richiedono un pattern frequente, stabile e utile.

Preflight UI: individuare parent, proprietari di larghezza/gutter/gap/padding, componente o pattern più vicino, token e responsive; consultare decisioni precedenti prima di implementare.

Postflight UI: controllare spacing e superfici doppi, valori fuori sistema, wrapper/override, contratti, contenuti variabili, mobile/tablet/desktop, consumer condivisi, stati e accessibilità. Correggere i problemi e registrare le decisioni; il superamento di lint/build non attesta coerenza visiva.

## SEO, ricerca e discovery AI

Regole vincolanti approvate dall'utente il 2026-10-01. `docs/seo.md` è la fonte delle decisioni sistemiche, delle policy per ambiente e dei limiti attuali. SEO e discovery fanno parte dell'architettura e della definizione di done di ogni pagina pubblica.

- Prima di creare o modificare una pagina consultare `docs/seo.md`, routing, metadata ereditati, link interni, robots/header e configurazione corrente. Definire intento distinto, URL stabile, indexability, title/description/H1, canonical, accesso tramite link, sitemap, social preview e schema applicabile.
- Usare Next.js nativo e una sola fonte per origine pubblica, dati locali e contenuti di pagina; derivare gli output tecnici da queste fonti. Non duplicare inventari o configurazioni, aggiungere librerie SEO preventive o usare localhost/preview come fallback di produzione.
- Loruni è un luogo fisico; città, categoria e dati operativi richiedono conferma. Metadata, UI e JSON-LD devono dire la stessa cosa. Non inventare indirizzi, servizi, eventi, recensioni, FAQ, profili o pagine per keyword. Preservare HTML leggibile, accessibilità e performance.
- Distinguere scansione, indicizzazione e protezione d'accesso; verificare ogni ambiente. Playground fuori dalla discovery pubblica. Separare permessi per ricerca AI e addestramento e verificare i crawler su documentazione ufficiale, comprese eventuali regole CDN/WAF.
- Rinomine/rimozioni aggiornano insieme redirect/status, link, canonical, sitemap e schema. Dopo le modifiche verificare HTML e risposte effettive secondo il perimetro; automatizzare invarianti tecnici utili, senza automatizzare ciecamente il significato editoriale.
- Aggiornare `docs/seo.md` quando cambia una decisione sistemica. Lint/build non attestano indicizzazione, SEO di produzione, rich result o visibilità AI; registrarne evidenze e limiti senza simulare verifiche esterne.

## Workflow, test e manutenzione

- Prima di scrivere: leggere queste regole, individuare la casa del codice, cercare implementazioni analoghe e scegliere la soluzione più semplice coerente con il progetto.
- Modificare solo quanto necessario. Niente rinomine, riformattazioni o refactor di aree non pertinenti; preservare il lavoro altrui.
- Testare comportamenti importanti, business logic, trasformazioni, edge case, flussi critici e regressioni. Non aggiungere test di dettagli interni, speculari all'implementazione o senza valore; scegliere verifiche proporzionate alla modifica.
- Collocare i test vicino al modulo (`nome.test.ts`/`.tsx`); eventuali flussi browser ripetibili in `apps/<app>/tests`. Introdurre runner e infrastruttura solo al primo bisogno reale.
- Prima di chiudere: cercare duplicazioni, astrazioni inutili, nomi vaghi, file fuori posto, dipendenze/cicli, stato duplicato, import e codice morto. Correggere i problemi pertinenti prima di dichiarare completata la task.
- Eliminare implementazioni sostituite, CSS/import inutilizzati, codice commentato e workaround obsoleti. Git conserva la storia.
- Commentare motivazioni, vincoli e workaround non ovvi; niente commenti che ripetono il codice. Un TODO deve indicare cosa manca, perché e quale condizione lo risolve.
- Quando cambia un pattern: aggiornare la regola, migrare il codice interessato e rimuovere il precedente. Non lasciare soluzioni parallele per lo stesso problema.
- Documentare solo decisioni utili al lavoro futuro. Unire regole ridondanti e verificare periodicamente, mentre il progetto cresce, che directory, responsabilità e dipendenze restino coerenti.

## Loruni Brain

Il Brain configurato è dedicato a Loruni. Non versare dati di altri progetti né applicarne i vincoli ad altri progetti.

Usare soltanto i tool MCP del server `loruni_brain` per il vault: mai shell o filesystem. A inizio task chiamare `get_task_context`, leggere le note pertinenti e verificare le fonti correnti nella repo. Per UI usare `check_ui_task`; per task non UI chiamarlo dichiarando `not_applicable`, senza simulare review.

Salvare nella stessa task decisioni approvate, vincoli, architettura, componenti, contenuti confermati, bug, prove e questioni aperte. Rileggere le note prima di `write_file`, sostituire lo stato obsoleto con fonti e data, aggiornare `00_System/index.json` quando si aggiungono note. Non trasformare proposte in approvazioni.

Alla fine usare `append_file` su `00_System/session-log.md` con data, task, file modificati, verifiche/esiti e limiti. Rileggere i salvataggi. Non memorizzare segreti, dati personali superflui o log grezzi. La memoria globale Codex si modifica solo su richiesta esplicita.

Se MCP non è disponibile, segnalare il blocco senza accedere al vault tramite filesystem e senza dichiarare salvataggi non eseguiti.
