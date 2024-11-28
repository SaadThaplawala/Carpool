import React from "react";
import ActiveBooking from "./ActiveBooking";
import "./CarpoolList.css";

const CarpoolList = ({ rides, activeRide, setActiveRide, setRides }) => {
  const handleBookRide = (ride) => {
    if (ride.seatsAvailable > 0) {
      setActiveRide({
        driver: ride.driver,
        destination: ride.destination,
        time: ride.time,
        from: "Home",
        totalPassengers: 4 - ride.seatsAvailable,
      });

      setRides((prevRides) =>
        prevRides.map((r) =>
          r.id === ride.id
            ? { ...r, seatsAvailable: r.seatsAvailable - 1 }
            : r
        )
      );
    } else {
      alert("No seats available for this ride.");
    }
  };

  return (
    <div className="carpool-list-container">
      {activeRide && (
        <ActiveBooking
          booking={activeRide}
          onCancel={() => setActiveRide(null)}
        />
      )}

      <h2>Available Rides</h2>
      <ul className="ride-list">
        {rides.map((ride) => (
          <li key={ride.id} className="ride-item">
            <div className="ride-info">
              <p><strong>Driver:</strong> {ride.driver}</p>
              <p><strong>Destination:</strong> {ride.destination}</p>
              <p><strong>Time:</strong> {ride.time}</p>
              <p><strong>Date:</strong> {ride.date}</p>
              <p><strong>Seats Available:</strong> {ride.seatsAvailable}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarpoolList;
