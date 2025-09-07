import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import TradeSection from "./Components/TradeSection";
import "./App.css";
import TyreSection from "./Components/TyresSection";
import SocialSection from "./Components/SocialSection";
import About from "./Components/AboutSection";
import ThanksSection from "./Components/ThanksSection";
import Footer from "./Components/Footer";
import ProductDetail from "./Components/ProductDetail";
import ScrollToTop from "./Components/ScrollToTop"; 
import TyresPage from "./Pages/TyresPage";
import AboutPage from "./Pages/AboutPage";
import Gallery from "./Pages/GalleryPage";
import ContactPage from "./Pages/ContactPage";
import ReactVideoSlider from "./Components/ReactVideoSlider";
import VideoCardSlider from "./Components/VideoCardSlider";
import ExportSection from "./Components/ExportSection";
import FeedbackSection from "./Components/FeedbackSection";


function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />

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
               <VideoCardSlider />
                <About />
                <ReactVideoSlider />
                <SocialSection />
                <FeedbackSection />
                <ThanksSection />
                <Footer />
              </>
            }
          />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/tyres" element={<TyresPage />} />
           <Route path="/about" element={<AboutPage />} />
           <Route path="/gallery" element={<Gallery/>} />
           <Route path="/contact" element={<ContactPage/>} />


        </Routes>

      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
