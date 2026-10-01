'use client';

import { useState, useSyncExternalStore, type CSSProperties, type KeyboardEvent } from 'react';
import { motion } from 'motion/react';
import { Arrow, Button, Switch } from '@loruni/ui';

const tabs = ['Layout', 'Componenti', 'Movimento'] as const;
type Tab = typeof tabs[number];
const themes = ['Community', 'Drink', 'Gaming', 'Eventi'];

function subscribeReducedMotion(onChange: () => void) {
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  preference.addEventListener('change', onChange);
  return () => preference.removeEventListener('change', onChange);
}
function getReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
function getServerReducedMotion() { return false; }

export function Playground() {
  const [tab, setTab] = useState<Tab>('Layout');
  const [layout, setLayout] = useState('editoriale');
  const [light, setLight] = useState(false);
  const [enabled, setEnabled] = useState(true);
  const [clicks, setClicks] = useState(0);
  const [duration, setDuration] = useState(160);
  const [position, setPosition] = useState(false);
  const reducedMotion = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, getServerReducedMotion);

  function handleTabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    else if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = tabs.length - 1;
    else return;
    event.preventDefault();
    setTab(tabs[next]);
    event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next].focus();
  }

  return <div className="playground-shell" data-theme={light ? 'light' : 'dark'}>
    <header className="playground-header"><a href="#main" className="wordmark">Loruni</a><span className="experiment-status">Esplorazione · non approvata</span></header>
    <main id="main" className="playground-main">
      <div className="playground-intro"><h1>Playground.</h1><p>Prova. Confronta. Scegli.<br />Uno spazio per dare forma a Loruni.</p></div>
      <div className="workspace">
        <aside className="controls" aria-label="Controlli del playground">
          <div role="tablist" aria-label="Tipo di esperimento" className="experiment-tabs">
            {tabs.map((label, index) => <button key={label} id={`tab-${label}`} type="button" role="tab"
              aria-selected={tab === label} aria-controls="experiment-panel" tabIndex={tab === label ? 0 : -1}
              onClick={() => setTab(label)} onKeyDown={event => handleTabKey(event, index)}>{label}<Arrow /></button>)}
          </div>
          <div className="controls-group"><Switch label="Tema chiaro" checked={light} onChange={setLight} />
            <p className="control-note">La prova cambia qui. La landing rimane indipendente.</p>
          </div>
          {tab === 'Layout' && <div className="controls-group"><label htmlFor="layout">Composizione</label>
            <select id="layout" value={layout} onChange={event => setLayout(event.target.value)}>
              <option value="editoriale">Editoriale</option><option value="griglia">Griglia</option><option value="righe">Righe</option>
            </select>
          </div>}
          {tab === 'Movimento' && <div className="controls-group"><label htmlFor="duration">Durata: {duration} ms</label>
            <input id="duration" type="range" min="80" max="300" step="10" value={duration} onChange={event => setDuration(Number(event.target.value))} />
            <p className="control-note">{reducedMotion ? 'Movimento ridotto attivo: cambi immediati.' : 'Durata sperimentale: da validare prima dell’uso.'}</p>
          </div>}
        </aside>
        <section className="preview" role="tabpanel" id="experiment-panel" aria-labelledby={`tab-${tab}`} tabIndex={0}
          style={{ '--duration-switch': `${duration}ms` } as CSSProperties}>
          <div className="preview-heading"><span>{tab}</span><span>Contenuti dimostrativi</span></div>
          {tab === 'Layout' && <div className={`layout-demo layout-demo--${layout}`}>
            {themes.map((theme, index) => <article key={theme} className={`demo-piece demo-piece--${index}`}>
              <h2>{theme}</h2><p>{index === 0 ? 'Le cose migliori iniziano insieme.' : 'Un altro modo di stare insieme.'}</p><Arrow />
            </article>)}
          </div>}
          {tab === 'Componenti' && <div className="component-demo">
            <h2>Il carattere<br />dei dettagli.</h2>
            <p>Due famiglie, quattro colori. Controlli essenziali da provare sullo stesso campo.</p>
            <div className="button-samples"><Button onClick={() => setClicks(value => value + 1)}>Prova il pulsante <Arrow /></Button>
              <Button variant="secondary" onClick={() => setClicks(0)}>Azzera</Button><Button disabled>Disabilitato</Button></div>
            <p role="status" className="feedback">Interazioni: {clicks}</p>
            <div className="switch-samples"><Switch label="Attiva la prova" checked={enabled} onChange={setEnabled} /><span>{enabled ? 'Attiva' : 'Disattiva'}</span></div>
            <Switch label="Switch disabilitato" checked={false} onChange={() => {}} disabled />
          </div>}
          {tab === 'Movimento' && <div className="motion-demo">
            <h2>Rapido.<br />Reattivo.</h2><p>Cambia direzione anche durante la transizione. Ogni clic aggiorna subito la destinazione.</p>
            <div className="motion-track"><motion.div className="motion-marker" initial={false}
              animate={{ left: position ? 'calc(100% - 88px)' : '8px', rotate: position ? 90 : 0 }}
              transition={{ duration: reducedMotion ? 0 : duration / 1000, ease: [0.16, 1, 0.3, 1] }}>
              <Arrow />
            </motion.div></div>
            <Button onClick={() => setPosition(value => !value)}>Cambia posizione <Arrow /></Button>
            <p role="status" className="feedback">Posizione: {position ? 'destra' : 'sinistra'}</p>
          </div>}
        </section>
      </div>
    </main>
    <footer className="playground-footer">Ogni combinazione resta una prova fino alla scelta esplicita.</footer>
  </div>;
}
