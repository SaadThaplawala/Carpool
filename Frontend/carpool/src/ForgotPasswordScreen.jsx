import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook
import "./ForgotPasswordScreen.css";

const ForgotPasswordScreen = () => {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate(); // Using navigate hook to redirect

  const handleConfirm = () => {
    if (password === confirmPassword) {
      setMessage("Password changed successfully.");
      setMessageType("success");
      setTimeout(() => {
        navigate("/"); // Redirect to LoginScreen
      }, 2000);
    } else {
      setMessage("Passwords don't match");
      setMessageType("error");
    }
  };

  const handleCancel = () => {
    navigate("/"); // Redirect to LoginScreen
  };

  return (
    <div className="forgot-password-container">
      {/* Display Success or Error Messages */}
      {message && (
        <div
          className={`message-container ${
            messageType === "success" ? "success-message" : "error-message"
          }`}
        >
          {message}
        </div>
      )}

      {/* Forgot Password Card */}
      <div className="forgot-password-card">
        <div className="forgot-password-header">
          <h1>Forgot Password</h1>
        </div>
        <div className="forgot-password-body">
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
          <button
            className="action-button confirm-button"
            onClick={handleConfirm}
          >
            Confirm
          </button>
          <button
            className="action-button cancel-button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordScreen;
