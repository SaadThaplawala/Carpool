import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>
        ✖
      </button>
      <nav>
        <ul>
          <li>
            <NavLink to="/" onClick={onClose} className={({ isActive }) => (isActive ? "active-link" : "")}>
              Carpool List
            </NavLink>
          </li>
          <li>
            <NavLink to="/history" onClick={onClose} className={({ isActive }) => (isActive ? "active-link" : "")}>
              View Ride History
            </NavLink>
          </li>
          <li>
            <NavLink to="/create" onClick={onClose} className={({ isActive }) => (isActive ? "active-link" : "")}>
              Create New Ride
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" onClick={onClose} className={({ isActive }) => (isActive ? "active-link" : "")}>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/active-booking" onClick={onClose} className={({ isActive }) => (isActive ? "active-link" : "")}>
              Active Booking
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
