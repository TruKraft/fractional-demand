import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import Tilt from '@/components/Tilt';
import ProcessSteps from '@/components/ProcessSteps';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import EyebrowHeading from '@/components/EyebrowHeading';
import EnergyCard from '@/components/EnergyCard';
import { LetsTalkButton } from '@/components/CalendlyPopup';
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Fractional Paid Media',
  description: 'Senior performance marketers embedded directly into your team to run LinkedIn, Meta, Google, X, and Reddit with a demand system built to generate qualified pipeline.',
  keywords: ['fractional paid media', 'B2B paid advertising', 'LinkedIn ads management', 'Google ads B2B', 'Meta advertising', 'performance marketing', 'paid media agency', 'B2B advertising'],
  openGraph: {
    title: 'Fractional Paid Media | Fractional Demand',
    description: 'Senior performance marketers embedded directly into your team to run LinkedIn, Meta, Google, X, and Reddit with a demand system built to generate qualified pipeline.',
  },
  alternates: {
    canonical: 'https://www.fractionaldemand.com/services/fractional-paid-media'
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
    question: 'How senior are the marketers running my ads?',
    answer: 'On average, our senior performance managers have at least 7+ years of experience running ads',
  },
  {
    question: 'Why does it matter that your senior performance managers have in house experience?',
    answer: "Our team knows what it's like to be in your shoes and own a number.",
  },
  {
    question: 'What channels do you manage?',
    answer: 'LinkedIn, Meta, Google, Reddit, X, YouTube, Google Display Network, and select emerging B2B channels.',
  },
  {
    question: 'Do you produce creative?',
    answer: 'We do—we handle ad copy, concepts, ad images, headlines, and static designs.',
  },
  {
    question: 'How fast can you start?',
    answer: 'Typically within 1–2 weeks.',
  },
  {
    question: "What if I don't see the results I want to see?",
    answer: "We don't believe in long term contracts—all of our contracts are month-to-month. We simply ask for a 30 day notice to cancel so we can ensure a smooth transition.",
  },
];

const processSteps = [
  {
    number: '1',
    title: 'Diagnose',
    description: 'Assessment of your funnel, creative, measurement, and current media performance.',
    deliverables: ['Account audit', 'Testing + Optimization Strategy', 'Paid Media Strategy'],
  },
  {
    number: '2',
    title: 'Build',
    description: 'Set up or rebuild your paid media system: campaigns, ICP segments, messaging, creative approach, tracking, attribution.',
  },
  {
    number: '3',
    title: 'Run & Optimize',
    description: 'Weekly execution cycles, creative refreshes, offer testing, audience refinement, and reporting tied to SQL/SQO/Revenue.',
  },
  {
    number: '4',
    title: 'Scale',
    description: 'Multiply what works: expand channels, increase budgets, and push deeper into demand creation + capture at the same time.',
  },
];

