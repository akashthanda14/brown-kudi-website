import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AboutSection from "../Components/AboutSection";
import "../Components/AboutSection.css";
import { Users, Briefcase, CheckCircle2, ClipboardList, Award, Target, Heart, Star } from "lucide-react";
import Footer from "../Components/Footer";
import { useLanguage } from "../context/LanguageContext";
import { useScrollToTop } from "../hooks/useScrollToTop";

const additionalStats = [
  { id: 1, icon: <Award size={50} strokeWidth={1.5} />, number: 8, label: "Years in Business" },
  { id: 2, icon: <Target size={50} strokeWidth={1.5} />, number: 95, label: "Client Satisfaction %" },
  { id: 3, icon: <Heart size={50} strokeWidth={1.5} />, number: 250, label: "Equipment Delivered" },
  { id: 4, icon: <Star size={50} strokeWidth={1.5} />, number: 12, label: "Countries Served" },
];

const teamMembers = [
  {
    id: 1,
    name: "Harpal Kaur Dhanjal",
    role: {
      english: "Co-Founder & Operations Director",
      hindi: "सह-संस्थापक और संचालन निदेशक",
      punjabi: "ਸਹਿ-ਸੰਸਥਾਪਕ ਅਤੇ ਓਪਰੇਸ਼ਨ ਡਾਇਰੈਕਟਰ"
    },
    image: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750775/owner_ehbimh.jpg",
    description: {
      english: "Punjab's first professional female welder turned international entrepreneur. With 1.9M Instagram followers, she has revolutionized agricultural equipment trade between India, Australia, and Canada. From mastering arc welding to building a multi-million dollar import-export business, she has redefined what's possible for women in agriculture.",
      hindi: "पंजाब की पहली पेशेवर महिला वेल्डर जो अंतरराष्ट्रीय उद्यमी बनीं। 1.9M इंस्टाग्राम फॉलोअर्स के साथ, उन्होंने भारत, ऑस्ट्रेलिया और कनाडा के बीच कृषि उपकरण व्यापार में क्रांति ला दी। आर्क वेल्डिंग में महारत हासिल करने से लेकर मल्टी-मिलियन डॉलर के आयात-निर्यात व्यवसाय तक, उन्होंने कृषि में महिलाओं के लिए संभावनाओं को फिर से परिभाषित किया।",
      punjabi: "ਪੰਜਾਬ ਦੀ ਪਹਿਲੀ ਪ੍ਰੋਫੈਸ਼ਨਲ ਮਹਿਲਾ ਵੇਲਡਰ ਜੋ ਅੰਤਰਰਾਸ਼ਟਰੀ ਉਦਯੋਗਪਤੀ ਬਣ ਗਈ। 1.9M ਇੰਸਟਾਗ੍ਰਾਮ ਫਾਲੋਅਰਾਂ ਨਾਲ, ਉਸਨੇ ਭਾਰਤ, ਆਸਟ੍ਰੇਲੀਆ ਅਤੇ ਕੈਨੇਡਾ ਵਿਚ ਖੇਤੀਬਾੜੀ ਉਪਕਰਣ ਵਪਾਰ ਵਿੱਚ ਇਨਕਲਾਬ ਲਿਆ। ਆਰਕ ਵੇਲਡਿੰਗ ਵਿੱਚ ਮਹਾਰਤ ਤੋਂ ਲੈ ਕੇ ਮਲਟੀ-ਮਿਲੀਅਨ ਡਾਲਰ ਆਯਾਤ-ਨਿਰਯਾਤ ਵਪਾਰ ਤੱਕ, ਉਸਨੇ ਖੇਤੀ ਵਿੱਚ ਔਰਤਾਂ ਲਈ ਸੰਭਾਵਨਾਵਾਂ ਨੂੰ ਨਵਾਂ ਰੂਪ ਦਿੱਤਾ।"
    },
    achievements: {
      english: ["1.9M+ Social Media Following", "Australia-Canada Trade Partner", "Professional Welder & Fabricator", "Agricultural Innovation Leader"],
      hindi: ["1.9M+ सोशल मीडिया फॉलोअर्स", "ऑस्ट्रेलिया-कनाडा व्यापार भागीदार", "पेशेवर वेल्डर और फेब्रिकेटर", "कृषि नवाचार नेता"],
      punjabi: ["1.9M+ ਸੋਸ਼ਲ ਮੀਡੀਆ ਫਾਲੋਅਰ", "ਆਸਟ੍ਰੇਲੀਆ-ਕੈਨੇਡਾ ਵਪਾਰ ਸਾਥੀ", "ਪ੍ਰੋਫੈਸ਼ਨਲ ਵੇਲਡਰ ਅਤੇ ਫੈਬ੍ਰਿਕੇਟਰ", "ਖੇਤੀਬਾੜੀ ਨਵੋਨਮੈਸ਼ਨ ਲੀਡਰ"]
    }
  },
  {
    id: 2,
    name: "Bhagwan Singh Dhanjal",
    role: {
      english: "Founder & CEO - Brown Kudi Enterprises",
      hindi: "संस्थापक और सीईओ - ब्राउन कुड़ी एंटरप्राइजेज",
      punjabi: "ਸੰਸਥਾਪਕ ਅਤੇ ਸੀਈਓ - ਬ੍ਰਾਊਨ ਕੁੜੀ ਏਂਟਰਪ੍ਰਾਈਜ਼ਸ"
    },
    image: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757875441/father_pr6sen.png",
    description: {
      english: "Agricultural veteran with 30+ years of farming and equipment expertise. Oversees quality control for all imported machinery and provides technical guidance for equipment selection. His deep understanding of Indian farming needs ensures every piece of equipment meets local requirements.",
      hindi: "30+ वर्षों के कृषि अनुभव वाले विशेषज्ञ। सभी आयातित मशीनरी के लिए गुणवत्ता नियंत्रण की निगरानी करते हैं और उपकरण चयन के लिए तकनीकी मार्गदर्शन प्रदान करते हैं। भारतीय कृषि आवश्यकताओं की उनकी गहरी समझ सुनिश्चित करती है कि हर उपकरण स्थानीय आवश्यकताओं को पूरा करे।",
      punjabi: "30+ ਸਾਲਾਂ ਦੇ ਖੇਤੀਬਾੜੀ ਅਨੁਭਵ ਵਾਲੇ ਮਾਹਿਰ। ਸਾਰੀ ਆਯਾਤ ਕੀਤੀ ਮਸ਼ੀਨਰੀ ਲਈ ਗੁਣਵੱਤਾ ਨਿਯੰਤਰਣ ਦੀ ਨਿਗਰਾਨੀ ਕਰਦੇ ਹਨ ਅਤੇ ਉਪਕਰਣ ਚੋਣ ਲਈ ਤਕਨੀਕੀ ਮਾਰਗਦਰਸ਼ਨ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹਨ। ਭਾਰਤੀ ਖੇਤੀ ਦੀਆਂ ਜ਼ਰੂਰਤਾਂ ਦੀਆਂ ਉਹਨਾਂ ਦੀ ਗਹਿਰੀ ਸਮਝ ਯਕੀਨੀ ਬਣਾਉਂਦੀ ਹੈ ਕਿ ਹਰ ਉਪਕਰਣ ਸਥਾਨਕ ਮਿਆਰਾਂ ਨੂੰ ਪੂਰਾ ਕਰੇ।"
    },
    achievements: {
      english: ["30+ Years Agriculture Experience", "Equipment Quality Specialist", "Farming Operations Expert", "Technical Advisory Leader"],
      hindi: ["30+ वर्षों का कृषि अनुभव", "उपकरण गुणवत्ता विशेषज्ञ", "कृषि संचालन विशेषज्ञ", "तकनीकी सलाहकार नेता"],
      punjabi: ["30+ ਸਾਲ ਖੇਤੀਬਾੜੀ ਅਨੁਭਵ", "ਉਪਕਰਣ ਗੁਣਵੱਤਾ ਵਿਸ਼ੇਸ਼ਜ্ঞান", "ਖੇਤੀਚਾਲੂ ਮਾਹਿਰ", "ਤਕਨੀਕੀ ਸਲਾਹਕਾਰ ਲੀਡਰ"]
    }
  },
  {
    id: 3,
    name: "Technical Team",
    role: {
      english: "Engineering & Support Specialists",
      hindi: "इंजीनियरिंग और समर्थन विशेषज्ञ",
      punjabi: "ਇੰਜੀਨੀਅਰਿੰਗ ਅਤੇ ਸਹਾਇਤਾ ਵਿਸ਼ੇਸ਼ਜਨ"
    },
    image: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750724/gallery8_wopidz.png",
    description: {
      english: "Experienced welders and specialized agricultural technicians work with utmost precision in equipment assembly and customer support. Our team ensures that every tyre and agricultural machine meets the highest international standards and is adapted to the unique needs of Indian farming conditions.",
      hindi: "अनुभवी वेल्डर और विशेष कृषि तकनीशियन उपकरण असेंबली और ग्राहक सहायता में पूरी सटीकता के साथ काम करते हैं। हमारी टीम सुनिश्चित करती है कि हर टायर और कृषि मशीन उच्चतम अंतरराष्ट्रीय मानकों को पूरा करे और भारतीय कृषि परिस्थितियों की अनूठी आवश्यकताओं के अनुसार अनुकूलित हो।",
      punjabi: "ਅਨੁਭਵੀ ਵੇਲਡਰ ਅਤੇ ਵਿਸ਼ੇਸ਼ ਖੇਤੀਬਾੜੀ ਤਕਨੀਸ਼ੀਅਨ ਉਪਕਰਣ ਅਸੰਬਲੀ ਅਤੇ ਗਾਹਕ ਸਹਾਇਤਾ ਵਿੱਚ ਪੂਰੀ ਸਹੀਤਾ ਨਾਲ ਕੰਮ ਕਰਦੇ ਹਨ। ਸਾਡੀ ਟੀਮ ਯਕੀਨੀ ਬਣਾਉਂਦੀ ਹੈ ਕਿ ਹਰ ਟਾਇਰ ਅਤੇ ਖੇਤੀਬਾੜੀ ਮਸ਼ੀਨ ਉੱਚਤਮ ਅੰਤਰਰਾਸ਼ਟਰੀ ਮਿਆਰਾਂ ਨੂੰ ਪੂਰਾ ਕਰੇ ਅਤੇ ਭਾਰਤੀ ਖੇਤੀ ਦੀਆਂ ਵਿਲੱਖਣ ਜ਼ਰੂਰਤਾਂ ਅਨੁਸਾਰ ਅਨੁਕੂਲ ਹੋਵੇ।"
    },
    achievements: {
      english: ["Certified Technical Expertise", "International Quality Standards", "24/7 Customer Support", "On-site Installation Services"],
      hindi: ["प्रमाणित तकनीकी विशेषज्ञता", "अंतरराष्ट्रीय गुणवत्ता मानक", "24/7 ग्राहक सहायता", "स्थल पर स्थापना सेवाएं"],
      punjabi: ["ਪ੍ਰਮਾਣਿਤ ਤਕਨੀਕੀ ਵਿਸ਼ੇਸ਼ਜ্ঞান", "ਅੰਤਰਰਾਸ਼ਟਰੀ ਗੁਣਵੱਤਾ ਮਿਆਰ", "24/7 ਗਾਹਕ ਸਹਾਇਤਾ", "ਸਾਈਟ ਤੇ ਇੰਸਟਾਲੇਸ਼ਨ ਸੇਵਾਵਾਂ"]
    }
  }
];

