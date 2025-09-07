import React, { useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";
import "./TyresPage.css";

export default function TyresPage() {
    const { language } = useLanguage();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

const tyresbrand = {
    english: "Our Tyers",
    hindi: "हमारे टायर्स",
    punjabi: "ਸਾਡੇ ਟਾਇਰ",
};
  const tyres = [
    {
      id: 1,
      name: "All Season Tyre",
      image: "/img/tyre1.png",
      description: "Perfect for all weather conditions with balanced grip and durability."
    },
    {
      id: 2,
      name: "Performance Tyre",
      image: "/img/tyre2.png",
      description: "High performance tyres designed for speed and superior handling."
    },
    {
      id: 3,
      name: "Off-Road Tyre",
      image: "/img/tyre3.png",
      description: "Built tough for rugged terrains and off-road adventures."
    },
    {
      id: 4,
      name: "Eco Tyre",
      image: "/img/tyre4.png",
      description: "Fuel-efficient tyres designed for city driving and long-lasting wear."
    }
  ];

  return (
    <div className="tyres-page">
      {/* Owner Section */}
      <section className="owner-section">
        <motion.div
          className="owner-image"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/img/IMG1.jpg" alt="Brown Kudi Owner" />
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
  );
}
