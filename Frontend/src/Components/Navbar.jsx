import React, { useState } from "react";
import "./Navbar.css";
import Login from "./Login";

const Navbar = () => {
  // Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 100; // adjust to your navbar height
      const topPosition = section.offsetTop - offset;
      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    }
  };

  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  return (
    <>
      <nav className="navbar-menu">
        <ul>
          <li onClick={() => scrollToSection("find-doctors")}>Find Doctors</li>
          <li onClick={() => scrollToSection("hospitals")}>Hospitals</li>
          <li onClick={() => scrollToSection("about")}>About Us</li>
          <li onClick={() => scrollToSection("services")}>Services</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>
        <div className="auth-buttons">
          <button className="btn blue" onClick={openLogin}>Log In</button>
          <button className="btn blue">Register</button>
        </div>
      </nav>

      {isLoginOpen && <Login onClose={closeLogin} />}
    </>
  );
};

export default Navbar;
