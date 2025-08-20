"use client";

import React, { useEffect, useRef } from 'react';

type TiltProps = {
  children: React.ReactElement;
  maxTiltDeg?: number;
};

export default function Tilt({ children, maxTiltDeg = 12 }: TiltProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current as HTMLElement | null;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (prefersReduced || !hasFinePointer) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width; // 0..1
      const py = (e.clientY - rect.top) / rect.height; // 0..1
      const ry = (px - 0.5) * (maxTiltDeg * 2); // rotateY
      const rx = (0.5 - py) * (maxTiltDeg * 2); // rotateX
      el.style.transform = `perspective(700px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) scale(1.02)`;
    };
    const onLeave = () => {
      el.style.transform = '';
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    el.addEventListener('blur', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      el.removeEventListener('blur', onLeave);
    };
  }, [maxTiltDeg]);

  return React.cloneElement(children, {
    ref,
    className: `${children.props.className || ''} will-change-transform`,
  });
}


