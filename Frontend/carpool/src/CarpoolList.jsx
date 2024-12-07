import React from "react";
import ActiveBooking from "./ActiveBooking";
import { useNavigate } from "react-router-dom";
import "./CarpoolList.css";

const CarpoolList = ({ rides, activeRide, onBookRide, onCancelRide }) => {
  const navigate = useNavigate();

  return (
    <div className="carpool-container">
      {/* Display Active Booking if available */}
      {activeRide && (
        <ActiveBooking
          booking={activeRide}
          onCancel={onCancelRide}
          onViewProfile={() => navigate("/profile")}
        />
      )}
      
      {/* Available Rides Table */}
      <div className="center-container">
        <h2 className="title">Available Rides</h2>
        <table className="carpool-table">
          <thead>
            <tr>
              <th>Driver</th>
              <th>From</th>
              <th>Destination</th>
              <th>Time</th>
              <th>Date</th>
              <th>Seats Available</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Iterate through available rides and display them */}
            {rides.map((ride) => (
              <tr key={ride.id}>
                <td>{ride.driver}</td>
                <td>{ride.from}</td>
                <td>{ride.destination}</td>
                <td>{ride.time}</td>
                <td>{ride.date}</td>
                <td>{ride.seatsAvailable}</td>
                <td>
                  {/* Book Ride Button */}
                  <button
                    className="book-button"
                    onClick={() => onBookRide(ride)}
                    disabled={!!activeRide} // Disable button if a ride is active
                  >
                    Book Ride
                  </button>
                  {/* View Profile Button */}
                  <button
                    className="profile-button"
                    onClick={() => navigate("/profile")}
                  >
                    View Profile
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CarpoolList;
