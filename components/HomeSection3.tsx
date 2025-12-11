import Reveal from './Reveal';
import Image from 'next/image';
import EnergyCard from './EnergyCard';

export default function HomeSection3() {
  return (
    <section className="bg-black text-white relative overflow-hidden">
      <div className="energy-line" />
      <div className="container mx-auto px-4 py-24 md:py-28">
        <div className="text-center mb-16">
          <Reveal as="h2" className="text-4xl md:text-5xl tracking-tight mb-6">
            You&apos;re not shopping for an agency.<br />You&apos;re choosing your GTM team.
          </Reveal>
          <Reveal as="p" className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
            Your real decision:<br />hire a full-time head of marketing and team, or plug in a fractional GTM team that&apos;s already built.
          </Reveal>
        </div>
        <Reveal className="max-w-5xl mx-auto">
          <div className="energy-card rounded-3xl border border-white/10 bg-gradient-to-br from-gray-800 to-gray-900 p-8 md:p-12">
            <div className="relative w-full flex items-center justify-center">
              <Image
                src="/assets/images/undraw_collaborative-writing.svg"
                alt="Collaborative team working together"
                width={799}
                height={618}
                className="w-full max-w-3xl h-auto"
              />
            </div>
          </div>
        </Reveal>
      </div>
      <div className="energy-line energy-line--delayed" />
    </section>
  );
}

