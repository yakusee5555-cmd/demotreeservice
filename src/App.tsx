import Hero from "./components/Hero";
import { Contact, Footer, Header, MobileCallBar, Reviews, useReveal } from "./components/Sections";
import { DarkList, FullBleed, Pricing, Stacked, Work } from "./components/Showcase";

export default function App() {
  const ref = useReveal();
  return (
    <div id="top" ref={ref} className="min-h-screen bg-cream pb-16 md:pb-0">
      <Header />
      <main>
        <Hero />
        <Stacked />
        <DarkList />
        <FullBleed />
        <Work />
        <Pricing />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  );
}
