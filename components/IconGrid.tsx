import Reveal from './Reveal';
import EnergyCard from './EnergyCard';

type IconGridItem = {
  title: string;
  items: string[];
};

type IconGridProps = {
  items: IconGridItem[];
  headline?: string;
  subcopy?: string;
  className?: string;
};

export default function IconGrid({ items, headline, subcopy, className = '' }: IconGridProps) {
  return (
    <section className={`bg-black text-white relative overflow-hidden ${className}`}>
      <div className="energy-line" />
      <div className="container mx-auto px-4 py-24 md:py-28">
        {headline && (
          <div className="text-center mb-16">
            <Reveal as="h2" className="text-4xl md:text-5xl  tracking-tight mb-6">
              {headline}
            </Reveal>
            {subcopy && (
              <Reveal as="p" className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
                {subcopy}
              </Reveal>
            )}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, idx) => (
            <Reveal key={idx}>
              <div className="energy-card rounded-3xl border border-white/10 p-8 bg-white/5 bg-noise h-full">
                <h3 className="text-2xl md:text-3xl  mb-4">{item.title}</h3>
                <ul className="space-y-3 text-white/80 text-lg leading-relaxed">
                  {item.items.map((listItem, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2">
                      <span className="text-white/60 mt-1.5 shrink-0">•</span>
                      <span>{listItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="energy-line energy-line--delayed" />
    </section>
  );
}

