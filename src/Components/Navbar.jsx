import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import {
  Home,
  Tractor,
  User,
  Camera,
  ChevronDown,
  Images,
  Video,
  PenTool,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  Menu,
  X,
  Leaf,
  Phone,        // ✅ Contact icon
  Share2,       // ✅ Social Media icon
  Circle,       // ✅ Tyre icon
  Truck,
  Globe,       // ✅ Added Globe icon
  Share
} from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { language, setLanguage } = useLanguage();

  // Menu controls
  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };
  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(current => current === dropdownName ? null : dropdownName);
  };

  // Language handler
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setActiveDropdown(null);
  };

  // Outside click detection
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.navbar__dropdown-container')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  // Keyboard support
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

  // --- inside Navbar component ---

  // ✅ New state for mobile dropdowns
  const [openMobileSection, setOpenMobileSection] = useState(null);

  const toggleMobileSection = (section) => {
    setOpenMobileSection((prev) => (prev === section ? null : section));
  };


  return (
    <>
      <nav
        id="navbar"
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
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar__nav">
            <ul className="navbar__menu" role="menubar">
              {/* ✅ Agriculture Equipment Dropdown */}
              <li className="navbar__item navbar__dropdown-container" role="none">
                <button
                  className={`navbar__link navbar__dropdown-trigger ${activeDropdown === 'equipment' ? 'navbar__dropdown-trigger--active' : ''}`}
                  onClick={() => toggleDropdown('equipment')}
                  aria-expanded={activeDropdown === 'equipment'}
                  aria-haspopup="true"
                  role="menuitem"
                >
                  <span>Agri Equipment</span>
                  <ChevronDown className="navbar__chevron" size={14} aria-hidden="true" />
                </button>
                <ul className={`navbar__dropdown ${activeDropdown === 'equipment' ? 'navbar__dropdown--visible' : ''}`} role="menu">
                  <li role="none">
                    <Link
                      to="/product-detail/1"
                      className="navbar__dropdown-link"
                      onClick={() => { setActiveDropdown(null); closeMenu(); }}
                      role="menuitem"
                    >
                      Super Seeder
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      to="/product-detail/2"
                      className="navbar__dropdown-link"
                      onClick={() => { setActiveDropdown(null); closeMenu(); }}
                      role="menuitem"
                    >
                      Reversible MB Plough
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      to="/product-detail/3"
                      className="navbar__dropdown-link"
                      onClick={() => { setActiveDropdown(null); closeMenu(); }}
                      role="menuitem"
                    >
                      Disc Harrow
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      to="/product-detail/4"
                      className="navbar__dropdown-link"
                      onClick={() => { setActiveDropdown(null); closeMenu(); }}
                      role="menuitem"
                    >
                      Rotary Tiller
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      to="/product-detail/5"
                      className="navbar__dropdown-link"
                      onClick={() => { setActiveDropdown(null); closeMenu(); }}
                      role="menuitem"
                    >
                      Subsoiler
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      to="/product-detail/6"
                      className="navbar__dropdown-link"
                      onClick={() => { setActiveDropdown(null); closeMenu(); }}
                      role="menuitem"
                    >
                      Disc Plough
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      to="/product-detail/7"
                      className="navbar__dropdown-link"
                      onClick={() => { setActiveDropdown(null); closeMenu(); }}
                      role="menuitem"
                    >
                      Hydraulic
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      to="/product-detail/8"
                      className="navbar__dropdown-link"
                      onClick={() => { setActiveDropdown(null); closeMenu(); }}
                      role="menuitem"
                    >
                      Tractor Trolley
                    </Link>
                  </li>
                </ul>
              </li>

              {/* ✅ Tyres Dropdown */}
              <li className="navbar__item navbar__dropdown-container" role="none">
                <button
                  className={`navbar__link navbar__dropdown-trigger ${activeDropdown === 'tyres' ? 'navbar__dropdown-trigger--active' : ''}`}
                  onClick={() => toggleDropdown('tyres')}
                  aria-expanded={activeDropdown === 'tyres'}
                  aria-haspopup="true"
                  role="menuitem"
                >
                  <span>Tyres</span>
                  <ChevronDown className="navbar__chevron" size={14} aria-hidden="true" />
                </button>
                <ul className={`navbar__dropdown ${activeDropdown === 'tyres' ? 'navbar__dropdown--visible' : ''}`} role="menu">
                  <li role="none">
                    <Link
                      to="/tyres"
                      className="navbar__dropdown-link"
                      onClick={() => { setActiveDropdown(null); closeMenu(); }}
                      role="menuitem"
                    >
                      All Season Tyre
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      to="/tyres"
                      className="navbar__dropdown-link"
                      onClick={() => { setActiveDropdown(null); closeMenu(); }}
                      role="menuitem"
                    >
                      Performance Tyre
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      to="/tyres"
                      className="navbar__dropdown-link"
                      onClick={() => { setActiveDropdown(null); closeMenu(); }}
                      role="menuitem"
                    >
                      Off-Road Tyre
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      to="/tyres"
                      className="navbar__dropdown-link"
                      onClick={() => { setActiveDropdown(null); closeMenu(); }}
                      role="menuitem"
                    >
                      Eco Tyre
                    </Link>
                  </li>
                </ul>
              </li>

              {/* ✅ Work Dropdown */}
              <li className="navbar__item navbar__dropdown-container" role="none">
                <button
                  className={`navbar__link navbar__dropdown-trigger ${activeDropdown === 'work' ? 'navbar__dropdown-trigger--active' : ''}`}
                  onClick={() => toggleDropdown('work')}
                  aria-expanded={activeDropdown === 'work'}
                  aria-haspopup="true"
                  role="menuitem"
                >
                  <span>Work</span>
                  <ChevronDown className="navbar__chevron" size={14} aria-hidden="true" />
                </button>
                <ul className={`navbar__dropdown ${activeDropdown === 'work' ? 'navbar__dropdown--visible' : ''}`} role="menu">
                  <li role="none">
                    <Link
                      to="/social"
                      className="navbar__dropdown-link"
                      onClick={() => { setActiveDropdown(null); closeMenu(); }}
                      role="menuitem"
                    >
                      <Share2 size={16} aria-hidden="true" />
                      Social Media
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      to="/export-section"
                      className="navbar__dropdown-link"
                      onClick={() => { setActiveDropdown(null); closeMenu(); }}
                      role="menuitem"
                    >
                      <Globe size={16} aria-hidden="true" />
                      Global Export
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      to="/agriequipments"
                      className="navbar__dropdown-link"
                      onClick={() => { setActiveDropdown(null); closeMenu(); }}
                      role="menuitem"
                    >
                      <Globe size={16} aria-hidden="true" />
                      Agri Inport/Export
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
        className={`navbar__mobile ${isMenuOpen ? "navbar__mobile--open" : ""}`}
        aria-label="Mobile navigation"
      >
        <div className="navbar__mobile-header">
          <span className="navbar__mobile-brand">
            <span className="navbar__brand-brown">Brown</span>
            <span className="navbar__brand-kudi">ਕੁੜੀ</span>
          </span>
        </div>

        <ul className="navbar__mobile-menu" role="menu">
          <li role="none">
            <Link
              to="/"
              className="navbar__mobile-link"
              onClick={toggleMenu}
              role="menuitem"
            >
              <Home size={20} aria-hidden="true" />
              Home
            </Link>
          </li>

          {/* ✅ Agriculture Equipment Section */}
          <li role="none" className="navbar__mobile-section">
            <button
              className="navbar__mobile-section-title"
              onClick={() => toggleMobileSection("equipment")}
            >
              <Tractor size={18} aria-hidden="true" />
              Agri Equipment
              <ChevronDown
                className={`chevron ${openMobileSection === "equipment" ? "rotate" : ""
                  }`}
                size={16}
              />
            </button>
            <ul
              className={`navbar__mobile-submenu ${openMobileSection === "equipment" ? "open" : ""
                }`}
            >
              <li>
                <Link to="/product-detail/1" className="navbar__mobile-sublink" onClick={toggleMenu}>
                  Super Seeder
                </Link>
              </li>
              <li>
                <Link to="/product-detail/2" className="navbar__mobile-sublink" onClick={toggleMenu}>
                  Reversible MB Plough
                </Link>
              </li>
              <li>
                <Link to="/product-detail/3" className="navbar__mobile-sublink" onClick={toggleMenu}>
                  Disc Harrow
                </Link>
              </li>
              <li>
                <Link to="/product-detail/4" className="navbar__mobile-sublink" onClick={toggleMenu}>
                  Rotary Tiller
                </Link>
              </li>
              <li>
                <Link to="/product-detail/5" className="navbar__mobile-sublink" onClick={toggleMenu}>
                  Subsoiler
                </Link>
              </li>
              <li>
                <Link to="/product-detail/6" className="navbar__mobile-sublink" onClick={toggleMenu}>
                  Disc Plough
                </Link>
              </li>
              <li>
                <Link to="/product-detail/7" className="navbar__mobile-sublink" onClick={toggleMenu}>
                  Hydraulic
                </Link>
              </li>
              <li>
                <Link to="/product-detail/8" className="navbar__mobile-sublink" onClick={toggleMenu}>
                  Tractor Trolley
                </Link>
              </li>
            </ul>
          </li>

          {/* ✅ Tyres Section */}
          <li role="none" className="navbar__mobile-section">
            <button
              className="navbar__mobile-section-title"
              onClick={() => toggleMobileSection("tyres")}
            >
              <Circle size={18} aria-hidden="true" />
              Tyres
              <ChevronDown
                className={`chevron ${openMobileSection === "tyres" ? "rotate" : ""
                  }`}
                size={16}
              />
            </button>
            <ul
              className={`navbar__mobile-submenu ${openMobileSection === "tyres" ? "open" : ""
                }`}
            >
              <li>
                <Link to="/tyres" className="navbar__mobile-sublink" onClick={toggleMenu}>
                  All Season Tyre
                </Link>
              </li>
              <li>
                <Link to="/tyres" className="navbar__mobile-sublink" onClick={toggleMenu}>
                  Performance Tyre
                </Link>
              </li>
              <li>
                <Link to="/tyres" className="navbar__mobile-sublink" onClick={toggleMenu}>
                  Off-Road Tyre
                </Link>
              </li>
              <li>
                <Link to="/tyres" className="navbar__mobile-sublink" onClick={toggleMenu}>
                  Eco Tyre
                </Link>
              </li>
            </ul>
          </li>

          <li role="none">
            <Link to="/about" className="navbar__mobile-link" onClick={toggleMenu} role="menuitem">
              <User size={20} aria-hidden="true" />
              About
            </Link>
          </li>
          <li role="none">
            <Link to="/contact" className="navbar__mobile-link" onClick={toggleMenu} role="menuitem">
              <Mail size={20} aria-hidden="true" />
              Contact
            </Link>
          </li>
        </ul>
      </nav>

    </>
  );
}
