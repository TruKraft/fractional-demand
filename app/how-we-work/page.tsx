import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import Tilt from '@/components/Tilt';
import DemandOSColumns from '@/components/DemandOSColumns';
import IconGrid from '@/components/IconGrid';
import ProcessSteps from '@/components/ProcessSteps';
import EyebrowHeading from '@/components/EyebrowHeading';
import EnergyCard from '@/components/EnergyCard';

export const metadata: Metadata = {
  title: 'How We Work',
  description: 'Fractional DemandOS is our proven operating system for building, running, and scaling predictable pipeline.',
  openGraph: {
    title: 'How We Work: The DemandOS System | Fractional Demand',
    description: 'Fractional DemandOS is our proven operating system for building, running, and scaling predictable pipeline.',
  },
};

const demandOSColumns = [
  {
    header: 'Build',
    items: [
      'Brand positioning',
      'Messaging',
      'ICP development',
      'Offer development',
      'Tracking & measurement',
      'GTM strategy',
      'First campaigns built + launched',
    ],
    outcome: 'A fully aligned GTM foundation and your first wave of demand programs live.',
  },
  {
    header: 'Run',
    items: [
      'Launch and optimize campaigns',
      'Refine offers and messaging',
      'Weekly experiments',
      'Funnel optimization',
      'Align with sales & RevOps',
      'Weekly reporting + insights',
    ],
    outcome: 'Predictable GTM momentum that turns ideas into pipeline.',
  },
  {
    header: 'Scale',
    items: [
      'Expand channels',
      'Increase budgets',
      'Scale top-performing plays',
      'Lifecycle deepening',
      'RevOps automation',
      'Offer expansion',
    ],
    outcome: 'A GTM engine that scales pipeline efficiently and consistently.',
  },
];

const iconGridItems = [
  {
    title: 'Positioning & Messaging',
    items: ['Positioning', 'Messaging', 'ICP segmentation and definition', 'Offer strategy'],
  },
  {
    title: 'Paid Media & Demand',
    items: ['LinkedIn, Meta, Google, X, Reddit', 'Demand creation + demand capture', 'Creative + copy testing', 'Segment + offer testing'],
  },
  {
    title: 'RevOps Infrastructure',
    items: ['HubSpot architecture', 'Lead scoring', 'Routing & workflows', 'Reporting & dashboards'],
  },
  {
    title: 'Lifecycle & Nurtures',
    items: ['First-touch → closed-won', 'In-pipeline nurture', 'Onboarding & expansion', 'Re-engagement flows'],
  },
  {
    title: 'Campaigns & Content',
    items: ['Full campaign builds', 'Test plans & experiments', 'Sales enablement', 'Event/webinar strategy'],
  },
];

const engagementSteps = [
  {
    number: '1',
    title: 'Kickoff + GTM Audit',
    description: 'We assess your positioning, funnel, RevOps, paid media, and messaging.',
    deliverables: ['GTM Scorecard', 'Funnel Health Check', 'Quick Wins', '60-Day Demand Plan'],
  },
  {
    number: '2',
    title: 'Build',
    description: 'We install DemandOS and launch the first programs.',
    deliverables: ['Positioning + messaging', 'Offer development', 'Tracking + reporting', 'Campaign architecture', 'First campaigns live'],
  },
  {
    number: '3',
    title: 'Run',
    description: 'We operate your GTM with hands-on execution.',
    activities: ['Weekly experiments', 'Paid media + lifecycle optimization', 'Creative refreshes', 'Funnel improvements', 'Reporting + insights'],
  },
  {
    number: '4',
    title: 'Scale',
    description: 'Once momentum builds, we multiply it.',
    activities: ['Expand channels', 'Increase budgets', 'Offer + ICP expansion', 'Lifecycle deepening', 'Sales alignment refinement'],
  },
];

const whyItWorks = [
  {
    title: 'Operators, Not Account Managers',
    body: 'You get senior specialists running the system, not junior coordinators.',
  },
  {
    title: 'Strategy + Execution in One Team',
    body: "We don't hand you decks — we build, run, and optimize the system with you.",
  },
  {
    title: 'Embedded into Your Team',
    body: 'Slack access, standups, cross-functional meetings — we feel in-house.',
  },
  {
    title: 'Unified GTM System',
    body: 'No more siloed channels or disjointed reporting.',
  },
  {
    title: 'Fast Time-to-Impact',
    body: 'First campaigns live in days, not months.',
  },
];

const successItems = [
  'Clear, aligned messaging',
  'Stronger offers that convert',
  'Efficient paid media spend',
  'Cleaner RevOps & reporting',
  'Higher SQL/SQO quality',
  'Predictable monthly pipeline',
  'Faster sales cycles',
  'Less chaos, more clarity',
];

