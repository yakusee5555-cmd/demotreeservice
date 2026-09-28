export const BUSINESS = {
  name: "Ironwood Tree Service",
  phone: "(555) 234-5678",
  phoneHref: "tel:+15552345678",
  address: "456 Oak Avenue, Newark, NJ 07104",
  hours: "Mon–Sat, 7:00 AM – 7:00 PM",
  emergency: "24/7 emergency storm response",
  rating: "4.9",
  reviewCount: "240+",
};

export const NAV = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

/* Stacked headline words (section 2) */
export const STACK_WORDS = ["Removal.", "Trimming.", "Stump Grinding.", "Storm Response."];

export interface FloatCard {
  img: string;
  title: string;
  meta: string;
  rotate: string;
  offset: string;
}

export const FLOAT_CARDS: FloatCard[] = [
  {
    img: "/img/felling.jpg",
    title: "Tree Removal",
    meta: "Controlled takedowns · Free estimates",
    rotate: "rotate-[4deg]",
    offset: "md:translate-y-10",
  },
  {
    img: "/img/treesvc.jpg",
    title: "Trimming & Pruning",
    meta: "Crown shaping · Health cuts",
    rotate: "rotate-[-3deg]",
    offset: "md:-translate-y-6",
  },
  {
    img: "/img/stump2.jpg",
    title: "Stump Grinding",
    meta: "Below grade · Chips hauled",
    rotate: "rotate-[2.5deg]",
    offset: "md:translate-y-16",
  },
];

/* Dark numbered list (section 3) */
export interface ListRow {
  img: string;
  title: string;
  desc: string;
}

export const LIST_ROWS: ListRow[] = [
  {
    img: "/img/felling.jpg",
    title: "Tree Removal",
    desc: "Safe takedowns in tight spaces",
  },
  {
    img: "/img/arborist1.jpg",
    title: "Trimming & Pruning",
    desc: "Healthy canopies, clean shapes",
  },
  {
    img: "/img/stump2.jpg",
    title: "Stump Grinding",
    desc: "Gone below grade, lawn restored",
  },
  {
    img: "/img/storm2.jpg",
    title: "Emergency Storm Cleanup",
    desc: "Day or night, we answer",
  },
  {
    img: "/img/forest.jpg",
    title: "Lot & Land Clearing",
    desc: "Brush and overgrowth cleared",
  },
];

/* Glass cards on full-bleed image (section 4) */
export interface GlassCard {
  title: string;
  desc: string;
  pos: string;
}

export const GLASS_CARDS: GlassCard[] = [
  {
    title: "Free estimates",
    desc: "On-site quotes, usually same-day.",
    pos: "left-[6%] top-[16%]",
  },
  {
    title: "Licensed & insured",
    desc: "Full coverage on every single job.",
    pos: "right-[8%] top-[24%]",
  },
  {
    title: "24/7 emergency",
    desc: "Storm damage? One call, we're rolling.",
    pos: "left-[10%] bottom-[20%]",
  },
  {
    title: "4.9 ★★★★★",
    desc: "240+ Google reviews from neighbors.",
    pos: "right-[10%] bottom-[14%]",
  },
];

/* Real work gallery (section 5) — actual tree-work photos */
export interface WorkShot {
  img: string;
  title: string;
  location: string;
}

export const WORK_SHOTS: WorkShot[] = [
  { img: "/img/felling.jpg", title: "Hazardous pine topped & removed", location: "Newark, NJ" },
  { img: "/img/chainsaw.jpg", title: "Sectional takedown, tight lot", location: "Bloomfield, NJ" },
  { img: "/img/treesvc.jpg", title: "Crown cleaning & shaping", location: "Montclair, NJ" },
  { img: "/img/arborist2.jpg", title: "Climbing prune, mature oak", location: "Nutley, NJ" },
  { img: "/img/storm1.jpg", title: "Storm-felled tree cleared", location: "East Orange, NJ" },
  { img: "/img/stump.jpg", title: "Stump ground below grade", location: "Belleville, NJ" },
];

export interface Service {
  img: string;
  title: string;
  desc: string;
}

export const SERVICES: Service[] = [
  {
    img: "/img/felling.jpg",
    title: "Tree Removal",
    desc: "Safe, controlled takedowns of dead, diseased, or hazardous trees — even in tight urban lots.",
  },
  {
    img: "/img/arborist1.jpg",
    title: "Trimming & Pruning",
    desc: "Crown thinning, shaping, and deadwood removal that keeps trees healthy and storm-resistant.",
  },
  {
    img: "/img/stump2.jpg",
    title: "Stump Grinding",
    desc: "We grind stumps below grade and haul the chips — your lawn comes back like nothing was there.",
  },
  {
    img: "/img/storm2.jpg",
    title: "Emergency Storm Cleanup",
    desc: "Fallen limbs and uprooted trees cleared fast, day or night. We answer when it matters.",
  },
  {
    img: "/img/forest.jpg",
    title: "Lot & Land Clearing",
    desc: "Brush, saplings, and overgrowth cleared for new builds, fences, and usable backyard space.",
  },
  {
    img: "/img/arborist2.jpg",
    title: "Cabling & Bracing",
    desc: "Structural support systems that save split or leaning trees instead of removing them.",
  },
];

export interface Review {
  name: string;
  town: string;
  text: string;
}

export const REVIEWS: Review[] = [
  {
    name: "Marcus T.",
    town: "Newark",
    text: "Huge oak leaning over our garage. They took it down in sections without touching a shingle. Cleaned everything like they were never here.",
  },
  {
    name: "Priya S.",
    town: "Montclair",
    text: "Called at 7am after a storm dropped a limb on our fence. Crew was here by noon and the yard looked better than before.",
  },
  {
    name: "Dave R.",
    town: "Bloomfield",
    text: "Fair price, showed up on time, and actually explained what they were doing to our maples. Rare these days. Highly recommend.",
  },
  {
    name: "Angela M.",
    town: "Belleville",
    text: "Three stumps ground out and the lawn regraded in one morning. You can't even tell trees were there. Worth every penny.",
  },
];

export const TOWNS = [
  "Newark",
  "East Orange",
  "Irvington",
  "Bloomfield",
  "Belleville",
  "Nutley",
  "Orange",
  "Montclair",
  "Harrison",
  "Kearny",
  "Elizabeth",
  "Union",
];
