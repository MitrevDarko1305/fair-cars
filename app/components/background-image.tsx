
/**
 * BackgroundTextSection
 * Full-bleed background photo with a dark overlay, headline + paragraph
 * near the top, and a row of stat cards overlapping the bottom edge.
 *
 * Replace the TODO-marked image path and the stat NUMBERS with real
 * figures — placeholders below are just illustrative.
 */

interface Stat {
  value: string;
  label: string;
}

const STATS: Stat[] = [
  { value: "50+", label: "Verkaufte Fahrzeuge" },
  { value: "30+", label: "Zufriedene Kunden" },
  { value: "40+", label: "Fahrzeuge im Bestand" },
  { value: "9", label: "Jahre Erfahrung" },
];

export function BackgroundTextSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-40 pt-24 lg:px-10 lg:pt-24">
      {/* TODO: replace with your own background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/Hero-Images/Inventory-Store-3.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Headline + paragraph */}
      <div className="relative mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-2">
        <h2 className="font-heading tracking-wide text-3xl font-bold leading-[1.1] text-white sm:text-4xl lg:text-5xl">
          Große Auswahl an{" "}
          <span className="text-primary">Fahrzeugen</span> für {" "}
          <span className="text-primary"></span>jeden
          Anlass.
        </h2>

        <p className="text-normal  leading-normal text-foreground">
          Bei Fair Cars Stuttgart glauben wir, dass jeder ein zuverlässiges
          und komfortables Fahrzeug fahren sollte — unabhängig vom Budget.
          Unser sorgfältig geprüfter Fahrzeugbestand reicht von schlanken
          Limousinen bis zu geräumigen SUVs, alle zu fairen Preisen. Mit
          unserem unkomplizierten Ablauf können Sie schnell und einfach Ihr
          Wunschfahrzeug finden.
        </p>
      </div>

      {/* Stat cards — overlap the bottom edge of the section */}
      <div className="relative z-10 mx-auto -mb-20 mt-20 grid max-w-6xl grid-cols-2 gap-4 lg:mt-25 lg:grid-cols-4 lg:gap-6">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="bg-black/70 px-6 py-8 text-center backdrop-blur-sm"
          >
            <div className="font-heading text-4xl font-black font-heading text-primary lg:text-5xl">
              {stat.value}
            </div>
            <div className="mt-2 text-sm text-foreground font-black">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}