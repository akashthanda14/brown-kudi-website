import React from "react";
import "./ImageSlider.css"; // CSS अलग file में

const ImageSlider = () => {
  // ✅ अपनी images यहाँ add करो
  const photos = [
    "/img/p1.jpg",
    "/img/p2.jpg",
    "/img/p3.jpg",
    "/img/p4.jpg",
    "/img/p5.jpg",
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
