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
        english: [
          "Sows seeds directly into the soil without extra preparation",
          "Mulches crop residue evenly for better soil fertility",
          "Reduces fuel cost and saves valuable time in farming",
        ],
        hindi: [
          "बीज सीधे मिट्टी में बोता है, बिना अतिरिक्त तैयारी के",
          "फसल अवशेषों को समान रूप से मिलाता है जिससे मिट्टी की उर्वरता बढ़ती है",
          "इंधन की लागत घटाता है और किसानों का समय बचाता है",
        ],
        punjabi: [
          "ਬੀਜ ਸਿੱਧਾ ਮਿੱਟੀ ਵਿੱਚ ਬੋਤਾ ਹੈ, ਹੋਰ ਤਿਆਰੀ ਦੀ ਲੋੜ ਨਹੀਂ",
          "ਫਸਲ ਦੇ ਅਵਸ਼ੇਸ਼ ਸਮਾਨ ਤੌਰ ਤੇ ਮਿਲਾ ਕੇ ਉਪਜਾਉਸ਼ਕਤਾ ਵਧਾਉਂਦਾ ਹੈ",
          "ਇੰਧਨ ਦੀ ਲਾਗਤ ਘਟਾਉਂਦਾ ਹੈ ਅਤੇ ਕਿਸਾਨਾਂ ਦਾ ਸਮਾਂ ਬਚਾਉਂਦਾ ਹੈ",
        ],
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
        english: [
          "Turns soil effectively to prepare it for sowing new crops",
          "Buries crop residues deep inside to improve soil health",
          "Works efficiently in all types of soil conditions",
        ],
        hindi: [
          "मिट्टी को अच्छे से पलटता है ताकि नई फसल बोने योग्य हो",
          "अवशेषों को गहराई तक दबाता है जिससे मिट्टी की सेहत बेहतर होती है",
          "हर प्रकार की मिट्टी की स्थिति में आसानी से काम करता है",
        ],
        punjabi: [
          "ਮਿੱਟੀ ਨੂੰ ਚੰਗੀ ਤਰ੍ਹਾਂ ਪਲਟਦਾ ਹੈ ਤਾਂ ਜੋ ਨਵੀਂ ਫਸਲ ਲਈ ਤਿਆਰ ਹੋਵੇ",
          "ਅਵਸ਼ੇਸ਼ਾਂ ਨੂੰ ਅੰਦਰ ਗਹਿਰਾਈ ਵਿੱਚ ਦਬਾਉਂਦਾ ਹੈ ਮਿੱਟੀ ਦੀ ਸਿਹਤ ਸੁਧਾਰਦਾ ਹੈ",
          "ਹਰ ਕਿਸਮ ਦੀ ਮਿੱਟੀ ਵਿੱਚ ਆਸਾਨੀ ਨਾਲ ਕੰਮ ਕਰਦਾ ਹੈ",
        ],
      },
    },
    {
      id: 3,
      img: "/img/tradeimg4.png",
      name: { english: "Disc Harrow", hindi: "डिस्क हैरो", punjabi: "ਡਿਸਕ ਹੈਰੋ" },
      points: {
        english: [
          "Breaks soil clods into smaller particles for fine seedbed",
          "Levels the entire field surface for even crop growth",
          "Mixes crop residues thoroughly with the soil for organic matter",
        ],
        hindi: [
          "मिट्टी की गांठों को तोड़कर बीज बोने योग्य बनाता है",
          "पूरे खेत की सतह को बराबर करता है ताकि फसल समान रूप से बढ़े",
          "अवशेषों को मिट्टी में अच्छे से मिलाकर जैविक पदार्थ बढ़ाता है",
        ],
        punjabi: [
          "ਮਿੱਟੀ ਦੇ ਠੋਸ ਭਾਗਾਂ ਨੂੰ ਤੋੜ ਕੇ ਬੀਜ ਬੋਣ ਲਈ ਸੁਖਾਵਾਂ ਬਣਾਉਂਦਾ ਹੈ",
          "ਸਾਰੇ ਖੇਤ ਦੀ ਸਤਹ ਨੂੰ ਸਮਾਨ ਕਰਦਾ ਹੈ ਤਾਂ ਜੋ ਫਸਲ ਸਮਾਨ ਤਰ੍ਹਾਂ ਵਧੇ",
          "ਅਵਸ਼ੇਸ਼ਾਂ ਨੂੰ ਮਿੱਟੀ ਵਿੱਚ ਮਿਲਾ ਕੇ ਜੈਵਿਕ ਪਦਾਰਥ ਵਧਾਉਂਦਾ ਹੈ",
        ],
      },
    },
    {
      id: 4,
      img: "/img/tradeimg5.png",
      name: { english: "Rotary Tiller", hindi: "रोटावेटर टिलर", punjabi: "ਰੋਟਾਵੇਟਰ ਟਿਲਰ" },
      points: {
        english: [
          "Pulverizes hard soil to make it soft and friable",
          "Mixes manure and fertilizers evenly across the field",
          "Removes weeds effectively and prepares clean land",
        ],
        hindi: [
          "कठोर मिट्टी को भुरभुरी और नरम बनाता है",
          "खाद और उर्वरक को पूरे खेत में समान रूप से मिलाता है",
          "घास-फूस को आसानी से हटाकर साफ जमीन तैयार करता है",
        ],
        punjabi: [
          "ਸਖ਼ਤ ਮਿੱਟੀ ਨੂੰ ਭੁਰਭੁਰੀ ਅਤੇ ਨਰਮ ਬਣਾਉਂਦਾ ਹੈ",
          "ਖਾਦ ਅਤੇ ਖਾਦਾਂ ਨੂੰ ਪੂਰੇ ਖੇਤ ਵਿੱਚ ਸਮਾਨ ਤੌਰ 'ਤੇ ਮਿਲਾਉਂਦਾ ਹੈ",
          "ਘਾਹ-ਫੂਸ ਨੂੰ ਆਸਾਨੀ ਨਾਲ ਹਟਾ ਕੇ ਸਾਫ਼ ਜ਼ਮੀਨ ਤਿਆਰ ਕਰਦਾ ਹੈ",
        ],
      },
    },
    {
      id: 5,
      img: "/img/tradeimg3.png",
      name: { english: "Subsoiler", hindi: "सब-सोइलर", punjabi: "ਸਬਸੋਇਲਰ" },
      points: {
        english: [
          "Breaks hard and compact soil layers deep underground",
          "Improves root growth and helps plants absorb more nutrients",
          "Increases water infiltration and reduces soil erosion",
        ],
        hindi: [
          "कठोर और दबे हुए मिट्टी की परतों को गहराई से तोड़ता है",
          "जड़ों की वृद्धि करता है और पौधों को अधिक पोषक तत्व देता है",
          "पानी को मिट्टी में बेहतर तरीके से सोखने देता है और कटाव घटाता है",
        ],
        punjabi: [
          "ਸਖ਼ਤ ਅਤੇ ਦਬੀ ਹੋਈ ਮਿੱਟੀ ਦੀਆਂ ਪਰਤਾਂ ਨੂੰ ਗਹਿਰਾਈ ਵਿੱਚ ਤੋੜਦਾ ਹੈ",
          "ਜੜ੍ਹਾਂ ਦੀ ਵਾਧਾ ਕਰਦਾ ਹੈ ਅਤੇ ਪੌਧਿਆਂ ਨੂੰ ਹੋਰ ਪੋਸ਼ਣ ਦਿੰਦਾ ਹੈ",
          "ਪਾਣੀ ਨੂੰ ਮਿੱਟੀ ਵਿੱਚ ਵਧੀਆ ਤਰੀਕੇ ਨਾਲ ਸਮਾਉਂਦਾ ਹੈ ਅਤੇ ਕਟਾਅ ਘਟਾਉਂਦਾ ਹੈ",
        ],
      },
    },
    {
      id: 6,
      img: "/img/tradeimg6.png",
      name: { english: "Disc Plough", hindi: "डिस्क प्लाउ", punjabi: "ਡਿਸਕ ਪਲਾਓ" },
      points: {
        english: [
          "Cuts hard soil easily, even in rough and uneven fields",
          "Turns soil properly for tough farming conditions",
          "Works well in areas with deep-rooted weeds",
        ],
        hindi: [
          "कठोर जमीन को आसानी से काटता है, चाहे खेत असमान हो",
          "मुश्किल खेती की स्थिति में मिट्टी को अच्छे से पलटता है",
          "गहरी जड़ों वाली घास-फूस वाले इलाकों में भी काम करता है",
        ],
        punjabi: [
          "ਸਖ਼ਤ ਮਿੱਟੀ ਨੂੰ ਆਸਾਨੀ ਨਾਲ ਕੱਟਦਾ ਹੈ, ਭਾਵੇਂ ਖੇਤ ਅਸਮਾਨ ਹੋਵੇ",
          "ਮੁਸ਼ਕਲ ਖੇਤੀ ਹਾਲਾਤਾਂ ਵਿੱਚ ਮਿੱਟੀ ਨੂੰ ਚੰਗੀ ਤਰ੍ਹਾਂ ਪਲਟਦਾ ਹੈ",
          "ਡੂੰਘੀਆਂ ਜੜ੍ਹਾਂ ਵਾਲੀਆਂ ਘਾਹ ਵਾਲੇ ਖੇਤਰਾਂ ਵਿੱਚ ਵੀ ਕੰਮ ਕਰਦਾ ਹੈ",
        ],
      },
    },
    {
      id: 7,
      img: "/img/tradeimg7.png",
      name: { english: "Hydraulic", hindi: "हाइड्रोलिक", punjabi: "ਹਾਈਡ੍ਰੋਲਿਕ" },
      points: {
        english: [
          "Prepares fine soil texture for seed germination",
          "Used after ploughing to refine and smooth the surface",
          "Ensures uniform soil bed for better crop yield",
        ],
        hindi: [
          "बीज अंकुरण के लिए मिट्टी को महीन बनाता है",
          "जुताई के बाद सतह को और मुलायम व चिकना करता है",
          "बेहतर फसल उत्पादन के लिए समान मिट्टी का बिस्तर तैयार करता है",
        ],
        punjabi: [
          "ਬੀਜ ਅੰਕੁਰਣ ਲਈ ਮਿੱਟੀ ਨੂੰ ਬਾਰੀਕ ਬਣਾਉਂਦਾ ਹੈ",
          "ਜੁੱਤਾਈ ਤੋਂ ਬਾਅਦ ਸਤਹ ਨੂੰ ਹੋਰ ਮੋਲਾਇਮ ਤੇ ਸਮਾਨ ਕਰਦਾ ਹੈ",
          "ਵਧੀਆ ਫਸਲ ਲਈ ਇਕਸਾਰ ਮਿੱਟੀ ਦਾ ਬਿਸਤਰਾ ਤਿਆਰ ਕਰਦਾ ਹੈ",
        ],
      },
    },
    {
      id: 8,
      img: "/img/tradeimg8.png",
      name: { english: "Tractor Trolley", hindi: "ट्रैक्टर ट्रॉली", punjabi: "ਟ੍ਰੈਕਟਰ ਟਰੌਲੀ" },
      points: {
        english: [
          "Strong and durable body designed for heavy loads",
          "Wide tyres provide stability and smooth movement",
          "Comes with toolbox for farmers’ daily use and repair",
        ],
        hindi: [
          "भारी भार उठाने के लिए मजबूत और टिकाऊ बॉडी",
          "चौड़े टायर स्थिरता और स्मूद चलने की सुविधा देते हैं",
          "किसानों की रोज़मर्रा की ज़रूरत और मरम्मत के लिए टूलबॉक्स शामिल",
        ],
        punjabi: [
          "ਭਾਰੀ ਭਾਰ ਝੱਲਣ ਲਈ ਮਜ਼ਬੂਤ ਅਤੇ ਟਿਕਾਊ ਬਾਡੀ",
          "ਚੌੜੇ ਟਾਇਰ ਸਥਿਰਤਾ ਅਤੇ ਸੁਗਮ ਚਲਣ ਵਿੱਚ ਮਦਦ ਕਰਦੇ ਹਨ",
          "ਕਿਸਾਨਾਂ ਦੀ ਰੋਜ਼ਾਨਾ ਦੀ ਲੋੜ ਅਤੇ ਮੁਰੰਮਤ ਲਈ ਟੂਲਬਾਕਸ ਸਮੇਤ",
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
                <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" id="icon-btnn" className="icon-btn whatsapp">
                  <FaWhatsapp />
                </a>
                <a href="tel:+1234567890" id="icon-btnn" className="icon-btn call">
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