const values = [
  {
    icon: <Target size={40} strokeWidth={1.5} />,
    title: {
      english: "Our Core Values",
      hindi: "हमारे मूल मूल्य",
      punjabi: "ਸਾਡੇ ਮੁੱਢਲੇ ਮੁੱਲ"
    },
    description: {
      english: "Every tyre and agricultural equipment undergoes rigorous quality checks. We import only from certified manufacturers in Australia and Canada, ensuring durability and performance in Indian conditions.",
      hindi: "हर टायर और कृषि उपकरण कड़े गुणवत्ता परीक्षण से गुजरता है। हम केवल ऑस्ट्रेलिया और कनाडा के प्रमाणित निर्माताओं से आयात करते हैं, जिससे भारतीय परिस्थितियों में स्थायित्व और प्रदर्शन सुनिश्चित होता है।",
      punjabi: "ਹਰ ਟਾਇਰ ਅਤੇ ਖੇਤੀਬਾੜੀ ਦਾ ਉਪਕਰਣ ਕਠੋਰ ਗੁਣਵੱਤਾ ਜਾਂਚ ਤੋਂ ਲੰਘਦਾ ਹੈ। ਅਸੀਂ ਸਿਰਫ਼ ਆਸਟ੍ਰੇਲੀਆ ਅਤੇ ਕੈਨੇਡਾ ਦੇ ਪ੍ਰਮਾਣਿਤ ਨਿਰਮਾਤਿਆਂ ਤੋਂ ਆਯਾਤ ਕਰਦੇ ਹਾਂ, ਜਿਸ ਨਾਲ ਭਾਰਤੀ ਹਾਲਾਤਾਂ ਵਿੱਚ ਟਿਕਾਊਪਨ ਅਤੇ ਕਾਰਗੁਜ਼ਾਰੀ ਯਕੀਨੀ ਬਣਦੀ ਹੈ।"
    }
  },
  {
    icon: <Heart size={40} strokeWidth={1.5} />,
    title: {
      english: "Customer Success",
      hindi: "ग्राहक सफलता",
      punjabi: "ਗਾਹਕ ਸਫਲਤਾ"
    },
    description: {
      english: "From small farmers to large agricultural enterprises, we provide personalized solutions. Our 95% customer satisfaction rate reflects our commitment to understanding and meeting each client's unique needs.",
      hindi: "छोटे किसानों से लेकर बड़े कृषि उद्यमों तक, हम व्यक्तिगत समाधान प्रदान करते हैं। हमारे 95% ग्राहक संतोष दर से यह पता चलता है कि हम प्रत्येक ग्राहक की अनोखी जरूरतों को समझने और पूरा करने के लिए प्रतिबद्ध हैं।",
      punjabi: "ਛੋਟੇ ਕਿਸਾਨਾਂ ਤੋਂ ਵੱਡੇ ਖੇਤੀਬਾੜੀ ਉਦਯੋਗਾਂ ਤੱਕ, ਅਸੀਂ ਵਿਅਕਤੀਗਤ ਹੱਲ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹਾਂ। ਸਾਡੇ 95% ਗਾਹਕ ਸੰਤੋਸ਼ ਦਰ ਇਹ ਦਰਸਾਉਂਦੀ ਹੈ ਕਿ ਅਸੀਂ ਹਰ ਗਾਹਕ ਦੀ ਵਿਲੱਖਣ ਜ਼ਰੂਰਤ ਨੂੰ ਸਮਝਣ ਅਤੇ ਪੂਰਾ ਕਰਨ ਲਈ ਪ੍ਰਤਿਬੱਧ ਹਾਂ।"
    }
  },
  {
    icon: <Users size={40} strokeWidth={1.5} />,
    title: {
      english: "Authentic Content",
      hindi: "असली सामग्री",
      punjabi: "ਅਸਲੀ ਸਮੱਗਰੀ"
    },
    description: {
      english: "Through genuine storytelling and real farming experiences, we've built a community of 1.9M+ followers who trust our expertise in welding, farming, and agricultural equipment selection.",
      hindi: "सच्ची कहानियों और वास्तविक खेती के अनुभवों के माध्यम से, हमने 1.9M+ अनुयायियों की एक समुदाय बनाई है जो वेल्डिंग, खेती और कृषि उपकरण चयन में हमारी विशेषज्ञता पर भरोसा करते हैं।",
      punjabi: "ਸੱਚੀ ਕਹਾਣੀਆਂ ਅਤੇ ਅਸਲੀ ਖੇਤੀ ਦੇ ਤਜਰਬਿਆਂ ਰਾਹੀਂ, ਅਸੀਂ 1.9M+ ਫਾਲੋਅਰਾਂ ਦੀ ਇੱਕ ਕਮਿਊਨਿਟੀ ਬਣਾਈ ਹੈ ਜੋ ਵੈਲਡਿੰਗ, ਖੇਤੀ ਅਤੇ ਖੇਤੀਬਾੜੀ ਉਪਕਰਣ ਚੋਣ ਵਿੱਚ ਸਾਡੇ ਤਜਰਬੇ 'ਤੇ ਭਰੋਸਾ ਕਰਦੀ ਹੈ।"
    }
  },
];
const stats = [
  {
    number: '250+',
    icon: '🚜',
    label: {
      english: 'Equipment Delivered',
      hindi: 'उपकरण वितरित',
      punjabi: 'ਉਪਕਰਣ ਸੌਂਪੇ ਗਏ'
    }
  },
  {
    number: '12+',
    icon: '🌍',
    label: {
      english: 'Countries Served',
      hindi: 'देश सेवा किए गए',
      punjabi: 'ਦੇਸ਼ ਸੇਵਾ ਕੀਤੇ'
    }
  },
  {
    number: '95%',
    icon: '⭐',
    label: {
      english: 'Client Satisfaction',
      hindi: 'ग्राहक संतुष्टि',
      punjabi: 'ਗਾਹਕ ਸੰਤੋਸ਼'
    }
  },
  {
    number: '8+',
    icon: '📈',
    label: {
      english: 'Years Trading',
      hindi: 'वर्षों का व्यापार',
      punjabi: 'ਸਾਲਾਂ ਦਾ ਵਪਾਰ'
    }
  }
];


