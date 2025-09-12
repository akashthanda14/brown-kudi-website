import React from "react";
import { useNavigate } from "react-router-dom";
import "../Components/AboutSection.css";

const stats = [
  { id: 1, number: "3.5", label: "Years Experience" },
  { id: 2, number: "23", label: "Project Challenge" },
  { id: 3, number: "830+", label: "Positive Reviews" },
  { id: 4, number: "100K", label: "Trusted Clients" },
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
          <p className="small-heading">About US</p>
          <h2>
            Our Dream is <br /> Global Learning <br /> Transformation
          </h2>
          <p className="about-desc">
            Brouwn Kudi was founded with a passion for creativity and
            innovation. Our shared dream has always been to craft designs that
            inspire and transform everyday spaces into meaningful experiences.
            With relentless dedication, our team works to bring ideas to life,
            creating a community that values beauty, functionality, and growth.
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
              src="/img/aboutimg1.png"
              alt="About Us"
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
