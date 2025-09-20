import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./Components/Navbar";
import SEO from "./Components/SEO";
import { SITE_URL } from "./utils/siteMeta";
import Hero from "./Components/Hero";
import TradeSection from "./Components/TradeSection";
import "./App.css";
import TyreSection from "./Components/TyresSection";
import SocialPage from "./Components/SocialPage";
import About from "./Components/AboutSection";
import ThanksSection from "./Components/ThanksSection";
import Footer from "./Components/Footer";
import ProductDetail from "./Components/ProductDetail";
import ScrollToTop from "./Components/ScrollToTop";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import TyresPage from "./Pages/TyresPage";
import AboutPage_ from "./Pages/AboutPage_Enhanced";
import Gallery from "./Pages/GalleryPage";
import ContactPage from "./Pages/ContactPage";
import ExportSection from "./Components/ExportSection";
import Testimonials from "./Components/Testimonials";
import ImageSlider from "./Components/ImageSlider";
import { useEffect } from "react";
import SocialFootprints from "./Components/SocialFootprints";
import AboutPage_Enhanced from "./Pages/AboutPage_Enhanced";
import AgriEquipments from "./Pages/AgriEquipments";
import AgriJourney from "./Pages/AgriJourney";
function App() {
  // Ensure scroll starts at top when app loads
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <ScrollToTopButton />
        <Analytics />

        <Navbar />
        <Routes>
          <Route path="/" element={<>
            <SEO title="Home" description="Brown Kudi supplies quality tyres, agricultural equipment, and global trade solutions with a commitment to sustainability and performance." canonical={SITE_URL + '/'} />
            <Hero />
            <TradeSection />
            <TyreSection />
            <ExportSection />
            <ImageSlider />
            <SocialPage />
            <Testimonials />
            <SocialFootprints />
            <ThanksSection />
            <Footer />
          </>} />
          <Route path="/about" element={<><SEO title="About" description="Learn about Brown Kudi's mission, vision, and commitment to quality tyres and sustainable agricultural solutions." canonical={SITE_URL + '/about'} /><AboutPage_ /></>} />
          <Route path="/tyres" element={<><SEO title="Tyres" description="Explore Brown Kudi's range of durable, high-performance tyres for diverse vehicles and conditions." canonical={SITE_URL + '/tyres'} /><TyresPage /></>} />
          <Route path="/gallery" element={<><SEO title="Gallery" description="Visual showcase of Brown Kudi tyres, equipment, and global trade projects." canonical={SITE_URL + '/gallery'} /><Gallery /></>} />
          <Route path="/contact" element={<><SEO title="Contact" description="Contact Brown Kudi for tyre supply, agricultural equipment, exports, and partnership inquiries." canonical={SITE_URL + '/contact'} /><ContactPage /></>} />
          <Route path="/tradesection" element={<><SEO title="Trade" description="Brown Kudi's trade section highlighting international export capabilities and partnerships." canonical={SITE_URL + '/tradesection'} /><TradeSection /></>} />
            <Route path="/social" element={<><SEO title="Social" description="Social initiatives and community engagement by Brown Kudi." canonical={SITE_URL + '/social'} /><SocialPage /></>} />
          <Route path="/testimonials" element={<><SEO title="Testimonials" description="What clients and partners say about Brown Kudi's quality and service." canonical={SITE_URL + '/testimonials'} /><Testimonials /></>} />
          <Route path="/export-section" element={<><SEO title="Export" description="Export solutions and logistics support from Brown Kudi for global trade." canonical={SITE_URL + '/export-section'} /><ExportSection /></>} />
          <Route path="/agriequipments" element={<><SEO title="Agri Equipments" description="Agricultural equipment and mechanization solutions by Brown Kudi." canonical={SITE_URL + '/agriequipments'} /><AgriEquipments /></>} />
          <Route path="/agrijourney" element={<><SEO title="Agri Journey" description="The agricultural journey and impact initiatives led by Brown Kudi." canonical={SITE_URL + '/agrijourney'} /><AgriJourney /></>} />
          <Route path="/socialfootprints" element={<><SEO title="Social Footprints" description="Tracking sustainability and social responsibility at Brown Kudi." canonical={SITE_URL + '/socialfootprints'} /><SocialFootprints /></>} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
