import React, { useState } from 'react';
import './Signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here, e.g., sending data to the server
    console.log('Form data:', formData);
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="Auth_authContainer">
      <div className="Heading_heading">Sign Up</div>
      <form className="Signup_authForm" onSubmit={handleSubmit}>
        <div className="Input_group">
          <input
            className="Input_input"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            autoComplete="false"
            aria-label="Name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="Input_group">
          <input
            className="Input_input"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            autoComplete="false"
            aria-label="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="Input_group">
          <input
            className="Input_input"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            autoComplete="false"
            aria-label="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="Signup_bottom">
          <button
            type="submit"
            className="Signup_button Button_btn Button_default"
          >
            Sign Up
          </button>
        </div>
      </form>
      <div className="Auth_link">
        Already have an account?
        <a className="Auth_link Auth_linkText" href="/login">
          Log in your account.
        </a>
        <div className="Auth_or">
          <div className="Auth_line"></div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
