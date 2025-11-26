import Reveal from './Reveal';
import EnergyCard from './EnergyCard';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

// Icons for Build, Run, Scale
const BuildIcon = () => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
  </svg>
);

const RunIcon = () => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
);

const ScaleIcon = () => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
  </svg>
);

const icons = [BuildIcon, RunIcon, ScaleIcon];

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
      {columns.map((column, idx) => {
        const Icon = icons[idx] || (() => <span>{idx + 1}</span>);
        return (
        <Reveal key={idx}>
          <div className="group relative rounded-3xl p-8 h-full overflow-hidden bg-black border border-white/[0.12] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:border-white/20">
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-20 h-20 rounded-xl bg-white/[0.08] border border-white/[0.12] flex items-center justify-center text-white">
                  <Icon />
                </div>
                <h3 className="text-2xl md:text-3xl ">{column.header}</h3>
              </div>
              <ul className="space-y-3 text-white/80 text-lg leading-relaxed mb-6">
                {column.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-blue-400 mt-1 shrink-0" />
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
          </div>
        </Reveal>
        );
      })}
    </div>
  );
}

