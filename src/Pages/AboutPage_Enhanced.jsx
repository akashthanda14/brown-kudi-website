import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AboutSection from "../Components/AboutSection";
import "../Components/AboutSection.css";
import { Users, Briefcase, CheckCircle2, ClipboardList, Award, Target, Heart, Star } from "lucide-react";
import Footer from "../Components/Footer";
import { useScrollToTop } from "../hooks/useScrollToTop";

const additionalStats = [
  { id: 1, icon: <Award size={50} strokeWidth={1.5} />, number: 8, label: "Years in Business" },
  { id: 2, icon: <Target size={50} strokeWidth={1.5} />, number: 95, label: "Client Satisfaction %" },
  { id: 3, icon: <Heart size={50} strokeWidth={1.5} />, number: 250, label: "Equipment Delivered" },
  { id: 4, icon: <Star size={50} strokeWidth={1.5} />, number: 12, label: "Countries Served" },
];

const teamMembers = [
  {
    id: 1,
    name: "Harpal Kaur Dhanjal",
    role: "Founder & CEO - Brown Kudi Enterprises",
    image: "/img/owner.jpg",
    description: "Punjab's first professional female welder turned international entrepreneur. With 1.9M Instagram followers, she's revolutionized agricultural equipment trade between India, Australia, and Canada. From mastering arc welding to building a multi-million dollar import-export business, she's redefined what's possible for women in agriculture.",
    achievements: ["1.9M+ Social Media Following", "Australia-Canada Trade Partner", "Professional Welder & Fabricator", "Agricultural Innovation Leader"]
  },
  {
    id: 2,
    name: "Mr. Dhanjal",
    role: "Co-Founder & Operations Director",
    image: "/img/father.png",
    description: "Agricultural veteran with 30+ years of farming and equipment expertise. Oversees quality control for all imported machinery and provides technical guidance for equipment selection. His deep understanding of Indian farming needs ensures every piece of equipment meets local requirements.",
    achievements: ["30+ Years Agriculture Experience", "Equipment Quality Specialist", "Farming Operations Expert", "Technical Advisory Leader"]
  },
  {
    id: 3,
    name: "Technical Team",
    role: "Engineering & Support Specialists",
    image: "/img/aboutimg2.png",
    description: "Skilled engineers, welders, and agricultural technicians who handle equipment assembly, maintenance, and customer support. Our team ensures every tyre and agricultural machine meets international standards while being perfectly suited for Indian farming conditions.",
    achievements: ["Certified Technical Expertise", "International Quality Standards", "24/7 Customer Support", "On-site Installation Services"]
  }
];

