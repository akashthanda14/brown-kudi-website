import React from "react";
import "./ThanksSection.css";
import { useLanguage } from "../context/LanguageContext";
const thanks = {
  english: "Special thanks for visiting our website",
  hindi: "हमारी वेबसाइट पर आने के लिए विशेष धन्यवाद",
  punjabi: "ਸਾਡੀ ਵੈਬਸਾਈਟ ਤੇ ਆਉਣ ਲਈ ਖਾਸ ਧੰਨਵਾਦ",
};

const ThanksSection = () => {
  const { language } = useLanguage();

  return (
    <section className="thanks-section">
      <div className="thanks-content">

        <h1>{thanks[language]}</h1>
      </div>
    </section>
  );
};

export default ThanksSection;
