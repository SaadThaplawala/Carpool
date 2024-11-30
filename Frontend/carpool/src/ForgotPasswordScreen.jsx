import React, { useState } from "react";
import "./ForgotPasswordScreen.css";

const ForgotPasswordScreen = ({ navigateTo }) => {
  // State for displaying messages
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'

  const handleConfirm = () => {
    setMessage("Password changed successfully.");
    setMessageType("success");
    setTimeout(() => {
      navigateTo("LoginScreen");
    }, 2000); // Navigate after 2 seconds
  };

  const handleCancel = () => {
    setMessage("Password not saved.");
    setMessageType("error");
    setTimeout(() => {
      navigateTo("LoginScreen");
    }, 2000); // Navigate after 2 seconds
  };

  return (
    <div className="forgot-password-container">
      {/* Message Display */}
      {message && (
        <div
          className={`message-container ${
            messageType === "success" ? "success-message" : "error-message"
          }`}
        >
          {message}
        </div>
      )}

      {/* Card container */}
      <div className="forgot-password-card">
        {/* Title Section */}
        <div className="forgot-password-header">
          <h1>Forgot Password</h1>
        </div>

        {/* Inputs Section */}
        <div className="forgot-password-body">
          <label className="input-label">Enter New Password</label>
          <input
            type="password"
            className="input-field"
            placeholder="Enter New Password"
          />

          <label className="input-label">Confirm Password</label>
          <input
            type="password"
            className="input-field"
            placeholder="Confirm Password"
          />
        </div>

        {/* Action Buttons */}
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
