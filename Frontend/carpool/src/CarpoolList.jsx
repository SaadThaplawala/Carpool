import React from "react";
import ActiveBooking from "./ActiveBooking";
import { useNavigate } from "react-router-dom";
import "./CarpoolList.css";

const CarpoolList = ({ rides, activeRide, onBookRide, onCancelRide }) => {
  const navigate = useNavigate();

  return (
    <div className="carpool-container">
      {activeRide && (
        <ActiveBooking
          booking={activeRide}
          onCancel={onCancelRide}
          onViewProfile={() => navigate("/profile")}
        />
      )}
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
            {rides.map((ride) => (
              <tr key={ride.id}>
                <td>{ride.driver}</td>
                <td>{ride.from}</td>
                <td>{ride.destination}</td>
                <td>{ride.time}</td>
                <td>{ride.date}</td>
                <td>{ride.seatsAvailable}</td>
                <td>
                  <button
                    className="book-button"
                    onClick={() => onBookRide(ride)}
                    disabled={!!activeRide}
                  >
                    Book Ride
                  </button>
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
