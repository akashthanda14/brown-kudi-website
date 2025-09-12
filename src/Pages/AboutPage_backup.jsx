import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AboutSection from "../Components/AboutSection";
import "../Components/AboutSection.css";
import { Users, Briefcase, CheckCircle2, ClipboardList, Award, Target, Heart, Star } from "lucide-react";
import Footer from "../Components/Footer";
import { useScrollToTop } from "../hooks/useScrollToTop";

const additionalStats = [
  { id: 1, icon: <Award size={50} strokeWidth={1.5} />, number: 15, label: "Years Experience" },
  { id: 2, icon: <Target size={50} strokeWidth={1.5} />, number: 98, label: "Success Rate %" },
  { id: 3, icon: <Heart size={50} strokeWidth={1.5} />, number: 500, label: "Happy Families" },
  { id: 4, icon: <Star size={50} strokeWidth={1.5} />, number: 50, label: "Awards Won" },
];

const teamMembers = [
  {
    id: 1,
    name: "Harpal Kaur Dhanjal",
    role: "Founder & Lead Agriculturist",
    image: "/img/owner.jpg",
    description: "With over 15 years of experience in agricultural innovation and sustainable farming practices."
  },
  {
    id: 2,
    name: "Expert Team",
    role: "Agricultural Specialists",
    image: "/img/aboutimg2.png",
    description: "Our dedicated team of agricultural experts and consultants working towards excellence."
  }
];

const values = [
  {
    icon: <Target size={40} strokeWidth={1.5} />,
    title: "Innovation",
    description: "Pioneering modern agricultural solutions with cutting-edge technology and sustainable practices."
  },
  {
    icon: <Heart size={40} strokeWidth={1.5} />,
    title: "Quality",
    description: "Delivering premium products and services that exceed expectations and drive success."
  },
  {
    icon: <Users size={40} strokeWidth={1.5} />,
    title: "Community",
    description: "Building strong relationships with farmers and agricultural communities worldwide."
  },
  {
    icon: <Award size={40} strokeWidth={1.5} />,
    title: "Excellence",
    description: "Committed to the highest standards in everything we do, from products to customer service."
  }
];


const About = () => {
  const navigate = useNavigate();
  const [inView, setInView] = useState(false);
  const [additionalInView, setAdditionalInView] = useState(false);
  const [additionalCounts, setAdditionalCounts] = useState(additionalStats.map(() => 0));
  const sectionRef = useRef(null);
  const additionalRef = useRef(null);

  // Scroll to top when component mounts
  useScrollToTop();

  // Scroll detection for additional stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setAdditionalInView(true);
      },
      { threshold: 0.3 }
    );
    if (additionalRef.current) observer.observe(additionalRef.current);
    return () => {
      if (additionalRef.current) observer.unobserve(additionalRef.current);
    };
  }, []);
  
  // Counter animation for additional stats
  useEffect(() => {
    if (additionalInView) {
      additionalStats.forEach((stat, index) => {
        let start = 0;
        const end = stat.number;
        const duration = 1500;
        const stepTime = Math.abs(Math.floor(duration / end));
        const timer = setInterval(() => {
          start += 1;
          setAdditionalCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = start;
            return newCounts;
          });
          if (start === end) clearInterval(timer);
        }, stepTime);
      });
    }
  }, [additionalInView]);

  const handleNavigate = () => {
    navigate("/contact");
  };

  return (
<>
    <section id="about" className="about" ref={sectionRef}>
      {/* Top Section Heading */}
      <div className="about-top">
        <p className="small-heading">About Us</p>
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
   
    </section>
    <Footer />
</>
  );
};

export default About;
