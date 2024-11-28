import React, { useState } from "react";
import ActiveBooking from "./ActiveBooking";
import "./CarpoolList.css";

const CarpoolList = () => {
  const [rides, setRides] = useState([
    {
      id: 1,
      driver: "John Doe",
      destination: "University",
      time: "8:00 AM",
      date: "2024-11-28",
      seatsAvailable: 3,
    },
    {
      id: 2,
      driver: "Jane Smith",
      destination: "Downtown",
      time: "9:30 AM",
      date: "2024-11-29",
      seatsAvailable: 2,
    },
  ]);
  const [activeBooking, setActiveBooking] = useState(null);

  const handleBookRide = (ride) => {
    setActiveBooking({
      driver: ride.driver,
      destination: ride.destination,
      time: ride.time,
      from: "Home", // Example static data, you can replace it with actual dynamic data
      totalPassengers: 4 - ride.seatsAvailable,
    });

    // Dynamically update the ride's seats
    setRides((prevRides) =>
      prevRides.map((r) =>
        r.id === ride.id
          ? { ...r, seatsAvailable: r.seatsAvailable - 1 }
          : r
      )
    );
  };

  const handleCancelBooking = () => {
    if (activeBooking) {
      setRides((prevRides) =>
        prevRides.map((r) =>
          r.driver === activeBooking.driver
            ? { ...r, seatsAvailable: r.seatsAvailable + 1 }
            : r
        )
      );
      setActiveBooking(null);
    }
  };

  const handleViewProfile = () => {
    console.log("Viewing profile of driver:", activeBooking.driver);
    // Add logic to navigate to driver's profile
  };

  return (
    <div className="carpool-list-container">
      <ActiveBooking
        booking={activeBooking}
        onCancel={handleCancelBooking}
        onViewProfile={handleViewProfile}
      />
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
            <button
              className="book-button"
              onClick={() => handleBookRide(ride)}
              disabled={ride.seatsAvailable === 0 || activeBooking}
            >
              {activeBooking && activeBooking.driver === ride.driver
                ? "Already Booked"
                : "Book Ride"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarpoolList;

