import React, { useState } from "react";
import { FaHeart, FaRegComment } from "react-icons/fa"; // icons import
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

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? posts.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === posts.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="social-section">
      <div className="social-container">
        <h2 className="section-heading"># Social Footprints</h2>
        <div className="slider-wrapper">
          <div
            className="slider"
            style={{ transform: `translateX(-${index * 25}%)` }}
          >
            {posts.map((post) => (
              <div className="card" key={post.id}>
                <div className="card-top">
                  <span className="profile">lpuuniversity</span>
                  <span className="insta-icon">📷</span>
                </div>
                <div className="image-box">
                  <img src={post.img} alt="post" />
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
          <div className="slider-buttons">
            <button onClick={prevSlide}>‹</button>
            <button onClick={nextSlide}>›</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialFootprints;
