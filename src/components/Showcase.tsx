import { useEffect, useRef, useState } from "react";
import { FLOAT_CARDS, GLASS_CARDS, LIST_ROWS, STACK_WORDS, WORK_SHOTS } from "../data";

/* ---------- Section 2: stacked headline + floating cards (like "Homes. Loans. Agents. Tours.") ---------- */
export function Stacked() {
  return (
    <section id="services" className="relative overflow-hidden bg-cream py-12 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:px-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="reveal mb-3 inline-block rounded-full border border-charcoal/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-charcoal/70">
            What we do
          </p>
          <h2 className="font-display leading-[0.98]">
            {STACK_WORDS.map((w, i) => (
              <span key={w} className="reveal block text-[clamp(1.5rem,7.5vw,5.2rem)] text-charcoal" style={{ transitionDelay: `${i * 90}ms` }}>
                {w}
              </span>
            ))}
          </h2>
          <p className="reveal mt-6 max-w-md text-base leading-relaxed text-charcoal/65">
            Every job done by trained climbers with professional rigging — and we leave your
            property cleaner than we found it.
          </p>
        </div>

        {/* floating tilted cards */}
        <div className="relative flex flex-col items-center gap-6 md:h-[560px] md:flex-row md:items-start md:justify-center md:gap-0">
          {FLOAT_CARDS.map((c, i) => (
            <article
              key={c.title}
              className={`reveal w-64 shrink-0 overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition-transform duration-500 hover:rotate-0 hover:scale-[1.04] ${c.rotate} ${c.offset} ${
                i === 0 ? "floaty" : i === 1 ? "floaty-2 md:-ml-8 md:mt-24" : "floaty-3 md:-ml-8"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl uppercase text-charcoal">{c.title}</h3>
                <p className="mt-1 text-[13px] text-charcoal/60">{c.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Section 3: dark numbered list with cursor-following image preview ---------- */
function ServiceRow({ row, i }: { row: (typeof LIST_ROWS)[number]; i: number }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href="#contact"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="dark-row reveal group flex items-center gap-5 border-t border-cream/15 py-6 md:gap-10 md:py-8"
      style={{ transitionDelay: `${i * 60}ms` }}
    >
      <span className="font-display text-sm text-cream/40 md:text-base">
        {String(i + 1).padStart(2, "0")}
      </span>
      <img
        src={row.img}
        alt=""
        loading="lazy"
        className="h-14 w-14 rounded-xl object-cover md:hidden"
      />
      <div className="flex-1">
        <h3 className="row-title font-display text-2xl uppercase text-cream/90 md:text-5xl">
          {row.title}
        </h3>
        <p className="mt-1 text-base text-cream/45 md:text-sm">{row.desc}</p>
      </div>
      {/* inline preview — opens in the same row, smaller */}
      <div
        className={`hidden h-28 w-44 shrink-0 overflow-hidden rounded-xl transition-all duration-500 md:block ${
          hover ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        <img src={row.img} alt="" loading="lazy" className="h-full w-full object-cover" />
      </div>
      <span className="hidden shrink-0 text-xs font-bold uppercase tracking-widest text-cream/40 transition group-hover:text-cream md:block">
        Get quote →
      </span>
    </a>
  );
}

export function DarkList() {
  return (
    <section id="why-us" className="relative bg-ink py-12 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 md:mb-12">
          <div>
            <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-cream/50">
              Our services
            </p>
            <h2 className="reveal mt-3 font-display text-2xl uppercase leading-[1.05] text-cream md:text-6xl md:leading-[1.02]">
              What we do best.
            </h2>
          </div>
          <p className="reveal hidden text-sm text-cream/50 md:block">Hover a service to preview</p>
        </div>

        <div>
          {LIST_ROWS.map((row, i) => (
            <ServiceRow key={row.title} row={row} i={i} />
          ))}
          <div className="border-t border-cream/15" />
        </div>
      </div>
    </section>
  );
}

/* ---------- Section 4: full-bleed image + floating glass cards (like the sunset cabin) ---------- */
export function FullBleed() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip parallax on mobile + reduced-motion: bg stays static, content fully visible
    if (
      window.matchMedia("(max-width: 767px)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!bgRef.current) return;
        const r = bgRef.current.getBoundingClientRect();
        const progress = (window.innerHeight - r.top) / (window.innerHeight + r.height);
        bgRef.current.style.transform = `translateY(${(progress - 0.5) * -60}px) scale(1.12)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <div ref={bgRef} className="absolute inset-0 will-change-transform" style={{ transform: "scale(1.12)" }}>
        <img
          src="/img/fullbleed.jpg"
          alt="Sunlight streaming through tall trees"
          loading="lazy"
          className="h-full w-full object-cover"
          draggable={false}
        />
      </div>
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-12 md:px-12 md:py-36">
        <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-cream/85">
          Why Ironwood
        </p>
        <h2 className="reveal mt-3 max-w-2xl font-display text-2xl uppercase leading-[1.05] text-cream md:text-6xl md:leading-[1.02]">
          Big-company gear. Neighborly care.
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-3 md:mt-16 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {GLASS_CARDS.map((c, i) => (
            <div
              key={c.title}
              className={`glass reveal rounded-2xl p-5 md:p-6 ${
                i % 2 === 0 ? "floaty" : "floaty-2"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <h3 className="font-display text-base uppercase text-cream md:text-lg">{c.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-cream/80 md:text-[13px]">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Section 6: quote & pricing (dark, video-style) ---------- */
const TIERS = [
  {
    name: "Essential Trim",
    price: "$299",
    prefix: "from",
    features: [
      "Crown pruning & shaping",
      "Deadwood removal",
      "Hedge & shrub touch-ups",
      "All debris hauled away",
    ],
    popular: false,
  },
  {
    name: "Signature Removal",
    price: "$899",
    prefix: "from",
    features: [
      "Safe takedowns in tight spaces",
      "Crane-assisted removals",
      "Stump grinding add-on",
      "Full property cleanup",
      "Wood chips or firewood left",
    ],
    popular: true,
  },
  {
    name: "Storm Response",
    price: "24/7",
    prefix: "emergency",
    features: [
      "Emergency dispatch, day or night",
      "Fallen tree & limb removal",
      "Custom quote on arrival",
      "Insurance paperwork help",
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-ink py-12 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-cream/50">
          Pricing
        </p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
          <h2 className="reveal font-display text-2xl uppercase leading-[1.05] text-cream md:text-6xl md:leading-[1.02]">
            Honest pricing.
            <br />
            No surprises.
          </h2>
          <p className="reveal max-w-md text-base leading-relaxed text-cream/55">
            Straightforward packages for the jobs we do every day. Final quote confirmed
            on-site — always free, never pushy.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-3">
          {TIERS.map((t, i) => (
            <article
              key={t.name}
              className={`reveal relative flex flex-col rounded-2xl p-7 md:p-8 transition-transform duration-500 hover:-translate-y-2 ${
                t.popular
                  ? "bg-cream text-charcoal shadow-[0_24px_70px_rgba(0,0,0,0.45)]"
                  : "border border-cream/15 bg-white/[0.03] text-cream"
              }`}
              style={{ transitionDelay: `${i * 110}ms` }}
            >
              {t.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-forest px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-cream">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-xl uppercase tracking-wide md:text-2xl">
                {t.name}
              </h3>
              <div className="mt-5 flex items-baseline gap-2">
                <span
                  className={`text-xs font-bold uppercase tracking-[0.2em] ${
                    t.popular ? "text-charcoal/55" : "text-cream/45"
                  }`}
                >
                  {t.prefix}
                </span>
                <span className="font-display text-4xl md:text-6xl">{t.price}</span>
              </div>
              <ul
                className={`mt-6 flex-1 space-y-3 border-t pt-6 text-base ${
                  t.popular ? "border-charcoal/15" : "border-cream/15"
                }`}
              >
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span
                      className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                        t.popular ? "bg-forest" : "bg-cream/60"
                      }`}
                    />
                    <span className={t.popular ? "text-charcoal/80" : "text-cream/70"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 rounded-full py-4 text-center text-sm font-bold uppercase tracking-[0.2em] transition-colors ${
                  t.popular
                    ? "bg-ink text-cream hover:bg-forest-deep"
                    : "border border-cream/30 text-cream hover:bg-cream hover:text-ink"
                }`}
              >
                Get a quote
              </a>
            </article>
          ))}
        </div>

        {/* slim quote band */}
        <div
          className="reveal mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-cream/15 bg-white/[0.03] p-6 md:flex-row md:items-center md:p-8"
          style={{ transitionDelay: "200ms" }}
        >
          <div>
            <h3 className="font-display text-2xl uppercase text-cream md:text-3xl">
              Need an exact number?
            </h3>
            <p className="mt-1.5 max-w-xl text-base text-cream/55">
              Every tree and every property is different. Send us a few photos and we'll
              reply with a firm, free estimate — usually same day.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 rounded-full bg-cream px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-white"
          >
            Free estimate
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Section 5: recent work — REAL job photos ---------- */
export function Work() {
  return (
    <section id="work" className="bg-cream py-12 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-forest">
          Recent work
        </p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
          <h2 className="reveal font-display text-2xl uppercase leading-[1.05] text-charcoal md:text-6xl md:leading-[1.02]">
            Real jobs.
            <br />
            Real photos.
          </h2>
          <p className="reveal max-w-md text-base text-charcoal/65">
            No stock "afters" — these are actual Ironwood crews on actual jobs around Essex County.
          </p>
        </div>

        <div className="mt-8 columns-1 gap-5 sm:columns-2 md:mt-12 md:columns-3 [&>*]:mb-5">
          {WORK_SHOTS.map((s, i) => (
            <figure
              key={s.img + i}
              className="reveal group relative break-inside-avoid overflow-hidden rounded-2xl shadow-md"
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            >
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                className="w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 pt-10">
                <p className="font-display text-base uppercase leading-tight text-cream md:text-lg">
                  {s.title}
                </p>
                <p className="mt-0.5 text-xs text-cream/75">{s.location}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
