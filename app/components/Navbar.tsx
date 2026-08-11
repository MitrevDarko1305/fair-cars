"use client";
import type { SVGProps } from "react";
import { useState, useEffect } from "react";
import type { RefObject } from "react";

interface NavbarProps {
  heroEndRef: RefObject<HTMLDivElement | null>;
}


/**
 * Navbar
 * Standalone nav bar, extracted so it can be reused in multiple
 * places (e.g. once inside the hero, once again right after it,
 * so it "sticks" again once the user scrolls past the hero).
 *
 * Usage:
 *   <div className="sticky top-0 z-50 w-full bg-background">
 *     <Navbar />
 *   </div>
 */

const NAV_LINKS = ["Startseite", "Fahrzeuge", "Buchung", "Gründer", "Neuigkeiten"];

export default function Navbar({heroEndRef}: NavbarProps) {

  return (
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

      <button className="bg-primary cursor-pointer px-5 py-2.5 text-sm font-black font-heading text-foreground shadow-sm transition hover:bg-primary-hover">
        Kontakt
      </button>
    </header>
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