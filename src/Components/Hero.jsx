import React, { useState, useEffect, useRef, useMemo } from "react";
import { useLanguage } from "../context/LanguageContext"; 
import "./Hero.css";

// Predefine critical colors
const COLORS = {
  leaf: "#6DA34D",
  white: "#FFFFFF"
};

const Hero = () => {
  const { language, setLanguage } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  // Language Dropdown
  function LanguageDropdown({ value, onChange }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const options = [
      { key: 'english', label: 'English' },
      { key: 'hindi', label: 'हिन्दी' },
      { key: 'punjabi', label: 'ਪੰਜਾਬੀ' },
    ];

    useEffect(() => {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) setOpen(false);
      }
      document.addEventListener('click', handleClick);
      return () => document.removeEventListener('click', handleClick);
    }, []);

    return (
      <div className="lang-dropdown" ref={ref}>
        <button
          className="lang-dropdown__button"
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          type="button"
        >
          {options.find(o => o.key === value)?.label || 'Language'}
          <span className="lang-dropdown__caret">▾</span>
        </button>

        {open && (
          <ul className="lang-dropdown__list" role="listbox">
            {options.map(opt => (
              <li
                key={opt.key}
                role="option"
                aria-selected={value === opt.key}
                tabIndex={0}
                className={`lang-dropdown__option ${value === opt.key ? 'selected' : ''}`}
                onClick={() => { onChange(opt.key); setOpen(false); }}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { onChange(opt.key); setOpen(false); } }}
              >
                {opt.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  const translations = {
    english: {
      title: "Brown Kudi",
      subtitle: "Cultivating Dreams, Growing Stories",
      tagline: "From soil to soul, sharing the farmer's journey",
      cta: "Discover Products",
      skipLink: "Skip to Trade Products"
    },
    hindi: {
      title: "ब्राउन कुड़ी",
      subtitle: "सपने उगाना, कहानियां बढ़ाना",
      tagline: "मिट्टी से आत्मा तक, किसान की यात्रा साझा करना",
      cta: "उत्पाद खोजें",
      skipLink: "व्यापार उत्पादों पर जाएं"
    },
    punjabi: {
      title: "ਬ੍ਰਾਊਨ ਕੁੜੀ",
      subtitle: "ਸੁਪਨੇ ਉਗਾਉਣਾ, ਕਹਾਣੀਆਂ ਵਧਾਉਣਾ",
      tagline: "ਮਿੱਟੀ ਤੋਂ ਆਤਮਾ ਤੱਕ, ਕਿਸਾਨ ਦੀ ਯਾਤਰਾ ਸਾਂਝੀ ਕਰਨਾ",
      cta: "ਉਤਪਾਦਾਂ ਦੀ ਖੋਜ ਕਰੋ",
      skipLink: "ਵਪਾਰ ਉਤਪਾਦਾਂ 'ਤੇ ਜਾਓ"
    }
  };

  const t = useMemo(() => translations[language], [language]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const handleCTAClick = () => {
    const tradeSection = document.getElementById('trade-section');
    if (tradeSection) tradeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSkipToProducts = () => {
    const tradeSection = document.getElementById('trade-section');
    if (tradeSection) tradeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header 
      id="hero" 
      className={`hero ${isVisible ? 'hero--visible' : ''}`}
      ref={heroRef}
      role="banner"
      aria-label="Brown Kudi farming influencer homepage"
    >
      {/* Skip Link */}
      <a 
        href="#skip-to-products"
        className="skip-link"
        onClick={(e) => { e.preventDefault(); handleSkipToProducts(); }}
      >
        {t.skipLink}
      </a>

      {/* Hero Background Image with minor black overlay */}
      <div className="hero__background">
        <div
          className="hero__image"
          style={{
            backgroundImage: 'url(https://res.cloudinary.com/dnyv7wabr/image/upload/v1758360653/Screenshot_2025-09-19_134058-min_r9tqyg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -2
          }}
          role="img"
          aria-label="Peaceful farm field background"
        />
        {/* Minor black overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.25)', // 25% black overlay
            zIndex: -1
          }}
          aria-hidden="true"
        />
      </div>

      {/* Hero Content */}
      <div className="hero__content" style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
        <div className="hero__badge">
          <i className="fas fa-seedling hero__badge-icon" aria-hidden="true" />
          <span className="hero__badge-text">The • Welder • Girl</span>
        </div>

        <div className="hero__heading">
          <h1 className="hero__title">
            <span className="hero__title-brown">Brown</span>
            <span className="hero__title-kudi">ਕੁੜੀ</span>
          </h1>
          <h2 className="hero__subtitle">{t.subtitle}</h2>
          <p className="hero__tagline">{t.tagline}</p>
        </div>

        <div className="hero__actions">
          <button className="hero__cta" onClick={handleCTAClick}>
            <i className="fas fa-tractor hero__cta-icon" aria-hidden="true" />
            <span>{t.cta}</span>
          </button>
          <div className="hero__language">
            <label className="sr-only">Select Language</label>
            <LanguageDropdown value={language} onChange={(v) => setLanguage(v)} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
