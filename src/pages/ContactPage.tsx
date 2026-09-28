import { BUSINESS, TOWNS } from "../data";
import { Contact } from "../components/Sections";
import { PageHero, RouteFX } from "../components/PageBits";

export default function ContactPage() {
  return (
    <>
      <RouteFX
        title="Contact Ironwood Tree Service | Free Estimates in Essex County NJ"
        description={`Contact Ironwood Tree Service for a free tree estimate. Call ${BUSINESS.phone}, ${BUSINESS.hours}. Serving ${TOWNS.slice(0, 5).join(", ")} and more.`}
      />
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's talk
            <br />
            trees.
          </>
        }
        sub="Call, text, or send the form. We usually reply within the hour during business hours — and the estimate is always free."
        img="/img/chainsaw.jpg"
      />

      {/* reuse the full contact section (form + phone + address + hours) */}
      <Contact />

      {/* styled address card instead of an external map embed */}
      <section className="bg-cream pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="reveal overflow-hidden rounded-3xl bg-ink">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-cream/50">
                  Find us
                </p>
                <h2 className="mt-3 font-display text-2xl uppercase text-cream md:text-4xl">
                  {BUSINESS.address}
                </h2>
                <dl className="mt-6 space-y-4 text-cream/70">
                  <div>
                    <dt className="text-[11px] font-bold uppercase tracking-[0.25em] text-cream/40">
                      Hours
                    </dt>
                    <dd className="mt-1 text-base">
                      {BUSINESS.hours}
                      <br />
                      <span className="font-semibold text-cream">{BUSINESS.emergency}</span>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-bold uppercase tracking-[0.25em] text-cream/40">
                      Service area
                    </dt>
                    <dd className="mt-1 text-base">
                      {TOWNS.slice(0, 8).join(" · ")} &amp; more
                    </dd>
                  </div>
                </dl>
                <a
                  href={BUSINESS.phoneHref}
                  className="mt-8 inline-flex min-h-[52px] items-center justify-center rounded-full bg-cream px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-ink transition hover:bg-white"
                >
                  Call {BUSINESS.phone}
                </a>
              </div>
              <div className="relative min-h-[280px]">
                <img
                  src="/img/forest.jpg"
                  alt="Service area"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-forest/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-ink/80 px-8 py-4 backdrop-blur">
                    <p className="font-display text-lg uppercase tracking-wide text-cream">
                      Essex County, NJ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
