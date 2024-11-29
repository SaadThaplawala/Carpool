import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpScreen.css";

const SignUpScreen = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [erp, setErp] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hasCar, setHasCar] = useState(false);
  const [carDetails, setCarDetails] = useState({
    plate: "",
    license: "",
    capacity: "",
  });

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!email.endsWith("@iba.edu.pk")) {
      alert("Email must include '@iba.edu.pk'");
      return;
    }
    // Simulate user creation and navigate back to login
    alert("Sign Up Successful!");
    navigate("/");
  };

  return (
    <div className="signup-container">
      <div className="header-bar">Sign Up - IBA Carpool App</div>
      <div className="signup-form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Contact</label>
          <input
            type="text"
            placeholder="Enter your contact number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>ERP</label>
          <input
            type="text"
            placeholder="Enter your ERP"
            value={erp}
            onChange={(e) => setErp(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your IBA email"
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
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Do you own a car?</label>
          <select
            value={hasCar}
            onChange={(e) => setHasCar(e.target.value === "true")}
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        {hasCar && (
          <div className="car-details">
            <div className="form-group">
              <label>Car Number Plate</label>
              <input
                type="text"
                placeholder="Enter number plate"
                value={carDetails.plate}
                onChange={(e) =>
                  setCarDetails({ ...carDetails, plate: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>License Number</label>
              <input
                type="text"
                placeholder="Enter license number"
                value={carDetails.license}
                onChange={(e) =>
                  setCarDetails({ ...carDetails, license: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Vehicle Capacity</label>
              <input
                type="number"
                placeholder="Enter vehicle capacity"
                value={carDetails.capacity}
                onChange={(e) =>
                  setCarDetails({ ...carDetails, capacity: e.target.value })
                }
              />
            </div>
          </div>
        )}
        <div className="form-buttons">
          <button className="signup-button" onClick={handleSubmit}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpScreen;
