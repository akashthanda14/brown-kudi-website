import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { 
  Home, 
  Tractor, 
  User, 
  Camera, 
  ChevronDown, 
  Sprout, 
  Wrench, 
  Wheat, 
  Images, 
  Video, 
  PenTool, 
  Mail, 
  Instagram, 
  Facebook, 
  Youtube,
  Menu,
  X,
  Leaf
} from "lucide-react";
import "./Navbar.css";

/**
 * Brown Kudi Navigation Component
 * Features: Glassmorphism design, responsive dropdowns, accessibility-first
 */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { language, setLanguage } = useLanguage();

  // Menu controls with proper cleanup
  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };
  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(current => current === dropdownName ? null : dropdownName);
  };

  // Language handler with dropdown cleanup
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setActiveDropdown(null);
  };

  // Outside click detection for dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.navbar__dropdown-container')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Scroll detection for glassmorphism effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll lock for mobile menu
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <nav 
        className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="navbar__container">
          {/* Brand Logo */}
          <Link 
            to="/" 
            className="navbar__brand" 
            onClick={closeMenu}
            aria-label="Brown Kudi - Home"
          >
            <span className="navbar__brand-text">
              <span className="navbar__brand-brown">Brown</span>
              <span className="navbar__brand-kudi">ਕੁੜੀ</span>
            </span>
            <Sprout className="navbar__brand-icon" size={20} aria-hidden="true" />
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar__nav">
            <ul className="navbar__menu" role="menubar">
              <li className="navbar__item" role="none">
                <Link 
                  to="/" 
                  className="navbar__link"
                  role="menuitem"
                  onClick={closeMenu}
                >
                  <Home className="navbar__link-icon" size={18} aria-hidden="true" />
                  <span>Home</span>
                </Link>
              </li>
              
              <li className="navbar__item navbar__dropdown-container" role="none">
                <button 
                  className={`navbar__link navbar__dropdown-trigger ${activeDropdown === 'farm' ? 'navbar__dropdown-trigger--active' : ''}`} 
                  onClick={() => toggleDropdown('farm')}
                  aria-expanded={activeDropdown === 'farm'}
                  aria-haspopup="true"
                  role="menuitem"
                >
                  <Tractor className="navbar__link-icon" size={18} aria-hidden="true" />
                  <span>Farm Work</span>
                  <ChevronDown className="navbar__chevron" size={14} aria-hidden="true" />
                </button>
                <ul className={`navbar__dropdown ${activeDropdown === 'farm' ? 'navbar__dropdown--visible' : ''}`} role="menu">
                  <li role="none">
                    <Link 
                      to="/tyres" 
                      className="navbar__dropdown-link" 
                      onClick={() => { setActiveDropdown(null); closeMenu(); }}
                      role="menuitem"
                    >
                      <Sprout size={16} aria-hidden="true" />
                      Tyres & Equipment
                    </Link>
                  </li>
                  <li role="none">
                    <Link 
                      to="/about" 
                      className="navbar__dropdown-link" 
                      onClick={() => { setActiveDropdown(null); closeMenu(); }}
                      role="menuitem"
                    >
                      <Wrench size={16} aria-hidden="true" />
                      About Brown Kudi
                    </Link>
                  </li>
                  <li role="none">
                    <Link 
                      to="/contact" 
                      className="navbar__dropdown-link" 
                      onClick={() => { setActiveDropdown(null); closeMenu(); }}
                      role="menuitem"
                    >
                      <Wheat size={16} aria-hidden="true" />
                      Get In Touch
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="navbar__item" role="none">
                <Link 
                  to="/about" 
                  className="navbar__link"
                  role="menuitem"
                  onClick={closeMenu}
                >
                  <User className="navbar__link-icon" size={18} aria-hidden="true" />
                  <span>About</span>
                </Link>
              </li>

              <li className="navbar__item navbar__dropdown-container" role="none">
                <button 
                  className={`navbar__link navbar__dropdown-trigger ${activeDropdown === 'content' ? 'navbar__dropdown-trigger--active' : ''}`} 
                  onClick={() => toggleDropdown('content')}
                  aria-expanded={activeDropdown === 'content'}
                  aria-haspopup="true"
                  role="menuitem"
                >
                  <Camera className="navbar__link-icon" size={18} aria-hidden="true" />
                  <span>Content</span>
                  <ChevronDown className="navbar__chevron" size={14} aria-hidden="true" />
                </button>
                <ul className={`navbar__dropdown ${activeDropdown === 'content' ? 'navbar__dropdown--visible' : ''}`} role="menu">
                  <li role="none">
                    <Link 
                      to="/gallery" 
                      className="navbar__dropdown-link" 
                      onClick={() => { setActiveDropdown(null); closeMenu(); }}
                      role="menuitem"
                    >
                      <Images size={16} aria-hidden="true" />
                      Photo Gallery
                    </Link>
                  </li>
                  <li role="none">
                    <Link 
                      to="/gallery" 
                      className="navbar__dropdown-link" 
                      onClick={() => { setActiveDropdown(null); closeMenu(); }}
                      role="menuitem"
                    >
                      <Video size={16} aria-hidden="true" />
                      Farm Videos
                    </Link>
                  </li>
                  <li role="none">
                    <Link 
                      to="/about" 
                      className="navbar__dropdown-link" 
                      onClick={() => { setActiveDropdown(null); closeMenu(); }}
                      role="menuitem"
                    >
                      <PenTool size={16} aria-hidden="true" />
                      Farm Stories
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Right Actions */}
          <div className="navbar__actions">
            {/* Language Selector */}
            <div className="navbar__language">
              <label htmlFor="navbar-language-select" className="sr-only">
                Select Language
              </label>
              <select
                id="navbar-language-select"
                className="navbar__language-select"
                value={language}
                onChange={(e) => handleLanguageChange(e.target.value)}
                aria-label="Language selection"
              >
                <option value="english">🌾 EN</option>
                <option value="hindi">🌾 हि</option>
                <option value="punjabi">🌾 ਪੰ</option>
              </select>
            </div>

            {/* Social Links */}
            <div className="navbar__socials" aria-label="Social media links">
              <a 
                href="https://instagram.com/brown_kudi1" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow on Instagram" 
                className="navbar__social-link"
              >
                <Instagram size={18} aria-hidden="true" />
              </a>
              <a 
                href="https://www.facebook.com/BrownKudiofficial" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow on Facebook" 
                className="navbar__social-link"
              >
                <Facebook size={18} aria-hidden="true" />
              </a>
              <a 
                href="https://www.youtube.com/@BrownKudiThewelderGirl" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe on YouTube" 
                className="navbar__social-link"
              >
                <Youtube size={18} aria-hidden="true" />
              </a>
            </div>

            {/* Contact CTA */}
            <Link 
              to="/contact" 
              className="navbar__cta"
              aria-label="Contact Brown Kudi"
              onClick={closeMenu}
            >
              <Mail className="navbar__cta-icon" size={16} aria-hidden="true" />
              <span>Get in Touch</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="navbar__toggle"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle mobile menu"
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? (
              <X className="navbar__toggle-icon" size={24} aria-hidden="true" />
            ) : (
              <Menu className="navbar__toggle-icon" size={24} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`navbar__overlay ${isMenuOpen ? 'navbar__overlay--visible' : ''}`} 
        onClick={toggleMenu}
        aria-hidden="true"
      />
      
      {/* Mobile Navigation Panel */}
      <nav 
        id="mobile-navigation"
        className={`navbar__mobile ${isMenuOpen ? 'navbar__mobile--open' : ''}`}
        aria-label="Mobile navigation"
      >
        <div className="navbar__mobile-header">
          <span className="navbar__mobile-brand">
            <span className="navbar__brand-brown">Brown</span>
            <span className="navbar__brand-kudi">ਕੁੜੀ</span>
          </span>
          <Leaf className="navbar__mobile-icon" size={20} aria-hidden="true" />
        </div>
        
        <ul className="navbar__mobile-menu" role="menu">
          <li role="none">
            <Link to="/" className="navbar__mobile-link" onClick={toggleMenu} role="menuitem">
              <Home size={20} aria-hidden="true" />
              Home
            </Link>
          </li>
          <li role="none">
            <Link to="/tyres" className="navbar__mobile-link" onClick={toggleMenu} role="menuitem">
              <Tractor size={20} aria-hidden="true" />
              Tyres
            </Link>
          </li>
          <li role="none">
            <Link to="/about" className="navbar__mobile-link" onClick={toggleMenu} role="menuitem">
              <User size={20} aria-hidden="true" />
              About
            </Link>
          </li>
          <li role="none">
            <Link to="/gallery" className="navbar__mobile-link" onClick={toggleMenu} role="menuitem">
              <Camera size={20} aria-hidden="true" />
              Content
            </Link>
          </li>
          <li role="none">
            <Link to="/contact" className="navbar__mobile-link" onClick={toggleMenu} role="menuitem">
              <Mail size={20} aria-hidden="true" />
              Contact
            </Link>
          </li>
        </ul>
        
        <div className="navbar__mobile-footer">
          <div className="navbar__mobile-socials">
            <a 
              href="https://instagram.com/brown_kudi1" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram" 
              className="navbar__mobile-social"
            >
              <Instagram size={20} aria-hidden="true" />
            </a>
            <a 
              href="https://www.facebook.com/BrownKudiofficial" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook" 
              className="navbar__mobile-social"
            >
              <Facebook size={20} aria-hidden="true" />
            </a>
            <a 
              href="https://www.youtube.com/@BrownKudiThewelderGirl" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube" 
              className="navbar__mobile-social"
            >
              <Youtube size={20} aria-hidden="true" />
            </a>
          </div>
          <p className="navbar__mobile-tagline">Cultivating Dreams • Growing Stories</p>
        </div>
      </nav>
    </>
  );
}
