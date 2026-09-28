export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  img: string;
  description: string[];
  included: string[];
  steps: { title: string; desc: string }[];
  pricingHint: string;
  faqs: { q: string; a: string }[];
  meta: string;
}

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "tree-removal",
    title: "Tree Removal",
    tagline: "Safe takedowns in tight spaces.",
    img: "/img/felling.jpg",
    description: [
      "Some trees can't be saved — dead, diseased, storm-damaged, or just in the wrong spot. Ironwood removes them safely, even when they're leaning over your roof, tangled in power lines, or boxed in by fences on every side.",
      "Our crews are trained climbers, not guys with a ladder and a hope. We rig every limb down in controlled sections, so nothing free-falls and nothing gets crushed.",
    ],
    included: [
      "Controlled sectional takedowns",
      "Crane-assisted removals for large trees",
      "Trees near structures, lines & fences",
      "Stump grinding add-on available",
      "Full property cleanup — chips, limbs, sawdust",
      "Wood left as firewood or hauled away, your call",
    ],
    steps: [
      {
        title: "Free on-site assessment",
        desc: "We look at the tree, the obstacles, and the access — then give you a firm price on the spot.",
      },
      {
        title: "Rigging plan",
        desc: "Every limb gets a plan: what comes down first, where it lands, and how it's lowered.",
      },
      {
        title: "Sectional takedown",
        desc: "Climbers dismantle the tree piece by piece. Controlled, quiet, and safe around your home.",
      },
      {
        title: "Cleanup",
        desc: "We rake, blow, and haul everything out. Your yard looks better than when we arrived.",
      },
    ],
    pricingHint: "Most removals land between $600 and $2,500 depending on size and access. Exact price confirmed free on-site.",
    faqs: [
      {
        q: "How much does tree removal cost?",
        a: "Small trees start around $600; large or complex removals with crane work run $1,500–$2,500+. We confirm a firm, free quote on-site before any work begins.",
      },
      {
        q: "Can you remove a tree close to my house?",
        a: "Yes — that's most of what we do. We dismantle trees in sections and lower each piece with ropes, so nothing touches your roof, fence, or landscaping.",
      },
      {
        q: "Do you take the stump too?",
        a: "Stump grinding is an add-on to any removal. We grind it below grade, haul the chips, and leave the spot ready for grass or replanting.",
      },
      {
        q: "Are you insured?",
        a: "Fully licensed and insured on every job. We'll show you the paperwork before we start — no exceptions.",
      },
    ],
    meta: "Safe, controlled tree removal in Newark & Essex County NJ. Crane work, tight-space takedowns, full cleanup. Free estimates — Ironwood Tree Service.",
  },
  {
    slug: "tree-trimming-pruning",
    title: "Tree Trimming & Pruning",
    tagline: "Healthy canopies, clean shapes.",
    img: "/img/treesvc.jpg",
    description: [
      "Good pruning is part science, part art. We thin crowded canopies so light and air get through, remove deadwood before it becomes a hazard, and shape trees so they grow strong instead of splitting in the next storm.",
      "Bad pruning — topping, lion-tailing, flush cuts — ruins trees. We cut to ANSI standards, which means your trees heal clean and stay healthy for decades.",
    ],
    included: [
      "Crown thinning & deadwood removal",
      "Shaping for structure and clearance",
      "Roof, driveway & line clearance",
      "Fruit tree & ornamental pruning",
      "Storm-damage corrective pruning",
      "All brush chipped and hauled away",
    ],
    steps: [
      {
        title: "Canopy assessment",
        desc: "We walk the tree with you and mark exactly what's coming off and why — no surprises.",
      },
      {
        title: "Targeted cuts",
        desc: "Deadwood out, crossing limbs out, weight reduced where it matters. Clean cuts at the branch collar.",
      },
      {
        title: "Clearance work",
        desc: "Limbs lifted off roofs, driveways, and service lines so everything has breathing room.",
      },
      {
        title: "Chipping & cleanup",
        desc: "Everything gets chipped on-site and hauled. Beds and lawns raked clean.",
      },
    ],
    pricingHint: "Most pruning jobs run $299–$900 depending on tree size and count. Free on-site quote, always.",
    faqs: [
      {
        q: "When is the best time to prune?",
        a: "Late winter is ideal for most species — the tree is dormant and structure is easy to see. But dead or hazardous limbs should come off any time of year.",
      },
      {
        q: "Will pruning hurt my tree?",
        a: "Proper pruning helps trees. We never remove more than 25% of a live canopy in a season and cut to ANSI standards so wounds close cleanly.",
      },
      {
        q: "Do you top trees?",
        a: "No. Topping destroys trees and creates weak, dangerous regrowth. If someone offered to top your tree, call us for a second opinion first.",
      },
      {
        q: "How often should trees be pruned?",
        a: "Most mature shade trees benefit from a professional prune every 3–5 years. Fast growers and fruit trees usually need attention every 1–2 years.",
      },
    ],
    meta: "Professional tree trimming & pruning in Essex County NJ. Crown thinning, deadwood removal, clearance cuts. Free estimates — Ironwood Tree Service.",
  },
  {
    slug: "stump-grinding",
    title: "Stump Grinding",
    tagline: "Gone below grade, lawn restored.",
    img: "/img/stump2.jpg",
    description: [
      "That stump isn't going anywhere on its own — and it's a mower-killer, a tripping hazard, and an invitation for termites and fungi. We grind stumps 6–8 inches below grade, backfill the hole, and leave the spot ready for grass, garden, or a new tree.",
      "Our grinders fit through a standard 36-inch gate, so even backyard stumps with no machine access aren't a problem.",
    ],
    included: [
      "Grinding 6–8\" below grade",
      "Surface roots chased and ground",
      "Chips hauled or left as mulch",
      "Hole backfilled and leveled",
      "Fits through 36\" gates",
      "Replant-ready finish available",
    ],
    steps: [
      {
        title: "Measure & quote",
        desc: "Price is by stump diameter — we measure, quote on the spot, and it's firm.",
      },
      {
        title: "Grind it out",
        desc: "The grinder chews the stump and major surface roots into chips, well below the soil line.",
      },
      {
        title: "Backfill",
        desc: "We fill the void with the grindings and topsoil, then level it to match your grade.",
      },
      {
        title: "Restore",
        desc: "Seed it, sod it, or plant something new — the spot is ready the same day.",
      },
    ],
    pricingHint: "Most stumps run $150–$400 by diameter. Multiple stumps on one visit get a better per-stump rate.",
    faqs: [
      {
        q: "How much does stump grinding cost?",
        a: "Typically $150–$400 per stump based on diameter. We almost always discount when grinding several stumps in one trip.",
      },
      {
        q: "How deep do you grind?",
        a: "6 to 8 inches below grade as standard — deep enough to replant grass or a garden bed right over it.",
      },
      {
        q: "Will the stump grow back?",
        a: "No. Grinding destroys the stump and the root crown it would sucker from. Some species send up root suckers, which we can treat.",
      },
      {
        q: "Can you get to my backyard stump?",
        a: "Our grinders fit through a standard 36-inch gate. If we can walk to it, we can grind it.",
      },
    ],
    meta: "Stump grinding in Newark & Essex County NJ. Below-grade grinding, chips hauled, replant-ready finish. Free estimates — Ironwood Tree Service.",
  },
  {
    slug: "storm-cleanup",
    title: "Emergency Storm Cleanup",
    tagline: "Day or night, we answer.",
    img: "/img/storm2.jpg",
    description: [
      "When a storm drops a tree on your house, car, or driveway at 2am, you don't need a quote next Tuesday — you need a crew now. Ironwood runs 24/7 emergency response across Essex County.",
      "We clear the immediate danger first, stabilize what's left, and document everything your insurance company will ask for.",
    ],
    included: [
      "24/7 emergency dispatch",
      "Trees off roofs, cars & driveways",
      "Hazardous hanging limbs removed",
      "Temporary stabilization & tarping coordination",
      "Insurance documentation & photos",
      "Full debris removal",
    ],
    steps: [
      {
        title: "Call — we answer",
        desc: "Real person, any hour. We triage by danger level and roll the nearest crew.",
      },
      {
        title: "Make it safe",
        desc: "First priority: get the tree off the structure and eliminate immediate hazards.",
      },
      {
        title: "Document",
        desc: "Photos and notes formatted for your insurance claim, provided free.",
      },
      {
        title: "Full cleanup",
        desc: "Once the emergency is handled, we finish the job: full removal and yard restoration.",
      },
    ],
    pricingHint: "Emergency work is quoted on arrival based on the situation — no surprises, and we work directly with your insurance documentation.",
    faqs: [
      {
        q: "Do you really come out at night?",
        a: "Yes. Storms don't keep business hours and neither do we. If it's an emergency, call — we dispatch around the clock.",
      },
      {
        q: "A tree is on my roof — what do I do?",
        a: "Stay out from under it, don't try to cut anything yourself, and call us. We'll get it off safely and help document the damage for insurance.",
      },
      {
        q: "Will insurance cover this?",
        a: "Often, yes — especially for trees on structures. We provide the photos and documentation adjusters ask for.",
      },
      {
        q: "How fast can you get here?",
        a: "In most of Essex County we're on-site within a few hours of your call, faster for true emergencies.",
      },
    ],
    meta: "24/7 emergency storm cleanup in Essex County NJ. Fallen trees removed, insurance documentation included. Call Ironwood Tree Service now.",
  },
];
