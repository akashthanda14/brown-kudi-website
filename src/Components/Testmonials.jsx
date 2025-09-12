import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa"; // Quote icon
import "./Testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Gurpreet Singh",
      location: "Punjab, India",
      text: "The Super Seeder from Brown Kudi is a marvel. It saves so much time and fuel, and my crop growth has been noticeably better. A must-have for modern farming."
    },
    {
      name: "Harman Kaur",
      location: "Haryana, India",
      text: "I've been using the Reversible MB Plough, and the primary tillage is excellent. It turns over the soil perfectly and buries residue, making my land ready for sowing in no time."
    },
    {
      name: "Manpreet Singh",
      location: "Punjab, India",
      text: "The Disc Harrow has made preparing my seedbed so much easier. It breaks up the clods and levels the soil beautifully. The quality is outstanding."
    },
    {
      name: "Jaswinder Singh",
      location: "Punjab, India",
      text: "Using the Rotary Tiller has cut down my field preparation time significantly. It pulverizes the soil and removes weeds with ease. A very efficient machine."
    },
    {
      name: "Balwinder Singh",
      location: "Haryana, India",
      text: "The Subsoiler is a powerful tool. It broke through my hardpan soil, and I've seen a great improvement in root growth and water absorption. My yield has definitely increased."
    },
    {
      name: "Amritpal Singh",
      location: "Punjab, India",
      text: "I am very happy with the Disc Plough. It works exceptionally well in my hard and stony fields, where other ploughs have struggled. It's built tough."
    }
  ];

  return (
    <section className="testimonials-section">
      <span className="testimonials-label">TESTIMONIALS</span>
      <h2 className="testimonials-heading">Our trusted clients</h2>

      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="testimonial-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <FaQuoteLeft className="quote-icon" />

            <p className="testimonial-text">
              {t.text}
            </p>

            {/* Divider line */}
            <div className="testimonial-divider"></div>

            <div className="testimonial-footer">
              <div>
                <h4 className="testimonial-name">{t.name}</h4>
                <p className="testimonial-username">{t.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
