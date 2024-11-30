import React, { useState } from "react";
import "./ForgotPasswordScreen.css";

const ForgotPasswordScreen = ({ navigateTo }) => {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleConfirm = () => {
    setMessage("Password changed successfully.");
    setMessageType("success");
    setTimeout(() => {
      navigateTo("LoginScreen");
    }, 2000);
  };

  const handleCancel = () => {
    setMessage("Try Again!");
    setMessageType("error");
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
          />
          <label className="input-label">Confirm Password</label>
          <input
            type="password"
            className="input-field"
            placeholder="Confirm Password"
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
