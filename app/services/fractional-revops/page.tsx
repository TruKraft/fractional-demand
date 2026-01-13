import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import Tilt from '@/components/Tilt';
import ProcessSteps from '@/components/ProcessSteps';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import { LetsTalkButton } from '@/components/CalendlyPopup';
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Fractional RevOps',
  description: 'We embed senior RevOps/GTM engineers into your team to architect HubSpot, automate workflows with Clay and Zapier, enrich and score leads, build best-practice dashboards, and keep your pipeline predictable and clean.',
  keywords: ['fractional RevOps', 'revenue operations', 'HubSpot consulting', 'GTM operations', 'Clay automation', 'Zapier workflows', 'CRM optimization', 'marketing operations', 'sales operations'],
  openGraph: {
    title: 'Fractional RevOps | Fractional Demand',
    description: 'We embed senior RevOps/GTM engineers into your team to architect HubSpot, automate workflows with Clay and Zapier, enrich and score leads, build best-practice dashboards, and keep your pipeline predictable and clean.',
  },
  alternates: {
    canonical: 'https://www.fractionaldemand.com/services/fractional-revops'
  }
};

const testimonials = [
  {
    quote: "The team at Fractional Demand have been fantastic partners to our team here at Merge — helping us to optimize our paid media budget and increase contribution to pipeline. (They're also extremely kind humans, which is just an added bonus)",
    author: 'Zena',
    company: 'Merge',
    image: '/assets/images/Zena Merge Pic.jpeg',
  },
  {
    quote: "It's amazing what can happen when you had a demand generation partner who really works with you to lift up the rest of your GTM function rather than fight for attribution. So THANK YOU — y'all have been an invaluable part of the Digioh marketing team and I am stoked to continue working with you.",
    author: 'Blake',
    company: 'Digioh',
    image: '/assets/images/blake digioh pic.jpeg',
  },
  {
    quote: "Fractional Demand is amazing to work with both on a professional and personal level. It's evident that they truly care about the work they are doing, and consistently go above and beyond what we ask for. They've been crucial for us in navigating paid ads and are incredibly knowledgeable about what they do. Can't say enough good things!",
    author: 'Kate',
    company: 'Incident.io',
    image: '/assets/images/kate incident io pic.jpeg',
  },
  {
    quote: "The Fractional Demand team made an immediate impact. They didn't just advise—they rolled up their sleeves, built a full marketing engine for a new product launch, and helped us operationalize ABM in a way that finally clicked. Their leadership leveled up our strategy, our systems, and our results. Couldn't recommend them more.",
    author: 'Jeff G',
    company: 'Clicklease',
    image: '/assets/images/jeff gagon clicklease pic.jpeg',
  },
  {
    quote: "Fractional Demand was a game-changer for us. They sharpened our messaging, elevated our digital media performance, and helped us understand our ICPs on a whole new level. Thanks to their work, we walked away with a clear, confident ad strategy for the year ahead. These guys are absolute studs.",
    author: 'Ryan',
    company: 'Boostly',
    image: '/assets/images/ryan roberts boostly pic.jpeg',
  },
  {
    quote: "Fractional Demand was instrumental during our transition to hiring a full-time revenue marketer. Their expertise in building email nurture programs, content syndication strategies, influencer collaboration, and developing A/B web testing plans gave us the foundation we needed to scale our demand generation efforts. Beyond the tactical execution, they were always available as a strategic gut check, helping me think through decisions and ensure we were building the right marketing infrastructure. Their fractional support bridged a critical gap and set us up for long-term success!",
    author: 'Jessica',
    company: 'Merge',
    image: '/assets/images/Jessica Merge Pic.jpeg',
  },
];

const faqItems = [
  {
    question: 'Do you build dashboards for us?',
    answer: 'Yes — full-funnel dashboards inside HubSpot for pipeline, revenue, and attribution.',
  },
  {
    question: 'What if our reporting is a mess today?',
    answer: 'We rebuild tracking, attribution, and dashboards from scratch.',
  },
  {
    question: 'Can you build Clay workflows?',
    answer: 'Absolutely — Clay is a core part of the GTM Engineering offering.',
  },
  {
    question: 'Do you require long-term contracts?',
    answer: 'No — everything is month-to-month with 30-day notice.',
  },
];

