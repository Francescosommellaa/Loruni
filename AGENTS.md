# Loruni — istruzioni operative

## Repo

- `apps/landing`: biglietto da visita pubblico.
- `apps/playground`: campo di prova per layout, componenti e movimento.
- `packages/ui`: fondamenta e componenti realmente condivisi.
- Non importare esperimenti dal playground nella landing. Una scelta esplicita precede la promozione.
- Il playground è richiesto dall'utente dal 2026-10-01; il precedente divieto di laboratorio è superato.
- Conservare modifiche non pertinenti. Leggere `PRODUCT.md`, `docs/design.md` e `docs/architecture.md` prima di cambiare il perimetro.
- Verificare secondo la modifica. Prima del push eseguire `pnpm check` e `git diff --check`; per UI verificare browser, mobile, tastiera e reduced motion dove applicabili.

## Loruni Brain

Il Brain configurato è dedicato a Loruni. Non versare dati di altri progetti né applicarne i vincoli ad altri progetti.

Usare soltanto i tool MCP del server `loruni_brain` per il vault: mai shell o filesystem. A inizio task chiamare `get_task_context`, leggere le note pertinenti e verificare le fonti correnti nella repo. Per UI usare `check_ui_task`; per task non UI chiamarlo dichiarando `not_applicable`, senza simulare review.

Salvare nella stessa task decisioni approvate, vincoli, architettura, componenti, contenuti confermati, bug, prove e questioni aperte. Rileggere le note prima di `write_file`, sostituire lo stato obsoleto con fonti e data, aggiornare `00_System/index.json` quando si aggiungono note. Non trasformare proposte in approvazioni.

Alla fine usare `append_file` su `00_System/session-log.md` con data, task, file modificati, verifiche/esiti e limiti. Rileggere i salvataggi. Non memorizzare segreti, dati personali superflui o log grezzi. La memoria globale Codex si modifica solo su richiesta esplicita.

Se MCP non è disponibile, segnalare il blocco senza accedere al vault tramite filesystem e senza dichiarare salvataggi non eseguiti.
