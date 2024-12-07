import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import api from "./api";
import CarpoolList from "./CarpoolList";
import RideHistory from "./RideHistory";
import Sidebar from "./Sidebar";
import CreateRide from "./CreateRide";
import Profile from "./Profile";
import LoginScreen from "./LoginScreen";
import SettingsScreen from "./SettingsScreen";
import SignUpScreen from "./SignUpScreen"; // Ensure correct import for SignUpScreen
import ForgotPasswordScreen from "./ForgotPasswordScreen";
import ActiveBooking from "./ActiveBooking";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeRide, setActiveRide] = useState(null);
  const [rides, setRides] = useState([]);
  const [user, setUser] = useState(null);

  const handleLogin = async (email, password) => {
    try {
      const response = await api.login({ email, password });
      if (response.success) {
        setIsLoggedIn(true);
        localStorage.setItem("token", response.data.token);
        await fetchRides();
        await fetchUserProfile();
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error("Login error", error);
    }
  };

  const fetchRides = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await api.listAvailableRides(token);
      if (response.success) {
        setRides(response.data.rides);
      } else {
        console.error(response.message);
      }
    } catch (error) {
      console.error("Error fetching rides", error);
    }
  };

  const fetchUserProfile = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await api.getProfile(token);
      if (response.success) {
        setUser(response.data.user);
      } else {
        console.error(response.message);
      }
    } catch (error) {
      console.error("Error fetching user profile", error);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setSidebarOpen(false);
    setActiveRide(null);
    setUser(null);
    localStorage.removeItem("token");
  };

  const handleCreateRide = async (newRide) => {
    const token = localStorage.getItem("token");
    try {
      const response = await api.createRide(newRide, token);
      if (response.success) {
        setRides([response.data.ride, ...rides]);
        setActiveRide(response.data.ride);
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error("Error creating ride", error);
    }
  };

  const handleCancelRide = async () => {
    if (activeRide) {
      const token = localStorage.getItem("token");
      try {
        const response = await api.cancelBooking(activeRide.id, token);
        if (response.success) {
          setRides((prevRides) => prevRides.filter((ride) => ride.id !== activeRide.id));
          setActiveRide(null);
        } else {
          alert(response.message);
        }
      } catch (error) {
        console.error("Error canceling ride", error);
      }
    }
  };

  const handleBookRide = async (ride) => {
    const token = localStorage.getItem("token");
    if (ride.seatsAvailable > 0 && !activeRide) {
      try {
        const response = await api.bookRide(ride.id, token);
        if (response.success) {
          setActiveRide({ ...ride, totalPassengers: 4 - ride.seatsAvailable + 1 });
          setRides((prevRides) =>
            prevRides.map((r) => (r.id === ride.id ? { ...r, seatsAvailable: ride.seatsAvailable - 1 } : r))
          );
        } else {
          alert(response.message);
        }
      } catch (error) {
        console.error("Error booking ride", error);
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      fetchRides();
      fetchUserProfile();
    }
  }, []);

  return (
    <Router>
      <div>
        {isLoggedIn ? (
          <>
            <button className="menu-button" onClick={() => setSidebarOpen(!sidebarOpen)}>
              ☰
            </button>
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} onLogout={handleLogout} />
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
                  <Route path="/profile" element={<Profile user={user} />} />
                  <Route path="/settings" element={<SettingsScreen />} />
                  <Route
                    path="/active-booking"
                    element={<ActiveBooking booking={activeRide} onCancel={handleCancelRide} />}
                  />
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </div>
            </div>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<LoginScreen onLogin={handleLogin} />} />
            <Route path="/signup" element={<SignUpScreen />} />
            <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
