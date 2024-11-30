import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPasswordScreen.css"; // Create a CSS file for styling

const ForgotPasswordScreen = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleConfirm = () => {
    if (newPassword === confirmPassword) {
      navigate("/active-booking"); // Redirect to ActiveBooking screen if passwords match
    } else {
      alert("Passwords do not match!");
    }
  };

  const handleCancel = () => {
    navigate("/"); // Redirect to Login screen on cancel
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <div className="password-input-container">
        <div className="form-group">
          <label>Enter New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter New Password"
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
          />
        </div>
      </div>
      <div className="form-buttons">
        <button onClick={handleConfirm} className="confirm-button">
          Confirm
        </button>
        <button onClick={handleCancel} className="cancel-button">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordScreen; // Export component as default
