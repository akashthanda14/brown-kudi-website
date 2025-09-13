import React, { useState, useEffect, useRef, useMemo } from "react";
import "./Hero.css";
import { useLanguage } from "../context/LanguageContext"; 

const Hero = () => {
  const { language, setLanguage } = useLanguage();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [videoBrightness, setVideoBrightness] = useState('normal');
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Performance check - disable animations on low-end devices
  const isLowEndDevice = useMemo(() => {
    // Check for performance hints
    if (typeof navigator !== 'undefined') {
      // Check device memory (if available)
      const deviceMemory = navigator.deviceMemory;
      if (deviceMemory && deviceMemory < 4) return true;
      
      // Check for mobile devices
      const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      return isMobile;
    }
    return false;
  }, []);

  const translations = {
    english: { 
      title: "Brown Kudi",
      subtitle: "Cultivating Dreams, Growing Stories",
      tagline: "From soil to soul, sharing the farmer's journey",
      cta: "Explore My Work"
    },
    hindi: { 
      title: "ब्राउन कुड़ी", 
      subtitle: "सपने उगाना, कहानियां बढ़ाना",
      tagline: "मिट्टी से आत्मा तक, किसान की यात्रा साझा करना",
      cta: "मेरे खेत देखें"
    },
    punjabi: { 
      title: "ਬ੍ਰਾਊਨ ਕੁੜੀ", 
      subtitle: "ਸੁਪਨੇ ਉਗਾਉਣਾ, ਕਹਾਣੀਆਂ ਵਧਾਉਣਾ",
      tagline: "ਮਿੱਟੀ ਤੋਂ ਆਤਮਾ ਤੱਕ, ਕਿਸਾਨ ਦੀ ਯਾਤਰਾ ਸਾਂਝੀ ਕਰਨਾ",
      cta: "ਮੇਰੇ ਖੇਤ ਵੇਖੋ"
    },
  };

  // Memoize translation lookup to prevent object access on every render
  const t = useMemo(() => translations[language], [language]);

  // Intersection Observer for entrance animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Video brightness detection for accessibility - optimized for performance
  useEffect(() => {
    if (!videoLoaded || !videoRef.current || isLowEndDevice) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = 100;
    canvas.height = 56;

    const checkBrightness = () => {
      try {
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        
        let totalBrightness = 0;
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          totalBrightness += (r * 0.299 + g * 0.587 + b * 0.114);
        }
        
        const avgBrightness = totalBrightness / (data.length / 4);
        setVideoBrightness(avgBrightness > 170 ? 'bright' : 'normal');
      } catch (e) {
        // Silently handle canvas errors
      }
    };

    // Performance optimization: longer intervals for low-end devices
    const interval = isLowEndDevice ? 3000 : 1000;
    
    const scheduleCheck = () => {
      checkBrightness();
      setTimeout(() => {
        if (videoLoaded) {
          requestAnimationFrame(scheduleCheck);
        }
      }, interval);
    };

    const id = requestAnimationFrame(scheduleCheck);
    return () => cancelAnimationFrame(id);
  }, [videoLoaded, isLowEndDevice]);

  // Gentle parallax scroll effect - disabled on low-end devices
  useEffect(() => {
    if (isLowEndDevice) return; // Skip parallax on low-end devices
    
    const handleScroll = () => {
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setScrollY(prev => {
          const newY = window.scrollY;
          return Math.abs(newY - prev) > 4 ? newY : prev;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLowEndDevice]);

  // Optimized video preloader with performance hints
  useEffect(() => {
    const vid = document.createElement("video");
    vid.preload = "metadata";
    vid.muted = true; // Ensure autoplay works
    vid.playsInline = true; // Mobile optimization
    vid.src = "https://res.cloudinary.com/dnyv7wabr/video/upload/v1757753332/vd6_lltink.mp4";
    
    const handleLoad = () => {
      if (vid.readyState >= 2) {
        setVideoLoaded(true);
      }
    };
    
    const handleError = () => {
      // Fallback to image background if video fails
      setVideoLoaded(false);
    };
    
    vid.addEventListener('loadedmetadata', handleLoad);
    vid.addEventListener('error', handleError);
    
    return () => {
      vid.removeEventListener('loadedmetadata', handleLoad);
      vid.removeEventListener('error', handleError);
    };
  }, []);

  const handleCTAClick = () => {
    const tyresSection = document.getElementById('export');
    if (tyresSection) {
      tyresSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header 
      id="hero" 
      className={`hero ${isVisible ? 'hero--visible' : ''} ${videoBrightness === 'bright' ? 'hero--bright-scene' : ''} ${isLowEndDevice ? 'hero--low-end' : ''}`}
      ref={heroRef}
      role="banner"
      aria-label="Brown Kudi farming influencer homepage"
    >
      {/* Hidden canvas for brightness detection */}
      {!isLowEndDevice && (
        <canvas 
          ref={canvasRef} 
          style={{ position: 'absolute', top: '-9999px', left: '-9999px' }}
          aria-hidden="true"
        />
      )}

      {/* Background Media */}
      <div className="hero__background">
        {!videoLoaded && (
          <div 
            className="hero__fallback"
            role="img"
            aria-label="Peaceful farm field background"
          />
        )}
        
        {videoLoaded && (
          <video
            ref={videoRef}
            className="hero__video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src="https://res.cloudinary.com/dnyv7wabr/video/upload/v1757753332/vd6_lltink.mp4" type="video/webm" />
            <source src="https://res.cloudinary.com/dnyv7wabr/video/upload/v1757753332/vd6_lltink.mp4" type="video/mp4" />
          </video>
        )}
        
        <div className="hero__overlay" aria-hidden="true" />
        <div className="hero__text-backdrop" aria-hidden="true" />
      </div>

      {/* Main Content */}
      <div 
        className="hero__content"
        style={{
          transform: !isLowEndDevice ? `translateY(${scrollY * 0.05}px)` : 'none'
        }}
      >
        {/* Brand Badge */}
        <div className="hero__badge">
          <i className="fas fa-seedling hero__badge-icon" aria-hidden="true" />
          <span className="hero__badge-text">Farm • Grow • Inspire</span>
        </div>

        {/* Main Heading */}
        <div className="hero__heading">
          <h1 className="hero__title">
            <span className="hero__title-brown">Brown</span>
            <span className="hero__title-kudi">ਕੁੜੀ </span>
          </h1>
          
          <h2 className="hero__subtitle">
            {t.subtitle}
          </h2>
          
          <p className="hero__tagline">
            {t.tagline}
          </p>
        </div>

        {/* Action Group */}
        <div className="hero__actions">
          <button
            className="hero__cta"
            onClick={handleCTAClick}
            aria-label={`${t.cta} - Navigate to tyres section`}
          >
            <i className="fas fa-tractor hero__cta-icon" aria-hidden="true" />
            <span>{t.cta}</span>
          </button>

          {/* Language Selector */}
          <div className="hero__language">
            <label htmlFor="language-select" className="sr-only">
              Select Language
            </label>
            <select
              id="language-select"
              className="hero__language-select"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              aria-label="Language selection"
            >
              <option value="english">English</option>
              <option value="hindi">हिन्दी</option>
              <option value="punjabi">ਪੰਜਾਬੀ</option>
            </select>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll-text">Discover More</div>
        <div className="hero__scroll-seed">
          <i className="fas fa-seedling" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="hero__decorative" aria-hidden="true">
        <div className="hero__crop-row hero__crop-row--1" />
        <div className="hero__crop-row hero__crop-row--2" />
        <div className="hero__crop-row hero__crop-row--3" />
        <i className="fas fa-sun hero__sun" />
        <i className="fas fa-tractor hero__tractor" />
      </div>
    </header>
  );
};

export default Hero;
