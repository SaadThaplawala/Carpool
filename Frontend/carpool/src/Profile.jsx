import React from "react";
import "./Profile.css";

const Profile = ({ user }) => {
  return (
    <div className="profile-container">
      <h1 className="profile-header">USER PROFILE</h1>
      <div className="profile-section">
        <h2>Personal Info</h2>
        <ul className="profile-details">
          <li>Name: {user?.fullName || "N/A"}</li>
          <li>Contact: {user?.contactNo || "N/A"}</li>
          <li>ERP: {user?.erp || "N/A"}</li>
        </ul>
      </div>
      <div className="profile-section">
        <h2>Car Info</h2>
        <ul className="profile-details">
          <li>Car No: {user?.carDetails?.plateNo || "N/A"}</li>
          <li>License No: {user?.carDetails?.licenseNo || "N/A"}</li>
          <li>Capacity: {user?.carDetails?.vehicleCapacity || "N/A"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
