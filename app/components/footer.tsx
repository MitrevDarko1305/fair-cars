import type { SVGProps } from "react";

/**
 * Footer
 * 4-column footer: about blurb, contact info, quick links, social
 * icons — plus a bottom bar with copyright and legal links.
 *
 * Replace TODO-marked address/phone/email/social links with real
 * details for Fair Cars Stuttgart.
 */

const QUICK_LINKS = [
  { label: "Startseite", href: "#" },
  { label: "Fahrzeuge", href: "#" },
  { label: "Gründer", href: "#" },
  { label: "Neuigkeiten", href: "#" },
  { label: "Kontakt", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0D] px-6 pt-20 text-white lg:px-10">
      <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* About */}
        <div>
          <h3 className="font-heading text-lg font-bold text-white">
            Über Fair Cars
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Faire Preise, ehrliche Beratung und persönlicher Service — Fair
            Cars Stuttgart steht für Vertrauen im An- und Verkauf von
            Fahrzeugen.
          </p>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="font-heading text-lg font-bold text-white">
            Kontakt
          </h3>
          <ul className="mt-4 space-y-4 text-sm text-white/60">
            <li className="flex items-start gap-3">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {/* TODO: replace with real address */}
              70191 Stuttgart
            </li>
            <li className="flex items-center gap-3">
              <PhoneIcon className="h-4 w-4 shrink-0 text-primary" />
              {/* TODO: confirm real phone number */}
              <a href="tel:+491768146429" className="hover:text-primary">
                0176 814 64290
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MailIcon className="h-4 w-4 shrink-0 text-primary" />
              {/* TODO: replace with real email */}
              <a
                href="mailto:info@fair-cars-stuttgart.de"
                className="hover:text-primary"
              >
                info@fair-cars-stuttgart.de
              </a>
            </li>
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-heading text-lg font-bold text-white">
            Schnellzugriff
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-white/60 transition hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-heading text-lg font-bold text-white">
            Social Media
          </h3>
          <div className="mt-4 flex gap-3">
            {/* TODO: replace # with real social links, or remove icons not used */}
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center bg-white/10 text-primary transition hover:bg-primary hover:text-white"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center bg-white/10 text-primary transition hover:bg-primary hover:text-white"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center bg-white/10 text-primary transition hover:bg-primary hover:text-white"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto mt-16 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-white/50 sm:flex-row">
        <span>© {new Date().getFullYear()} Fair Cars Stuttgart</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary">
            Impressum
          </a>
          <a href="#" className="hover:text-primary">
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Icons ---------------- */

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

function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="m4 6 8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5H16l.5-3H13.5V8.5c0-.9.3-1.5 1.6-1.5H16.5V4.3c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V10.5H7.5v3H10V21h3.5Z" />
    </svg>
  );
}

function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Zm0 16.3a7.3 7.3 0 0 1-3.7-1l-.3-.2-2.7.7.7-2.6-.2-.3a7.3 7.3 0 1 1 6.2 3.4Zm4-5.5c-.2-.1-1.3-.6-1.5-.7-.2-.1-.4-.1-.5.1s-.5.7-.7.8-.3.1-.5 0a5.9 5.9 0 0 1-1.7-1.1 6.5 6.5 0 0 1-1.2-1.5c-.1-.2 0-.3.1-.4l.3-.4.2-.3v-.3c0-.1-.5-1.3-.7-1.7-.2-.5-.4-.4-.5-.4h-.4a.9.9 0 0 0-.6.3 2.6 2.6 0 0 0-.8 2 4.6 4.6 0 0 0 1 2.4 10 10 0 0 0 4 3.5c.6.2 1 .4 1.4.5.6.2 1.1.2 1.5.1.5-.1 1.3-.5 1.5-1s.2-.9.1-1c0-.1-.2-.2-.4-.3Z" />
    </svg>
  );
}