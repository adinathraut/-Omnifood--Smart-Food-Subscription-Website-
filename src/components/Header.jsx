import React, { useState } from "react";
import logo from "../assets/img/omnifood-logo.png"; // Import the logo image

function Header() {
  // State to handle mobile navigation toggle
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen); // Toggle the navigation state
  };

  return (
    <header className={`header ${isNavOpen ? "nav-open" : ""}`}>
      {/* Logo */}
      <a href="#home">
        <img src={logo} className="logo" alt="Omnifood Logo" />
      </a>

      {/* Main Navigation */}
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a href="#section-how" className="main-nav-link">
              How it works
            </a>
          </li>
          <li>
            <a href="#meals" className="main-nav-link">
              Meals
            </a>
          </li>
          <li>
            <a href="#testimonial" className="main-nav-link">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#pricing" className="main-nav-link">
              Pricing
            </a>
          </li>
          <li>
            <a href="#cta" className="main-nav-link nav-cta">
              Try for free
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation Button */}
      <button className="btn-mobile-nav" onClick={toggleNav}>
        {/* Mobile Menu Icon */}
        <ion-icon
          name="menu-outline"
          className="icon-mobile-nav"
        ></ion-icon>
        {/* Mobile Close Icon */}
        <ion-icon
          name="close-outline"
          className="icon-mobile-nav"
        ></ion-icon>
      </button>
    </header>
  );
}

export default Header;
