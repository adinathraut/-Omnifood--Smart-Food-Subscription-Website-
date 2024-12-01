import React from "react";

function HowItWorksSection() {
  return (
    <section className="section-how" id="section-how">
      <div className="container">
        <span className="subheading">How it works</span>
        <h2 className="heading-secondary">
          Your daily dose of health in 3 simple steps
        </h2>
      </div>
      <div className="container grid grid--2--cols grid--center--v">
        <div className="step-text-box">
          <p className="step-number">01</p>
          <h3 className="heading-tertiary">
            Tell us what you like (and what not)
          </h3>
          <p className="step-description">
            Never again waste time thinking about what to eat! Omnifood AI will
            create a 100% personalized weekly meal plan just for you.
          </p>
        </div>
        <div className="step-img-box">
          <img src="img/app/app-screen-1.png" className="step-img" alt="App screen 1" />
        </div>

        <div className="step-img-box">
          <img src="img/app/app-screen-2.png" className="step-img" alt="App screen 2" />
        </div>
        <div className="step-text-box">
          <p className="step-number">02</p>
          <h3 className="heading-tertiary">Approve your weekly meal plan</h3>
          <p className="step-description">
            Once per week, approve the meal plan generated for you by Omnifood AI.
          </p>
        </div>

        <div className="step-text-box">
          <p className="step-number">03</p>
          <h3 className="heading-tertiary">Receive meals at convenient time</h3>
          <p className="step-description">
            Best chefs will cook your meal every day, and we’ll deliver it to your door.
          </p>
        </div>
        <div className="step-img-box">
          <img src="img/app/app-screen-3.png" className="step-img" alt="App screen 3" />
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
