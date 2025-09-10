import React, { useState } from "react";
import "./ExportSection.css";
import { useLanguage } from "../context/LanguageContext";



const cardData = [
  {
    image: "/img/p1.jpg",
  },
  {
    image: "/img/p2.jpg",
  },
  {
    image: "/img/p3.jpg",
  },
  {
    image: "/img/p4.jpg",
  },
  {
    image: "/img/p5.jpg",
  },

];

const heading = {
  english: "Our Global Exports",
  hindi: "हमारा वैश्विक निर्यात",
  punjabi: "ਸਾਡੇ ਗਲੋਬਲ ਨਿਰਯਾਤ",
};
const para = {
  english:
    "Brown Kudi exports high-quality products to USA, Canada and Australia. We focus on authentic taste and consistent quality.",
  hindi:
    "ब्राउन कुडी अमेरिका, कनाडा और ऑस्ट्रेलिया को उच्च गुणवत्ता वाले उत्पाद निर्यात करती है। हम प्रामाणिक स्वाद और निरंतर गुणवत्ता पर ध्यान केंद्रित करते हैं।",
  punjabi:
    "ਬ੍ਰਾਊਨ ਕੁਡੀ ਅਮਰੀਕਾ, ਕੈਨੇਡਾ ਅਤੇ ਆਸਟ੍ਰੇਲੀਆ ਨੂੰ ਉੱਚ-ਗੁਣਵੱਤਾ ਵਾਲੇ ਉਤਪਾਦ ਨਿਰਯਾਤ ਕਰਦੀ  ਹੈ। ਅਸੀਂ ਪ੍ਰਮਾਣਿਕ ​​ਸੁਆਦ ਅਤੇ ਇਕਸਾਰ ਗੁਣਵੱਤਾ 'ਤੇ ਧਿਆਨ ਕੇਂਦਰਿਤ ਕਰਦੇ ਹਾਂ।",
};

export default function ExportSection() {
  const { language } = useLanguage();
  const [stopScroll, setStopScroll] = useState(false);

  return (
    <section className="export-section">
      {/* ✅ Background with black overlay */}
      <div className="export-bg"></div>
      <div className="overlay"></div>

      {/* ✅ Centered Text */}
      <div className="export-text">
        <h2>{heading[language]}</h2>
        <p>{para[language]}</p>
      </div>

      {/* ✅ Infinite Slider */}
      <div className="slider-container">
        <div
          className="marquee-inner"
          style={{
            animationPlayState: stopScroll ? "paused" : "running",
            animationDuration: cardData.length * 9999000 + "ms", 
          }}
        >
          <div className="slider-track">
            {[...cardData, ...cardData, ...cardData].map((card, index) => (
              <div
                className="slider-card"
                key={index}
                onMouseEnter={() => setStopScroll(true)} 
                onMouseLeave={() => setStopScroll(false)} 
              >
                <img src={card.image} alt="export-img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
