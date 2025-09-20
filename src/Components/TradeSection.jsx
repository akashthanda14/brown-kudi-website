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
          "Sows seeds directly without additional field preparation",
          "Mulches crop residue evenly to improve soil fertility",
          "Reduces fuel costs and saves farming time",
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
      img: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1758360901/IMG5-min_mqmorh.jpg",
      name: {
        english: "Reversible MB Plough",
        hindi: "रिवर्सेबल एम.बी. हल",
        punjabi: "ਰੀਵਰਸੇਬਲ ਐਮ.ਬੀ. ਹਲ",
      },
      points: {
        english: [
          "Turns soil effectively to prepare for new crops",
          "Buries crop residues deeply to improve soil health",
          "Works efficiently in all soil conditions",
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
      img: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1758221888/IMG_4559_pgv628.jpg",
      name: { english: "Disc Harrow", hindi: "डिस्क हैरो", punjabi: "ਡਿਸਕ ਹੈਰੋ" },
      points: {
        english: [
          "Breaks soil clods into smaller particles for a fine seedbed",
          "Levels the field surface for even crop growth",
          "Mixes crop residues into soil to build organic matter",
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
      img: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1758215336/IMG18_cleanup_erweaz.png",
      name: { english: "Rotary Tiller", hindi: "रोटावेटर टिलर", punjabi: "ਰੋਟਾਵੇਟਰ ਟਿਲਰ" },
      points: {
        english: [
          "Pulverizes hard soil to create a soft, friable seedbed",
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
      img: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1758222712/Bown_kudi_4_dle67f.png",
      name: { english: "Subsoiler", hindi: "सब-सोइलर", punjabi: "ਸਬਸੋਇਲਰ" },
      points: {
        english: [
          "Breaks compact soil layers deep underground",
          "Improves root growth and nutrient uptake",
          "Increases water infiltration and reduces erosion",
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
      img: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1758361398/IMG29-min_d6dgyz.jpg",
      name: { english: "Disc Plough", hindi: "डिस्क प्लाउ", punjabi: "ਡਿਸਕ ਪਲਾਓ" },
      points: {
        english: [
          "Cuts hard soil easily, even in rough or uneven fields",
          "Turns soil reliably in tough farming conditions",
          "Performs well in fields with deep-rooted weeds",
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
      img: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1758361593/IMG7-min_vtgzy3.jpg",
      name: {
        english: "Hydraulic Harrow",
        hindi: "हाइड्रोलिक हैरो",
        punjabi: "ਹਾਈਡ੍ਰੋਲਿਕ ਹੈਰੋ",
      },
      points: {
        english: [
          "Prepares a fine soil texture for seed germination",
          "Used after ploughing to refine and smooth the surface",
          "Ensures a uniform soil bed for better crop yield",
        ],
        hindi: [
          "बीज अंकुरण के लिए मिट्टी को महीन बनाता है",
          "जुताई के बाद सतह को और समतल और मुलायम करता है",
          "बेहतर फसल उत्पादन के लिए समान मिट्टी का बिस्तर तैयार करता है",
        ],
        punjabi: [
          "ਬੀਜ ਅੰਕੁਰਣ ਲਈ ਮਿੱਟੀ ਨੂੰ ਬਾਰੀਕ ਬਣਾਉਂਦਾ ਹੈ",
          "ਜੁੱਤਾਈ ਤੋਂ ਬਾਅਦ ਸਤਹ ਨੂੰ ਹੋਰ ਸਮਾਨ ਤੇ ਮੋਲਾਇਮ ਕਰਦਾ ਹੈ",
          "ਵਧੀਆ ਫਸਲ ਲਈ ਇਕਸਾਰ ਮਿੱਟੀ ਦਾ ਬਿਸਤਰਾ ਤਿਆਰ ਕਰਦਾ ਹੈ",
        ],
      },
    },
    {
      id: 8,
      img: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1758361177/IMG_0325-min_kihacx.jpg",
      name: { english: "Tractor Trolley", hindi: "ट्रैक्टर ट्रॉली", punjabi: "ਟ੍ਰੈਕਟਰ ਟਰੌਲੀ" },
      points: {
        english: [
          "Strong, durable body designed for heavy loads",
          "Wide tyres provide stability and smoother movement",
          "Includes toolbox for daily use and quick repairs",
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
