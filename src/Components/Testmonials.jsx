import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa"; // Quote icon
import "./Testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Fatima Khoury",
      username: "dilatory_curtains_98",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "The progress tracker is fantastic. It’s motivating to see how much I’ve improved over time. The app has a great mix of common and challenging words."
    },
    {
      name: "Hassan Ali",
      username: "turbulent_unicorn_29",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "The progress tracker is fantastic. It’s motivating to see how much I’ve improved over time. The app has a great mix of common and challenging words."
    },
    {
      name: "Jorge Martínez",
      username: "nefarious_jellybeans_91",
      img: "https://randomuser.me/api/portraits/men/75.jpg",
      text: "The progress tracker is fantastic. It’s motivating to see how much I’ve improved over time. The app has a great mix of common and challenging words."
    },
    {
      name: "Nicolás Sánchez",
      username: "pervasive_inker_83",
      img: "https://randomuser.me/api/portraits/men/41.jpg",
      text: "The progress tracker is fantastic. It’s motivating to see how much I’ve improved over time. The app has a great mix of common and challenging words."
    },
    {
      name: "Noel Jensen",
      username: "nefarious_shop_47",
      img: "https://randomuser.me/api/portraits/men/21.jpg",
      text: "The progress tracker is fantastic. It’s motivating to see how much I’ve improved over time. The app has a great mix of common and challenging words."
    },
    {
      name: "Ahmad Khan",
      username: "antic_circus_76",
      img: "https://randomuser.me/api/portraits/men/14.jpg",
      text: "The progress tracker is fantastic. It’s motivating to see how much I’ve improved over time. The app has a great mix of common and challenging words."
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
              {t.text.split("challenging")[0]}
              <span className="highlight">challenging</span>
              {t.text.split("challenging")[1]}
            </p>

            {/* Divider line */}
            <div className="testimonial-divider"></div>

            <div className="testimonial-footer">
              <img src={t.img} alt={t.name} className="testimonial-avatar" />
              <div>
                <h4 className="testimonial-name">{t.name}</h4>
                <p className="testimonial-username">{t.username}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
