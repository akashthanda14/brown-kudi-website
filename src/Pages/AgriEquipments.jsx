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
      english: "TRACTOR",
      hindi: "ट्रैक्टर",
      punjabi: "ਟ੍ਰੈਕਟਰ",
    },
    desc: {
      english: "Powerful tractors for farming, hauling, and versatile agricultural use.",
      hindi: "खेती, ढुलाई और बहुउपयोगी कृषि कार्यों के लिए शक्तिशाली ट्रैक्टर।",
      punjabi: "ਖੇਤੀ, ਢੋਈ ਅਤੇ ਕਈ ਕਿਸਮ ਦੇ ਖੇਤੀ ਕੰਮਾਂ ਲਈ ਸ਼ਕਤੀਸ਼ਾਲੀ ਟ੍ਰੈਕਟਰ।"
    },
    img: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757769051/Green-John-Deere-Tractor-Download-PNG-Image_mjiwux.png"
  },
  {
    id: 2,
    name: {
      english: "Harrow",
      hindi: "हल",
      punjabi: "ਹਲ",
    },
    desc: {
      english: "Durable ploughs designed for soil preparation and efficient farming.",
      hindi: "मिट्टी की तैयारी और कुशल खेती के लिए मजबूत हल।",
      punjabi: "ਮਿੱਟੀ ਦੀ ਤਿਆਰੀ ਅਤੇ ਕੁਸ਼ਲ ਖੇਤੀ ਲਈ ਮਜ਼ਬੂਤ ਹਲ।"
    },
    img: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757769225/pngegg_urdjxp.png"
  },
  {
    id: 3,
    name: {
      english: "HARVESTER",
      hindi: "हार्वेस्टर",
      punjabi: "ਹਾਰਵੇਸਟਰ",
    },
    desc: {
      english: "Advanced harvesters for crop cutting, threshing, and productivity.",
      hindi: "फसल कटाई, मड़ाई और उत्पादकता के लिए उन्नत हार्वेस्टर।",
      punjabi: "ਫਸਲ ਕੱਟਣ, ਮੜ੍ਹਾਈ ਅਤੇ ਉਤਪਾਦਕਤਾ ਲਈ ਅਧੁਨਿਕ ਹਾਰਵੇਸਟਰ।"
    },
    img: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757769578/pngegg_1_kwd5k1.png"
  },
  {
    id: 4,
    name: {
      english: "SEEDER",
      hindi: "सीडर",
      punjabi: "ਸੀਡਰ",
    },
    desc: {
      english: "Efficient seeders ensuring uniform crop plantation and soil balance.",
      hindi: "समान फसल रोपण और मिट्टी संतुलन सुनिश्चित करने वाले कुशल सीडर।",
      punjabi: "ਸਮਾਨ ਫਸਲ ਰੋਪਣ ਅਤੇ ਮਿੱਟੀ ਦੇ ਸੰਤੁਲਨ ਨੂੰ ਯਕੀਨੀ ਬਣਾਉਣ ਵਾਲੇ ਕੁਸ਼ਲ ਸੀਡਰ।"
    },
    img: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757769961/pngegg_2_fxnwbe.png"
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
            src="https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750722/gallery1_fwmyii.jpg"
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
