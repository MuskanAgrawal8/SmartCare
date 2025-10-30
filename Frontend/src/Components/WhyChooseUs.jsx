import React from "react";
import "./WhyChooseUs.css";
import doctorImage from "../assets/doctor1.jpg"; // ← replace with your doctor image path

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us" id="whychooseus">
      <div className="why-left">
        <p className="subtitle">WHY CHOOSE US</p>
        <h2>
          We Remain Continuously <br />
          Available For Your Health Services
        </h2>

        <div className="why-points">
          <div className="point">
            <div className="number">01</div>
            <div className="content">
              <h3>Compassionate & Expert Care</h3>
              <p>
                Our team of dedicated healthcare professionals combines years of
                experience with a genuine commitment to providing excellent care.
              </p>
            </div>
          </div>

          <div className="point">
            <div className="number">02</div>
            <div className="content">
              <h3>Patient-Centered Approach</h3>
              <p>
                Your health and well-being are our top priorities. We take time
                to listen, answer questions, and support you every step.
              </p>
            </div>
          </div>

          <div className="point">
            <div className="number">03</div>
            <div className="content">
              <h3>Personalized Treatment Plans</h3>
              <p>
                We understand every patient is unique, and so is their
                healthcare need. That’s why we create individualized treatment
                plans for each person.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="why-right">
        <div className="image-container">
          <img src={doctorImage} alt="Doctor" className="doctor-img" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
