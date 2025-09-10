import React from "react";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";
import { useNavigate } from "react-router-dom";
import "../Components/AboutSection.css";
import Footer from "../Components/Footer";

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
        <>

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
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default About;
