import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import FractionalCMOHero from '@/components/FractionalCMOHero';
import LogosStrip from '@/components/LogosStrip';
import HomeSection3 from '@/components/HomeSection3';
import HomeSection4 from '@/components/HomeSection4';
import HomeSection5 from '@/components/HomeSection5';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Fractional Head of Marketing | Fractional Demand',
  description: 'Get a senior marketing leader embedded directly into your team. Someone who owns strategy, leads execution, and builds the systems that turn ideas into pipeline.',
  openGraph: {
    title: 'Fractional Head of Marketing | Fractional Demand',
    description: 'Get a senior marketing leader embedded directly into your team. Someone who owns strategy, leads execution, and builds the systems that turn ideas into pipeline.',
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

export default function FractionalHeadOfMarketingPage() {
  return (
    <>
      <Nav minimal showCTA />
      <main id="main">
        <FractionalCMOHero />
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
