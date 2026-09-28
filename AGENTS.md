# Istruzioni per gli agenti

Loruni comprende il sito vetrina in `apps/website` e il sito pubblico di documentazione in `apps/design-system`. Il website contiene pagine provvisorie; il sito DS mostra tre direzioni visive esplorative richieste dall'utente. Nessuna è ancora scelta o approvata come design system.

## Prima di intervenire

- Leggere questo file, l'eventuale `AGENTS.md` dell'app e soltanto le guide pertinenti nell'[indice](docs/README.md).
- Controllare lo stato del repository e rileggere i file interessati prima di modificarli. Preservare lavoro non pertinente, skill e configurazioni degli strumenti.
- Usare pnpm; eseguire i comandi dalla root o dal workspace proprietario. Nessun import fra app e nessun package condiviso senza una decisione esplicita.

## Fonti di verità e vincoli

- Manifest e lockfile definiscono le dipendenze; le configurazioni dell'app definiscono la build.
- `src/app/` definisce il routing reale; `src/config/routes.ts` definisce metadata, indicizzazione, sitemap e navigazione; `src/config/site.ts` definisce l'identità tecnica del sito.
- [Architettura](docs/architecture.md) registra le scelte strutturali. In caso di divergenza verificare il codice corrente, correggere la documentazione e distinguere proposta, decisione approvata e stato verificato.
- Per ogni modifica di pagina applicare la checklist in [pagine](docs/pages.md) e [SEO](docs/seo.md), inclusi canonical, robots, sitemap e navigazione.
- Per ogni modifica visuale applicare il contratto [un owner per decisione](docs/visual-ownership.md): identificare l'owner prima di aggiungere un valore, non duplicare gutter/spacing e correggere la causa prima di un override. La regola è approvata; i valori delle tre proposte non lo sono.
- Tailwind è lo styling principale; Motion gestisce interazioni e stato React, GSAP timeline e scroll. Aggiungere codice client soltanto per un comportamento concreto.
- Il brief approvato e queste guide prevalgono sulle skill locali storiche: non creare `PRODUCT.md`, documenti di design o provider globali per soddisfare una vecchia skill. Consultare le guide correnti; applicare MotionConfig solo al confine client che usa Motion.
- Non adottare come ufficiale una delle direzioni esplorative del sito DS senza scelta esplicita dell'utente. Non inventare contenuti commerciali o testi legali. Conservare forme e colori degli asset ufficiali in `Logo/`.
- Eseguire le verifiche pertinenti e riportare esiti e limiti reali. Prove locali non attestano CI o deploy remoti.

## Loruni Brain

Il Brain è dedicato a Loruni. Accedere al vault esclusivamente tramite i tool MCP del server `loruni_brain`; non cercarlo, leggerlo o modificarlo tramite filesystem o shell.

All'inizio chiamare `get_task_context` con la descrizione del task, leggere con `list_files`/`read_file` le note pertinenti e verificare le fonti correnti nel repository. Per attività UI usare anche `check_ui_task`. Prima di scrivere sono richieste entrambe le chiamate; per attività non UI dichiarare `not_applicable` senza simulare una review. Rinnovare il contesto se il gate è scaduto.

Nello stesso task salvare decisioni approvate, vincoli, stato verificato, prove e questioni aperte utili a Loruni. Rileggere le note prima di `write_file`, sostituire lo stato obsoleto con fonti e data e aggiornare `00_System/index.json` quando si aggiungono note. Non registrare proposte come approvazioni.

Alla chiusura usare `append_file` su `00_System/session-log.md` con data, task, file modificati, verifiche/esiti e limiti; rileggere i salvataggi. Non salvare segreti, dati personali superflui o log grezzi. La memoria globale Codex è separata e si modifica solo su richiesta esplicita.

Se MCP non è disponibile, segnalare il blocco di persistenza, senza accedere al vault dal filesystem né dichiarare salvataggi non eseguiti.
