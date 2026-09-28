export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  img: string;
  body: string[];
}

export const POSTS: Post[] = [
  {
    slug: "when-to-prune-trees",
    title: "When to Prune Your Trees (and When to Leave Them Alone)",
    excerpt:
      "Timing matters more than most homeowners think. Here's the seasonal playbook we use on every job.",
    date: "September 12, 2026",
    readTime: "3 min read",
    img: "/img/treesvc.jpg",
    body: [
      "The number one question we get after 'how much does this cost' is 'when should I do it.' The honest answer: it depends on the tree, but there are rules that hold up almost every time.",
      "Late winter — February into early March here in North Jersey — is prime time for most shade trees. They're dormant, so they barely notice the work. Without leaves, the branch structure is wide open, which means cleaner cuts and better decisions. And diseases and insects that exploit fresh wounds are mostly asleep too.",
      "Spring is for watching, not cutting. Trees are pushing all their stored energy into new growth; heavy pruning now stresses them at their most vulnerable moment. The one exception: flowering trees like dogwood and cherry should be pruned right after they bloom, since they set next year's buds in summer.",
      "Summer pruning has its place — it's actually the best time to slow down an overly vigorous tree, because removing leafy branches removes the food factory. We use light summer cuts to correct storm damage or remove suckers and water sprouts.",
      "Fall is the season to leave trees alone. Cuts made in fall heal slowly going into winter, and new growth triggered by pruning won't harden off before frost. If a limb is dead or dangerous, take it anytime — but save the elective work for winter.",
      "When in doubt, walk the tree with us. Estimates are free, and we'd rather tell you 'wait until February' than sell you work your tree doesn't need yet.",
    ],
  },
  {
    slug: "signs-tree-needs-removal",
    title: "7 Signs a Tree Needs to Come Down",
    excerpt:
      "Most trees can be saved. But these warning signs mean it's time for an honest conversation about removal.",
    date: "August 28, 2026",
    readTime: "4 min read",
    img: "/img/felling.jpg",
    body: [
      "Nobody loves removing a mature tree — us included. But a hazardous tree is a liability with roots, and the cost of waiting is usually measured in roof repairs. Here's what we look for on every assessment.",
      "1. Dead or hanging branches in the upper canopy. A few dead twigs are normal. Big dead limbs — especially ones hung up in the canopy — are not. They're called widowmakers for a reason.",
      "2. Mushrooms or fungal fruiting bodies at the base. Fungi digest wood. If they're fruiting on the trunk or root flare, there's significant internal decay you can't see from the outside.",
      "3. A lean that wasn't there before. Trees grow toward light and develop a natural lean over decades — that's fine. A lean that appeared suddenly, especially with lifted soil on the opposite side, means the root plate is failing.",
      "4. Cracks, seams, or cavities in the trunk. Deep vertical cracks and hollow spots compromise structural strength. A tree can survive hollow, but it can't survive hollow and leaning toward your bedroom.",
      "5. Root damage from construction. Trenching, grading, or new driveways within the drip line can kill half a root system. The decline shows up 2–5 years later, long after the contractor is gone.",
      "6. Excessive dieback in the crown. When the top of the tree starts dying back year after year, the tree is telling you it's losing the fight.",
      "7. It's simply in the wrong place. Roots in the sewer line, limbs on the roof every storm, a trunk 3 feet from the foundation — sometimes the right call is removal and a better-placed replacement.",
      "One or two of these? Call us for an assessment — many of these trees can be pruned, cabled, or treated instead of removed. All seven? Let's talk before the next storm does the deciding for you.",
    ],
  },
  {
    slug: "storm-prep-your-trees",
    title: "Storm-Proofing Your Trees Before the Next Big One",
    excerpt:
      "An hour of prevention beats a 2am emergency call. What to do now, while the sky is still blue.",
    date: "August 8, 2026",
    readTime: "3 min read",
    img: "/img/storm1.jpg",
    body: [
      "Every year we get the same calls the morning after a nor'easter: trees on roofs, limbs through fences, driveways blocked. And every year, most of that damage was preventable. Here's the pre-storm checklist we give our own neighbors.",
      "Start with deadwood. Dead limbs are the first thing to fail in high wind, and they're also the cheapest thing to remove. A crown cleaning every few years takes them out before they take out your gutter.",
      "Look at the structure. Trees with co-dominant leaders — two trunks competing in a tight V — are split waiting to happen. Cabling and bracing can save these trees and costs a fraction of a removal plus roof repair.",
      "Mind the clearance. Limbs rubbing your roof abrade shingles with every gust, and they give squirrels a highway into your attic. Keep 6–10 feet of clearance from structures.",
      "Check the ground after heavy rain. If a tree that never leaned starts leaning, or you see fresh soil heaving on one side, the root plate is compromised. That's a call-us-today situation, not a wait-and-see.",
      "Know your riskiest tree. Walk your property and pick the one tree you'd least want falling on the house. That's the one to have assessed first — usually the tallest, oldest, or most decayed tree near a structure.",
      "Storm work is our busiest season and our most expensive work for homeowners. A preventive visit now is cheaper, calmer, and scheduled on your terms — not the weather's.",
    ],
  },
];
