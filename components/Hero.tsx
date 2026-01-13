import Reveal from './Reveal';
import Tilt from './Tilt';
import { LetsTalkButton } from './CalendlyPopup';

export default function Hero() {
  return (
    <section className="relative isolate w-full bg-black text-white overflow-hidden">
      {/* Animated block gradient background */}
      <div className="absolute inset-0 -z-20 hero-block-gradient" />
      
      {/* Animated grid blocks overlay */}
      <div className="absolute inset-0 -z-15 hero-blocks">
        <div className="hero-block hero-block-1" />
        <div className="hero-block hero-block-2" />
        <div className="hero-block hero-block-3" />
        <div className="hero-block hero-block-4" />
        <div className="hero-block hero-block-5" />
        <div className="hero-block hero-block-6" />
      </div>

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
      <div className="relative z-10 container mx-auto px-4 pt-36 md:pt-48 md:pb-32">
        <div className="text-center mb-10">
          <Reveal as="h1" className="text-4xl md:text-8xl lg:text-8xl tracking-tight mb-6">
            Get a GTM Team That<br />Builds Pipeline Fast.
          </Reveal>
          <Reveal as="p" className="text-white/80 text-xl md:text-1xl leading-relaxed max-w-3xl mx-auto">
            Fractional Demand is a Go-To-Market Partner that embeds senior operators across strategy, paid media, RevOps, and lifecycle to build and run a demand system that accelerates pipeline, without the overhead of a full team.
          </Reveal>
        </div>
        <div className="flex justify-center">
          <Tilt>
            <LetsTalkButton className="btn btn-primary btn-md md:btn-lg btn-shine">
              Get Started
            </LetsTalkButton>
          </Tilt>
        </div>
      </div>
    </section>
  );
}
