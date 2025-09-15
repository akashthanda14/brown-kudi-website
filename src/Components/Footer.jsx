import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaArrowRight,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";
import "../Components/Footer.css";

// ✅ Multi-language text object
const footerText = {
  follow: {
    english: "Follow Our Journey",
    hindi: "हमारी यात्रा का अनुसरण करें",
    punjabi: "ਸਾਡੀ ਯਾਤਰਾ ਦਾ ਪਾਲਣ ਕਰੋ",
  },
  useful: { english: "Useful Pages", hindi: "उपयोगी पृष्ठ", punjabi: "ਲਾਭਕਾਰੀ ਪੰਨੇ" },
  important: { english: "Important", hindi: "महत्वपूर्ण", punjabi: "ਮਹੱਤਵਪੂਰਨ" },
  equipments: { english: "Main Equipments", hindi: "मुख्य उपकरण", punjabi: "ਮੁੱਖ ਉਪਕਰਣ" },
  connect: { english: "Connect", hindi: "संपर्क करें", punjabi: "ਜੁੜੋ" },

  // Brand description
  brandDesc: {
    english:
      "Pioneering agricultural innovation through engineering excellence, empowering farmers with cutting-edge technology and sustainable solutions.",
    hindi:
      "कृषि नवाचार को इंजीनियरिंग उत्कृष्टता के माध्यम से आगे बढ़ाते हुए, किसानों को अत्याधुनिक तकनीक और टिकाऊ समाधानों से सशक्त बनाना।",
    punjabi:
      "ਖੇਤੀਬਾੜੀ ਵਿੱਚ ਨਵੀਨਤਾ ਨੂੰ ਇੰਜੀਨੀਅਰਿੰਗ ਮਹਾਨਤਾ ਰਾਹੀਂ ਅੱਗੇ ਵਧਾਉਂਦੇ ਹੋਏ, ਕਿਸਾਨਾਂ ਨੂੰ ਆਧੁਨਿਕ ਤਕਨਾਲੋਜੀ ਅਤੇ ਟਿਕਾਊ ਹੱਲਾਂ ਨਾਲ ਸਸ਼ਕਤ ਬਣਾਉਣਾ।",
  },
    // ✅ Address multi-language
  address: {
    english: "Village Gura, Punjab, 144418",
    hindi: "गाँव गुड़ा, पंजाब, 144418",
    punjabi: "ਪਿੰਡ ਗੁਰਾ, ਪੰਜਾਬ, 144418",
  },

  // Links multi-language
  links: {
    about: { english: "About Us", hindi: "हमारे बारे में", punjabi: "ਸਾਡੇ ਬਾਰੇ" },
    tyres: { english: "Tyres & Equipment", hindi: "टायर और उपकरण", punjabi: "ਟਾਇਰ ਅਤੇ ਉਪਕਰਣ" },
    gallery: { english: "Our Gallery", hindi: "हमारी गैलरी", punjabi: "ਸਾਡੀ ਗੈਲਰੀ" },
    products: { english: "Products", hindi: "उत्पाद", punjabi: "ਉਤਪਾਦ" },
    social: { english: "Social Media", hindi: "सोशल मीडिया", punjabi: "ਸੋਸ਼ਲ ਮੀਡੀਆ" },

    testimonials: { english: "Testimonials", hindi: "प्रशंसापत्र", punjabi: "ਗਵਾਹੀਆਂ" },
    tools: { english: "Agricultural Tools", hindi: "कृषि उपकरण", punjabi: "ਖੇਤੀਬਾੜੀ ਦੇ ਸੰਦ" },
    tyresol: { english: "Tyre Solutions", hindi: "टायर समाधान", punjabi: "ਟਾਇਰ ਹੱਲ" },
    import: { english: "Agri Import/Export", hindi: "कृषि आयात/निर्यात", punjabi: "ਖੇਤੀਬਾੜੀ ਆਯਾਤ/ਨਿਰਯਾਤ" },
    journey: { english: "Agri Journey", hindi: "कृषि यात्रा", punjabi: "ਖੇਤੀਬਾੜੀ ਯਾਤਰਾ" },

    disc: { english: "Disc Harrow", hindi: "डिस्क हैरो", punjabi: "ਡਿਸਕ ਹੈਰੋ" },
    subsoiler: { english: "Subsoiler", hindi: "सबसोइलर", punjabi: "ਸਬਸੋਇਲਰ" },
    seeder: { english: "Super Seeder", hindi: "सुपर सीडर", punjabi: "ਸੁਪਰ ਸੀਡਰ" },
    harrow: { english: "Hydraulic Harrow", hindi: "हाइड्रॉलिक हैरो", punjabi: "ਹਾਈਡ੍ਰੌਲਿਕ ਹੈਰੋ" },
    trolly: { english: "Trolly", hindi: "ट्रॉली", punjabi: "ਟਰੌਲੀ" },

    footprints: { english: "Social Footprints", hindi: "सामाजिक पदचिह्न", punjabi: "ਸਮਾਜਿਕ ਨਿਸ਼ਾਨ" },
    contact: { english: "Contact Us", hindi: "संपर्क करें", punjabi: "ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ" },
  },

  // Legal text
  copyright: {
    english: "All rights reserved.",
    hindi: "सभी अधिकार सुरक्षित।",
    punjabi: "ਸਾਰੇ ਅਧਿਕਾਰ ਰਾਖਵੇਂ ਹਨ।",
  },
  privacy: {
    english: "Privacy Policy",
    hindi: "गोपनीयता नीति",
    punjabi: "ਪਰਦੇਦਾਰੀ ਨੀਤੀ",
  },
  terms: {
    english: "Terms of Service",
    hindi: "सेवा की शर्तें",
    punjabi: "ਸੇਵਾ ਦੀਆਂ ਸ਼ਰਤਾਂ",
  },
  cookies: {
    english: "Cookie Policy",
    hindi: "कुकी नीति",
    punjabi: "ਕੂਕੀ ਨੀਤੀ",
  },
};

