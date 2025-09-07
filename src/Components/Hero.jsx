import React, { useState, useEffect } from "react";
import "./Hero.css";
import { useLanguage } from "../context/LanguageContext"; 

const Hero = () => {
  const { language, setLanguage } = useLanguage();
  const [videoLoaded, setVideoLoaded] = useState(false);

  const translations = {
    english: { title1: "Welcome to My Website", title2: "Build Something Amazing" },
    hindi: { title1: "मेरी वेबसाइट पर आपका स्वागत है", title2: "कुछ अद्भुत बनाएँ" },
    punjabi: { title1: "ਮੇਰੀ ਵੈਬਸਾਈਟ 'ਤੇ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ", title2: "ਕੁਝ ਸ਼ਾਨਦਾਰ ਬਣਾਓ" },
  };

  useEffect(() => {
    const vid = document.createElement("video");
    vid.src = "/video/vd6.mp4";
    vid.onloadeddata = () => setVideoLoaded(true);
  }, []);

  return (
    <section className="hero">
      {/* Background Fallback (Image) */}
      {!videoLoaded && <div className="fallback"></div>}

      {/* Background Video */}
      {videoLoaded && (
        <video
          className="background-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/video/vd6.webm" type="video/webm" />
          <source src="/video/vd6.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      <div className="overlay"></div>
      <div className="hero-content">
        <h1>
          <span className="brown-text">Brown</span>{" "}
          <span className="kudi-text">ਕੁੜੀ</span>
        </h1>
        <h1 className="welder-text">The Welder Girl</h1>

        <p>{translations[language].title1}</p>
        <br />
        <select
          className="language-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="english">English</option>
          <option value="hindi">हिंदी</option>
          <option value="punjabi">ਪੰਜਾਬੀ</option>
        </select>
      </div>
    </section>
  );
};

export default Hero;
