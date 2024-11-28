import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <h1 className="profile-header">USER PROFILE</h1>
      <div className="profile-section">
        <h2>Personal Info</h2>
        <ul className="profile-details">
          <li>Name</li>
          <li>Contact</li>
          <li>ERP</li>
        </ul>
      </div>
      <div className="profile-section">
        <h2>Car Info</h2>
        <ul className="profile-details">
          <li>Car No:</li>
          <li>License No:</li>
          <li>Capacity:</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
