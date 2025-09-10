import React from "react";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";
import { useNavigate } from "react-router-dom";
import "../Components/AboutSection.css";

const About = () => {
    const { language } = useLanguage();
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/about");
        setTimeout(() => {
            const aboutPage = document.querySelector(".about");
            if (aboutPage) {
                aboutPage.scrollIntoView({ behavior: "smooth" });
            }
        }, 200);
    };

    return (
        <section className="about">
            <div className="about-wrapper">
                {/* Left side image */}
                <div className="about-left">
                    <img
                        className="about-main-img"
                        src="/img/aboutimg1.png"
                        alt="About Us"
                    />
                </div>

                {/* Right side content */}
                <div className="about-right">
                    <h1>{translations.about.heading[language]}</h1>
                    <div className="line"></div>
                    <p>{translations.about.para1[language]}</p>
                    <p>{translations.about.para2[language]}</p>
                    <button className="about-btn" onClick={handleNavigate}>
                        <span>Read more</span>
                        <svg
                            width="13"
                            height="12"
                            viewBox="0 0 13 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                                fill="#fff"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
