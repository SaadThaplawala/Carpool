import React from "react";
import "./ActiveBooking.css";

const ActiveBooking = ({ booking, onCancel, onViewProfile }) => {
  return (
    <div className="active-booking-container">
      {booking ? (
        <div className="booking-info">
          <h3>Active Booking</h3>
          <p><strong>Driver:</strong> {booking.driver}</p>
          <p><strong>From:</strong> {booking.from}</p>
          <p><strong>Destination:</strong> {booking.destination}</p>
          <p><strong>Time:</strong> {booking.time}</p>
          <p><strong>Total Passengers:</strong> {booking.totalPassengers}</p>
          <div className="booking-actions">
            <button className="cancel-button" onClick={onCancel}>
              Cancel Booking
            </button>
            <button className="profile-button" onClick={onViewProfile}>
              View Profile
            </button>
          </div>
        </div>
      ) : (
        <p>No active booking at the moment.</p>
      )}
    </div>
  );
};

export default ActiveBooking;
