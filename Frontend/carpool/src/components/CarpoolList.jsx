import React from "react";
import "./CarpoolList.css";

const CarpoolList = () => {
  const carpoolData = [
    { name: "Driver 1", to: "Location", time: "08:00", from: "A" },
    { name: "Driver 2", to: "Location B", time: "09:30", from: "C" },
    { name: "Driver 3", to: "Location D", time: "11:00", from: "E" },
  ];

  return (
    <div className="carpool-container">
      <h2 className="title">Active Bookings</h2>
      <table className="carpool-table">
        <thead>
          <tr>
            <th>Driver's Name</th>
            <th>Going To</th>
            <th>At Time (Hr:Min)</th>
            <th>From</th>
          </tr>
        </thead>
        <tbody>
          {carpoolData.map((ride, index) => (
            <tr key={index}>
              <td>{ride.name}</td>
              <td>{ride.to}</td>
              <td>{ride.time}</td>
              <td>{ride.from}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarpoolList;
