import React from "react";
import "../Pages/GalleryPage.css";
import { useLanguage } from "../context/LanguageContext";
import Footer from "../Components/Footer";
import { useScrollToTop } from "../hooks/useScrollToTop";

const Gallery = () => {
    const ownername = {
        english: "Explore Our Gallery",
        hindi: "हमारी गैलरी देखें",
        punjabi: "ਸਾਡੀ ਗੈਲਰੀ ਨੂੰ ਵੇਖੋ",
    };

    const ownerdescription = {
        english:
            "Explore our gallery to witness the journey of our work, innovations, and memorable moments captured with pride",
        hindi:
            "हमारे काम, नवाचारों और गर्व के साथ कैद किए गए यादगार पलों की यात्रा को देखने के लिए हमारी गैलरी देखें।",
        punjabi:
            "ਸਾਡੇ ਕੰਮ, ਨਵੀਨਤਮ ਅਤੇ ਮਾਣ ਨਾਲ ਕੈਦ ਕੀਤੇ ਯਾਦਗਾਰ ਪਲਾਂ ਦੀ ਯਾਤਰਾ ਨੂੰ ਵੇਖਣ ਲਈ ਸਾਡੀ ਗੈਲਰੀ ਨੂੰ ਵੇਖੋ।",
    };

    const { language } = useLanguage();
    useScrollToTop();

    const images = [
        { src: "/img/gallery1.jpg", title: "Gallery 1" },
        { src: "/img/gallery2.jpg", title: "Gallery 2" },
        { src: "/img/gallery3.jpg", title: "Gallery 3" },
        { src: "/img/gallery4.jpg", title: "Gallery 4" },
        { src: "/img/gallery5.jpg", title: "Gallery 5" },
        { src: "/img/gallery6.jpg", title: "Gallery 6" },
        { src: "/img/gallery7.jpg", title: "Gallery 7" },
        { src: "/img/gallery8.png", title: "Gallery 8" },
    ];

    return (
        <>
            <section className="gallery-section">
                <div className="gallery-header">
                    <h2>{ownername[language]}</h2>
                    <p>{ownerdescription[language]}</p>
                </div>
                <div className="gallery-container">
                    {images.map((item, index) => (
                        <div className="gallery-item" key={index}>
                            <img src={item.src} alt={item.title} />
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Gallery;
