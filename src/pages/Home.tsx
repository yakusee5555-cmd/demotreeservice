import Hero from "../components/Hero";
import { Contact, Reviews } from "../components/Sections";
import { DarkList, FullBleed, Pricing, Stacked, Work } from "../components/Showcase";
import { RouteFX } from "../components/PageBits";

export default function Home() {
  return (
    <>
      <RouteFX
        title="Ironwood Tree Service | Tree Removal & Trimming in Newark, NJ"
        description="Ironwood Tree Service — safe tree removal, precision trimming, stump grinding and 24/7 emergency storm cleanup across Newark and Essex County, NJ. Free estimates."
      />
      <Hero />
      <Stacked />
      <DarkList />
      <FullBleed />
      <Work />
      <Pricing />
      <Reviews />
      <Contact />
    </>
  );
}
