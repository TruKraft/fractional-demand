"use client";

import { useState } from 'react';
import CareersModal from './CareersModal';

export default function CareersTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-white/60 hover:text-white hover:underline underline-offset-8 transition-colors text-sm"
      >
        Careers
      </button>
      <CareersModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

