import HeroSlider from "./components/HeroSlider";
import {
  Areas,
  Contact,
  Footer,
  Header,
  MobileCallBar,
  Reviews,
  Services,
  TrustBar,
  WhyUs,
  Work,
  useReveal,
} from "./components/Sections";

export default function App() {
  const ref = useReveal();
  return (
    <div ref={ref} id="top" className="bg-cream pb-16 md:pb-0">
      <Header />
      <main>
        <HeroSlider />
        <TrustBar />
        <Services />
        <Work />
        <WhyUs />
        <Reviews />
        <Areas />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  );
}
