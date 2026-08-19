import type { SVGProps } from "react";


interface Feature {
  icon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
  title: string;
  description: string;
}

const LEFT_FEATURES: Feature[] = [
  {
    icon: TrophyIcon,
    title: "Erstklassiger Service",
    description:
      "Persönliche Beratung und Betreuung, die Ihre Erwartungen bei jedem Schritt übertrifft.",
  },
  {
    icon: RoadIcon,
    title: "Transparente Abwicklung",
    description:
      "Klare Konditionen und verlässliche Unterstützung — von der ersten Anfrage bis zur Übergabe.",
  },
];

const RIGHT_FEATURES: Feature[] = [
  {
    icon: TagIcon,
    title: "Faire Preise",
    description:
      "Erstklassige Fahrzeuge zu einem Preis, der wirklich stimmt — ohne versteckte Kosten.",
  },
  {
    icon: PinIcon,
    title: "Vor Ort in Stuttgart",
    description:
      "Besichtigung und Probefahrt direkt bei uns — persönlich und unkompliziert.",
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 pt-16 pb-20  text-center lg:px-10">
      <h2 className="font-heading text-4xl font-bold text-foreground lg:text-5xl">
        Unsere Vorteile
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/70">
        Faire Preise, persönliche Beratung und ein Fahrzeugbestand, dem Sie
        vertrauen können.
      </p>
 
      <div className="mx-auto mt-16 grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_1.2fr_1fr]">
        {/* Left features */}
        <div className="space-y-10 text-left">
          {LEFT_FEATURES.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary text-white">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-foreground/70">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
 
        {/* Center image */}
        <div className="mx-auto">
          {/* TODO: replace with your own vehicle photo */}
          <img
            src="/Hero-Images/Hero-Background.jpg"
            alt="Fahrzeug"
            className="w-full max-w-md object-cover"
          />
        </div>
 
        {/* Right features */}
        <div className="space-y-10 text-left">
          {RIGHT_FEATURES.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary text-white">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-foreground/70">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Icons ---------------- */
function TrophyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M7 4h10v4a5 5 0 0 1-10 0V4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 5H4a2 2 0 0 0 2 4M17 5h3a2 2 0 0 1-2 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 13v3m-3 4h6m-3-4v4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RoadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M9 3 4 21m11-18 5 18M12 8v2m0 4v2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M20.6 12.6 12.4 20.8a2 2 0 0 1-2.8 0l-6.4-6.4a2 2 0 0 1 0-2.8L11.4 3.4a2 2 0 0 1 1.4-.6H19a2 2 0 0 1 2 2v6.4a2 2 0 0 1-.4 1.4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="8" r="1.5" fill="currentColor" />
    </svg>
  );
}

function PinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}