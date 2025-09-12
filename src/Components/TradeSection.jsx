import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import "./TradeSection.css";

const TradeSection = () => {
  const { language } = useLanguage();
  const [tilt, setTilt] = React.useState({});
  const threshold = 10;

  const handleMove = (e, id) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setTilt((prev) => ({
      ...prev,
      [id]: { x: y * -threshold, y: x * threshold },
    }));
  };

  const handleLeave = (id) => {
    setTilt((prev) => ({
      ...prev,
      [id]: { x: 0, y: 0 },
    }));
  };

  const sectionTitles = {
    english: "Our Trade Products",
    hindi: "हमारे ट्रेड उत्पाद",
    punjabi: "ਸਾਡੇ ਟ੍ਰੇਡ ਉਤਪਾਦ",
  };

  const button = {
    english: "Learn More",
    hindi: "और जानें",
    punjabi: "ਹੋਰ ਜਾਣੋ",
  };

  const products = [
    {
      id: 1,
      img: "/img/tradeimg1.png",
      name: {
        english: "Super Seeder",
        hindi: "सुपर सीडर मशीन",
        punjabi: "ਸੁਪਰ ਸੀਡਰ ਮਸ਼ੀਨ",
      },
      points: {
        english: ["Sows seeds directly", "Mulches crop residue"],
        hindi: ["बीज सीधे बोता है", "फसल अवशेष मिलाता है"],
        punjabi: ["ਬੀਜ ਸਿੱਧਾ ਬੋਤਾ ਹੈ", "ਫਸਲ ਦੇ ਅਵਸ਼ੇਸ਼ ਮਿਲਾਉਂਦਾ ਹੈ"],
      },
    },
    {
      id: 2,
      img: "/img/tradeimg2.png",
      name: {
        english: "Reversible MB Plough",
        hindi: "रिवर्सेबल एम.बी. हल",
        punjabi: "ਰੀਵਰਸੇਬਲ ਐਮ.ਬੀ. ਹਲ",
      },
      points: {
        english: ["Turns soil effectively", "Buries residues"],
        hindi: ["मिट्टी पलटता है", "अवशेष दबाता है"],
        punjabi: ["ਮਿੱਟੀ ਪਲਟਦਾ ਹੈ", "ਅਵਸ਼ੇਸ਼ ਦਬਾਉਂਦਾ ਹੈ"],
      },
    },
    {
      id: 3,
      img: "/img/tradeimg4.png",
      name: { english: "Disc Harrow", hindi: "डिस्क हैरो", punjabi: "ਡਿਸਕ ਹੈਰੋ" },
      points: {
        english: ["Breaks soil clods", "Levels field", "Mixes residues"],
        hindi: ["मिट्टी समतल करता है", "अवशेष मिलाता है"],
        punjabi: ["ਮਿੱਟੀ ਸਮਤਲ ਕਰਦਾ ਹੈ", "ਅਵਸ਼ੇਸ਼ ਮਿਲਾਉਂਦਾ ਹੈ"],
      },
    },
    {
      id: 4,
      img: "/img/tradeimg5.png",
      name: { english: "Rotary Tiller", hindi: "रोटावेटर टिलर", punjabi: "ਰੋਟਾਵੇਟਰ ਟਿਲਰ" },
      points: {
        english: ["Pulverizes soil", "Mixes manure", "Removes weeds"],
        hindi: ["मिट्टी भुरभुरा करता है", "खाद मिलाता है", "घास हटाता है"],
        punjabi: ["ਮਿੱਟੀ ਭੁਰਭੁਰਾ ਕਰਦਾ ਹੈ", "ਖਾਦ ਮਿਲਾਉਂਦਾ ਹੈ", "ਘਾਹ ਹਟਾਉਂਦਾ ਹੈ"],
      },
    },
    {
      id: 5,
      img: "/img/tradeimg3.png",
      name: { english: "Subsoiler", hindi: "सब-सोइलर", punjabi: "ਸਬਸੋਇਲਰ" },
      points: {
        english: ["Breaks hard soil", "Improves root growth"],
        hindi: ["कठोर मिट्टी तोड़ता है", "जड़ों की वृद्धि करता है"],
        punjabi: ["ਸਖ਼ਤ ਮਿੱਟੀ ਤੋੜਦਾ ਹੈ", "ਜੜ੍ਹਾਂ ਵਧਾਉਂਦਾ ਹੈ"],
      },
    },
    {
      id: 6,
      img: "/img/tradeimg6.png",
      name: { english: "Disc Plough", hindi: "डिस्क प्लाउ", punjabi: "ਡਿਸਕ ਪਲਾਓ" },
      points: {
        english: ["Cuts hard soil", "Turns soil for tough fields"],
        hindi: ["कठोर जमीन काटता है", "मिट्टी पलटता है"],
        punjabi: ["ਸਖ਼ਤ ਖੇਤਾਂ ਦੀ ਮਿੱਟੀ ਕੱਟਦਾ ਹੈ", "ਮਿੱਟੀ ਪਲਟਦਾ ਹੈ"],
      },
    },
    {
      id: 7,
      img: "/img/tradeimg7.png",
      name: { english: "Hydraulic", hindi: "हाइड्रोलिक", punjabi: "ਹਾਈਡ੍ਰੋਲਿਕ" },
      points: {
        english: ["Prepares fine soil", "Used after ploughing"],
        hindi: ["जुताई के बाद मिट्टी तैयार करता है", "बेहतर खेत की सतह बनाता है"],
        punjabi: ["ਜੁੱਤਾਈ ਤੋਂ ਬਾਅਦ ਮਿੱਟੀ ਤਿਆਰ ਕਰਦਾ ਹੈ", "ਚੰਗੀ ਸਤਹ ਬਣਾਉਂਦਾ ਹੈ"],
      },
    },
    {
      id: 8,
      img: "/img/tradeimg8.png",
      name: { english: "Tractor Trolley", hindi: "ट्रैक्टर ट्रॉली", punjabi: "ਟ੍ਰੈਕਟਰ ਟਰੌਲੀ" },
      points: {
        english: ["Strong and durable", "Wide tyres", "Comes with toolbox"],
        hindi: ["मजबूत और टिकाऊ", "चौड़े टायर", "टूलबॉक्स शामिल"],
        punjabi: ["ਮਜ਼ਬੂਤ ਅਤੇ ਟਿਕਾਊ", "ਚੌੜੇ ਟਾਇਰ", "ਟੂਲਬਾਕਸ ਸਮੇਤ"],
      },
    },
  ];

  return (
    <section id="trade-section" className="trade-section">
      <h2 className="section-title">{sectionTitles[language]}</h2>

      <div className="trade-container">
        {products.map((item) => (
          <motion.div
            className="trade-card"
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            onMouseMove={(e) => handleMove(e, item.id)}
            onMouseLeave={() => handleLeave(item.id)}
            style={{
              transform: `perspective(1000px) rotateX(${tilt[item.id]?.x || 0}deg) rotateY(${tilt[item.id]?.y || 0}deg)`,
            }}
          >
            <img src={item.img} alt={item.name[language]} className="trade-img" loading="lazy" />
            <div className="trade-content">
              <h3 className="trade-name">{item.name[language]}</h3>

              <ul className="trade-points">
                {item.points[language].map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="trade-actions">
                <Link to={`/product-detail/${item.id}`} className="more-info-btn">
                  {button[language]}
                </Link>
                <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="icon-btn whatsapp">
                  <FaWhatsapp />
                </a>
                <a href="tel:+1234567890" className="icon-btn call">
                  <FaPhoneAlt />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TradeSection;
