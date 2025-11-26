const items = [
  {
    title: 'Deep In-house Experience',
    body:
      'Each member on our team has extensive in-house experience at B2B tech companies. Check our LinkedIn profiles for proof.',
  },
  {
    title: 'No Junior Hires Here',
    body:
      'We exclusively hire veteran demand generation marketers with years (plural) of experience in B2B demand gen and performance marketing.',
  },
  {
    title: 'Direct Collaboration',
    body:
      'Skip the middleman. Work directly with the expert crafting & executing your strategy, ensuring no miscommunication with account managers.',
  },
  {
    title: 'Dedicated Focus',
    body:
      'Each Manager handles only 5-7 clients, allowing them to become an integral part of your team through weekly syncs and seamless Slack integration.',
  },
];

import Reveal from './Reveal';

export default function WhyUs() {
  return (
    <section className="bg-black text-white">
      <div className="container mx-auto px-4 py-24 md:py-28">
        <Reveal as="h2" className="text-center text-4xl md:text-5xl  tracking-tight mb-8">What makes us different?</Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((it) => (
            <Reveal key={it.title} className="relative rounded-3xl border border-white/10 p-8 md:p-10 bg-white/5 bg-noise overflow-hidden">
              <h3 className="text-2xl md:text-3xl ">{it.title}</h3>
              <p className="mt-3 text-white/80 text-lg leading-relaxed">{it.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


