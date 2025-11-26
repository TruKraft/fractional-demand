"use client";

import Image from 'next/image';
import map from '@/public/assets/images/assets-map.json';
import CareersTrigger from './CareersTrigger';
import { useCalendlyPopup } from './CalendlyPopup';

type FooterProps = { minimal?: boolean };

function ContactButton() {
  const { openPopup } = useCalendlyPopup();
  return (
    <button 
      onClick={openPopup}
      className="text-white/60 hover:text-white hover:underline underline-offset-8 transition-colors text-sm"
    >
      Contact
    </button>
  );
}

export default function Footer({ minimal = false }: FooterProps) {
  if (minimal) {
    return (
      <footer className="bg-black text-white border-t border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="relative h-10 w-48 md:h-12 md:w-56 shrink-0">
            <Image src={(map.wordmark as string) || '/assets/images/logo-wordmark-white.png'} alt="Fractional Demand" fill className="object-contain" />
          </div>
          <div className="flex items-center gap-4">
            <a href="/privacy-policy" className="text-white/60 hover:text-white hover:underline underline-offset-8 transition-colors text-sm">Privacy Policy</a>
            <p className="text-white/60 text-sm">© Fractional Demand. {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>
    );
  }
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-20 md:py-28 grid gap-5 md:gap-6 place-items-center">
        <div className="relative h-[65px] w-[360px] md:h-[77px] md:w-[432px] shrink-0 mx-auto">
          <Image src={(map.wordmark as string) || '/assets/images/logo-wordmark-white.png'} alt="Fractional Demand" fill className="object-contain" />
        </div>
        {!minimal && (
          <ul className="flex flex-row flex-wrap items-center justify-center gap-3 md:gap-4 lg:gap-6 text-sm md:text-sm lg:text-base text-white/90 font-medium">
            <li><a href="/#why-us" className="block py-1 hover:text-white hover:underline underline-offset-8 transition-colors whitespace-nowrap">Why us?</a></li>
            <li><a href="/#services" className="block py-1 hover:text-white hover:underline underline-offset-8 transition-colors whitespace-nowrap">Our services</a></li>
            <li><a href="/#about-us" className="block py-1 hover:text-white hover:underline underline-offset-8 transition-colors whitespace-nowrap">About us</a></li>
            <li>
              <a
                href="https://www.linkedin.com/company/fractional-demand/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fractional Demand on LinkedIn"
                className="group inline-flex items-center justify-center w-10 h-10 rounded-lg border border-transparent text-white/70 hover:text-white hover:border-white/10 hover:bg-white/10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-none hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:-translate-y-1 hover:scale-[1.03] will-change-transform"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-120"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM8 8h4.8v2.2h.07c.67-1.2 2.3-2.46 4.73-2.46 5.06 0 5.99 3.33 5.99 7.66V24h-5v-7.5c0-1.79-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 3.97V24H8z"/>
                </svg>
              </a>
            </li>
          </ul>
        )}
        
      </div>
      <div className="bg-white/5">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/60 text-sm">© Fractional Demand. {new Date().getFullYear()}</p>
          {!minimal && (
            <div className="flex items-center gap-4">
              <CareersTrigger />
              <a href="/privacy-policy" className="text-white/60 hover:text-white hover:underline underline-offset-8 transition-colors text-sm">Privacy Policy</a>
              <ContactButton />
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}


