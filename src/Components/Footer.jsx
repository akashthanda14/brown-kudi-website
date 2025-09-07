import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "../Components/Footer.css";
const title = {

    english: "Be Bold. Be Beautiful. Be Brown Kudi,Where tradition meets modernity.",
    hindi: "साहसी बनो। सुंदर बनो। ब्राउन कुड़ी बनो। जहां परंपरा आधुनिकता से मिलती है।",
    punjabi: "ਬੋਲਡ ਬਣੋ। ਸੁੰਦਰ ਬਣੋ। ਬ੍ਰਾਊਨ ਕੁੜੀ ਬਣੋ। ਜਿੱਥੇ ਪਰੰਪਰਾ ਅਧੁਨਿਕਤਾ ਨਾਲ ਮਿਲਦੀ ਹੈ।",

};

const Footer = () => {
    const { language } = useLanguage();


    return (
        <footer>
            <div className="footer-container">
                {/* Logo & About */}
                <div className="footer-section">
                    <div className="logo-name">

                        <span className="logofirst">

                            Brown<span>ਕੁੜੀ</span>
                        </span>
                    </div>

                    <p>
                        {title[language]}

                    </p>
                </div>

                {/* Useful Links */}

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>
                            <Link to="/tyres">Tyres</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/gallery">Gallery</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p> <strong>Email:</strong> brownkuditeam@gmail.com</p>
                    <p><strong>Phone:</strong> +91 8264468285</p>
                    <p><strong>Phone:</strong> +91 9855119079</p>
                    <p><strong>Calling time:</strong> 10AM To 7PM</p>
                    <p><strong>Address:</strong> Brown Kudi Enterprices village gura Post Office Bara Pind (144418) Dist. Jalandhar Punjab</p>
                </div>

                <div className="footer-section newsletter">
                    <form>
                        <input type="email" placeholder="Your Email" />
                        <br />
                        <button type="submit">Get More</button>
                    </form>
                    <div className="social-icons" style={{ marginTop: "20px" }}>
                        <a href="https://www.facebook.com/BrownKudiofficial">
                            <img src="img/facebook.png" alt="Facebook" />
                        </a>
                        <a href="https://www.instagram.com/brown_kudi1/">
                            <img src="img/instagram.png" alt="Instagram" />
                        </a>
                        <a href="http://www.youtube.com/@BrownKudiThewelderGirl">
                            <img src="img/youtube.png" alt="YouTube" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="bottom-footer">&copy; 2025 Brown Kudi. All rights reserved.</div>
        </footer>
    );
};

export default Footer;