export default function FractionalPaidMediaPage() {
  const serviceSchema = getServiceSchema({
    name: 'Fractional Paid Media Management',
    description: 'Senior performance marketers embedded directly into your team to run LinkedIn, Meta, Google, X, and Reddit with a demand system built to generate qualified pipeline. Expert B2B paid advertising management for pipeline growth.',
    url: 'https://www.fractionaldemand.com/services/fractional-paid-media',
    serviceType: 'Paid Media Management, B2B Advertising, Performance Marketing',
    offers: {
      name: 'Fractional Paid Media Service',
      description: 'Includes strategy, campaign management, optimization, creative, and attribution for LinkedIn, Google, Meta, Reddit, X, and YouTube ads'
    }
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://www.fractionaldemand.com' },
    { name: 'Services', url: 'https://www.fractionaldemand.com/services/fractional-paid-media' },
    { name: 'Fractional Paid Media', url: 'https://www.fractionaldemand.com/services/fractional-paid-media' }
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
        <section className="relative overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, #000000 0%, #0a1628 50%, #021da8 150%)' }}>
          {/* Subtle grid overlay */}
          <div className="absolute inset-0 bg-grid-dots opacity-30" />
          
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Content */}
              <div>
                <Reveal as="h1" className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
                  Paid Media That Actually Drives Pipeline
                </Reveal>
                <Reveal as="p" className="text-white/80 text-xl md:text-2xl leading-relaxed mb-8">
                  Senior performance marketers embedded directly into your team to run LinkedIn, Meta, Google, X, and Reddit with a demand system built to generate qualified pipeline.
                </Reveal>
                <Reveal>
                  <Tilt>
                    <LetsTalkButton className="btn btn-primary btn-md md:btn-lg btn-shine">
                      Book a Paid Media Audit
                    </LetsTalkButton>
                  </Tilt>
                </Reveal>
              </div>
              
              {/* Right: Visual */}
              <Reveal className="hidden lg:block">
                <div className="relative aspect-square flex items-center justify-center">
                  <img 
                    src="/assets/images/fractional-paid-media.png" 
                    alt="Fractional Paid Media Channels" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Section 1 */}
        <section className="bg-black text-white relative overflow-hidden">
          <div className="container mx-auto px-4 py-24 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
              {/* Left: Problem */}
              <div className="lg:sticky lg:top-32">
                <Reveal as="h2" className="text-4xl md:text-5xl tracking-tight mb-6">
                  Most paid media programs fail because they're built on activity, not strategy.
                </Reveal>
                <Reveal as="p" className="text-white/60 text-lg leading-relaxed">
                  You need a senior operator—not a junior account manager checking boxes.
                </Reveal>
              </div>
              
              {/* Right: What you need */}
              <div>
                <Reveal as="p" className="text-white/50 text-sm uppercase tracking-widest mb-6">You need someone who</Reveal>
                <ul className="space-y-4">
                  {[
                    'Knows how to build demand, not just manage budgets',
                    'Understands messaging, ICP, creative, and offers',
                    'Connects paid media to pipeline and revenue (attribution)',
                    'Moves fast and operates like part of your team',
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
        </section>

        {/* Section 2 - What's Included */}
        <section className="bg-black text-white relative overflow-hidden">
          <div className="container mx-auto px-4 py-24 md:py-28">
            <div className="max-w-6xl mx-auto">
              <Reveal className="mb-16">
                <p className="text-white/50 text-sm uppercase tracking-widest mb-4">What's included</p>
                <h2 className="text-4xl md:text-5xl tracking-tight">
                  Clear ownership. Senior talent. Pipeline-focused execution.
                </h2>
              </Reveal>
              
              <div className="space-y-6">
                {/* Strategy + Foundations */}
                <Reveal>
                  <div className="group border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="w-12 h-12 rounded-xl bg-[#021da8] flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl mb-3">Strategy + Foundations</h3>
                        <p className="text-white/60 text-lg mb-4">Demand frameworks, channel strategy, and campaign architecture built for pipeline.</p>
                        <div className="flex flex-wrap gap-2">
                          {['Demand creation', 'Channel mix', 'Messaging', 'Campaign architecture', 'Funnel mapping', 'Account setup', 'Keyword research'].map((tag) => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* Execution + Optimization */}
                <Reveal>
                  <div className="group border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="w-12 h-12 rounded-xl bg-[#021da8] flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl mb-3">Execution + Optimization</h3>
                        <p className="text-white/60 text-lg mb-4">Hands-on campaign management with weekly experiments and continuous improvement.</p>
                        <div className="flex flex-wrap gap-2">
                          {['Campaign builds', 'Ad optimization', 'Keyword expansion', 'Weekly experiments', 'Audience development', 'A/B testing'].map((tag) => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* Measurement + Attribution */}
                <Reveal>
                  <div className="group border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="w-12 h-12 rounded-xl bg-[#021da8] flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl mb-3">Measurement + Attribution</h3>
                        <p className="text-white/60 text-lg mb-4">Pipeline and revenue reporting tied to real business impact, not vanity metrics.</p>
                        <div className="flex flex-wrap gap-2">
                          {['Pipeline reporting', 'SQL/SQO definitions', 'UTM tracking', 'Revenue attribution', 'Performance insights'].map((tag) => (
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
        </section>

        {/* Section 3 - Process */}
        <ProcessSteps steps={processSteps} headline="The Fractional DemandOS" />

        {/* Section 4 - Testimonials */}
        <Testimonials testimonials={testimonials} headline="Some of Our Biggest Fans" />

        {/* Section 5 - FAQ */}
        <FAQ items={faqItems} />

        {/* Section 6 - Final CTA */}
        <section className="bg-black text-white relative overflow-hidden bg-grid-dots">
          <div className="energy-line" />
          <div className="container mx-auto px-4 py-24 md:py-28 text-center">
            <div className="mb-10">
              <Reveal as="h2" className="text-4xl md:text-5xl  tracking-tight mb-6">
                Ready to Scale Pipeline with Paid Media?
              </Reveal>
              <Reveal as="p" className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
                Let's audit your accounts, align on goals, and map out the path to predictable pipeline.
              </Reveal>
            </div>
            <Tilt>
              <LetsTalkButton className="btn btn-primary btn-md md:btn-lg btn-shine">
                Book a Paid Media Audit
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

