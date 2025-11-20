import Reveal from './Reveal';
import Image from 'next/image';
import EnergyCard from './EnergyCard';

export default function HomeSection3() {
  return (
    <section className="bg-black text-white relative overflow-hidden">
      <div className="energy-line" />
      <div className="container mx-auto px-4 py-24 md:py-28">
        <div className="text-center mb-16">
          <Reveal as="h2" className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            You&apos;re not shopping for an agency. You&apos;re choosing your GTM team.
          </Reveal>
          <Reveal as="p" className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
            Your real decision: hire a full-time head of marketing and team, or plug in a fractional GTM team that&apos;s already built.
          </Reveal>
        </div>
        {/* Placeholder for visual - will be replaced with actual visual later */}
        <Reveal className="max-w-5xl mx-auto">
          <div className="energy-card rounded-3xl border border-white/10 bg-white/5 bg-noise p-8 md:p-12">
            <div className="relative w-full aspect-video rounded-2xl border border-white/10 bg-black/50 flex items-center justify-center">
              <p className="text-white/40 text-sm">Visual placeholder - Reference design from new-job-survival-kit</p>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="energy-line energy-line--delayed" />
    </section>
  );
}