const heading1 = {
  english: "🌾 PIONEERING AGRICULTURAL EXCELLENCE SINCE 2015",
  hindi: "🌾 2015 से कृषि उत्कृष्टता में अग्रणी ",
  punjabi: "🌾 2015 ਤੋਂ ਖੇਤੀਬਾੜੀ ਉੱਤਮਤਾ ਦਾ ਪਾਇਨੀਅਰਿੰਗ",
};

const heading2 = {
  english: <>About <span style={{ color: '#6da34d' }}> Brown</span> Kudi</>,
  hindi: <>ब्राउन कुड़ी<span style={{ color: '#6da34d' }}> के बारे</span> बारे में</>,
  punjabi: <>ਬ੍ਰਾਊਨ<span style={{ color: '#6da34d' }}> ਕੁੜੀ</span> ਬਾਰੇ</>
};
const p = {
  english: "From Mastering Welding in Punjab to Building International Tyre & Agricultural Equipment Empire - Connecting Australia, Canada & India Through Quality Trade and Authentic Content Creation",
  hindi: "पंजाब में वेल्डिंग में महारत से लेकर अंतरराष्ट्रीय टायर और कृषि उपकरण साम्राज्य बनाने तक – गुणवत्ता-आधारित व्यापार और प्रामाणिक कंटेंट निर्माण के माध्यम से ऑस्ट्रेलिया, कनाडा और भारत को जोड़ना।",
  punjabi: "ਪੰਜਾਬ ਵਿੱਚ ਵੈਲਡਿੰਗ ਵਿੱਚ ਮਹਾਰਤ ਤੋਂ ਲੈ ਕੇ ਅੰਤਰਰਾਸ਼ਟਰੀ ਟਾਇਰ ਅਤੇ ਖੇਤੀਬਾੜੀ ਉਪਕਰਣ ਸਾਮਰਾਜ ਬਣਾਉਣ ਤੱਕ – ਗੁਣਵੱਤਾ ਵਾਲੇ ਵਪਾਰ ਅਤੇ ਅਸਲੀ ਸਮੱਗਰੀ ਸਿਰਜਣ ਰਾਹੀਂ ਆਸਟ੍ਰੇਲੀਆ, ਕੈਨੇਡਾ ਅਤੇ ਭਾਰਤ ਨੂੰ ਜੋੜਨਾ।",
};
const btn = {
  english: "Contact With Us",
  hindi: "हमारे साथ संपर्क करें ",
  punjabi: "ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
};
const btn2 = {
  english: "View Our Journey",
  hindi: " हमारी यात्रा देखें",
  punjabi: "ਸਾਡਾ ਸਫ਼ਰ ਵੇਖੋ",
};
const exportheading = {
  english: "International Import-Export Empire",
  hindi: "अंतरराष्ट्रीय आयात-निर्यात साम्राज्य",
  punjabi: "ਅੰਤਰਰਾਸ਼ਟਰੀ ਆਯਾਤ-ਨਿਰਯਾਤ ਸਾਮਰਾਜ",
};
const exportheadingp = {
  english: "Built a thriving international trade business importing premium tyres and agricultural equipment from Australia and Canada. Our direct relationships with manufacturers ensure competitive pricing and guaranteed quality for Indian farmers.",
  hindi: "ऑस्ट्रेलिया और कनाडा से प्रीमियम टायर और कृषि उपकरण आयात करके एक सफल अंतरराष्ट्रीय व्यापार स्थापित किया। निर्माताओं के साथ हमारे सीधे संबंध भारतीय किसानों के लिए प्रतिस्पर्धी मूल्य और गारंटीकृत गुणवत्ता सुनिश्चित करते हैं।",
  punjabi: "ਆਸਟ੍ਰੇਲੀਆ ਅਤੇ ਕੈਨੇਡਾ ਤੋਂ ਪ੍ਰੀਮੀਅਮ ਟਾਇਰ ਅਤੇ ਖੇਤੀਬਾੜੀ ਉਪਕਰਣ ਆਯਾਤ ਕਰਕੇ ਇੱਕ ਕਾਮਯਾਬ ਅੰਤਰਰਾਸ਼ਟਰੀ ਵਪਾਰ ਖੜ੍ਹਾ ਕੀਤਾ। ਨਿਰਮਾਤਾਵਾਂ ਨਾਲ ਸਾਡੇ ਸਿੱਧੇ ਸੰਬੰਧ ਭਾਰਤੀ ਕਿਸਾਨਾਂ ਲਈ ਮੁਕਾਬਲੇ ਵਾਲੀਆਂ ਕੀਮਤਾਂ ਅਤੇ ਗਾਰੰਟੀਸ਼ੁਦਾ ਗੁਣਵੱਤਾ ਯਕੀਨੀ ਬਣਾਉਂਦੇ ਹਨ।",
};
const coreheading = {
  english: "Our Core Values",
  hindi: "हमारे मूल मूल्य",
  punjabi: "ਸਾਡੇ ਮੁੱਢਲੇ ਮੁੱਲ",
};

