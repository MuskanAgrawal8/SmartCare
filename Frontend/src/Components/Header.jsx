import React from "react";
import "./Header.css";

const Header = () => {
    return(
      <div className="header">
        <span className="first">Smart</span>
        <span className="second">Care</span>
        <button className="btn appointment">Appointment Now</button>
        <button className="btn emergency">Emergency</button>
      </div>    
    )
}
export default Header;