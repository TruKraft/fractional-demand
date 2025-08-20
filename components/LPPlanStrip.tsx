type Props = { inline?: boolean; className?: string };

export default function LPPlanStrip({ inline, className }: Props) {
  const features = ['Senior ad buyers', 'Weekly strategy call', 'Live dashboards', 'Slack support'];
  const Card = (
    <div className={`rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7 ${className || ''}`}>
      <div className="flex flex-col gap-5">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold">Annual plan</h3>
          <p className="mt-1 text-white/70">Get 2 months free on a 12-month agreement</p>
        </div>
        <ul className="flex flex-wrap gap-2 text-white/85 text-sm md:text-base">
          {features.map((f) => (
            <li key={f} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#072ef0]" />
              {f}
            </li>
          ))}
        </ul>
        <a href="#form" className="btn btn-primary btn-md btn-shine w-full md:w-auto text-center">Get started</a>
      </div>
    </div>
  );

  if (inline) return Card;

  return (
    <section className="bg-black text-white">
      <div className="container mx-auto px-4 py-16 md:py-20">{Card}</div>
    </section>
  );
}


