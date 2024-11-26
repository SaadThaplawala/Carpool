// LoginScreen.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginScreen.css';

const LoginScreen = ({ onLogin }) => {  // Receive `onLogin` as a prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      // Perform the login logic here (you can add validation or API calls)
      console.log('Logging in with', email, password);
      onLogin(); // Update the login state in App.js
      navigate('/'); // Redirect to home page after successful login
    } else {
      alert('Please enter email and password.');
    }
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
            required
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
            required
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
