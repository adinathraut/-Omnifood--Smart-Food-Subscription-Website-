import React from "react";

// Import images from the `src` folder
import techCrunchLogo from "../assets/img/logos/techcrunch.png";
import businessInsiderLogo from "../assets/img/logos/business-insider.png";
import newYorkTimesLogo from "../assets/img/logos/the-new-york-times.png";
import forbesLogo from "../assets/img/logos/forbes.png";
import usaTodayLogo from "../assets/img/logos/usa-today.png";

// Import styles for the component


function FeaturedSection() {
  return (
    <section className="section-featured">
      <div className="container">
        <h2 className="heading-featured-in">As featured in</h2>
        <div className="logos">
          <img
            src={techCrunchLogo}
            alt="TechCrunch logo"
            className="logo-img"
          />
          <img
            src={businessInsiderLogo}
            alt="Business Insider logo"
            className="logo-img"
          />
          <img
            src={newYorkTimesLogo}
            alt="The New York Times logo"
            className="logo-img"
          />
          <img
            src={forbesLogo}
            alt="Forbes logo"
            className="logo-img"
          />
          <img
            src={usaTodayLogo}
            alt="USA Today logo"
            className="logo-img"
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;
