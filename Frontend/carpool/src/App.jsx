

// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
// import CreateRide from "./CreateRide.jsx";
// import RideHistory from "./RideHistory.jsx";
// import LoginScreen from "./LoginScreen.jsx"; // Assuming you have a login screen component
// import CarpoolList from "./CarpoolList.jsx"; // Assuming you have a carpool list component
// import { fetchRides } from "./api.js"; // Assuming you fetch rides from an API

// function App() {
//   const [rides, setRides] = useState([]);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state

//   useEffect(() => {
//     const loadRides = async () => {
//       const ridesFromBackend = await fetchRides(); // Fetch rides from the backend
//       setRides(ridesFromBackend);
//     };
//     loadRides();
//   }, []);

//   const addRide = (ride) => {
//     setRides([...rides, ride]);
//   };

//   const handleLogin = () => {
//     setIsLoggedIn(true); // Update the login state
//   };

//   return (
//     <Router>
//       <div className="app-container">
//         <header className="app-header">
//           <div className="header-left">
//             <img src="/iba-logo.png" alt="IBA Logo" className="logo" />
//             <h1>Carpool App</h1>
//           </div>
//           <div className="header-right">
//             {isLoggedIn && (
//               <>
//                 <Link to="/create-ride">
//                   <button className="nav-button">Create Ride</button>
//                 </Link>
//                 <Link to="/ride-history">
//                   <button className="nav-button">Ride History</button>
//                 </Link>
//               </>
//             )}
//           </div>
//         </header>

//         <Routes>
//           {/* Conditionally render login page if not logged in */}
//           {!isLoggedIn ? (
//             <Route path="/" element={<LoginScreen onLogin={handleLogin} />} />
//           ) : (
//             <Route path="/" element={<CarpoolList rides={rides} />} />
//           )}

//           {/* Other routes */}
//           <Route path="/create-ride" element={<CreateRide onRideCreated={addRide} />} />
//           <Route path="/ride-history" element={<RideHistory />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import CarpoolList from "./CarpoolList";
import RideHistory from "./RideHistory";
import Sidebar from "./Sidebar";
import CreateRide from "./CreateRide";
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
          {!isLoggedIn && (
            <Route
              path="*"
              element={<LoginScreen onLogin={handleLogin} />}
            />
          )}
          {isLoggedIn && (
            <>
              <Route path="/" element={<CarpoolList />} />
              <Route path="/history" element={<RideHistory />} />
              <Route path="/create" element={<CreateRide />} />
              <Route path="/settings" element={<SettingsScreen />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
