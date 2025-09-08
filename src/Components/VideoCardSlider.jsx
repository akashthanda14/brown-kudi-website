import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./VideoCardSlider.css";

const videos = [
  "/video/vd1.mp4",
  "/video/vd2.mp4",
  "/video/vd3.mp4",
  "/video/vd4.mp4",
  "/img/video3.mp4",
];

export default function VideoCardSlider() {
  return (
    
    <div className="slider-container">
      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        spaceBetween={25}
        slidesPerView={3}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
        className="video-swiper"
      >
        {videos.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="video-card">
              <video
                src={src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
