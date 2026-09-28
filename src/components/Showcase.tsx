import { useEffect, useRef, useState } from "react";
import { FLOAT_CARDS, GLASS_CARDS, LIST_ROWS, STACK_WORDS, WORK_SHOTS } from "../data";

/* ---------- Section 2: stacked headline + floating cards (like "Homes. Loans. Agents. Tours.") ---------- */
export function Stacked() {
  return (
    <section id="services" className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:px-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="reveal mb-3 inline-block rounded-full border border-charcoal/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-charcoal/70">
            What we do
          </p>
          <h2 className="font-display leading-[0.98]">
            {STACK_WORDS.map((w, i) => (
              <span key={w} className="reveal block text-[13vw] text-charcoal md:text-[5.2rem]" style={{ transitionDelay: `${i * 90}ms` }}>
                {w}
              </span>
            ))}
          </h2>
          <p className="reveal mt-6 max-w-md text-[15px] leading-relaxed text-charcoal/65">
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
export function DarkList() {
  const [active, setActive] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (previewRef.current) {
        previewRef.current.style.transform = `translate(${e.clientX + 24}px, ${e.clientY - 110}px)`;
      }
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section id="why-us" ref={wrapRef} className="relative bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-cream/50">
              Our services
            </p>
            <h2 className="reveal mt-3 font-display text-4xl uppercase text-cream md:text-6xl">
              What we do best.
            </h2>
          </div>
          <p className="reveal text-sm text-cream/50">Hover a service to preview</p>
        </div>

        <div onMouseLeave={() => setActive(null)}>
          {LIST_ROWS.map((row, i) => (
            <a
              key={row.title}
              href="#contact"
              onMouseEnter={() => setActive(i)}
              className="dark-row reveal group flex items-center gap-5 border-t border-cream/15 py-6 md:gap-10 md:py-8"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="font-display text-sm text-cream/40 md:text-base">
                {String(i + 1).padStart(2, "0")}
              </span>
              {/* mobile thumbnail */}
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
                <p className="mt-1 text-sm text-cream/45">{row.desc}</p>
              </div>
              <span className="hidden text-xs font-bold uppercase tracking-widest text-cream/40 transition group-hover:text-cream md:block">
                Get quote →
              </span>
            </a>
          ))}
          <div className="border-t border-cream/15" />
        </div>
      </div>

      {/* floating cursor preview (desktop) */}
      <div
        ref={previewRef}
        className={`pointer-events-none fixed left-0 top-0 z-40 hidden transition-opacity duration-300 md:block ${
          active !== null ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={active !== null ? LIST_ROWS[active].img : LIST_ROWS[0].img}
          alt=""
          className="h-56 w-72 rounded-2xl object-cover shadow-[0_24px_70px_rgba(0,0,0,0.5)]"
        />
      </div>
    </section>
  );
}

/* ---------- Section 4: full-bleed image + floating glass cards (like the sunset cabin) ---------- */
export function FullBleed() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
    <section className="relative h-[110vh] min-h-[720px] w-full overflow-hidden">
      <div ref={bgRef} className="absolute inset-0 will-change-transform" style={{ transform: "scale(1.12)" }}>
        <img
          src="/img/fullbleed.jpg"
          alt="Sunlight streaming through tall trees"
          loading="lazy"
          className="h-full w-full object-cover"
          draggable={false}
        />
      </div>
      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute left-6 top-16 z-10 md:left-12 md:top-24">
        <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-cream/85">
          Why Ironwood
        </p>
        <h2 className="reveal mt-3 max-w-md font-display text-4xl uppercase leading-[1.02] text-cream md:text-6xl">
          Big-company gear. Neighborly care.
        </h2>
      </div>

      {GLASS_CARDS.map((c, i) => (
        <div
          key={c.title}
          className={`glass reveal absolute z-10 hidden w-56 rounded-2xl p-5 md:block ${c.pos} ${
            i % 2 === 0 ? "floaty" : "floaty-2"
          }`}
          style={{ transitionDelay: `${i * 120}ms` }}
        >
          <h3 className="font-display text-lg uppercase text-cream">{c.title}</h3>
          <p className="mt-1 text-[13px] leading-relaxed text-cream/80">{c.desc}</p>
        </div>
      ))}

      {/* mobile: stacked cards at bottom */}
      <div className="absolute inset-x-0 bottom-0 z-10 grid grid-cols-2 gap-3 p-4 md:hidden">
        {GLASS_CARDS.map((c) => (
          <div key={c.title} className="glass rounded-2xl p-4">
            <h3 className="font-display text-base uppercase text-cream">{c.title}</h3>
            <p className="mt-1 text-xs text-cream/80">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Section 5: recent work — REAL job photos ---------- */
export function Work() {
  return (
    <section id="work" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-forest">
          Recent work
        </p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
          <h2 className="reveal font-display text-4xl uppercase leading-[1.02] text-charcoal md:text-6xl">
            Real jobs.
            <br />
            Real photos.
          </h2>
          <p className="reveal max-w-md text-[15px] text-charcoal/65">
            No stock "afters" — these are actual Ironwood crews on actual jobs around Essex County.
          </p>
        </div>

        <div className="mt-12 columns-2 gap-5 md:columns-3 [&>*]:mb-5">
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
