"use client";
import {useRef, type SVGProps} from "react";


interface Vehicle {
    name: string;
    image:string;
    seats: number;
    doors: number;
    transmission: string;
    type:string;
    price:string;
}

const VEHICLES: Vehicle[] = [
    {
     name: "BMW M2",
     image: "/Hero-Images/bmw-m2.png",
     seats: 4,
     doors: 2,
     transmission: "Automatik",
     type: "Sportwagen",
     price: "ab 42.900 €",
    },

      {
    name: "Audi Q5",
    image: "/Hero-Images/audi-q5.png",
    seats: 5,
    doors: 4,
    transmission: "Automatik",
    type: "SUV",
    price: "ab 31.700 €",
    },

    {
    name: "Land Cruiser",
    image: "/Hero-Images/land-cruiser.png",
    seats: 5,
    doors: 4,
    transmission: "Manuell",
    type: "Limousine",
    price: "ab 28.500 €",
    },

    {
    name: "Mini Cooper",
    image: "/Hero-Images/mini-cooper.png",
    seats: 4,
    doors: 3,
    transmission: "Automatik",
    type: "Small car",
    price: "ab 41.200 €",
    },

     {
    name: "VW ID.4",
    image: "/Hero-Images/VW-Toureg.png",
    seats: 4,
    doors: 3,
    transmission: "Manuell",
    type: "SUV",
    price: "ab 16.700 €",
    },

    {
    name: "Porsche-Panorama",
    image: "/Hero-Images/Porsche-Panorama.png",
    seats: 4,
    doors: 3,
    transmission: "Manuell",
    type: "Sports car",
    price: "ab 82.500 €",
    },
]

export default function VehicleFleetSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
 
  function scrollByCard(direction: "prev" | "next") {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild?.clientWidth ?? 360;
    el.scrollBy({
      left: direction === "next" ? cardWidth + 24 : -(cardWidth + 24),
      behavior: "smooth",
    });
  }

  return (
    <section className="bg-foreground sm:px-6 px-2 py-20 text-center lg:px-10">
      <span className="inline-block bg-background px-2 py-1.5  text-xs font-semibold text-foreground">
        Unser Bestand
      </span>
 
      <h2 className="mt-4 font-heading text-4xl font-black text-primary lg:text-5xl">
        <span className="text-background lg:text-5xl text-4xl font-black font-heading mt-4">Unsere</span>  {" "}
        Fahrzeuge
      </h2>
 
      <p className="mx-auto mt-4 max-w-2xl text-base text-background mb-10 mt-6 sm:mt-0 sm:mb-0">
        Sorgfältig geprüft und bereit für Ihre nächste Fahrt — entdecken Sie
        unseren aktuellen Fahrzeugbestand.
      </p>
 
      <div className="relative mx-auto mt-4 max-w-6xl">
        {/* Prev / Next arrows */}
        <button
          type="button"
          onClick={() => scrollByCard("prev")}
          aria-label="Vorheriges Fahrzeug"
          className="absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-foreground text-background hover:text-foreground shadow-lg transition hover:bg-background lg:flex"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard("next")}
          aria-label="Nächstes Fahrzeug"
          className="absolute right-0 top-1/2 z-10 hidden h-11 w-11 translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-foreground text-background hover:text-foreground shadow-lg transition hover:bg-background lg:flex"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
 
        {/* Card row */}
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {VEHICLES.map((vehicle) => (
            <div
              key={vehicle.name}
              className="w-full md:w-[85%] shrink-0 snap-start bg-surface text-left text-background shadow-md sm:w-[45%] lg:w-[calc(33.333%-16px)]"
            >
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="h-60 w-full object-cover"
              />
 
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-slate-900">
                  {vehicle.name}
                </h3>
 
                <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-slate-600">
                  <span className="flex items-center gap-1.5">
                    <SeatsIcon className="h-4 w-4 text-primary" />
                    {vehicle.seats}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <DoorIcon className="h-4 w-4 text-primary" />
                    {vehicle.doors}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <GearIcon className="h-4 w-4 text-primary" />
                    {vehicle.transmission}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CarTypeIcon className="h-4 w-4 text-primary" />
                    {vehicle.type}
                  </span>
                </div>
 
                <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-5">
                  <div>
                    <div className="text-xs text-slate-500">Preis</div>
                    <div className="text-lg font-black text-background">
                      {vehicle.price}
                    </div>
                  </div>
                  <button className="bg-primary cursor-pointer px-5 py-2.5 text-sm font-black text-foreground font-heading transition hover:bg-primary-hover">
                    Anfrage senden
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Icons ---------------- */
 
function ChevronLeft(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
 
function ChevronRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
 
function SeatsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="6" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M6 21v-4a6 6 0 0 1 12 0v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
 
function DoorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="5" y="3" width="14" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 12h.01" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}
 
function GearIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 3v2m0 14v2m9-9h-2M5 12H3m14.5-6.5-1.4 1.4M7.9 17.1 6.5 18.5m11-1.4 1.4 1.4M7.9 6.9 6.5 5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
 
function CarTypeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M3 13l1.5-4.5A2 2 0 0 1 6.4 7h11.2a2 2 0 0 1 1.9 1.5L21 13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="3" y="13" width="18" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="7.5" cy="18" r="1.4" fill="currentColor" />
      <circle cx="16.5" cy="18" r="1.4" fill="currentColor" />
    </svg>
  );
}