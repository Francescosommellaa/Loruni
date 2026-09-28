import Image from "next/image";
import { systemProfiles, ruleGroups } from "@/data/system-profiles";
import type { Direction } from "@/data/directions";

const sampleParagraph = "Un testo più lungo mette alla prova misura, ritmo e gerarchia. Questo contenuto è illustrativo: attività, luoghi, date e informazioni operative saranno pubblicati solo dopo conferma.";

export function SystemLab({ direction }: { direction: Direction }) {
  const profile = systemProfiles[direction.id];
  const tone = direction.id === "night" ? "light" : "dark";

  return (
    <>
      <section className="system-section component-lab" id="laboratorio" aria-labelledby="lab-title">
        <div className="system-section-intro">
          <span>Componenti e stati</span>
          <h2 id="lab-title">Una grammatica, molti usi.</h2>
          <p>Campioni comparabili. Alcuni controlli sono utilizzabili; modal, tooltip e toast sono anteprime statiche, non funzioni pubblicate.</p>
        </div>

        <div className="lab-layout">
          <section className="lab-group" aria-labelledby="lab-actions-title">
            <h3 id="lab-actions-title">Azioni</h3>
            <div className="lab-action-row">
              <a className="demo-button demo-button-primary" href="#contesti">Azione primaria</a>
              <a className="demo-button demo-button-secondary" href="#regole">Secondaria</a>
              <a className="lab-icon-button" href="#palette" aria-label="Vai ai colori">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              <a className="lab-text-link" href="#contesti">Link testuale <span aria-hidden="true">→</span></a>
            </div>
            <div className="lab-state-row" aria-label="Stati dimostrativi">
              <span className="lab-badge">Badge</span><span className="lab-tag">Tag</span>
              <button className="demo-button demo-button-disabled" type="button" disabled>Disabilitato</button>
              <button className="demo-button lab-loading" type="button" disabled>Caricamento…</button>
            </div>
            <p className="lab-caption">Hover, pressione e focus dei link attivi si possono provare con mouse e tastiera. Gli stati di caricamento e disabilitazione sono campioni fissi.</p>
          </section>

          <section className="lab-group" aria-labelledby="lab-form-title">
            <h3 id="lab-form-title">Campi e scelta</h3>
            <div className="lab-form-grid">
              <div className="lab-field"><label htmlFor={`lab-text-${direction.id}`}>Nome dimostrativo</label><input id={`lab-text-${direction.id}`} type="text" placeholder="Scrivi qui" /></div>
              <div className="lab-field"><label htmlFor={`lab-select-${direction.id}`}>Categoria</label><select id={`lab-select-${direction.id}`} defaultValue=""><option value="">Scegli una voce</option><option value="informazioni">Informazioni</option><option value="eventi">Eventi</option></select></div>
              <div className="lab-field"><label htmlFor={`lab-error-${direction.id}`}>Campo con errore</label><input id={`lab-error-${direction.id}`} aria-invalid="true" aria-describedby={`lab-error-help-${direction.id}`} placeholder="Dato mancante" /><p className="lab-error" id={`lab-error-help-${direction.id}`}>Inserisci un valore prima di continuare.</p></div>
              <div className="lab-field"><label htmlFor={`lab-disabled-${direction.id}`}>Campo disabilitato</label><input id={`lab-disabled-${direction.id}`} disabled value="Non disponibile" readOnly /></div>
            </div>
            <div className="lab-choice-row">
              <label><input type="checkbox" /> Checkbox</label>
              <fieldset><legend>Radio</legend><label><input type="radio" name={`choice-${direction.id}`} defaultChecked /> A</label><label><input type="radio" name={`choice-${direction.id}`} /> B</label></fieldset>
              <label className="lab-switch"><input type="checkbox" role="switch" /> Toggle</label>
            </div>
          </section>

          <section className="lab-group" aria-labelledby="lab-feedback-title">
            <h3 id="lab-feedback-title">Feedback e contenitori</h3>
            <div className="lab-feedback-row"><p className="lab-feedback lab-success"><strong>Successo</strong><span>Stato confermato, esempio.</span></p><p className="lab-feedback lab-warning"><strong>Attenzione</strong><span>Controlla il dato, esempio.</span></p><p className="lab-feedback lab-error-state"><strong>Errore</strong><span>Correggi il campo, esempio.</span></p><p className="lab-feedback lab-info"><strong>Info</strong><span>Dettaglio utile, esempio.</span></p></div>
            <div className="lab-pattern-row">
              <div className="lab-toast"><span className="lab-badge">Toast · statico</span><p>Modifica dimostrativa completata.</p></div>
              <figure className="lab-dialog"><figcaption>Modal · anteprima statica</figcaption><div><strong>Confermare un&apos;azione?</strong><p>Un dialog futuro richiederà focus gestito e uscita da tastiera.</p><span className="lab-faux-action">Conferma</span></div></figure>
              <div className="lab-avatar-example"><span className="lab-avatar" aria-label="Avatar illustrativo">AB</span><span>Profilo dimostrativo</span></div>
            </div>
          </section>

          <section className="lab-group" aria-labelledby="lab-disclosure-title">
            <h3 id="lab-disclosure-title">Orientamento</h3>
            <nav className="lab-tabs" aria-label="Esempio di navigazione a schede"><a href="#scenario-content">Contenuto</a><a href="#scenario-events">Eventi</a><a href="#scenario-faq">FAQ</a></nav>
            <div className="lab-disclosure-row"><details><summary>Dropdown dimostrativo</summary><div><a href="#scenario-content">Pagina informativa</a><a href="#scenario-events">Lista eventi</a></div></details><details><summary>Accordion dimostrativo</summary><p>Questa riga mostra il ritmo di una risposta espansa.</p></details></div>
            <p className="lab-tooltip-example"><span>Tooltip · anteprima</span><span className="lab-tooltip-box">Una breve spiegazione, sempre disponibile anche come testo.</span></p>
            <hr className="lab-divider" />
            <p className="lab-caption">Le schede qui sono link veri verso i contesti; dropdown e accordion usano il controllo nativo. Tooltip, modal e toast indicano solo il trattamento visivo.</p>
          </section>
        </div>
      </section>

      <section className="system-section contexts-section" id="contesti" aria-labelledby="contexts-title">
        <div className="system-section-intro"><span>Prova di estensione</span><h2 id="contexts-title">Oltre la homepage.</h2><p>Gli stessi esempi neutrali attraversano le tre proposte. Le cornici sono campioni di pagina, non eventi o servizi reali.</p></div>
        <div className="context-grid">
          <article className="context-sample context-content" id="scenario-content">
            <span className="context-label">Pagina informativa · contenuto lungo</span>
            <h3>Un luogo da raccontare con chiarezza, anche quando il titolo diventa lungo.</h3>
            <p>{sampleParagraph}</p><p>{sampleParagraph}</p>
            <a href="#regole">Leggi le regole <span aria-hidden="true">→</span></a>
          </article>

          <article className="context-sample context-events" id="scenario-events">
            <span className="context-label">Lista eventi</span><h3>Eventi</h3>
            <div className="context-event-list"><div><span>Da definire</span><strong>Evento dimostrativo con un nome più lungo del previsto</strong><small>Dettagli non pubblicati</small></div><div><span>Da definire</span><strong>Secondo evento dimostrativo</strong><small>Dettagli non pubblicati</small></div></div>
          </article>

          <article className="context-sample context-detail" id="scenario-detail">
            <span className="context-label">Dettaglio evento</span><h3>Un evento da definire.</h3>
            <div className="context-media"><Image src={`/brand/icon-${tone}.svg`} width={90} height={90} alt="" /><span>Spazio per una foto reale · rapporto 3:2</span></div>
            <dl><div><dt>Data</dt><dd>Da confermare</dd></div><div><dt>Luogo</dt><dd>Da confermare</dd></div></dl>
            <a className="demo-button demo-button-primary" href="#regole">Vedi il sistema</a>
          </article>

          <article className="context-sample context-faq" id="scenario-faq">
            <span className="context-label">FAQ</span><h3>Domande frequenti</h3>
            <details><summary>Dove troverò le informazioni aggiornate?</summary><p>Le informazioni saranno aggiunte solo quando confermate.</p></details>
            <details><summary>Questa risposta può essere più lunga?</summary><p>Sì: la misura della riga, il gap e il divisore devono restare leggibili anche con una risposta su più righe e su schermo piccolo.</p></details>
          </article>

          <article className="context-sample context-form" id="scenario-form">
            <span className="context-label">Form</span><h3>Un passaggio alla volta.</h3>
            <p>Campione non collegato a un servizio.</p>
            <label htmlFor={`context-field-${direction.id}`}>Messaggio dimostrativo</label><textarea id={`context-field-${direction.id}`} rows={3} placeholder="Scrivi un esempio" />
            <p className="lab-caption">Nessun dato viene inviato.</p>
          </article>

          <article className="context-sample context-empty" id="scenario-empty">
            <span className="context-label">Pagina vuota</span><h3>Nessun contenuto pubblicato.</h3>
            <p>Lo stato vuoto spiega cosa manca senza sembrare una pagina rotta.</p>
            <a href="#scenario-events">Torna alla lista <span aria-hidden="true">→</span></a>
          </article>

          <article className="context-sample context-mobile-nav" id="scenario-mobile-nav">
            <span className="context-label">Navigazione mobile</span><h3>Orientarsi anche su piccolo schermo.</h3>
            <div className="mobile-nav-frame"><div><Image src={`/brand/icon-${tone}.svg`} width={52} height={52} alt="" /><span>Menu</span></div><a href="#scenario-content">Informazioni</a><a href="#scenario-events">Eventi</a><a href="#scenario-faq">FAQ</a></div>
            <p className="lab-caption">Il menu utilizzabile è nell&apos;header di questa pagina quando il viewport è mobile.</p>
          </article>
        </div>
      </section>

      <section className="system-section rules-section" id="regole" aria-labelledby="rules-title">
        <div className="system-section-intro"><span>Specifiche esplorative</span><h2 id="rules-title">Regole che possono crescere.</h2><p>Ogni valore qui è una proposta verificabile. Diventerà fondazione, token o componente soltanto dopo la scelta della direzione.</p></div>
        <div className="semantic-palette" aria-labelledby="semantic-title"><h3 id="semantic-title">Ruoli colore proposti</h3><div className="semantic-color-grid">{profile.colorRoles.map((color) => <div className="semantic-color" key={color.role}><span style={{ backgroundColor: color.value }} aria-hidden="true" /><strong>{color.role}</strong><code>{color.value}</code></div>)}</div></div>
        {ruleGroups.map((group) => <div className="rule-group" key={group.title}><h3>{group.title}</h3><dl>{group.entries.map(([key, label]) => <div key={key}><dt>{label}</dt><dd>{profile.rules[key]}</dd></div>)}</dl></div>)}
      </section>
    </>
  );
}
