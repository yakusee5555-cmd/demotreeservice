import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBack = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const yFore = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] overflow-hidden bg-[#0b100d]">
      {/* BACK LAYER — atmosphere + giant wordmark sitting behind the trees */}
      <motion.div style={{ y: yBack }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#18261c_0%,#0b100d_70%)]" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <motion.h1
            initial={{ opacity: 0, scale: 1.18, filter: "blur(16px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black text-[#f4efe4] leading-none tracking-tight select-none text-[clamp(4.5rem,20vw,21rem)]"
          >
            IRONWOOD
          </motion.h1>
        </div>
      </motion.div>

      {/* FRONT LAYER — trees overlapping the wordmark */}
      <motion.div style={{ y: yFore }} className="absolute inset-0 z-10 pointer-events-none">
        <motion.img
          src="/img/forest.jpg"
          alt="Pine trees standing in front of the Ironwood wordmark"
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="h-full w-full object-cover"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, transparent 16%, black 48%)",
            maskImage: "linear-gradient(to bottom, transparent 16%, black 48%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute inset-0 z-20 flex flex-col justify-between px-6 md:px-12 pt-28 pb-8"
      >
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex justify-end"
        >
          <p className="text-right text-[11px] md:text-xs font-bold tracking-[0.35em] text-white/70 leading-loose">
            TREE CARE<br />REMOVAL<br />PRUNING
          </p>
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="text-center text-xs md:text-sm font-bold tracking-[0.5em] text-white/80 mb-8"
          >
            TREE SERVICE
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6"
          >
            <p className="max-w-md text-white/85 text-base md:text-lg leading-relaxed">
              Safe removals, precision pruning &amp; 24/7 storm response across Essex County, NJ.
            </p>
            <div className="flex gap-3">
              <a
                href="#contact"
                className="rounded-full bg-[#f4efe4] px-8 py-4 text-sm font-bold tracking-widest text-[#0b100d] hover:bg-white transition-colors"
              >
                FREE ESTIMATE
              </a>
              <a
                href="tel:+15552345678"
                className="rounded-full border border-white/60 px-8 py-4 text-sm font-bold tracking-widest text-white hover:bg-white/10 transition-colors"
              >
                (555) 234-5678
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