const processSteps = [
  {
    number: '1',
    title: 'Diagnose',
    description: 'Audit of your entire GTM systems: HubSpot, workflows, routing, tracking, attribution, and reporting.',
    deliverables: ['RevOps Systems Audit', 'Funnel Mapping', 'Routing Audit', 'Dashboard Review', 'Quick Wins + 60-Day Plan'],
  },
  {
    number: '2',
    title: 'Build',
    description: 'Foundational buildout of your RevOps + GTM infrastructure.',
    deliverables: ['Lifecycle automation', 'Lead scoring', 'Routing engine', 'Full-funnel dashboards', 'Attribution framework', 'Data hygiene systems', 'Clay + Zapier workflows', 'Reporting templates'],
  },
  {
    number: '3',
    title: 'Run & Optimize',
    description: 'Weekly operation and optimization of your RevOps system.',
    deliverables: ['Workflow updates', 'Data cleanup', 'Funnel optimization', 'New Clay/Zapier automation', 'Dashboard iteration', 'Weekly insights for GTM'],
  },
  {
    number: '4',
    title: 'Scale',
    description: 'Multiply efficiency and GTM visibility.',
    deliverables: ['Advanced Clay workflows', 'ABM automation', 'Outbound signal mapping', 'Lifecycle expansion', 'Exec-level dashboards', 'Forecasting support', 'Sales alignment refinement'],
  },
];

const samplePlays = [
  'HubSpot rebuild (routing + lifecycle + full-funnel dashboards)',
  'Clay workflow: job-change → SDR → enrichment',
  'Automated ICP scoring updates',
  'Data hygiene + dedupe automations',
  'Attribution setup (simple + accurate)',
  'Outbound (Apollo) automation',
  'Clay → HubSpot → Slack alerting loops',
  'Executive dashboard builds',
  'Weekly reporting + GTM insights',
  'MQA alerting',
  'Lifecycle rebuild (lead → customer → expansion)',
];

