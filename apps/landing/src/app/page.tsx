import Image from 'next/image';
import logo from '@loruni/ui/brand/logo-light.svg';
import { Arrow } from '@loruni/ui';

const themes = ['Community', 'Drink', 'Gaming', 'Eventi'];

export default function LandingPage() {
  return <>
    <header className="landing-header"><a href="#main" aria-label="Loruni, inizio pagina">
      <Image src={logo} alt="Loruni" width={132} height={84} priority />
    </a><a href="#loruni">Scopri Loruni <Arrow /></a></header>
    <main id="main">
      <section className="landing-hero" aria-labelledby="landing-title">
        <h1 id="landing-title">Spazio alle cose<br /><span>che ci uniscono.</span></h1>
        <div className="hero-bottom"><p>Community. Drink.<br />Gaming. Eventi.</p>
          <a className="button button--primary" href="#loruni">Entra nel mondo Loruni <Arrow down /></a>
        </div>
      </section>
      <section className="landing-themes" id="loruni" aria-labelledby="themes-title">
        <h2 id="themes-title">Il mondo Loruni.</h2>
        <ul>{themes.map(theme => <li key={theme}>{theme}</li>)}</ul>
      </section>
    </main>
    <footer className="landing-footer"><span>Loruni</span><a href="#main">Torna all’inizio</a></footer>
  </>;
}
