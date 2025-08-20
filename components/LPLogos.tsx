import Image from 'next/image';
import map from '@/public/assets/images/assets-map.json';

type Props = { inline?: boolean; className?: string };

export default function LPLogos({ inline, className }: Props) {
  const logos: string[] = (map as any).logos || [];
  const row = logos.slice(0, 8);
  const Content = (
    <div className={`rounded-3xl bg-white text-black p-5 md:p-6 shadow-sm ${className || ''}`}>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 md:gap-6 items-center justify-items-center">
        {row.map((src, i) => (
          <div key={src + i} className="relative h-7 w-24 md:h-9 md:w-32">
            <Image src={src} alt={`Logo ${i + 1}`} fill className="object-contain" />
          </div>
        ))}
      </div>
    </div>
  );

  if (inline) return Content;

  return (
    <section className="bg-black text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">{Content}</div>
    </section>
  );
}


