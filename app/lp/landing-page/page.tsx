import Nav from '@/components/Nav';
import Image from 'next/image';
import HubspotForm from '@/components/HubspotForm';
import Tilt from '@/components/Tilt';
import CalendlyInline from '@/components/CalendlyInline';
import LPValueProps from '@/components/LPValueProps';
import LPLogos from '@/components/LPLogos';
import LPFAQ from '@/components/LPFAQ';
import LPPlanStrip from '@/components/LPPlanStrip';
import map from '@/public/assets/images/assets-map.json';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import EnergyCard from '@/components/EnergyCard';

// Page should be hidden from search engines
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

/*
Landing page toggles (edit for each LP):

- SHOW_FULL_HEADER: boolean
  true  → show full Nav header
  false → show logo-only header (common for focused LPs)

- LAYOUT_SIDE: 'content-left' | 'content-right'
  Controls which side the copy lives on (form renders on the opposite side)

- USE_CALENDLY: boolean
  true  → show Calendly inline scheduler instead of HubSpot form
  false → show HubSpot form (falls back to skeleton if IDs are not set)

- HUBSPOT_PORTAL_ID / HUBSPOT_FORM_ID / HUBSPOT_REGION: strings
  Provide your HubSpot portal & form IDs. If either is missing, a skeleton loader appears.
*/
const SHOW_FULL_HEADER = false;
const LAYOUT_SIDE: 'content-left' | 'content-right' = 'content-left';
const USE_CALENDLY = true;
const HUBSPOT_PORTAL_ID: string | undefined = undefined;
const HUBSPOT_FORM_ID: string | undefined = undefined;
const HUBSPOT_REGION: string = 'na1';
// BULLET_ICON: choose 'check' | 'bolt' | 'sparkle'
const BULLET_ICON: 'check' | 'bolt' | 'sparkle' = 'check';

export default function LandingPage() {
  const contentFirst = LAYOUT_SIDE === 'content-left';
  const bioImages = (map as any).bioImages || {};
  const headshotSrc = bioImages[Object.keys(bioImages)[0]] || '/assets/images/placeholder-avatar.jpg';

  const Icon = () => {
    const base = "h-6 w-6 text-[#072ef0] shrink-0 mt-0.5 md:mt-1"; // ~20% larger
    if (BULLET_ICON === 'bolt') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={base}>
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
      );
    }
    if (BULLET_ICON === 'sparkle') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={base}>
          <path d="M12 2l1.8 4.2L18 8l-4.2 1.8L12 14l-1.8-4.2L6 8l4.2-1.8L12 2zm6 8l1 2.5L22 14l-3 1-1 3-1-3-3-1 3-1.5L18 10zM4 12l.8 2L8 15l-3.2 1L4 18l-1-2-3-1 3-1 .8-2z" />
        </svg>
      );
    }
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={base}>
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.172 7.707 8.879a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    );
  };

  return (
    <>
      <Nav minimal={!SHOW_FULL_HEADER} />

      <main className="bg-black text-white">
        <section className="container mx-auto px-4 py-20 md:py-28">
          <div className={`grid gap-10 lg:gap-12 lg:grid-cols-2 items-start`}>
            {/* Content side (scrolls) */}
            <div className={`order-1 ${contentFirst ? '' : 'lg:order-2'}`}>
              {/* Eyebrow / kicker */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs md:text-sm text-white/70">Limited-time offer</div>
              <h1 className="mt-4 text-5xl md:text-6xl font-black tracking-tight">Get 2 months free</h1>
              <p className="mt-3 text-2xl md:text-3xl text-white/85">On a 12-month plan. Cancel anytime after the trial period.</p>
              <p className="mt-5 text-white/80 text-[0.96rem] md:text-[1.1rem] leading-relaxed max-w-2xl">Generate qualified pipeline with senior ad buyers who live and breathe paid media. Predictable demand, clear reporting, no junior handoffs.</p>

              {/* Benefits */}
              <ul className="mt-8 grid gap-3 text-white/90 text-lg md:text-xl">
                <li className="flex items-start gap-3"><Icon /><span>Lower CPL on search & LinkedIn</span></li>
                <li className="flex items-start gap-3"><Icon /><span>Pipeline you can forecast</span></li>
                <li className="flex items-start gap-3"><Icon /><span>Senior buyers only—no juniors</span></li>
                <li className="flex items-start gap-3"><Icon /><span>Weekly strategy, clear reporting</span></li>
              </ul>

              {/* Mobile-only form below benefits */}
              <div className="lg:hidden mt-8">
                <h3 className="text-2xl font-bold mb-3">Book your strategy session</h3>
                <div className="energy-card rounded-3xl bg-white/5 p-5">
                  <div id="form-mobile">
                    {USE_CALENDLY ? (
                      <CalendlyInline className="rounded-2xl overflow-hidden" url="https://calendly.com/fractionaldemand/30min" height={560} />
                    ) : (
                      <HubspotForm className="w-full" portalId={HUBSPOT_PORTAL_ID} formId={HUBSPOT_FORM_ID} region={HUBSPOT_REGION} />
                    )}
                  </div>
                </div>
                <div className="mt-3 text-xs text-white/50">No spam—ever. By submitting, you agree to our privacy policy.</div>
              </div>

              {/* Testimonial */}
              <blockquote className="mt-16 pt-6 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 md:h-14 md:w-14 overflow-hidden rounded-full ring-1 ring-white/20">
                    <Image src={headshotSrc} alt="Testimonial headshot" fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-white/90 text-base md:text-lg leading-relaxed">“Within 90 days, our paid pipeline doubled and our CAC dropped 37%. This team is the real deal.”</p>
                    <footer className="mt-1 text-white/60 text-sm md:text-base">Alex R. — VP Marketing, B2B SaaS</footer>
                  </div>
                </div>
              </blockquote>

              {/* Additional content blocks within the same column */}
              <div className="mt-16 space-y-16">
                <LPLogos inline />
                <LPValueProps inline />
                <LPPlanStrip inline />
                <LPFAQ inline />
              </div>
            </div>

            {/* Form / Scheduler side (sticky desktop, below hero on mobile) */}
            <div className={`hidden lg:block order-2 ${contentFirst ? '' : 'lg:order-1'} lg:sticky lg:top-24 self-start`}>
              <h3 className="text-2xl font-bold mb-3">Book your strategy session</h3>
              <div className="energy-card rounded-3xl bg-white/5 p-5 md:p-6">
                <div id="form">
                  {USE_CALENDLY ? (
                    <CalendlyInline className="rounded-2xl overflow-hidden" url="https://calendly.com/fractionaldemand/30min" height={620} />
                  ) : (
                    <HubspotForm className="w-full" portalId={HUBSPOT_PORTAL_ID} formId={HUBSPOT_FORM_ID} region={HUBSPOT_REGION} />
                  )}
                </div>
              </div>
              <div className="mt-3 text-xs text-white/50">No spam—ever. By submitting, you agree to our privacy policy.</div>
            </div>
          </div>
        </section>
      </main>
      <Footer minimal />
    </>
  );
}


