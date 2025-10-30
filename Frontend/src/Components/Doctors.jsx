import React from "react";
import "./Doctors.css";
import doc1 from "../assets/doctor2.jpg";
import doc2 from "../assets/doctor3.jpg";
import doc3 from "../assets/doctor 4.jpg";
import { FaStar } from "react-icons/fa";

const Doctor = () => {
  const doctors = [
    {
      image: doc1,
      name: "Dr. Dredor Smith",
      speciality: "Medicine specialist",
      rating: 3.9,
      reviews: 252,
      patients: 4895,
      hospital: "Intermedia Hospital, NYC",
    },
    {
      image: doc2,
      name: "Dr. Amrita Sen Gupta",
      speciality: "General Surgeon",
      rating: 4.8,
      reviews: 599,
      patients: 1698,
      hospital: "Mediplus Hospital, NYC",
    },
    {
      image: doc3,
      name: "Dr. Christine Jones",
      speciality: "Pediatricist",
      rating: 4.8,
      reviews: 321,
      patients: 9375,
      hospital: "Advocate Hospital, NYC",
    },
  ];

  return (
    <div className="doctor-section">
      <p className="subtitle">Our Doctor's</p>
      <h2 className="title">Our Special Doctors</h2>
      <p className="description">
        Our team of specialists is at the forefront of medical innovation. Each specialist brings a unique blend of expertise, empathy, and experience to ensure that your health is in the best hands.
      </p>

      <div className="doctor-grid">
        {doctors.map((doc, index) => (
          <div className="doctor-card" key={index}>
            <img src={doc.image} alt={doc.name} className="doctor-img" />
            <h3>{doc.name}</h3>
            <p className="speciality">{doc.speciality}</p>
            <div className="rating">
              <FaStar className="star" /> {doc.rating} ({doc.reviews})
            </div>
            <p className="patients">{doc.patients} Patients</p>
            <p className="hospital">{doc.hospital}</p>
          </div>
        ))}
      </div>

      <p className="more">
        You Get Our 100+ More Doctors...{" "}
        <a href="#">EXPLORE ALL DOCTORS</a>
      </p>
    </div>
  );
};

export default Doctor;
