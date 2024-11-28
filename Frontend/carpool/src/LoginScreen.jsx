import React from "react";
import "./LoginScreen.css";

const LoginScreen = ({ onLogin }) => {
    const handleLogin = () => {
        onLogin();
    };

    return (
        <div className="login-container">
            <div className="header-bar">IBA Carpool App</div>
            <div className="main-content">
                <div className="login-form">
                    <div className="form-group">
                        <label>ERP/Email</label>
                        <input type="email" placeholder="Enter your ERP/Email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" />
                    </div>
                    <div className="form-buttons">
                        <button className="login-button" onClick={handleLogin}>
                            Login
                        </button>
                    </div>
                    <div className="form-links">
                        <a href="/signup" className="signup-link">Sign Up</a>
                        <br />
                        <a href="/forgot-password" className="forgot-password-link">Forgot Password?</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginScreen;
