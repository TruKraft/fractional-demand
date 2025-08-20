import React from 'react';

const faqs = [
  {
    q: 'Who is a good fit for Fractional Demand?',
    a: 'B2B tech companies that need qualified pipeline from paid search and LinkedIn, and prefer senior execution over scaling headcount.'
  },
  {
    q: 'Which channels do you manage?',
    a: 'Google/Bing Search, LinkedIn, and Meta for retargeting. We focus on high‑intent demand that turns into opportunities.'
  },
  {
    q: 'How quickly can we launch?',
    a: 'Typically ~10 business days from kickoff to first campaigns live.'
  },
  {
    q: 'Do you work with in‑house teams?',
    a: 'Yes. We plug into your motion, meet weekly, and provide dashboards and clear action plans.'
  },
];

export default function HomeFAQ() {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <section id="faq" className="bg-black text-white">
      <div className="container mx-auto px-4 py-20 md:py-24">
        <h2 className="text-center text-4xl md:text-5xl font-bold tracking-tight mb-8">Frequently asked questions</h2>
        <div className="mx-auto max-w-3xl divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/5">
          {faqs.map((f) => (
            <div key={f.q}>
              <div className="px-5 py-4 md:px-6 md:py-5">
                <h3 className="text-lg md:text-xl font-semibold">{f.q}</h3>
                <p className="mt-2 text-white/80 text-base md:text-lg leading-relaxed">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </section>
  );
}


