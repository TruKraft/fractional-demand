import Image from 'next/image';
import Reveal from './Reveal';
import EnergyCard from './EnergyCard';

type Testimonial = {
  quote: string;
  author: string;
  company: string;
  image?: string;
};

type TestimonialsProps = {
  testimonials: Testimonial[];
  headline?: string;
  className?: string;
};

export default function Testimonials({ testimonials, headline = "Customer Stories", className = '' }: TestimonialsProps) {
  return (
    <section className={`bg-black text-white relative overflow-hidden bg-noise ${className}`}>
      <div className="energy-line" />
      <div className="container mx-auto px-4 py-24 md:py-28">
        <div className="text-center mb-16">
          <Reveal as="h2" className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {headline}
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, idx) => (
            <Reveal key={idx}>
              <div className="energy-card rounded-3xl border border-white/10 p-8 bg-white/5 bg-noise h-full">
                <blockquote className="text-white/90 text-lg leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 md:h-14 md:w-14 overflow-hidden rounded-full ring-1 ring-white/20 shrink-0">
                    <Image
                      src={testimonial.image || '/assets/images/placeholder-avatar.jpg'}
                      alt={`${testimonial.author} from ${testimonial.company}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-white/70 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="energy-line energy-line--delayed" />
    </section>
  );
}

