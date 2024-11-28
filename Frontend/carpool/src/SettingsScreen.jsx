import React, { useState } from "react";
import "./SettingsScreen.css";

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  return (
    <div className="settings-container">
      <h1>Settings</h1>
      <div className="settings-option">
        <label>Notifications</label>
        <button onClick={toggleNotifications} className="toggle-button">
          {notificationsEnabled ? "Turn Off" : "Turn On"}
        </button>
      </div>
    </div>
  );
};

export default SettingsScreen;
