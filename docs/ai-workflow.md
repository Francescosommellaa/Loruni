# Workflow AI

Questa guida descrive come svolgere un task nel repository. Le regole operative vincolanti restano in [AGENTS.md](../AGENTS.md) e negli `AGENTS.md` delle app.

## Inizio e decisioni

1. Recuperare il contesto Loruni tramite `loruni_brain.get_task_context`, leggere le note pertinenti esclusivamente via MCP e verificare le fonti correnti nel repository.
2. Leggere le istruzioni dell'app e scegliere le sole guide pertinenti dall'[indice](README.md). Ispezionare stato Git, manifest, configurazioni e file coinvolti.
3. Distinguere stato verificato, decisione approvata e proposta. Chiarire soltanto le decisioni materiali non ricavabili da codice o istruzioni esistenti.
4. Per UI usare `check_ui_task`; per task non UI dichiarare `not_applicable` quando richiesto dal gate di scrittura Brain. Non simulare review o prove.

## Implementazione

Lavorare nel workspace proprietario con pnpm. Preservare le modifiche non pertinenti e rileggere i file prima di cambiarli. Le app restano indipendenti: non estrarre package o introdurre generatori. Le tre direzioni nel sito DS sono esplorazioni richieste dall'utente, non un design system approvato da applicare al website.

Le pagine restano server salvo interazione concreta. Usare Tailwind per styling, Motion per stato e interazioni React, GSAP per timeline e scroll. Asset e contenuti devono derivare da fonti confermate. Per modifiche a route seguire sempre [pagine](pages.md) e [SEO](seo.md).

Per qualsiasi modifica a layout o stile, seguire [ownership visiva](visual-ownership.md): trovare prima il livello proprietario, cercare il valore esistente, controllare duplicazioni e impatto sui consumer, poi modificare la source of truth. Le eccezioni devono essere nominate e motivate; non correggere un parent con una compensazione locale nel child.

## Verifica e report

Eseguire installazione congelata quando cambia il lockfile, lint, typecheck e build dei workspace interessati. Cambi root o dipendenze comuni richiedono la verifica di entrambe le app. Non installare framework o creare suite automatiche per questa foundation.

Per cambi UI osservare il comportamento in browser: desktop/mobile, tastiera, focus, skip link, semantica e assenza di overflow. Per errori verificare recupero e 404. Per SEO controllare HTML, header, asset, robots e sitemap nell'ambiente pertinente; eliminare ogni prova temporanea e ripetere i controlli invalidati dall'ultima modifica.

Il report deve indicare cosa è cambiato, comandi e risultati effettivi, ambiente e limiti. Distinguere prove locali da CI e deploy; non dichiarare riuscite verifiche non eseguite o relative a uno stato precedente.

## Persistenza Brain e chiusura

Nello stesso task aggiornare tramite MCP le note con decisioni approvate, vincoli, architettura, stato verificato, prove e questioni aperte durevoli. Rileggere prima di scrivere, rimuovere lo stato obsoleto e annotare fonti e data. Le proposte restano proposte; aggiornare l'indice se si aggiungono note.

Appendere al session log data, task, file modificati, esiti e limiti, quindi rileggere i salvataggi. Se il gate è scaduto, recuperare nuovamente il contesto e la classificazione UI prima di scrivere. Se MCP manca, segnalare il blocco senza usare il filesystem del vault. Non riversare nel Brain dati di altri progetti né modificare la memoria globale Codex senza richiesta esplicita.
