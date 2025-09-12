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
        "Sows seeds directly into the soil without extra preparation.",
        "Mulches crop residue evenly for better soil fertility.",
        "Reduces fuel cost and saves valuable time in farming.",
        "Improves crop yield by efficient seed placement.",
        "Eco-friendly method reducing burning of crop residue.",
      ],
      hindi: [
        "बीज सीधे मिट्टी में बोता है, बिना अतिरिक्त तैयारी के।",
        "फसल अवशेषों को समान रूप से मिलाता है जिससे मिट्टी की उर्वरता बढ़ती है।",
        "इंधन की लागत घटाता है और किसानों का समय बचाता है।",
        "सटीक बीज बोने से फसल उत्पादन बढ़ता है।",
        "फसल अवशेष जलाने की ज़रूरत नहीं, पर्यावरण के अनुकूल।",
      ],
      punjabi: [
        "ਬੀਜ ਸਿੱਧਾ ਮਿੱਟੀ ਵਿੱਚ ਬੋਤਾ ਹੈ, ਹੋਰ ਤਿਆਰੀ ਦੀ ਲੋੜ ਨਹੀਂ।",
        "ਫਸਲ ਦੇ ਅਵਸ਼ੇਸ਼ ਸਮਾਨ ਤੌਰ ਤੇ ਮਿਲਾ ਕੇ ਉਪਜਾਉਸ਼ਕਤਾ ਵਧਾਉਂਦਾ ਹੈ।",
        "ਇੰਧਨ ਦੀ ਲਾਗਤ ਘਟਾਉਂਦਾ ਹੈ ਅਤੇ ਕਿਸਾਨਾਂ ਦਾ ਸਮਾਂ ਬਚਾਉਂਦਾ ਹੈ।",
        "ਸਹੀ ਤਰੀਕੇ ਨਾਲ ਬੀਜ ਬੋਣ ਨਾਲ ਫਸਲ ਦੀ ਪੈਦਾਵਾਰ ਵਧਦੀ ਹੈ।",
        "ਫਸਲ ਦੇ ਅਵਸ਼ੇਸ਼ ਸਾੜਨ ਦੀ ਲੋੜ ਨਹੀਂ, ਪਰਿਆਵਰਣ-ਮਿੱਤਰ।",
      ],
    },
  },
  // बाकी products add कर सकते हो...
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
