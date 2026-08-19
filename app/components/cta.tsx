"use client"

export function CtaSection() {
  return (
    <section className="bg-foreground px-6 py-16 lg:px-10">
      <div className="mx-auto grid max-w-6xl  items-center gap-10 lg:grid-cols-2">
        <div className="text-center lg:text-start">
          <span className="inline-block bg-background px-4 py-1.5 text-sm font-semibold text-foreground">
            Rufen Sie uns an
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-background sm:text-4xl">
            Fair Cars Stuttgart ist jederzeit für Sie da.
          </h2>
        </div>
 
        <div className="flex flex-col items-center text-center">
          <PhoneIcon className="h-10 w-10 text-background" />
          <span className="mt-3 text-xs font-semibold uppercase tracking-widest text-background/70">
            Jetzt anrufen
          </span>
          {/* TODO: replace with the real phone number */}
          <a
            href="tel:+491768146429"
            className="mt-2 font-heading text-3xl font-bold text-background"
          >
            0176 814 64290
          </a>
          <button className="mt-6 bg-background px-8 py-3 text-sm font-bold cursor-pointer text-foreground transition hover:bg-primary">
            Kontakt aufnehmen
          </button>
        </div>
      </div>
    </section>
  );
}

import { useState, type SVGProps } from "react";


function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M3 5c0-1.1.9-2 2-2h2.28a1 1 0 0 1 .97.76l.9 3.6a1 1 0 0 1-.27.95L7.4 9.8a12 12 0 0 0 6.8 6.8l1.5-1.48a1 1 0 0 1 .95-.27l3.6.9a1 1 0 0 1 .76.97V19a2 2 0 0 1-2 2h-1C10.5 21 3 13.5 3 5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}