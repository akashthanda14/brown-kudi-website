import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";
import { motion } from "framer-motion";
import "./TyresSection.css";

export default function TyreSection() {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const handleMoreInfoClick = () => {
    navigate("/tyres");
    window.scrollTo({ top: 0, behavior: "smooth" }); //  Auto scroll top
  };

  return (
    <section className="tyre-section">
      <div className="tyre-container">
        {/* Left - Tyre Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="tyre-image"
        >
          <img src="/img/browntyre.png" alt="Brown Kudi Tyres" />
        </motion.div>

        {/* Right - Content */}
        <div className="tyre-content">
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="relative inline-block"
          >
            {translations.tyreSection.title[language]}

            {/* Underline Animation */}
            <motion.span
              className="absolute left-0 -bottom-1 h-1 bg-yellow-500 rounded"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.h2>

          <p>{translations.tyreSection.description[language]}</p>

          {/*  Button with scroll + navigation */}
          <button onClick={handleMoreInfoClick}>
            {translations.tyreSection.button[language]}
          </button>
        </div>
      </div>
    </section>
  );
}
