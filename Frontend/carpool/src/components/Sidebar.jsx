import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  // Toggle sidebar expansion
  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  // Check if sidebar should render based on the current route
  const showSidebar = location.pathname !== "/login";

  return (
    <>
      {showSidebar && (
        <div className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}>
          <div className="burger-menu" onClick={toggleSidebar}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
          {isExpanded && (
            <nav className="menu">
              <ul>
                <li>
                  <NavLink to="/" activeClassName="active-link">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/carpool-list" activeClassName="active-link">
                    Carpool List
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/ride-history" activeClassName="active-link">
                    Ride History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/profile" activeClassName="active-link">
                    User Profile
                  </NavLink>
                </li>
              </ul>
            </nav>
          )}
        </div>
      )}
    </>
  );
};

export default Sidebar;
