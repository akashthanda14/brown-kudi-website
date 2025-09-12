import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "../Components/ProductDetail.css";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import Footer from "./Footer";

const button = {
  english: "Go Back",
  hindi: "वापस जाएं",
  punjabi: "ਵਾਪਸ ਜਾਓ",
};

const products = [
  {
    id: 1,
    img: "/img/tradeimg1.png",
    gallery: [
      "/img/tradeimg1.png",
      "/img/tradeimg2.png",
      "/img/tradeimg3.png",
      "/img/tradeimg4.png",
    ],
    name: {
      english: "Super Seeder",
      hindi: "सुपर सीडर मशीन",
      punjabi: "ਸੁਪਰ ਸੀਡਰ ਮਸ਼ੀਨ",
    },
    points: {
      english: [
        "Directly sows seeds without tillage.",
        "Mulches crop residue to improve fertility.",
        "Reduces fuel cost and saves time.",
        "Improves yield by better seed placement.",
        "Eco-friendly, reduces residue burning.",
      ],
      hindi: [
        "बिना जुताई के सीधे बीज बोता है।",
        "फसल अवशेष मिलाकर मिट्टी की उर्वरता बढ़ाता है।",
        "इंधन लागत घटाता और समय बचाता है।",
        "बेहतर बीज स्थान से पैदावार बढ़ती है।",
        "पर्यावरण अनुकूल, अवशेष जलाने की ज़रूरत नहीं।",
      ],
      punjabi: [
        "ਬਿਨਾਂ ਜੋਤਾਈ ਦੇ ਬੀਜ ਬੋਣ ਵਾਲੀ ਮਸ਼ੀਨ।",
        "ਫਸਲ ਦੇ ਅਵਸ਼ੇਸ਼ ਮਿਲਾ ਕੇ ਮਿੱਟੀ ਦੀ ਉਪਜਾਉਸ਼ਕਤਾ ਵਧਾਉਂਦਾ ਹੈ।",
        "ਇੰਧਨ ਦੀ ਲਾਗਤ ਘਟਦਾ ਹੈ ਅਤੇ ਸਮਾਂ ਬਚਦਾ ਹੈ।",
        "ਸਹੀ ਤਰੀਕੇ ਨਾਲ ਬੀਜ ਬੋਣ ਨਾਲ ਪੈਦਾਵਾਰ ਵਧਦੀ ਹੈ।",
        "ਪਰਿਆਵਰਣ-ਮਿੱਤਰ, ਅਵਸ਼ੇਸ਼ ਸਾੜਨ ਦੀ ਲੋੜ ਨਹੀਂ।",
      ],
    },
  },
  {
    id: 2,
    img: "/img/rotavator1.png",
    gallery: ["/img/rotavator1.png", "/img/rotavator2.png"],
    name: {
      english: "Rotavator",
      hindi: "रोटावेटर",
      punjabi: "ਰੋਟਾਵੇਟਰ",
    },
    points: {
      english: [
        "Efficient soil preparation for farming.",
        "Breaks hard soil into fine tilth.",
        "Saves fuel and time compared to ploughing.",
        "Improves water absorption in soil.",
        "Durable blades ensure long life.",
      ],
      hindi: [
        "खेती के लिए कुशल मिट्टी तैयारी।",
        "कठिन मिट्टी को नरम भुरभुरी बनाता है।",
        "जुताई की तुलना में ईंधन और समय बचाता है।",
        "मिट्टी में पानी अवशोषण बढ़ाता है।",
        "मजबूत ब्लेड लंबे समय तक चलते हैं।",
      ],
      punjabi: [
        "ਖੇਤੀ ਲਈ ਮਿੱਟੀ ਤਿਆਰ ਕਰਨ ਵਿੱਚ ਸਹਾਇਕ।",
        "ਸਖ਼ਤ ਮਿੱਟੀ ਨੂੰ ਭੁਰਭੁਰੀ ਬਣਾਉਂਦਾ ਹੈ।",
        "ਜੁਤਾਈ ਨਾਲੋਂ ਘੱਟ ਇੰਧਨ ਅਤੇ ਸਮਾਂ ਲਗਦਾ ਹੈ।",
        "ਮਿੱਟੀ ਵਿੱਚ ਪਾਣੀ ਦੀ ਅਵਸ਼ੋਸ਼ਣ ਵਧਦਾ ਹੈ।",
        "ਮਜ਼ਬੂਤ ਬਲੇਡ ਲੰਬੇ ਸਮੇਂ ਚਲਦੇ ਹਨ।",
      ],
    },
  },
  {
    id: 3,
    img: "/img/harvester1.png",
    gallery: ["/img/harvester1.png", "/img/harvester2.png"],
    name: {
      english: "Harvester",
      hindi: "हार्वेस्टर",
      punjabi: "ਹਾਰਵੇਸਟਰ",
    },
    points: {
      english: [
        "Harvests multiple crops efficiently.",
        "Reduces manual labour drastically.",
        "Increases farmer productivity.",
        "Works smoothly in large fields.",
        "Built for long durability.",
      ],
      hindi: [
        "कई फसलों की कटाई एक साथ करता है।",
        "मानव श्रम की ज़रूरत घटाता है।",
        "किसान की उत्पादकता बढ़ाता है।",
        "बड़े खेतों में आसानी से चलता है।",
        "लंबे समय तक चलने के लिए बनाया गया।",
      ],
      punjabi: [
        "ਕਈ ਫਸਲਾਂ ਨੂੰ ਇਕੱਠੇ ਕੱਟਣ ਯੋਗ।",
        "ਹੱਥੀਂ ਮਿਹਨਤ ਬਹੁਤ ਘਟਾਉਂਦਾ ਹੈ।",
        "ਕਿਸਾਨ ਦੀ ਉਤਪਾਦਕਤਾ ਵਧਦਾ ਹੈ।",
        "ਵੱਡੇ ਖੇਤਾਂ ਵਿੱਚ ਆਸਾਨੀ ਨਾਲ ਚਲਦਾ ਹੈ।",
        "ਲੰਬੇ ਸਮੇਂ ਲਈ ਬਣਾਇਆ ਗਿਆ।",
      ],
    },
  },
  {
    id: 4,
    img: "/img/baler1.png",
    gallery: ["/img/baler1.png", "/img/baler2.png"],
    name: {
      english: "Baler",
      hindi: "बेइलर मशीन",
      punjabi: "ਬੇਲਰ ਮਸ਼ੀਨ",
    },
    points: {
      english: [
        "Converts crop residue into bales.",
        "Helps in easy storage and transport.",
        "Reduces residue burning issues.",
        "Saves time and labour cost.",
        "Environment-friendly solution.",
      ],
      hindi: [
        "फसल अवशेष को गाठों में बदलता है।",
        "भंडारण और परिवहन आसान करता है।",
        "अवशेष जलाने की समस्या घटाता है।",
        "समय और श्रम लागत बचाता है।",
        "पर्यावरण के लिए अनुकूल।",
      ],
      punjabi: [
        "ਫਸਲ ਦੇ ਅਵਸ਼ੇਸ਼ਾਂ ਨੂੰ ਗਾਂਠਾਂ ਵਿੱਚ ਬਦਲਦਾ ਹੈ।",
        "ਸਟੋਰੇਜ ਅਤੇ ਆਵਾਜਾਈ ਆਸਾਨ ਬਣਦਾ ਹੈ।",
        "ਅਵਸ਼ੇਸ਼ ਸਾੜਨ ਦੀ ਸਮੱਸਿਆ ਘਟਾਉਂਦਾ ਹੈ।",
        "ਸਮਾਂ ਅਤੇ ਮਜ਼ਦੂਰੀ ਦੀ ਲਾਗਤ ਬਚਦਾ ਹੈ।",
        "ਪਰਿਆਵਰਣ ਲਈ ਮਿੱਤਰ।",
      ],
    },
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(id));
  const [mainImage, setMainImage] = useState(product?.img);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!product) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Product not found</h2>;
  }

  const handleBack = () => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById("trade-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <>
      <div className="product-container">
        <div className="product-detail-card">
          {/* Image Section */}
          <div className="product-detail-image">
            <img src={mainImage} alt={product.name[language]} className="main-image" />
            <div className="thumbnail-wrapper">
              {product.gallery.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="thumbnail"
                  className={`thumbnail ${mainImage === img ? "active" : ""}`}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="product-detail-info">
            <h2>{product.name[language]}</h2>
            <ul>
              {product.points[language].map((point, index) => (
                <li key={index}>✔ {point}</li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="product-detail-buttons">
              <button className="back-btn" onClick={handleBack}>
                {button[language]}
              </button>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="icon-btn whatsapp"
              >
                <FaWhatsapp />
              </a>
              <a href="tel:+919999999999" className="icon-btn call">
                <FaPhone />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
