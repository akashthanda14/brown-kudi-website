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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const expertiseData = {
    english: {
      title: "Premium Tyre Manufacturing & Export",
      subtitle: "Crafting Excellence Since 2020", 
      features: [
        { icon: "🏭", text: "State-of-the-art manufacturing facility" },
        { icon: "🌍", text: "Exporting to Canada, Australia & USA" },
        { icon: "🏆", text: "ISO 9001:2015 certified quality standards" },
        { icon: "⚡", text: "15+ years of expertise and since 2020 both are contradicting itself" }
      ]
    },
    hindi: {
      title: "प्रीमियम टायर निर्माण और निर्यात",
      subtitle: "2008 से उत्कृष्टता का निर्माण",
      features: [
        { icon: "🏭", text: "अत्याधुनिक विनिर्माण सुविधा" },
        { icon: "🌍", text: "कनाडा, ऑस्ट्रेलिया और अमेरिका में निर्यात" },
        { icon: "🏆", text: "ISO 9001:2015 प्रमाणित गुणवत्ता मानक" },
        { icon: "⚡", text: "15+ वर्षों का अनुभव और 2020 से कार्य — दोनों एक-दूसरे का विरोध करते हैं।" }
      ]
    },
    punjabi: {
      title: "ਪ੍ਰੀਮੀਅਮ ਟਾਇਰ ਨਿਰਮਾਣ ਅਤੇ ਨਿਰਯਾਤ",
      subtitle: "2008 ਤੋਂ ਉਤਕ੍ਰਿਸ਼ਟਤਾ ਦਾ ਨਿਰਮਾਣ",
      features: [
        { icon: "🏭", text: "ਅਤਿ-ਆਧੁਨਿਕ ਨਿਰਮਾਣ ਸਹੂਲਤ" },
        { icon: "🌍", text: "ਕੈਨੇਡਾ, ਆਸਟ੍ਰੇਲੀਆ ਅਤੇ ਅਮਰੀਕਾ ਵਿੱਚ ਨਿਰਯਾਤ" },
        { icon: "🏆", text: "ISO 9001:2015 ਪ੍ਰਮਾਣਿਤ ਗੁਣਵੱਤਾ ਮਾਪਦੰਡ" },
        { icon: "⚡", text: "15+ ਸਾਲਾਂ ਦਾ ਤਜਰਬਾ ਅਤੇ 2020 ਤੋਂ ਕੰਮ — ਦੋਵੇਂ ਆਪਸ ਵਿੱਚ ਵਿਰੋਧੀ ਹਨ।" }
      ]
    }
  };

  const tyreTypes = [
    {
      name: "All Season",
      description: "Year-round performance & durability",
      image: "🌤️"
    },
    {
      name: "Performance",
      description: "High-speed handling & control", 
      image: "🏁"
    },
    {
      name: "Off-Road",
      description: "Rugged terrain specialists",
      image: "🏔️"
    },
    {
      name: "Eco-Friendly",
      description: "Fuel efficient & sustainable",
      image: "🌱"
    }
  ];

  return (
    <>
      <section id="tyres" className="tyre-section">
        <div className="tyre-container">
          {/* Left - Tyre Image with Stats and CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className="tyre-image-section"
          >
            {/* Stats Row - Above Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="stats-row"
            >
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Tyres Exported</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3</span>
                <span className="stat-label">Countries</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </motion.div>

            {/* Tyre Image */}
            <div className="tyre-image">
              <img 
                src="https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750716/browntyre_zsfk2x.png" 
                alt="Brown Kudi Premium Tyres" 
              />
              
              {/* Export Badges */}
              <div className="export-badges">
                <span className="export-badge">🇨🇦 CA</span>
                <span className="export-badge">🇦🇺 AU</span>  
                <span className="export-badge">🇺🇸 US</span>
              </div>
            </div>

            {/* CTA Button - Below Image */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              onClick={handleMoreInfoClick}
              className="cta-button"
            >
              {translations.tyreSection.button[language]}
            </motion.button>
          </motion.div>

          {/* Right - Enhanced Content */}
          <div className="tyre-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
              className="content-header"
            >
              <span className="expertise-subtitle">{expertiseData[language].subtitle}</span>
              <h2 className="relative inline-block">
                {translations.tyreSection.title[language]}
                
                {/* Underline Animation */}
                <motion.span
                  className="absolute left-0 -bottom-1 h-1 bg-yellow-500 rounded"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
                  viewport={{ once: true }}
                />
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="main-description"
            >
              {translations.tyreSection.description[language]}
            </motion.p>

            {/* Expertise Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="expertise-features"
            >
              {expertiseData[language].features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <span className="feature-icon">{feature.icon}</span>
                  <span className="feature-text">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Tyre Types Grid */}
            <motion.div
              id="product-cards"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="tyre-types-grid"
              role="region"
              aria-labelledby="product-cards-heading"
              tabIndex="-1"
            >
              <h3 id="product-cards-heading" className="sr-only">Product Cards Section</h3>
              {tyreTypes.map((type, index) => (
                <div key={index} className="tyre-type-card">
                  <span className="type-icon">{type.image}</span>
                  <h4>{type.name}</h4>
                  <p>{type.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