export default function HowWeWorkPage() {
  return (
    <>
      <Nav />
      <main id="main">
        {/* Hero */}
        <section className="bg-black text-white relative overflow-hidden bg-grid-dots">
          <div className="container mx-auto px-4 py-24 md:py-32">
            <div className="text-center mb-10">
              <Reveal as="h1" className="text-4xl md:text-5xl lg:text-6xl  tracking-tight mb-6">
                How We Work: The DemandOS System
              </Reveal>
              <Reveal as="p" className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
                Fractional DemandOS is our proven operating system for building, running, and scaling predictable pipeline. It connects positioning, messaging, paid media, RevOps, and lifecycle into one GTM engine — operated by senior specialists embedded directly into your team.
              </Reveal>
            </div>
            <div className="flex justify-center">
              <Tilt>
                <a
                  href="https://calendly.com/fractionaldemand/30min"
                  target="_blank"
                  rel="noopener"
                  className="btn btn-primary btn-md md:btn-lg btn-shine"
                >
                  Let&apos;s Talk
                </a>
              </Tilt>
            </div>
          </div>
        </section>

        {/* Section 1 - Why DemandOS Exists */}
        <section className="bg-black text-white relative overflow-hidden bg-noise">
          <div className="energy-line" />
          <div className="container mx-auto px-4 py-24 md:py-28">
            <div className="text-center mb-12">
              <Reveal as="h2" className="text-4xl md:text-5xl  tracking-tight mb-6">
                Strategy without execution breaks. Execution without strategy burns money. You need a GTM system that connects both strategy and execution.
              </Reveal>
            </div>
            <Reveal as="p" className="text-center text-white/80 text-xl mb-12">
              Most teams don&apos;t fail because of effort — they fail because nothing connects.
            </Reveal>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {[
                'Positioning lives in a doc',
                'Messaging is inconsistent',
                'Paid media runs in isolation',
                'RevOps is a backlog',
                'Content lacks offers',
                'Funnel stages are unclear',
                'No single system ties it all together',
              ].map((item, idx) => (
                <Reveal key={idx}>
                  <div className="energy-card rounded-2xl border border-white/10 p-6 bg-white/5">
                    <div className="flex items-start gap-3">
                      <span className="text-white/60 mt-1.5 shrink-0">•</span>
                      <p className="text-white/80 text-lg leading-relaxed">{item}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal as="p" className="text-center text-white/80 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
              DemandOS unifies your GTM function into one repeatable, scalable, measurable system — and then we run it with you.
            </Reveal>
          </div>
          <div className="energy-line energy-line--delayed" />
        </section>

        {/* Section 2 - The DemandOS Framework */}
        <section className="bg-black text-white relative overflow-hidden">
          <div className="energy-line" />
          <div className="container mx-auto px-4 py-24 md:py-28">
            <div className="text-center mb-16">
              <Reveal as="h2" className="text-4xl md:text-5xl  tracking-tight mb-6">
                The DemandOS System
              </Reveal>
              <Reveal as="p" className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
                Everything we do fits into one operating system that compounds over time.
              </Reveal>
            </div>
            <DemandOSColumns columns={demandOSColumns} />
          </div>
          <div className="energy-line energy-line--delayed" />
        </section>

        {/* Section 3 - What DemandOS Includes */}
        <IconGrid
          items={iconGridItems}
          headline="What DemandOS Actually Covers"
          subcopy="Your marketing, sales, and RevOps shouldn't operate as separate silos. DemandOS unifies them."
        />

        {/* Section 4 - The DemandOS Engagement Model */}
        <ProcessSteps steps={engagementSteps} headline="Here's What Working With Us Looks Like" />

        {/* Section 5 - Why DemandOS Works */}
        <section className="bg-black text-white relative overflow-hidden bg-noise">
          <div className="energy-line" />
          <div className="container mx-auto px-4 py-24 md:py-28">
            <div className="text-center mb-16">
              <Reveal as="h2" className="text-4xl md:text-5xl  tracking-tight mb-6">
                Why Teams Choose Fractional DemandOS
              </Reveal>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {whyItWorks.map((item, idx) => (
                <Reveal key={idx}>
                  <div className="energy-card rounded-3xl border border-white/10 p-8 bg-white/5 bg-noise h-full">
                    <div className="text-3xl  text-white/20 mb-3">{idx + 1}.</div>
                    <h3 className="text-2xl md:text-3xl  mb-3">{item.title}</h3>
                    <p className="text-white/80 text-lg leading-relaxed">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="energy-line energy-line--delayed" />
        </section>

        {/* Section 6 - What Success Looks Like */}
        <section className="bg-black text-white relative overflow-hidden">
          <div className="energy-line" />
          <div className="container mx-auto px-4 py-24 md:py-28">
            <div className="text-center mb-12">
              <Reveal as="h2" className="text-4xl md:text-5xl  tracking-tight mb-6">
                What Happens When Your GTM Works Like a System
              </Reveal>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
              {successItems.map((item, idx) => (
                <Reveal key={idx}>
                  <div className="energy-card rounded-2xl border border-white/10 p-6 bg-white/5">
                    <div className="flex items-start gap-3">
                      <span className="text-white/60 mt-1.5 shrink-0">•</span>
                      <p className="text-white/80 text-lg leading-relaxed">{item}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="energy-line energy-line--delayed" />
        </section>

        {/* Section 7 - Final CTA */}
        <section className="bg-black text-white relative overflow-hidden bg-grid-dots">
          <div className="energy-line" />
          <div className="container mx-auto px-4 py-24 md:py-28 text-center">
            <div className="mb-10">
              <Reveal as="h2" className="text-4xl md:text-5xl  tracking-tight mb-6">
                Ready to Install Your DemandOS?
              </Reveal>
              <Reveal as="p" className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
                Let's diagnose your GTM system and map a plan to predictable pipeline.
              </Reveal>
            </div>
            <Tilt>
              <a
                href="https://calendly.com/fractionaldemand/30min"
                target="_blank"
                rel="noopener"
                className="btn btn-primary btn-md md:btn-lg btn-shine"
              >
                Book a DemandOS Session
              </a>
            </Tilt>
          </div>
          <div className="energy-line energy-line--delayed" />
        </section>
      </main>
      <Footer />
    </>
  );
}

