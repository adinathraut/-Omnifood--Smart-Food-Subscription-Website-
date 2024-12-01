import React from "react";

function MealsSection() {
  return (
    <section className="section-meals" id="meals">
      <div className="container center-text">
        <span className="subheading">Meals</span>
        <h2 className="heading-secondary">Omnifood AI chooses from 5,000+ recipes</h2>
      </div>
      <div className="container grid grid--3--cols margin-bottom-md">
        {/* Repeat this block for other meals */}
        <div className="meal">
          <img src="img/meals/meal-1.jpg" className="meal-img" alt="Japanese Gyozas" />
          <div className="meal-content">
            <p className="meal-title">Japanese Gyozas</p>
            <ul className="meal-attributes">
              <li>650 calories</li>
              <li>NutriScore: 74</li>
              <li>Rating: 4.9</li>
            </ul>
          </div>
        </div>
        {/* Add more meals here */}
      </div>
    </section>
  );
}

export default MealsSection;
