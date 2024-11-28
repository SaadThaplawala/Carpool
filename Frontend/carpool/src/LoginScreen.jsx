import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginScreen.css';

const LoginScreen = ({ onLogin }) => {  // Receive `onLogin` as a prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulating a successful login for development
    console.log('Login bypassed for development purposes');
    onLogin(); // Trigger the login state change in App.js
    navigate('/'); // Redirect to the CarpoolList page (or Home page)
  };

  return (
    <div className="login-container">
      <h1 className="login-title">IBA Carpool App</h1>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">ERP/Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your ERP/Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <div className="form-buttons">
          <button type="button" onClick={handleLogin} className="login-button">
            Login
          </button>
          <div>
            <a href="#" className="signup-link">Sign Up</a> | 
            <a href="#" className="forgot-password-link"> Forgot Password?</a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginScreen;
