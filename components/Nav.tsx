"use client";

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Tilt from './Tilt';
import { LetsTalkButton } from './CalendlyPopup';

type NavProps = { minimal?: boolean; showCTA?: boolean };

export default function Nav({ minimal = false, showCTA = false }: NavProps) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [servicesPulse, setServicesPulse] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);
  const resourcesRef = useRef<HTMLLIElement>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const resourcesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (servicesOpen || resourcesOpen) {
          // Close nested dropdowns first
          setServicesOpen(false);
          setResourcesOpen(false);
        } else if (open) {
          // Then close main mobile menu
          setOpen(false);
        }
      }
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, servicesOpen, resourcesOpen]);

  // Close nested dropdowns when main menu closes
  useEffect(() => {
    if (!open) {
      setServicesOpen(false);
      setResourcesOpen(false);
    }
  }, [open]);

  // Prevent click outside handler from interfering with mobile menu
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Handle toggle for mobile dropdowns
  const handleServicesToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setServicesOpen(prev => !prev);
  };

  const handleResourcesToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setResourcesOpen(prev => !prev);
  };

  // Close dropdowns when clicking outside (desktop only, and not when mobile menu is open)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Don't handle clicks when mobile menu is open
      if (open) return;
      
      // Only handle desktop dropdowns
      if (window.innerWidth >= 1024) {
        if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
          setServicesOpen(false);
        }
        if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
          setResourcesOpen(false);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
      if (resourcesTimeoutRef.current) clearTimeout(resourcesTimeoutRef.current);
    };
  }, []);

  // Listen for custom event from footer to open services dropdown
  useEffect(() => {
    const handleOpenServices = () => {
      // Check if we're on mobile (below lg breakpoint)
      const isMobile = window.innerWidth < 1024;
      
      if (isMobile) {
        // On mobile: open hamburger menu first, then services submenu with slight delay
        setOpen(true);
        setServicesPulse(true);
        
        // Open services submenu after hamburger menu animation starts
        setTimeout(() => {
          setServicesOpen(true);
        }, 100);
      } else {
        // On desktop: just open services dropdown
        setServicesOpen(true);
        setServicesPulse(true);
      }
      
      // Remove pulse animation after 2 seconds
      setTimeout(() => {
        setServicesPulse(false);
      }, 2000);
      
      // Auto-close dropdown after 5 seconds
      setTimeout(() => {
        setServicesOpen(false);
      }, 5000);
      
      // Auto-close hamburger menu after 6 seconds on mobile
      if (isMobile) {
        setTimeout(() => {
          setOpen(false);
        }, 6000);
      }
    };
    
    window.addEventListener('openServicesDropdown', handleOpenServices);
    return () => window.removeEventListener('openServicesDropdown', handleOpenServices);
  }, []);

  return (
    <>
    <header className="fixed inset-x-0 top-0 z-[2000] bg-black/60 supports-[backdrop-filter]:bg-black/40 backdrop-blur border-b border-white/10 text-white">
      <nav className="container mx-auto flex items-center justify-between px-4 py-2 md:py-3">
        <a href="/" aria-label="Home" className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-md">
          <div className="relative h-[28px] w-[220px] md:h-[32px] md:w-[260px]">
            <Image src="/Fractional Demand full logo_white text (1).svg" alt="Fractional Demand" fill className="object-contain object-left" />
          </div>
        </a>

        {/* Desktop nav */}
        {!minimal && (
          <ul className="hidden lg:flex items-center gap-6 text-sm md:text-base text-white/80" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
            <li><a href="/" className="hover:text-white hover:underline hover:underline-offset-8 hover:decoration-white/80 transition-colors">Home</a></li>
            
            {/* Services Dropdown */}
            <li
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => {
                if (servicesTimeoutRef.current) {
                  clearTimeout(servicesTimeoutRef.current);
                  servicesTimeoutRef.current = null;
                }
                setServicesOpen(true);
              }}
              onMouseLeave={() => {
                servicesTimeoutRef.current = setTimeout(() => {
                  setServicesOpen(false);
                }, 150);
              }}
            >
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  setServicesOpen(!servicesOpen);
                }}
                onFocus={() => setServicesOpen(true)}
                onBlur={(e) => {
                  // Don't close if focus moves to dropdown items
                  if (!servicesRef.current?.contains(e.relatedTarget as Node)) {
                    setServicesOpen(false);
                  }
                }}
                className={`text-sm md:text-base text-white/80 hover:text-white hover:underline hover:underline-offset-8 hover:decoration-white/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-md ${servicesPulse ? 'animate-pulse' : ''}`}
                aria-expanded={servicesOpen}
              >
                Services
              </a>
              <ul
                className={`absolute top-full left-0 mt-0 w-80 bg-black border-t-2 rounded-b-lg py-2 z-50 transition-all duration-200 ${servicesOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-2'} ${servicesPulse ? 'border-blue-500 shadow-[0_0_20px_rgba(2,29,168,0.6)]' : 'border-white'}`}
                style={{ 
                  marginTop: 'calc(0.5rem + 2px)',
                  boxShadow: servicesPulse ? '0 10px 15px -3px rgba(2, 29, 168, 0.5), 0 4px 6px -2px rgba(2, 29, 168, 0.3), 0 0 30px rgba(2, 29, 168, 0.4)' : '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
                }}
                onMouseEnter={() => {
                  if (servicesTimeoutRef.current) {
                    clearTimeout(servicesTimeoutRef.current);
                    servicesTimeoutRef.current = null;
                  }
                }}
              >
                <li className="border-b border-white/10 last:border-b-0">
                  <a
                    href="/services/fractional-head-of-marketing"
                    className="block px-5 py-3 text-white hover:bg-white/5 transition-colors group"
                    onClick={() => setServicesOpen(false)}
                  >
                    <div className="font-medium text-white group-hover:text-white transition-colors">
                      Fractional Head of Marketing
                    </div>
                    <div className="text-sm text-white/60 group-hover:text-white/70 transition-colors">
                      Strategic leadership with hands-on execution
                    </div>
                  </a>
                </li>
                <li className="border-b border-white/10 last:border-b-0">
                  <a
                    href="/services/fractional-paid-media"
                    className="block px-5 py-3 text-white hover:bg-white/5 transition-colors group"
                    onClick={() => setServicesOpen(false)}
                  >
                    <div className="font-medium text-white group-hover:text-white transition-colors">
                      Fractional Paid Media
                    </div>
                    <div className="text-sm text-white/60 group-hover:text-white/70 transition-colors">
                      Senior performance marketers driving pipeline
                    </div>
                  </a>
                </li>
                <li className="border-b border-white/10 last:border-b-0">
                  <a
                    href="/services/fractional-revops"
                    className="block px-5 py-3 text-white hover:bg-white/5 transition-colors group"
                    onClick={() => setServicesOpen(false)}
                  >
                    <div className="font-medium text-white group-hover:text-white transition-colors">
                      Fractional RevOps
                    </div>
                    <div className="text-sm text-white/60 group-hover:text-white/70 transition-colors">
                      RevOps + GTM engineering for predictable revenue
                    </div>
                  </a>
                </li>
                <li className="border-b border-white/10 last:border-b-0">
                  <a
                    href="/services/email-lifecycle-marketing"
                    className="block px-5 py-3 text-white hover:bg-white/5 transition-colors group"
                    onClick={() => setServicesOpen(false)}
                  >
                    <div className="font-medium text-white group-hover:text-white transition-colors">
                      Fractional Lifecycle Marketing
                    </div>
                    <div className="text-sm text-white/60 group-hover:text-white/70 transition-colors">
                      Lifecycle campaigns that move pipeline
                    </div>
                  </a>
                </li>
              </ul>
            </li>

            <li><a href="/how-we-work" className="hover:text-white hover:underline hover:underline-offset-8 hover:decoration-white/80 transition-colors">How We Work</a></li>
            
            {/* Resources Dropdown */}
            <li
              ref={resourcesRef}
              className="relative"
              onMouseEnter={() => {
                if (resourcesTimeoutRef.current) {
                  clearTimeout(resourcesTimeoutRef.current);
                  resourcesTimeoutRef.current = null;
                }
                setResourcesOpen(true);
              }}
              onMouseLeave={() => {
                resourcesTimeoutRef.current = setTimeout(() => {
                  setResourcesOpen(false);
                }, 150);
              }}
            >
              <a
                href="#resources"
                onClick={(e) => {
                  e.preventDefault();
                  setResourcesOpen(!resourcesOpen);
                }}
                onFocus={() => setResourcesOpen(true)}
                onBlur={(e) => {
                  if (!resourcesRef.current?.contains(e.relatedTarget as Node)) {
                    setResourcesOpen(false);
                  }
                }}
                className="text-sm md:text-base text-white/80 hover:text-white hover:underline hover:underline-offset-8 hover:decoration-white/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-md"
                aria-expanded={resourcesOpen}
              >
                Resources
              </a>
              <ul
                className={`absolute top-full left-0 mt-0 w-64 bg-black border-t-2 border-white rounded-b-lg py-2 z-50 transition-all duration-200 ${resourcesOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-2'}`}
                style={{ 
                  marginTop: 'calc(0.5rem + 2px)',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
                }}
                onMouseEnter={() => {
                  if (resourcesTimeoutRef.current) {
                    clearTimeout(resourcesTimeoutRef.current);
                    resourcesTimeoutRef.current = null;
                  }
                }}
              >
                <li>
                  <a
                    href="/resources/blog"
                    className="block px-5 py-3 text-white hover:bg-white/5 transition-colors group"
                    onClick={() => setResourcesOpen(false)}
                  >
                    <div className="font-medium text-white group-hover:text-white transition-colors">
                      Blog
                    </div>
                    <div className="text-sm text-white/60 group-hover:text-white/70 transition-colors">
                      Insights on B2B demand generation & GTM strategy
                    </div>
                  </a>
                </li>
              </ul>
            </li>

            <li><a href="/about" className="hover:text-white hover:underline hover:underline-offset-8 hover:decoration-white/80 transition-colors">About</a></li>
            
            <li>
              <Tilt>
                <LetsTalkButton className="btn btn-primary btn-sm md:btn-md btn-shine">
                  Let&apos;s Talk
                </LetsTalkButton>
              </Tilt>
            </li>
          </ul>
        )}

        {/* Minimal mode CTA button */}
        {minimal && showCTA && (
          <Tilt>
            <LetsTalkButton className="btn btn-primary btn-sm md:btn-md btn-shine">
              Let&apos;s Talk
            </LetsTalkButton>
          </Tilt>
        )}

        {/* Mobile hamburger */}
        {!minimal && (
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
        >
          <span className="sr-only">Open menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
            <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
          </svg>
        </button>
        )}
      </nav>

    </header>

      {/* Mobile drawer - Moved outside header to avoid stacking context issues */}
      {!minimal && (
        <>
          {/* Overlay */}
          <div
            aria-hidden={!open}
            className={`lg:hidden fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            onClick={() => {
              setOpen(false);
              setServicesOpen(false);
              setResourcesOpen(false);
            }}
          />
          {/* Panel */}
          <nav
            ref={mobileMenuRef}
            id="mobile-menu"
            aria-label="Mobile navigation"
            className={`lg:hidden fixed right-0 top-0 bottom-0 z-[10000] w-[85vw] max-w-[320px] bg-black text-white border-l border-white/10 shadow-2xl transform transition-transform duration-300 ease-out ${open ? 'translate-x-0' : 'translate-x-full'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-4 border-b border-white/10 bg-black" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              <span className="text-base font-semibold">Menu</span>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 transition-colors"
                aria-label="Close menu"
                onClick={() => {
                  setOpen(false);
                  setServicesOpen(false);
                  setResourcesOpen(false);
                }}
              >
                <span className="sr-only">Close menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className="px-4 py-6 overflow-y-auto bg-black" style={{ height: 'calc(100% - 64px)' }}>
              <ul className="space-y-2 text-base" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
                <li>
                  <a 
                    href="/" 
                    className="block py-3 px-3 rounded-lg text-base text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60" 
                    onClick={() => setOpen(false)}
                  >
                    Home
                  </a>
                </li>
                
                <li>
                  <button
                    type="button"
                    onClick={handleServicesToggle}
                    className={`w-full text-base text-left py-3 px-3 rounded-lg text-white hover:bg-white/10 transition-colors flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${servicesPulse ? 'animate-pulse' : ''}`}
                    aria-expanded={servicesOpen}
                    aria-controls="mobile-services-menu"
                  >
                    <span>Services</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`w-5 h-5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-200 ${servicesOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <ul id="mobile-services-menu" className={`pl-4 mt-2 space-y-1 border-l-2 ml-3 ${servicesPulse ? 'border-blue-500' : 'border-white/20'}`} role="menu">
                      <li role="none">
                        <a 
                          href="/services/fractional-head-of-marketing" 
                          className="block py-2.5 px-3 text-base text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60" 
                          role="menuitem"
                          onClick={() => { 
                            setOpen(false); 
                            setServicesOpen(false); 
                          }}
                        >
                          Fractional Head of Marketing
                        </a>
                      </li>
                      <li role="none">
                        <a 
                          href="/services/fractional-paid-media" 
                          className="block py-2.5 px-3 text-base text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60" 
                          role="menuitem"
                          onClick={() => { 
                            setOpen(false); 
                            setServicesOpen(false); 
                          }}
                        >
                          Fractional Paid Media
                        </a>
                      </li>
                      <li role="none">
                        <a 
                          href="/services/fractional-revops" 
                          className="block py-2.5 px-3 text-base text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60" 
                          role="menuitem"
                          onClick={() => { 
                            setOpen(false); 
                            setServicesOpen(false); 
                          }}
                        >
                          Fractional RevOps
                        </a>
                      </li>
                      <li role="none">
                        <a 
                          href="/services/email-lifecycle-marketing" 
                          className="block py-2.5 px-3 text-base text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60" 
                          role="menuitem"
                          onClick={() => { 
                            setOpen(false); 
                            setServicesOpen(false); 
                          }}
                        >
                          Fractional Lifecycle Marketing
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <a 
                    href="/how-we-work" 
                    className="block py-3 px-3 rounded-lg text-base text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60" 
                    onClick={() => setOpen(false)}
                  >
                    How We Work
                  </a>
                </li>
                
                <li>
                  <button
                    type="button"
                    onClick={handleResourcesToggle}
                    className="w-full text-base text-left py-3 px-3 rounded-lg text-white hover:bg-white/10 transition-colors flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                    aria-expanded={resourcesOpen}
                    aria-controls="mobile-resources-menu"
                  >
                    <span>Resources</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`w-5 h-5 transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-200 ${resourcesOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <ul id="mobile-resources-menu" className="pl-4 mt-2 space-y-1 border-l-2 border-white/20 ml-3" role="menu">
                      <li role="none">
                        <a 
                          href="/resources/blog" 
                          className="block py-2.5 px-3 text-base text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60" 
                          role="menuitem"
                          onClick={() => { 
                            setOpen(false); 
                            setResourcesOpen(false); 
                          }}
                        >
                          Blog
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <a 
                    href="/about" 
                    className="block py-3 px-3 rounded-lg text-base text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60" 
                    onClick={() => setOpen(false)}
                  >
                    About
                  </a>
                </li>
                
                <li className="pt-6 mt-4 border-t border-white/10">
                  <LetsTalkButton className="btn btn-primary btn-md w-full text-center">
                    Let&apos;s Talk
                  </LetsTalkButton>
                </li>
              </ul>
            </div>
          </nav>
        </>
      )}
    </>
  );
}
