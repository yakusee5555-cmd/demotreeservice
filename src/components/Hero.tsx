import { useEffect, useRef } from "react";
import { BUSINESS } from "../data";

/* Section 1 — Zillow-style hero: full-bleed image + giant overlaid wordmark */
export default function Hero() {
  const imgRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (imgRef.current) imgRef.current.style.transform = `scale(1.08) translateY(${y * 0.18}px)`;
        if (textRef.current) textRef.current.style.transform = `translateY(${y * 0.32}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-ink">
      <img
        ref={imgRef}
        src="/img/hero.jpg"
        alt="Tree-lined street with mature trees"
        className="hero-in-img absolute inset-0 h-full w-full object-cover"
        style={{ transform: "scale(1.08)" }}
        draggable={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />

      {/* top-right labels like the video */}
      <div className="rise-in rise-in-3 absolute right-6 top-24 z-20 hidden text-right text-[11px] font-semibold uppercase tracking-[0.25em] text-cream/80 md:right-12 md:top-28 md:block">
        <p>Tree Care</p>
        <p className="mt-1">Removal</p>
        <p className="mt-1">Pruning</p>
      </div>

      {/* giant wordmark */}
      <div
        ref={textRef}
        className="absolute inset-x-0 bottom-[16%] z-10 px-4 text-center will-change-transform"
      >
        <h1 className="hero-in font-display text-[17.5vw] leading-none text-cream drop-shadow-[0_6px_30px_rgba(0,0,0,0.45)]">
          IRONWOOD
        </h1>
        <p className="rise-in rise-in-2 mx-auto mt-2 max-w-xl text-sm font-medium uppercase tracking-[0.35em] text-cream/90 md:text-base">
          Tree Service
        </p>
      </div>

      {/* bottom info row */}
      <div className="rise-in rise-in-3 absolute inset-x-0 bottom-0 z-20">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 pb-8 md:px-12">
          <p className="max-w-md text-sm leading-relaxed text-cream/85">
            Safe removals, precision pruning & 24/7 storm response across Essex County, NJ.
          </p>
          <div className="flex gap-3">
            <a
              href="#contact"
              className="rounded-full bg-cream px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-charcoal transition hover:bg-white"
            >
              Free estimate
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="rounded-full border-2 border-cream/70 px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-cream transition hover:bg-cream hover:text-charcoal"
            >
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-24 left-1/2 z-20 hidden -translate-x-1/2 md:block">
        <div className="flex h-12 w-7 items-start justify-center rounded-full border-2 border-cream/50 p-1.5">
          <div className="h-2 w-1 animate-bounce rounded-full bg-cream/80" />
        </div>
      </div>
    </section>
  );
}
