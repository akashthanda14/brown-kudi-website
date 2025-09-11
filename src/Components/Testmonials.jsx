import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Testimonials.css";

export default function Testimonials() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: i * 0.2 },
        }),
    };

    return (
        <section className="testimonials-section" ref={ref}>
            <h2 className="testimonials-heading">What Our Customers Say</h2>

            <div className="testimonials-container">
                {[ 
                    {
                        name: "Donald Jackman",
                        role: "Content Creator",
                        img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100",
                        text: "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier."
                    },
                    {
                        name: "Richard Nelson",
                        role: "Instagram Influencer",
                        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100",
                        text: "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier."
                    },
                    {
                        name: "James",
                        role: "Digital Content Creator",
                        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
                        text: "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier."
                    }
                ].map((card, i) => (
                    <motion.div
                        key={i}
                        className="testimonial-card"
                        variants={cardVariants}
                        initial="hidden"
                        animate={controls}
                        custom={i}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="testimonial-header">
                            <img
                                className="testimonial-avatar"
                                src={card.img}
                                alt={card.name}
                            />
                            <div>
                                <h1 className="testimonial-name">{card.name}</h1>
                                <p className="testimonial-role">{card.role}</p>
                            </div>
                        </div>
                        <div className="testimonial-body">
                            <p className="testimonial-text">"{card.text}"</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
