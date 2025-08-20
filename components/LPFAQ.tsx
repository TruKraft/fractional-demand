"use client";

import { useState } from 'react';

type QAItem = { q: string; a: string };

const qa: QAItem[] = [
  { q: 'Who qualifies for 2 months free?', a: 'New annual contracts started this quarter. Limited spots each month.' },
  { q: 'What channels do you manage?', a: 'Google/Bing Search, LinkedIn, and Meta for retargeting.' },
  { q: 'How fast can we launch?', a: 'Typically 10 business days from kickoff to first campaigns live.' },
];

type Props = { inline?: boolean; className?: string; items?: QAItem[]; showJsonLd?: boolean };

export default function LPFAQ({ inline, className, items, showJsonLd = false }: Props) {
  const data = items && items.length ? items : qa;
  const [open, setOpen] = useState<number | null>(0);
  const Inner = (
    <div className={`divide-y divide-white/10 ${className || ''}`}>
      {data.map((item, idx) => (
        <div key={item.q}>
          <button
            className="w-full text-left px-5 py-4 md:px-6 md:py-5 flex items-center justify-between"
            onClick={() => setOpen(open === idx ? null : idx)}
            aria-expanded={open === idx}
            aria-controls={`faq-panel-${idx}`}
          >
            <span className="text-lg md:text-xl font-semibold">{item.q}</span>
            <span className="text-white/60" aria-hidden>{open === idx ? '−' : '+'}</span>
          </button>
          <div id={`faq-panel-${idx}`}>
            {open === idx && (
              <div className="px-5 pb-4 md:px-6 md:pb-5 text-white/80 text-base md:text-lg leading-relaxed">{item.a}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  if (inline) return (
    <>
      {Inner}
      {showJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      )}
    </>
  );

  return (
    <section className="bg-black text-white">
      <div className="container mx-auto px-4 py-16 md:py-20">
        {Inner}
        {showJsonLd && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        )}
      </div>
    </section>
  );
}


