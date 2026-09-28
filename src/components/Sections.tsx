import { useEffect, useRef, useState } from "react";
import { BUSINESS, JOBS, NAV, REVIEWS, SERVICES, TOWNS } from "../data";
import BeforeAfter from "./BeforeAfter";

/* ---------- scroll reveal ---------- */
export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    el.querySelectorAll(".reveal").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`reveal mb-4 text-[11px] font-bold uppercase tracking-[0.3em] ${
        dark ? "text-cream/70" : "text-forest"
      }`}
    >
      {children}
    </p>
  );
}

function H2({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <h2
      className={`reveal font-display text-4xl uppercase leading-[1.02] md:text-6xl ${
        dark ? "text-cream" : "text-charcoal"
      }`}
    >
      {children}
    </h2>
  );
}

/* ---------- header ---------- */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-forest-deep/95 shadow-lg backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <a href="#top" className="flex items-center gap-3">
          <svg viewBox="0 0 64 64" className="h-10 w-10">
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
          <span className="font-display text-xl uppercase tracking-wide text-cream">
            Ironwood
            <span className="block text-[10px] font-body font-semibold tracking-[0.3em] text-cream/70">
              Tree Service
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-semibold uppercase tracking-wider text-cream/85 transition hover:text-cream"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={BUSINESS.phoneHref}
            className="hidden rounded-full bg-cream px-6 py-3 text-sm font-bold uppercase tracking-wider text-forest-deep transition hover:bg-white md:block"
          >
            Call {BUSINESS.phone}
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-cream/40 lg:hidden"
          >
            <span className={`h-[2px] w-5 bg-cream transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-[2px] w-5 bg-cream transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-[2px] w-5 bg-cream transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-cream/15 bg-forest-deep/98 px-6 py-4 backdrop-blur lg:hidden">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block border-b border-cream/10 py-3 text-sm font-semibold uppercase tracking-wider text-cream/90"
            >
              {n.label}
            </a>
          ))}
          <a
            href={BUSINESS.phoneHref}
            className="mt-4 block rounded-full bg-cream px-6 py-3 text-center text-sm font-bold uppercase tracking-wider text-forest-deep"
          >
            Call {BUSINESS.phone}
          </a>
        </nav>
      )}
    </header>
  );
}

/* ---------- trust bar ---------- */
const TRUST = ["Licensed & Insured", "Free Estimates", "24/7 Emergency", `${BUSINESS.rating}★ ${BUSINESS.reviewCount} Reviews`];

export function TrustBar() {
  return (
    <div className="bg-forest-deep py-5">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6">
        {TRUST.map((t) => (
          <span key={t} className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-cream/90">
            <svg viewBox="0 0 20 20" className="h-4 w-4 fill-none stroke-amber-300" strokeWidth="2.5">
              <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- services ---------- */
export function Services() {
  return (
    <section id="services" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <Eyebrow>What we do</Eyebrow>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <H2>
            Full-service tree care,
            <br />
            done right.
          </H2>
          <p className="reveal max-w-md text-charcoal/70">
            From routine pruning to hazardous removals, every job is done by trained climbers with
            professional rigging — and we leave your property cleaner than we found it.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              className="reveal group overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl uppercase text-charcoal">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal/70">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- work (before/after) ---------- */
export function Work() {
  return (
    <section id="work" className="bg-charcoal py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <Eyebrow dark>Recent work</Eyebrow>
        <H2 dark>
          Drag to see
          <br />
          the difference.
        </H2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {JOBS.map((j) => (
            <div key={j.title} className="reveal">
              <BeforeAfter job={j} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- why us ---------- */
const STATS = [
  { title: "Licensed & Insured", desc: "Fully covered crews on every job, every time." },
  { title: "Same-Day Estimates", desc: "Free on-site quotes, usually within hours." },
  { title: "Local Crew", desc: "We live here. Our reputation is on every street." },
  { title: "Cleanup Included", desc: "Chips hauled, lawn raked, nothing left behind." },
];

export function WhyUs() {
  return (
    <section id="why-us" className="bg-cream py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-12 lg:grid-cols-2">
        <div className="reveal relative">
          <img
            src="/img/chainsaw.jpg"
            alt="Ironwood crew at work"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-xl md:aspect-[4/4.4]"
          />
          <div className="absolute -bottom-6 -right-4 rounded-2xl bg-forest px-8 py-6 text-center shadow-xl md:-right-8">
            <p className="font-display text-5xl text-cream">15+</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-cream/80">
              Years in the trees
            </p>
          </div>
        </div>
        <div>
          <Eyebrow>Why Ironwood</Eyebrow>
          <H2>
            Big-company gear.
            <br />
            Neighborly care.
          </H2>
          <p className="reveal mt-5 max-w-lg text-charcoal/70">
            Anyone can cut a tree. Few can do it without wrecking your yard — and fewer still will
            answer the phone at 2am when a storm drops one on your driveway. That's the difference.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {STATS.map((s) => (
              <div key={s.title} className="reveal rounded-xl bg-white p-5 shadow-sm">
                <h3 className="font-display text-lg uppercase text-forest">{s.title}</h3>
                <p className="mt-1 text-sm text-charcoal/65">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- reviews ---------- */
export function Reviews() {
  return (
    <section id="reviews" className="bg-forest py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <Eyebrow dark>Reviews</Eyebrow>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <H2 dark>
            Neighbors
            <br />
            vouch for us.
          </H2>
          <div className="reveal flex items-center gap-3">
            <span className="font-display text-5xl text-cream">{BUSINESS.rating}</span>
            <span className="text-sm text-cream/75">
              ★★★★★
              <br />
              {BUSINESS.reviewCount} Google reviews
            </span>
          </div>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="reveal flex flex-col rounded-2xl bg-cream p-6 shadow-md">
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
      </div>
    </section>
  );
}

/* ---------- service areas ---------- */
export function Areas() {
  return (
    <section className="bg-cream py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <Eyebrow>Service areas</Eyebrow>
        <H2>
          Proudly serving
          <br />
          Essex County & beyond.
        </H2>
        <div className="reveal mt-10 flex flex-wrap gap-3">
          {TOWNS.map((t) => (
            <span
              key={t}
              className="rounded-full border border-forest/25 bg-white px-5 py-2.5 text-sm font-semibold text-forest transition hover:bg-forest hover:text-white"
            >
              {t}
            </span>
          ))}
        </div>
        <p className="reveal mt-6 text-charcoal/60">
          Don't see your town? Call us — if you're nearby, we'll make it work.
        </p>
      </div>
    </section>
  );
}

/* ---------- contact ---------- */
export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative overflow-hidden bg-charcoal py-20 md:py-28">
      <p className="text-stroke font-display pointer-events-none absolute -top-4 left-0 select-none whitespace-nowrap text-[18vw] uppercase opacity-40">
        Get a quote
      </p>
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 md:px-12 lg:grid-cols-2">
        <div>
          <Eyebrow dark>Contact</Eyebrow>
          <H2 dark>
            Get your free
            <br />
            estimate today.
          </H2>
          <p className="reveal mt-5 max-w-md text-cream/75">
            Call, text, or send the form — we usually reply within the hour during business hours.
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="reveal mt-8 inline-block font-display text-4xl text-cream underline decoration-forest decoration-4 underline-offset-8 transition hover:text-white md:text-5xl"
          >
            {BUSINESS.phone}
          </a>
          <dl className="reveal mt-8 space-y-4 text-cream/80">
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-[0.25em] text-cream/50">Address</dt>
              <dd className="mt-1">{BUSINESS.address}</dd>
            </div>
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-[0.25em] text-cream/50">Hours</dt>
              <dd className="mt-1">
                {BUSINESS.hours}
                <br />
                <span className="text-amber-300">{BUSINESS.emergency}</span>
              </dd>
            </div>
          </dl>
        </div>
        <div className="reveal rounded-2xl bg-cream p-7 shadow-2xl md:p-9">
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
                <input required placeholder="Full name" className="w-full rounded-lg border border-charcoal/15 bg-white px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:border-forest focus:outline-none" />
                <input required type="tel" placeholder="Phone" className="w-full rounded-lg border border-charcoal/15 bg-white px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:border-forest focus:outline-none" />
              </div>
              <input required placeholder="Property address" className="w-full rounded-lg border border-charcoal/15 bg-white px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:border-forest focus:outline-none" />
              <select required defaultValue="" className="w-full rounded-lg border border-charcoal/15 bg-white px-4 py-3 text-charcoal/70 focus:border-forest focus:outline-none">
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
              <textarea rows={4} placeholder="Tell us about the job (optional)" className="w-full rounded-lg border border-charcoal/15 bg-white px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:border-forest focus:outline-none" />
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
