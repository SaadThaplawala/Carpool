import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api";
import "./ForgotPasswordScreen.css";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(khi\.iba\.edu\.pk|iba\.edu\.pk)$/;
    return emailRegex.test(email);
  };

  const handleConfirm = async () => {
    if (!validateEmail(email)) {
      setMessage("Invalid email format");
      setMessageType("error");
      return;
    }
    if (password !== confirmPassword) {
      setMessage("Passwords don't match");
      setMessageType("error");
      return;
    }
    try {
      const response = await api.forgetPassword({ email, newPassword: password });
      if (response.success) {
        setMessage("Password changed successfully.");
        setMessageType("success");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setMessage(response.message);
        setMessageType("error");
      }
    } catch (error) {
      setMessage("Error changing password.");
      setMessageType("error");
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="forgot-password-container">
      {message && (
        <div className={`message-container ${messageType === "success" ? "success-message" : "error-message"}`}>
          <p>{message}</p>
        </div>
      )}
      <div className="forgot-password-card">
        <div className="forgot-password-header">
          <h1>Forgot Password</h1>
        </div>
        <div className="forgot-password-body">
          <label className="input-label">Enter Email</label>
          <input
            type="email"
            className="input-field"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="input-label">Enter New Password</label>
          <input
            type="password"
            className="input-field"
            placeholder="Enter New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="input-label">Confirm Password</label>
          <input
            type="password"
            className="input-field"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="forgot-password-footer">
          <button className="action-button confirm-button" onClick={handleConfirm}>
            Confirm
          </button>
          <button className="action-button cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordScreen;
