import Reveal from './Reveal';
import ComparisonChart from './ComparisonChart';

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
        <ComparisonChart />
      </div>
      <div className="energy-line energy-line--delayed" />
    </section>
  );
}

