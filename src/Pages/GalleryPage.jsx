import React from "react";
import "../Pages/GalleryPage.css"
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";
import Footer from "../Components/Footer";
import { useScrollToTop } from "../hooks/useScrollToTop";
const Gallery = () => {
    const ownername = {
        english: "Our Gallery",
        hindi: "हमारी गैलरी",
        punjabi: "ਸਾਡੀ ਗੈਲਰੀ",
    };
    const { language } = useLanguage();

    // Scroll to top when component mounts
    useScrollToTop();

    const images = [
        { src: "/img/gallery1.jpg" },
        { src: "/img/gallery2.jpg" },
        { src: "/img/gallery3.jpg" },
        { src: "/img/gallery4.jpg" },
        { src: "/img/gallery5.jpg" },
        { src: "/img/gallery6.jpg" },
        { src: "/img/gallery7.jpg" },
        { src: "/img/gallery8.png" },


    ];

    return (
        <>
            <section className="gallery-section">
                <h2>{ownername[language]}</h2>
                <div className="gallery-container">
                    {images.map((item, index) => (
                        <div className="gallery-item" key={index}>
                            <img src={item.src} alt={item.title} />
                            <div className="overlay1">{item.title}</div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Gallery;
