import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
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
    role: "Co-Founder & Operations Director",
    image: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750775/owner_ehbimh.jpg",
    description: "Punjab's first professional female welder turned international entrepreneur. With 2M Instagram followers, she's revolutionized trade between India, Australia, and Canada. From mastering arc welding to building a multi-million dollar import-export business, she's redefined what's possible for women in agriculture.",
    achievements: ["2M+ Social Media Following", "Australia-Canada Trade Partner","Agricultural Innovation Leader"]
  },
  {
    id: 2,
    name: "Bhagwan Singh Dhanjal",
    role: "Founder & CEO - Brown Kudi Enterprises",
    image: "https://res.cloudinary.com/dnyv7wabr/image/upload/v1757875441/father_pr6sen.png",
    description: "Agricultural veteran with 30+ years of farming and equipment expertise. Oversees quality control for all imported machinery and provides technical guidance for equipment selection. His deep understanding of Indian farming needs ensures every piece of equipment meets local requirements.",
    achievements: ["30+ Years Agriculture Experience", "Equipment Quality Specialist", "Farming Operations Expert", "Technical Advisory Leader"]
  },
  
];


const values = [
  {
    icon: <Target size={40} strokeWidth={1.5} />,
    title: "Our Core Values",
    description: "Every tyre and agricultural equipment undergoes rigorous quality checks. We import only from certified manufacturers ensuring durability and performance"
  },
  {
    icon: <Heart size={40} strokeWidth={1.5} />,
    title: "Customer Success",
    description: "From small farmers to large agricultural enterprises, we provide personalized solutions. Our 95% customer satisfaction rate reflects our commitment to understanding and meeting each client's unique needs."
  },
  {
    icon: <Users size={40} strokeWidth={1.5} />,
    title: "Authentic Content",
    description: "Through genuine storytelling and real farming experiences, we've built a community of 2M+ followers who trust our expertise in farming and agricultural equipment selection."
  },
];

const AboutPage_ = () => {
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
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.04 }}
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
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.04 }}
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
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.04 }}
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
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.04 }}
            style={{
              fontSize: '1.5rem',
              lineHeight: '1.6',
              opacity: 0.95,
              marginBottom: '50px',
              maxWidth: '800px',
              margin: '0 auto 50px'
            }}
          >
            Harpal Kaur Dhanjal, Punjab's pioneering welder girl and Instagram influencer with 2 million followers, breaks barriers as "Brown Kudi."
          </motion.p>

          {/* Hero Stats */}
          <motion.div
            className="hero-stats"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.04 }}
            style={{
              display: 'flex',
              gap: '40px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '40px'
            }}
          >
            {[
              { number: '2M+', label: 'Social Media Followers', icon: '📱' },
              { number: '5+', label: 'Countries Served', icon: '🌍' },
              { number: '25+', label: 'Years in Business', icon: '🏆' },
              { number: '250+', label: 'Equipment Delivered', icon: '�' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.04 }}
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
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.04 }}
            style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <motion.button
              onClick={() => navigate("/contact")}
              whileHover={{}}
              whileTap={{}}
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
              whileHover={{}}
              whileTap={{}}
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

      {/* Our Values Section */}
      <motion.section
        className="about-values"
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.04 }}
        viewport={{ once: true }}
        style={{
          padding: '80px 20px',
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <motion.h2
              initial={{ opacity: 1 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.04 }}
              viewport={{ once: true }}
              style={{ fontSize: '2.5rem', color: '#2c3e50', marginBottom: '20px' }}
            >
              Our Core Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 1 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.04 }}
              viewport={{ once: true }}
              style={{ fontSize: '1.1rem', color: '#6c757d', maxWidth: '600px', margin: '0 auto' }}
            >
              The principles that drive our passion for agricultural excellence
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
                initial={{ opacity: 1 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.04 }}
                viewport={{ once: true }}
                whileHover={{}}
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
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.04 }}
        viewport={{ once: true }}
        style={{
          padding: '80px 20px',
          background: 'linear-gradient(135deg, #6da34d, #8bc34a)',
          color: 'white'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <motion.h2
            initial={{ opacity: 1 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.04 }}
            viewport={{ once: true }}
            style={{ fontSize: '2.5rem', marginBottom: '20px' }}
          >
            Our Journey in Numbers
          </motion.h2>
          <motion.p
            initial={{ opacity: 1 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.04 }}
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
                initial={{ opacity: 1 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.04 }}
                viewport={{ once: true }}
                whileHover={{}}
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
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.04 }}
        viewport={{ once: true }}
        style={{
          padding: '100px 10px',
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto',justifyContent:'center',alignItems:'center', }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <motion.div
              initial={{ opacity: 1 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.04 }}
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
              initial={{ opacity: 1 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.04 }}
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
              initial={{ opacity: 1 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.04 }}
              viewport={{ once: true }}
              style={{
                fontSize: '1.3rem',
                color: '#6c757d',
                maxWidth: '500px',
                margin: '0 auto',
                lineHeight: '1.7',
                alignItems:'center',
              }}
            >
              Passionate innovators dedicated to transforming agriculture through expertise, tradition, and cutting-edge technology
            </motion.p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '60px',
            justifyItems: 'center',
          }}>
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 1 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.04 }}
                viewport={{ once: true }}
                whileHover={{}}
                style={{
                  background: 'white',
                  padding: '50px 30px',
                  borderRadius: '30px',
                  boxShadow: '0 25px 80px rgba(0,0,0,0.08)',
                  textAlign: 'center',
                  maxWidth: '460px',
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
                  <div
                    style={{
                      width: '180px',
                      height: '180px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      margin: '0 auto 35px',
                      position: 'relative'
                    }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />
                  </div>

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
                      <div
                        key={achIndex}
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
                      </div>
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
              { icon: '🚜', title: 'Quality Equipment', desc: 'Premium tyres & machinery' },
              { icon: '📈', title: 'Proven Results', desc: '95% customer satisfaction rate' },
              { icon: '🌍', title: 'International Trade', desc: 'Direct export to 5+ countries' },
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
            background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.26)',
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
              <span>View Our gallery</span>
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

export default AboutPage_;
