import React from "react";

function TestimonialsSection() {
  return (
    <section className="section-testimonials" id="testimonial">
      <div className="testimonials-container">
        <span className="subheading">Testimonials</span>
        <h2 className="heading-secondary">Once you try it, you can't go back</h2>
        <div className="testimonials">
          <figure className="testimonial">
            <img className="testimonial-img" alt="Customer photo" src="img/customers/dave.jpg" />
            <blockquote className="testimonial-text">
              "Inexpensive, healthy, and great-tasting meals!"
            </blockquote>
            <p className="testimonial-name">— Dave Bryson</p>
          </figure>
          {/* Add more testimonials */}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
