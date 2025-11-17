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

  const tyres = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dm9sbfva5/image/upload/v1763372476/tyre1_rp1nii.png",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dm9sbfva5/image/upload/v1763372470/tyre3_fbffjs.png",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dm9sbfva5/image/upload/v1763372466/tyre4_me7l4l.png",
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dm9sbfva5/image/upload/v1763372470/tyre3_fbffjs.png",
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
            <img src="https://res.cloudinary.com/dm9sbfva5/image/upload/v1763372427/IMG1_kekagj.jpg" alt="Founder Harpal Kaur Dhanjal in field" />
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
          <h2>{translations.tyres.brand[language]}</h2>
          <div className="tyres-grid">
            {tyres.map((tyre, index) => {
              const tyreData = translations.tyres.list.find(t => t.id === tyre.id);
              return (
                <motion.div
                  key={tyre.id}
                  className="tyre-card"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <img src={tyre.image} alt={tyreData.name[language]} />
                  <h3>{tyreData.name[language]}</h3>
                  <p>{tyreData.description[language]}</p>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>
      <Footer />

    </>
  );
}
