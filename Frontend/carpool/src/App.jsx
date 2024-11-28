import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import CarpoolList from "./CarpoolList";
import RideHistory from "./RideHistory";
import Sidebar from "./Sidebar";
import CreateRide from "./CreateRide";
import Profile from "./Profile";
// import ActiveBooking from "./ActiveBooking"; saad edited so access is only in 
import LoginScreen from "./LoginScreen";
import SettingsScreen from "./SettingsScreen";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initially set to false to show the login screen
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false); // Set login state to false
  };

  const handleLogin = () => {
    setIsLoggedIn(true); // Set login state to true
  };

  return (
    <Router>
      {isLoggedIn && (
        <>
          <button
            className="menu-button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>
          <Sidebar
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            onLogout={handleLogout}
          />
        </>
      )}
      <div className={`main-content ${sidebarOpen ? "shifted" : ""}`}>
        <Routes>
          <Route path="/" element={<CarpoolList />} />
          <Route path="/history" element={<RideHistory />} />
          <Route path="/create" element={<CreateRide />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/active-booking" element={<CarpoolList />} />
          <Route path="/settings" element={<SettingsScreen />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
