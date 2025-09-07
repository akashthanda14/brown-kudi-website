import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";
import "../Components/SocialSection.css";

export default function SocialSection() {
  const { language } = useLanguage();

  const ownername = {
    english: "Harpal Kaur Dhanjal",
    hindi: "हरपाल कौर धांजल ",
    punjabi: "ਹਰਪਾਲ ਕੌਰ ਧੰਜਲ",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // ✅ Parallax Effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY * 0.4; // speed control
      document.documentElement.style.setProperty("--scrollY", `${scrollY}px`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="social-section">
      {/* Background with Parallax */}
      <div className="social-bg"></div>

      <motion.div
        className="social-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Owner Image */}
        <motion.div className="owner-image" variants={itemVariants}>
          <img src="/img/owner.jpg" alt="Owner" />
        </motion.div>

        {/* Owner Details */}
        <motion.div className="owner-detail" variants={itemVariants}>
          <h2 className="owner-name">{ownername[language]}</h2>
          <p className="owner-title">
            {translations.socialSection.ownerTitle[language]}
          </p>
          <h3 className="social-heading">
            {translations.socialSection.heading[language]}
          </h3>

          {/* Social Links */}
          <motion.div
            className="social-links"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
          >
            <motion.a
              href="http://www.youtube.com/@BrownKudiThewelderGirl"
              target="_blank"
              rel="noreferrer"
              className="social-card youtube"
              variants={itemVariants}
              whileHover={{ scale: 1.08, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="/img/youtube.png" alt="YouTube" />
              <span>YouTube</span>
            </motion.a>

            <motion.a
              href="https://www.instagram.com/brown_kudi1/"
              target="_blank"
              rel="noreferrer"
              className="social-card instagram"
              variants={itemVariants}
              whileHover={{ scale: 1.08, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="/img/instagram.png" alt="Instagram" />
              <span>Instagram</span>
            </motion.a>

            <motion.a
              href="https://www.facebook.com/BrownKudiofficial"
              target="_blank"
              rel="noreferrer"
              className="social-card facebook"
              variants={itemVariants}
              whileHover={{ scale: 1.08, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="/img/facebook.png" alt="Facebook" />
              <span>Facebook</span>
            </motion.a>

            <motion.a
              href="https://snapchat.com/t/dqxVx8h6"
              target="_blank"
              rel="noreferrer"
              className="social-card snapchat"
              variants={itemVariants}
              whileHover={{ scale: 1.08, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="/img/snapchat.png" alt="Snapchat" />
              <span>Snapchat</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
