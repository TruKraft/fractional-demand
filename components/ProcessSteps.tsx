import Reveal from './Reveal';
import EnergyCard from './EnergyCard';

type Step = {
  number: string;
  title: string;
  description: string;
  deliverables?: string[];
  activities?: string[];
};

type ProcessStepsProps = {
  steps: Step[];
  headline?: string;
  className?: string;
};

export default function ProcessSteps({ steps, headline = "Our Process", className = '' }: ProcessStepsProps) {
  return (
    <section className={`bg-black text-white ${className}`}>
      <div className="container mx-auto px-4 py-24 md:py-28">
        {headline && (
          <Reveal as="h2" className="text-center text-4xl md:text-5xl font-bold tracking-tight mb-12">
            {headline}
          </Reveal>
        )}
        <div className="max-w-5xl mx-auto space-y-6">
          {steps.map((step, idx) => (
            <Reveal key={idx} className="relative">
              <div className="flex gap-6 md:gap-8">
                <div className="shrink-0 relative">
                  <div className="w-16 h-16 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center text-2xl font-bold text-white ring-2 ring-white/10 relative z-10">
                    {step.number}
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="absolute left-1/2 top-16 w-0.5 h-full bg-white/10 -translate-x-1/2" style={{ height: 'calc(100% + 1.5rem)' }} />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="energy-card rounded-3xl border border-white/10 p-8 bg-white/5 bg-noise">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">{step.title}</h3>
                    <p className="text-white/80 text-lg leading-relaxed mb-6">{step.description}</p>
                    {step.deliverables && step.deliverables.length > 0 && (
                      <div className="mt-6 pt-6 border-t border-white/10">
                        <p className="text-white/90 font-semibold mb-3">Deliverables:</p>
                        <ul className="space-y-2 text-white/80 text-base">
                          {step.deliverables.map((deliverable, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2">
                              <span className="text-white/60 mt-1.5 shrink-0">•</span>
                              <span>{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {step.activities && step.activities.length > 0 && (
                      <div className="mt-6 pt-6 border-t border-white/10">
                        <p className="text-white/90 font-semibold mb-3">Activities:</p>
                        <ul className="space-y-2 text-white/80 text-base">
                          {step.activities.map((activity, aIdx) => (
                            <li key={aIdx} className="flex items-start gap-2">
                              <span className="text-white/60 mt-1.5 shrink-0">•</span>
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

