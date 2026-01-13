import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Bios from '@/components/Bios';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Meet the team behind Fractional Demand. Senior B2B marketing operators with decades of combined experience building pipeline for tech companies through paid media, demand gen, and RevOps.',
  keywords: ['about Fractional Demand', 'B2B marketing team', 'demand generation experts', 'marketing operations team', 'fractional marketing operators'],
  openGraph: {
    title: 'About Us | Fractional Demand',
    description: 'Meet the team behind Fractional Demand. Senior B2B marketing operators with decades of combined experience building pipeline for tech companies.',
  },
  alternates: {
    canonical: 'https://www.fractionaldemand.com/about'
  }
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main id="main">
        {/* Hero */}
        <section className="relative overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, #000000 0%, #0a1628 50%, #021da8 150%)' }}>
          <div className="absolute inset-0 bg-grid-dots opacity-30" />
          
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <div className="max-w-4xl">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm text-white/80 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#021da8]" />
                  About Us
                </div>
              </Reveal>
              <Reveal as="h1" className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
                Built and run by experienced operators.
              </Reveal>
              <Reveal as="p" className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-2xl">
                Senior operators with decades of combined experience building pipeline for B2B tech companies.
              </Reveal>
            </div>
          </div>
        </section>
        
        <Bios />
      </main>
      <Footer />
    </>
  );
}

