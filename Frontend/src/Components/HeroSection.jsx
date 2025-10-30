import React from "react";
import "./HeroSection.css";
import doctorImage from "../assets/doctor.png"; // update path if needed

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h4 className="h4">24/7 EMERGENCY SERVICE</h4>
        <h1>
          Caring for <span>Health</span> <br /> Caring for You
        </h1>
        <p>
          A brief statement outlining the purpose and mission of the clinic.
          This includes the commitment to patient care and community health.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-discover">DISCOVER MORE</button>
          <button className="btn btn-services">SEE ALL SERVICES</button>
        </div>
      </div>

      <div className="hero-image">
        <img src={doctorImage} alt="Doctor" />
      </div>
    </section>
  );
};

export default HeroSection;
