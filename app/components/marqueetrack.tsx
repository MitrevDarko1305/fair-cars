"use client";

const MARQUE_ITEMS = [
  "BMW",
  "Ankauf",
  "Mercedes-Benz",
  "Verkauf",
  "Audi",
  "Zulassung",
  "Volkswagen",
  "Finanzierung",
  "Porsche",
  "Probefahrt",
  "Skoda",
  "Ford",
  "Opel",
];

export default function MarqueeTrack() {

    const items = [...MARQUE_ITEMS, ...MARQUE_ITEMS];
    return (
      <section className="py-16">
        <div className="overflow-hidden border-b border-foreground bg-primary-hover py-12">
            <div className="flex w-max animate-marque gap-8">
              {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 text-6xl font-black font-heading capitalise tracking-wide text-foreground"
          >
            {item}
            <span className="text-primary h-1 w-12 bg-foreground" />
            </span>
            ))}
            </div>
        </div>
      </section>
        );
       }
 
