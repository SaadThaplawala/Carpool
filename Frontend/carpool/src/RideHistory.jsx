//RideHistory
import React from "react";
import "./RideHistory.css";

const RideHistory = () => {
  const rides = [
    {
      name: "John Doe",
      to: "Location A",
      time: "08:00 AM",
      date: "2024-11-26",
      from: "Location B",
    },
    {
      name: "Jane Smith",
      to: "Location C",
      time: "09:30 AM",
      date: "2024-11-27",
      from: "Location D",
    },
    {
      name: "Alex Johnson",
      to: "Location E",
      time: "11:00 AM",
      date: "2024-11-28",
      from: "Location F",
    },
  ];

  return (
    <div className="ride-history-container">
      <h2>Ride History</h2>
      <div className="ride-card-container">
        {rides.map((ride, index) => (
          <div className="ride-card" key={index}>
            <p><strong>Driver's Name:</strong> {ride.name}</p>
            <p><strong>Went to:</strong> {ride.to}</p>
            <p><strong>At Time (Hr:Mins):</strong> {ride.time}</p>
            <p><strong>Date:</strong> {ride.date}</p>
            <p><strong>From:</strong> {ride.from}</p>
            <div className="card-buttons">
              <button className="card-button feedback-button">Feedback</button>
              <button className="card-button view-profile-button">View Profile</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RideHistory;
