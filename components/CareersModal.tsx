"use client";

import { useEffect, useState } from 'react';
import Portal from './Portal';
import CareersForm from './CareersForm';

type CareersModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CareersModal({ isOpen, onClose }: CareersModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Portal>
      <div className="fixed inset-0 z-[99990]">
        {/* Overlay */}
        <button
          aria-hidden={!isOpen}
          tabIndex={-1}
          className="fixed inset-0 z-[99990] bg-black/80 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
        {/* Modal */}
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="careers-modal-title"
          className="fixed left-1/2 top-1/2 z-[99991] w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 bg-black text-white border border-white/10 rounded-3xl shadow-xl max-h-[90vh] overflow-y-auto"
        >
          <div className="sticky top-0 bg-black border-b border-white/10 px-6 py-4 flex items-center justify-between">
            <h2 id="careers-modal-title" className="text-2xl ">
              Careers at Fractional Demand
            </h2>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              aria-label="Close modal"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4 4.29 19.7 2.88 18.3 9.17 12 2.88 5.71 4.29 4.29l6.3 6.3 6.29-6.3z" />
              </svg>
            </button>
          </div>
          <div className="p-6 md:p-8">
            <CareersForm />
          </div>
        </div>
      </div>
    </Portal>
  );
}

