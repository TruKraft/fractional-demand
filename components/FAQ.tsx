"use client";

import { useState } from 'react';
import Reveal from './Reveal';

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  items: FAQItem[];
  headline?: string;
  className?: string;
};

export default function FAQ({ items, headline = "Frequently Asked Questions", className = '' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <section className={`bg-black text-white relative overflow-hidden bg-noise ${className}`}>
      <div className="energy-line" />
      <div className="container mx-auto px-4 py-24 md:py-28">
        <div className="text-center mb-12">
          <Reveal as="h2" className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {headline}
          </Reveal>
        </div>
        <div className="mx-auto max-w-3xl divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
          {items.map((item, idx) => (
            <div key={idx} className="border-b border-white/10 last:border-b-0">
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left px-6 py-5 md:px-8 md:py-6 flex items-center justify-between gap-4 hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <h3 className="text-lg md:text-xl font-semibold pr-4">{item.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`w-6 h-6 shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div
                id={`faq-answer-${idx}`}
                className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-[1000px]' : 'max-h-0'}`}
                aria-hidden={openIndex !== idx}
              >
                <div className="px-6 pb-5 md:px-8 md:pb-6">
                  <p className="text-white/80 text-base md:text-lg leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <div className="energy-line energy-line--delayed" />
    </section>
  );
}

