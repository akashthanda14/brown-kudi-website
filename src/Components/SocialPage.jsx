import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import "./SocialPage.css";
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa";

const ownername = {
    english: "Harpal Kaur Dhanjal",
    hindi: "हरपाल कौर धांजल ",
    punjabi: "ਹਰਪਾਲ ਕੌਰ ਧੰਜਲ",
};

const ownerDescription = {
    english: "Harpal Kaur Dhanjal, Punjab's pioneering welder girl and Instagram influencer with 1.9 million followers, breaks barriers as \"Brown Kudi.\" She imports/exports tyres to Australia and Canada, while distributing agriculture equipment across India, inspiring empowerment through her craft and business acumen.",
    hindi: "हरपाल कौर धांजल, पंजाब की अग्रणी वेल्डर गर्ल और 1.9 मिलियन फॉलोअर्स के साथ इंस्टाग्राम इन्फ्लुएंसर, \"ब्राउन कुड़ी\" के रूप में बाधाओं को तोड़ती है। वह ऑस्ट्रेलिया और कनाडा में टायरों का आयात/निर्यात करती है, भारत भर में कृषि उपकरणों का वितरण करती है, अपने शिल्प और व्यावसायिक कुशलता के माध्यम से सशक्तिकरण को प्रेरित करती है।",
    punjabi: "ਹਰਪਾਲ ਕੌਰ ਧੰਜਲ, ਪੰਜਾਬ ਦੀ ਮੋਹਰੀ ਵੈਲਡਰ ਕੁੜੀ ਅਤੇ 1.9 ਮਿਲੀਅਨ ਫਾਲੋਅਰਾਂ ਵਾਲੀ ਇੰਸਟਾਗ੍ਰਾਮ ਇਨਫਲੂਐਂਸਰ, \"ਬ੍ਰਾਊਨ ਕੁੜੀ\" ਵਜੋਂ ਰੁਕਾਵਟਾਂ ਤੋੜਦੀ ਹੈ। ਉਹ ਆਸਟ੍ਰੇਲੀਆ ਅਤੇ ਕਨਾਡਾ ਨੂੰ ਟਾਇਰਾਂ ਦਾ ਆਯਾਤ/ਨਿਰਯਾਤ ਕਰਦੀ ਹੈ, ਭਾਰਤ ਭਰ ਵਿੱਚ ਖੇਤੀ ਉਪਕਰਣਾਂ ਦੀ ਵੰਡ ਕਰਦੀ ਹੈ, ਆਪਣੇ ਹੁਨਰ ਅਤੇ ਕਾਰੋਬਾਰੀ ਸੂਝ-ਬੂਝ ਰਾਹੀਂ ਸਸ਼ਕਤੀਕਰਣ ਨੂੰ ਪ੍ਰੇਰਿਤ ਕਰਦੀ ਹੈ।"
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

    return (
        <div className="container" id="social">
            <div className="wrapper">
                <div className="top">
                    {/* Left Section with Image */}
                    <div className="center">
                        <img
                            src="https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750775/owner_ehbimh.jpg"
                            alt="profile"
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
                        <h2>{ownername[language]}</h2>
                        <p>
                            {ownerDescription[language]}
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
                        <img className="iconimg" src="https://res.cloudinary.com/dnyv7wabr/image/upload/v1757751534/youtube_b9borz.png" alt="YouTube" />
                        <div className="btn-content">
                            <span className="platform-name">YouTube</span>
                            <span className="follower-count">
                                <AnimatedCounter end={416} suffix="K" inView={bottomInView} /> Subscribers
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
                        <img className="iconimg" src="https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750774/instagram_voftum.png" alt="Instagram" />
                        <div className="btn-content">
                            <span className="platform-name">Instagram</span>
                            <span className="follower-count">
                                <AnimatedCounter end={2} suffix="M" inView={bottomInView} /> Followers
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
                        <img className="iconimg" src="https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750717/facebook_yn82x7.png" alt="Facebook" />
                        <div className="btn-content">
                            <span className="platform-name">Facebook</span>
                            <span className="follower-count">
                                <AnimatedCounter end={786} suffix="K" inView={bottomInView} /> Followers
                            </span>
                        </div>
                    </motion.a>
                </motion.div>
            </div>
        </div>
    );
}
