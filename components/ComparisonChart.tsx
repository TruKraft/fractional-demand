'use client';

import Reveal from './Reveal';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

interface CriteriaRow {
  label: string;
  traditional: 'no' | 'maybe';
  inHouse: 'no' | 'maybe';
  fractional: 'yes';
  traditionalNote?: string;
  inHouseNote?: string;
}

const criteria: CriteriaRow[] = [
  {
    label: 'Senior talent with proven pipeline ownership',
    traditional: 'no',
    inHouse: 'maybe',
    fractional: 'yes',
    traditionalNote: '(junior staff often assigned)',
    inHouseNote: '(depends on hire)',
  },
  {
    label: 'Strategy + execution in one partner',
    traditional: 'no',
    inHouse: 'maybe',
    fractional: 'yes',
    traditionalNote: '(execution only)',
    inHouseNote: '(depends on hire)',
  },
  {
    label: 'Flexible fractional model',
    traditional: 'no',
    inHouse: 'no',
    fractional: 'yes',
    traditionalNote: '(rigid retainers)',
    inHouseNote: '(full-time commitment)',
  },
  {
    label: 'AI-powered insights and automation',
    traditional: 'no',
    inHouse: 'no',
    fractional: 'yes',
  },
];

function StatusIcon({ status }: { status: 'yes' | 'no' | 'maybe' }) {
  if (status === 'yes') {
    return <CheckCircleIcon className="w-7 h-7 text-green-500" />;
  }
  if (status === 'maybe') {
    return <QuestionMarkCircleIcon className="w-7 h-7 text-yellow-500" />;
  }
  return <XCircleIcon className="w-7 h-7 text-red-400/80" />;
}

export default function ComparisonChart() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Desktop Table View */}
      <Reveal className="hidden lg:block">
        <div className="energy-card rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-6 text-lg font-semibold text-white/90">
                  Criteria
                </th>
                <th className="text-center p-6 text-lg font-semibold text-white/90">
                  Traditional Agency
                </th>
                <th className="text-center p-6 text-lg font-semibold text-white/90">
                  In-House Hire
                </th>
                <th className="text-center p-6 text-lg font-semibold bg-blue-500/10">
                  <span className="text-blue-500">Fractional Demand</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {criteria.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-white/5 ${
                    index === criteria.length - 1 ? 'border-b-0' : ''
                  }`}
                >
                  <td className="p-6 text-white/90">
                    {row.label}
                  </td>
                  <td className="p-6 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <StatusIcon status={row.traditional} />
                      {row.traditionalNote && (
                        <span className="text-xs text-white/50">
                          {row.traditionalNote}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <StatusIcon status={row.inHouse} />
                      {row.inHouseNote && (
                        <span className="text-xs text-white/50">
                          {row.inHouseNote}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="p-6 text-center bg-blue-500/5">
                    <div className="flex justify-center">
                      <StatusIcon status={row.fractional} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      {/* Mobile/Tablet Card View */}
      <Reveal className="block lg:hidden space-y-6">
        {criteria.map((row, index) => (
          <div
            key={index}
            className="energy-card rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h4 className="text-lg font-semibold text-white mb-6">
              {row.label}
            </h4>
            <div className="grid grid-cols-3 gap-4">
              {/* Traditional Agency */}
              <div className="text-center">
                <div className="text-xs font-medium text-white/60 mb-3">
                  Traditional<br />Agency
                </div>
                <div className="flex flex-col items-center gap-2">
                  <StatusIcon status={row.traditional} />
                  {row.traditionalNote && (
                    <span className="text-[10px] text-white/50 leading-tight">
                      {row.traditionalNote}
                    </span>
                  )}
                </div>
              </div>
              
              {/* In-House Hire */}
              <div className="text-center">
                <div className="text-xs font-medium text-white/60 mb-3">
                  In-House<br />Hire
                </div>
                <div className="flex flex-col items-center gap-2">
                  <StatusIcon status={row.inHouse} />
                  {row.inHouseNote && (
                    <span className="text-[10px] text-white/50 leading-tight">
                      {row.inHouseNote}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Fractional Demand */}
              <div className="text-center bg-blue-500/10 rounded-xl p-3 -m-3">
                <div className="text-xs font-semibold text-blue-500 mb-3">
                  Fractional<br />Demand
                </div>
                <div className="flex justify-center">
                  <StatusIcon status={row.fractional} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Reveal>
    </div>
  );
}

