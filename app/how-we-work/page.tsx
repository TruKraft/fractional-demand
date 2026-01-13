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
import { LetsTalkButton } from '@/components/CalendlyPopup';

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
        <section className="relative overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, #000000 0%, #0a1628 50%, #021da8 150%)' }}>
          <div className="absolute inset-0 bg-grid-dots opacity-30" />
          
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Content */}
              <div>
                <Reveal as="h1" className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
                  The DemandOS System
                </Reveal>
                <Reveal as="p" className="text-white/80 text-xl md:text-2xl leading-relaxed mb-8">
                  Our proven operating system for building, running, and scaling predictable pipeline. It connects positioning, messaging, paid media, RevOps, and lifecycle into one GTM engine.
                </Reveal>
                <Reveal>
                  <Tilt>
                    <LetsTalkButton className="btn btn-primary btn-md md:btn-lg btn-shine">
                      Let&apos;s Talk
                    </LetsTalkButton>
                  </Tilt>
                </Reveal>
              </div>
              
              {/* Right: Visual - Build/Run/Scale */}
              <Reveal className="hidden lg:block">
                <div className="space-y-4">
                  {[
                    { phase: 'Build', desc: 'Positioning, messaging, offers, tracking, first campaigns' },
                    { phase: 'Run', desc: 'Weekly execution, experiments, optimization, reporting' },
                    { phase: 'Scale', desc: 'Expand channels, multiply wins, deepen lifecycle' },
                  ].map((item, idx) => (
                    <div key={item.phase} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-white/20 transition-colors">
                      <div className="w-14 h-14 rounded-xl bg-[#021da8] flex items-center justify-center text-white text-2xl shrink-0">
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="text-xl text-white mb-2">{item.phase}</h3>
                        <p className="text-white/70 text-base">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Section 1 - Why DemandOS Exists */}
        <section className="bg-black text-white relative overflow-hidden">
          <div className="container mx-auto px-4 py-24 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
              {/* Left: Problem */}
              <div className="lg:sticky lg:top-32">
                <Reveal as="h2" className="text-4xl md:text-5xl tracking-tight mb-6">
                  Strategy without execution breaks. Execution without strategy burns money.
                </Reveal>
                <Reveal as="p" className="text-white/60 text-lg leading-relaxed mb-6">
                  Most teams don&apos;t fail because of effort — they fail because nothing connects.
                </Reveal>
                <Reveal as="p" className="text-white/80 text-lg leading-relaxed">
                  <strong className="text-white">DemandOS</strong> unifies your GTM function into one repeatable, scalable, measurable system — and then we run it with you.
                </Reveal>
              </div>
              
              {/* Right: Pain points */}
              <div>
                <Reveal as="p" className="text-white/50 text-sm uppercase tracking-widest mb-6">Sound familiar?</Reveal>
                <ul className="space-y-4">
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
                      <li className="flex items-center gap-4 text-white/90 text-lg py-3 border-b border-white/10">
                        <span className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-sm text-white/60 shrink-0">
                          ✕
                        </span>
                        {item}
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>
          </div>
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
        <section className="bg-black text-white relative overflow-hidden">
          <div className="container mx-auto px-4 py-24 md:py-28">
            <div className="max-w-6xl mx-auto">
              <Reveal className="mb-16">
                <p className="text-white/50 text-sm uppercase tracking-widest mb-4">What's covered</p>
                <h2 className="text-4xl md:text-5xl tracking-tight mb-4">
                  What DemandOS Actually Covers
                </h2>
                <p className="text-white/60 text-xl max-w-2xl">
                  Your marketing, sales, and RevOps shouldn't operate as separate silos. DemandOS unifies them.
                </p>
              </Reveal>
              
              <div className="space-y-6">
                {iconGridItems.map((item, idx) => (
                  <Reveal key={idx}>
                    <div className="group border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors">
                      <div className="flex flex-col md:flex-row md:items-start gap-6">
                        <div className="w-12 h-12 rounded-xl bg-[#021da8] flex items-center justify-center shrink-0">
                          <span className="text-white text-xl">{idx + 1}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl mb-3">{item.title}</h3>
                          <div className="flex flex-wrap gap-2">
                            {item.items.map((tag) => (
                              <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm">{tag}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - The DemandOS Engagement Model */}
        <ProcessSteps steps={engagementSteps} headline="Here's What Working With Us Looks Like" />

        {/* Section 5 - Why DemandOS Works */}
        <section className="bg-black text-white relative overflow-hidden">
          <div className="container mx-auto px-4 py-24 md:py-28">
            <div className="max-w-6xl mx-auto">
              <Reveal className="mb-16">
                <p className="text-white/50 text-sm uppercase tracking-widest mb-4">Why us</p>
                <h2 className="text-4xl md:text-5xl tracking-tight">
                  Why Teams Choose Fractional DemandOS
                </h2>
              </Reveal>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {whyItWorks.map((item, idx) => (
                  <Reveal key={idx}>
                    <div className="group">
                      <div className="relative w-16 h-16 mb-5">
                        <div className="absolute inset-0 rounded-2xl bg-[#021da8] rotate-3 group-hover:rotate-6 transition-transform" />
                        <div className="absolute inset-0 rounded-2xl bg-[#021da8] flex items-center justify-center text-white text-2xl font-semibold">
                          {idx + 1}
                        </div>
                      </div>
                      <h3 className="text-xl md:text-2xl mb-2">{item.title}</h3>
                      <p className="text-white/60 text-base leading-relaxed">{item.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 - What Success Looks Like */}
        <section className="bg-black text-white relative overflow-hidden">
          <div className="container mx-auto px-4 py-24 md:py-28">
            <div className="max-w-5xl mx-auto">
              <Reveal className="mb-12">
                <p className="text-white/50 text-sm uppercase tracking-widest mb-4">The results</p>
                <h2 className="text-4xl md:text-5xl tracking-tight">
                  What Happens When Your GTM Works Like a System
                </h2>
              </Reveal>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {successItems.map((item, idx) => (
                  <Reveal key={idx}>
                    <div className="flex items-center gap-4 py-4 border-b border-white/10">
                      <span className="w-6 h-6 rounded-full bg-[#021da8] flex items-center justify-center shrink-0">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <p className="text-white/90 text-lg">{item}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
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
              <LetsTalkButton className="btn btn-primary btn-md md:btn-lg btn-shine">
                Book a DemandOS Session
              </LetsTalkButton>
            </Tilt>
          </div>
          <div className="energy-line energy-line--delayed" />
        </section>
      </main>
      <Footer />
    </>
  );
}

