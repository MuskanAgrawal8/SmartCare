import React from "react";
import "./Testinomial.css";
import user1 from "../assets/person1.png";
import user2 from "../assets/person2.png";
import user3 from "../assets/person3.png";

const Testimonial = () => {
  return (
    <section className="testimonial-section" id="testimonial">
      <div className="testimonial-header">
        <p className="subtitle">OUR DOCTOR'S</p>
        <h2>Client Testimonial</h2>
        <p className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
      </div>

      <div className="testimonial-container">
        <div className="testimonial-card">
          <div className="testimonial-img">
            <img src={user1} alt="Esther Howard" />
          </div>
          <p className="testimonial-text">
            “Very hard and great worker. He thinks about good solutions and has an awesome working morale.”
          </p>
          <h3>Esther Howard</h3>
          <p className="designation">Chief Executive Officer of GIGL</p>
        </div>

        <div className="testimonial-card active">
          <div className="testimonial-img">
            <img src={user2} alt="Cameron Williamson" />
          </div>
          <p className="testimonial-text">
            “Managing chronic conditions like diabetes requires a lot of vigilance, but the medicine refill system has simplified my life.”
          </p>
          <h3>Cameron Williamson</h3>
          <p className="designation">Chief Executive Officer of GIGL</p>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-img">
            <img src={user3} alt="Savannah Nguyen" />
          </div>
          <p className="testimonial-text">
            “Great Designer, does great work and is very adaptive to change. Definitely well qualified for design projects.”
          </p>
          <h3>Savannah Nguyen</h3>
          <p className="designation">Chief Executive Officer of GIGL</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
