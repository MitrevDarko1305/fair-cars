"use client";
import type { SVGProps } from "react";
import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";

interface NavbarProps {
  heroEndRef: RefObject<HTMLDivElement | null>;
}

/**
 * Navbar
 * Hidden while inside the hero. Once the user scrolls past the hero
 * (tracked via heroEndRef sentinel), the navbar becomes
 * direction-aware:
 *   - scrolling DOWN → navbar hides
 *   - scrolling UP    → navbar reappears
 * Same pattern as most modern sites (e.g. mobile Safari's toolbar).
 *
 * Usage — place a sentinel div at the bottom of your hero section:
 *   const heroEndRef = useRef<HTMLDivElement>(null);
 *   <div className="relative min-h-[50vh]">
 *     ...hero content...
 *     <div ref={heroEndRef} />
 *   </div>
 *   <Navbar heroEndRef={heroEndRef} />
 */

const NAV_LINKS = ["Startseite", "Fahrzeuge", "Buchung", "Gründer", "Neuigkeiten"];

export default function Navbar({ heroEndRef }: NavbarProps) {
  const [pastHero, setPastHero] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  // Track whether we've scrolled past the hero at all.
  useEffect(() => {
    const target = heroEndRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setPastHero(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [heroEndRef]);

  // Track scroll direction.
  useEffect(() => {
    lastScrollY.current = window.scrollY;

    function handleScroll() {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;

      // Ignore tiny scroll jitters (e.g. rubber-banding on mobile)
      if (Math.abs(diff) > 4) {
        setScrollingUp(diff < 0);
        lastScrollY.current = currentY;
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navbar is visible once we're past the hero AND the user is
  // scrolling up (or has stopped near the top of that range).
  const visible = !pastHero || scrollingUp;

  // Close the mobile menu automatically if the navbar hides.
  useEffect(() => {
    if (!visible) setMobileOpen(false);
  }, [visible]);

  return (
    <div
      className={`fixed top-0 z-50 w-full bg-background transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#" className="flex items-center gap-2">
          {/* TODO: replace with your logo */}
          <LogoMark className="h-9 w-9 text-primary" />
          <span className="text-2xl font-heading uppercase font-bold tracking-wide">
            Fair - <span className="text-primary">Cars</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="flex items-center gap-1 text-sm font-normal text-foreground transition hover:text-primary"
            >
              {link}
            </a>
          ))}
        </nav>

        <button className="hidden bg-primary lg:block cursor-pointer px-5 py-2.5 text-sm font-black font-heading text-foreground shadow-sm transition hover:bg-primary-hover">
          Kontakt
        </button>

        {/* Mobile hamburger toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={mobileOpen}
          className="flex h-10 w-10 cursor-pointer items-center justify-center text-foreground lg:hidden"
        >
          {mobileOpen ? (
            <CloseIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </header>

      {/* Mobile menu panel */}
      <div
        className={`grid overflow-hidden bg-background transition-[grid-template-rows] duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <nav
            className={`flex flex-col gap-1 px-6 pb-6 transition-all duration-300 ease-in-out ${
              mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
            }`}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                onClick={() => setMobileOpen(false)}
                className="border-b border-foreground/10 py-3 text-base font-medium text-foreground transition hover:text-primary"
              >
                {link}
              </a>
            ))}
            <button
              onClick={() => setMobileOpen(false)}
              className="mt-4 bg-primary cursor-pointer px-5 py-3 text-sm font-extrabold text-foreground shadow-sm transition hover:bg-primary-hover"
            >
              Kontakt
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}

function LogoMark({ className }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path
        d="M6 30c6-10 14-16 18-16s12 6 18 16"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="14" cy="32" r="4" fill="currentColor" />
      <circle cx="34" cy="32" r="4" fill="currentColor" />
    </svg>
  );
}

function MenuIcon({ className }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon({ className }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}