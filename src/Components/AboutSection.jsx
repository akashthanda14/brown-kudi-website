import React from "react";
import { useNavigate } from "react-router-dom";
import "../Components/AboutSection.css";

const stats = [
  { id: 1, number: "8+", label: "Years Experience" },
  { id: 2, number: "2M+", label: "Social Media Followers" },
  { id: 3, number: "500+", label: "Satisfied Customers" },
];

const About = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/about");
    setTimeout(() => {
      const aboutPage = document.querySelector(".about");
      if (aboutPage) {
        aboutPage.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  };

  return (
    <section className="about">
      <div className="about-container">
        {/* Left Side */}
        <div className="about-left">
          <p className="small-heading">About Us</p>
          <h2>
            Our Dream is <br /> Global Learning <br /> Transformation
          </h2>
          <p className="about-desc">
            Brown Kudi was founded with a passion for practical creativity and
            innovation. Our shared dream has always been to build solutions that
            inspire and transform agricultural and commercial environments into meaningful experiences.
            With dedication, our team works to bring ideas to life,
            creating a community that values reliability, functionality, and growth.
          </p>
          <button className="about-btn" onClick={handleNavigate}>
            About Us
          </button>
        </div>

        {/* Right Side */}
        <div className="about-right"> 
          <div className="about-image-card">
            <img
              className="about-main-img"
              src="https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750351/aboutimg1_rqsp1b.png"
              alt="Brown Kudi team representative image"
            />
          </div>

          <div className="about-stats">
            {stats.map((stat) => (
              <div key={stat.id} className="stat-card">
                <h2>{stat.number}</h2>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
