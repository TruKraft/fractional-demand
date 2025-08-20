
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import LogosStrip from '@/components/LogosStrip';
import WhyUs from '@/components/WhyUs';
import WhyNeedUs from '@/components/WhyNeedUs';
import Services from '@/components/Services';
import Bios from '@/components/Bios';
import Footer from '@/components/Footer';
import Scheduler from '@/components/Scheduler';
import CTA from '@/components/CTA';

export default function Page() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <LogosStrip />
        <WhyNeedUs />
        <WhyUs />
        <Services />
        <Bios />
        <Scheduler />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
