import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "../Components/ReactVideoSlider.css"
const videos = [
  "/img/video1.mp4",
  "/img/video2.mp4",
  "/img/video3.mp4",
  "/img/video4.mp4",

];
const heading = {
    english: "Style That Speaks With Strength !",
    hindi: "स्टाइल जो ताक़त से बोले !",
    punjabi: "ਸਟਾਈਲ ਜੋ ਤਾਕਤ ਨਾਲ ਬੋਲੇ !",
};


const ReactVideoSlider = () => {
  const repeatedVideos = [...videos, ...videos, ...videos];
    const { language } = useLanguage();

  return (
    <section className="slider-section">
      <h2 className="slider-heading">  {heading[language]}</h2>
      <div className="slider-wrapper">
        {/* Shadow overlays */}
        <div className="shadow-left"></div>
        <div className="shadow-right"></div>

        {/* Video track */}
        <div className="slider-track">
          {repeatedVideos.map((src, index) => (
            <div className="slide" key={index}>
              <video
                src={src}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReactVideoSlider;
