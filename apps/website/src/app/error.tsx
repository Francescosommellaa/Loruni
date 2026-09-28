"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">Si è verificato un errore</h1>
      <p>Non è stato possibile caricare la pagina.</p>
      <button
        type="button"
        onClick={reset}
        className="cursor-pointer rounded border border-neutral-950 px-4 py-2"
      >
        Riprova
      </button>
    </div>
  );
}
