import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Ensure useNavigate is imported
import "./LoginScreen.css";

const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // To display error messages
  const navigate = useNavigate(); // Use navigate hook for redirection

  const handleLogin = () => {
    // Check for empty credentials
    if (!email || !password) {
      setMessage("Empty credentials");
      return;
    }

    // Validate email format
    if (!isEmailValid(email)) {
      setMessage("Invalid email format");
      return;
    }

    // If all validations pass, log in the user
    setMessage(""); // Clear any previous messages
    onLogin();
    navigate("/"); // Redirect to the home page
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(khi\.iba\.edu\.pk|iba\.edu\.pk)$/;
    return emailRegex.test(email);
  };

  const navigateToForgotPassword = () => {
    navigate("/forgot-password"); // Redirect to ForgotPassword screen
  };

  return (
    <div className="login-container">
      <div className="header-bar">IBA Carpool App</div>
      <div className="main-content">
        <div className="login-form">
          {/* Display Error Message */}
          {message && <div className="error-message">{message}</div>}

          <div className="form-group">
            <label>IBA Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
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
