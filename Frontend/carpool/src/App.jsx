import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import CarpoolList from "./CarpoolList";
import RideHistory from "./RideHistory";
import Sidebar from "./Sidebar";
import CreateRide from "./CreateRide";
import Profile from "./Profile";
import LoginScreen from "./LoginScreen";
import SettingsScreen from "./SettingsScreen";
import SignUpScreen from "./SignUpScreen";
import ForgotPasswordScreen from "./ForgotPasswordScreen"; // Import ForgotPasswordScreen
import ActiveBooking from "./ActiveBooking"; // Import ActiveBooking screen
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Login state
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar toggle state
  const [activeRide, setActiveRide] = useState(null); // State to store active booking
  const [rides, setRides] = useState([/* Your sample rides data */]);

  const handleLogin = () => {
    setIsLoggedIn(true); // Set the user as logged in
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Logout the user
    setSidebarOpen(false);
  };

  return (
    <Router>
      {isLoggedIn ? (
        <>
          <button className="menu-button" onClick={() => setSidebarOpen(!sidebarOpen)}>
            ☰
          </button>
          <Sidebar
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            onLogout={handleLogout}
          />
          <div className={`main-content ${sidebarOpen ? "shifted" : ""}`}>
            <Routes>
              <Route path="/" element={<CarpoolList rides={rides} />} />
              <Route path="/history" element={<RideHistory />} />
              <Route path="/create" element={<CreateRide />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<SettingsScreen />} />
              <Route path="/active-booking" element={<ActiveBooking />} /> {/* ActiveBooking screen */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<LoginScreen onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUpScreen />} />
          <Route path="/forgot-password" element={<ForgotPasswordScreen />} /> {/* Forgot Password Route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;
