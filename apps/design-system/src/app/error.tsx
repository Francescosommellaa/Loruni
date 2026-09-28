"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div className="utility-page page-container">
      <h1>Si è verificato un errore</h1>
      <p>Riprova a caricare la pagina.</p>
      <button type="button" onClick={reset}>Riprova</button>
    </div>
  );
}
