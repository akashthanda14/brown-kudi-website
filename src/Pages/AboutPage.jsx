import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Components/AboutSection.css";
import { Users, Briefcase, CheckCircle2, ClipboardList } from "lucide-react"; // ✅ Lucide icons
import Footer from "../Components/Footer";

const stats = [
  { id: 1, icon: <Briefcase size={50} strokeWidth={1.5} />, number: 260, label: "Expert Consultants" },
  { id: 2, icon: <Users size={50} strokeWidth={1.5} />, number: 975, label: "Active Clients" },
  { id: 3, icon: <CheckCircle2 size={50} strokeWidth={1.5} />, number: 724, label: "Projects Delivered" },
  { id: 4, icon: <ClipboardList size={50} strokeWidth={1.5} />, number: 89, label: "Orders in Queue" },
];


const About = () => {
  const navigate = useNavigate();
  const [inView, setInView] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);

  const handleNavigate = () => {
    navigate("/about");
    setTimeout(() => {
      const aboutPage = document.querySelector(".about");
      if (aboutPage) {
        aboutPage.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  };

  // Scroll detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Counter animation
  useEffect(() => {
    if (inView) {
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.number;
        const duration = 1500;
        const stepTime = Math.abs(Math.floor(duration / end));
        const timer = setInterval(() => {
          start += 1;
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = start;
            return newCounts;
          });
          if (start === end) clearInterval(timer);
        }, stepTime);
      });
    }
  }, [inView]);

  return (
<>
    <section className="about" ref={sectionRef}>
      {/* Top Section Heading */}
      <div className="about-top">
        <p className="small-heading">About Us</p>
        <h1 className="main-heading">Innovative Design for Every Room</h1>
      </div>

      {/* Two Column Section */}
      <div className="about-wrapper">
        {/* Left side image */}
        <div className="about-left">
          <img
            className="about-main-img"
            src="/img/aboutimg1.png"
            alt="About Us"
          />
        </div>

        {/* Right side content */}
        <div className="about-right">
          <h2>Brouwn Kudi</h2>
          <p>
            At <strong>Brouwn Kudi</strong>, we believe that every space tells
            a story. Our passion lies in creating innovative interior designs
            that blend aesthetics with functionality.
          </p>
          <p>
            With years of expertise, we have transformed numerous spaces into
            elegant, practical, and inspiring environments. From modern offices
            to cozy homes, our designs are tailored to reflect your unique
            personality and needs.
          </p>
          <p>
            We don’t just design interiors — we design experiences. Our team of
            professionals ensures that every detail, from concept to execution,
            aligns with your vision.
          </p>
          <button className="about-btn" onClick={handleNavigate}>
            <span>Contact Us</span>
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="about-stats">
        {stats.map((stat, index) => (
          <div key={stat.id} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <h2>{counts[index]}+</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
    <Footer />
</>
  );
};

export default About;
