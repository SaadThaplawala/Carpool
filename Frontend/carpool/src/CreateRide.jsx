import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateRide.css";

const CreateRide = ({ onCreateRide }) => {
  const [rideDetails, setRideDetails] = useState({
    driver: "",
    from: "",
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
      rideDetails.from &&
      rideDetails.destination &&
      rideDetails.time &&
      rideDetails.date &&
      rideDetails.seatsAvailable
    ) {
      const newRide = {
        id: Date.now().toString(), // Generate a unique ID
        ...rideDetails,
        seatsAvailable: parseInt(rideDetails.seatsAvailable, 10),
      };

      onCreateRide(newRide);
      navigate("/"); // Redirect to the main page
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
          placeholder="Driver Name"
          value={rideDetails.driver}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="from"
          placeholder="From (e.g., Main Campus)"
          value={rideDetails.from}
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
        <button
          type="button"
          className="create-button"
          onClick={handleCreateRide}
        >
          Create Ride
        </button>
      </form>
    </div>
  );
};

export default CreateRide;
