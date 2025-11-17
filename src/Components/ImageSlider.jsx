import React from "react";
import "./ImageSlider.css"; // CSS अलग file में

const ImageSlider = () => {
  // ✅ अपनी images यहाँ add करो
  const photos = [
    "https://res.cloudinary.com/dm9sbfva5/image/upload/v1763372457/p1_n33ubj.jpg",
    "https://res.cloudinary.com/dm9sbfva5/image/upload/v1763372457/p2_odfeum.jpg",
    "https://res.cloudinary.com/dm9sbfva5/image/upload/v1763372457/p3_mrqotb.jpg",
    "https://res.cloudinary.com/dm9sbfva5/image/upload/v1763372458/p4_ywty0s.jpg",
    "https://res.cloudinary.com/dm9sbfva5/image/upload/v1763372458/p5_kjpfn2.jpg",
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
