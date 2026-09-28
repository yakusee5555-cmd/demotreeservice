import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header, MobileCallBar } from "./components/Sections";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import ServiceAreas from "./pages/ServiceAreas";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
      <div
        id="top"
        className="min-h-screen bg-cream pb-[calc(3.75rem+env(safe-area-inset-bottom))] md:pb-0"
      >
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/service-areas" element={<ServiceAreas />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <MobileCallBar />
      </div>
    </BrowserRouter>
  );
}
