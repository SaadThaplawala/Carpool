import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import CarpoolList from "./CarpoolList";
import RideHistory from "./RideHistory";
import Sidebar from "./Sidebar";
import CreateRide from "./CreateRide";
import Profile from "./Profile";
import LoginScreen from "./LoginScreen";
import SettingsScreen from "./SettingsScreen";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Login state
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar toggle state
  const [activeRide, setActiveRide] = useState(null); // State to store active booking
  const [rides, setRides] = useState([]); // State to store all rides

  const handleLogin = () => {
    setIsLoggedIn(true); // Set the user as logged in
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Logout the user
    setSidebarOpen(false);
  };

  const handleCreateRide = (newRide) => {
    setActiveRide(newRide); // Set the new ride as the active booking
    setRides([newRide, ...rides]); // Add the new ride to the top of the rides list
  };

  return (
    <Router>
      {isLoggedIn ? (
        <>
          {/* Sidebar and Menu Button */}
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
          <div className={`main-content ${sidebarOpen ? "shifted" : ""}`}>
            {/* Protected Routes */}
            <Routes>
              <Route
                path="/"
                element={
                  <CarpoolList
                    rides={rides}
                    setRides={setRides}
                    activeRide={activeRide}
                    setActiveRide={setActiveRide}
                  />
                }
              />
              <Route path="/history" element={<RideHistory />} />
              <Route
                path="/create"
                element={
                  <CreateRide
                    onCreateRide={handleCreateRide}
                  />
                }
              />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<SettingsScreen />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </>
      ) : (
        // Show the login screen if not logged in
        <LoginScreen onLogin={handleLogin} />
      )}
    </Router>
  );
};

export default App;
