import Reveal from './Reveal';
import Tilt from './Tilt';

export default function Hero() {
  return (
    <section className="relative isolate w-full bg-black text-white overflow-hidden">
      {/* Geometric line background (subtle) */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full -z-10"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="triFade" cx="50%" cy="40%" r="75%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.03" />
          </radialGradient>
        </defs>
        {/* Symmetric triangle motif, centered (spread-out full pattern) */}
        <g transform="translate(600,350)" fill="none" stroke="url(#triFade)" strokeWidth="1.1" className="hero-lines">
          {/* Up-pointing triangles */}
          <polygon vectorEffect="non-scaling-stroke" points="0,-340 295,170 -295,170" />
          <polygon vectorEffect="non-scaling-stroke" points="0,-220 190,110 -190,110" />
          <polygon vectorEffect="non-scaling-stroke" points="0,-100 86,50 -86,50" />

          {/* Animated blip strokes layered on top */}
          <polygon className="tri-blip" points="0,-340 295,170 -295,170" />
          <polygon className="tri-blip" points="0,-220 190,110 -190,110" />
          <polygon className="tri-blip" points="0,-100 86,50 -86,50" />

          {/* Down-pointing triangles */}
          <polygon vectorEffect="non-scaling-stroke" points="0,340 295,-170 -295,-170" />
          <polygon vectorEffect="non-scaling-stroke" points="0,220 190,-110 -190,-110" />
          <polygon vectorEffect="non-scaling-stroke" points="0,100 86,-50 -86,-50" />

          {/* Animated blip strokes for downward triangles */}
          <polygon className="tri-blip" points="0,340 295,-170 -295,-170" />
          <polygon className="tri-blip" points="0,220 190,-110 -190,-110" />
          <polygon className="tri-blip" points="0,100 86,-50 -86,-50" />

          {/* Light crosshair for symmetry */}
          <g opacity="0.3">
            <line vectorEffect="non-scaling-stroke" x1="-360" y1="0" x2="360" y2="0" />
            <line vectorEffect="non-scaling-stroke" x1="0" y1="-360" x2="0" y2="360" />
          </g>
        </g>
      </svg>
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
        <Reveal as="h1" className="text-center font-bold leading-tight tracking-tight mx-auto max-w-5xl text-[2.75rem] md:text-6xl lg:text-7xl pt-6 md:pt-10">
          We help B2B companies{' '}
          <br className="hidden md:block" />
          generate qualified pipeline
        </Reveal>
        <Reveal as="p" className="mt-6 text-center text-white/80 mx-auto max-w-3xl text-xl md:text-2xl leading-relaxed">
          Fractional Demand is a B2B ad agency that helps companies generate high-quality leads that will
          convert into opportunities, pipeline, and revenue.
        </Reveal>
        <div className="mt-10 flex justify-center">
          <Tilt>
            <a
              href="https://calendly.com/fractionaldemand/30min"
              target="_blank"
              rel="noopener"
              className="btn btn-primary btn-md md:btn-lg btn-shine"
            >
              Let's talk
            </a>
          </Tilt>
        </div>
      </div>
    </section>
  );
}


