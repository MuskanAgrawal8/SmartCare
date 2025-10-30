import React from "react";
import "./Services.css";
import { FaUserMd, FaHeartbeat, FaTooth, FaStethoscope, FaEye, FaBone, FaBaby, FaBrain } from "react-icons/fa";

const services = [
  { icon: <FaUserMd />, title: "General Checkup" },
  { icon: <FaHeartbeat />, title: "Cardiology" },
  { icon: <FaTooth />, title: "Dental Care" },
  { icon: <FaStethoscope />, title: "Diagnostics" },
  { icon: <FaEye />, title: "Eye Care" },
  { icon: <FaBone />, title: "Orthopedics" },
  { icon: <FaBaby />, title: "Pediatrics" },
  { icon: <FaBrain />, title: "Neurology" },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <p className="subtitle">OUR SERVICES</p>
      <h2>
        Our Medical Specialties <br /> <span>Service</span>
      </h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <button className="btn">Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
