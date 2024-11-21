import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateRide.css';

const CreateRide = () => {
  const navigate = useNavigate();

  return (
    <div className="create-ride-container">
      <h1 className="page-title">Create New Ride</h1>

      <form className="create-ride-form">
        <div className="form-group">
          <label htmlFor="location" className="form-label">
            Choose <strong>Locations</strong> <span className="required">*</span>
          </label>
          <select id="location" className="form-select">
            <option value="">Select Location</option>
            <option value="Location 1">Location 1</option>
            <option value="Location 2">Location 2</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="date" className="form-label">
            Choose <strong>Date</strong> <span className="required">*</span>
          </label>
          <select id="date" className="form-select">
            <option value="">Select Date</option>
            <option value="2024-11-16">2024-11-16</option>
            <option value="2024-11-17">2024-11-17</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="time" className="form-label">
            Choose <strong>Time</strong> <span className="required">*</span>
          </label>
          <select id="time" className="form-select">
            <option value="">Select Time</option>
            <option value="08:00 AM">08:00 AM</option>
            <option value="09:00 AM">09:00 AM</option>
          </select>
        </div>

        <div className="form-buttons">
          <button
            type="button"
            className="yes-button"
            onClick={() => {
              alert('Ride created successfully!');
              navigate('/');
            }}
          >
            YES
          </button>
          <button
            type="button"
            className="no-button"
            onClick={() => alert('Ride creation cancelled.')}
          >
            NO
          </button>
        </div>
      </form>

      <button className="back-button" onClick={() => navigate('/')}>Back</button>
    </div>
  );
};

export default CreateRide;