import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import Tilt from '@/components/Tilt';
import ProcessSteps from '@/components/ProcessSteps';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import EyebrowHeading from '@/components/EyebrowHeading';
import EnergyCard from '@/components/EnergyCard';

export const metadata: Metadata = {
  title: 'Fractional Head of Marketing',
  description: 'A senior marketing leader embedded directly into your team—someone who owns strategy, leads execution, and builds the systems that turn ideas into pipeline.',
  openGraph: {
    title: 'Fractional Head of Marketing | Fractional Demand',
    description: 'A senior marketing leader embedded directly into your team—someone who owns strategy, leads execution, and builds the systems that turn ideas into pipeline.',
  },
};

const testimonials = [
  {
    quote: "The team at Fractional Demand have been fantastic partners to our team here at Merge — helping us to optimize our paid media budget and increase contribution to pipeline. (They're also extremely kind humans, which is just an added bonus)",
    author: 'Zena',
    company: 'Merge',
    image: '/assets/images/placeholder-avatar.jpg',
  },
  {
    quote: "It's amazing what can happen when you had a demand generation partner who really works with you to lift up the rest of your GTM function rather than fight for attribution. So THANK YOU — y'all have been an invaluable part of the Digioh marketing team and I am stoked to continue working with you.",
    author: 'Blake',
    company: 'Digioh',
    image: '/assets/images/placeholder-avatar.jpg',
  },
  {
    quote: "Fractional Demand is amazing to work with both on a professional and personal level. It's evident that they truly care about the work they are doing, and consistently go above and beyond what we ask for. They've been crucial for us in navigating paid ads and are incredibly knowledgeable about what they do. Can't say enough good things!",
    author: 'Kate',
    company: 'Incident.io',
    image: '/assets/images/placeholder-avatar.jpg',
  },
];

const faqItems = [
  {
    question: 'How senior is the Fractional Head of Marketing?',
    answer: 'Your fractional leader has 10+ years of full-funnel B2B experience, including in-house roles',
  },
  {
    question: 'How many hours do I get?',
    answer: 'Most engagements provide the equivalent of 1–2 days per week of senior leadership + execution.',
  },
  {
    question: 'Do you actually execute or just direct?',
    answer: 'We are hands-on. We write, build, launch, and operate marketing programs.',
  },
  {
    question: 'Do you work with my existing team?',
    answer: 'Yes — we lead your internal team, partners, and vendors as your acting marketing leader.',
  },
  {
    question: 'How fast can you start?',
    answer: 'Typically within 1–2 weeks.',
  },
  {
    question: 'Is there a long-term commitment?',
    answer: 'No — all services are month-to-month with a 30-day notice.',
  },
];

const processSteps = [
  {
    number: '1',
    title: 'Diagnose',
    description: 'We assess your GTM strategy, funnel health, positioning, campaigns, ICP, and metrics.',
    deliverables: ['GTM Audit', 'Funnel Analysis', 'Quick Wins', '60-Day Marketing Plan'],
  },
  {
    number: '2',
    title: 'Build',
    description: 'We build the marketing foundation: positioning, offers, messaging, tracking, funnel structure, and first wave of campaigns.',
  },
  {
    number: '3',
    title: 'Run & Optimize',
    description: 'We lead your marketing function — weekly rhythms, campaign launches, content strategy, experiments, and cross-functional alignment.',
  },
  {
    number: '4',
    title: 'Scale',
    description: 'Once the system is running smoothly, we expand channels, multiply what works, refine offers, and set your team up for sustainable growth.',
  },
];

const samplePlays = [
  'Positioning + Messaging workshops',
  'Customer interviews',
  'Revamp ICP + messaging for fast alignment',
  'Design and launch multi-channel GTM campaigns',
  'Create webinar and event strategy',
  'Build nurture sequence and lifecycle strategy',
  'Launch content engines (testimonial)',
  'Partner with sales to improve conversion rates',
  'Define SQL/SQO load and improve funnel hygiene',
  'Build reporting infrastructure tied to revenue',
];

