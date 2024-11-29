import React, { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact: "",
    erp: "",
    hasCar: false,
    carDetails: {
      numberPlate: "",
      licenseNumber: "",
      capacity: "",
    },
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "hasCar") {
      setFormData((prev) => ({ ...prev, hasCar: checked }));
    } else if (formData.hasCar && name in formData.carDetails) {
      setFormData((prev) => ({
        ...prev,
        carDetails: { ...prev.carDetails, [name]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@iba\.edu\.pk$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setError("Email must end with @iba.edu.pk");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");

    // Send data to the backend API
    console.log("Submitting data: ", formData);

    // Redirect user to login or profile page
    alert("Sign-up successful! Please log in.");
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        {error && <p className="error">{error}</p>}
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email (e.g., abc@iba.edu.pk)"
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm your password"
          required
        />

        <label>Contact Number</label>
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="Enter your contact number"
          required
        />

        <label>ERP</label>
        <input
          type="text"
          name="erp"
          value={formData.erp}
          onChange={handleChange}
          placeholder="Enter your ERP"
          required
        />

        <label>
          <input
            type="checkbox"
            name="hasCar"
            checked={formData.hasCar}
            onChange={handleChange}
          />
          Do you have a car?
        </label>

        {formData.hasCar && (
          <div className="car-details">
            <label>Car Number Plate</label>
            <input
              type="text"
              name="numberPlate"
              value={formData.carDetails.numberPlate}
              onChange={handleChange}
              placeholder="Enter car number plate"
              required
            />

            <label>License Number</label>
            <input
              type="text"
              name="licenseNumber"
              value={formData.carDetails.licenseNumber}
              onChange={handleChange}
              placeholder="Enter license number"
              required
            />

            <label>Vehicle Capacity</label>
            <input
              type="number"
              name="capacity"
              value={formData.carDetails.capacity}
              onChange={handleChange}
              placeholder="Enter vehicle capacity"
              required
            />
          </div>
        )}

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
