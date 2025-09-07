import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Components/Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav>
        <div className="logo">
          <Link to="/" className="logo">
          </Link>

          <span className="logofirst">
          
          Brown<span>ਕੁੜੀ</span>
          </span>
        </div>

        <ul className="desktop-menu">

          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tyres">Tyres</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>

        </ul>
        <Link to="/contact" id="btn">
          Contact
        </Link>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </nav>

      <div className={`menubar ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/tyres" onClick={toggleMenu}>
              Tyres
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={toggleMenu}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
