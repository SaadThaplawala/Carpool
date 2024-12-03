import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook
import "./SignupScreen.css";

const SignupScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contact, setContact] = useState("");
  const [erp, setErp] = useState("");
  const [hasCar, setHasCar] = useState("No");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [drivingLicense, setDrivingLicense] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    // Check for empty fields
    if (!email || !password || !confirmPassword || !contact || !erp) {
      setMessage("Please fill all the fields");
      setMessageType("error");
      return;
    }

    // Validate email format
    if (!isEmailValid(email)) {
      setMessage("Input correct email");
      setMessageType("error");
      return;
    }

    // If the user has a car, ensure vehicle-related fields are filled
    if (hasCar === "Yes") {
      if (!vehicleCapacity || !licensePlate || !drivingLicense) {
        setMessage("Please fill all vehicle-related fields");
        setMessageType("error");
        return;
      }
    }

    // Check if password and confirm password match
    if (password === confirmPassword) {
      setMessage("Signup Successful");
      setMessageType("success");
      setTimeout(() => {
        navigate("/login"); // Redirect to LoginScreen
      }, 2000);
    } else {
      setMessage("Passwords don't match");
      setMessageType("error");
    }
  };

  const handleContactChange = (e) => {
    const value = e.target.value;
    // Allow only numeric input for contact
    if (/^\d*$/.test(value)) {
      setContact(value);
    }
  };

  const handleErpChange = (e) => {
    const value = e.target.value;
    // Allow only numeric input for ERP
    if (/^\d*$/.test(value)) {
      setErp(value);
    }
  };

  const handleDrivingLicenseChange = (e) => {
    const value = e.target.value;
    // Allow only numeric input for driving license
    if (/^\d*$/.test(value)) {
      setDrivingLicense(value);
    }
  };

  const handleVehicleCapacityChange = (e) => {
    setVehicleCapacity(e.target.value);
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(khi\.iba\.edu\.pk|iba\.edu\.pk)$/;
    return emailRegex.test(email);
  };

  return (
    <div className="signup-container">
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

      <div className="signup-card">
        <h1 className="signup-header">Sign Up</h1>
        
        <div className="signup-body">
          <label className="input-label">Email</label>
          <input
            type="email"
            className="input-field"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="input-label">Password</label>
          <input
            type="password"
            className="input-field"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label className="input-label">Confirm Password</label>
          <input
            type="password"
            className="input-field"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <label className="input-label">Contact</label>
          <input
            type="text"
            className="input-field"
            placeholder="Enter your contact number"
            value={contact}
            onChange={handleContactChange}
            required
          />

          <label className="input-label">ERP</label>
          <input
            type="text"
            className="input-field"
            placeholder="Enter your ERP"
            value={erp}
            onChange={handleErpChange}
            required
          />

          {/* Car Ownership Dropdown */}
          <label className="input-label">Do you have a car?</label>
          <select
            className="input-field"
            value={hasCar}
            onChange={(e) => setHasCar(e.target.value)}
            required
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>

          {/* Vehicle-Related Inputs (Visible Only if "Yes" is Selected) */}
          {hasCar === "Yes" && (
            <>
              <label className="input-label">Vehicle Capacity</label>
              <select
                className="input-field"
                value={vehicleCapacity}
                onChange={handleVehicleCapacityChange}
                required
              >
                <option value="">Select Capacity</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>

              <label className="input-label">License Plate Number</label>
              <input
                type="text"
                className="input-field"
                placeholder="Enter license plate number"
                value={licensePlate}
                onChange={(e) => setLicensePlate(e.target.value)}
                required
              />

              <label className="input-label">Driving License Number</label>
              <input
                type="text"
                className="input-field"
                placeholder="Enter driving license number"
                value={drivingLicense}
                onChange={handleDrivingLicenseChange}
                required
              />
            </>
          )}
        </div>

        <div className="signup-footer">
          <button className="action-button" onClick={handleSignup}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupScreen;
