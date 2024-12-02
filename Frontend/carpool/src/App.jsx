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
  const [rides, setRides] = useState([
    {
      id: "1",
      driver: "Sameed",
      from: "Main Campus",
      destination: "Gulshan",
      time: "10:00 AM",
      date: "2024-11-28",
      seatsAvailable: 3,
    },
    {
      id: "2",
      driver: "Saad",
      from: "City Campus",
      destination: "Johar",
      time: "12:30 PM",
      date: "2024-11-28",
      seatsAvailable: 2,
    },
    {
      id: "3",
      driver: "Abaan",
      from: "Main Campus",
      destination: "Clifton",
      time: "3:00 PM",
      date: "2024-11-28",
      seatsAvailable: 4,
    },
  ]);

  // Handle login
  const handleLogin = () => setIsLoggedIn(true);

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setSidebarOpen(false);
  };

  // Handle ride creation
  const handleCreateRide = (newRide) => {
    setActiveRide({ ...newRide, isCreatedByUser: true, totalPassengers: 0 });
    setRides([newRide, ...rides]);
  };

  // Handle ride cancellation
  const handleCancelRide = () => {
    if (activeRide) {
      if (!activeRide.isCreatedByUser) {
        setRides((prevRides) =>
          prevRides.map((ride) =>
            ride.id === activeRide.id
              ? { ...ride, seatsAvailable: ride.seatsAvailable + 1 }
              : ride
          )
        );
      } else {
        setRides((prevRides) => prevRides.filter((ride) => ride.id !== activeRide.id));
      }
      setActiveRide(null);
    }
  };

  // Handle ride booking
  const handleBookRide = (ride) => {
    if (ride.seatsAvailable > 0 && !activeRide) {
      setActiveRide({
        ...ride,
        totalPassengers: 4 - ride.seatsAvailable + 1,
        isCreatedByUser: false,
      });
      setRides((prevRides) =>
        prevRides.map((r) =>
          r.id === ride.id ? { ...r, seatsAvailable: r.seatsAvailable - 1 } : r
        )
      );
    }
  };

  return (
    <Router>
      <div>

        {isLoggedIn ? (
          <>
            {/* Sidebar & Main Content for Logged-in Users */}
            <button className="menu-button" onClick={() => setSidebarOpen(!sidebarOpen)}>
              ☰
            </button>
            <Sidebar
              isOpen={sidebarOpen}
              onClose={() => setSidebarOpen(false)}
              onLogout={handleLogout}
            />
            <div className={`main-content ${sidebarOpen ? "shifted" : ""}`}>
              <div className="center-container">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <CarpoolList
                        rides={rides}
                        activeRide={activeRide}
                        onBookRide={handleBookRide}
                        onCancelRide={handleCancelRide}
                      />
                    }
                  />
                  <Route path="/history" element={<RideHistory />} />
                  <Route path="/create" element={<CreateRide onCreateRide={handleCreateRide} />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/settings" element={<SettingsScreen />} />
                  <Route path="/active-booking" element={<ActiveBooking />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </div>
            </div>
          </>
        ) : (
          <Routes>
            {/* Routes for Logged-out Users */}
            <Route path="/" element={<LoginScreen onLogin={handleLogin} />} />
            <Route path="/signup" element={<SignUpScreen />} />
            <Route
              path="/forgot-password"
              element={<ForgotPasswordScreen navigateTo={(screen) => setIsLoggedIn(screen === "LoginScreen")} />}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
