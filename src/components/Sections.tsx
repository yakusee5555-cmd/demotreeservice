import { useEffect, useRef, useState } from "react";
import { BUSINESS, NAV, REVIEWS, SERVICES, TOWNS } from "../data";

/* ---------- scroll reveal ---------- */
export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    el.querySelectorAll(".reveal").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

/* ---------- floating pill header (like the video's nav) ---------- */
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 md:top-6 md:px-8">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full bg-cream/90 py-2.5 pl-3 pr-2.5 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-md md:pl-5">
        <a href="#top" className="flex items-center gap-2.5">
          <svg viewBox="0 0 64 64" className="h-9 w-9">
            <rect width="64" height="64" rx="14" fill="#1B4332" />
            <g fill="none" stroke="#FAF6F0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M32 50 V30" />
              <path d="M32 38 L20 26" />
              <path d="M32 34 L44 22" />
              <path d="M32 30 L24 20" />
              <path d="M32 26 L40 16" />
            </g>
            <circle cx="32" cy="14" r="4" fill="#FAF6F0" />
          </svg>
          <span className="font-display text-lg uppercase tracking-wide text-charcoal">
            Ironwood
          </span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[13px] font-semibold uppercase tracking-wider text-charcoal/70 transition hover:text-charcoal"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={BUSINESS.phoneHref}
            className="hidden rounded-full bg-forest px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-forest-deep sm:block"
          >
            {BUSINESS.phone}
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full bg-charcoal lg:hidden"
          >
            <span className={`h-[2px] w-5 bg-cream transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-[2px] w-5 bg-cream transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-[2px] w-5 bg-cream transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>
      {open && (
        <nav className="mx-auto mt-2 max-w-5xl rounded-3xl bg-cream/95 p-4 shadow-xl backdrop-blur-md lg:hidden">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-wider text-charcoal/85 hover:bg-charcoal/5"
            >
              {n.label}
            </a>
          ))}
          <a
            href={BUSINESS.phoneHref}
            className="mt-2 block rounded-full bg-forest px-6 py-3.5 text-center text-xs font-bold uppercase tracking-widest text-white sm:hidden"
          >
            Call {BUSINESS.phone}
          </a>
        </nav>
      )}
    </header>
  );
}

/* ---------- reviews (editorial) ---------- */
export function Reviews() {
  return (
    <section id="reviews" className="bg-forest py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-cream/60">
              Reviews
            </p>
            <h2 className="reveal mt-3 font-display text-4xl uppercase leading-[1.02] text-cream md:text-6xl">
              Neighbors
              <br />
              vouch for us.
            </h2>
          </div>
          <div className="reveal flex items-center gap-3">
            <span className="font-display text-5xl text-cream">{BUSINESS.rating}</span>
            <span className="text-sm text-cream/70">
              ★★★★★
              <br />
              {BUSINESS.reviewCount} Google reviews
            </span>
          </div>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((r, i) => (
            <figure
              key={r.name}
              className="reveal flex flex-col rounded-3xl bg-cream p-6 shadow-lg"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-amber-400">★★★★★</div>
              <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-charcoal/80">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-4 border-t border-charcoal/10 pt-3">
                <p className="font-bold text-charcoal">{r.name}</p>
                <p className="text-sm text-charcoal/60">{r.town}, NJ</p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* service areas */}
        <div className="mt-16">
          <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-cream/60">
            Service areas
          </p>
          <div className="reveal mt-5 flex flex-wrap gap-2.5">
            {TOWNS.map((t) => (
              <span
                key={t}
                className="rounded-full border border-cream/25 px-5 py-2.5 text-sm font-semibold text-cream/85 transition hover:bg-cream hover:text-forest"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- contact ---------- */
export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative overflow-hidden bg-cream py-24 md:py-32">
      <p className="text-stroke-dark font-display pointer-events-none absolute left-0 top-6 select-none whitespace-nowrap text-[16vw] uppercase leading-none opacity-60">
        Get a quote
      </p>
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pt-16 md:px-12 md:pt-24 lg:grid-cols-2">
        <div>
          <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-forest">
            Contact
          </p>
          <h2 className="reveal mt-3 font-display text-5xl uppercase leading-[1.0] text-charcoal md:text-7xl">
            Get your free estimate.
          </h2>
          <p className="reveal mt-5 max-w-md text-charcoal/65">
            Call, text, or send the form — we usually reply within the hour during business hours.
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="reveal mt-8 inline-block font-display text-4xl text-charcoal underline decoration-forest decoration-4 underline-offset-8 transition hover:text-forest md:text-5xl"
          >
            {BUSINESS.phone}
          </a>
          <dl className="reveal mt-8 space-y-4 text-charcoal/75">
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-[0.25em] text-charcoal/45">Address</dt>
              <dd className="mt-1">{BUSINESS.address}</dd>
            </div>
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-[0.25em] text-charcoal/45">Hours</dt>
              <dd className="mt-1">
                {BUSINESS.hours}
                <br />
                <span className="font-semibold text-forest">{BUSINESS.emergency}</span>
              </dd>
            </div>
          </dl>
        </div>
        <div className="reveal rounded-3xl bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,0.12)] md:p-9">
          {sent ? (
            <div className="flex h-full min-h-[380px] flex-col items-center justify-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-forest text-3xl text-white">
                ✓
              </div>
              <h3 className="mt-5 font-display text-3xl uppercase text-charcoal">Thanks!</h3>
              <p className="mt-2 max-w-xs text-charcoal/70">
                We'll be in touch shortly to schedule your free estimate.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-4"
            >
              <h3 className="font-display text-2xl uppercase text-charcoal">Request a quote</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <input required placeholder="Full name" className="w-full rounded-xl border border-charcoal/15 bg-cream px-4 py-3.5 text-charcoal placeholder:text-charcoal/40 focus:border-forest focus:outline-none" />
                <input required type="tel" placeholder="Phone" className="w-full rounded-xl border border-charcoal/15 bg-cream px-4 py-3.5 text-charcoal placeholder:text-charcoal/40 focus:border-forest focus:outline-none" />
              </div>
              <input required placeholder="Property address" className="w-full rounded-xl border border-charcoal/15 bg-cream px-4 py-3.5 text-charcoal placeholder:text-charcoal/40 focus:border-forest focus:outline-none" />
              <select required defaultValue="" className="w-full rounded-xl border border-charcoal/15 bg-cream px-4 py-3.5 text-charcoal/70 focus:border-forest focus:outline-none">
                <option value="" disabled>
                  Service needed
                </option>
                {SERVICES.map((s) => (
                  <option key={s.title} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Other">Something else</option>
              </select>
              <textarea rows={4} placeholder="Tell us about the job (optional)" className="w-full rounded-xl border border-charcoal/15 bg-cream px-4 py-3.5 text-charcoal placeholder:text-charcoal/40 focus:border-forest focus:outline-none" />
              <button
                type="submit"
                className="w-full rounded-full bg-forest py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-forest-deep"
              >
                Send request
              </button>
              <p className="text-center text-xs text-charcoal/50">
                Prefer to talk? <a href={BUSINESS.phoneHref} className="font-bold text-forest">Call {BUSINESS.phone}</a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- footer ---------- */
export function Footer() {
  return (
    <footer className="bg-forest-deep py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-12">
        <div className="flex items-center gap-3">
          <svg viewBox="0 0 64 64" className="h-9 w-9">
            <rect width="64" height="64" rx="14" fill="#FAF6F0" />
            <g fill="none" stroke="#1B4332" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M32 50 V30" />
              <path d="M32 38 L20 26" />
              <path d="M32 34 L44 22" />
              <path d="M32 30 L24 20" />
              <path d="M32 26 L40 16" />
            </g>
            <circle cx="32" cy="14" r="4" fill="#1B4332" />
          </svg>
          <span className="font-display text-lg uppercase text-cream">Ironwood Tree Service</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-xs font-semibold uppercase tracking-wider text-cream/70 hover:text-cream">
              {n.label}
            </a>
          ))}
        </nav>
        <p className="text-xs text-cream/50">
          © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ---------- mobile call bar ---------- */
export function MobileCallBar() {
  return (
    <a
      href={BUSINESS.phoneHref}
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-2 bg-forest py-4 text-sm font-bold uppercase tracking-widest text-white shadow-[0_-4px_20px_rgba(0,0,0,0.3)] md:hidden"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Call now — free estimate
    </a>
  );
}
