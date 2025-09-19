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
    "Brown Kudi exports premium quality tyres, furniture, and other products to USA, Canada, and Australia with consistent quality and reliability.",
  hindi:
    "ब्राउन कुड़ी अमेरिका, कनाडा और ऑस्ट्रेलिया को प्रीमियम क्वालिटी टायर, फ़र्नीचर और अन्य प्रोडक्ट्स एक्सपोर्ट करती है। हम भरोसेमंद और लगातार एक जैसी क्वालिटी देने पर ध्यान रखते हैं।",
  punjabi:
    "ਬਰਾਊਨ ਕੁੜੀ ਅਮਰੀਕਾ, ਕੈਨੇਡਾ ਅਤੇ ਆਸਟ੍ਰੇਲੀਆ ਨੂੰ ਪ੍ਰੀਮੀਅਮ ਕੁਆਲਟੀ ਟਾਇਰ, ਫਰਨੀਚਰ ਅਤੇ ਹੋਰ ਪ੍ਰੋਡਕਟ ਐਕਸਪੋਰਟ ਕਰਦੀ ਹੈ। ਅਸੀਂ ਭਰੋਸੇਮੰਦ ਅਤੇ ਇਕੋ ਜਿਹੀ ਕੁਆਲਟੀ ਮੁਹੱਈਆ ਕਰਦੇ ਹਾਂ।",
};

export default function ExportSection() {
  const { language } = useLanguage();

  return (
    <section id="export-section" className="export-section">
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
