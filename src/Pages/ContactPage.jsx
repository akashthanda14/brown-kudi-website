import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Contactpage.css";
import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import Footer from "../Components/Footer";
const address = {
  english: "Get in touch",
    hindi: "संपर्क करें",
    punjabi: "ਸੰਪਰਕ ਕਰੋ",
};
const address2 = {
  english: "Contact us for a quote, help, or to join the team.",
    hindi: "उद्धरण, सहायता या टीम में शामिल होने के लिए हमसे संपर्क करें।",
    punjabi: "ਹਵਾਲਾ, ਮਦਦ, ਜਾਂ ਟੀਮ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਣ ਲਈ ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।",
};
const address3 = {
  english: "Village Gura ,Punjab, 144418",
    hindi: "गाँव गुरा, पंजाब, 144418",
    punjabi: "ਪਿੰਡ ਗੁਰਾ, ਪੰਜਾਬ, 144418",
};
const ContactPage = () => {
  const { language } = useLanguage();


  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    // ✅ FormSubmit automatically handles submission
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
      <div className="contact-container">
        <h2 className="contact-title">{address[language]}</h2>
        <p className="contact-subtitle">
         {address2[language]}
        </p>

        {/* Info boxes */}
        <div className="contact-info">
          <div className="info-box">
            <span>📍</span>
            <p>{address3[language]}</p>
          </div>
          <div className="info-box">
            <span>📞</span>
            <p>+91 8264468285</p>
            <p>+91 9855119079</p>

          </div>
          <div className="info-box">
            <span>✉️</span>
            <p>brownkuditeam@gmail.com</p>
          </div>
        </div>

        {/* Contact Form with FormSubmit */}
        <form
          className="contact-form"
          action="https://formsubmit.co/5f09eeab7f75d9577b4199c90d0b94f1"
          method="POST"
          onSubmit={handleSubmit}
        >
          {/* Hidden inputs for FormSubmit config */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div className="form-row">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-row">
            <input type="text" name="phone" placeholder="Phone" />
          </div>
          <div className="form-row">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>

          {/* ✅ Animated success message */}
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

        {/* Map below */}
        <div className="map-container">
          <iframe
            title="location-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.244017719317!2d75.83104733330286!3d31.14410127707191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a8d11bd7fb119%3A0xe564d41b5fd6b644!2sBrown%20kudi!5e1!3m2!1sen!2sin!4v1756628594057!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
