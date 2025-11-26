import Reveal from './Reveal';

type EyebrowHeadingProps = {
  eyebrow: string;
  heading: string;
  subheading?: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
  eyebrowClassName?: string;
  headingClassName?: string;
  subheadingClassName?: string;
};

export default function EyebrowHeading({
  eyebrow,
  heading,
  subheading,
  className = '',
  as = 'h2',
  eyebrowClassName = '',
  headingClassName = '',
  subheadingClassName = '',
}: EyebrowHeadingProps) {
  return (
    <div className={`text-center ${className}`}>
      <Reveal>
        <div className={`inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm font-medium mb-4 ${eyebrowClassName}`}>
          {eyebrow}
        </div>
      </Reveal>
      <Reveal as={as} className={`text-4xl md:text-5xl lg:text-6xl  tracking-tight mb-6 ${headingClassName}`}>
        {heading}
      </Reveal>
      {subheading && (
        <Reveal as="p" className={`text-white/80 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto ${subheadingClassName}`}>
          {subheading}
        </Reveal>
      )}
    </div>
  );
}

