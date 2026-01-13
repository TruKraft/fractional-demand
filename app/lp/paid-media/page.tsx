import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import PaidMediaHero from '@/components/PaidMediaHero';
import LogosStrip from '@/components/LogosStrip';
import HomeSection3 from '@/components/HomeSection3';
import HomeSection4 from '@/components/HomeSection4';
import HomeSection5 from '@/components/HomeSection5';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { getServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Paid Media | Fractional Demand',
  description: 'Get a GTM Team That Builds Pipeline Fast. Fractional Demand embeds senior operators across strategy, paid media, RevOps, and lifecycle to build and run a demand system that accelerates pipeline.',
  keywords: ['paid media audit', 'LinkedIn ads', 'Google ads', 'B2B paid media', 'paid advertising', 'performance marketing', 'media buying'],
  openGraph: {
    title: 'Paid Media | Fractional Demand',
    description: 'Get a GTM Team That Builds Pipeline Fast. Fractional Demand embeds senior operators across strategy, paid media, RevOps, and lifecycle to build and run a demand system that accelerates pipeline.',
  },
  alternates: {
    canonical: 'https://www.fractionaldemand.com/lp/paid-media'
  },
  robots: {
    index: true,
    follow: true
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

export default function PaidMediaPage() {
  const serviceSchema = getServiceSchema({
    name: 'Free Paid Media Audit',
    description: 'Get a comprehensive paid media audit including quick wins, platform fixes, conversion tracking improvements, and hidden wasted spend analysis. Expert B2B paid advertising audit.',
    url: 'https://www.fractionaldemand.com/lp/paid-media',
    serviceType: 'Paid Media Audit, Performance Marketing Analysis, Advertising Optimization'
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Nav minimal showCTA />
      <main id="main">
        <PaidMediaHero />
        <LogosStrip />
        <HomeSection3 />
        <HomeSection4 />
        <HomeSection5 />
        <Testimonials testimonials={testimonials} headline="Customer Stories" />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
