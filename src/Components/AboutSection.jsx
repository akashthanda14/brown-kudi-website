import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";
import { useNavigate } from "react-router-dom";
import "../Components/AboutSection.css";

const images = [
    "/img/aboutimg1.png",
    "/img/aboutimg2.png",
    "/img/aboutimg3.png",
    "/img/aboutimg.png",
    "/img/aboutimg.png",
];

const About = () => {
    const { language } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

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
            {/* Background Video */}
    

            <div className="about-container">
                <div className="about-image">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt="About Us"
                            className={index === currentIndex ? "fade show" : "fade"}
                        />
                    ))}
                </div>
                <div className="about-content">
                    <h2>{translations.about.heading[language]}</h2>
                    <p>{translations.about.para1[language]}</p>
                    <p>{translations.about.para2[language]}</p>
                </div>
            </div>
        </section>
    );
};

export default About;