const values = [
  {
    icon: <Target size={40} strokeWidth={1.5} />,
    title: "Quality Assurance",
    description: "Every tyre and agricultural equipment undergoes rigorous quality checks. We import only from certified manufacturers in Australia and Canada, ensuring durability and performance in Indian conditions."
  },
  {
    icon: <Heart size={40} strokeWidth={1.5} />,
    title: "Customer Success",
    description: "From small farmers to large agricultural enterprises, we provide personalized solutions. Our 95% customer satisfaction rate reflects our commitment to understanding and meeting each client's unique needs."
  },
  {
    icon: <Users size={40} strokeWidth={1.5} />,
    title: "Authentic Content",
    description: "Through genuine storytelling and real farming experiences, we've built a community of 1.9M+ followers who trust our expertise in welding, farming, and agricultural equipment selection."
  },
  {
    icon: <Award size={40} strokeWidth={1.5} />,
    title: "Technical Excellence",
    description: "From professional welding services to complex agricultural machinery imports, we maintain the highest technical standards. Every project showcases our commitment to craftsmanship and innovation."
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
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        
        @keyframes slideIn {
          from { transform: translateX(-30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @media (max-width: 768px) {
          .about-hero h1 { font-size: 2.5rem !important; }
          .about-hero p { font-size: 1.1rem !important; }
          .hero-stats { flex-direction: column !important; gap: 20px !important; }
        }
      `}</style>

      {/* Enhanced Hero Section */}
      <motion.section 
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          background: 'linear-gradient(135deg, rgba(44, 62, 80, 0.85), rgba(109, 163, 77, 0.8)), url("/img/aboutbg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '100px 20px 60px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          width: '120px',
          height: '120px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '15%',
          width: '80px',
          height: '80px',
          background: 'rgba(139, 195, 74, 0.2)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite reverse'
        }} />
        <div style={{
          position: 'absolute',
          top: '40%',
          right: '20%',
          width: '60px',
          height: '60px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '50%',
          animation: 'float 10s ease-in-out infinite'
        }} />
        
        <div style={{ maxWidth: '1000px', position: 'relative', zIndex: 2 }}>
          {/* Badge */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              display: 'inline-block',
              background: 'rgba(139, 195, 74, 0.2)',
              padding: '15px 30px',
              borderRadius: '50px',
              marginBottom: '30px',
              border: '2px solid rgba(139, 195, 74, 0.3)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <span style={{ fontSize: '1.1rem', fontWeight: '600', letterSpacing: '1px' }}>
              🌾 PIONEERING AGRICULTURAL EXCELLENCE SINCE 2015
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ 
              fontSize: '4.5rem', 
              fontWeight: '800', 
              marginBottom: '25px',
              lineHeight: '1.1',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            About <span style={{ color: '#8bc34a' }}>Brown Kudi</span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ 
              fontSize: '1.5rem', 
              lineHeight: '1.6', 
              opacity: 0.95,
              marginBottom: '50px',
              maxWidth: '800px',
              margin: '0 auto 50px'
            }}
          >
            From Mastering Welding in Punjab to Building International Tyre & Agricultural Equipment Empire - Connecting Australia, Canada & India Through Quality Trade and Authentic Content Creation
          </motion.p>
          
          {/* Hero Stats */}
          <motion.div
            className="hero-stats"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{
              display: 'flex',
              gap: '40px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '40px'
            }}
          >
            {[
              { number: '1.9M+', label: 'Social Media Followers', icon: '📱' },
              { number: '12+', label: 'Countries Served', icon: '🌍' },
              { number: '8+', label: 'Years in Business', icon: '🏆' },
              { number: '250+', label: 'Equipment Delivered', icon: '�' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                style={{
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '20px',
                  borderRadius: '15px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  minWidth: '120px'
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '5px' }}>{stat.icon}</div>
                <div style={{ fontSize: '2.2rem', fontWeight: '700', color: '#8bc34a' }}>{stat.number}</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Call to Action Buttons */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <motion.button 
              onClick={() => navigate("/contact")}
              whileHover={{ scale: 1.05, y: -3 }}
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
                boxShadow: '0 15px 40px rgba(109, 163, 77, 0.3)',
                transition: 'all 0.3s ease'
              }}
            >
              Connect With Us
            </motion.button>
            <motion.button 
              onClick={() => navigate("/gallery")}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                padding: '16px 35px',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '50px',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease'
              }}
            >
              View Our Journey
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Main About Section - Using AboutSection Component */}
      <AboutSection />

      {/* Journey & Expertise Section */}
      <motion.section 
        className="journey-expertise"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          padding: '100px 20px',
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
          position: 'relative'
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #6da34d, #8bc34a)',
                color: 'white',
                padding: '12px 30px',
                borderRadius: '50px',
                marginBottom: '25px',
                fontSize: '1rem',
                fontWeight: '600',
                letterSpacing: '1px'
              }}
            >
              🔥 THE BROWN KUDI JOURNEY
            </motion.div>
            
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{ 
                fontSize: '3.2rem', 
                color: '#2c3e50', 
                marginBottom: '25px',
                fontWeight: '800'
              }}
            >
              From <span style={{ color: '#6da34d' }}>Welding Sparks</span> to Global Success
            </motion.h2>
            
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ 
                fontSize: '1.3rem', 
                color: '#6c757d', 
                maxWidth: '800px', 
                margin: '0 auto',
                lineHeight: '1.7'
              }}
            >
              Discover how passion for welding transformed into a multi-million dollar agricultural empire spanning three continents
            </motion.p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '50px',
            alignItems: 'stretch'
          }}>
            {/* Content Creation Journey */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{
                background: 'white',
                padding: '50px 40px',
                borderRadius: '25px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                border: '1px solid #f0f0f0',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: '200%',
                height: '200%',
                background: 'linear-gradient(45deg, rgba(109, 163, 77, 0.03), rgba(139, 195, 74, 0.06))',
                borderRadius: '50%',
                zIndex: 0
              }} />
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #6da34d, #8bc34a)',
                  borderRadius: '50%',
                  marginBottom: '30px'
                }}>
                  📱
                </div>
                
                <h3 style={{ 
                  fontSize: '2rem', 
                  marginBottom: '25px',
                  color: '#2c3e50',
                  fontWeight: '700'
                }}>
                  Content Creation Mastery
                </h3>
                
                <p style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: '1.7',
                  color: '#6c757d',
                  marginBottom: '30px'
                }}>
                  Started sharing authentic farming and welding content, growing from zero to 1.9M+ Instagram followers. Our content showcases real agricultural work, professional welding techniques, and genuine farmer stories that resonate with millions.
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {[
                    '1.9M+ Instagram followers organically grown',
                    'Authentic agricultural content creation',
                    'Professional welding technique demonstrations',
                    'Real farmer stories and equipment reviews'
                  ].map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        fontSize: '1rem',
                        color: '#6da34d',
                        fontWeight: '500'
                      }}
                    >
                      <CheckCircle2 size={18} />
                      <span>{point}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Welding & Technical Expertise */}
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{
                background: 'white',
                padding: '50px 40px',
                borderRadius: '25px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                border: '1px solid #f0f0f0',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: '200%',
                height: '200%',
                background: 'linear-gradient(45deg, rgba(109, 163, 77, 0.03), rgba(139, 195, 74, 0.06))',
                borderRadius: '50%',
                zIndex: 0
              }} />
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #8bc34a, #6da34d)',
                  borderRadius: '50%',
                  marginBottom: '30px'
                }}>
                  🔧
                </div>
                
                <h3 style={{ 
                  fontSize: '2rem', 
                  marginBottom: '25px',
                  color: '#2c3e50',
                  fontWeight: '700'
                }}>
                  Professional Welding Excellence
                </h3>
                
                <p style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: '1.7',
                  color: '#6c757d',
                  marginBottom: '30px'
                }}>
                  Punjab's pioneering female welder with expertise in arc welding, MIG/TIG welding, and heavy machinery fabrication. From custom agricultural equipment to structural steel work, delivering precision craftsmanship that sets industry standards.
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {[
                    'Certified in multiple welding techniques',
                    'Custom agricultural equipment fabrication',
                    'Heavy machinery repair and modification',
                    'Breaking gender barriers in skilled trades'
                  ].map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        fontSize: '1rem',
                        color: '#6da34d',
                        fontWeight: '500'
                      }}
                    >
                      <CheckCircle2 size={18} />
                      <span>{point}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* International Trade Success */}
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(135deg, #6da34d, #8bc34a)',
                color: 'white',
                padding: '50px 40px',
                borderRadius: '25px',
                boxShadow: '0 20px 60px rgba(109, 163, 77, 0.3)',
                gridColumn: 'span 2',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                fontSize: '6rem',
                opacity: 0.1
              }}>
                🌍
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '50px', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '300px' }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100px',
                    height: '100px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    marginBottom: '30px'
                  }}>
                    🚢
                  </div>
                  
                  <h3 style={{ 
                    fontSize: '2.5rem', 
                    marginBottom: '25px',
                    fontWeight: '700'
                  }}>
                    International Import-Export Empire
                  </h3>
                  
                  <p style={{ 
                    fontSize: '1.2rem', 
                    lineHeight: '1.7',
                    opacity: 0.95,
                    marginBottom: '30px'
                  }}>
                    Built a thriving international trade business importing premium tyres and agricultural equipment from Australia and Canada. Our direct relationships with manufacturers ensure competitive pricing and guaranteed quality for Indian farmers.
                  </p>
                </div>
                
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(2, 1fr)', 
                  gap: '30px',
                  minWidth: '400px'
                }}>
                  {[
                    { number: '250+', label: 'Equipment Delivered', icon: '🚜' },
                    { number: '12+', label: 'Countries Served', icon: '🌍' },
                    { number: '95%', label: 'Client Satisfaction', icon: '⭐' },
                    { number: '8+', label: 'Years Trading', icon: '📈' }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      style={{
                        background: 'rgba(255, 255, 255, 0.15)',
                        padding: '25px 20px',
                        borderRadius: '15px',
                        textAlign: 'center',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{stat.icon}</div>
                      <div style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '5px' }}>{stat.number}</div>
                      <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <motion.section 
        className="mission-vision"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          padding: '100px 20px',
          background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(109, 163, 77, 0.1) 0%, transparent 70%),
            radial-gradient(circle at 75% 75%, rgba(139, 195, 74, 0.1) 0%, transparent 70%)
          `,
          opacity: 0.5
        }} />
        
        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                display: 'inline-block',
                background: 'rgba(139, 195, 74, 0.2)',
                padding: '12px 30px',
                borderRadius: '50px',
                marginBottom: '25px',
                border: '2px solid rgba(139, 195, 74, 0.3)',
                fontSize: '1rem',
                fontWeight: '600',
                letterSpacing: '1px'
              }}
            >
              🎯 OUR MISSION & VISION
            </motion.div>
            
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{ 
                fontSize: '3.5rem', 
                marginBottom: '25px',
                fontWeight: '800',
                lineHeight: '1.2'
              }}
            >
              Driving <span style={{ color: '#8bc34a' }}>Agricultural Revolution</span>
            </motion.h2>
            
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ 
                fontSize: '1.3rem', 
                opacity: 0.9,
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}
            >
              Empowering farmers worldwide with innovative solutions while preserving traditional wisdom and sustainable practices
            </motion.p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', 
            gap: '60px',
            alignItems: 'stretch'
          }}>
            {/* Mission */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '50px 40px',
                borderRadius: '25px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                position: 'relative'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                fontSize: '4rem',
                opacity: 0.1
              }}>
                🚀
              </div>
              
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #6da34d, #8bc34a)',
                borderRadius: '50%',
                marginBottom: '30px'
              }}>
                <Target size={40} color="white" />
              </div>
              
              <h3 style={{ 
                fontSize: '2.2rem', 
                marginBottom: '25px',
                color: '#8bc34a',
                fontWeight: '700'
              }}>
                Our Mission
              </h3>
              
              <p style={{ 
                fontSize: '1.2rem', 
                lineHeight: '1.7',
                opacity: 0.9,
                marginBottom: '30px'
              }}>
                To bridge international agricultural markets through authentic content creation and quality equipment trading. We connect premium Australian and Canadian agricultural technology with Indian farmers while inspiring millions through genuine storytelling and professional welding expertise.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {[
                  'Import premium tyres and equipment from Australia & Canada',
                  'Provide authentic agricultural content to 1.9M+ followers',
                  'Deliver professional welding and fabrication services',
                  'Ensure 95%+ customer satisfaction in equipment delivery'
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      fontSize: '1rem',
                      opacity: 0.8
                    }}
                  >
                    <CheckCircle2 size={18} color="#8bc34a" />
                    <span>{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '50px 40px',
                borderRadius: '25px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                position: 'relative'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                fontSize: '4rem',
                opacity: 0.1
              }}>
                🌟
              </div>
              
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #8bc34a, #6da34d)',
                borderRadius: '50%',
                marginBottom: '30px'
              }}>
                <Star size={40} color="white" />
              </div>
              
              <h3 style={{ 
                fontSize: '2.2rem', 
                marginBottom: '25px',
                color: '#8bc34a',
                fontWeight: '700'
              }}>
                Our Vision
              </h3>
              
              <p style={{ 
                fontSize: '1.2rem', 
                lineHeight: '1.7',
                opacity: 0.9,
                marginBottom: '30px'
              }}>
                To become the most trusted name in international agricultural equipment trading between India, Australia, and Canada. We envision expanding our content creation to reach 5M+ followers while maintaining our commitment to quality welding services and authentic storytelling that inspires the next generation of agricultural entrepreneurs.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {[
                  'Leading tyre & equipment importer across 3 continents',
                  'Content creation inspiring 5M+ agricultural enthusiasts',
                  'Professional welding services recognized internationally',
                  'Empowering women entrepreneurs in male-dominated industries'
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      fontSize: '1rem',
                      opacity: 0.8
                    }}
                  >
                    <Star size={18} color="#8bc34a" />
                    <span>{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

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

      {/* Enhanced Team Section */}
      <motion.section 
        className="about-team"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ 
          padding: '100px 20px', 
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' 
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #6da34d, #8bc34a)',
                color: 'white',
                padding: '10px 25px',
                borderRadius: '50px',
                marginBottom: '20px',
                fontSize: '0.9rem',
                fontWeight: '600',
                letterSpacing: '1px'
              }}
            >
              👥 OUR LEADERSHIP TEAM
            </motion.div>
            
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{ 
                fontSize: '3.2rem', 
                color: '#2c3e50', 
                marginBottom: '25px',
                fontWeight: '800'
              }}
            >
              Meet Our <span style={{ color: '#6da34d' }}>Visionary Team</span>
            </motion.h2>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ 
                fontSize: '1.3rem', 
                color: '#6c757d', 
                maxWidth: '800px', 
                margin: '0 auto',
                lineHeight: '1.7'
              }}
            >
              Passionate innovators dedicated to transforming agriculture through expertise, tradition, and cutting-edge technology
            </motion.p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            gap: '60px',
            justifyItems: 'center'
          }}>
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -20, scale: 1.03 }}
                style={{
                  background: 'white',
                  padding: '50px 40px',
                  borderRadius: '30px',
                  boxShadow: '0 25px 80px rgba(0,0,0,0.08)',
                  textAlign: 'center',
                  maxWidth: '420px',
                  width: '100%',
                  border: '1px solid #f0f0f0',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Background Gradient */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '6px',
                  background: 'linear-gradient(135deg, #6da34d, #8bc34a)',
                  zIndex: 1
                }} />
                
                {/* Background Pattern */}
                <div style={{
                  position: 'absolute',
                  top: '-100%',
                  right: '-100%',
                  width: '300%',
                  height: '300%',
                  background: 'linear-gradient(45deg, rgba(109, 163, 77, 0.02), rgba(139, 195, 74, 0.04))',
                  borderRadius: '50%',
                  zIndex: 0
                }} />
                
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    style={{
                      width: '180px',
                      height: '180px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      margin: '0 auto 35px',
                      border: '6px solid #6da34d',
                      boxShadow: '0 15px 40px rgba(109, 163, 77, 0.2)',
                      position: 'relative'
                    }}
                  >
                    <img 
                      src={member.image} 
                      alt={member.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    {/* Ring animation */}
                    <div style={{
                      position: 'absolute',
                      top: '-6px',
                      left: '-6px',
                      right: '-6px',
                      bottom: '-6px',
                      borderRadius: '50%',
                      border: '2px solid transparent',
                      background: 'linear-gradient(45deg, #6da34d, #8bc34a) border-box',
                      WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'exclude',
                      animation: 'pulse 3s ease-in-out infinite'
                    }} />
                  </motion.div>
                  
                  <h3 style={{ 
                    fontSize: '1.8rem', 
                    color: '#2c3e50', 
                    marginBottom: '12px',
                    fontWeight: '700'
                  }}>
                    {member.name}
                  </h3>
                  
                  <div style={{
                    display: 'inline-block',
                    background: 'linear-gradient(135deg, #6da34d, #8bc34a)',
                    color: 'white',
                    padding: '8px 20px',
                    borderRadius: '20px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    marginBottom: '25px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {member.role}
                  </div>
                  
                  <p style={{ 
                    color: '#6c757d', 
                    lineHeight: '1.8',
                    fontSize: '1.1rem',
                    marginBottom: '30px'
                  }}>
                    {member.description}
                  </p>
                  
                  {/* Achievements */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    marginTop: '25px'
                  }}>
                    {member.achievements.map((achievement, achIndex) => (
                      <motion.div
                        key={achIndex}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: achIndex * 0.1 }}
                        viewport={{ once: true }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '10px',
                          background: 'rgba(109, 163, 77, 0.1)',
                          padding: '10px 15px',
                          borderRadius: '15px',
                          color: '#6da34d',
                          fontWeight: '600',
                          fontSize: '0.95rem'
                        }}
                      >
                        <CheckCircle2 size={16} />
                        <span>{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Enhanced Call to Action */}
      <motion.section 
        className="about-cta"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          padding: '120px 20px',
          background: 'linear-gradient(135deg, #6da34d 0%, #8bc34a 50%, #2c3e50 100%)',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '200px',
          height: '200px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '15%',
          right: '10%',
          width: '150px',
          height: '150px',
          background: 'rgba(255, 255, 255, 0.03)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite reverse'
        }} />
        
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1) 1px, transparent 1px),
            radial-gradient(circle at 70% 80%, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          opacity: 0.4
        }} />
        
        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              display: 'inline-block',
              background: 'rgba(255, 255, 255, 0.15)',
              padding: '15px 35px',
              borderRadius: '50px',
              marginBottom: '30px',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <span style={{ fontSize: '1.1rem', fontWeight: '600', letterSpacing: '1px' }}>
              🚀 START YOUR AGRICULTURAL JOURNEY
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ 
              fontSize: '3.5rem', 
              marginBottom: '30px',
              fontWeight: '800',
              lineHeight: '1.2',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Ready to <span style={{ color: '#fff' }}>Transform</span> Your Agriculture?
          </motion.h2>
          
          <motion.p 
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ 
              fontSize: '1.4rem', 
              marginBottom: '50px', 
              opacity: 0.95,
              lineHeight: '1.6',
              maxWidth: '700px',
              margin: '0 auto 50px'
            }}
          >
            Join thousands of farmers worldwide who trust Brown Kudi for innovative agricultural solutions, sustainable practices, and exceptional results
          </motion.p>
          
          {/* Benefits Grid */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '30px',
              marginBottom: '60px',
              maxWidth: '900px',
              margin: '0 auto 60px'
            }}
          >
            {[
              { icon: '🚜', title: 'Quality Equipment', desc: 'Premium tyres & machinery from Australia/Canada' },
              { icon: '📈', title: 'Proven Results', desc: '95% customer satisfaction rate' },
              { icon: '🌍', title: 'International Trade', desc: 'Direct imports from 12+ countries' },
              { icon: '🔧', title: 'Professional Welding', desc: 'Expert fabrication & repair services' }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '30px 20px',
                  borderRadius: '20px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{benefit.icon}</div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px' }}>
                  {benefit.title}
                </h4>
                <p style={{ fontSize: '1rem', opacity: 0.9 }}>{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Call to Action Buttons */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            style={{ display: 'flex', gap: '25px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <motion.button 
              onClick={handleNavigate}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'linear-gradient(135deg, #fff, #f8f9fa)',
                color: '#2c3e50',
                border: 'none',
                padding: '20px 50px',
                fontSize: '1.2rem',
                fontWeight: '700',
                borderRadius: '50px',
                cursor: 'pointer',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <span>Get Started Today</span>
              <span style={{ fontSize: '1.5rem' }}>🚀</span>
            </motion.button>
            
            <motion.button 
              onClick={() => navigate("/gallery")}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.4)',
                padding: '18px 45px',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '50px',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <span>View Our Work</span>
              <span style={{ fontSize: '1.2rem' }}>📸</span>
            </motion.button>
            
            <motion.button 
              onClick={() => navigate("/contact")}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.4)',
                padding: '18px 45px',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '50px',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <span>Contact Us</span>
              <span style={{ fontSize: '1.2rem' }}>💬</span>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </>
  );
};

export default About;
