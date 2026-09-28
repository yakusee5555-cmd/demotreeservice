import { Link, useParams } from "react-router-dom";
import { SERVICE_DETAILS } from "../data/services";
import { CtaBand, Faq, PageHero, RouteFX } from "../components/PageBits";

export default function ServiceDetail() {
  const { slug } = useParams();
  const svc = SERVICE_DETAILS.find((s) => s.slug === slug);

  if (!svc) {
    return (
      <>
        <RouteFX title="Service not found | Ironwood Tree Service" />
        <PageHero eyebrow="Services" title="Not found." sub="That service page doesn't exist." />
        <section className="bg-cream py-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <Link
              to="/services"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-forest px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white"
            >
              Back to services
            </Link>
          </div>
        </section>
      </>
    );
  }

  const others = SERVICE_DETAILS.filter((s) => s.slug !== svc.slug);

  return (
    <>
      <RouteFX title={`${svc.title} in Essex County NJ | Ironwood Tree Service`} description={svc.meta} />
      <PageHero eyebrow="Services" title={svc.title} sub={svc.tagline} img={svc.img} />

      {/* description */}
      <section className="bg-cream py-12 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div className="reveal overflow-hidden rounded-3xl shadow-lg">
            <img src={svc.img} alt={svc.title} loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="space-y-5">
            {svc.description.map((p, i) => (
              <p key={i} className="reveal text-base leading-relaxed text-charcoal/75 md:text-lg">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* what's included */}
      <section className="bg-ink py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-cream/50">
            What's included
          </p>
          <h2 className="reveal mt-3 font-display text-2xl uppercase leading-[1.05] text-cream md:text-5xl">
            Every {svc.title.toLowerCase()} job.
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
            {svc.included.map((inc, i) => (
              <li
                key={inc}
                className="reveal flex items-start gap-3 rounded-2xl border border-cream/15 bg-white/[0.03] p-5"
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-forest" />
                <span className="text-base text-cream/80">{inc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* process */}
      <section className="bg-cream py-12 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-forest">
            How it works
          </p>
          <h2 className="reveal mt-3 font-display text-2xl uppercase leading-[1.05] text-charcoal md:text-5xl">
            Four steps. Zero drama.
          </h2>
          <div className="mt-8 md:mt-12">
            {svc.steps.map((st, i) => (
              <div
                key={st.title}
                className="reveal flex gap-5 border-t border-charcoal/10 py-6 md:gap-8"
              >
                <span className="font-display text-2xl text-forest md:text-4xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg uppercase text-charcoal md:text-2xl">
                    {st.title}
                  </h3>
                  <p className="mt-1 max-w-2xl text-base text-charcoal/65">{st.desc}</p>
                </div>
              </div>
            ))}
            <div className="border-t border-charcoal/10" />
          </div>
        </div>
      </section>

      {/* pricing hint */}
      <section className="bg-cream pb-12 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="reveal flex flex-col items-start justify-between gap-6 rounded-3xl bg-ink p-8 md:flex-row md:items-center md:p-10">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-cream/50">
                Pricing
              </p>
              <p className="mt-2 max-w-2xl text-base leading-relaxed text-cream/75 md:text-lg">
                {svc.pricingHint}
              </p>
            </div>
            <Link
              to="/#pricing"
              className="flex min-h-[52px] shrink-0 items-center justify-center rounded-full border border-cream/30 px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-cream transition hover:bg-cream hover:text-ink"
            >
              See packages
            </Link>
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="bg-cream pb-16 md:pb-24">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <h2 className="reveal font-display text-2xl uppercase text-charcoal md:text-4xl">
            {svc.title} — FAQs.
          </h2>
          <div className="mt-6">
            <Faq items={svc.faqs} />
          </div>
        </div>
      </section>

      {/* other services */}
      <section className="bg-ink py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <h2 className="reveal font-display text-2xl uppercase text-cream md:text-4xl">
            Other services.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {others.slice(0, 3).map((o) => (
              <Link
                key={o.slug}
                to={`/services/${o.slug}`}
                className="reveal group rounded-2xl border border-cream/15 bg-white/[0.03] p-6 transition hover:bg-white/[0.07]"
              >
                <h3 className="font-display text-lg uppercase text-cream md:text-xl">{o.title}</h3>
                <p className="mt-1 text-sm text-cream/55">{o.tagline}</p>
                <span className="mt-4 inline-block text-sm font-bold uppercase tracking-[0.2em] text-cream transition group-hover:translate-x-1">
                  View →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Need ${svc.title.toLowerCase()}?`}
        sub="Free on-site estimate. Firm price before we start, full cleanup when we finish."
      />
    </>
  );
}
