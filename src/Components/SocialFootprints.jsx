import React, { useState, useEffect, useCallback } from "react";
import { FaHeart, FaRegComment } from "react-icons/fa";
import "./SocialFootprints.css";

const posts = [
  {
    id: 1,
    img: "/img/gallery1.jpg",
    likes: "283",
    comments: "1",
    desc: "What is the most frustrating truth about politics? In an exclusive podcast with renowned YouTuber & podcaster Raj Shamani,"
  },
  {
    id: 2,
    img: "/img/gallery2.jpg",
    likes: "1.9K",
    comments: "21",
    desc: "Innovation is in our DNA at LPU! Watch how! In an exclusive podcast with renowned YouTuber & podcaster Raj Shamani,"
  },
  {
    id: 3,
    img: "/img/gallery3.jpg",
    likes: "767",
    comments: "12",
    desc: "On our Hon’ble Chancellor & MP Rajya Sabha, Dr. Ashok Kumar Mittal’s birthday, the entire #LPUFamily comes together to celebrate the"
  },
  {
    id: 4,
    img: "/img/gallery4.jpg",
    likes: "4.1K",
    comments: "10",
    desc: "From campus corridors to the couture runway, LPU students lit up the stage at the iconic Chandigarh Times Fashion Week 2025 with their"
  },
];

const SocialFootprints = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(4);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Check screen size and update responsive state
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
      setIsMobile(false);
    } else {
      setCardsPerView(4);
      setIsMobile(false);
    }
  }, []);

  useEffect(() => {
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, [updateScreenSize]);

  // Calculate max index based on cards per view
  const maxIndex = Math.max(0, posts.length - cardsPerView);

  const prevSlide = useCallback(() => {
    if (!isMobile) return; // Disable on desktop
    setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  }, [isMobile, maxIndex]);

  const nextSlide = useCallback(() => {
    if (!isMobile) return; // Disable on desktop
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [isMobile, maxIndex]);

  // Reset index when screen size changes
  useEffect(() => {
    setIndex(0);
  }, [cardsPerView]);

  // Touch handlers for swipe gestures
  const handleTouchStart = (e) => {
    if (!isMobile) return;
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isMobile) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isMobile || !touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide(); // Swipe left - next slide
    } else if (distance < -minSwipeDistance) {
      prevSlide(); // Swipe right - previous slide
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Calculate transform percentage based on cards per view
  const getTransformValue = () => {
    if (!isMobile) return 0; // No transform on desktop
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
          style={{ touchAction: isMobile ? 'pan-y' : 'auto' }}
        >
          <div
            className="slider"
            style={{ 
              transform: `translateX(-${getTransformValue()}%)`,
              WebkitTransform: `translateX(-${getTransformValue()}%)` // Safari support
            }}
          >
            {posts.map((post) => (
              <div className="card" key={post.id}>
                <div className="card-top">
                  <span className="profile">lpuuniversity</span>
                  <span className="insta-icon">📷</span>
                </div>
                <div className="image-box">
                  <img src={post.img} alt="post" loading="lazy" />
                </div>
                <div className="card-bottom">
                  <div className="stats">
                    <span><FaHeart /> {post.likes}</span>
                    <span><FaRegComment /> {post.comments}</span>
                  </div>
                  <p>{post.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {isMobile && (
            <div className="slider-buttons">
              <button 
                onClick={prevSlide}
                disabled={index === 0}
                style={{ 
                  opacity: index === 0 ? 0.5 : 1,
                  cursor: index === 0 ? 'not-allowed' : 'pointer'
                }}
              >
                ‹
              </button>
              <button 
                onClick={nextSlide}
                disabled={index >= maxIndex}
                style={{ 
                  opacity: index >= maxIndex ? 0.5 : 1,
                  cursor: index >= maxIndex ? 'not-allowed' : 'pointer'
                }}
              >
                ›
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SocialFootprints;
