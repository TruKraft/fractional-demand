import React from 'react';

type EnergyCardProps = {
  className?: string;
  children?: React.ReactNode;
  radius?: number; // px radius to match Tailwind rounded classes (rounded-3xl ≈ 24)
  strokeColor?: string; // base hairline color
  blipColor?: string; // animated blip color
  blipOpacity?: number;
  durationMs?: number;
};

export default function EnergyCard({
  className,
  children,
  radius = 24,
  strokeColor = 'rgba(255,255,255,0.10)',
  blipColor = '#ffffff',
  blipOpacity = 0.6,
  durationMs = 20000,
}: EnergyCardProps) {
  // Use pathLength=100 to make dashoffset animation resolution-agnostic
  const animStyle: React.CSSProperties = {
    animation: `energyStroke ${durationMs}ms linear infinite`,
  };

  return (
    <div className={`relative rounded-3xl ${className || ''}`}>
      {/* Base hairline via SVG to perfectly follow radius */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full"
        aria-hidden
      >
        <defs>
          <filter id="energyGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect
          x={0.5}
          y={0.5}
          width="100%"
          height="100%"
          rx={radius}
          ry={radius}
          fill="none"
          stroke={strokeColor}
          strokeWidth={1}
          vectorEffect="non-scaling-stroke"
        />
        <rect
          x={0.5}
          y={0.5}
          width="100%"
          height="100%"
          rx={radius}
          ry={radius}
          fill="none"
          stroke={blipColor}
          strokeOpacity={blipOpacity}
          strokeWidth={1}
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={100}
          strokeDasharray="3 97"
          style={animStyle}
          filter="url(#energyGlow)"
        />
      </svg>
      {children}
    </div>
  );
}


