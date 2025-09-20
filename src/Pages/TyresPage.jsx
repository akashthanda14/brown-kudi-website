import React, { useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";
import Footer from "../Components/Footer";
import { useScrollToTop } from "../hooks/useScrollToTop";
import "./TyresPage.css";

export default function TyresPage() {
  const { language } = useLanguage();
  
  // Scroll to top when component mounts
  useScrollToTop();

  const tyresbrand = {
    english: "Our Tyres",
    hindi: "हमारे टायर्स",
    punjabi: "ਸਾਡੇ ਟਾਇਰ",
  };
  const tyres = [
    {
      id: 1,
      name: "All Season Tyre",
      image: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750817/tyre1_bavlxv.png",
      description: "Perfect for all weather conditions with balanced grip and durability."
    },
    {
      id: 2,
      name: "Performance Tyre",
      image: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757752948/Pngtree_exploring_tire_technology_innovations_and_15498626_dda0ta.png",
  description: "High-performance tyres designed for speed and superior handling."
    },
    {
      id: 3,
      name: "Off-Road Tyre",
      image: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757752541/tyre3_u1kaui.png",
  description: "Built tough for rugged terrain and off-road agricultural use."
    },
    {
      id: 4,
      name: "Eco Tyre",
      image: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757752529/tyre4_ulqjkf.png",
  description: "Fuel-efficient tyres engineered for long life and reduced operating costs."
    }
  ];

  return (
    <>
      <div className="tyres-page">
        {/* Owner Section */}
        <section className="owner-section">
          <motion.div
            className="owner-image"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src="https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750728/IMG1_vji0th.jpg" alt="Founder Harpal Kaur Dhanjal in field" />
          </motion.div>

          <motion.div
            className="owner-details"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 id="ownerh1"> {translations.tyreSection.title[language]}</h1>
            <p>{translations.tyreSection.description[language]}</p>
          </motion.div>
        </section>

        {/* Tyres Section */}
        <section className="tyres-section">
          <h2>{tyresbrand[language]}</h2>
          <div className="tyres-grid">
            {tyres.map((tyre, index) => (
              <motion.div
                key={tyre.id}
                className="tyre-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <img src={tyre.image} alt={tyre.name} />
                <h3>{tyre.name}</h3>
                <p>{tyre.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <Footer />

    </>
  );
}
