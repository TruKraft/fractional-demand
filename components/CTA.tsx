import Reveal from './Reveal';
import Tilt from './Tilt';
// CSS-only animation; no JS needed

export default function CTA() {
  return (
    <section className="bg-black text-white">
      <div className="energy-line" />
      <div className="container mx-auto px-4 py-24 md:py-28 text-center">
        <Reveal as="h2" className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Need help with demand gen?</Reveal>
        <p className="mt-3 text-white/80 text-xl">Schedule a strategy session with us</p>
        <div className="mt-6">
          <Tilt>
            <a
              href="https://calendly.com/jordan-fractionaldemand/30min"
              target="_blank"
              rel="noopener"
              className="btn btn-primary btn-md md:btn-lg btn-shine"
            >
              Schedule a call
            </a>
          </Tilt>
        </div>
      </div>
      <div className="energy-line energy-line--delayed" />
    </section>
  );
}


