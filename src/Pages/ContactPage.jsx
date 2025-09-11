import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { MapPin, Mail, Phone } from "lucide-react";  // Lucide icons import
import Footer from "../Components/Footer";
import "./Contactpage.css";

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
    })
      .then((res) => {
        if (res.ok) {
          setIsSubmitted(true);
          form.reset();
          setTimeout(() => setIsSubmitted(false), 3000);
        }
      })
      .catch((err) => console.error("Error:", err));
  };

  return (
    <>
      <div className="contact-wrapper">
        <div className="contact-card">
          {/* Left Side */}
          <div className="contact-left">
            <h2>Contact us</h2>
            <p>Reach out to us for any inquiry</p>

            <form
              className="contact-form"
              action="https://formsubmit.co/5f09eeab7f75d9577b4199c90d0b94f1"
              method="POST"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <input type="text" name="name" placeholder="Full name" required />
              <input type="email" name="email" placeholder="Your email" required />
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                required
              ></textarea>
              <button type="submit">SUBMIT</button>

              <AnimatePresence>
                {isSubmitted && (
                  <motion.p
                    className="success-msg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4 }}
                  >
                    ✅ Your message has been sent!
                  </motion.p>
                )}
              </AnimatePresence>
            </form>

            {/* Follow us section */}
            <div className="follow-us">
              <p>Follow us</p>
              <div className="social-icons">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaYoutube /></a>
              </div>
            </div>
          </div>

          {/* Right Side Map */}
          <div className="contact-right">
            <iframe
              title="location-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.244017719317!2d75.83104733330286!3d31.14410127707191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a8d11bd7fb119%3A0xe564d41b5fd6b644!2sBrown%20kudi!5e1!3m2!1sen!2sin!4v1756628594057!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="contact-bottom">
          <div className="info-box">
            <span><MapPin size={26} /></span>
            <p>Village Gura, Punjab, 144418</p>
          </div>
          <div className="info-box">
            <span><Mail size={26} /></span>
            <p>brownkuditeam@gmail.com</p>
          </div>
          <div className="info-box">
            <span><Phone size={26} /></span>
            <p>+91 8264468285</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
