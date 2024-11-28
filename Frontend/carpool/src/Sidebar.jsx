// Sidebar.jsx
import React from "react";
import "./Sidebar.css";

const Sidebar = ({ isOpen, onClose, onNavigate }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <ul>
        <li onClick={() => onNavigate("history")}>View Ride History</li>
        <li onClick={() => onNavigate("create")}>Create New Ride</li>
        <li onClick={() => onNavigate("cancel")}>Cancel Ride</li>
        <li onClick={() => onNavigate("profile")}>My Profile</li>
        <li onClick={() => onNavigate("settings")}>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
