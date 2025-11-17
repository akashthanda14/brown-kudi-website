import React from "react";
import { motion } from "framer-motion";
import "./AgriEquipments.css";
import Footer from "../Components/Footer";
import { useLanguage } from "../context/LanguageContext"; // ✅ language context import

// ✅ Multilingual content
const heroText = {
  english: {
    title: "AGRICULTURAL EQUIPMENTS",
    desc: "High-performance farming equipment designed for strength, durability, and efficiency. Perfect for modern agriculture and heavy-duty field work. Built with premium quality for Indian farmers."
  },
  hindi: {
    title: "कृषि उपकरण",
    desc: "उच्च प्रदर्शन वाले कृषि उपकरण, ताकत, टिकाऊपन और दक्षता के लिए डिज़ाइन किए गए। आधुनिक कृषि और भारी काम के लिए उपयुक्त। भारतीय किसानों के लिए प्रीमियम गुणवत्ता से बने।"
  },
  punjabi: {
    title: "ਖੇਤੀਬਾੜੀ ਦੇ ਸਾਜ਼ੋ-ਸਾਮਾਨ",
    desc: "ਉੱਚ-ਪ੍ਰਦਰਸ਼ਨ ਵਾਲੇ ਖੇਤੀਬਾੜੀ ਦੇ ਸਾਜ਼ੋ-ਸਾਮਾਨ, ਮਜ਼ਬੂਤੀ, ਟਿਕਾਊਪਣ ਅਤੇ ਕੁਸ਼ਲਤਾ ਲਈ ਤਿਆਰ ਕੀਤੇ ਗਏ। ਆਧੁਨਿਕ ਖੇਤੀ ਅਤੇ ਭਾਰੀ ਕੰਮ ਲਈ ਬਿਹਤਰ। ਭਾਰਤੀ ਕਿਸਾਨਾਂ ਲਈ ਪ੍ਰੀਮੀਅਮ ਗੁਣਵੱਤਾ ਨਾਲ ਬਣਾਇਆ।"
  }
};

const equipments = [
  {
    id: 1,
    name: {
      english: "Super Seeder",
      hindi: "सुपर सीडर मशीन",
      punjabi: "ਸੁਪਰ ਸੀਡਰ ਮਸ਼ੀਨ",
    },
    desc: {
      english: "Sows seeds directly into standing stubble without tillage.",
      hindi: "बिना जुताई के खड़े अवशेष में सीधे बीज बोता है",
      punjabi: "ਖੜ੍ਹੇ ਅਵਸ਼ੇਸ਼ਾਂ ਵਿੱਚ ਬਿਨਾਂ ਜੋਤਾਈ ਦੇ ਸਿੱਧਾ ਬੀਜ ਬੋਣ ਵਾਲੀ ਮਸ਼ੀਨ"
    },
    img: "https://res.cloudinary.com/dm9sbfva5/image/upload/v1763376181/new-super-seeder112_1__cleanup_klclda.png"
  },
  {
    id: 2,
    name: {
      english: "Disc Harrow",
      hindi: "डिस्क हैरो",
      punjabi: "ਡਿਸਕ ਹੈਰੋ",
    },
    desc: {
      english: "Durable ploughs designed for soil preparation and efficient farming.",
      hindi: "मिट्टी की तैयारी और कुशल खेती के लिए मजबूत हल।",
      punjabi: "ਮਿੱਟੀ ਦੀ ਤਿਆਰੀ ਅਤੇ ਕੁਸ਼ਲ ਖੇਤੀ ਲਈ ਮਜ਼ਬੂਤ ਹਲ।"
    },
    img: "https://res.cloudinary.com/dm9sbfva5/image/upload/v1763373311/Bown_kudi_2_wd5a2v.png"
  },
  {
    id: 3,
    name: {
      english: "Rotary Tiller",
      hindi: "रोटरी टिलर",
      punjabi: "ਰੋਟਰੀ ਟਿਲਰ",
    },
    desc: {
      english: "Advanced harvesters for crop cutting, threshing, and productivity.",
      hindi: "फसल कटाई, मड़ाई और उत्पादकता के लिए उन्नत हार्वेस्टर।",
      punjabi: "ਫਸਲ ਕੱਟਣ, ਮੜ੍ਹਾਈ ਅਤੇ ਉਤਪਾਦਕਤਾ ਲਈ ਅਧੁਨਿਕ ਹਾਰਵੇਸਟਰ।"
    },
    img: "https://res.cloudinary.com/dm9sbfva5/image/upload/v1763377811/rotavator-new3_cleanup_f9jp8l.png"
  },
  {
    id: 4,
    name: {
      english: "Cultivator",
      hindi: "कल्टीवेटर",
      punjabi: "ਕਲਟੀਵੇਟਰ",
    },
    desc: {
      english: "Efficient seeders ensuring uniform crop plantation and soil balance.",
      hindi: "समान फसल रोपण और मिट्टी संतुलन सुनिश्चित करने वाले कुशल सीडर।",
      punjabi: "ਸਮਾਨ ਫਸਲ ਰੋਪਣ ਅਤੇ ਮਿੱਟੀ ਦੇ ਸੰਤੁਲਨ ਨੂੰ ਯਕੀਨੀ ਬਣਾਉਣ ਵਾਲੇ ਕੁਸ਼ਲ ਸੀਡਰ।"
    },
    img: "https://res.cloudinary.com/dm9sbfva5/image/upload/v1763372461/tradeimg3_w51icx.png"
  }
];

const AgriEquipments = () => {
  const { language } = useLanguage(); // ✅ current language le rahe hai

  return (
    <>
      <div className="equipments-container">
        {/* Hero Section */}
        <div className="equipments-hero">
          <motion.img
            src="https://res.cloudinary.com/dm9sbfva5/image/upload/v1763372417/gallery7_ajdy7x.jpg"
            alt="Agri Hero"
            className="equipments-hero-img"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            className="equipments-hero-text"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>{heroText[language].title}</h2>
            <p>{heroText[language].desc}</p>
          </motion.div>
        </div>

        {/* Equipments Grid */}
        <h3 className="equipments-heading">
          {language === "english" ? "OUR EQUIPMENTS" : language === "hindi" ? "हमारे उपकरण" : "ਸਾਡੇ ਸਾਜ਼ੋ-ਸਾਮਾਨ"}
        </h3>
        <div className="equipments-grid">
          {equipments.map((item) => (
            <motion.div
              key={item.id}
              className="equipments-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img src={item.img} alt={item.name[language]} className="equipments-icon" />
              <h4>{item.name[language]}</h4>
              <p>{item.desc[language]}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AgriEquipments;
