import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ isOpen, onClose, onLogout }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    onClose(); // Close the sidebar after navigating
    navigate(path); // Navigate to the specified route
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-sidebar" onClick={onClose}>
        Close Sidebar
      </button>
      <ul>
        <li onClick={() => handleNavigate("/")}>Available Rides</li>
        <li onClick={() => handleNavigate("/history")}>View Ride History</li>
        <li onClick={() => handleNavigate("/create")}>Create New Ride</li>
        <li onClick={() => handleNavigate("/Profile")}>View Profile</li>
        <li onClick={() => handleNavigate("/settings")}>Settings</li>
        <li onClick={onLogout}>Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
