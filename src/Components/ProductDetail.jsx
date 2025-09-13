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
      "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757770767/blade-1024x718_reopnl.png",
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
        "Sows seeds directly into standing stubble without tillage.",
        "Reduces residue burning by mixing crop remains in soil.",
        "Saves fuel and time by minimizing field operations.",
        "Improves soil health and fertility with mulching.",
        "Eco-friendly solution to boost crop yield.",
      ],
      hindi: [
        "बिना जुताई के खड़े अवशेष में सीधे बीज बोता है।",
        "फसल अवशेष को मिट्टी में मिलाकर जलाने की समस्या घटाता है।",
        "कम जुताई से समय और ईंधन की बचत करता है।",
        "मल्चिंग से मिट्टी की उर्वरता और सेहत सुधारता है।",
        "फसल उत्पादन बढ़ाने का पर्यावरण-अनुकूल समाधान।",
      ],
      punjabi: [
        "ਖੜ੍ਹੇ ਅਵਸ਼ੇਸ਼ਾਂ ਵਿੱਚ ਬਿਨਾਂ ਜੋਤਾਈ ਦੇ ਸਿੱਧਾ ਬੀਜ ਬੋਣ ਵਾਲੀ ਮਸ਼ੀਨ।",
        "ਫਸਲ ਦੇ ਅਵਸ਼ੇਸ਼ਾਂ ਨੂੰ ਮਿੱਟੀ ਵਿੱਚ ਮਿਲਾ ਕੇ ਸਾੜਨ ਦੀ ਸਮੱਸਿਆ ਘਟਾਉਂਦੀ ਹੈ।",
        "ਘੱਟ ਜੁਤਾਈ ਨਾਲ ਸਮਾਂ ਅਤੇ ਇੰਧਨ ਦੀ ਬਚਤ।",
        "ਮਲਚਿੰਗ ਨਾਲ ਮਿੱਟੀ ਦੀ ਉਪਜਾਉਸ਼ਕਤਾ ਅਤੇ ਸਿਹਤ ਸੁਧਾਰਦੀ ਹੈ।",
        "ਪੈਦਾਵਾਰ ਵਧਾਉਣ ਲਈ ਪਰਿਆਵਰਣ-ਮਿੱਤਰ ਹੱਲ।",
      ],
    },
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750795/tradeimg2_s3un5g.png",
    gallery: [
      "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750795/tradeimg2_s3un5g.png",
      "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757770266/pngegg_3_fnrdws.png",
      "",
      "",
    ],
    name: {
      english: "Reversible MB Plough",
      hindi: "रिवर्सिबल एमबी हल",
      punjabi: "ਰਿਵਰਸਿਬਲ ਐਮਬੀ ਹਲ",
    },
    points: {
      english: [
        "Turns soil efficiently and buries crop residues.",
        "Reversible design saves time by avoiding empty runs.",
        "Breaks hardpan soil layers for better root growth.",
        "Improves soil aeration and moisture retention.",
        "Strong blades ensure long life and durability.",
      ],
      hindi: [
        "मिट्टी को कुशलतापूर्वक पलटता और अवशेष मिट्टी में मिलाता है।",
        "रिवर्सिबल डिज़ाइन से खाली फेरे में समय नहीं लगता।",
        "कठोर परत को तोड़कर जड़ों की वृद्धि बेहतर बनाता है।",
        "मिट्टी का वायुसंचार और नमी धारण क्षमता बढ़ाता है।",
        "मजबूत ब्लेड लंबे समय तक टिकाऊ रहते हैं।",
      ],
      punjabi: [
        "ਮਿੱਟੀ ਨੂੰ ਕੁਸ਼ਲਤਾਪੂਰਵਕ ਪਲਟਦਾ ਅਤੇ ਅਵਸ਼ੇਸ਼ਾਂ ਨੂੰ ਮਿੱਟੀ ਵਿੱਚ ਦਬਾਉਂਦਾ ਹੈ।",
        "ਰਿਵਰਸਿਬਲ ਡਿਜ਼ਾਈਨ ਨਾਲ ਖਾਲੀ ਫੇਰੇ ਦਾ ਸਮਾਂ ਬਚਦਾ ਹੈ।",
        "ਸਖ਼ਤ ਮਿੱਟੀ ਦੀ ਪਰਤ ਤੋੜ ਕੇ ਜੜਾਂ ਦੀ ਵਾਧਾ ਸੁਧਾਰਦਾ ਹੈ।",
        "ਮਿੱਟੀ ਵਿੱਚ ਹਵਾ ਅਤੇ ਨਮੀ ਰੋਕਣ ਦੀ ਸਮਰੱਥਾ ਵਧਾਉਂਦਾ ਹੈ।",
        "ਮਜ਼ਬੂਤ ਬਲੇਡ ਲੰਬੇ ਸਮੇਂ ਲਈ ਟਿਕਾਊ।",
      ],
    },
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757771043/erasebg-transformed_yqjo4s.png",
    gallery: [
      "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757771043/erasebg-transformed_yqjo4s.png",
      "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757770366/pngegg_4_iyactb.png",
      "https://res.cloudinary.com/dnyv7wabr/image/upload/a_hflip/v1757771043/erasebg-transformed_yqjo4s.png",
      "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750795/tradeimg4_okphxy.png",
    ],
    name: {
      english: "Disc Harrow",
      hindi: "डिस्क हैरो",
      punjabi: "ਡਿਸਕ ਹੈਰੋ",
    },
    points: {
      english: [
        "Breaks clods and smoothens the soil after ploughing.",
        "Effective for mixing manure and fertilizer with soil.",
        "Controls weeds and incorporates crop residues.",
        "Prepares an ideal seedbed for sowing.",
        "Durable discs for long-lasting performance.",
      ],
      hindi: [
        "जुताई के बाद मिट्टी को भुरभुरी और समतल बनाता है।",
        "खाद और उर्वरक को मिट्टी में अच्छी तरह मिलाता है।",
        "खरपतवार नियंत्रित करता और अवशेष मिलाता है।",
        "बीज बुवाई के लिए उपयुक्त बीजशैया तैयार करता है।",
        "टिकाऊ डिस्क लंबे समय तक प्रदर्शन देती हैं।",
      ],
      punjabi: [
        "ਜੁਤਾਈ ਤੋਂ ਬਾਅਦ ਮਿੱਟੀ ਨੂੰ ਭੁਰਭੁਰੀ ਅਤੇ ਸਮਤਲ ਕਰਦਾ ਹੈ।",
        "ਖਾਦ ਅਤੇ ਖਾਦ ਨੂੰ ਮਿੱਟੀ ਨਾਲ ਚੰਗੀ ਤਰ੍ਹਾਂ ਮਿਲਾਉਂਦਾ ਹੈ।",
        "ਜੰਗਲੀ ਘਾਹ ਕੰਟਰੋਲ ਕਰਦਾ ਅਤੇ ਅਵਸ਼ੇਸ਼ ਮਿਲਾਉਂਦਾ ਹੈ।",
        "ਬੀਜ ਬੋਣ ਲਈ ਉਚਿਤ ਬੀਜ-ਬਿਸਤਰਾ ਤਿਆਰ ਕਰਦਾ ਹੈ।",
        "ਟਿਕਾਊ ਡਿਸਕ ਲੰਬੇ ਸਮੇਂ ਲਈ ਵਧੀਆ ਪ੍ਰਦਰਸ਼ਨ।",
      ],
    },
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750796/tradeimg5_ihn1yp.png",
    gallery: [
      "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750796/tradeimg5_ihn1yp.png",
      "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757769578/pngegg_1_kwd5k1.png",
      "",
      "",
    ],
    name: {
      english: "Rotary Tiller",
      hindi: "रोटरी टिलर",
      punjabi: "ਰੋਟਰੀ ਟਿਲਰ",
    },
    points: {
      english: [
        "Prepares fine seedbed in fewer passes.",
        "Pulverizes soil and improves tilth.",
        "Saves time, labour, and fuel costs.",
        "Controls weeds effectively during tillage.",
        "Improves soil aeration and moisture conservation.",
      ],
      hindi: [
        "कम फेरों में उत्तम बीजशैया तैयार करता है।",
        "मिट्टी को भुरभुरी और बेहतर बनाता है।",
        "समय, श्रम और ईंधन की बचत करता है।",
        "जुताई के दौरान खरपतवार नियंत्रित करता है।",
        "मिट्टी का वायुसंचार और नमी संरक्षण बढ़ाता है।",
      ],
      punjabi: [
        "ਘੱਟ ਫੇਰਿਆਂ ਵਿੱਚ ਵਧੀਆ ਬੀਜ-ਬਿਸਤਰਾ ਤਿਆਰ ਕਰਦਾ ਹੈ।",
        "ਮਿੱਟੀ ਨੂੰ ਭੁਰਭੁਰੀ ਅਤੇ ਬਿਹਤਰ ਬਣਾਉਂਦਾ ਹੈ।",
        "ਸਮਾਂ, ਮਜ਼ਦੂਰੀ ਅਤੇ ਇੰਧਨ ਦੀ ਬਚਤ।",
        "ਜੁਤਾਈ ਦੌਰਾਨ ਜੰਗਲੀ ਘਾਹ ਕੰਟਰੋਲ ਕਰਦਾ ਹੈ।",
        "ਮਿੱਟੀ ਦੀ ਹਵਾਬੰਦੀ ਅਤੇ ਨਮੀ ਸੰਰੱਖਣ ਵਧਾਉਂਦਾ ਹੈ।",
      ],
    },
  },
  {
    id: 5,
    img: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757769961/pngegg_2_fxnwbe.png",
    gallery: [
      "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750794/tradeimg3_lycnff.png",
      "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757772240/pngegg_5_qhp3w0.png",
      "",
      "",
    ],
    name: {
      english: "Subsoiler",
      hindi: "सबसोइलर",
      punjabi: "ਸਬਸੋਇਲਰ",
    },
    points: {
      english: [
        "Breaks hardpan layers deep in the soil.",
        "Improves root penetration and crop growth.",
        "Increases water infiltration and storage capacity.",
        "Reduces soil compaction and improves yield.",
        "Durable tynes for long field life.",
      ],
      hindi: [
        "मिट्टी की गहराई में कठोर परत तोड़ता है।",
        "जड़ों की पैठ और फसल वृद्धि में मदद करता है।",
        "पानी अवशोषण और भंडारण क्षमता बढ़ाता है।",
        "मिट्टी की सघनता घटाकर पैदावार बढ़ाता है।",
        "मजबूत टाइन लंबे समय तक चलते हैं।",
      ],
      punjabi: [
        "ਮਿੱਟੀ ਵਿੱਚ ਗਹਿਰਾਈ ਵਾਲੀ ਸਖ਼ਤ ਪਰਤ ਤੋੜਦਾ ਹੈ।",
        "ਜੜਾਂ ਦੀ ਪੈਠ ਅਤੇ ਫਸਲ ਵਾਧੇ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।",
        "ਪਾਣੀ ਦੀ ਅਵਸ਼ੋਸ਼ਣ ਅਤੇ ਸਟੋਰੇਜ ਸਮਰੱਥਾ ਵਧਾਉਂਦਾ ਹੈ।",
        "ਮਿੱਟੀ ਦੀ ਸਖ਼ਤੀ ਘਟਾ ਕੇ ਪੈਦਾਵਾਰ ਵਧਾਉਂਦਾ ਹੈ।",
        "ਮਜ਼ਬੂਤ ਟਾਈਨ ਲੰਬੇ ਸਮੇਂ ਚੱਲਦੇ ਹਨ।",
      ],
    },
  },
  {
    id: 6,
    img: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750797/tradeimg6_btlwp4.png",
    gallery: [
      "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750797/tradeimg6_btlwp4.png",
      "",
      "",
      "",
    ],
    name: {
      english: "Disc Plough",
      hindi: "डिस्क हल",
      punjabi: "ਡਿਸਕ ਹਲ",
    },
    points: {
      english: [
        "Used for deep ploughing in hard and stony soils.",
        "Effective in land reclamation and soil mixing.",
        "Cuts through crop residue and tough soils.",
        "Improves soil aeration and weed control.",
        "Durable discs for long-term use.",
      ],
      hindi: [
        "कठोर और पथरीली मिट्टी में गहरी जुताई के लिए उपयोगी।",
        "भूमि सुधार और मिट्टी मिश्रण में सहायक।",
        "फसल अवशेष और कठोर मिट्टी को काटता है।",
        "मिट्टी का वायुसंचार और खरपतवार नियंत्रण सुधारता है।",
        "टिकाऊ डिस्क लंबे समय तक उपयोगी।",
      ],
      punjabi: [
        "ਸਖ਼ਤ ਅਤੇ ਪੱਥਰੀਲੀ ਮਿੱਟੀ ਵਿੱਚ ਡੂੰਘੀ ਜੁਤਾਈ ਲਈ ਵਰਤੀ ਜਾਂਦੀ ਹੈ।",
        "ਜ਼ਮੀਨ ਸੁਧਾਰ ਅਤੇ ਮਿੱਟੀ ਮਿਲਾਉਣ ਲਈ ਲਾਭਕਾਰੀ।",
        "ਫਸਲ ਦੇ ਅਵਸ਼ੇਸ਼ ਅਤੇ ਸਖ਼ਤ ਮਿੱਟੀ ਨੂੰ ਕੱਟਦਾ ਹੈ।",
        "ਮਿੱਟੀ ਦੀ ਹਵਾਬੰਦੀ ਅਤੇ ਜੰਗਲੀ ਘਾਹ ਕੰਟਰੋਲ ਸੁਧਾਰਦਾ ਹੈ।",
        "ਟਿਕਾਊ ਡਿਸਕ ਲੰਬੇ ਸਮੇਂ ਲਈ ਵਰਤੋਂ ਯੋਗ।",
      ],
    },
  },
  {
    id: 7,
    img: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750796/tradeimg7_mvbzfa.png",
    gallery: [
      "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750796/tradeimg7_mvbzfa.png",
      "",
      "",
      "",
    ],
    name: {
      english: "Hydraulic Reversible Plough",
      hindi: "हाइड्रोलिक रिवर्सिबल हल",
      punjabi: "ਹਾਈਡ੍ਰੋਲਿਕ ਰਿਵਰਸਿਬਲ ਹਲ",
    },
    points: {
      english: [
        "Hydraulic system makes reversing easy and fast.",
        "Ensures uniform soil turning in both directions.",
        "Reduces fuel consumption and time.",
        "Suitable for all types of soil.",
        "Strong frame and blades ensure durability.",
      ],
      hindi: [
        "हाइड्रोलिक सिस्टम से हल पलटना आसान और तेज़।",
        "दोनों दिशाओं में समान रूप से मिट्टी पलटता है।",
        "ईंधन की खपत और समय घटाता है।",
        "सभी प्रकार की मिट्टी के लिए उपयुक्त।",
        "मजबूत ढांचा और ब्लेड टिकाऊ।",
      ],
      punjabi: [
        "ਹਾਈਡ੍ਰੋਲਿਕ ਸਿਸਟਮ ਨਾਲ ਹਲ ਪਲਟਣਾ ਆਸਾਨ ਅਤੇ ਤੇਜ਼।",
        "ਦੋਵੇਂ ਪਾਸਿਆਂ ਮਿੱਟੀ ਨੂੰ ਸਮਾਨ ਤਰ੍ਹਾਂ ਪਲਟਦਾ ਹੈ।",
        "ਇੰਧਨ ਦੀ ਖਪਤ ਅਤੇ ਸਮਾਂ ਘਟਦਾ ਹੈ।",
        "ਹਰ ਕਿਸਮ ਦੀ ਮਿੱਟੀ ਲਈ ਉਚਿਤ।",
        "ਮਜ਼ਬੂਤ ਢਾਂਚਾ ਅਤੇ ਬਲੇਡ ਟਿਕਾਊ।",
      ],
    },
  },
  {
    id: 8,
    img: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750810/tradeimg8_l5z0t8.png",
    gallery: [
      "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750810/tradeimg8_l5z0t8.png",
      "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757771733/Untitled_design_2_piruqp.png",
      "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757771916/Untitled_design_3_ryv6mk.png",
      "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757772141/Untitled_design_4_xvohsf.png",
    ],
    name: {
      english: "Tractor Trolley",
      hindi: "ट्रैक्टर ट्रॉली",
      punjabi: "ਟ੍ਰੈਕਟਰ ਟਰੌਲੀ",
    },
    points: {
      english: [
        "Heavy-duty trolley for transporting crops and goods.",
        "Available in multiple sizes and capacities.",
        "Durable body with strong suspension system.",
        "Easy to attach and operate with tractors.",
        "Ideal for farm and commercial use.",
      ],
      hindi: [
        "फसलों और सामान की ढुलाई के लिए मजबूत ट्रॉली।",
        "कई आकार और क्षमताओं में उपलब्ध।",
        "टिकाऊ बॉडी और मजबूत सस्पेंशन।",
        "ट्रैक्टर से जोड़ना और चलाना आसान।",
        "खेती और वाणिज्यिक दोनों उपयोगों के लिए आदर्श।",
      ],
      punjabi: [
        "ਫਸਲਾਂ ਅਤੇ ਸਮਾਨ ਦੀ ਆਵਾਜਾਈ ਲਈ ਮਜ਼ਬੂਤ ਟਰੌਲੀ।",
        "ਕਈ ਆਕਾਰ ਅਤੇ ਸਮਰੱਥਾ ਵਿੱਚ ਉਪਲਬਧ।",
        "ਟਿਕਾਊ ਬਾਡੀ ਅਤੇ ਮਜ਼ਬੂਤ ਸਸਪੈਨਸ਼ਨ।",
        "ਟ੍ਰੈਕਟਰ ਨਾਲ ਜੋੜਨਾ ਅਤੇ ਚਲਾਉਣਾ ਆਸਾਨ।",
        "ਖੇਤੀ ਅਤੇ ਵਪਾਰਕ ਵਰਤੋਂ ਲਈ ਆਦਰਸ਼।",
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
            <button onClick={handleBack} className="back-btn">
              {button[language]} {/* ✅ Language context ke hisaab se text change hoga */}
            </button>


          </div>
        </div>
      </div>
      <TradeSection />
      <Footer />
    </>
  );
};

export default ProductDetail;
