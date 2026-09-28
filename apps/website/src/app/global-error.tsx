"use client";

import "./globals.css";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="it">
      <body className="bg-white font-sans text-neutral-950">
        <main className="mx-auto max-w-6xl space-y-4 px-6 py-16">
          <h1 className="text-3xl font-semibold">Si è verificato un errore</h1>
          <p>Non è stato possibile caricare il sito.</p>
          <button
            type="button"
            onClick={reset}
            className="cursor-pointer rounded border border-neutral-950 px-4 py-2"
          >
            Riprova
          </button>
        </main>
      </body>
    </html>
  );
}
