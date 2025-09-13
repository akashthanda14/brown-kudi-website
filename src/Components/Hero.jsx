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

  // Enhanced mobile detection for maximum performance
  const isMobile = useMemo(() => {
    if (typeof window === 'undefined') return false;
    
    // Multiple mobile detection methods for accuracy
    const userAgent = navigator.userAgent;
    const isMobileUA = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const isTouchDevice = 'ontouchstart' in window;
    const hasSmallScreen = window.innerWidth <= 768;
    const hasLowMemory = navigator.deviceMemory && navigator.deviceMemory < 4;
    
    return isMobileUA || (isTouchDevice && hasSmallScreen) || hasLowMemory;
  }, []);

  // Disable video completely on mobile for faster loading
  const shouldLoadVideo = useMemo(() => {
    return !isMobile && window.innerWidth > 1024;
  }, [isMobile]);

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

  // Simplified intersection observer - mobile optimized
  useEffect(() => {
    if (isMobile) {
      // Immediately show content on mobile for faster perceived load
      setIsVisible(true);
      return;
    }

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
  }, [isMobile]);

  // Video brightness detection - completely disabled on mobile
  useEffect(() => {
    if (isMobile || !shouldLoadVideo || !videoLoaded || !videoRef.current) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = 50; // Reduced canvas size for better performance
    canvas.height = 28;

    const checkBrightness = () => {
      try {
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        
        let totalBrightness = 0;
        // Sample every 4th pixel for better performance
        for (let i = 0; i < data.length; i += 16) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          totalBrightness += (r * 0.299 + g * 0.587 + b * 0.114);
        }
        
        const avgBrightness = totalBrightness / (data.length / 16);
        setVideoBrightness(avgBrightness > 170 ? 'bright' : 'normal');
      } catch (e) {
        // Silently handle canvas errors
      }
    };

    // Much longer interval for better performance
    const scheduleCheck = () => {
      checkBrightness();
      setTimeout(() => {
        if (videoLoaded && shouldLoadVideo) {
          requestAnimationFrame(scheduleCheck);
        }
      }, 2000); // 2 second intervals
    };

    const id = requestAnimationFrame(scheduleCheck);
    return () => cancelAnimationFrame(id);
  }, [videoLoaded, isMobile, shouldLoadVideo]);

  // Parallax completely disabled on mobile
  useEffect(() => {
    if (isMobile) return; // No parallax on mobile at all
    
    const handleScroll = () => {
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setScrollY(prev => {
          const newY = window.scrollY;
          // Larger threshold for better performance
          return Math.abs(newY - prev) > 8 ? newY : prev;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  // Video loading completely disabled on mobile for faster performance
  useEffect(() => {
    if (!shouldLoadVideo) {
      // Skip video loading entirely on mobile
      return;
    }

    const vid = document.createElement("video");
    vid.preload = "none"; // Change from metadata to none for faster load
    vid.muted = true;
    vid.playsInline = true;
    vid.src = "https://res.cloudinary.com/dnyv7wabr/video/upload/v1757753332/vd6_lltink.mp4";
    
    const handleLoad = () => {
      if (vid.readyState >= 2) {
        setVideoLoaded(true);
      }
    };
    
    const handleError = () => {
      setVideoLoaded(false);
    };
    
    // Delay video loading to prioritize other resources
    const timer = setTimeout(() => {
      vid.addEventListener('loadedmetadata', handleLoad);
      vid.addEventListener('error', handleError);
      vid.preload = "metadata"; // Start loading after delay
    }, 500);
    
    return () => {
      clearTimeout(timer);
      vid.removeEventListener('loadedmetadata', handleLoad);
      vid.removeEventListener('error', handleError);
    };
  }, [shouldLoadVideo]);

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
      className={`hero ${isVisible ? 'hero--visible' : ''} ${videoBrightness === 'bright' ? 'hero--bright-scene' : ''} ${isMobile ? 'hero--mobile' : ''}`}
      ref={heroRef}
      role="banner"
      aria-label="Brown Kudi farming influencer homepage"
    >
      {/* Canvas only for desktop - completely removed on mobile */}
      {!isMobile && shouldLoadVideo && (
        <canvas 
          ref={canvasRef} 
          style={{ position: 'absolute', top: '-9999px', left: '-9999px' }}
          aria-hidden="true"
        />
      )}

      {/* Background Media - Mobile optimized */}
      <div className="hero__background">
        {/* Always show fallback on mobile, video only on desktop */}
        {(isMobile || !videoLoaded) && (
          <div 
            className="hero__fallback"
            role="img"
            aria-label="Peaceful farm field background"
          />
        )}
        
        {/* Video only loads on desktop for performance */}
        {!isMobile && shouldLoadVideo && videoLoaded && (
          <video
            ref={videoRef}
            className="hero__video"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
          >
            <source src="https://res.cloudinary.com/dnyv7wabr/video/upload/v1757753332/vd6_lltink.mp4" type="video/webm" />
            <source src="https://res.cloudinary.com/dnyv7wabr/video/upload/v1757753332/vd6_lltink.mp4" type="video/mp4" />
          </video>
        )}
        
        <div className="hero__overlay" aria-hidden="true" />
        {!isMobile && <div className="hero__text-backdrop" aria-hidden="true" />}
      </div>

      {/* Main Content - Mobile optimized */}
      <div 
        className="hero__content"
        style={{
          transform: !isMobile ? `translateY(${scrollY * 0.05}px)` : 'none'
        }}
      >
        {/* Brand Badge */}
        <div className="hero__badge">
          <i className="fas fa-seedling hero__badge-icon" aria-hidden="true" />
          <span className="hero__badge-text">The • Welder • Girl</span>
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

      {/* Scroll Indicator - Hidden on mobile for cleaner look */}
      {!isMobile && (
        <div className="hero__scroll" aria-hidden="true">
          <div className="hero__scroll-text">Discover More</div>
          <div className="hero__scroll-seed">
            <i className="fas fa-seedling" />
          </div>
        </div>
      )}

      {/* Decorative Elements - Completely removed on mobile */}
      {!isMobile && (
        <div className="hero__decorative" aria-hidden="true">
          <div className="hero__crop-row hero__crop-row--1" />
          <div className="hero__crop-row hero__crop-row--2" />
          <div className="hero__crop-row hero__crop-row--3" />
          <i className="fas fa-sun hero__sun" />
          <i className="fas fa-tractor hero__tractor" />
        </div>
      )}
    </header>
  );
};

export default Hero;
