"use client"

import {useState, type SVGProps} from "react";

interface FaqItem {
    question: string;
    answer: string;
}

const FAQ_LEFT: FaqItem[] = [
    { question: "Wie läuft der Ankauf meines Fahrzeugs ab?",
      answer:"Sie teilen uns die Eckdaten, Ihres fahrzeugs mit, wir vereinbaren einen Besichtigungs termin, und machen Ihnen vor Ort ein faires Angebot.",
    },

    { question: "Kann ich mein Altes Fahrzeug in zahlung Geben?",
      answer:"Ja, wir nehmen Ihr Aktuelles Fahrzeug gerne in Zahlung und rechnen den fairen Wert direkt auf den Kaufpreis an.",
    },

     { question: "Sind die Fahrzeuge geprüft??",
      answer:"Jedes Fahrzeug in unserem Bestand wird vor dem Verkauf sorgfältig technisch geprüft.",
    },
];

const FAQ_RIGHT: FaqItem[] = [

    { question: "Bieten Sie eine Garantie an?",
      answer: "Ja, nach Fahrzeug bieten wir eine Gewährleistung an - Details besprechen wir gerne persönlich bei der Besichtigung",
    },

    { question: "Kann ich eine Probefahrt vereinbaren?",
      answer: "Selbstverständlich, Kontaktieren Sie uns einfach über das Anfrageformular oder telefonisch, um einen Termin zu vereinbaren.",
    },

    { question: "Welche Zahlungsmöglichkeiten gibt es?",
      answer: "Wir akzeptieren kartezahlung. Überweisung sowie die meisten gängigen Finanzierungsoptionen,",
    },
];


function FaqAccordionItem({ question, answer }: FaqItem) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-foreground/10 py-5">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
      >
        <span className="font-heading text-lg font-black text-foreground">
          {question}
        </span>
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-white transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <ChevronDown className="h-4 w-4" />
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="mt-4 text-sm leading-relaxed text-foreground/70">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FaqSection() {
  return (
    <section className="bg-background px-6 pt-28 pb-16 lg:px-10">
      <div className="mx-auto max-w-6xl text-center">
        <span className="inline-block bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
          Häufige Fragen
        </span>
        <h2 className="mt-1 font-heading text-4xl font-bold text-foreground lg:text-5xl">
          Fragen?
        </h2>
      </div>
 
      <div className="mx-auto mt-16 grid max-w-6xl gap-x-16 lg:grid-cols-2">
        <div>
          {FAQ_LEFT.map((item) => (
            <FaqAccordionItem key={item.question} {...item} />
          ))}
        </div>
        <div>
          {FAQ_RIGHT.map((item) => (
            <FaqAccordionItem key={item.question} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------------- Icons ---------------- */
 
function ChevronDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
 
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