import Reveal from './Reveal';
import Tilt from './Tilt';
import { LetsTalkButton } from './CalendlyPopup';

export default function CTA() {
  return (
    <section className="bg-black text-white relative overflow-hidden bg-grid-dots">
      <div className="energy-line" />
      <div className="container mx-auto px-4 py-24 md:py-28 text-center">
        <div className="mb-10">
          <Reveal as="h2" className="text-4xl md:text-5xl  tracking-tight mb-6">
            Ready to Get Started?
          </Reveal>
          <Reveal as="p" className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
            Schedule a strategy session with us
          </Reveal>
        </div>
        <Tilt>
          <LetsTalkButton className="btn btn-primary btn-md md:btn-lg btn-shine">
            Let&apos;s Talk
          </LetsTalkButton>
        </Tilt>
      </div>
      <div className="energy-line energy-line--delayed" />
    </section>
  );
}


