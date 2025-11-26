"use client";

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import map from '@/public/assets/images/assets-map.json';
import servicesContent from '@/content/services.json';
import Reveal from './Reveal';
import Tilt from './Tilt';

type ServiceItem = { key: string; title: string; blurb: string; image?: string };
const fallbackServices: ServiceItem[] = [
  {
    key: 'paid-search',
    title: 'Paid Search',
    blurb:
      "Running ads on Google Search is typically where I tell most clients to start spending. The intent is super high (they're literally searching for what your product does), and when we pair that with a solid keyword and offer strategy, good things usually follow.",
  },
  {
    key: 'linkedin-ads',
    title: 'LinkedIn Ads',
    blurb:
      "LinkedIn is a goldmine for most B2B tech companies due to LinkedIn's unmatched targeting capabilities (did you know you can show ads to specific job titles within certain companies?). However, LinkedIn's costs can be steep so I like to make sure that I can back into a positive ROI based on the client's ACV and sales-funnel conversion rates.",
  },
  {
    key: 'facebook-insta-ads',
    title: 'Facebook & Insta Ads',
    blurb:
      "Facebook is a tough nut to crack for most B2B clients because Facebook really paired down targeting capabilities about 6 years ago. However, Facebook/Instagram can still be a good place to run retargeting ads to stay top-of-mind with an audience and to generate a low volume of leads.",
  },
  {
    key: 'abm-demand',
    title: 'ABM Demand',
    blurb:
      "I hesitate to even have this listed as a separate offering because to me, ABM and demand gen should be joined at the hip and essentially one in the same. ABM is no good if we're not generating leads from individuals at the target accounts we're going after (e.g., burning cash running display ads to generate impressions), and demand gen is no good if we're generating leads from accounts outside of our ICP that don't convert.",
  },
  {
    key: 'lead-follow-up-strategy',
    title: 'Lead Follow-up Strategy',
    blurb:
      "I don't hop on sales calls for clients, BUT I can absolutely help them build the playbook/strategy as to how their sales teams should follow up with the leads. What should they say/not say to an inbound lead? How often should they reach out? What does the handoff between marketing & sales look like?",
  },
  {
    key: 'email-marketing-nurture',
    title: 'Email Marketing & Nurture',
    blurb:
      "So we've generated all of this demand and leads start to flow - now what? It's time to build out automated email nurture tracks to make sure you're staying in front of those leads with valuable content and product offerings.",
  },
];
const services = (servicesContent as ServiceItem[]) && (servicesContent as ServiceItem[]).length > 0 ? (servicesContent as ServiceItem[]) : fallbackServices;

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Optional: support deep-link via hash like #service-<key>
  useEffect(() => {
    const { hash } = window.location;
    if (hash.startsWith('#service-')) {
      const key = hash.replace('#service-', '');
      const idx = services.findIndex((s) => s.key === key);
      if (idx >= 0) setActiveIndex(idx);
    }
  }, []);

  const active = useMemo(() => services[activeIndex] || services[0], [activeIndex, services]);
  const mapAny = map as any;
  const servicesImages = (mapAny.servicesImages || {}) as Record<string, string>;
  const activeImage = servicesImages[active.key] || active.image || (mapAny.servicesImage as string) || '/assets/images/unsplash-laptop.jpg';

  return (
    <section id="services" className="bg-white text-black">
      <div className="container mx-auto grid gap-6 md:gap-12 px-4 py-16 md:py-28 md:grid-cols-2">
        {/* Left: vertical tabs */}
        <div>
          <Reveal as="h2" className="text-2xl md:text-5xl  tracking-tight mb-3 md:mb-8">Our services</Reveal>
          <div role="tablist" aria-label="Services" className="grid grid-cols-2 md:grid-cols-1 gap-1 md:gap-2">
            {services.map((s, idx) => {
              const selected = idx === activeIndex;
              return (
                <button
                  key={s.key}
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`panel-${s.key}`}
                  id={`tab-${s.key}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveIndex(idx)}
                  className={
                    `w-full md:w-[60%] text-left rounded-lg px-2 py-1 text-sm md:text-xl font-medium truncate transition ` +
                    (selected
                      ? 'bg-black text-white shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-black'
                      : 'hover:bg-black/5 text-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500')
                  }
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                      e.preventDefault();
                      setActiveIndex((prev) => (prev + 1) % services.length);
                    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                      e.preventDefault();
                      setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
                    } else if (e.key === 'Home') {
                      e.preventDefault();
                      setActiveIndex(0);
                    } else if (e.key === 'End') {
                      e.preventDefault();
                      setActiveIndex(services.length - 1);
                    }
                  }}
                >
                  {s.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: active panel */}
        <div className="grid gap-4 md:gap-6">
          <Reveal className="relative w-full overflow-hidden rounded-2xl md:rounded-3xl shadow-md h-40 md:h-auto" style={{ aspectRatio: '16 / 7' }}>
            <Image
              src={activeImage}
              alt={active.title}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </Reveal>

          <div
            role="tabpanel"
            id={`panel-${active.key}`}
            aria-labelledby={`tab-${active.key}`}
            className="scroll-mt-24"
          >
            <h3 className="text-lg md:text-2xl  mb-2">{active.title}</h3>
            <p className="text-black/80 text-sm md:text-lg leading-relaxed clamp-3 md:clamp-4">{active.blurb}</p>
          </div>

          <div>
            <Tilt>
              <a
                href="https://calendly.com/fractionaldemand/30min"
                target="_blank"
                rel="noopener"
                className="btn btn-primary btn-sm md:btn-md btn-shine"
              >
                Let's talk
              </a>
            </Tilt>
        </div>
      </div>
      </div>

      {/* Mobile accordion removed to prevent duplication */}
    </section>
  );
}


