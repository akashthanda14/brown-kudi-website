import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import "../Components/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p className="footer-heading">
          Growing the Future of Farming with Innovation, Sustainability, and Smart
          Technology – Connecting Farmers to a Smarter Tomorrow.
        </p>

        <div className="footer-actions">
          <Link to="/contact" className="contact-btn">
              Contact Us <span>→</span>
        
          </Link>

          <div className="social-links">
            <a href="#" className="social-btn"><FaFacebookF /></a>
            <a href="#" className="social-btn"><FaInstagram /></a>
            <a href="#" className="social-btn"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="footer-middle">
  <div className="brand-text">
    <span className="brand-english">Brown</span>
    <span className="brand-punjabi">ਕੁੜੀ</span>
  </div>

  <div className="footer-columns">
    <div>
      <h3>Company</h3>
      <ul>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/tyres"> Tyres & Equipment</Link></li>
        <li><Link to="/gallery">Our Gallery</Link></li>
        <li><Link to="/">Social Media</Link></li>
      </ul>
    </div>

    <div>
      <h3>Solutions</h3>
      <ul>
        <li><Link to="/tech">Our Technologies</Link></li>
        <li><Link to="/precision">Precision Farming</Link></li>
        <li><Link to="/irrigation">Smart Irrigation</Link></li>
        <li><Link to="/automation">Automation & AI</Link></li>
      </ul>
    </div>

    <div>
      <h3>Resources</h3>
      <ul>
        <li><Link to="/blog">Blog & News</Link></li>
        <li><Link to="/case-studies">Case Studies</Link></li>
        <li><Link to="/reports">Sustainability Reports</Link></li>
        <li><Link to="/faqs">FAQs</Link></li>
      </ul>
    </div>
  </div>
</div>

      <div className="footer-bottom">
        <p>Brown Kudi © 2024. All rights reserved.</p>
        <div className="policies">
          <Link to="/privacy">Privacy & Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
