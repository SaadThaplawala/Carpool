import React from "react";
import "./CarpoolList.css";

const CarpoolList = ({ rides }) => {
  if (!rides || rides.length === 0) {
    return <div className="empty-list">No rides available.</div>;
  }

  return (
    <div className="carpool-list">
      <h2 className="page-title">Available Carpool</h2>
      <div className="filters">
        <label>
          To
          <select>
            <option value="Clifton">Clifton</option>
            <option value="DHA">DHA</option>
          </select>
        </label>
        <label>
          From
          <select>
            <option value="Main campus">Main campus</option>
            <option value="City campus">City campus</option>
          </select>
        </label>
      </div>
      {rides.map((ride) => (
        <div key={ride.id} className="ride-card">
          <p>Driver's Name: {ride.driver}</p>
          <p>Going to: {ride.to}</p>
          <p>At time: {ride.time}</p>
          <p>From: {ride.from}</p>
        </div>
      ))}
    </div>
  );
};

export default CarpoolList; // Ensure the component is exported
