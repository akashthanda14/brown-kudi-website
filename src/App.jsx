import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import AboutPage from "./Pages/AboutPage";
import Gallery from "./Pages/GalleryPage";
import ContactPage from "./Pages/ContactPage";
import ExportSection from "./Components/ExportSection";
import Testimonials from "./Components/Testmonials";
import ImageSlider from "./Components/ImageSlider";
import { useEffect } from "react";
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
                <About />
                <SocialPage />
                <Testimonials />
                <ThanksSection />
                <Footer />
              </>
            }
          />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/tyres" element={<TyresPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactPage />} />


        </Routes>

      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
