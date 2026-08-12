"use client"
import { useRef, type SVGProps } from "react";

interface Testimonial {
    headline: string;
    quote: string;
    name: string;
    image: string;
    proffesion: string;
} 

const TESTIMONIALS: Testimonial[] = [
    {
        headline: "Ehrlich und Unkompliziert",
        quote: "Ehrliche Beratung, keine versteckten Kosten, keine Überraschungen — genau wie versprochen.",
        name: "Khalid Hamal", 
        image: "/Hero-Images/Testimonial-1.jpg",
        proffesion: "Immobilien Verkaüfer",
    },

     {
        headline: "Schnell und fair",
        quote: "Der verkauf meines alten Wagens hat keine drei tagen gedauert.Faire Bewertung,schnelle Abwicklung - genau das, was ich gesucht habe.",
        name: "Martina Weber", 
        image: "/Hero-Images/Testimonial-2.jpg",
        proffesion: "Zulassungstelle mitarbeter",
    },

    {
        headline: "Persönlicher Service",
        quote: "Von der erste Probefahrt bis zür Übergabe hat sich Fair Cars persönlich um alles gekümmert. So sollte Autokauf sein.",
        name: "David Klein", 
        image: "/Hero-Images/testimonial-3.jpg",
        proffesion: "Hausarzt",
    },

     {
        headline: "Tolle Inzahlungnahme",
        quote: "Mein altes auto wurde fair bewertet und direkt beim kauf angerechnet.Unkompliziert und ohne endloses Verhandelt.",
        name: "Yunga Kefir", 
        image: "/Hero-Images/testimonial-4.jpg",
        proffesion: "Verkaüferin",
    },

     {
        headline: "Immer erreichbar",
        quote: "Jede Frage wurde schnell und ehrlich beantwortet - auch nach dem Kauf. Genau die Betreuung, die ich mir gewünscht habe.",
        name: "Gjani Giovanni", 
        image: "/Hero-Images/testimonial-5.jpg",
        proffesion: "DJ",
    },
]

export default function TestimonialsSections() {
    const scrollRef = useRef<HTMLDivElement>(null);

     function scrollByCard(direction: "prev" | "next") {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild?.clientWidth ?? 360;
    el.scrollBy({
      left: direction === "next" ? cardWidth + 24 : -(cardWidth + 24),
      behavior: "smooth",
    });
  }

  return (
    <section className="bg-background px-6 pt-20 pb-0 lg:px-10">
      <div className="mx-auto max-w-6xl text-center">
        <span className="inline-block bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
          Kundenstimmen
        </span>
        <h2 className="mt-1 font-heading text-4xl font-bold text-foreground lg:text-5xl">
          Was unsere Kunden sagen
        </h2>
      </div>
 
      <div className="relative mx-auto mt-16 ">
        {/* Prev / Next arrows */}
        <button
          type="button"
          onClick={() => scrollByCard("prev")}
          aria-label="Vorheriges Testimonial"
          className="absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-foreground text-background hover:text-foreground shadow-lg transition hover:bg-background lg:flex"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard("next")}
          aria-label="Nächstes Testimonial"
          className="absolute right-0 top-1/2 z-10 hidden h-11 w-11 translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-foreground text-background hover:text-foreground shadow-lg transition hover:bg-background lg:flex"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
 
        {/* Card row */}
        <div 
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-2 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="relative flex h-[750px] w-[85%] shrink-0 snap-start flex-col rounded-xl overflow-hidden sm:w-[45%] lg:w-[calc(33.333%-16px)]"
            >
              {/* Background photo */}
              <img
                src={t.image}
                alt={t.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                {/* Content */}
              <div className="relative flex h-full flex-col p-8">
                <QuoteIcon className="ml-auto h-8 w-8 text-foreground" />
 
                <div className="mt-auto">
                  <h3 className="font-heading text-xl font-bold text-white">
                    {t.headline}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    {t.quote}
                  </p>
                  <div className="mt-5 flex items-center gap-2 justify-center text-sm font-black font-heading text-foreground">
                    <p className="mt-0 text-sm leading-relaxed text-foreground/60">
                    {t.proffesion}
                    </p>
                    <span className="h-px w-6 bg-foreground" />
                    {t.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function QuoteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M9.5 6C6.5 6 4 8.5 4 11.5c0 2.5 1.8 4.5 4 4.5.3 0 .5 0 .8-.1C8 18 6.5 19 5 19.3v2.2c3.5-.5 6-3.3 6-7.5V11c0-2.8-1-5-1.5-5zm10 0c-3 0-5.5 2.5-5.5 5.5 0 2.5 1.8 4.5 4 4.5.3 0 .5 0 .8-.1-.8 2.1-2.3 3.1-3.8 3.4v2.2c3.5-.5 6-3.3 6-7.5V11c0-2.8-1-5-1.5-5z" />
    </svg>
  );
}
 
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