import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import "./SocialPage.css";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaPinterestP,
    FaYoutube,
    FaSnapchatGhost,
} from "react-icons/fa";

const ownername = {
    english: "I'm Harpal Kaur Dhanjal",
    hindi: "हरपाल कौर धांजल ",
    punjabi: "ਹਰਪਾਲ ਕੌਰ ਧੰਜਲ",
};

export default function SocialPage() {
    const { language } = useLanguage();

    return (
        <div className="container">
            <div className="wrapper">
                <div className="top">
                    {/* Left Section with Image */}
                    <div className="center">
                        <img
                            src="/img/owner.jpg"
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
                            A freelancer who provides services for digital programming and
                            design content needs, for all businesses with more than 10 years
                            of experience
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
                >
                    <a href="http://www.youtube.com/@BrownKudiThewelderGirl" target="_blank" rel="noreferrer" className="social-btn">
                        <img className="iconimg" src="/img/youtube.png" alt="YouTube" />
                        <span>YouTube</span>
                    </a>
                    <a href="https://www.facebook.com/BrownKudiofficial" target="_blank" rel="noreferrer" className="social-btn">
                        <img className="iconimg" src="/img/facebook.png" alt="Facebook" />
                        <span>Facebook</span>
                    </a>
                    <a href="https://www.instagram.com/brown_kudi1/" target="_blank" rel="noreferrer" className="social-btn">
                        <img className="iconimg" src="/img/instagram.png" alt="Instagram" />
                        <span>Instagram</span>
                    </a>
                    <a href="https://snapchat.com/t/dqxVx8h6" target="_blank" rel="noreferrer" className="social-btn">
                        <img className="iconimg" src="/img/snapchat.png" alt="Snapchat" />
                        <span>Snapchat</span>
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
