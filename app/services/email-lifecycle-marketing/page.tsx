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
  title: 'Email & Lifecycle Marketing',
  description: 'We design and build lifecycle and nurture campaigns across your entire funnel, from first touch to closed-won to expansion, built by senior lifecycle marketers who embed into your team and create campaigns that convert.',
  keywords: ['email marketing', 'lifecycle marketing', 'nurture campaigns', 'email automation', 'B2B email marketing', 'customer lifecycle', 'email sequences', 'drip campaigns', 'marketing automation'],
  openGraph: {
    title: 'Email & Lifecycle Marketing | Fractional Demand',
    description: 'We design and build lifecycle and nurture campaigns across your entire funnel, from first touch to closed-won to expansion, built by senior lifecycle marketers who embed into your team and create campaigns that convert.',
  },
  alternates: {
    canonical: 'https://www.fractionaldemand.com/services/email-lifecycle-marketing'
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
    question: 'Do you only support HubSpot?',
    answer: 'Primarily yes for quality and speed.',
  },
  {
    question: 'Do you fix existing workflows?',
    answer: 'Absolutely.',
  },
  {
    question: 'Can you tie lifecycle reporting to revenue?',
    answer: 'Yes — we track lifecycle → SQL → revenue.',
  },
  {
    question: 'How fast can we start?',
    answer: 'Typically 1–2 weeks.',
  },
];

const processSteps = [
  {
    number: '1',
    title: 'Diagnose',
    description: 'Lifecycle audit, deliverability review, segmentation assessment.',
    deliverables: ['Lifecycle Audit', 'List Health Report', 'Funnel Analysis', 'Offer + messaging gaps', 'Quick Wins', '60-Day Email/Lifecycle Plan'],
  },
  {
    number: '2',
    title: 'Build',
    description: 'Complete lifecycle architecture and nurture sequence buildout.',
    deliverables: ['Lifecycle architecture', 'Nurture sequences', 'Behavior-triggered flows', 'Segmentation', 'Onboarding + retention journeys', 'Lifecycle dashboards'],
  },
  {
    number: '3',
    title: 'Run & Optimize',
    description: 'Weekly optimization and ongoing performance improvements.',
    deliverables: ['Weekly optimization', 'New sequences', 'Segmentation refresh', 'Deliverability improvements', 'A/B tests', 'Reporting + insights'],
  },
  {
    number: '4',
    title: 'Scale',
    description: 'Advanced personalization and expansion programs.',
    deliverables: ['Advanced personalization', 'Expansion lifecycle programs', 'Extended funnel sequences', 'Sales + lifecycle alignment'],
  },
];

const samplePlays = [
  'In-pipeline nurtures',
  'Multi-step trial/demo sequences',
  'Customer onboarding flows',
  'Upsell/cross-sell campaigns',
  'Re-engagement flows',
  'Lead-nurture and lead-to-demo flows',
  'Demo no-show automation',
  'Behavior-based triggers in HubSpot',
  'List hygiene & pruning',
];

