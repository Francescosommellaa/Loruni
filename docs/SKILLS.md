# Skill disponibili per Loruni

Verifica: 2026-10-05, Europe/Rome. Installazione richiesta dall'utente, selezionata per utilità e compatibilità. Le skill sono globali in `C:/Users/FRA/.codex/skills` oppure già presenti in `C:/Users/FRA/.agents/skills`; non sono dipendenze del sito. Le nuove skill saranno disponibili dal prossimo turno.

## Nuove installazioni

| Skill | Fonte ufficiale | Uso utile per Loruni | Stato verificato |
| --- | --- | --- | --- |
| impeccable | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | Audit, estrazione e verifica di responsive, accessibilità e consistenza | Pacchetto Codex completo; launcher Windows `engine-probe` risponde `impeccable-engine 0.1.11` |
| ui-ux-pro-max | [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | Ricerche mirate su UX, focus, React e gestione degli effetti | Python locale: ricerca UX e ricerca stack React riuscite; nessuna libreria Python aggiuntiva |
| hallmark | [Nutlope/hallmark](https://github.com/Nutlope/hallmark) | Secondo parere su audit e studio di riferimenti; future richieste creative | Istruzioni e riferimenti installati; uso di audit senza servizi di generazione |
| scroll-craft | [nateherkai/scroll-craft](https://github.com/nateherkai/scroll-craft) | Riferimenti su composizione, profondità, scroll, mobile e verifica dei fotogrammi | Riferimenti utilizzabili; pipeline video non pronta: FFmpeg completo assente, playwright-core non risolve dal progetto. Chrome e Node presenti |
| design-token | [Owl-Listener/designer-skills](https://github.com/Owl-Listener/designer-skills) | Organizzare token estratti da valori Framer e consumer reali | Skill autonoma di istruzioni |
| handoff-spec | stessa raccolta Owl-Listener | Specifiche di misure, asset, stati e animazioni per ogni slice | Skill autonoma di istruzioni |
| design-qa-checklist | stessa raccolta Owl-Listener | Confrontare implementazione e specifiche Framer | Skill autonoma di istruzioni |

Il nome indicato dall'utente `owl-listner/design-skills` non esiste pubblicamente (404). La ricerca ha identificato la raccolta ufficiale `Owl-Listener/designer-skills`. Installate soltanto le tre skill sopra, non tutta la suite o i plugin per altri assistenti.

## Già presenti, senza duplicazione

[Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill): `design-taste-frontend`, `imagegen-frontend-web`, `imagegen-frontend-mobile`, `brandkit`, in `C:/Users/FRA/.agents/skills`. I quattro SKILL.md coincidono con la revisione ufficiale verificata dopo normalizzazione CRLF/LF. Il tool imagegen è disponibile nella sessione; nessuna immagine generata durante l'installazione. La skill mobile produce concept di app, non il responsive del sito. Brandkit e imagegen restano per richieste di asset/concept autorizzate, senza sostituire fotografie o identità Framer.

Tre skill di progetto sono già in `.agents/skills`: `loruni-framer-inventory`, `loruni-react-port`, `loruni-motion-ownership`. Guidano rispettivamente estrazione della fonte, port fedele e ownership delle animazioni.

## Confini di applicazione

Framer resta la fonte visiva e comportamentale. Le preferenze generiche delle skill non cambiano font, palette, breakpoint, testo, composizione o animazioni da replicare. UI/UX Pro Max serve per ricerche mirate; la sua generazione di design-system non è il workflow del port 1:1. Hallmark study estrae una direzione, non certifica una copia 1:1: il port usa inventario e verifiche delle skill Loruni. Impeccable si applica al perimetro richiesto; nessun init, hook o variante visiva eseguiti ora.

Scrollcraft resta una fonte di riferimento. Il suo engine non viene importato né copiato nell'app: GSAP/ScrollTrigger conserva la futura ownership dello scroll e Motion quella delle microinterazioni. KIE_AI_API_KEY non configurata; serve soltanto per la generazione opzionale di asset Scrollcraft. Nessuna chiamata a servizi a pagamento, installazione FFmpeg o modifica di credenziali eseguita.

## Provenienza e controlli

Installazione tramite `skill-installer/scripts/install-skill-from-github.py`, con revisioni immutabili. Manifest completo in [skill-installation.json](skill-installation.json): repository, commit, percorso upstream, directory installata e digest dei file. Licenze incluse; NOTICE di Impeccable conservato.

Tutte le sette nuove skill passano `python -X utf8 .../skill-creator/scripts/quick_validate.py`; i riferimenti Markdown locali del loro SKILL.md sono presenti. Hallmark ha due adattamenti locali dichiarati nel manifest: `version` spostato sotto `metadata` per lo schema Codex; tre collegamenti a documentazione fuori dal pacchetto sostituiti con URL upstream alla revisione installata. Il primo tentativo di validazione senza UTF-8 falliva per la codepage Windows; non è stato modificato il validatore.

Questo verifica installazione, payload e prove indicate, non tutti i workflow delle skill. Il doctor Scrollcraft termina con exit 1 per FFmpeg assente; non è una pipeline verificata. Nessuna modifica al rendering o al manifest dell'app. Il digest dei 21 input del bootstrap resta `4df715dc5ec3dffdbf02e5b28dda72e93e63063494a190854f25591c10927de1`, ricontrollato a HEAD `ddf60f332ec9a6fd07baf7c6447bb75cfccd4ca6`, comparso durante questa task senza commit dell'agente.
