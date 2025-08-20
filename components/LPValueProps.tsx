import React from 'react';

type Props = { inline?: boolean; className?: string };

export default function LPValueProps({ inline, className }: Props) {
  const items = [
    {
      title: 'Senior-only execution',
      desc: 'No junior handoffs. Strategy → launch → optimization by experts.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-[#072ef0]">
          <path d="M12 2l1.8 4.2L18 8l-4.2 1.8L12 14l-1.8-4.2L6 8l4.2-1.8L12 2z" />
        </svg>
      ),
    },
    {
      title: 'Faster time to pipeline',
      desc: 'Proven playbooks for search + LinkedIn to drive qualified opps.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-[#072ef0]">
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
      ),
    },
    {
      title: 'Reporting you trust',
      desc: 'Simple dashboards and weekly insights tied to revenue.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 text-[#072ef0]">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.172 7.707 8.879a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  const Grid = (
    <div className={`grid grid-cols-1 gap-4 md:gap-5 ${className || ''}`}>
      {items.map((it) => (
        <div key={it.title} className="py-5 md:py-6 border-t border-white/10 first:border-t-0">
          <div className="flex items-start gap-3">
            {it.icon}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-white/80 text-base md:text-lg leading-relaxed">{it.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  if (inline) return Grid;

  return (
    <section className="bg-black text-white">
      <div className="container mx-auto px-4 py-16 md:py-20">{Grid}</div>
    </section>
  );
}


