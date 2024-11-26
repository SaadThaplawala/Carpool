import React from "react";
import "./RideHistory.css";

const RideHistory = () => {
  const rides = [
    {
      name: "Driver's name",
      to: "Location A",
      time: "08:00 AM",
      from: "Location B",
    },
    {
      name: "Driver's name",
      to: "Location C",
      time: "09:30 AM",
      from: "Location D",
    },
    {
      name: "Driver's name",
      to: "Location E",
      time: "11:00 AM",
      from: "Location F",
    },
  ];

  return (
    <div className="ride-history-container">
      <div className="ride-history-header">
        <div className="logo">
          <img
            src="C:\Users\war\Carpool\Frontend\carpool\public\iba-logo.png" // Replace with IBA logo path
            alt="IBA Logo"
          />
          <span className="app-title">Carpool App</span>
        </div>
        <select className="date-filter">
          <option value="">Date</option>
          <option value="2024-11-24">2024-11-24</option>
          <option value="2024-11-25">2024-11-25</option>
        </select>
      </div>

      <div className="ride-card-container">
        {rides.map((ride, index) => (
          <div className="ride-card" key={index}>
            <p><strong>Driver's name:</strong> {ride.name}</p>
            <p><strong>Went to:</strong> {ride.to}</p>
            <p><strong>At time (Hr:Mins):</strong> {ride.time}</p>
            <p><strong>From:</strong> {ride.from}</p>
            <div className="card-buttons">
              <button className="card-button feedback-button">
                Feedback
              </button>
              <button className="card-button view-profile-button">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RideHistory;
