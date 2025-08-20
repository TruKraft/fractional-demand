"use client";

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body className="bg-black text-white min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1 container mx-auto px-4 py-24 md:py-32 text-center flex items-center justify-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight">Something went wrong</h1>
            <p className="mt-3 text-white/70 text-lg md:text-xl">An unexpected error occurred. Please try again.</p>
            <div className="mt-8">
              <button onClick={reset} className="btn btn-primary btn-md btn-shine">Try again</button>
            </div>
          </div>
        </main>
        <Footer minimal />
      </body>
    </html>
  );
}


