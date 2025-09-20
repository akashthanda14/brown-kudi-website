import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./TradeSection.css";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

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
  const defaultmsgw = {
    english: "Hello, I want to know more about",
    hindi: "नमस्ते, मैं इसके बारे में और जानना चाहता हूँ",
    punjabi: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ਮੈਂ ਇਸ ਬਾਰੇ ਹੋਰ ਜਾਣਨਾ ਚਾਹੁੰਦਾ ਹਾਂ",
  };
  const defaultmsgp = {
    english: "Calling about",
    hindi: "इसके बारे में कॉल कर रहा हूँ",
    punjabi: "ਇਸ ਬਾਰੇ ਕਾਲ ਕਰ ਰਿਹਾ ਹਾਂ",
  };

 const products = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1758215139/IMG17_cleanup_xz1cji.png",
    name: {
      english: "Super Seeder",
      hindi: "सुपर सीडर मशीन",
      punjabi: "ਸੁਪਰ ਸੀਡਰ ਮਸ਼ੀਨ",
    },
    points: {
      english: [
        "Direct seed sowing without extra tillage",
        "Even residue mulching for soil health",
        "Saves fuel and time in farming",
      ],
      hindi: [
        "बिना जुताई सीधे बीज बोता है",
        "अवशेष मिलाकर मिट्टी उपजाऊ बनाता है",
        "ईंधन और समय की बचत करता है",
      ],
      punjabi: [
        "ਬਿਨਾ ਜੁੱਤਾਈ ਬੀਜ ਬੋਦਾ ਹੈ",
        "ਅਵਸ਼ੇਸ਼ ਮਿਲਾ ਕੇ ਮਿੱਟੀ ਸੁਧਾਰਦਾ ਹੈ",
        "ਇੰਧਨ ਤੇ ਸਮਾਂ ਬਚਾਉਂਦਾ ਹੈ",
      ],
    },
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1758360901/IMG5-min_mqmorh.jpg",
    name: {
      english: "Reversible MB Plough",
      hindi: "रिवर्सेबल एम.बी. हल",
      punjabi: "ਰੀਵਰਸੇਬਲ ਐਮ.ਬੀ. ਹਲ",
    },
    points: {
      english: [
        "Turns soil well for new crops",
        "Buries residues to boost soil",
        "Works in all soil conditions",
      ],
      hindi: [
        "मिट्टी पलटकर फसल योग्य बनाता है",
        "अवशेष दबाकर मिट्टी सुधारता है",
        "हर मिट्टी में आसानी से चलता है",
      ],
      punjabi: [
        "ਮਿੱਟੀ ਪਲਟ ਕੇ ਨਵੀਂ ਫਸਲ ਲਈ ਤਿਆਰ ਕਰਦਾ ਹੈ",
        "ਅਵਸ਼ੇਸ਼ ਦਬਾ ਕੇ ਮਿੱਟੀ ਸੁਧਾਰਦਾ ਹੈ",
        "ਹਰ ਕਿਸਮ ਦੀ ਮਿੱਟੀ ਵਿੱਚ ਕੰਮ ਕਰਦਾ ਹੈ",
      ],
    },
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1758221888/IMG_4559_pgv628.jpg",
    name: { english: "Disc Harrow", hindi: "डिस्क हैरो", punjabi: "ਡਿਸਕ ਹੈਰੋ" },
    points: {
      english: [
        "Breaks clods for fine seedbed",
        "Levels field for even growth",
        "Mixes residues for fertility",
      ],
      hindi: [
        "गांठें तोड़कर बीज योग्य बनाता है",
        "खेत को बराबर करता है",
        "अवशेष मिलाकर उपजाऊ करता है",
      ],
      punjabi: [
        "ਠੋਸ ਤੋੜ ਕੇ ਬੀਜ ਲਈ ਸੁਖਾਵਾਂ",
        "ਖੇਤ ਸਮਾਨ ਕਰਦਾ ਹੈ",
        "ਅਵਸ਼ੇਸ਼ ਮਿਲਾ ਕੇ ਉਪਜਾਉ ਕਰਦਾ ਹੈ",
      ],
    },
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1758215336/IMG18_cleanup_erweaz.png",
    name: { english: "Rotary Tiller", hindi: "रोटावेटर टिलर", punjabi: "ਰੋਟਾਵੇਟਰ ਟਿਲਰ" },
    points: {
      english: [
        "Softens hard soil for seedbed",
        "Mixes manure and fertilizer",
        "Removes weeds easily",
      ],
      hindi: [
        "कठोर मिट्टी को नरम बनाता है",
        "खाद और उर्वरक मिलाता है",
        "घास-फूस हटाता है",
      ],
      punjabi: [
        "ਸਖ਼ਤ ਮਿੱਟੀ ਨੂੰ ਨਰਮ ਕਰਦਾ ਹੈ",
        "ਖਾਦ ਤੇ ਖਾਦਾਂ ਮਿਲਾਉਂਦਾ ਹੈ",
        "ਘਾਹ-ਫੂਸ ਹਟਾਉਂਦਾ ਹੈ",
      ],
    },
  },
  {
    id: 5,
    img: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1758222712/Bown_kudi_4_dle67f.png",
    name: { english: "Subsoiler", hindi: "सब-सोइलर", punjabi: "ਸਬਸੋਇਲਰ" },
    points: {
      english: [
        "Breaks deep compact layers",
        "Boosts root growth & nutrients",
        "Improves water absorption",
      ],
      hindi: [
        "गहरी परतें तोड़ता है",
        "जड़ें और पोषण बढ़ाता है",
        "पानी सोखने की क्षमता बढ़ाता है",
      ],
      punjabi: [
        "ਗਹਿਰੀ ਪਰਤਾਂ ਤੋੜਦਾ ਹੈ",
        "ਜੜ੍ਹਾਂ ਤੇ ਪੋਸ਼ਣ ਵਧਾਉਂਦਾ ਹੈ",
        "ਪਾਣੀ ਸਮਾਉਣ ਵਧਾਉਂਦਾ ਹੈ",
      ],
    },
  },
  {
    id: 6,
    img: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1758361398/IMG29-min_d6dgyz.jpg",
    name: { english: "Disc Plough", hindi: "डिस्क प्लाउ", punjabi: "ਡਿਸਕ ਪਲਾਓ" },
    points: {
      english: [
        "Cuts hard soil easily",
        "Turns soil in tough fields",
        "Works with deep weeds",
      ],
      hindi: [
        "कठोर मिट्टी काटता है",
        "मुश्किल खेतों में मिट्टी पलटता है",
        "गहरी घास में भी काम करता है",
      ],
      punjabi: [
        "ਸਖ਼ਤ ਮਿੱਟੀ ਕੱਟਦਾ ਹੈ",
        "ਮੁਸ਼ਕਲ ਖੇਤਾਂ ਵਿੱਚ ਪਲਟਦਾ ਹੈ",
        "ਡੂੰਘੀਆਂ ਘਾਹ ਵਿੱਚ ਕੰਮ ਕਰਦਾ ਹੈ",
      ],
    },
  },
  {
    id: 7,
    img: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1758361593/IMG7-min_vtgzy3.jpg",
    name: {
      english: "Hydraulic Harrow",
      hindi: "हाइड्रोलिक हैरो",
      punjabi: "ਹਾਈਡ੍ਰੋਲਿਕ ਹੈਰੋ",
    },
    points: {
      english: [
        "Makes fine soil for seeds",
        "Smooths surface after plough",
        "Prepares uniform bed",
      ],
      hindi: [
        "बीज के लिए महीन मिट्टी बनाता है",
        "जुताई के बाद सतह समतल करता है",
        "समान मिट्टी का बिस्तर बनाता है",
      ],
      punjabi: [
        "ਬੀਜ ਲਈ ਬਾਰੀਕ ਮਿੱਟੀ ਬਣਾਉਂਦਾ ਹੈ",
        "ਜੁੱਤਾਈ ਤੋਂ ਬਾਅਦ ਸਤਹ ਸਮਾਨ ਕਰਦਾ ਹੈ",
        "ਇਕਸਾਰ ਬਿਸਤਰਾ ਤਿਆਰ ਕਰਦਾ ਹੈ",
      ],
    },
  },
  {
    id: 8,
    img: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1758361177/IMG_0325-min_kihacx.jpg",
    name: { english: "Tractor Trolley", hindi: "ट्रैक्टर ट्रॉली", punjabi: "ਟ੍ਰੈਕਟਰ ਟਰੌਲੀ" },
    points: {
      english: [
        "Strong body for heavy loads",
        "Wide tyres for stability",
        "Toolbox for daily use",
      ],
      hindi: [
        "भारी भार के लिए मजबूत बॉडी",
        "चौड़े टायर स्थिरता देते हैं",
        "रोज़मर्रा के लिए टूलबॉक्स",
      ],
      punjabi: [
        "ਭਾਰੀ ਭਾਰ ਲਈ ਮਜ਼ਬੂਤ ਬਾਡੀ",
        "ਚੌੜੇ ਟਾਇਰ ਸਥਿਰਤਾ ਦੇਂਦੇ ਹਨ",
        "ਰੋਜ਼ਾਨਾ ਲਈ ਟੂਲਬਾਕਸ",
      ],
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
            <img
              src={item.img}
              alt={item.name[language]}
              className="trade-img"
              loading="lazy"
            />

            <div className="trade-content">
              <h3 className="trade-name">{item.name[language]}</h3>

              <ul className="trade-points">
                {item.points[language].map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="trade-actions">
                {/* ✅ Learn More button */}
                <Link
                  to={`/product-detail/${item.id}`}
                  className="more-info-btn"
                  onClick={(e) => e.stopPropagation()} // prevent card click
                >
                  {button[language]}
                </Link>

                {/* ✅ WhatsApp Icon Button */}
                <a
                  href={`https://wa.me/919855119079?text=${defaultmsgw[language]} ${item.name[language]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-icon-btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaWhatsapp size={22} />
                </a>

                {/* ✅ Phone Call Icon Button */}
                <a
                  href={`tel:+919855119079`}
                  className="phone-icon-btn"
                  title={`${defaultmsgp[language]} ${item.name[language]}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaPhoneAlt size={20} />
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
