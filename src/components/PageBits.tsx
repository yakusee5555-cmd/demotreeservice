import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { BUSINESS } from "../data";

/* ---------- route effects: title, meta, reveal observer, scroll ---------- */
export function RouteFX({ title, description }: { title: string; description?: string }) {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title = title;
    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", description);
    }
    const els = document.querySelectorAll(".reveal:not(.visible)");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    els.forEach((n) => io.observe(n));
    if (hash) {
      const t = window.setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 60);
      return () => {
        window.clearTimeout(t);
        io.disconnect();
      };
    }
    window.scrollTo(0, 0);
    return () => io.disconnect();
  }, [pathname, hash, title, description]);
  return null;
}

/* ---------- sub-page hero: compact on mobile per user rule ---------- */
export function PageHero({
  eyebrow,
  title,
  sub,
  img,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  img?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink pb-10 pt-32 md:pb-20 md:pt-44">
      {img && (
        <>
          <img
            src={img}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
        </>
      )}
      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-cream/50">
          {eyebrow}
        </p>
        <h1 className="reveal mt-3 max-w-3xl font-display text-3xl uppercase leading-[1.05] text-cream md:text-7xl md:leading-[1.0]">
          {title}
        </h1>
        {sub && (
          <p className="reveal mt-4 max-w-xl text-base leading-relaxed text-cream/65 md:text-lg">
            {sub}
          </p>
        )}
      </div>
    </section>
  );
}

/* ---------- CTA band (reuses pricing-page pattern) ---------- */
export function CtaBand({
  title = "Get your free estimate.",
  sub = "Call, text, or send the form — we usually reply within the hour during business hours.",
}: {
  title?: string;
  sub?: string;
}) {
  return (
    <section className="bg-cream py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="reveal flex flex-col items-start justify-between gap-6 rounded-3xl bg-ink p-8 md:flex-row md:items-center md:p-12">
          <div>
            <h2 className="font-display text-2xl uppercase leading-tight text-cream md:text-4xl">
              {title}
            </h2>
            <p className="mt-2 max-w-xl text-base text-cream/60">{sub}</p>
            <a
              href={BUSINESS.phoneHref}
              className="mt-4 inline-block font-display text-2xl text-cream underline decoration-forest decoration-4 underline-offset-8 hover:text-white md:text-3xl"
            >
              {BUSINESS.phone}
            </a>
          </div>
          <Link
            to="/contact"
            className="flex min-h-[52px] shrink-0 items-center justify-center rounded-full bg-cream px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-white"
          >
            Free estimate
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ accordion ---------- */
export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="reveal divide-y divide-charcoal/10 rounded-3xl border border-charcoal/10 bg-white">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex min-h-[64px] w-full items-center justify-between gap-4 px-6 py-4 text-left"
            >
              <span className="font-display text-lg uppercase tracking-wide text-charcoal md:text-xl">
                {f.q}
              </span>
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest text-xl text-cream transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-base leading-relaxed text-charcoal/70">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
