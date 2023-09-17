import React, { useState } from 'react';
import './styles/Login.css'; // Import your stylesheet
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

function Login() {
  // State to manage form input values
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false, // Initialize it as false
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Access form data from the state (formData)
    const { email, password, rememberMe } = formData;

    // Add your form submission logic here
    console.log('Form data:', { email, password, rememberMe });
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Update the corresponding field in formData based on the input type
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <form className="my-login-form" onSubmit={handleSubmit}>
          <div className="login-header">
            <h2>Log In</h2>
          </div>
          <div className="form-group-login">
            <input
              type="text"
              placeholder="📩 Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group-login">
            <input
              type="password"
              placeholder="🔐 Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <button type="button" className="password-toggle-button">
              {/* You can add a password toggle button here */}
            </button>
          </div>
          <div className="form-group" style={{ marginRight: '100px' }}>
            <label className="custom-checkbox">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
              />{' '}
              Remember Me
            </label>
          </div>
          <button className="login-button" type="submit">
            Log In
          </button>
          <div className="login-links">
            <a href="/resetpassword">Forgot Password</a>
          </div>
          <div className="login-social">
            <div className="social-divider">
              <span>or</span>
            </div>
            <div className="social-buttons">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
              >
                <FontAwesomeIcon icon={faFacebook} /> Sign in with Facebook
              </a>
              <a
                href="https://accounts.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
              >
                <FontAwesomeIcon icon={faGoogle} /> Sign in with  Google
              </a>
            </div>
          </div>
          <div className="login-footer">
            New to Juicy Thirst? <a href="/signup">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
