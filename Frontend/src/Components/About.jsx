import React from "react";
import "./About.css";
import aboutImage from "../assets/about.jpg"; // replace with your image name

const About = () => {
  return (
    <section className="about">
      <div className="about-left">
        <img src={aboutImage} alt="Health Care Team" className="about-image" />

       
      </div>

      <div className="about-right">
        <p className="subtitle">ABOUT US COMPANY</p>
        <h2>
          Cost-Effective Health Care <br /> <span>Solutions</span>
        </h2>
        <p className="description">
          A concise declaration that describes the objectives and mission of the
          clinic. This may encompass our dedication to patient care, the
          promotion of community health, and any specific aspirations related to
          our core values.
        </p>

        <div className="stats">
          <div>
            <h3>69k</h3>
            <p>Satisfied Patients</p>
          </div>
          <div>
            <h3>236</h3>
            <p>Professional Doctors</p>
          </div>
          <div>
            <h3>19k</h3>
            <p>Operations Successful</p>
          </div>
          <div>
            <h3>320</h3>
            <p>National Awards Win</p>
          </div>
        </div>

        <button className="btn">MORE ABOUT US</button>
      </div>
    </section>
  );
};

export default About;
