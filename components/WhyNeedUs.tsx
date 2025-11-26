import Reveal from './Reveal';

export default function WhyNeedUs() {
  return (
    <section id="why-us" className="bg-black text-white">
      <div className="container mx-auto px-4 py-24 md:py-28">
        <Reveal as="h2" className="text-center text-4xl md:text-5xl  tracking-tight mb-8">When you'd need us…</Reveal>
        <p className="mt-6 max-w-3xl mx-auto text-center text-white/80 text-xl md:text-2xl leading-relaxed">
          Fractional Demand is a specialized demand generation consulting firm that is built to feed a well-built
          strategy through world-class paid media campaigns and demand gen best practices. You likely need fractional
          demand gen services if:
        </p>
        <div className="mt-10 grid gap-6 md:gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          <Reveal className="relative text-left rounded-3xl p-8 overflow-visible">
            <div className="absolute -top-6 -left-4 text-[7rem] md:text-[9rem] leading-none font-black text-white/10 select-none">1</div>
            <div className="text-2xl md:text-3xl ">Fill the gap</div>
            <p className="mt-3 text-white/80 text-lg md:text-xl leading-relaxed">You lost a demand gen marketer and need to fill in the gaps while you look for their replacement</p>
          </Reveal>
          <Reveal className="relative text-left rounded-3xl p-8 overflow-visible" >
            <div className="absolute -top-6 -left-4 text-[7rem] md:text-[9rem] leading-none font-black text-white/10 select-none">2</div>
            <div className="text-2xl md:text-3xl ">Early stage</div>
            <p className="mt-3 text-white/80 text-lg md:text-xl leading-relaxed">You're an early/growth stage company and can't afford (yet) to bring on a full-time hire for demand gen</p>
          </Reveal>
          <Reveal className="relative text-left rounded-3xl p-8 overflow-visible">
            <div className="absolute -top-6 -left-4 text-[7rem] md:text-[9rem] leading-none font-black text-white/10 select-none">3</div>
            <div className="text-2xl md:text-3xl ">Revitalize</div>
            <p className="mt-3 text-white/80 text-lg md:text-xl leading-relaxed">Your lead generation tactics have grown static; a revitalized perspective is required for momentum</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


