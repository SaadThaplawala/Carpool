import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginScreen.css";

const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin();
    navigate("/");
  };

  const navigateToForgotPassword = () => {
    navigate("/forgot-password");
  };

  return (
    <div className="login-container">
      <div className="header-bar">IBA Carpool App</div>
      <div className="main-content">
        <div className="login-form">
          <div className="form-group">
            <label>ERP/Email</label>
            <input
              type="email"
              placeholder="Enter your ERP/Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-buttons">
            <button className="login-button" onClick={handleLogin}>
              Login
            </button>
          </div>
          <div className="form-links">
            <a href="/signup" className="signup-link">
              Sign Up
            </a>
            <br />
            <button
              onClick={navigateToForgotPassword}
              className="forgot-password-link"
            >
              Forgot Password?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
