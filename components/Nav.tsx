"use client";

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import map from '@/public/assets/images/assets-map.json';
import Tilt from './Tilt';
import { UserGroupIcon, SpeakerphoneIcon, BookOpenIcon } from '@heroicons/react/outline';

type NavProps = { minimal?: boolean };

export default function Nav({ minimal = false }: NavProps) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
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

  return (
    <header className="fixed inset-x-0 top-0 z-[2000] bg-black/60 supports-[backdrop-filter]:bg-black/40 backdrop-blur border-b border-white/10 text-white">
      <nav className="container mx-auto flex items-center justify-between px-4 py-2 md:py-3">
        <a href="/" aria-label="Home" className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-md">
          <div className="relative h-[60px] w-[264px] md:h-[72px] md:w-[312px]">
            <Image src={(map.wordmark as string) || '/assets/images/logo-wordmark-white.png'} alt="Fractional Demand" fill className="object-contain" />
          </div>
        </a>

        {/* Desktop nav */}
        {!minimal && (
          <ul className="hidden lg:flex items-center gap-6 text-sm md:text-base text-white/80">
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
                className="text-sm md:text-base text-white/80 hover:text-white hover:underline hover:underline-offset-8 hover:decoration-white/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-md"
                aria-expanded={servicesOpen}
              >
                Services
              </a>
              <ul
                className={`absolute top-full left-0 mt-0 w-80 bg-black border-t-2 border-white rounded-b-lg py-2 z-50 transition-all duration-200 ${servicesOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-2'}`}
                style={{ 
                  marginTop: 'calc(0.5rem + 2px)',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
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
                    className="block px-5 py-4 text-white hover:bg-white/5 transition-colors group"
                    onClick={() => setServicesOpen(false)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 mt-0.5">
                        <UserGroupIcon className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-white group-hover:text-white transition-colors mb-1">
                          Fractional Head of Marketing
                        </div>
                        <div className="text-sm text-white/70 group-hover:text-white/80 transition-colors">
                          Strategic leadership with hands-on execution
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="border-b border-white/10 last:border-b-0">
                  <a
                    href="/services/fractional-paid-media"
                    className="block px-5 py-4 text-white hover:bg-white/5 transition-colors group"
                    onClick={() => setServicesOpen(false)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 mt-0.5">
                        <SpeakerphoneIcon className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-white group-hover:text-white transition-colors mb-1">
                          Fractional Paid Media
                        </div>
                        <div className="text-sm text-white/70 group-hover:text-white/80 transition-colors">
                          Senior performance marketers driving pipeline
                        </div>
                      </div>
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
                    className="block px-5 py-4 text-white hover:bg-white/5 transition-colors group"
                    onClick={() => setResourcesOpen(false)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 mt-0.5">
                        <BookOpenIcon className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-white group-hover:text-white transition-colors mb-1">
                          Blog
                        </div>
                        <div className="text-sm text-white/70 group-hover:text-white/80 transition-colors">
                          Insights on B2B demand generation & GTM strategy
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </li>

            <li><a href="/about" className="hover:text-white hover:underline hover:underline-offset-8 hover:decoration-white/80 transition-colors">About</a></li>
            
            <li>
              <Tilt>
                <a
                  href="https://calendly.com/fractionaldemand/30min"
                  target="_blank"
                  rel="noopener"
                  className="btn btn-primary btn-sm md:btn-md btn-shine"
                >
                  Let's Talk
                </a>
              </Tilt>
            </li>
          </ul>
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

      {/* Mobile drawer - In normal DOM flow for SEO */}
      {!minimal && (
        <>
          {/* Overlay */}
          <button
            aria-hidden={!open}
            tabIndex={-1}
            className={`lg:hidden fixed inset-0 z-[99990] bg-black/50 transition-opacity ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
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
            className={`lg:hidden fixed right-0 top-0 z-[99991] h-full w-80 max-w-full bg-black text-white border-l border-white/10 shadow-xl transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-end px-4 py-3 border-b border-white/10">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                aria-label="Close menu"
                onClick={() => {
                  setOpen(false);
                  setServicesOpen(false);
                  setResourcesOpen(false);
                }}
              >
                <span className="sr-only">Close menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4 4.29 19.7 2.88 18.3 9.17 12 2.88 5.71 4.29 4.29l6.3 6.3 6.29-6.3z" />
                </svg>
              </button>
            </div>
            <div className="px-4 py-4">
              <ul className="space-y-1 text-base">
                <li>
                  <a 
                    href="/" 
                    className="block py-3 px-2 rounded-md hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60" 
                    onClick={() => setOpen(false)}
                  >
                    Home
                  </a>
                </li>
                
                <li>
                  <button
                    type="button"
                    onClick={handleServicesToggle}
                    className="w-full text-left py-3 px-2 rounded-md hover:bg-white/5 transition-colors flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-base"
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
                  {servicesOpen && (
                    <ul id="mobile-services-menu" className="pl-4 mt-1 space-y-1" role="menu">
                      <li role="none">
                        <a 
                          href="/services/fractional-head-of-marketing" 
                          className="block py-2.5 px-2 rounded-md hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60" 
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
                          className="block py-2.5 px-2 rounded-md hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60" 
                          role="menuitem"
                          onClick={() => { 
                            setOpen(false); 
                            setServicesOpen(false); 
                          }}
                        >
                          Fractional Paid Media
                        </a>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <a 
                    href="/how-we-work" 
                    className="block py-3 px-2 rounded-md hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60" 
                    onClick={() => setOpen(false)}
                  >
                    How We Work
                  </a>
                </li>
                
                <li>
                  <button
                    type="button"
                    onClick={handleResourcesToggle}
                    className="w-full text-left py-3 px-2 rounded-md hover:bg-white/5 transition-colors flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-base"
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
                  {resourcesOpen && (
                    <ul id="mobile-resources-menu" className="pl-4 mt-1 space-y-1" role="menu">
                      <li role="none">
                        <a 
                          href="/resources/blog" 
                          className="block py-2.5 px-2 rounded-md hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60" 
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
                  )}
                </li>

                <li>
                  <a 
                    href="/about" 
                    className="block py-3 px-2 rounded-md hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60" 
                    onClick={() => setOpen(false)}
                  >
                    About
                  </a>
                </li>
                
                <li className="pt-4 border-t border-white/10">
                  <a
                    href="https://calendly.com/fractionaldemand/30min"
                    target="_blank"
                    rel="noopener"
                    className="btn btn-primary btn-md w-full text-center"
                    onClick={() => setOpen(false)}
                  >
                    Let&apos;s Talk
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
