import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import LPFAQ from '@/components/LPFAQ';
import CalendlyInline from '@/components/CalendlyInline';
import HubspotForm from '@/components/HubspotForm';
import EnergyCard from '@/components/EnergyCard';

export const metadata: Metadata = {
  title: 'FAQ | Fractional Demand',
  description: 'Frequently asked questions about B2B paid media, demand generation, and working with Fractional Demand. Get answers about budgets, strategy, attribution, and results.',
  keywords: ['B2B marketing FAQ', 'paid media questions', 'demand generation FAQ', 'LinkedIn ads help', 'Google ads B2B', 'marketing strategy questions'],
  openGraph: {
    title: 'FAQ | Fractional Demand',
    description: 'Frequently asked questions about B2B paid media, demand generation, and working with Fractional Demand.',
  },
  alternates: {
    canonical: 'https://www.fractionaldemand.com/faq'
  }
};

const faqs = [
  {
    q: 'What should our monthly budget be for B2B ads?',
    a: 'Work backwards from your CAC and funnel math. As a quick start: test $8–15k/mo on Paid Search for high‑intent keywords, then layer $5–10k/mo on LinkedIn to reach ICP titles and accounts.'
  },
  {
    q: 'Google or LinkedIn—where should we start?',
    a: 'Start with Paid Search for bottom‑funnel intent (problem/solution/brand queries). Add LinkedIn to create demand with job titles at ICP accounts and to retarget site visitors and high‑intent segments.'
  },
  {
    q: 'What’s a good B2B landing page conversion rate?',
    a: 'For bottom‑funnel offers (demo, pricing), 2–5% from cold traffic is typical; 6–10%+ with strong intent, offer/message fit, and fast load times.'
  },
  {
    q: 'Do lead gen forms on LinkedIn work better than sending to a page?',
    a: 'Lead gen forms convert more clicks to leads, but lead quality can drop. For demo requests, send to a fast, focused landing page. For top‑of‑funnel content, lead gen forms can be great.'
  },
  {
    q: 'How do we improve lead quality from LinkedIn?',
    a: 'Tighten audience (job titles + function + seniority), exclude students/entry‑level, use qualification questions, and run offers that filter for intent (demo, pricing, calculator).'
  },
  {
    q: 'What attribution model do you recommend?',
    a: 'Use platform conversions for optimization, but report business impact with a simple model: self‑reported attribution + last non‑direct touch in GA4 + CRM opportunity source. Keep it simple and consistent.'
  },
  {
    q: 'How long until we see pipeline?',
    a: 'We typically see first opportunities in 2–6 weeks after launch. Full ramp to steady, predictable pipeline is ~60–90 days depending on ACV and sales cycle length.'
  },
  {
    q: 'What creative tends to work for B2B on LinkedIn?',
    a: 'Clear headline, 1–2 value bullets, social proof (logos, results), and a direct CTA. Video and single image both work; rotate fresh creatives every 3–4 weeks.'
  },
  {
    q: 'How often should we refresh ads?',
    a: 'Refresh creative monthly or when frequency exceeds ~6–8 and CTR drops. Keep a testing backlog so you’re always iterating.'
  },
  {
    q: 'What keywords do we bid on in B2B search?',
    a: 'Prioritize high‑intent terms (software/product category, competitor alternatives, pain + solution). Use tight match types, add negatives weekly, and protect brand terms.'
  },
  {
    q: 'Smart bidding or manual bidding for search?',
    a: 'Start with Max Conversions/CPA once you have enough conversions (15–30+/mo). Otherwise, begin with manual CPC or tCPA seeded from historical conversion values.'
  },
  {
    q: 'What retargeting windows work best?',
    a: 'Test 7, 30, and 90‑day site visitors; split high‑intent pages (pricing, demo) into separate audiences and bid more aggressively there.'
  },
  {
    q: 'What should we track besides MQLs?',
    a: 'Track SQLs, Opportunities, Pipeline ($), and CAC payback. Optimize for the highest measurable signal you can trust (e.g., qualified form submissions > raw form fills).'
  },
  {
    q: 'How do we use UTMs the right way?',
    a: 'Standardize parameters (source, medium, campaign, content), and mirror naming conventions across platforms and CRM. Consistency beats complexity.'
  },
  {
    q: 'Do brand campaigns matter in B2B search?',
    a: 'Yes. Brand campaigns are cheap, protect your SERP, and catch high‑intent traffic from other channels. Keep them running with tight exact match.'
  },
  {
    q: 'What’s a good A/B testing cadence?',
    a: '1–2 controlled tests per channel per month (creative, offer, audience, LP). End tests on significance or clear business lift, not on vanity metrics.'
  },
  {
    q: 'Should we gate content?',
    a: 'Gate when there’s a clear next step and sales value. For mid‑funnel demand, ungated content + retargeting often wins on cost‑per‑opportunity.'
  },
  {
    q: 'How do we set realistic CAC targets?',
    a: 'Use ACV, gross margin, and payback target (e.g., 9–12 months). Work back from close rates to allowable CPL and CPC. Then test into it by channel.'
  },
];

// Layout toggles similar to LP
const SHOW_FULL_HEADER = true;
const USE_CALENDLY = true;
const HUBSPOT_PORTAL_ID: string | undefined = undefined;
const HUBSPOT_FORM_ID: string | undefined = undefined;
const HUBSPOT_REGION: string = 'na1';

export default function FAQPage() {
  return (
    <>
      <Nav minimal={!SHOW_FULL_HEADER} /> 
      <main id="main" className="bg-black text-white">
        <section className="container mx-auto px-4 py-24 md:py-28">
          <div className="grid gap-10 lg:gap-12 lg:grid-cols-2 items-start">
            {/* Content column */}
            <div className="order-1">
              <h1 className="text-5xl md:text-6xl tracking-tight">Frequently asked questions</h1>
              <p className="mt-3 text-white/80 text-xl md:text-2xl leading-relaxed max-w-2xl">Quick answers about our services, process, and results.</p>

              {/* Mobile form under heading */}
              <div className="lg:hidden mt-8">
                <h3 className="text-2xl  mb-3">Book your strategy session</h3>
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

              {/* FAQ accordion styled like LP (hairlines, no card) */}
              <div className="mt-12">
                <LPFAQ inline items={faqs} showJsonLd />
              </div>
            </div>

            {/* Form column (sticky on desktop) */}
            <div className="hidden lg:block order-2 lg:sticky lg:top-24 self-start">
              <h3 className="text-2xl  mb-3">Book your strategy session</h3>
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


