import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import CreateRide from "./CreateRide.jsx";
import RideHistory from "./RideHistory.jsx";
import LoginScreen from "./LoginScreen.jsx";
import CarpoolList from "./CarpoolList.jsx";
import Sidebar from "./components/Sidebar";
import Profile from "./Profile";
import "./App.css";

function App() {
  const [rides, setRides] = useState([]);
// Prevent Sidebar on the Login screen
  const showSidebar = location.pathname !== "/login";

  useEffect(() => {
    // Load initial data or API calls here
    setRides([
      { id: 1, driver: "Abaan Noor", from: "Main campus", to: "Clifton", time: "02:57 PM" },
      { id: 2, driver: "Driver B", from: "Main campus", to: "DHA", time: "03:30 PM" },
    ]);
    
  }, []);

  return (
    <div className="app-container">
      <Router>
        {showSidebar && <Sidebar />}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<CreateRide />} />
            <Route path="/carpool-list" element={<CarpoolList rides={rides} />} />
            <Route path="/ride-history" element={<RideHistory />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
