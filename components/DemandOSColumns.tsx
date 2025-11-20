import Reveal from './Reveal';
import EnergyCard from './EnergyCard';

type Column = {
  header: string;
  items: string[];
  outcome?: string;
};

type DemandOSColumnsProps = {
  columns: Column[];
  className?: string;
};

export default function DemandOSColumns({ columns, className = '' }: DemandOSColumnsProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 ${className}`}>
      {columns.map((column, idx) => (
        <Reveal key={idx}>
          <div className="energy-card rounded-3xl border border-white/10 p-8 bg-white/5 bg-noise h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-2xl font-bold text-white ring-2 ring-white/10">
                {idx + 1}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">{column.header}</h3>
            </div>
            <ul className="space-y-3 text-white/80 text-lg leading-relaxed mb-6">
              {column.items.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start gap-2">
                  <span className="text-white/60 mt-1.5 shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {column.outcome && (
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-white/90 font-semibold text-lg mb-2">Outcome:</p>
                <p className="text-white/80 text-base leading-relaxed">{column.outcome}</p>
              </div>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

