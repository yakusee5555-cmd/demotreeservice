import { useCallback, useEffect, useRef, useState } from "react";
import { BUSINESS, SLIDES } from "../data";

const DURATION = 6500;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [cycle, setCycle] = useState(0); // restarts animations on change
  const timer = useRef<number | null>(null);

  const go = useCallback((i: number) => {
    setIndex((i + SLIDES.length) % SLIDES.length);
    setCycle((c) => c + 1);
  }, []);

  useEffect(() => {
    timer.current = window.setTimeout(() => go(index + 1), DURATION);
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [index, cycle, go]);

  const slide = SLIDES[index];

  return (
    <section className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-charcoal">
      {/* Slides */}
      {SLIDES.map((s, i) => (
        <div
          key={s.img}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          aria-hidden={i !== index}
        >
          <img
            src={s.img}
            alt=""
            className={`h-full w-full object-cover ${i === index ? "kenburns" : ""}`}
            draggable={false}
          />
        </div>
      ))}

      {/* Cinematic gradients */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-black/25 to-black/40" />
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/45 via-transparent to-transparent" />

      {/* Slide counter */}
      <div className="absolute left-6 top-24 z-30 md:left-12 md:top-28">
        <div className="flex items-baseline gap-2 text-cream">
          <span className="font-display text-3xl md:text-4xl">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-sm text-cream/60">/ {String(SLIDES.length).padStart(2, "0")}</span>
        </div>
        <div className="mt-2 h-[2px] w-16 overflow-hidden rounded bg-cream/25">
          <div
            key={cycle}
            className="h-full origin-left bg-cream"
            style={{ animation: `hero-progress ${DURATION}ms linear forwards` }}
          />
        </div>
        <style>{`@keyframes hero-progress { from { transform: scaleX(0); } to { transform: scaleX(1); } }`}</style>
      </div>

      {/* Copy */}
      <div className="absolute inset-x-0 bottom-0 z-30 pb-24 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12" key={cycle}>
          <p className="rise-in rise-in-1 mb-4 inline-block border border-cream/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-cream">
            {slide.kicker}
          </p>
          <h1 className="rise-in rise-in-2 font-display text-[13vw] leading-[0.95] text-cream md:text-[7.5rem]">
            {slide.headline}
          </h1>
          <p className="rise-in rise-in-3 mt-5 max-w-xl text-base text-cream/85 md:text-lg">
            {slide.sub}
          </p>
          <div className="rise-in rise-in-3 mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-forest px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-forest-deep"
            >
              Get a free estimate
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="rounded-full border-2 border-cream/70 px-8 py-4 text-sm font-bold uppercase tracking-wider text-cream transition hover:bg-cream hover:text-charcoal"
            >
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <div className="absolute bottom-24 right-6 z-30 hidden gap-3 md:bottom-28 md:right-12 md:flex">
        <button
          onClick={() => go(index - 1)}
          aria-label="Previous slide"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/40 text-cream transition hover:bg-cream hover:text-charcoal"
        >
          ←
        </button>
        <button
          onClick={() => go(index + 1)}
          aria-label="Next slide"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/40 text-cream transition hover:bg-cream hover:text-charcoal"
        >
          →
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {SLIDES.map((s, i) => (
          <button
            key={s.img}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-8 bg-cream" : "w-1.5 bg-cream/40 hover:bg-cream/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