export default function FractionalRevOpsPage() {
  const serviceSchema = getServiceSchema({
    name: 'Fractional RevOps & GTM Engineering',
    description: 'Senior RevOps engineers who architect HubSpot, automate with Clay & Zapier, build dashboards, and keep your GTM systems running smoothly. Embedded RevOps for predictable pipeline.',
    url: 'https://www.fractionaldemand.com/services/fractional-revops',
    serviceType: 'Revenue Operations, GTM Engineering, HubSpot Architecture, Marketing Automation',
    offers: {
      name: 'Fractional RevOps Service',
      description: 'Includes HubSpot architecture, Clay workflows, dashboards, attribution, lead scoring, automation, and GTM system optimization'
    }
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://www.fractionaldemand.com' },
    { name: 'Services', url: 'https://www.fractionaldemand.com/services/fractional-revops' },
    { name: 'Fractional RevOps', url: 'https://www.fractionaldemand.com/services/fractional-revops' }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Nav />
      <main id="main">
        {/* Hero */}
        <section className="bg-black text-white relative overflow-hidden bg-grid-dots">
          <div className="container mx-auto px-4 py-24 md:py-32">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Content */}
              <div>
                <Reveal as="h1" className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
                  Fractional RevOps That Makes Your Entire GTM System Work.
                </Reveal>
                <Reveal as="p" className="text-white/80 text-xl md:text-2xl leading-relaxed mb-8">
                  We embed senior GTM engineers into your team to architect HubSpot, automate workflows with Clay and Zapier, enrich and score leads, build best-practice dashboards, and keep your pipeline predictable and clean.
                </Reveal>
                <Reveal>
                  <Tilt>
                    <LetsTalkButton className="btn btn-primary btn-md md:btn-lg btn-shine">
                      Book a RevOps Audit
                    </LetsTalkButton>
                  </Tilt>
                </Reveal>
              </div>
              
              {/* Right: Visual */}
              <Reveal className="hidden lg:block">
                <div className="energy-card rounded-3xl border border-white/10 bg-white/5 p-8 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-24 h-24 mx-auto mb-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <p className="text-white/60 text-lg">RevOps + GTM Engineering</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Section 1 */}
        <section className="bg-black text-white relative overflow-hidden bg-noise">
          <div className="energy-line" />
          <div className="container mx-auto px-4 py-24 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
              {/* Left: Problem */}
              <div className="lg:sticky lg:top-32">
                <Reveal as="h2" className="text-4xl md:text-5xl tracking-tight mb-6">
                  GTM breaks when RevOps breaks.
                </Reveal>
                <Reveal as="p" className="text-white/80 text-xl leading-relaxed mb-6">
                  Most teams don't have a strategy problem. They have a systems problem.
                </Reveal>
                <Reveal as="p" className="text-white/60 text-lg leading-relaxed">
                  You can have great marketing, paid media, and sales… But if you don't have accurate data, clean automation, and full-funnel reporting, everything breaks down.
                </Reveal>
              </div>
              
              {/* Right: Capabilities */}
              <div>
                <Reveal as="p" className="text-white/50 text-sm uppercase tracking-widest mb-6">You need a RevOps partner who</Reveal>
                <ul className="space-y-4">
                  {[
                    'Understands HubSpot deeply',
                    'Integrates Clay, Zapier, Apollo, AI',
                    'Builds GTM systems that scale',
                    'Creates dashboards that give your team full visibility',
                    'Aligns sales + marketing around definitions and handoffs',
                    'Doesn\'t just fix issues. Builds systems.',
                    'Operates inside your GTM team, not outside it',
                  ].map((item, idx) => (
                    <Reveal key={idx}>
                      <li className="flex items-center gap-4 text-white/90 text-lg py-3 border-b border-white/10">
                        <span className="w-8 h-8 rounded-full bg-[#021da8] flex items-center justify-center text-sm text-white shrink-0">
                          {idx + 1}
                        </span>
                        {item}
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="energy-line energy-line--delayed" />
        </section>

        {/* Section 2 - What's Included */}
        <section className="bg-black text-white relative overflow-hidden">
          <div className="energy-line" />
          <div className="container mx-auto px-4 py-24 md:py-28">
            <div className="max-w-6xl mx-auto">
              <Reveal className="mb-16">
                <p className="text-white/50 text-sm uppercase tracking-widest mb-4">What's included</p>
                <h2 className="text-4xl md:text-5xl tracking-tight mb-2">
                  Full-stack RevOps + modern GTM engineering
                </h2>
                <p className="text-2xl md:text-3xl text-white/80">
                  Built for efficiency, clarity, and predictable revenue.
                </p>
              </Reveal>
              
              <div className="space-y-6">
                {/* 1. HubSpot Architecture */}
                <Reveal>
                  <div className="group border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="w-12 h-12 rounded-xl bg-[#021da8] flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl mb-3">HubSpot Architecture & System Design</h3>
                        <p className="text-white/60 text-lg mb-4">Complete HubSpot setup, re-architecture, and optimization.</p>
                        <div className="flex flex-wrap gap-2">
                          {['HubSpot setup', 'Object design', 'Lifecycle automation', 'Lead qualification', 'Routing', 'Deal stages', 'Attribution'].map((tag) => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* 2. Dashboards & Reporting */}
                <Reveal>
                  <div className="group border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="w-12 h-12 rounded-xl bg-[#021da8] flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl mb-3">Dashboards & Reporting</h3>
                        <p className="text-white/60 text-lg mb-4">Full-funnel visibility from lead to revenue with executive-level dashboards.</p>
                        <div className="flex flex-wrap gap-2">
                          {['Full-funnel dashboards', 'Channel performance', 'Pipeline health', 'Attribution viz', 'SDR/AE dashboards', 'Revenue forecasting', 'Executive dashboards'].map((tag) => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* 3. GTM Workflows + Automation */}
                <Reveal>
                  <div className="group border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="w-12 h-12 rounded-xl bg-[#021da8] flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl mb-3">GTM Workflows + Automation</h3>
                        <p className="text-white/60 text-lg mb-4">Automated lead progression, routing, and task management across your GTM stack.</p>
                        <div className="flex flex-wrap gap-2">
                          {['Lead automation', 'Routing logic', 'SLAs', 'Workflows', 'Data hygiene', 'Task sequences', 'Intent alerts'].map((tag) => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* 4. GTM Engineering */}
                <Reveal>
                  <div className="group border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="w-12 h-12 rounded-xl bg-[#021da8] flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl mb-3">GTM Engineering</h3>
                        <p className="text-white/60 text-lg mb-4">Advanced automation with Clay, Zapier, and AI-powered enrichment workflows.</p>
                        <div className="flex flex-wrap gap-2">
                          {['Clay workflows', 'AI enrichment', 'Zapier automations', 'Outbound sequences', 'Multi-source enrichment', 'Signal automation', 'ICP scoring', 'Slack alerts', 'AI/LLM triggers'].map((tag) => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* 5. Lead Scoring & Enrichment */}
                <Reveal>
                  <div className="group border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="w-12 h-12 rounded-xl bg-[#021da8] flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl mb-3">Lead Scoring, Enrichment & ICP Modeling</h3>
                        <p className="text-white/60 text-lg mb-4">Intelligent scoring and enrichment to surface your best-fit prospects.</p>
                        <div className="flex flex-wrap gap-2">
                          {['Behavioral scoring', 'Firmographic scoring', 'Intent signals', 'Multi-source enrichment', 'MQL/MQA frameworks', 'Scoring optimization'].map((tag) => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* 6. Embedded Partnership */}
                <Reveal>
                  <div className="group border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="w-12 h-12 rounded-xl bg-[#021da8] flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl mb-3">Embedded Partnership</h3>
                        <p className="text-white/60 text-lg mb-4">We operate like an extension of your GTM team.</p>
                        <div className="flex flex-wrap gap-2">
                          {['Integrated Slack', 'Weekly meetings', 'Cross-functional work', 'Senior operators only', 'GTM team extension'].map((tag) => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
          <div className="energy-line energy-line--delayed" />
        </section>

        {/* Section 3 - Process */}
        <section className="bg-black text-white relative overflow-hidden bg-noise">
          <div className="energy-line" />
          <div className="container mx-auto px-4 py-24 md:py-28">
            <div className="text-center mb-16">
              <Reveal as="h2" className="text-4xl md:text-5xl tracking-tight mb-6">
                The Fractional DemandOS
              </Reveal>
            </div>
            <ProcessSteps steps={processSteps} headline="" />
          </div>
          <div className="energy-line energy-line--delayed" />
        </section>

        {/* Section 4 - Sample Plays */}
        <section className="bg-black text-white relative overflow-hidden">
          <div className="container mx-auto px-4 py-24 md:py-28">
            <div className="max-w-5xl mx-auto">
              <Reveal className="mb-12">
                <p className="text-white/50 text-sm uppercase tracking-widest mb-4">What we do</p>
                <h2 className="text-4xl md:text-5xl tracking-tight">
                  Sample Plays We Run
                </h2>
              </Reveal>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {samplePlays.map((play, idx) => (
                  <Reveal key={idx}>
                    <div className="flex items-center gap-3 py-3 border-b border-white/10">
                      <span className="w-5 h-5 rounded-full bg-[#021da8] flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <p className="text-white/80 text-lg">{play}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 - Testimonials */}
        <Testimonials testimonials={testimonials} headline="Some Of Our Biggest Fans" />

        {/* Section 6 - FAQ */}
        <FAQ items={faqItems} />

        {/* Section 7 - Final CTA */}
        <section className="bg-black text-white relative overflow-hidden bg-grid-dots">
          <div className="energy-line" />
          <div className="container mx-auto px-4 py-24 md:py-28 text-center">
            <div className="mb-10">
              <Reveal as="h2" className="text-4xl md:text-5xl tracking-tight mb-6">
                Ready to Fix Your Funnel and Unlock Complete Visibility?
              </Reveal>
              <Reveal as="p" className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
                Let's audit your systems, clean up your data, build your dashboards, and automate your GTM engine.
              </Reveal>
            </div>
            <Tilt>
              <LetsTalkButton className="btn btn-primary btn-md md:btn-lg btn-shine">
                Book a RevOps Audit
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

