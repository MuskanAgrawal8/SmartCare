import React from "react";
import "./Login.css";
import loginImage from "../assets/loginImage.jpg";
import { FaEyeSlash, FaGoogle, FaTimes } from "react-icons/fa";

const LoginModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="login-container">
          {/* Left */}
          <div className="login-left">
            <div className="login-logo">
              <h2>Smart<span>Care</span></h2>
            </div>

            <h1>Login</h1>
            <p className="login-subtitle">Login to access your SmartCare account</p>

            <form>
              <label>Email</label>
              <input type="email" placeholder="john.doe@gmail.com" required />

              <label>Password</label>
              <div className="password-box">
                <input type="password" placeholder="••••••••" required />
                <FaEyeSlash className="eye-icon" />
              </div>

              <div className="login-options">
                <label><input type="checkbox" /> Remember me</label>
                <a href="#" className="forgot-link">Forgot Password</a>
              </div>

              <button type="submit" className="login-btn">Login</button>

              <p className="signup-text">
                Don't have an account? <a href="#">Sign up</a>
              </p>

              <div className="or-divider"><span>Or login with</span></div>

              <button className="google-btn">
                <FaGoogle /> Continue with Google
              </button>
            </form>
          </div>

          {/* Right */}
          <div className="login-right">
            <img src={loginImage} alt="Login Illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
