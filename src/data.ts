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

export interface Slide {
  img: string;
  kicker: string;
  headline: string;
  sub: string;
}

export const SLIDES: Slide[] = [
  {
    img: "/img/felling.jpg",
    kicker: "Tree removal",
    headline: "WE TAKE DOWN TREES. SAFELY.",
    sub: "Precision removals in tight spaces — no damage to your home, lawn, or landscaping. Free on-site estimates.",
  },
  {
    img: "/img/treesvc.jpg",
    kicker: "Trimming & pruning",
    headline: "PRECISION TREE CARE.",
    sub: "Certified pruning that keeps your trees healthy, your canopy shaped, and your property safe.",
  },
  {
    img: "/img/storm1.jpg",
    kicker: "Storm response",
    headline: "STORMS DON'T WAIT. NEITHER DO WE.",
    sub: "24/7 emergency tree removal when wind and weather leave a mess. One call and we're rolling.",
  },
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

export interface Job {
  before: string;
  after: string;
  title: string;
  location: string;
}

export const JOBS: Job[] = [
  {
    before: "/img/storm1.jpg",
    after: "/img/forest.jpg",
    title: "Storm damage cleared",
    location: "Bloomfield, NJ",
  },
  {
    before: "/img/arborist2.jpg",
    after: "/img/treesvc.jpg",
    title: "Canopy thinned & shaped",
    location: "Montclair, NJ",
  },
  {
    before: "/img/stump2.jpg",
    after: "/img/chainsaw.jpg",
    title: "Hazard removal & cleanup",
    location: "Newark, NJ",
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
