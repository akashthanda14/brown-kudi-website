import React from "react";
import "./ExportSection.css";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";

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

  return (
    <section className="export-section">
      {/* ✅ Background with black overlay */}
      <div className="export-bg"></div>
      <div className="overlay"></div>

      {/* ✅ Animated Text */}
      <motion.div
        className="export-text"
        initial={{ y: 50, opacity: 0 }} // niche + invisible
        whileInView={{ y: 0, opacity: 1 }} // upar aayega + visible
        transition={{ duration: 0.8, ease: "easeOut" }} // smooth effect
        viewport={{ once: false, amount: 0.3 }} // jitna scroll hoga utna trigger
      >
        <h2>{heading[language]}</h2>
        <p>{para[language]}</p>
      </motion.div>
    </section>
  );
}
