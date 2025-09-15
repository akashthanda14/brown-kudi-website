import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./Components/Navbar";
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
import Testimonials from "./Components/Testmonials";
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
          <Route
            path="/"
            element={
              <>
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
              </>
            }
          />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/tyres" element={<TyresPage />} />
          <Route path="/about" element={<AboutPage_ />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/tradesection" element={<TradeSection />} />
          <Route path="/social" element={<SocialPage />} />
          <Route path="/testmonials" element={<Testimonials />} />
          <Route path="/export-section" element={<ExportSection />} />
          <Route path="/agriequipments" element={<AgriEquipments />} />
          <Route path="/agrijourney" element={<AgriJourney />} />
          <Route path="/socialfootprints" element={<SocialFootprints />} />

        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
