import { Link } from "react-router-dom";
import { BUSINESS, TOWNS } from "../data";
import { CtaBand, PageHero, RouteFX } from "../components/PageBits";

export default function ServiceAreas() {
  return (
    <>
      <RouteFX
        title="Service Areas | Ironwood Tree Service — Essex County NJ"
        description="Ironwood Tree Service serves Newark, Montclair, Bloomfield, Nutley and towns across Essex County, NJ. Free estimates in our service area."
      />
      <PageHero
        eyebrow="Service areas"
        title={
          <>
            Local. Actually
            <br />
            local.
          </>
        }
        sub="We're based in Newark and work across Essex County every day. If you're inside the map below, estimates are free and response is fast."
        img="/img/forest.jpg"
      />

      <section className="bg-cream py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="reveal grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {TOWNS.map((t) => (
              <div
                key={t}
                className="flex min-h-[64px] items-center justify-center rounded-2xl border border-charcoal/10 bg-white px-4 py-4 text-center transition hover:border-forest hover:bg-forest hover:text-cream"
              >
                <span className="font-display text-lg uppercase tracking-wide md:text-xl">{t}</span>
              </div>
            ))}
          </div>

          <div className="reveal mt-10 grid gap-5 md:mt-14 lg:grid-cols-2">
            <div className="rounded-3xl bg-ink p-8 md:p-10">
              <h2 className="font-display text-2xl uppercase text-cream md:text-3xl">
                Inside the area?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-cream/65">
                Free on-site estimates, usually same-day or next-day. Emergency storm calls
                get priority dispatch anywhere in Essex County, 24/7.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex min-h-[52px] items-center justify-center rounded-full bg-cream px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-ink transition hover:bg-white"
              >
                Get a free estimate
              </Link>
            </div>
            <div className="rounded-3xl border border-charcoal/10 bg-white p-8 md:p-10">
              <h2 className="font-display text-2xl uppercase text-charcoal md:text-3xl">
                Just outside?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-charcoal/65">
                We regularly take larger jobs in neighboring Union, Hudson, and Morris
                counties. Call {BUSINESS.phone} — if we can't help, we'll point you to
                someone who can.
              </p>
              <a
                href={BUSINESS.phoneHref}
                className="mt-6 inline-flex min-h-[52px] items-center justify-center rounded-full bg-forest px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-forest-deep"
              >
                Call {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Free estimates in our service area."
        sub="Tell us where the tree is and what it's doing. We'll take it from there."
      />
    </>
  );
}
