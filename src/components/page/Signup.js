import React, { useState } from 'react';
import './styles/Signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    birthday: '',
    address: '',
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
    <div className="signup-container">
      <div className="signup-form">
      <form className="my-signup-form" onSubmit={handleSubmit}>
          <div className="form-signup-image">
            </div>
          <div className="form-group">
          <h2 className="signup-header-h2">Sign Up</h2>
          <div className="signup-header">
            </div>
            <input
              type="text"
              placeholder="🧍Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="📩Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="🔐Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="🎂Birthday"
              name="birthday"
              value={formData.birthday}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="🏠Address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          <button className="signup-button" type="submit">Sign Up</button>
          <div className="signup-login-link">
            <p>Have an account? <a href="/login">Log In</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
