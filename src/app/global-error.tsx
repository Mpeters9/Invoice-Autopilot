"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-4 px-6 text-center">
          <p className="chip">Unexpected error</p>
          <h1 className="text-4xl font-extrabold text-slate-900">Something went wrong</h1>
          <p className="text-slate-600">Please try again. If this persists, contact support.</p>
          <button className="btn-primary px-5 py-2 text-sm" onClick={reset} type="button">
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}