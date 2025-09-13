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
      <span className="testimonials-label">{t.label[language]}</span>
      <h2 className="testimonials-heading">{t.heading[language]}</h2>

      <div className="testimonials-grid">
        {t.list[language].map((item, i) => (
          <motion.div
            key={i}
            className="testimonial-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
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
