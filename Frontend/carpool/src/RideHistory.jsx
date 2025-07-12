import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api";
import "./RideHistory.css";

const RideHistory = () => {
  const navigate = useNavigate();
  const [rides, setRides] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    api.getRideHistory(token).then((response) => {
      if (response.success) setRides(response.data);
    });
  }, []);

  const handleViewProfile = () => {
    navigate("/profile"); // Redirect to Profile screen
  };

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
              <button
                className="card-button view-profile-button"
                onClick={handleViewProfile}
              >
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
