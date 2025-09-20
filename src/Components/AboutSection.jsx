import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "../Components/AboutSection.css";

const stats = [
  { id: 1, number: "8+", label: { english: "Years Experience", hindi: "सालों का अनुभव", punjabi: "ਸਾਲਾਂ ਦਾ ਅਨੁਭਵ" } },
  { id: 2, number: "2M+", label: { english: "Social Media Followers", hindi: "सोशल मीडिया फॉलोअर्स", punjabi: "ਸੋਸ਼ਲ ਮੀਡੀਆ ਫਾਲੋਅਰਸ" } },
  { id: 3, number: "500+", label: { english: "Satisfied Customers", hindi: "संतुष्ट ग्राहक", punjabi: "ਸੰਤੁਸ਼ਟ ਗਾਹਕ" } },
];

const translations = {
  english: {
    smallHeading: "About Us",
    heading: "Our Dream is <br /> Global Learning <br /> Transformation",
    description: "Brown Kudi was founded with a passion for practical creativity and innovation. Our shared dream has always been to build solutions that inspire and transform agricultural and commercial environments into meaningful experiences. With dedication, our team works to bring ideas to life, creating a community that values reliability, functionality, and growth.",
    button: "About Us"
  },
  hindi: {
    smallHeading: "हमारे बारे में",
    heading: "हमारा सपना <br /> वैश्विक शिक्षा <br /> परिवर्तन है",
    description: "ब्राउन कुड़ी को व्यावहारिक रचनात्मकता और नवाचार के जुनून के साथ स्थापित किया गया था। हमारा साझा सपना हमेशा ऐसे समाधान बनाने का रहा है जो कृषि और वाणिज्यिक वातावरण को सार्थक अनुभवों में बदल दें। समर्पण के साथ, हमारी टीम विचारों को जीवंत बनाने के लिए काम करती है, एक समुदाय बनाती है जो विश्वसनीयता, कार्यक्षमता और विकास को महत्व देता है।",
    button: "हमारे बारे में"
  },
  punjabi: {
    smallHeading: "ਸਾਡੇ ਬਾਰੇ",
    heading: "ਸਾਡਾ ਸੁਪਨਾ <br /> ਵਿਸ਼ਵਵਿਆਪੀ ਸਿੱਖਿਆ <br /> ਬਦਲਾਅ ਹੈ",
    description: "ਬ੍ਰਾਊਨ ਕੁੜੀ ਨੂੰ ਵਿਹਾਰਕ ਰਚਨਾਤਮਕਤਾ ਅਤੇ ਨਵੀਨਤਾ ਦੇ ਜੁਨੂੰ ਨਾਲ ਸਥਾਪਿਤ ਕੀਤਾ ਗਿਆ ਸੀ। ਸਾਡਾ ਸਾਂਝਾ ਸੁਪਨਾ ਹਮੇਸ਼ਾ ਅਜਿਹੇ ਹੱਲ ਬਣਾਉਣਾ ਰਿਹਾ ਹੈ ਜੋ ਕ੍ਰਿਸ਼ਤੀ ਅਤੇ ਵਣਜ ਵਾਤਾਵਰਣ ਨੂੰ ਅਰਥਪੂਰਨ ਅਨੁਭਵਾਂ ਵਿੱਚ ਬਦਲ ਦੇਵੇ। ਸਮਰਪਣ ਨਾਲ, ਸਾਡੀ ਟੀਮ ਵਿਚਾਰਾਂ ਨੂੰ ਜੀਵੰਤ ਬਣਾਉਣ ਲਈ ਕੰਮ ਕਰਦੀ ਹੈ, ਇੱਕ ਸਮਾਜ ਬਣਾਉਂਦੀ ਹੈ ਜੋ ਭਰੋਸੇਯੋਗਤਾ, ਕਾਰਜਕੁਸ਼ਲਤਾ ਅਤੇ ਵਿਕਾਸ ਨੂੰ ਮਹੱਤਵ ਦਿੰਦੀ ਹੈ।",
    button: "ਸਾਡੇ ਬਾਰੇ"
  }
};

const About = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language] || translations.english;

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
          <p className="small-heading">{t.smallHeading}</p>
          <h2 dangerouslySetInnerHTML={{ __html: t.heading }} />
          <p className="about-desc">
            {t.description}
          </p>
          <button className="about-btn" onClick={handleNavigate}>
            {t.button}
          </button>
        </div>

        {/* Right Side */}
        <div className="about-right"> 
          <div className="about-image-card">
            <img
              className="about-main-img"
              src="https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750351/aboutimg1_rqsp1b.png"
              alt="Brown Kudi team representative image"
            />
          </div>

          <div className="about-stats">
            {stats.map((stat) => (
              <div key={stat.id} className="stat-card">
                <h2>{stat.number}</h2>
                <p>{stat.label[language] || stat.label.english}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
