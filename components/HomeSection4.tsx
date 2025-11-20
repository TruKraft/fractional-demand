import Reveal from './Reveal';
import DemandOSColumns from './DemandOSColumns';

export default function HomeSection4() {
  const columns = [
    {
      header: 'Build',
      items: [
        'Brand positioning',
        'Messaging',
        'ICP development',
        'Offer development',
        'Tracking & measurement',
        'GTM strategy',
      ],
    },
    {
      header: 'Run',
      items: [
        'Operate the system',
        'Launch campaigns',
        'Refine offers and messaging',
        'Run weekly experiments',
        'Align with sales',
        'Optimize the full funnel',
      ],
    },
    {
      header: 'Scale',
      items: [
        'Expand channels',
        'Increase budgets',
        'Multiply winning plays',
        'Deepen lifecycle & RevOps automation',
        'Turn the GTM engine into a predictable revenue machine',
      ],
    },
  ];

  return (
    <section className="bg-black text-white relative overflow-hidden bg-noise">
      <div className="energy-line" />
      <div className="container mx-auto px-4 py-24 md:py-28">
        <div className="text-center mb-16">
          <Reveal as="h2" className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Fractional DemandOS: The Operating System Behind Your Pipeline
          </Reveal>
          <Reveal as="p" className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
            Our proven Fractional Demand Operating System connects positioning, messaging, paid media, and RevOps into one repeatable GTM system
          </Reveal>
        </div>
        <DemandOSColumns columns={columns} />
      </div>
      <div className="energy-line energy-line--delayed" />
    </section>
  );
}

