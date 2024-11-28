import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarpoolList from "./CarpoolList";
import RideHistory from "./RideHistory";
import Sidebar from "./Sidebar";
import CreateRide from "./CreateRide";
import Profile from "./Profile";
// import ActiveBooking from "./ActiveBooking"; saad edited so access is only in 
import "./App.css";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <button className="menu-button" onClick={() => setSidebarOpen(!sidebarOpen)}>
        ☰
      </button>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className={`main-content ${sidebarOpen ? "shifted" : ""}`}>
        <Routes>
          <Route path="/" element={<CarpoolList />} />
          <Route path="/history" element={<RideHistory />} />
          <Route path="/create" element={<CreateRide />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/active-booking" element={<CarpoolList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
