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
        'Own & Operate GTM System',
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
        'Increase efficiencies',
        'Multiply winning plays',
        'Systematize what works',
        'Turn GTM engine into predictable revenue engine',
      ],
    },
  ];

  return (
    <section className="text-white relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-indigo-950/15 to-black" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/8 rounded-full blur-[120px]" />
      
      <div className="energy-line relative z-10" />
      <div className="container mx-auto px-4 py-24 md:py-28 relative z-10">
        <div className="text-center mb-16">
          <Reveal as="h2" className="text-4xl md:text-5xl  tracking-tight mb-6">
            Fractional DemandOS: <br />The Operating System Behind Your Pipeline
          </Reveal>
          <Reveal as="p" className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
            Our proven Fractional Demand Operating System connects positioning, messaging, paid media, lifecycle marketing, and RevOps into one repeatable GTM system
          </Reveal>
        </div>
        <DemandOSColumns columns={columns} />
      </div>
      <div className="energy-line energy-line--delayed relative z-10" />
    </section>
  );
}

