import React from "react";
import "./QuoteForm.css";
import doctorImg from "../assets/doctor.png"; // 👈 add your doctor image here

const QuoteForm = () => {
  return (
    <section className="quote-section">
      <div className="quote-container">
        {/* Left: Image */}
        <div className="quote-image">
          <img src={doctorImg} alt="Doctor" />
        </div>

        {/* Right: Form */}
        <div className="quote-form-box">
          <div className="quote-header">
            <p className="quote-subtitle">CONTACT US</p>
            <h2>Get A Quote Today</h2>
            <p className="quote-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          <form className="quote-form">
            <div className="input-row">
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
            </div>

            <input type="email" placeholder="you@company.com" />
            <div className="input-row">
              <select className="country-code">
                <option>US</option>
                <option>IN</option>
                <option>UK</option>
              </select>
              <input type="tel" placeholder="+1 (555) 000-0000" />
            </div>

            <input type="date" className="date-input" />

            <textarea rows="4" placeholder="Message"></textarea>

            <button type="submit" className="quote-btn">
              APPOINTMENT NOW
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
