import React from "react";
import { motion } from "framer-motion";
import "./FeedbackSection.css";

export default function FeedbackSection() {
  const feedbacks = [
    {
      name: "Emily Johnson",
      country: "USA",
      feedback:
        "Brown Kudi products are simply amazing! Authentic taste and top quality. My family loves them.",
      img: "/img/f1.jpg",
    },
    {
      name: "Arjun Mehra",
      country: "Canada",
      feedback:
        "Consistent quality every time. The spices and flavors remind me of home. Highly recommended!",
      img: "/img/f2.jpg",
    },
    {
      name: "Sophia Lee",
      country: "Australia",
      feedback:
        "Absolutely love the packaging and freshness. Brown Kudi is my go-to brand now!",
      img: "/img/f3.jpg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="feedback-section">
      <div className="feedback-bg"></div>

      <motion.div
        className="feedback-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="feedback-heading">What Our Customers Say</h2>

        <div className="feedback-grid">
          {feedbacks.map((fb, index) => (
            <motion.div
              key={index}
              className="feedback-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="client-img">
                <img src={fb.img} alt={fb.name} />
              </div>
              <p className="client-feedback">“{fb.feedback}”</p>
              <h4 className="client-name">{fb.name}</h4>
              <span className="client-country">{fb.country}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
