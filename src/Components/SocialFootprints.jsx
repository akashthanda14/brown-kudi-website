import React from "react";
import { Heart, MessageCircle, Instagram } from "lucide-react";
import "./SocialFootprints.css";
import Footer from "./Footer";


const posts = [
  {
    id: 1,
    username: "brown_kudi1",
    date: "May 15",
    image:
      "https://ik.imagekit.io/02x2rciof/footprint2.png",
    likes: "307.3k",
    comments: "1k",
    caption:
      "I am soo proud of you di  Waheguru Aanewale Time mein Aap ko jada jada taraki de 🤌🏻",
    link: "https://www.instagram.com/reel/DJtRgPJz7In/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 2,
    username: "brown_kudi1",
    date: "August 28",
    image: "https://ik.imagekit.io/02x2rciof/Screenshot%202025-11-16%20160921.png",
    likes: "63k",
    comments: "197",
    caption:
      "ਕੋਈ ਮੁੰਡਾ ਜਦੋ ਤਰਕੀ ਕਰਦਾ ਹੈ ਤਾ ਓਹਨੂੰ ਗੋਲ਼ੀ 🔫 ਮਿਲਦੀ ਆ ਜਦ ਕੋਈ ਕੁੜੀ ਤਰਕੀ ਕਰਦੀ ਓਦੋ ਬਦਨਾਮ ਹੁੰਦੀ",
    link: "https://www.instagram.com/brown_kudi1/reel/DN7Q_W_knqg/",
  },
  {
    id: 3,
    username: "brown_kudi1",
    date: "June 15",
    image:
      "https://ik.imagekit.io/02x2rciof/footprint3.png",
    likes: "200k",
    comments: "2.4k",
    caption:
      "Thanks to Mr Nag @speedwaystyresindia kade ni socheya k etho tak awage ..",
    link: "https://www.instagram.com/reel/DK7LpzITB39/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 4,
    username: "brown_kudi1",
    date: "June 20",
    image:
      "https://ik.imagekit.io/02x2rciof/footprint4.png",
    likes: "23.6k",
    comments: "111",
    caption:
      "4 Taste of Babu just dropped and its a VIBE! 🎶 Dive into the latest Punjabi beats.",
    link: "https://www.instagram.com/brown_kudi1/reel/DLJh0q2TC1U/",
  },
];

const SocialFootprints = () => {
  const openReel = (url) => {
    window.open(url, "_blank");
  };

  return (
 <>
    <section className="social-container">
      <div className="social-wrapper">
        <h2 className="social-title">
          <Instagram size={35} color="#ffffffff" /> Social Footprints
        </h2>

        <div className="social-grid">
          {posts.map((post) => (
            <div
              key={post.id}
              className="social-card"
              onClick={() => openReel(post.link)}
            >
              <div className="social-header">
                <Instagram className="insta-icon" size={20} color="#162139ba" />
                <span className="username">{post.username}</span>
                <span className="date">{post.date}</span>
              </div>

              <img src={post.image} alt="Instagram post" className="post-img" />

              <div className="social-footer">
                <div className="reactions">
                  <Heart size={18} className="icon heart" />
                  <span>{post.likes}</span>
                  <MessageCircle size={18} className="icon comment" />
                  <span>{post.comments}</span>
                </div>
                <p className="caption">{post.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
 </>
  );
};

export default SocialFootprints;