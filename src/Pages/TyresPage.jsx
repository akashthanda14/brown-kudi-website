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
      image: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750817/tyre1_bavlxv.png",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757752948/Pngtree_exploring_tire_technology_innovations_and_15498626_dda0ta.png",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757752541/tyre3_u1kaui.png",
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757752529/tyre4_ulqjkf.png",
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
