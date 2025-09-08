import React from "react";
import "./ExportSection.css";
import { useLanguage } from "../context/LanguageContext";


const image = "/img/IMG_1890.jpg"; // sirf ek hi image dikhayenge

// ✅ Image Slider ke liye array
const sliderImages = [
  "/img/p1.jpg",
  "/img/p2.jpg",
  "/img/p3.jpg",
  "/img/p4.jpg",
  "/img/p5.jpg",
  "/img/p6.jpg",
];
const heading = {
  english: "Our Global Exports",
  hindi: "हमारा वैश्विक निर्यात",
  punjabi: "ਸਾਡੇ ਗਲੋਬਲ ਨਿਰਯਾਤ",
};
const para = {
  english: " Brown Kudi exports high-quality products to USA, Canada and Australia. We focus on authentic taste and consistent quality.",
  hindi: "ब्राउन कुडी अमेरिका, कनाडा और ऑस्ट्रेलिया को उच्च गुणवत्ता वाले उत्पाद निर्यात करती है। हम प्रामाणिक स्वाद और निरंतर गुणवत्ता पर ध्यान केंद्रित करते हैं।",
  punjabi: "ਬ੍ਰਾਊਨ ਕੁਡੀ ਅਮਰੀਕਾ, ਕੈਨੇਡਾ ਅਤੇ ਆਸਟ੍ਰੇਲੀਆ ਨੂੰ ਉੱਚ-ਗੁਣਵੱਤਾ ਵਾਲੇ ਉਤਪਾਦ ਨਿਰਯਾਤ ਕਰਦੀ  ਹੈ। ਅਸੀਂ ਪ੍ਰਮਾਣਿਕ ​​ਸੁਆਦ ਅਤੇ ਇਕਸਾਰ ਗੁਣਵੱਤਾ 'ਤੇ ਧਿਆਨ ਕੇਂਦਰਿਤ ਕਰਦੇ ਹਾਂ।",
};
export default function ExportSection() {
  const { language } = useLanguage();

  return (
    <section className="export-section">
      {/* ✅ Background Blur Image */}
      <div className="export-bg"></div>

      <div className="export-container">
        <div className="export-grid">
          {/* ✅ Single Image Box */}
          <div className="image-box">
            <img src={image} alt="export" className="image" />
          </div>

          {/* ✅ Text Box */}
          <div className="text-box">
            <div className="text-content">
              <h2>{heading[language]}</h2>

              <p>
                {para[language]}
              </p>
            </div>
          </div>
        </div>

        {/* ✅ Continuous Image Slider */}
        <div className="slider-wrapper" aria-hidden="true">
          <div className="slider-track">
            {[...sliderImages, ...sliderImages].map((src, idx) => (
              <div className="slider-item" key={idx}>
                <img src={src} alt={`slide-${idx}`} className="slider-img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