const corep = {
  english: "The principles that drive our passion for agricultural excellence and sustainable farming",
  hindi: "वे सिद्धांत जो कृषि उत्कृष्टता और सतत खेती के प्रति हमारे जुनून को प्रेरित करते हैं",
  punjabi: "ਉਹ ਸਿਧਾਂਤ ਜੋ ਖੇਤੀਬਾੜੀ ਵਿੱਚ ਸ਼੍ਰੇਸ਼ਠਤਾ ਅਤੇ ਟਿਕਾਊ ਖੇਤੀ ਪ੍ਰਤੀ ਸਾਡੇ ਜਜ਼ਬੇ ਨੂੰ ਤਾਕਤ ਦਿੰਦੇ ਹਨ",
};
const teamHeading = {
  english: <>Meet Our <span style={{ color: '#6da34d' }}>Visionary Team</span></>,
  hindi: <>मिलिए हमारी <span style={{ color: '#6da34d' }}>दूरदर्शी टीम</span> से</>,
  punjabi: <>ਮਿਲੋ ਸਾਡੀ <span style={{ color: '#6da34d' }}>ਦੂਰਦਰਸ਼ੀ ਟੀਮ</span> ਨਾਲ</>
};
const AboutPage_ = () => {
  const navigate = useNavigate();
  const [additionalInView, setAdditionalInView] = useState(false);
  const [additionalCounts, setAdditionalCounts] = useState(additionalStats.map(() => 0));
  const additionalRef = useRef(null);

  // Scroll to top when component mounts
  useScrollToTop();

  // Scroll detection for additional stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setAdditionalInView(true);
      },
      { threshold: 0.3 }
    );
    if (additionalRef.current) observer.observe(additionalRef.current);
    return () => {
      if (additionalRef.current) observer.unobserve(additionalRef.current);
    };
  }, []);

  // Counter animation for additional stats
  useEffect(() => {
    if (additionalInView) {
      additionalStats.forEach((stat, index) => {
        let start = 0;
        const end = stat.number;
        const duration = 1500;
        const stepTime = Math.abs(Math.floor(duration / end));
        const timer = setInterval(() => {
          start += 1;
          setAdditionalCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = start;
            return newCounts;
          });
          if (start === end) clearInterval(timer);
        }, stepTime);
      });
    }
  }, [additionalInView]);

  const handleNavigate = () => {
    navigate("/contact");
  };
  const { language } = useLanguage();

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        
        @keyframes slideIn {
          from { transform: translateX(-30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @media (max-width: 768px) {
          .about-hero h1 { font-size: 2.5rem !important; }
          .about-hero p { font-size: 1.1rem !important; }
          .hero-stats { flex-direction: column !important; gap: 20px !important; }
        }
      `}</style>

      {/* Enhanced Hero Section */}
      <motion.section
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          background: 'linear-gradient(135deg, rgba(44, 62, 80, 0.85), rgba(109, 163, 77, 0.8)), url("/img/aboutbg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '100px 20px 60px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          width: '120px',
          height: '120px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '15%',
          width: '80px',
          height: '80px',
          background: 'rgba(139, 195, 74, 0.2)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite reverse'
        }} />
        <div style={{
          position: 'absolute',
          top: '40%',
          right: '20%',
          width: '60px',
          height: '60px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '50%',
          animation: 'float 10s ease-in-out infinite'
        }} />

        <div style={{ maxWidth: '1000px', position: 'relative', zIndex: 2 }}>
          {/* Badge */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              display: 'inline-block',
              background: 'rgba(139, 195, 74, 0.2)',
              padding: '15px 30px',
              borderRadius: '50px',
              marginBottom: '30px',
              border: '2px solid rgba(139, 195, 74, 0.3)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <span style={{ fontSize: '1.1rem', fontWeight: '600', letterSpacing: '1px' }}>
              {heading1[language]}
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              fontSize: '4.5rem',
              fontWeight: '800',
              marginBottom: '25px',
              lineHeight: '1.1',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            {heading2[language]}
          </motion.h1>

          <motion.p
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              fontSize: '1.5rem',
              lineHeight: '1.6',
              opacity: 0.95,
              marginBottom: '50px',
              maxWidth: '800px',
              margin: '0 auto 50px'
            }}
          >
            {p[language]}
          </motion.p>

          {/* Hero Stats */}
          <motion.div
            className="hero-stats"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{
              display: 'flex',
              gap: '40px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '40px'
            }}
          >
            {[
              { number: '1.9M+', label: 'Social Media Followers', icon: '📱' },
              { number: '12+', label: 'Countries Served', icon: '🌍' },
              { number: '8+', label: 'Years in Business', icon: '🏆' },
              { number: '250+', label: 'Equipment Delivered', icon: '�' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                style={{
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '20px',
                  borderRadius: '15px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  minWidth: '120px'
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '5px' }}>{stat.icon}</div>
                <div style={{ fontSize: '2.2rem', fontWeight: '700', color: '#8bc34a' }}>{stat.number}</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <motion.button
              onClick={() => navigate("/contact")}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'linear-gradient(135deg, #6da34d, #8bc34a)',
                color: 'white',
                border: 'none',
                padding: '18px 40px',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '50px',
                cursor: 'pointer',
                boxShadow: '0 15px 40px rgba(109, 163, 77, 0.3)',
                transition: 'all 0.3s ease'
              }}
            >
              {btn[language]}

            </motion.button>
            <motion.button
              onClick={() => navigate("/gallery")}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                padding: '16px 35px',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '50px',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease'
              }}
            >
              {btn2[language]}

            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Journey & Expertise Section */}
      <motion.section
        className="journey-expertise"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          padding: '100px 20px',
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
          position: 'relative'
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '0px' }}>


          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 2fr))',
            gap: '50px',
            alignItems: 'center',
            justifyContent: "center",
          }}>
            {/* Content Creation Journey */}


            {/* Welding & Technical Expertise */}


            {/* International Trade Success */}
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(135deg, #6da34d, #8bc34a)',
                color: 'white',
                padding: '50px 40px',
                borderRadius: '25px',
                boxShadow: '0 20px 60px rgba(109, 163, 77, 0.3)',
                gridColumn: 'span 2',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                fontSize: '6rem',
                opacity: 0.1
              }}>
                🌍
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center", gap: '50px', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '250px' }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100px',
                    height: '100px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    marginBottom: '30px'
                  }}>
                    🚢
                  </div>

                  <h3 style={{
                    fontSize: '2.5rem',
                    marginBottom: '25px',
                    fontWeight: '700'
                  }}>
                    {exportheading[language]}

                  </h3>

                  <p style={{
                    fontSize: '1.2rem',
                    lineHeight: '1.7',
                    opacity: 0.95,
                    marginBottom: '30px'
                  }}>
                    {exportheadingp[language]}

                  </p>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '20px',
                  minWidth: '300px'
                }}>
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      style={{
                        background: 'rgba(255, 255, 255, 0.15)',
                        padding: '25px 20px',
                        borderRadius: '15px',
                        textAlign: 'center',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{stat.icon}</div>
                      <div style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '5px' }}>{stat.number}</div>
                      <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>{stat.label[language]}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>



      {/* Our Values Section */}
      <motion.section
        className="about-values"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          padding: '80px 20px',
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{ fontSize: '2.5rem', color: '#2c3e50', marginBottom: '20px' }}
            >
              {coreheading[language]}

            </motion.h2>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ fontSize: '1.1rem', color: '#6c757d', maxWidth: '600px', margin: '0 auto' }}
            >
              {corep[language]}

            </motion.p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                style={{
                  background: 'white',
                  padding: '40px 30px',
                  borderRadius: '16px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                  border: '1px solid #e9ecef'
                }}
              >
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #6da34d, #8bc34a)',
                  borderRadius: '50%',
                  color: 'white',
                  marginBottom: '25px'
                }}>
                  {value.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', color: '#2c3e50', marginBottom: '15px' }}>
                  {value.title[language]}
                </h3>
                <p style={{ color: '#6c757d', lineHeight: '1.6' }}>
                  {value.description[language]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Additional Stats Section */}
      <motion.section
        ref={additionalRef}
        className="additional-stats"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          padding: '80px 20px',
          background: 'linear-gradient(135deg, #6da34d, #8bc34a)',
          color: 'white'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ fontSize: '2.5rem', marginBottom: '20px' }}
          >
            Our Journey in Numbers
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '60px', maxWidth: '600px', margin: '0 auto 60px' }}
          >
            Celebrating milestones that reflect our commitment to agricultural excellence
          </motion.p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px'
          }}>
            {additionalStats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  padding: '40px 20px',
                  borderRadius: '16px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}
              >
                <div style={{ marginBottom: '20px', opacity: 0.9 }}>
                  {stat.icon}
                </div>
                <h2 style={{ fontSize: '3rem', fontWeight: 'bold', margin: '10px 0' }}>
                  {additionalCounts[index]}+
                </h2>
                <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Enhanced Team Section */}
      <motion.section
        className="about-team"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          padding: '100px 10px',
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto', justifyContent: 'center', alignItems: 'center', }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #6da34d, #8bc34a)',
                color: 'white',
                padding: '10px 25px',
                borderRadius: '50px',
                marginBottom: '20px',
                fontSize: '0.9rem',
                fontWeight: '600',
                letterSpacing: '1px'
              }}
            >
              👥 OUR LEADERSHIP TEAM
            </motion.div>

            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                fontSize: '3.2rem',
                color: '#2c3e50',
                marginBottom: '25px',
                fontWeight: '800'
              }}
            >
              <h2>{teamHeading[language]}</h2>

            </motion.h2>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                fontSize: '1.3rem',
                color: '#6c757d',
                maxWidth: '500px',
                margin: '0 auto',
                lineHeight: '1.7',
                alignItems: 'center',
              }}
            >
              Passionate innovators dedicated to transforming agriculture through expertise, tradition, and cutting-edge technology
            </motion.p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '60px',
            justifyItems: 'center',
          }}>
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -20, scale: 1.03 }}
                style={{
                  background: 'white',
                  padding: '50px 30px',
                  borderRadius: '30px',
                  boxShadow: '0 25px 80px rgba(0,0,0,0.08)',
                  textAlign: 'center',
                  maxWidth: '460px',
                  width: '100%',
                  border: '1px solid #f0f0f0',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Background Gradient */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '6px',
                  background: 'linear-gradient(135deg, #6da34d, #8bc34a)',
                  zIndex: 1
                }} />

                {/* Background Pattern */}
                <div style={{
                  position: 'absolute',
                  top: '-100%',
                  right: '-100%',
                  width: '300%',
                  height: '300%',
                  background: 'linear-gradient(45deg, rgba(109, 163, 77, 0.02), rgba(139, 195, 74, 0.04))',
                  borderRadius: '50%',
                  zIndex: 0
                }} />

                <div style={{ position: 'relative', zIndex: 2 }}>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    style={{
                      width: '180px',
                      height: '180px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      margin: '0 auto 35px',
                      border: '6px solid #6da34d',
                      boxShadow: '0 15px 40px rgba(109, 163, 77, 0.2)',
                      position: 'relative'
                    }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    {/* Ring animation */}
                    <div style={{
                      position: 'absolute',
                      top: '-6px',
                      left: '-6px',
                      right: '-6px',
                      bottom: '-6px',
                      borderRadius: '50%',
                      border: '2px solid transparent',
                      background: 'linear-gradient(45deg, #6da34d, #8bc34a) border-box',
                      WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'exclude',
                      animation: 'pulse 3s ease-in-out infinite'
                    }} />
                  </motion.div>

                  <h3 style={{
                    fontSize: '1.8rem',
                    color: '#2c3e50',
                    marginBottom: '12px',
                    fontWeight: '700'
                  }}>
                    {member.name[language]}
                  </h3>

                  <div style={{
                    display: 'inline-block',
                    background: 'linear-gradient(135deg, #6da34d, #8bc34a)',
                    color: 'white',
                    padding: '8px 20px',
                    borderRadius: '20px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    marginBottom: '25px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {member.role[language]}
                  </div>

                  <p style={{
                    color: '#6c757d',
                    lineHeight: '1.8',
                    fontSize: '1.1rem',
                    marginBottom: '30px'
                  }}>
                    {member.description[language]}
                  </p>

                  {/* Achievements */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    marginTop: '25px'
                  }}>
                    {member.achievements[language].map((achievement, achIndex) => (
                      <motion.div
                        key={achIndex}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: achIndex * 0.1 }}
                        viewport={{ once: true }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '10px',
                          background: 'rgba(109, 163, 77, 0.1)',
                          padding: '10px 15px',
                          borderRadius: '15px',
                          color: '#6da34d',
                          fontWeight: '600',
                          fontSize: '0.95rem'
                        }}
                      >
                        <CheckCircle2 size={16} />
                        <span key={index}>{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Enhanced Call to Action */}
      <motion.section
        className="about-cta"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          padding: '120px 20px',
          background: 'linear-gradient(135deg, #6da34d 0%, #8bc34a 50%, #2c3e50 100%)',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '200px',
          height: '200px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '15%',
          right: '10%',
          width: '150px',
          height: '150px',
          background: 'rgba(255, 255, 255, 0.03)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite reverse'
        }} />

        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1) 1px, transparent 1px),
            radial-gradient(circle at 70% 80%, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          opacity: 0.4
        }} />

        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              display: 'inline-block',
              background: 'rgba(255, 255, 255, 0.15)',
              padding: '15px 35px',
              borderRadius: '50px',
              marginBottom: '30px',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <span style={{ fontSize: '1.1rem', fontWeight: '600', letterSpacing: '1px' }}>
              🚀 START YOUR AGRICULTURAL JOURNEY
            </span>
          </motion.div>

          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              fontSize: '3.5rem',
              marginBottom: '30px',
              fontWeight: '800',
              lineHeight: '1.2',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Ready to <span style={{ color: '#fff' }}>Transform</span> Your Agriculture?
          </motion.h2>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              fontSize: '1.4rem',
              marginBottom: '50px',
              opacity: 0.95,
              lineHeight: '1.6',
              maxWidth: '700px',
              margin: '0 auto 50px'
            }}
          >
            Join thousands of farmers worldwide who trust Brown Kudi for innovative agricultural solutions, sustainable practices, and exceptional results
          </motion.p>

          {/* Benefits Grid */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '30px',
              marginBottom: '60px',
              maxWidth: '900px',
              margin: '0 auto 60px'
            }}
          >
            {[
              { icon: '🚜', title: 'Quality Equipment', desc: 'Premium tyres & machinery from Australia/Canada' },
              { icon: '📈', title: 'Proven Results', desc: '95% customer satisfaction rate' },
              { icon: '🌍', title: 'International Trade', desc: 'Direct imports from 12+ countries' },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '30px 20px',
                  borderRadius: '20px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{benefit.icon}</div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px' }}>
                  {benefit.title}
                </h4>
                <p style={{ fontSize: '1rem', opacity: 0.9 }}>{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            style={{ display: 'flex', gap: '25px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <motion.button
              onClick={handleNavigate}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.26)',
                padding: '18px 45px',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '50px',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <span>Get Started Today</span>
              <span style={{ fontSize: '1.5rem' }}>🚀</span>
            </motion.button>

            <motion.button
              onClick={() => navigate("/gallery")}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.4)',
                padding: '18px 45px',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '50px',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <span>View Our Work</span>
              <span style={{ fontSize: '1.2rem' }}>📸</span>
            </motion.button>

            <motion.button
              onClick={() => navigate("/contact")}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.4)',
                padding: '18px 45px',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '50px',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <span>Contact Us</span>
              <span style={{ fontSize: '1.2rem' }}>💬</span>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </>
  );
};

export default AboutPage_;
