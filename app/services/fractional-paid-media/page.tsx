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

export const metadata: Metadata = {
  title: 'Fractional Paid Media',
  description: 'Senior performance marketers embedded directly into your team to run LinkedIn, Meta, Google, X, and Reddit with a demand system built to generate qualified pipeline.',
  openGraph: {
    title: 'Fractional Paid Media | Fractional Demand',
    description: 'Senior performance marketers embedded directly into your team to run LinkedIn, Meta, Google, X, and Reddit with a demand system built to generate qualified pipeline.',
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
    deliverables: ['Account audit', 'KPIs', 'Experiments list'],
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
  return (
    <>
      <Nav />
      <main id="main">
        {/* Hero */}
        <section className="bg-black text-white relative overflow-hidden bg-grid-dots">
          <div className="container mx-auto px-4 py-24 md:py-32">
            <div className="text-center mb-10">
              <Reveal as="h1" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Paid Media That Actually Drives Pipeline
              </Reveal>
              <Reveal as="p" className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
                Senior performance marketers embedded directly into your team to run LinkedIn, Meta, Google, X, and Reddit with a demand system built to generate qualified pipeline.
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
                  Book a Paid Media Audit
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
                Most paid media programs fail because they're built on activity, not strategy.
              </Reveal>
            </div>
            <Reveal as="p" className="text-center text-white/80 text-xl mb-12">You need a senior operator who:</Reveal>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {[
                'Knows how to build demand, not just manage budgets',
                'Understands messaging, ICP, creative, and offers',
                'Connects paid media to pipeline and revenue (attribution)',
                'Moves fast and operates like part of your team',
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
          </div>
          <div className="energy-line energy-line--delayed" />
        </section>

        {/* Section 2 - What's Included */}
        <section className="bg-black text-white relative overflow-hidden">
          <div className="energy-line" />
          <div className="container mx-auto px-4 py-24 md:py-28">
            <div className="text-center mb-16">
              <Reveal as="h2" className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                What's Included?
              </Reveal>
              <Reveal as="p" className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
                Clear ownership. Senior talent. Pipeline-focused execution.
              </Reveal>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              <Reveal>
                <div className="energy-card rounded-3xl border border-white/10 p-8 bg-white/5 bg-noise h-full">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Strategy + Foundations</h3>
                <ul className="space-y-3 text-white/80 text-lg leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-white/60 mt-1.5 shrink-0">•</span>
                    <span>Demand creation + demand capture framework</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/60 mt-1.5 shrink-0">•</span>
                    <span>Channel mix strategy (LinkedIn, Meta, Google, Reddit, X, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/60 mt-1.5 shrink-0">•</span>
                    <span>Offer and messaging development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/60 mt-1.5 shrink-0">•</span>
                    <span>Campaign architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/60 mt-1.5 shrink-0">•</span>
                    <span>Funnel + intent mapping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/60 mt-1.5 shrink-0">•</span>
                    <span>Setup or cleanup of ad accounts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/60 mt-1.5 shrink-0">•</span>
                    <span>Landing page and A/B test recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/60 mt-1.5 shrink-0">•</span>
                    <span>Extensive keyword research</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/60 mt-1.5 shrink-0">•</span>
                    <span>Conversion tag implementation</span>
                  </li>
                </ul>
                </div>
              </Reveal>

              <Reveal>
                <div className="energy-card rounded-3xl border border-white/10 p-8 bg-white/5 bg-noise h-full">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Execution + Optimization</h3>
                <ul className="space-y-3 text-white/80 text-lg leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-white/60 mt-1.5 shrink-0">•</span>
                    <span>Campaign builds & ongoing management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/60 mt-1.5 shrink-0">•</span>
                    <span>Ad schedule optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/60 mt-1.5 shrink-0">•</span>
                    <span>Keyword expansion and scrubbing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/60 mt-1.5 shrink-0">•</span>
                    <span>Weekly experiments and learning cycles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/60 mt-1.5 shrink-0">•</span>
                    <span>Audience development + retargeting strategy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/60 mt-1.5 shrink-0">•</span>
                    <span>Constant testing of messaging, audiences, and CTAs</span>
                  </li>
                </ul>
                </div>
              </Reveal>

              <Reveal>
                <div className="energy-card rounded-3xl border border-white/10 p-8 bg-white/5 bg-noise h-full">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Measurement + Attribution</h3>
                <ul className="space-y-3 text-white/80 text-lg leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-white/60 mt-1.5 shrink-0">•</span>
                    <span>Pipeline and revenue reporting, not vanity metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/60 mt-1.5 shrink-0">•</span>
                    <span>Clear definitions for SQL, SQO, ICP, and high-intent signals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/60 mt-1.5 shrink-0">•</span>
                    <span>UTMs + tracking alignment with team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/60 mt-1.5 shrink-0">•</span>
                    <span>Performance insights tied to revenue impact</span>
                  </li>
                </ul>
                </div>
              </Reveal>
            </div>
          </div>
          <div className="energy-line energy-line--delayed" />
        </section>

        {/* Section 3 - Process */}
        <ProcessSteps steps={processSteps} headline="Our Paid Media Process" />

        {/* Section 4 - Testimonials */}
        <Testimonials testimonials={testimonials} headline="Some of Our Biggest Fans" />

        {/* Section 5 - FAQ */}
        <FAQ items={faqItems} />

        {/* Section 6 - Final CTA */}
        <section className="bg-black text-white relative overflow-hidden bg-grid-dots">
          <div className="energy-line" />
          <div className="container mx-auto px-4 py-24 md:py-28 text-center">
            <div className="mb-10">
              <Reveal as="h2" className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Ready to Scale Pipeline with Paid Media?
              </Reveal>
              <Reveal as="p" className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
                Let's audit your accounts, align on goals, and map out the path to predictable pipeline.
              </Reveal>
            </div>
            <Tilt>
              <a
                href="https://calendly.com/fractionaldemand/30min"
                target="_blank"
                rel="noopener"
                className="btn btn-primary btn-md md:btn-lg btn-shine"
              >
                Book a Paid Media Audit
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

