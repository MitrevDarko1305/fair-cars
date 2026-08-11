"use client";
import { useState, useRef, SVGProps, type FormEvent } from "react";
import Navbar from "./Navbar";

/**
 * VehicleRequestHero
 * Hero section (nav + headline + background image) sized to ~50vh,
 * followed by a request form and a 4-step process — both sit in
 * normal document flow below the hero, not stretched by it.
 *
 * Swap anything marked TODO for your own copy / logo / photo.
 * "use client" is required since this uses useState (App Router).
 */

type VehicleTypeId = "car" | "van" | "minibus" | "prestige";

interface VehicleTypeOption {
  id: VehicleTypeId;
  label: string;
  icon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
}

interface Step {
  number: number;
  title: string;
  description: string;
}

const VEHICLE_TYPES: VehicleTypeOption[] = [
  { id: "car", label: "Auto", icon: CarIcon },
  { id: "van", label: "Van", icon: VanIcon },
  { id: "minibus", label: "Kleinbus", icon: MinibusIcon },
  { id: "prestige", label: "Luxus", icon: PrestigeIcon },
];

const STEPS: Step[] = [
  {
    number: 1,
    title: "Fahrzeug ansehen",
    description: "Werfen Sie einen Blick auf unseren aktuellen Fahrzeugbestand.",
  },
  {
    number: 2,
    title: "Anfrage senden",
    description:
      "Teilen Sie uns mit, welches Fahrzeug Sie interessiert (oder wonach Sie suchen), und hinterlassen Sie Ihre Daten.",
  },
  {
    number: 3,
    title: "Besichtigung & Probefahrt",
    description: "Wir vereinbaren einen Termin für die Besichtigung und Probefahrt.",
  },
  {
    number: 4,
    title: "Losfahren",
    description: "Papierkram erledigt, Schlüssel in der Hand — einfach und unkompliziert.",
  },
];

const NAV_LINKS = ["Startseite", "Fahrzeuge", "Buchung", "Gründer", "Neuekeiten"];

// TODO: replace with the business's real inbox
const REQUEST_EMAIL = "info@yourcompany.com";

type SendStatus = "sent" | null;

export default function VehicleRequestHero() {
const heroEndRef = useRef<HTMLDivElement>(null);
  const [vehicleType, setVehicleType] = useState<VehicleTypeId>("car");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<SendStatus>(null);

  function handleSendRequest(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Simple mailto fallback — swap this for a fetch() to your own
    // backend/API (e.g. a form endpoint, or an email service) when ready.
    const subject = encodeURIComponent(`Vehicle request: ${vehicleType}`);
    const body = encodeURIComponent(
      `Vehicle type: ${vehicleType}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${REQUEST_EMAIL}?subject=${subject}&body=${body}`;

    setStatus("sent");
  }

  return (
    <div className="text-white">

     <div ref={heroEndRef} />
      {/* HERO — background image scoped to just nav + headline */}
      <div className="relative min-h-[30vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            // TODO: replace with your own hero image
            backgroundImage: "url('/Hero-Images/Hero-Background.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative">
          {/* Nav */}
          <div className="sticky top-0 z-50 w-full bg-background">
           <Navbar heroEndRef={heroEndRef} />
          </div>

          {/* Headline */}
          <div className="mx-auto max-w-7xl px-6 pb-10 pt-8 lg:px-10 lg:pb-6 lg:pt-2">
            <h1 className="max-w-4xl text-4xl font-bold font-heading leading-[1.1] tracking-wide sm:text-5xl lg:text-5xl">
              Auf der Suche nach einem <span className="text-primary">Fahrzeug</span>? Sie sind
              hier genau richtig.
            </h1>
          </div>
        </div>
      </div>
      {/* HERO ENDS HERE */}


      {/* Request card — outside the hero, normal flow */}
      <div className="relative z-40 mx-auto max-w-7xl px-6 lg:px-10">
        <form
          onSubmit={handleSendRequest}
          className="bg-foreground p-6 text-slate-900 shadow-2xl sm:p-8 lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:gap-10">
            {/* Vehicle type */}
            <div>
              <p className="mb-4 text-sm font-bold text-slate-900">
                  Welchen Fahrzeugtyp suchen Sie?
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 lg:gap-3">
                {VEHICLE_TYPES.map(({ id, label, icon: Icon }) => {
                  const active = vehicleType === id;
                  return (
                    <button
                      type="button"
                      key={id}
                      onClick={() => setVehicleType(id)}
                      className={`flex w-28 flex-col items-center justify-center gap-3 cursor-pointer px-4 py-6 transition sm:w-32 ${
                        active
                          ? "bg-primary text-foreground"
                          : "bg-primary text-white hover:bg-primary-hover"
                      }`}
                    >
                      <Icon className="h-9 w-9" />
                      <span className="text-sm font-semibold">{label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Contact details */}
            <div>
              <p className="mb-4 text-sm font-bold text-slate-900">
                Tell us what you need
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-900">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ihr voll name"
                    required
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-900">
                    Handy
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Handy nummer"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-bold text-slate-900">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-bold text-slate-900">
                    Nachricht
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Daten, wann Sie das fahrzeug benötigen, Abholort oder alles andere, was wir wissen sollten."
                    rows={3}
                    className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-end gap-4">
            {status === "sent" && (
              <span className="text-sm font-medium text-emerald-600">
                Opening your email app…
              </span>
            )}
            <button
              type="submit"
              className="bg-primary tracking-wide cursor-pointer px-8 py-3.5 text-sm font-black text-white shadow-sm font-heading transition hover:bg-primary-hover"
            >
              Anfrage senden
            </button>
          </div>
        </form>
      </div>

      {/* 4-step process */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div key={step.number} className="relative">
              <div className="mb-6 flex items-center">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-primary text-lg font-bold">
                  {step.number}
                </span>
                {i < STEPS.length - 1 && (
                  <span className="ml-3 hidden h-px flex-1 bg-primary lg:block" />
                )}
              </div>
              <h3 className="mb-2 text-xl font-bold font-heading">{step.title}</h3>
              <p className="text-sm leading-relaxed text-white/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Icons ---------------- */

function ChevronDown({ className }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
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

function CarIcon({ className }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path
        d="M6 30l3-10a4 4 0 0 1 4-3h22a4 4 0 0 1 4 3l3 10"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="4" y="30" width="40" height="8" rx="2" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="14" cy="38" r="3" fill="currentColor" />
      <circle cx="34" cy="38" r="3" fill="currentColor" />
    </svg>
  );
}

function VanIcon({ className }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path
        d="M4 32V18a3 3 0 0 1 3-3h20l10 8v9"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M4 32h33" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="14" cy="34" r="3" fill="currentColor" />
      <circle cx="32" cy="34" r="3" fill="currentColor" />
    </svg>
  );
}

function MinibusIcon({ className }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <rect x="5" y="16" width="38" height="16" rx="4" stroke="currentColor" strokeWidth="2.5" />
      <path d="M5 24h38" stroke="currentColor" strokeWidth="2" />
      <circle cx="15" cy="34" r="3" fill="currentColor" />
      <circle cx="33" cy="34" r="3" fill="currentColor" />
    </svg>
  );
}

function PrestigeIcon({ className }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path
        d="M4 28l4-9a4 4 0 0 1 4-2h24a4 4 0 0 1 4 2l4 9"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M4 28h40v5H4z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="14" cy="33" r="3" fill="currentColor" />
      <circle cx="34" cy="33" r="3" fill="currentColor" />
    </svg>
  );
}