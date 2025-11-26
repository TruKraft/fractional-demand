import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Bios from '@/components/Bios';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Meet the team behind Fractional Demand',
  openGraph: {
    title: 'About Us | Fractional Demand',
    description: 'Meet the team behind Fractional Demand',
  },
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <section className="bg-black text-white relative overflow-hidden bg-grid-dots">
          <div className="energy-line" />
          <div className="container mx-auto px-4 py-24 md:py-32">
            <div className="text-center mb-16">
              <Reveal as="h1" className="text-4xl md:text-5xl lg:text-6xl  tracking-tight mb-6">
                Meet the Team Behind Fractional Demand
              </Reveal>
            </div>
          </div>
          <div className="energy-line energy-line--delayed" />
        </section>
        <Bios />
      </main>
      <Footer />
    </>
  );
}

