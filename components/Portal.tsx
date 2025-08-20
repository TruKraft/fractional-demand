"use client";

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

export default function Portal({ children }: { children: ReactNode }) {
  const elRef = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const el = document.createElement('div');
    el.style.position = 'relative';
    elRef.current = el as HTMLElement;
    document.body.appendChild(el);
    setMounted(true);
    return () => {
      document.body.removeChild(el);
    };
  }, []);

  if (!mounted || !elRef.current) return null;
  return createPortal(children, elRef.current);
}


