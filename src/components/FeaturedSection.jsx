import React from "react";
import techcrunchLogo from "../assets/img/logos/techcrunch.png";
import businessInsiderLogo from "../assets/img/logos/business-insider.png";
import nyTimesLogo from "../assets/img/logos/the-new-york-times.png";
import forbesLogo from "../assets/img/logos/forbes.png";
import usaTodayLogo from "../assets/img/logos/usa-today.png";

function FeaturedSection() {
  return (
    <section className="section-featured">
      <div className="container">
        <h2 className="heading-featured-in">As featured in</h2>
        <div className="logos">
          <img src={techcrunchLogo} alt="techcrunch logo" />
          <img src={businessInsiderLogo} alt="business-insider logo" />
          <img src={nyTimesLogo} alt="the-new-york-times logo" />
          <img src={forbesLogo} alt="forbes logo" />
          <img src={usaTodayLogo} alt="usa-today logo" />
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;
