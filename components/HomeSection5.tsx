import Reveal from './Reveal';
import FlipCard from './FlipCard';

export default function HomeSection5() {
  const cards = [
    {
      frontHeader: 'Fractional Paid Media',
      frontSubcopy: 'LinkedIn, Meta, Google, X, Reddit',
      backItems: [
        'Senior performance marketers with years (plural) of in house and agency experience',
        'Demand creation + demand capture frameworks tied to pipeline',
        'Creative + messaging testing that constantly improves CTR → CPL → SQL → Qualified Pipeline',
        'Embedded collaboration to ensure clean attribution and real revenue impact',
      ],
    },
    {
      frontHeader: 'Fractional Head of Marketing',
      frontSubcopy: 'Hands on keyboard marketing lead',
      backItems: [
        'Own GTM strategy',
        'Lead campaigns from idea to launch',
        'Execute hands-on to remove work from your plate',
      ],
    },
    {
      frontHeader: 'Fractional RevOps',
      frontSubcopy: 'HubSpot + GTM Engineering',
      backItems: [
        'Hubspot architecture, routing, dashboards and reporting',
        'Clay, Apollo, ZoomInfo, Zapier workflows',
        'Lead scoring, enrichment, and intent → sales-ready leads',
      ],
    },
    {
      frontHeader: 'Email / Lifecycle Marketing',
      frontSubcopy: 'Nurtures that actually move pipeline',
      backItems: [
        'Build lifecycle journeys from first touch → closed won → expansion',
        'Nurture sequences for in-trial/demo, in-pipeline, and post-sale (upsell/cross-sell)',
        'Campaign strategy, copy, and build out',
      ],
    },
  ];

  return (
    <section className="bg-black text-white relative overflow-hidden">
      <div className="energy-line" />
      <div className="container mx-auto px-4 py-24 md:py-28">
        <div className="text-center mb-16">
          <Reveal as="h2" className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Plug in the senior help you actually need
          </Reveal>
          <Reveal as="p" className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
            One partner, four offerings—all run by experienced operators.
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {cards.map((card, idx) => (
            <FlipCard
              key={idx}
              frontHeader={card.frontHeader}
              frontSubcopy={card.frontSubcopy}
              backItems={card.backItems}
              className="h-[280px] md:h-[320px]"
            />
          ))}
        </div>
      </div>
      <div className="energy-line energy-line--delayed" />
    </section>
  );
}

