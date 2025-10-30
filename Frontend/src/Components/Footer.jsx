import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaYoutube, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-column">
          <h2 className="footer-logo">
            <span className="logo-icon">●</span> Smart
            <span className="logo-highlight">Care</span>
          </h2>
          <p>Bhubaneswar, Odisha - 751019</p>
          <p>+91 987456321</p>
          <p>info@smartcare.com</p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaPinterestP /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Pricing</a></li>
            <li><a href="#">Our Gallery</a></li>
            <li><a href="#">Appointment</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Department */}
        <div className="footer-column">
          <h3>Department</h3>
          <ul>
            <li><a href="#">Orthology</a></li>
            <li><a href="#">Neurology</a></li>
            <li><a href="#">Dental Care</a></li>
            <li><a href="#">Ophthalmology</a></li>
            <li><a href="#">Cardiology</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="footer-column">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Blog</a></li>
            <li><a href="#">Our Gallery</a></li>
            <li><a href="#">Appointment</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>Copyright ©2025 SmartCare.com. All Rights Reserved</p>
        <p>Design by Nihar Ranjan Sahoo</p>
      </div>
    </footer>
  );
};

export default Footer;
