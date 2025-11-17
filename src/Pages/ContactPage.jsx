import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { MapPin, Mail, Phone } from "lucide-react"; // Lucide icons import
import Footer from "../Components/Footer";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { useLanguage } from "../context/LanguageContext";
import "./Contactpage.css";

const translations = {
  english: {
    heading: "Contact Us",
    subtext: "Reach out with any inquiry",
    namePlaceholder: "Full name",
    emailPlaceholder: "Your email",
    messagePlaceholder: "Message",
    submit: "SUBMIT",
    successMsg: "Your message has been sent successfully.",
    followUs: "Follow Us",
    address: "Village Gura, Punjab, 144418",
    email: "brownkuditeam@gmail.com",
    phone: "+91 8264468285",
  },
  hindi: {
    heading: "हमसे संपर्क करें",
    subtext: "कोई भी पूछताछ के साथ संपर्क करें",
    namePlaceholder: "पूरा नाम",
    emailPlaceholder: "आपका ईमेल",
    messagePlaceholder: "संदेश",
    submit: "सबमिट करें",
    successMsg: "आपका संदेश सफलतापूर्वक भेज दिया गया है।",
    followUs: "हमारा अनुसरण करें",
    address: "गाँव गुड़ा, पंजाब, 144418",
    email: "brownkuditeam@gmail.com",
    phone: "+91 8264468285",
  },
  punjabi: {
    heading: "ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
    subtext: "ਕਿਸੇ ਵੀ ਪੁੱਛਗਿੱਛ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
    namePlaceholder: "ਪੂਰਾ ਨਾਮ",
    emailPlaceholder: "ਤੁਹਾਡਾ ਈਮੇਲ",
    messagePlaceholder: "ਸੁਨੇਹਾ",
    submit: "ਜਮ੍ਹਾਂ ਕਰੋ",
    successMsg: "ਤੁਹਾਡਾ ਸੁਨੇਹਾ ਸਫਲਤਾਪੂਰਵਕ ਭੇਜਿਆ ਗਿਆ ਹੈ।",
    followUs: "ਸਾਨੂੰ ਫਾਲੋ ਕਰੋ",
    address: "ਪਿੰਡ ਗੁਰਾ, ਪੰਜਾਬ, 144418",
    email: "brownkuditeam@gmail.com",
    phone: "+91 8264468285",
  },
};

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { language } = useLanguage();
  const t = translations[language] || translations.english;

  // Scroll to top when component mounts
  useScrollToTop();

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
            <h2>{t.heading}</h2>
            <p>{t.subtext}</p>

            <form
              className="contact-form"
              // YAHAN CHANGE KIYA GAYA HAI:
              action="https://formsubmit.co/brownkuditeam@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <input
                type="text"
                name="name"
                placeholder={t.namePlaceholder}
                required
              />
              <input
                type="email"
                name="email"
                placeholder={t.emailPlaceholder}
                required
              />
              <textarea
                name="message"
                placeholder={t.messagePlaceholder}
                rows="5"
                required
              ></textarea>
              <button type="submit">{t.submit}</button>

              <AnimatePresence>
                {isSubmitted && (
                  <motion.p
                    className="success-msg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4 }}
                  >
                    {t.successMsg}
                  </motion.p>
                )}
              </AnimatePresence>
            </form>

            {/* Follow us section */}
            <div className="follow-us">
              <p>{t.followUs}</p>
              <div className="social-icons">
                <a href="http://www.facebook.com/BrownKudiofficial">
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/brown_kudi1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                  <FaInstagram />
                </a>
                <a href="http://www.youtube.com/@BrownKudiThewelderGirl">
                  <FaYoutube />
                </a>
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
            <span>
              <MapPin size={26} />
            </span>
            <p>{t.address}</p>
          </div>
          <div className="info-box">
            <span>
              <Mail size={26} />
            </span>
            <p>{t.email}</p>
          </div>
          <div className="info-box">
            <span>
              <Phone size={26} />
            </span>
            <p>{t.phone}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;