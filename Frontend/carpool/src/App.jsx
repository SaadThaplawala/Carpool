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

  const handleLogin = () => {
    setIsLoggedIn(true); // Set the user as logged in
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Logout the user
    setSidebarOpen(false);
  };

  const handleCreateRide = (newRide) => {
    setActiveRide({ ...newRide, isCreatedByUser: true, totalPassengers: 0 });
    setRides([newRide, ...rides]);
  };

  const handleCancelRide = () => {
    if (activeRide) {
      if (!activeRide.isCreatedByUser) {
        // Restore seats for booked rides
        setRides((prevRides) =>
          prevRides.map((ride) =>
            ride.id === activeRide.id
              ? { ...ride, seatsAvailable: ride.seatsAvailable + 1 }
              : ride
          )
        );
      } else {
        // Remove user-created ride
        setRides((prevRides) =>
          prevRides.filter((ride) => ride.id !== activeRide.id)
        );
      }
      setActiveRide(null); // Clear active booking
    }
  };

  const handleBookRide = (ride) => {
    if (ride.seatsAvailable > 0 && !activeRide) {
      setActiveRide({
        ...ride,
        from: "Home",
        totalPassengers: 4 - ride.seatsAvailable + 1,
        isCreatedByUser: false,
      });
      setRides((prevRides) =>
        prevRides.map((r) =>
          r.id === ride.id
            ? { ...r, seatsAvailable: r.seatsAvailable - 1 }
            : r
        )
      );
    }
  };

  return (
    <Router>
      {isLoggedIn ? (
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
          <div className={`main-content ${sidebarOpen ? "shifted" : ""}`}>
            <Routes>
              <Route
                path="/"
                element={
                  <CarpoolList
                    rides={rides}
                    setRides={setRides}
                    activeRide={activeRide}
                    setActiveRide={setActiveRide}
                    onBookRide={handleBookRide}
                    onCancelRide={handleCancelRide}
                  />
                }
              />
              <Route path="/history" element={<RideHistory />} />
              <Route
                path="/create"
                element={
                  <CreateRide onCreateRide={handleCreateRide} />
                }
              />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<SettingsScreen />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </>
      ) : (
        <LoginScreen onLogin={handleLogin} />
      )}
    </Router>
  );
};

export default App;
