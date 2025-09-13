import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
import Navbar from "./Navbar";

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const handleCTAClick = () => {
    const hero = document.getElementById("hero");
    if (hero) {
      hero.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
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
            <p className="brand-description">
              Pioneering agricultural innovation through engineering excellence,
              empowering farmers with cutting-edge technology and sustainable
              solutions.
            </p>
            <div className="footer-contact-info">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>brownkuditeam@gmail.com</span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+91 8264468285 ,+91 9855119079</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>Village Gura, Punjab, 144418</span>
              </div>
            </div>
          </motion.div>

          {/* Navigation Columns */}
          <motion.div className="footer-columns" variants={itemVariants}>
            <div className="footer-column">
              <h3>Use Full Page</h3>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/tyres">Tyres & Equipment</Link></li>
                <li><Link to="/gallery">Our Gallery</Link></li>
                <li><Link to="/tradesection">Products</Link></li>
                <li><Link to="/social">Social Media</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Importents</h3>
              <ul>
                <li><Link to="/testmonials">Testmonials</Link></li>
                <li><Link to="/tradesection">Agricultural Tools</Link></li>
                <li><Link to="/tyres">Tyre Solutions</Link></li>
                <li><Link to="/agriequipments">Agri Inport/Export</Link></li>
                <li><Link to="/agrijourney">AgriJourney</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Resources</h3>
              <ul>
                <li><Link to="/blog">Blog & Insights</Link></li>
                <li><Link to="/case-studies">Case Studies</Link></li>
                <li><Link to="/tutorials">How-to Guides</Link></li>
                <li><Link to="/downloads">Downloads</Link></li>
                <li><Link to="/support">Support Center</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Connect</h3>
              <ul>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/partnerships">Partnerships</Link></li>
                <li><Link to="/newsletter">Newsletter</Link></li>
                <li><Link to="/events">Events</Link></li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Social & Legal Section */}
      <motion.div className="footer-bottom" variants={itemVariants}>
        <div className="footer-bottom-content">
          <div className="footer-social">
            <span className="social-label">Follow Our Journey</span>

            {/* Scroll-to-Top Button (अब हमेशा footer में रहेगा) */}
            <button
              className="scroll-top-btn"
              aria-label="Back to top"
              onClick={handleCTAClick}
            >
              <FaArrowRight className="scroll-top-icon" />
            </button>

            <div className="social-links">
              <motion.a
                href="https://www.facebook.com/BrownKudiofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Follow on Facebook"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFacebookF />
              </motion.a>
              <motion.a
                href="https://instagram.com/brown_kudi1"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Follow on Instagram"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="https://www.youtube.com/@BrownKudiThewelderGirl"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Subscribe on YouTube"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaYoutube />
              </motion.a>
            </div>
          </div>

          <div className="footer-legal">
            <p className="copyright">
              © {new Date().getFullYear()} Brown Kudi. All rights reserved.
            </p>
            <div className="legal-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/cookies">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
