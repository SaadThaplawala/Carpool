import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ isOpen, onClose, onLogout }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    onClose(); // Close sidebar after navigating
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>
        &times;
      </button>
      <ul className="sidebar-links">
        <li onClick={() => handleNavigate("/")}>Available Rides</li>
        <li onClick={() => handleNavigate("/history")}>Ride History</li>
        <li onClick={() => handleNavigate("/create")}>Create Ride</li>
        <li onClick={() => handleNavigate("/profile")}>Profile</li>
        <li onClick={() => handleNavigate("/settings")}>Settings</li>
        <li onClick={onLogout}>Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
