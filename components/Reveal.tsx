"use client";

import { useEffect, useRef, useState, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  threshold?: number;
  delayMs?: number;
  // support inline style for convenience when wrapping blocks
  style?: React.CSSProperties;
};

export default function Reveal({ children, className = '', as = 'div', threshold = 0.15, delayMs = 0, style }: RevealProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delayMs > 0) setTimeout(() => setVisible(true), delayMs);
            else setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, delayMs]);

  const Comp = as as any;
  return (
    <Comp ref={ref} className={`reveal ${className}`} data-reveal={visible ? 'true' : 'false'} style={style}>
      {children}
    </Comp>
  );
}


