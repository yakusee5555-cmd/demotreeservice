import { Link, useParams } from "react-router-dom";
import { POSTS } from "../data/posts";
import { CtaBand, PageHero, RouteFX } from "../components/PageBits";

export default function BlogPost() {
  const { slug } = useParams();
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <RouteFX title="Post not found | Ironwood Tree Service" />
        <PageHero eyebrow="Blog" title="Not found." sub="That article doesn't exist." />
        <section className="bg-cream py-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <Link
              to="/blog"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-forest px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white"
            >
              Back to blog
            </Link>
          </div>
        </section>
      </>
    );
  }

  const others = POSTS.filter((p) => p.slug !== post.slug);

  return (
    <>
      <RouteFX
        title={`${post.title} | Ironwood Tree Service Blog`}
        description={post.excerpt}
      />
      <PageHero
        eyebrow={`${post.date} · ${post.readTime}`}
        title={post.title}
        sub={post.excerpt}
        img={post.img}
      />

      <article className="bg-cream py-12 md:py-20">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          {post.body.map((para, i) => (
            <p
              key={i}
              className="reveal mb-6 text-base leading-relaxed text-charcoal/80 md:text-lg md:leading-loose"
            >
              {para}
            </p>
          ))}
          <div className="reveal mt-10 flex flex-wrap gap-4 border-t border-charcoal/10 pt-8">
            <Link
              to="/contact"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-forest px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-forest-deep"
            >
              Get a free estimate
            </Link>
            <Link
              to="/blog"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border-2 border-charcoal/15 px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-charcoal transition hover:border-charcoal"
            >
              All articles
            </Link>
          </div>
        </div>
      </article>

      {others.length > 0 && (
        <section className="bg-ink py-12 md:py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="reveal font-display text-2xl uppercase text-cream md:text-4xl">
              Keep reading.
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  to={`/blog/${o.slug}`}
                  className="reveal group rounded-3xl border border-cream/15 bg-white/[0.03] p-7 transition hover:bg-white/[0.07]"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-cream/45">
                    {o.date} · {o.readTime}
                  </p>
                  <h3 className="mt-2 font-display text-xl uppercase leading-tight text-cream md:text-2xl">
                    {o.title}
                  </h3>
                  <span className="mt-4 inline-block text-sm font-bold uppercase tracking-[0.2em] text-cream transition group-hover:translate-x-1">
                    Read →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
