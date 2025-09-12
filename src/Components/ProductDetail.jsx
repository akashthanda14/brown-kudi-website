import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "../Components/ProductDetail.css";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import Footer from "./Footer";
import { useScrollToTop } from "../hooks/useScrollToTop";
import TradeSection from "./TradeSection";

const button = {
  english: "Go Back",
  hindi: "वापस जाएं",
  punjabi: "ਵਾਪਸ ਜਾਓ",
};

const products = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750795/tradeimg1_zpzhqn.png",
    gallery: [
      "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750795/tradeimg1_zpzhqn.png",
      "",
      "",
      "",
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
    img: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750795/tradeimg2_s3un5g.png",
    gallery: ["https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750795/tradeimg2_s3un5g.png", "","", ""],
    name: {
      english: "Reversible MB Plough",
      hindi: "रिवर्सिबल एमबी प्लाउ",
      punjabi: "ਰਿਵਰਸਿਬਲ ਐਮਬੀ ਪਲਾਊ",
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
    img: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750795/tradeimg4_okphxy.png",
    gallery: ["https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750795/tradeimg4_okphxy.png", "","", ""],
    name: {
      english: "Disc Harrow",
      hindi: "डिस्क हैरो",
      punjabi: "ਡਿਸਕ ਹੈਰੋ",
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
    img: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750796/tradeimg5_ihn1yp.png",
    gallery: ["https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750796/tradeimg5_ihn1yp.png", "","", ""],
    name: {
      english: "Roary Tiller",
      hindi: "रोरी टिलर",
      punjabi: "ਰੋਰੀ ਟਿਲਰ",
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
  {
    id: 5,
    img: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750794/tradeimg3_lycnff.png",
    gallery: ["https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750794/tradeimg3_lycnff.png", "","", ""],
    name: {
      english: "Subsoiler",
      hindi: "सबसोइलर",
      punjabi: "ਸਬਸੋਇਲਰ",
    },
    points: {
      english: [
        "Breaks hard and compact soil layers.",
        "Improves root growth and water infiltration.",
        "Increases crop yield significantly.",
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
    id: 6,
    img: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750797/tradeimg6_btlwp4.png",
    gallery: ["https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750797/tradeimg6_btlwp4.png", "","", ""],
    name: {
      english: "Disc Plough",
      hindi: "डिस्क प्लाउ",
      punjabi: "ਡਿਸਕ ਪਲਾਅ",
    },
    points: {
      english: [
        "Cuts through tough soil and residue.",
        "Improves soil aeration and mixing.",
        "Increases water retention in soil.",
        "Reduces soil erosion.",
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
    id: 7,
    img: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750796/tradeimg7_mvbzfa.png",
    gallery: ["https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750796/tradeimg7_mvbzfa.png", "","", ""],
    name: {
      english: "Disc Plough",
      hindi: "डिस्क प्लाउ",
      punjabi: "ਡਿਸਕ ਪਲਾਅ",
    },
    points: {
      english: [
        "Cuts through tough soil and residue.",
        "Improves soil aeration and mixing.",
        "Increases water retention in soil.",
        "Reduces soil erosion.",
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
    id: 8,
    img: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750810/tradeimg8_l5z0t8.png",
    gallery: ["https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750810/tradeimg8_l5z0t8.png", "","",""],
    name: {
      english: "Disc Plough",
      hindi: "डिस्क प्लाउ",
      punjabi: "ਡਿਸਕ ਪਲਾਅ",
    },
    points: {
      english: [
        "Cuts through tough soil and residue.",
        "Improves soil aeration and mixing.",
        "Increases water retention in soil.",
        "Reduces soil erosion.",
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
];

const ProductDetail = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useScrollToTop();

  const product = products.find((p) => p.id === parseInt(id));
  const [mainImage, setMainImage] = useState(product?.img);

  // ✅ Fix: update main image when product changes
  useEffect(() => {
    if (product) {
      setMainImage(product.img);
    }
  }, [product]);

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
            <button onClick={handleBack} className="more-info-btn">Back to Products</button>
          </div>
        </div>
      </div>
      <TradeSection />
      <Footer />
    </>
  );
};

export default ProductDetail;
