import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";
import "./Testimonials.css";

export default function Testimonials() {
  const { language } = useLanguage();
  const t = translations.testimonials;

  return (
    <section className="testimonials-section">
      <motion.span
        className="testimonials-label"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {t.label[language]}
      </motion.span>

      <motion.h2
        className="testimonials-heading"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {t.heading[language]}
      </motion.h2>

      <div className="testimonials-grid">
        {t.list[language].map((item, i) => (
          <motion.div
            key={i}
            className="testimonial-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
          >
            <FaQuoteLeft className="quote-icon" />
            <p className="testimonial-text">{item.text}</p>
            <div className="testimonial-divider"></div>
            <div className="testimonial-footer">
              <div>
                <h4 className="testimonial-name">{item.name}</h4>
                <p className="testimonial-username">{item.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
