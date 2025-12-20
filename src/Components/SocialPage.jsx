import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import "./SocialPage.css";
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa";

const translations = {
    english: {
        ownerName: "Harpal Kaur Dhanjal",
        ownerDescription: "Harpal Kaur Dhanjal, a pioneering professional welder from Punjab and Instagram creator with 1.9 million followers, is known as \"Brown Kudi.\" She manages tyre import–export to Australia and Canada and distributes agricultural equipment across India, inspiring others through skilled craftsmanship and entrepreneurship.",
        youtube: "YouTube",
        instagram: "Instagram", 
        facebook: "Facebook",
        subscribers: "Subscribers",
        followers: "Followers"
    },
    hindi: {
        ownerName: "हरपाल कौर धांजल",
        ownerDescription: "हरपाल कौर धांजल, पंजाब की अग्रणी वेल्डर गर्ल और 2 मिलियन फॉलोअर्स के साथ इंस्टाग्राम इन्फ्लुएंसर, \"ब्राउन कुड़ी\" के रूप में बाधाओं को तोड़ती है। वह ऑस्ट्रेलिया और कनाडा में टायरों का आयात/निर्यात करती है, भारत भर में कृषि उपकरणों का वितरण करती है, अपने शिल्प और व्यावसायिक कुशलता के माध्यम से सशक्तिकरण को प्रेरित करती है।",
        youtube: "यूट्यूब",
        instagram: "इंस्टाग्राम",
        facebook: "फेसबुक",
        subscribers: "सब्सक्राइबर्स",
        followers: "फॉलोअर्स"
    },
    punjabi: {
        ownerName: "ਹਰਪਾਲ ਕੌਰ ਧੰਜਲ",
        ownerDescription: "ਹਰਪਾਲ ਕੌਰ ਧੰਜਲ, ਪੰਜਾਬ ਦੀ ਅਗਾਊਂ ਪੇਸ਼ੇਵਰ ਵੈਲਡਰ ਅਤੇ 2 ਮਿਲੀਅਨ ਫਾਲੋਅਰਾਂ ਵਾਲੀ ਇੰਸਟਾਗ੍ਰਾਮ ਕ੍ਰਿਏਟਰ \"ਬ੍ਰਾਊਨ ਕੁੜੀ\" ਵਜੋਂ ਜਾਣੀ ਜਾਂਦੀ ਹੈ। ਉਹ ਆਸਟ੍ਰੇਲੀਆ ਅਤੇ ਕੈਨੇਡਾ ਲਈ ਟਾਇਰ ਆਯਾਤ-ਨਿਰਯਾਤ ਅਤੇ ਭਾਰਤ ਭਰ ਵਿੱਚ ਖੇਤੀ ਉਪਕਰਣ ਵੰਡ ਸੰਭਾਲਦੀ ਹੈ, ਆਪਣੇ ਹੁਨਰ ਅਤੇ ਉਦਯੋਗੀ ਸੋਚ ਰਾਹੀਂ ਹੋਰਨਾਂ ਨੂੰ ਪ੍ਰੇਰਿਤ ਕਰਦੀ ਹੈ।",
        youtube: "ਯੂਟਿਊਬ",
        instagram: "ਇੰਸਟਾਗ੍ਰਾਮ",
        facebook: "ਫੇਸਬੁੱਕ",
        subscribers: "ਸਬਸਕ੍ਰਾਈਬਰ",
        followers: "ਫਾਲੋਅਰ"
    }
};

// Counter Animation Component
const AnimatedCounter = ({ end, duration = 2000, suffix = "", inView }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (inView && !hasAnimated) {
            let startTime;
            let animationId;

            const animate = (currentTime) => {
                if (!startTime) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / duration, 1);
                
                // Handle decimal numbers for millions
                if (suffix === "M") {
                    setCount(Math.floor(progress * end * 10) / 10);
                } else {
                    setCount(Math.floor(progress * end));
                }
                
                if (progress < 1) {
                    animationId = requestAnimationFrame(animate);
                } else {
                    setHasAnimated(true);
                }
            };
            
            animationId = requestAnimationFrame(animate);
            return () => cancelAnimationFrame(animationId);
        }
    }, [end, duration, hasAnimated, suffix, inView]);

    return <span>{count.toLocaleString()}{suffix}</span>;
};

export default function SocialPage() {
    const { language } = useLanguage();
    const [bottomInView, setBottomInView] = useState(false);
    const t = translations[language] || translations.english;

    return (
        <div className="container" id="social">
            <div className="wrapper">
                <div className="top">
                    {/* Left Section with Image */}
                    <div className="center">
                        <img
                            src="https://ik.imagekit.io/02x2rciof/owner.jpg"
                            alt="Founder Harpal Kaur Dhanjal portrait"
                            className="profile-img"
                        />
                    </div>

                    {/* Right Section (now shifted to left side with fade-right) */}
                    <motion.div
                        className="right"
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2>{t.ownerName}</h2>
                        <p>
                            {t.ownerDescription}
                        </p>
                        <div className="icons">
                            <a href="http://www.facebook.com/BrownKudiofficial" target="_blank" rel="noreferrer">
                                <FaFacebookF />
                            </a>
                            <a href="http://www.youtube.com/@BrownKudiThewelderGirl" target="_blank" rel="noreferrer">
                                <FaYoutube />
                            </a>
                            <a href="https://www.instagram.com/brown_kudi1/" target="_blank" rel="noreferrer">
                                <FaInstagram />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Section */}
                <motion.div
                    className="bottom"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    onViewportEnter={() => setBottomInView(true)}
                >
                    <motion.a 
                        href="http://www.youtube.com/@BrownKudiThewelderGirl" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="social-btn youtube-btn"
                        whileHover={{ scale: 1.08, y: -3 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img className="iconimg" src="https://ik.imagekit.io/02x2rciof/youtube.png" alt="YouTube" />
                        <div className="btn-content">
                            <span className="platform-name">{t.youtube}</span>
                            <span className="follower-count">
                                <AnimatedCounter end={421} suffix="K" inView={bottomInView} /> {t.subscribers}
                            </span>
                        </div>
                    </motion.a>
                    
                    <motion.a 
                        href="https://www.instagram.com/brown_kudi1/" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="social-btn instagram-btn"
                        whileHover={{ scale: 1.08, y: -3 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img className="iconimg" src="https://ik.imagekit.io/02x2rciof/instagram.png" alt="Instagram" />
                        <div className="btn-content">
                            <span className="platform-name">{t.instagram}</span>
                            <span className="follower-count">
                                <AnimatedCounter end={2} suffix="M" inView={bottomInView} /> {t.followers}
                            </span>
                        </div>
                    </motion.a>
                    
                    <motion.a 
                        href="https://www.facebook.com/BrownKudiofficial" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="social-btn facebook-btn"
                        whileHover={{ scale: 1.08, y: -3 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img className="iconimg" src="https://ik.imagekit.io/02x2rciof/facebook.png" alt="Facebook" />
                        <div className="btn-content">
                            <span className="platform-name">{t.facebook}</span>
                            <span className="follower-count">
                                <AnimatedCounter end={957} suffix="K" inView={bottomInView} /> {t.followers}
                            </span>
                        </div>
                    </motion.a>
                </motion.div>
            </div>
        </div>
    );
}
