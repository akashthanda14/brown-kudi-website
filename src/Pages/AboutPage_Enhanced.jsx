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
  const [additionalInView, setAdditionalInView] = useState(false);
  const [additionalCounts, setAdditionalCounts] = useState(additionalStats.map(() => 0));
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
      {/* Hero Section */}
      <motion.section 
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          background: 'linear-gradient(135deg, rgba(109, 163, 77, 0.9), rgba(139, 195, 74, 0.8)), url("/img/aboutbg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '80px 20px 40px'
        }}
      >
        <div style={{ maxWidth: '800px' }}>
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '20px' }}
          >
            About Brown Kudi
          </motion.h1>
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ fontSize: '1.3rem', lineHeight: '1.6', opacity: 0.95 }}
          >
            Pioneering Agricultural Excellence Through Innovation, Quality, and Sustainable Practices
          </motion.p>
        </div>
      </motion.section>

      {/* Main About Section - Using AboutSection Component */}
      <AboutSection />

      {/* Our Values Section */}
      <motion.section 
        className="about-values"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          padding: '80px 20px',
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{ fontSize: '2.5rem', color: '#2c3e50', marginBottom: '20px' }}
            >
              Our Core Values
            </motion.h2>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ fontSize: '1.1rem', color: '#6c757d', maxWidth: '600px', margin: '0 auto' }}
            >
              The principles that drive our passion for agricultural excellence and sustainable farming
            </motion.p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '30px' 
          }}>
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                style={{
                  background: 'white',
                  padding: '40px 30px',
                  borderRadius: '16px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                  border: '1px solid #e9ecef'
                }}
              >
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #6da34d, #8bc34a)',
                  borderRadius: '50%',
                  color: 'white',
                  marginBottom: '25px'
                }}>
                  {value.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', color: '#2c3e50', marginBottom: '15px' }}>
                  {value.title}
                </h3>
                <p style={{ color: '#6c757d', lineHeight: '1.6' }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Additional Stats Section */}
      <motion.section 
        ref={additionalRef}
        className="additional-stats"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          padding: '80px 20px',
          background: 'linear-gradient(135deg, #6da34d, #8bc34a)',
          color: 'white'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ fontSize: '2.5rem', marginBottom: '20px' }}
          >
            Our Journey in Numbers
          </motion.h2>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '60px', maxWidth: '600px', margin: '0 auto 60px' }}
          >
            Celebrating milestones that reflect our commitment to agricultural excellence
          </motion.p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '40px' 
          }}>
            {additionalStats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  padding: '40px 20px',
                  borderRadius: '16px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}
              >
                <div style={{ marginBottom: '20px', opacity: 0.9 }}>
                  {stat.icon}
                </div>
                <h2 style={{ fontSize: '3rem', fontWeight: 'bold', margin: '10px 0' }}>
                  {additionalCounts[index]}+
                </h2>
                <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        className="about-team"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ padding: '80px 20px', background: 'white' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{ fontSize: '2.5rem', color: '#2c3e50', marginBottom: '20px' }}
            >
              Meet Our Team
            </motion.h2>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ fontSize: '1.1rem', color: '#6c757d', maxWidth: '600px', margin: '0 auto' }}
            >
              Passionate individuals dedicated to transforming agriculture through innovation
            </motion.p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '40px',
            justifyItems: 'center'
          }}>
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                style={{
                  background: 'white',
                  padding: '30px',
                  borderRadius: '20px',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                  maxWidth: '350px',
                  border: '1px solid #f0f0f0'
                }}
              >
                <div style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  margin: '0 auto 25px',
                  border: '4px solid #6da34d'
                }}>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <h3 style={{ fontSize: '1.4rem', color: '#2c3e50', marginBottom: '10px' }}>
                  {member.name}
                </h3>
                <p style={{ color: '#6da34d', fontWeight: '600', marginBottom: '15px' }}>
                  {member.role}
                </p>
                <p style={{ color: '#6c757d', lineHeight: '1.6' }}>
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="about-cta"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          padding: '80px 20px',
          background: 'linear-gradient(135deg, #2c3e50, #34495e)',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ fontSize: '2.5rem', marginBottom: '20px' }}
          >
            Ready to Transform Your Agriculture?
          </motion.h2>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ fontSize: '1.2rem', marginBottom: '40px', opacity: 0.9 }}
          >
            Join thousands of farmers who trust Brown Kudi for innovative agricultural solutions
          </motion.p>
          <motion.button 
            onClick={handleNavigate}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'linear-gradient(135deg, #6da34d, #8bc34a)',
              color: 'white',
              border: 'none',
              padding: '18px 40px',
              fontSize: '1.1rem',
              fontWeight: '600',
              borderRadius: '50px',
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(109, 163, 77, 0.3)',
              transition: 'all 0.3s ease'
            }}
          >
            Get Started Today
          </motion.button>
        </div>
      </motion.section>

      <Footer />
    </>
  );
};

export default About;
