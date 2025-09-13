import React, { useState, useEffect, useCallback } from "react";
import { FaHeart, FaRegComment, FaInstagram } from "react-icons/fa"; // ✅ Instagram icon import
import "./SocialFootprints.css";

const posts = [
    {
        id: 1,
        img: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757754895/Screenshot_2025-09-12_144447_k4nylm.png",
        likes: "26.9k",
        comments: "31",
        desc: "ਕੋਈ ਮੁੰਡਾ ਜਦੋ ਤਰਕੀ ਕਰਦਾ ਹੈ ਤਾ ਓਹਨੂੰ ਗੋਲ਼ੀ 🔫 ਮਿਲਦੀ ਆ ਜਦ ਕੋਈ ਕੁੜੀ ਤਰਕੀ ਕਰਦੀ ਓਦੋ ਬਦਨਾਮ ਹੁੰਦੀ"
    },
    {
        id: 2,
        img: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750721/footprint2_mzlobt.png",
        likes: "25.8K",
        comments: "21",
        desc: "I am soo proud of you di  Waheguru Aanewale Time mein Aap ko jada jada taraki de 🤌🏻"
    },
    {
        id: 3,
        img: "https://res.cloudinary.com/dnyv7wabr/image/upload/c_crop,ar_3:4/v1757750722/footprint3_h6yajd.png",
        likes: "433.1k",
        comments: "1.1k",
        desc: "Brown Kudi Tyre ship to Australia , canada if you are intersted then contact us "
    },
    {
        id: 4,
        img: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750721/footprint4_krad46.png",
        likes: "25.5K",
        comments: "40",
        desc: "4 Taste of Babu just dropped and its a VIBE! 🎶 Dive into the latest Punjabi beats."
    },
];

const SocialFootprints = () => {
    const [index, setIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [cardsPerView, setCardsPerView] = useState(4);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const updateScreenSize = useCallback(() => {
        const width = window.innerWidth;

        if (width <= 600) {
            setCardsPerView(1);
            setIsMobile(true);
        } else if (width <= 900) {
            setCardsPerView(2);
            setIsMobile(true);
        } else if (width <= 1200) {
            setCardsPerView(3);
            setIsMobile(true);
        } else {
            setCardsPerView(4);
            setIsMobile(false);
        }
    }, []);

    useEffect(() => {
        updateScreenSize();
        window.addEventListener("resize", updateScreenSize);
        return () => window.removeEventListener("resize", updateScreenSize);
    }, [updateScreenSize]);

    const maxIndex = Math.max(0, posts.length - cardsPerView);

    const prevSlide = useCallback(() => {
        setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    }, [maxIndex]);

    const nextSlide = useCallback(() => {
        setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, [maxIndex]);

    useEffect(() => {
        setIndex(0);
    }, [cardsPerView]);

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const minSwipeDistance = 50;

        if (distance > minSwipeDistance) {
            nextSlide();
        } else if (distance < -minSwipeDistance) {
            prevSlide();
        }

        setTouchStart(0);
        setTouchEnd(0);
    };

    const getTransformValue = () => {
        return (index * 100) / cardsPerView;
    };

    return (
        <div className="social-section">
            <div className="social-container">
                <h2 className="section-heading"># Social Footprints</h2>
                <div
                    className="slider-wrapper"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div
                        className="slider"
                        style={{
                            transform: `translateX(-${getTransformValue()}%)`,
                            WebkitTransform: `translateX(-${getTransformValue()}%)`,
                        }}
                    >
                        {posts.map((post) => (
                            <div className="card" key={post.id}>
                                <div className="card-top">
                                    <span className="profile">brown_kudi1
                                    </span>
                                    {/* ✅ Instagram actual icon */}
                                    <FaInstagram className="insta-icon" />
                                </div>
                                <div className="image-box">
                                    <img src={post.img} alt="post" loading="lazy" />
                                </div>
                                <div className="card-bottom">
                                    <div className="stats">
                                        <span>
                                            <FaHeart /> {post.likes}
                                        </span>
                                        <span>
                                            <FaRegComment /> {post.comments}
                                        </span>
                                    </div>
                                    <p>{post.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="slider-buttons">
                        <button
                            onClick={prevSlide}
                            disabled={index === 0}
                            style={{
                                opacity: index === 0 ? 0.5 : 1,
                                cursor: index === 0 ? "not-allowed" : "pointer",
                            }}
                        >
                            ‹
                        </button>
                        <button
                            onClick={nextSlide}
                            disabled={index >= maxIndex}
                            style={{
                                opacity: index >= maxIndex ? 0.5 : 1,
                                cursor: index >= maxIndex ? "not-allowed" : "pointer",
                            }}
                        >
                            ›
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialFootprints;