const Footer = () => {
  const { language } = useLanguage();

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleCTAClick = () => {
    const hero = document.getElementById("hero");
    if (hero) hero.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.footer
      className="footer"
      id="footer"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Main Content Section */}
      <motion.div className="footer-main" variants={itemVariants}>
        <div className="footer-content">
          {/* Brand Section */}
          <motion.div className="footer-brand" variants={itemVariants}>
            <div className="brand-text">
              <span className="brand-english">Brown</span>
              <span className="brand-punjabi">ਕੁੜੀ</span>
            </div>
            <p className="brand-description">{footerText.brandDesc[language]}</p>
            <div className="footer-contact-info">
              <div className="contact-item"><FaEnvelope className="contact-icon" /><span>brownkuditeam@gmail.com</span></div>
              <div className="contact-item"><FaPhone className="contact-icon" /><span>+91 8264468285 ,+91 9855119079</span></div>
              <div className="contact-item"><FaMapMarkerAlt className="contact-icon" /><span>{footerText.address[language]}</span></div>
            </div>
          </motion.div>

          {/* Navigation Columns */}
          <motion.div className="footer-columns" variants={itemVariants}>
            <div className="footer-column">
              <h3>{footerText.useful[language]}</h3>
              <ul>
                <li><Link to="/about">{footerText.links.about[language]}</Link></li>
                <li><Link to="/tyres">{footerText.links.tyres[language]}</Link></li>
                <li><Link to="/gallery">{footerText.links.gallery[language]}</Link></li>
                <li><Link to="/tradesection">{footerText.links.products[language]}</Link></li>
                <li><Link to="/social">{footerText.links.social[language]}</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>{footerText.important[language]}</h3>
              <ul>
                <li><Link to="/testmonials">{footerText.links.testimonials[language]}</Link></li>
                <li><Link to="/tradesection">{footerText.links.tools[language]}</Link></li>
                <li><Link to="/tyres">{footerText.links.tyresol[language]}</Link></li>
                <li><Link to="/agriequipments">{footerText.links.import[language]}</Link></li>
                <li><Link to="/agrijourney">{footerText.links.journey[language]}</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>{footerText.equipments[language]}</h3>
              <ul>
                <li><Link to="/product-detail/3">{footerText.links.disc[language]}</Link></li>
                <li><Link to="/product-detail/5">{footerText.links.subsoiler[language]}</Link></li>
                <li><Link to="/product-detail/1">{footerText.links.seeder[language]}</Link></li>
                <li><Link to="/product-detail/7">{footerText.links.harrow[language]}</Link></li>
                <li><Link to="/product-detail/8">{footerText.links.trolly[language]}</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>{footerText.connect[language]}</h3>
              <ul>
                <li><Link to="/socialfootprints">{footerText.links.footprints[language]}</Link></li>
                <li><Link to="/contact">{footerText.links.contact[language]}</Link></li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Social & Legal Section */}
      <motion.div className="footer-bottom" variants={itemVariants}>
        <div className="footer-bottom-content">
          <div className="footer-social">
            <span className="social-label">{footerText.follow[language]}</span>
            <button className="scroll-top-btn" aria-label="Back to top" onClick={handleCTAClick}>
              <FaArrowRight className="scroll-top-icon" />
            </button>
            <div className="social-links">
              <motion.a href="https://www.facebook.com/BrownKudiofficial" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Follow on Facebook" whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}><FaFacebookF /></motion.a>
              <motion.a href="https://instagram.com/brown_kudi1" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Follow on Instagram" whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}><FaInstagram /></motion.a>
              <motion.a href="https://www.youtube.com/@BrownKudiThewelderGirl" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Subscribe on YouTube" whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}><FaYoutube /></motion.a>
            </div>
          </div>
          <div className="footer-legal">
            <p className="copyright">
              © {new Date().getFullYear()} Brown Kudi. {footerText.copyright[language]}
            </p>
            <div className="legal-links">
              <Link to="">{footerText.privacy[language]}</Link>
              <Link to="">{footerText.terms[language]}</Link>
              <Link to="">{footerText.cookies[language]}</Link>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