export default function FractionalHeadOfMarketingPage() {
  return (
    <>
      <Nav />
      <main id="main">
        {/* Hero */}
        <section className="bg-black text-white relative overflow-hidden bg-grid-dots">
          <div className="container mx-auto px-4 py-24 md:py-32">
            <div className="text-center mb-10">
              <Reveal as="h1" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Fractional Head of Marketing That Builds GTM Momentum Fast.
              </Reveal>
              <Reveal as="p" className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
                A senior marketing leader embedded directly into your team—someone who owns strategy, leads execution, and builds the systems that turn ideas into pipeline. Hands-on keyboard doer, not a slide-making strategist who hands you more homework.
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
                  Book a Strategy Session
                </a>
              </Tilt>
            </div>
          </div>
        </section>

        {/* Section 1 */}
        <section className="bg-black text-white relative overflow-hidden bg-noise">
          <div className="energy-line" />
          <div className="container mx-auto px-4 py-24 md:py-28">
            <div className="text-center mb-12">
              <Reveal as="h2" className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Most marketing teams aren't missing effort—they're missing experienced leadership.
              </Reveal>
            </div>
            <Reveal as="p" className="text-center text-white/80 text-xl mb-6">
              You have channels, tools, and maybe even a marketer or two.
            </Reveal>
            <Reveal as="p" className="text-center text-white/80 text-xl mb-12">
              But you're missing the person who can pull it all together — someone who can:
            </Reveal>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {[
                'Build out positioning',
                'Build out messaging',
                'Develop the correct offer(s)',
                'Set the GTM strategy',
                'Prioritize the right campaigns',
                'Build the offer → messaging → funnel',
                'Work cross-functionally with sales',
                'Lead execution, not just direct it',
                'Create momentum instead of chaos',
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
            <Reveal as="p" className="text-center text-white/80 text-xl mt-12">
              A <strong>Fractional Head of Marketing</strong> gives you senior leadership now—with hands-on execution built into the model.
            </Reveal>
          </div>
          <div className="energy-line energy-line--delayed" />
        </section>

        {/* Section 2 - What's Included */}
        <section className="bg-black text-white relative overflow-hidden">
          <div className="energy-line" />
          <div className="container mx-auto px-4 py-24 md:py-28">
            <div className="text-center mb-16">
              <Reveal as="h2" className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Strategic leadership. Hands-on execution. Full-funnel ownership.
              </Reveal>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
              <Reveal>
                <div className="energy-card rounded-3xl border border-white/10 p-8 bg-white/5 bg-noise h-full">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">GTM Strategy & Leadership</h3>
                <ul className="space-y-3 text-white/80 text-lg leading-relaxed">
                  {[
                    'Quarterly GTM plan',
                    'Offer development + positioning alignment',
                    'Messaging frameworks across the funnel',
                    'Experiment roadmap + prioritization',
                    'Marketing OKRs tied to revenue goals',
                    'Align sales + marketing around SQL/SQO definitions',
                    'Weekly leadership + cross-functional meetings',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-white/60 mt-1.5 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                </div>
              </Reveal>

              <Reveal>
                <div className="energy-card rounded-3xl border border-white/10 p-8 bg-white/5 bg-noise h-full">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Campaigns & Execution (Hands-on keyboard)</h3>
                <ul className="space-y-3 text-white/80 text-lg leading-relaxed">
                  {[
                    'Plan → build → launch campaigns',
                    'Manage email programs, webinars, events, content, and paid media partners',
                    'Support and guide internal junior marketers',
                    'Own timelines, launches, and workflows',
                    'Manager vendor relationships',
                    'Design test plans and build learning loops',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-white/60 mt-1.5 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                </div>
              </Reveal>

              <Reveal>
                <div className="energy-card rounded-3xl border border-white/10 p-8 bg-white/5 bg-noise h-full">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Funnel, Analytics & Measurement</h3>
                <ul className="space-y-3 text-white/80 text-lg leading-relaxed">
                  {[
                    'Pipeline modeling',
                    'Full campaign build out',
                    'Measurement & attribution (simple, usable frameworks)',
                    'KPI dashboards',
                    'Funnel analysis: MQL → SQL → Opportunity → Closed Won',
                    'Lead scoring + intent framework',
                    'Weekly reporting with insights, not vanity metrics',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-white/60 mt-1.5 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                </div>
              </Reveal>

              <Reveal>
                <div className="energy-card rounded-3xl border border-white/10 p-8 bg-white/5 bg-noise h-full">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Embedded Partnership</h3>
                <ul className="space-y-3 text-white/80 text-lg leading-relaxed">
                  {[
                    'We join your Slack',
                    'Attend GTM standups',
                    'Partner with founders, CS, product, and sales',
                    'No junior account managers—just a senior operator',
                    'Feels like an in-house leader, not a vendor',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-white/60 mt-1.5 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                </div>
              </Reveal>
            </div>
          </div>
          <div className="energy-line energy-line--delayed" />
        </section>

        {/* Section 3 - DemandOS System */}
        <section className="bg-black text-white relative overflow-hidden bg-noise">
          <div className="energy-line" />
          <div className="container mx-auto px-4 py-24 md:py-28">
            <div className="text-center mb-16">
              <Reveal as="h2" className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Our DemandOS System
              </Reveal>
              <Reveal as="p" className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
                A proven operating system that builds, runs, and scales your marketing function.
              </Reveal>
            </div>
            <ProcessSteps steps={processSteps} headline="" />
          </div>
          <div className="energy-line energy-line--delayed" />
        </section>

        {/* Section 4 - Sample Plays */}
        <section className="bg-black text-white relative overflow-hidden">
          <div className="energy-line" />
          <div className="container mx-auto px-4 py-24 md:py-28">
            <div className="text-center mb-12">
              <Reveal as="h2" className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Sample Plays We Run
              </Reveal>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
              {samplePlays.map((play, idx) => (
                <Reveal key={idx}>
                  <div className="energy-card rounded-2xl border border-white/10 p-6 bg-white/5">
                    <div className="flex items-start gap-3">
                      <span className="text-white/60 mt-1.5 shrink-0">•</span>
                      <p className="text-white/80 text-lg leading-relaxed">{play}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="energy-line energy-line--delayed" />
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
              <Reveal as="h2" className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Ready to Add Instant GTM Leadership?
              </Reveal>
              <Reveal as="p" className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
                Let's map your GTM plan, assess your funnel, and get your marketing system running the right way.
              </Reveal>
            </div>
            <Tilt>
              <a
                href="https://calendly.com/fractionaldemand/30min"
                target="_blank"
                rel="noopener"
                className="btn btn-primary btn-md md:btn-lg btn-shine"
              >
                Book a Strategy Session
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

