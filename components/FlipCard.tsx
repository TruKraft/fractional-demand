"use client";

import React, { useState } from 'react';
import Reveal from './Reveal';

type FlipCardProps = {
  frontHeader: string;
  frontSubcopy: string;
  backItems: string[];
  className?: string;
};

export default function FlipCard({ frontHeader, frontSubcopy, backItems, className = '' }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Reveal className={`perspective-1000 ${className}`}>
      <div
        className="relative h-full w-full transition-transform duration-700"
        style={{ 
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transformStyle: 'preserve-3d',
        }}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        onFocus={() => setIsFlipped(true)}
        onBlur={() => setIsFlipped(false)}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden rounded-3xl border border-white/10 p-8 bg-white/5 hover:bg-white/10 transition-colors">
          <h3 className="text-2xl md:text-3xl  mb-3">{frontHeader}</h3>
          <p className="text-white/80 text-lg">{frontSubcopy}</p>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 backface-hidden rounded-3xl border border-white/10 p-8 bg-white/5 rotate-y-180"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <h3 className="text-2xl md:text-3xl  mb-4">{frontHeader}</h3>
          <ul className="space-y-3 text-white/80 text-lg leading-relaxed">
            {backItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-white/60 mt-1.5 shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}

