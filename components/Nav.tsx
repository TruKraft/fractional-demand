"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import map from '@/public/assets/images/assets-map.json';
import Portal from './Portal';
import Tilt from './Tilt';

type NavProps = { minimal?: boolean };

export default function Nav({ minimal = false }: NavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-[2000] bg-black/60 supports-[backdrop-filter]:bg-black/40 backdrop-blur border-b border-white/10 text-white">
      <nav className="container mx-auto flex items-center justify-between px-4 py-2 md:py-3">
        <a href="/" aria-label="Home" className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-md">
          <div className="relative h-[60px] w-[264px] md:h-[72px] md:w-[312px]">
            <Image src={(map.wordmark as string) || '/assets/images/logo-wordmark-white.png'} alt="Fractional Demand" fill className="object-contain" />
          </div>
        </a>

        {/* Desktop nav */}
        {!minimal && (
          <ul className="hidden lg:flex items-center gap-8 text-sm md:text-base text-white/80">
            <li><a href="/#why-us" className="hover:text-white hover:underline hover:underline-offset-8 hover:decoration-white/80 transition-colors">Why us?</a></li>
            <li><a href="/#services" className="hover:text-white hover:underline hover:underline-offset-8 hover:decoration-white/80 transition-colors">Our services</a></li>
            <li><a href="/#about-us" className="hover:text-white hover:underline hover:underline-offset-8 hover:decoration-white/80 transition-colors">About us</a></li>
            <li>
              <Tilt>
                <a
                  href="https://calendly.com/fractionaldemand/30min"
                  target="_blank"
                  rel="noopener"
                  className="btn btn-primary btn-sm md:btn-md btn-shine"
                >
                  Schedule a call
                </a>
              </Tilt>
            </li>
          </ul>
        )}

        {/* Mobile hamburger */}
        {!minimal && (
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
        >
          <span className="sr-only">Open menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
            <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
          </svg>
        </button>
        )}
      </nav>

      {/* Mobile drawer */}
      {!minimal && (
      <Portal>
        <div className={open ? 'fixed inset-0 z-[99990] lg:hidden' : 'pointer-events-none fixed inset-0 z-[99990] lg:hidden'}>
          {/* Overlay */}
          <button
            aria-hidden={!open}
            tabIndex={-1}
            className={`fixed inset-0 z-[99990] bg-black/50 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => setOpen(false)}
          />
          {/* Panel */}
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            className={`fixed right-0 top-0 z-[99991] h-full w-80 max-w-full bg-black text-white border-l border-white/10 shadow-xl transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <div className="flex items-center justify-end px-4 py-3 border-b border-white/10">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4 4.29 19.7 2.88 18.3 9.17 12 2.88 5.71 4.29 4.29l6.3 6.3 6.29-6.3z" />
                </svg>
              </button>
            </div>
            <nav className="px-4 py-4">
              <ul className="space-y-4 text-base">
                <li><a href="/#why-us" className="block py-2 hover:underline underline-offset-8" onClick={() => setOpen(false)}>Why us?</a></li>
                <li><a href="/#services" className="block py-2 hover:underline underline-offset-8" onClick={() => setOpen(false)}>Our services</a></li>
                <li><a href="/#about-us" className="block py-2 hover:underline underline-offset-8" onClick={() => setOpen(false)}>About us</a></li>
                <li className="pt-2">
                  <a
                    href="https://calendly.com/fractionaldemand/30min"
                    target="_blank"
                    rel="noopener"
                    className="btn btn-primary btn-md w-full text-center"
                    onClick={() => setOpen(false)}
                  >
                    Schedule a call
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Portal>
      )}
    </header>
  );
}


