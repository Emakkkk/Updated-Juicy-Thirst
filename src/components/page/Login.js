import React, { useState } from 'react';
import './styles/Login.css'; // Import your stylesheet

function Login() {
  // State to manage form input values
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Access form data from the state (formData)
    const { email, password } = formData;

    // Add your form submission logic here
    console.log('Form data:', { email, password });
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update the corresponding field in formData
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <div className="login-header">
            <h2>Log In</h2>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Phone number / Username / Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <button type="button" className="password-toggle-button">
              <svg fill="none" viewBox="0 0 20 10" className="password-toggle-icon">
                <path
                  stroke="none"
                  fill="#000"
                  fillOpacity=".54"
                  d="M19.834 1.15a.768.768 0 00-.142-1c-.322-.25-.75-.178-1 .143-.035.036-3.997 4.712-8.709 4.712-4.569 0-8.71-4.712-8.745-4.748a.724.724 0 00-1-.071.724.724 0 00-.07 1c.07.106.927 1.07 2.283 2.141L.631 5.219a.69.69 0 00.036 1c.071.142.25.213.428.213a.705.705 0 00.5-.214l1.963-2.034A13.91 13.91 0 006.806 5.86l-.75 2.535a.714.714 0 00.5.892h.214a.688.688 0 00.679-.535l.75-2.535a9.758 9.758 0 001.784.179c.607 0 1.213-.072 1.785-.179l.75 2.499c.07.321.392.535.677.535.072 0 .143 0 .179-.035a.714.714 0 00.5-.893l-.75-2.498a13.914 13.914 0 003.248-1.678L18.3 6.147a.705.705 0 00.5.214.705.705 0 00.499-.214a.723.723 0 00.036-1l-1.82-1.891c1.463-1.071 2.32-2.106 2.32-2.106z"
                ></path>
              </svg>
            </button>
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
                Facebook
              </a>
              <a
                href="https://accounts.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
              >
                Google
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
