import React from "react";
import "./ImageSlider.css"; // CSS अलग file में

const ImageSlider = () => {
  // ✅ अपनी images यहाँ add करो
  const photos = [
    "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750775/p1_jet2jz.jpg",
    "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750775/p2_ujtszk.jpg",
    "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750785/p3_jrzijv.jpg",
    "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750785/p4_frwwpw.jpg",
    "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750785/p5_tnrj1q.jpg",
  ];

  return (
    <div className="slider-container">
      <div className="fade-left"></div>

      <div className="marquee-inner">
        <div className="slider-track">
          {[...photos, ...photos, ...photos].map((src, index) => (
            <div className="slider-card" key={index}>
              <img src={src} alt={`photo-${index}`} draggable="false" />
            </div>
          ))}
        </div>
      </div>

      <div className="fade-right"></div>
    </div>
  );
};

export default ImageSlider;
