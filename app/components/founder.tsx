
interface Stat {
    value: string;
    label: string;
}


const STATS: Stat[] = [
    { value: "9+", label: "Jahre Erfahrung"},
    { value: "500+", label: "Verkaufte Fahrzeuge"},
]

export default function FounderSection() {
    return (
        <section className="bg-foreground relative px-6 pt-12 pb-20 lg:px-10">
            <div className="mx-auto grid max-w-6xl items-center sm:gap-12 gap-6 lg:grid-cols-2 lg:gap-20">

                 {/* Photo */}
               <div className="relative">
               {/* TODO: replace with a real photo of the founder */}
                <img
                 src="/Hero-Images/founder.jpg"
                 alt="Gründer von Fair Cars Stuttgart"
                 className="h-[480px] w-full object-[center_20%]"
                />
               </div>

          <div className="pt-8 lg:pt-0">
            <span className="inline-block bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Über uns
           </span>
             <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-background sm:text-4xl">
               Persönlich. Ehrlich. Vor Ort in Stuttgart.
             </h2>

              <blockquote className="mt-6 border-l-4 border-primary pl-5 text-lg font-medium leading-relaxed text-background/50">
            {/* TODO: replace with a real quote from the founder */}
            "Jedes Fahrzeug, das ich verkaufe, würde ich auch meiner eigenen
            Familie empfehlen. Faire Preise und ehrliche <br /> Beratung — darauf
            kann man sich bei mir verlassen."
          </blockquote>

           <p className="mt-6 text-base leading-relaxed text-background/70">
            {/* TODO: replace with real bio copy */}
            Seit über 9 Jahren steht Fair Cars Stuttgart für Vertrauen und
            Qualität im Fahrzeughandel. Jedes Fahrzeug wird persönlich
            geprüft, bevor es in unseren Bestand aufgenommen wird — damit Sie
            sich auf das verlassen können, was Sie sehen.
          </p>

           {/* TODO: swap for the founder's actual name */}
          <div className="mt-8 font-heading text-xl font-bold text-background">
            Kadria 
            <span className="mt-1 block text-sm font-normal text-background/60">
              Gründer, Fair Cars Stuttgart
            </span>
          </div>


          </div>
        </div>
        </section>
       )
      }

      /* stats 

      <div className="absolute -bottom-8 left-6 right-6 flex gap-4 sm:left-8 sm:right-auto sm:gap-6">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex-1 bg-primary px-5 py-4 text-center shadow-xl sm:flex-none sm:px-8"
              >
                <div className="font-heading text-2xl font-bold text-white sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-white/80 sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
      
      
      */