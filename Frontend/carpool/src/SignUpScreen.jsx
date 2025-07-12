import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupScreen.css";

const SignupScreen = ({ onSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contact, setContact] = useState("");
  const [erp, setErp] = useState("");
  const [hasCar, setHasCar] = useState("No");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [drivingLicense, setDrivingLicense] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!email || !password || !confirmPassword || !contact || !erp || !fullName) {
      setMessage("Please fill all the fields");
      setMessageType("error");
      return;
    }

    if (!isEmailValid(email)) {
      setMessage("Input correct email");
      setMessageType("error");
      return;
    }

    if (hasCar === "Yes" && (!vehicleCapacity || !licensePlate || !drivingLicense)) {
      setMessage("Please fill all vehicle-related fields");
      setMessageType("error");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords don't match");
      setMessageType("error");
      return;
    }

    const userData = {
      fullName,
      contactNo: contact,
      email,
      erp,
      password,
      confirmPassword,
      carDetails: hasCar === "Yes"
        ? {
            plateNo: licensePlate,
            licenseNo: drivingLicense,
            vehicleCapacity: vehicleCapacity,
          }
        : {},
    };

    const success = await onSignup(userData);
    if (success) {
      setMessage("Signup Successful");
      setMessageType("success");
      setTimeout(() => navigate("/"), 2000);
    } else {
      setMessage("Signup failed. Please check your info or try again.");
      setMessageType("error");
    }
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(khi\.iba\.edu\.pk|iba\.edu\.pk)$/;
    return emailRegex.test(email);
  };

  return (
    <div className="signup-container">
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
          <label className="input-label">Full Name</label>
          <input
            type="text"
            className="input-field"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

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
            onChange={(e) => setContact(e.target.value)}
            required
          />

          <label className="input-label">ERP</label>
          <input
            type="text"
            className="input-field"
            placeholder="Enter your ERP"
            value={erp}
            onChange={(e) => setErp(e.target.value)}
            required
          />

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

          {hasCar === "Yes" && (
            <>
              <label className="input-label">Vehicle Capacity</label>
              <select
                className="input-field"
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
                required
              >
                <option value="">Select Capacity</option>
                {[...Array(6).keys()].map((val) => (
                  <option key={val + 1} value={val + 1}>
                    {val + 1}
                  </option>
                ))}
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
                onChange={(e) => setDrivingLicense(e.target.value)}
                required
              />
            </>
          )}

          <button className="submit-button" onClick={handleSignup}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupScreen;
