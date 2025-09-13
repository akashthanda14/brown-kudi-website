import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./AgriJourney.css";
import Footer from "../Components/Footer";
import { useScrollToTop } from "../hooks/useScrollToTop";

const AgriJourney = () => {
  const navigate = useNavigate();
  useScrollToTop();

  const handleNavigate = () => {
    navigate("/products");
  };

  const benefits = [
    { icon: "🚜", title: "Quality Equipment", desc: "Premium tyres & machinery from Australia/Canada" },
    { icon: "📈", title: "Proven Results", desc: "95% customer satisfaction rate" },
    { icon: "🌍", title: "International Trade", desc: "Direct imports from 12+ countries" },
  ];

  return (
    <>
      <div className="journey-container">
        {/* Badge */}
        <motion.div
          className="journey-badge"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          🚀 START YOUR AGRICULTURAL JOURNEY
        </motion.div>

        {/* Title */}
        <motion.h2
          className="journey-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ready to <span>Transform</span> Your Agriculture?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="journey-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Join thousands of farmers worldwide who trust Brown Kudi for innovative agricultural solutions, sustainable practices, and exceptional results
        </motion.p>

        {/* Benefits */}
        <motion.div
          className="journey-benefits"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="journey-benefit-card"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
            >
              <div className="journey-benefit-icon">{benefit.icon}</div>
              <h4>{benefit.title}</h4>
              <p>{benefit.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="journey-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.button
            className="btn-primary"
            onClick={handleNavigate}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get Started Today</span> 🚀
          </motion.button>

          <motion.button
            className="btn-outline"
            onClick={() => navigate("/gallery")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View Our Work</span> 📸
          </motion.button>

          <motion.button
            className="btn-outline"
            onClick={() => navigate("/contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Contact Us</span> 💬
          </motion.button>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default AgriJourney;
