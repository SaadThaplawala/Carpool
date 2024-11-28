import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateRide.css";

const CreateRide = ({ onCreateRide }) => {
  const [rideDetails, setRideDetails] = useState({
    driver: "",
    destination: "",
    time: "",
    date: "",
    seatsAvailable: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRideDetails({ ...rideDetails, [name]: value });
  };

  const handleCreateRide = () => {
    if (
      rideDetails.driver &&
      rideDetails.destination &&
      rideDetails.time &&
      rideDetails.date &&
      rideDetails.seatsAvailable
    ) {
      const newRide = {
        id: Date.now(), // Unique ID
        ...rideDetails,
        seatsAvailable: parseInt(rideDetails.seatsAvailable, 10),
      };

      onCreateRide(newRide); // Add the new ride and set it as active
      navigate("/"); // Redirect to the Available Rides page
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="create-ride-container">
      <h2>Create a New Ride</h2>
      <form className="create-ride-form">
        <input
          type="text"
          name="driver"
          placeholder="Your Name"
          value={rideDetails.driver}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="destination"
          placeholder="Destination"
          value={rideDetails.destination}
          onChange={handleInputChange}
        />
        <input
          type="time"
          name="time"
          value={rideDetails.time}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="date"
          value={rideDetails.date}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="seatsAvailable"
          placeholder="Seats Available"
          value={rideDetails.seatsAvailable}
          onChange={handleInputChange}
        />
        <button type="button" className="create-button" onClick={handleCreateRide}>
          Create Ride
        </button>
      </form>
    </div>
  );
};

export default CreateRide;
