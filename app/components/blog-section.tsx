interface blogPost {
  day: string;
  month: string;
  image: string;
  title: string;
  excerpt: string;
  href: string;
}


const BLOG_POSTS: blogPost[] = [
    {
     day: "10",
     month: "March",
     image: "/Hero-Images/Blog-1.jpg", // TODO: replace with real photo
     title: "Worauf Sie beim Autokauf achten sollten",
     excerpt: "Ein zuverlässiger Kauf beginnt mit den richtigen Fragen — wir zeigen, worauf es wirklich ankommt,",
     href: "#",
    },

    {
     day: "12",
     month: "May",
     image: "/Hero-Images/Blog-2.jpg", // TODO: replace with real photo
     title: "So läuft eine probefahrt bei Fair-Cars ab",
     excerpt: "Von der terminverainbarung bis zur Fahrt selbst - so einfach gestalten wir den Ablauf für Sie.",
     href: "#",
    },

    {
    day: "14",
    month: "July",
    image: "/Hero-Images/Blog-3.jpg", // TODO: replace with real photo
    title: "Fahrzeug verkaufen: Der schnelle und faire Weg",
    excerpt:
    "Ehrliche Bewertung, transparente Konditionen und eine unkomplizierte Abwicklung — so geht's.",
    href: "#",
  },
]


export default function BlogSection() {
  return (
    <section className="bg-background px-6 py-20 text-center lg:px-10">
      <span className="inline-block bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
        Aktuelles
      </span>
 
      <h2 className="mt-4 font-heading text-4xl font-bold text-foreground lg:text-5xl">
        News & Tipps
      </h2>
 
      <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/70">
        Praktische Einblicke rund um Kauf, Verkauf und alles, was beim
        Fahrzeugwechsel wirklich zählt.
      </p>
 
      <div className="mx-auto mt-16 grid max-w-6xl gap-8 text-left lg:grid-cols-3">
        {BLOG_POSTS.map((post) => (
          <article key={post.title} className="group">
            <div className="relative overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute left-4 top-4 flex w-16 flex-col items-center bg-primary py-2 text-white">
                <span className="text-xl font-bold leading-none">
                  {post.day}
                </span>
                <span className="mt-1 text-xs font-semibold uppercase tracking-wide">
                  {post.month}
                </span>
              </div>
            </div>
 
            <h3 className="mt-6 font-heading text-xl font-black text-foreground">
              {post.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70">
              {post.excerpt}
            </p>
 
            <a
              href={post.href}
              className="mt-5 inline-block bg-primary tracking-wide font-heading px-6 py-3 text-sm font-bold text-foreground transition hover:bg-primary-hover"
            >
              Mehr lesen
            </a>
 
            <div className="mt-8 h-px w-full bg-primary/30" />
          </article>
        ))}
      </div>
    </section>
  );
}
 