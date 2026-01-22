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
import { LetsTalkButton } from '@/components/CalendlyPopup';
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Fractional Head of Marketing',
  description: 'A senior marketing leader embedded directly into your team—someone who owns strategy, leads execution, and builds the systems that turn ideas into pipeline.',
  keywords: ['fractional CMO', 'fractional chief marketing officer', 'marketing leadership', 'fractional marketing director', 'B2B marketing strategy', 'GTM strategy', 'marketing executive', 'part-time CMO'],
  openGraph: {
    title: 'Fractional Head of Marketing | Fractional Demand',
    description: 'A senior marketing leader embedded directly into your team—someone who owns strategy, leads execution, and builds the systems that turn ideas into pipeline.',
  },
  alternates: {
    canonical: 'https://www.fractionaldemand.com/services/fractional-head-of-marketing'
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
  'Built + launch content engine',
  'Partner with sales to improve conversion rates',
  'Define funnel stages, handoffs, implement best practices',
  'Build reporting infrastructure tied to revenue',
];

export default function FractionalHeadOfMarketingPage() {
  const serviceSchema = getServiceSchema({
    name: 'Fractional Head of Marketing (Fractional CMO)',
    description: 'Senior marketing leadership embedded into your team. Hands-on strategy, execution, and GTM systems that turn ideas into pipeline. 10+ years B2B experience building demand systems.',
    url: 'https://www.fractionaldemand.com/services/fractional-head-of-marketing',
    serviceType: 'Marketing Leadership, Fractional CMO, GTM Strategy, Marketing Management',
    offers: {
      name: 'Fractional CMO Service',
      description: 'Includes GTM strategy, positioning, messaging, campaign execution, funnel optimization, team leadership, and revenue reporting'
    }
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://www.fractionaldemand.com' },
    { name: 'Services', url: 'https://www.fractionaldemand.com/services/fractional-head-of-marketing' },
    { name: 'Fractional Head of Marketing', url: 'https://www.fractionaldemand.com/services/fractional-head-of-marketing' }
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
                  A Fractional Head of Marketing That Builds GTM Momentum Fast.
                </Reveal>
                <Reveal as="p" className="text-white/80 text-xl md:text-2xl leading-relaxed mb-8">
                  Bring in a Head of Marketing who actually builds. Strategy, execution, and the GTM systems that create pipeline all live with one embedded leader, using proven playbooks and battle-tested frameworks. No ivory-tower advice, no endless decks, just senior ownership and hands-on execution
                </Reveal>
                <Reveal>
                  <Tilt>
                    <LetsTalkButton className="btn btn-primary btn-md md:btn-lg btn-shine">
                      Book a Strategy Session
                    </LetsTalkButton>
                  </Tilt>
                </Reveal>
              </div>
              
              {/* Right: Visual */}
              <Reveal className="hidden lg:block">
                <div className="relative aspect-square flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 676 676" style={{ zIndex: 5 }}>
                    {/* Base white circle - subtle hairline */}
                    <circle 
                      cx="313.183" 
                      cy="372.832" 
                      r="248.674" 
                      fill="none" 
                      stroke="rgba(255,255,255,0.53)" 
                      strokeWidth="2"
                    />
                    {/* Animated energy blip - clockwise */}
                    <circle 
                      cx="313.183" 
                      cy="372.832" 
                      r="248.674" 
                      fill="none" 
                      stroke="rgba(255,255,255,0.9)" 
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="energy-circle-cmo-blip"
                    />
                  </svg>
                  <img 
                    src="/assets/images/fractional-head-of-marketing.svg" 
                    alt="GTM Leadership and Momentum" 
                    className="w-full h-full object-contain relative z-10"
                  />
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
                  You're not missing effort. You're missing leadership.
                </Reveal>
                <Reveal as="p" className="text-white/80 text-xl leading-relaxed mb-6">
                  You have channels, tools, and maybe even a marketer or two. But you're missing the person who can pull it all together.
                </Reveal>
                <Reveal as="p" className="text-white/60 text-lg leading-relaxed">
                  A <strong className="text-white">Fractional Head of Marketing</strong> gives you senior leadership now, with hands-on execution built into the model.
                </Reveal>
              </div>
              
              {/* Right: Capabilities */}
              <div>
                <Reveal as="p" className="text-white/50 text-sm uppercase tracking-widest mb-6">What you get</Reveal>
                <ul className="space-y-4">
                  {[
                    'Build out positioning & messaging',
                    'Develop the correct offer(s)',
                    'Set the GTM strategy',
                    'Prioritize the right campaigns',
                    'Build the offer → messaging → funnel',
                    'Work cross-functionally with sales',
                    'Lead execution, not just direct it',
                    'Create momentum instead of chaos',
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
                <h2 className="text-4xl md:text-5xl tracking-tight">
                  Everything you need to run marketing like a system.
                </h2>
              </Reveal>
              
              <div className="space-y-6">
                {/* GTM Strategy */}
                <Reveal>
                  <div className="group border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="w-12 h-12 rounded-xl bg-[#021da8] flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl mb-3">GTM Strategy & Leadership</h3>
                        <p className="text-white/60 text-lg mb-4">Quarterly plans, OKRs, and cross-functional alignment tied to revenue.</p>
                        <div className="flex flex-wrap gap-2">
                          {['GTM planning', 'Positioning', 'Messaging', 'OKRs', 'Sales alignment'].map((tag) => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* Campaigns & Execution */}
                <Reveal>
                  <div className="group border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="w-12 h-12 rounded-xl bg-[#021da8] flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl mb-3">Campaigns & Execution</h3>
                        <p className="text-white/60 text-lg mb-4">Hands-on keyboard work. We plan, build, launch, and optimize.</p>
                        <div className="flex flex-wrap gap-2">
                          {['Campaign builds', 'Email programs', 'Webinars', 'Vendor management', 'Test plans'].map((tag) => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* Analytics & Measurement */}
                <Reveal>
                  <div className="group border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="w-12 h-12 rounded-xl bg-[#021da8] flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl mb-3">Funnel & Measurement</h3>
                        <p className="text-white/60 text-lg mb-4">Pipeline modeling, attribution, and reporting that drives decisions.</p>
                        <div className="flex flex-wrap gap-2">
                          {['Pipeline modeling', 'Dashboards', 'Campaign Performance', 'Media Mix Modeling'].map((tag) => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* Embedded Partnership */}
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
                        <p className="text-white/60 text-lg mb-4">We lead standups, have a shared Slack channel, and work like an in-house leader.</p>
                        <div className="flex flex-wrap gap-2">
                          {['Slack channel', 'GTM standups', 'Cross-functional', 'Senior operators', 'No handoffs'].map((tag) => (
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

        {/* Section 3 - DemandOS System */}
        <section className="bg-black text-white relative overflow-hidden bg-noise">
          <div className="energy-line" />
          <div className="container mx-auto px-4 py-24 md:py-28">
            <div className="text-center mb-12">
              <Reveal as="h2" className="text-4xl md:text-5xl  tracking-tight mb-6">
                The Fractional DemandOS
              </Reveal>
              <Reveal as="p" className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
                A proven operating system that builds, runs, and scales your marketing.
              </Reveal>
            </div>
            <ProcessSteps steps={processSteps} headline="" />
          </div>
          <div className="energy-line energy-line--delayed" />
        </section>

        {/* Section 4 - Sample Plays */}
        <section className="bg-black text-white relative overflow-hidden">
          <div className="container mx-auto px-4 py-16 md:py-20">
            <div className="max-w-5xl mx-auto">
              <Reveal className="mb-12">
                <p className="text-white/50 text-sm uppercase tracking-widest mb-4">What we do</p>
                <h2 className="text-4xl md:text-5xl tracking-tight">
                  Sample plays we run
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
              <Reveal as="h2" className="text-4xl md:text-5xl  tracking-tight mb-6">
                Ready to Add Instant GTM Leadership?
              </Reveal>
              <Reveal as="p" className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
                Let's map your GTM plan, assess your funnel, and get your marketing system running the right way.
              </Reveal>
            </div>
            <Tilt>
              <LetsTalkButton className="btn btn-primary btn-md md:btn-lg btn-shine">
                Book a Strategy Session
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