export default function EmailLifecycleMarketingPage() {
  const serviceSchema = getServiceSchema({
    name: 'Email & Lifecycle Marketing',
    description: 'Full-funnel lifecycle and nurture campaigns from awareness to expansion. Senior email marketers design, build, and optimize behavior-triggered sequences that move pipeline.',
    url: 'https://www.fractionaldemand.com/services/email-lifecycle-marketing',
    serviceType: 'Email Marketing, Lifecycle Marketing, Marketing Automation, Nurture Campaigns',
    offers: {
      name: 'Email & Lifecycle Marketing Service',
      description: 'Includes lifecycle strategy, nurture sequence development, HubSpot automation, behavioral triggers, and performance optimization'
    }
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://www.fractionaldemand.com' },
    { name: 'Services', url: 'https://www.fractionaldemand.com/services/email-lifecycle-marketing' },
    { name: 'Email & Lifecycle Marketing', url: 'https://www.fractionaldemand.com/services/email-lifecycle-marketing' }
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
                  Email & Lifecycle Marketing That Actually Moves Pipeline.
                </Reveal>
                <Reveal as="p" className="text-white/80 text-xl md:text-2xl leading-relaxed mb-8">
                  We design and build lifecycle and nurture campaigns across your entire funnel, from first touch to closed-won to expansion, built by senior lifecycle marketers who embed into your team and create campaigns that convert.
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
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 676 676">
                    <defs>
                      {/* Gradient for data flow - bright head fading to tail */}
                      <linearGradient id="dataFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" stopOpacity="0" />
                        <stop offset="40%" stopColor="rgba(255,255,255,0.3)" stopOpacity="0.3" />
                        <stop offset="70%" stopColor="rgba(255,255,255,0.8)" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
                      </linearGradient>
                      <linearGradient id="dataFlowGradientBlue" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" stopOpacity="0" />
                        <stop offset="40%" stopColor="rgba(2,29,168,0.3)" stopOpacity="0.3" />
                        <stop offset="70%" stopColor="rgba(2,29,168,0.8)" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#021da8" stopOpacity="1" />
                      </linearGradient>
                    </defs>
                    
                    {/* Left lines - data flowing IN toward center (top to bottom) */}
                    <path 
                      stroke="url(#dataFlowGradient)" 
                      strokeWidth="3" 
                      strokeLinecap="round"
                      d="m79.982 260.573 163.335 370.844" 
                      className="energy-line-left-1"
                    />
                    <path 
                      stroke="url(#dataFlowGradientBlue)" 
                      strokeWidth="3" 
                      strokeLinecap="round"
                      d="m24.002 44.072 163.334 370.844" 
                      className="energy-line-left-2"
                    />
                    
                    {/* Right lines - data flowing OUT from center (top to bottom) */}
                    <path 
                      stroke="url(#dataFlowGradient)" 
                      strokeWidth="3" 
                      strokeLinecap="round"
                      d="M595.507 260.573 432.172 631.417" 
                      className="energy-line-right-1"
                    />
                    <path 
                      stroke="url(#dataFlowGradientBlue)" 
                      strokeWidth="3" 
                      strokeLinecap="round"
                      d="M651.488 44.072 488.153 414.916" 
                      className="energy-line-right-2"
                    />
                  </svg>
                  <img 
                    src="/assets/images/email-and-lifecycle-marketing.svg" 
                    alt="Email & Lifecycle Marketing Journey" 
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
                  Most teams don't need more emails, they need lifecycle systems that drive revenue.
                </Reveal>
                <Reveal as="p" className="text-white/80 text-xl leading-relaxed">
                  Most companies have a pile of disconnected nurture sequences, ad hoc blasts, and outdated automations.
                </Reveal>
              </div>
              
              {/* Right: Capabilities */}
              <div>
                <Reveal as="p" className="text-white/50 text-sm uppercase tracking-widest mb-6">A lifecycle system that</Reveal>
                <ul className="space-y-4">
                  {[
                    'Moves buyers through the funnel',
                    'Improves SQL → Opportunity → Revenue creation',
                    'Aligns with paid media, RevOps, and sales',
                    'Delivers the right message at the right time',
                    'Creates predictable, reliable pipeline',
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
                <Reveal>
                  <p className="text-white/60 text-lg leading-relaxed mt-8">
                    A <strong className="text-white">Fractional Lifecycle Marketer</strong> gives you strategy + hands-on build + ongoing optimization so email becomes a growth engine, not just a channel.
                  </p>
                </Reveal>
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
                  Full-funnel lifecycle strategy + hands-on execution.
                </h2>
              </Reveal>
              
              <div className="space-y-6">
                {/* 1. Lifecycle Strategy */}
                <Reveal>
                  <div className="group border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="w-12 h-12 rounded-xl bg-[#021da8] flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl mb-3">Lifecycle Strategy & Architecture</h3>
                        <p className="text-white/60 text-lg mb-4">Complete lifecycle journey design from awareness to expansion.</p>
                        <div className="flex flex-wrap gap-2">
                          {['Full lifecycle mapping', 'Segment + offer strategy', 'Behavioral triggers', 'Product-led motions', 'Journey design', 'Lifecycle alignment', 'In-pipeline nurture', 'Re-engagement frameworks'].map((tag) => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* 2. Email & Nurture Build */}
                <Reveal>
                  <div className="group border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="w-12 h-12 rounded-xl bg-[#021da8] flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl mb-3">Email & Nurture Build (Hands-On)</h3>
                        <p className="text-white/60 text-lg mb-4">Writing and building all nurture sequences, flows, and campaigns.</p>
                        <div className="flex flex-wrap gap-2">
                          {['Nurture sequences', 'Drip flows', 'Trial nurture', 'Demo follow-up', 'In-pipeline sequences', 'Onboarding flows', 'Expansion programs', 'A/B testing', 'Copy development'].map((tag) => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* 3. HubSpot Automation */}
                <Reveal>
                  <div className="group border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="w-12 h-12 rounded-xl bg-[#021da8] flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl mb-3">HubSpot Automation</h3>
                        <p className="text-white/60 text-lg mb-4">Behavior-based triggers and intelligent automation workflows.</p>
                        <div className="flex flex-wrap gap-2">
                          {['Behavioral triggers', 'Lead routing', 'List segmentation', 'Workflow automations', 'Lifecycle stage automation', 'Dynamic personalization', 'AI-assisted copy'].map((tag) => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* 4. Measurement & Optimization */}
                <Reveal>
                  <div className="group border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="w-12 h-12 rounded-xl bg-[#021da8] flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl mb-3">Measurement & Optimization</h3>
                        <p className="text-white/60 text-lg mb-4">Performance tracking tied to pipeline and revenue outcomes.</p>
                        <div className="flex flex-wrap gap-2">
                          {['Email dashboards', 'Lifecycle reporting', 'Sequence analysis', 'Deliverability optimization', 'List health monitoring', 'Pipeline insights'].map((tag) => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* 5. Embedded Partnership */}
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
                        <p className="text-white/60 text-lg mb-4">Senior email marketers working directly with your team.</p>
                        <div className="flex flex-wrap gap-2">
                          {['Integrated Slack', 'Growth team collaboration', 'RevOps + sales alignment', 'Weekly insights', 'Senior marketers', 'Multiple years experience'].map((tag) => (
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
                Ready to Build Lifecycle Campaigns That Move Pipeline?
              </Reveal>
              <Reveal as="p" className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
                Let's design and run the lifecycle system that increases conversions, accelerates deals, and grows expansion revenue.
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

