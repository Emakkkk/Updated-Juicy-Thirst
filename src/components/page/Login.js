import React, { useState } from 'react';
import './Login.css'; // Import your stylesheet


function Login() {
  // State to manage form input values
  const [formData, setFormData] = useState({
    email: '', // Use "email" instead of "username" for consistency with the input field
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
    <div className="Auth_log">
      <div className="Heading_login">Log In</div>
      <form className="LoginForm_authForm" onSubmit={handleSubmit}> {/* Use onSubmit for form submission */}
        <div className="Input_group">
          <input
            className="Input_input"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            autoComplete="false"
            aria-label="Email"
            value={formData.email} // Bind value to the "email" field in formData
            onChange={handleInputChange} // Handle input changes
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
            value={formData.password} // Bind value to the "password" field in formData
            onChange={handleInputChange} // Handle input changes
          />
        </div>
        <div className="LoginForm_bottom">
          <button
            type="submit"
            className="LoginForm_button Button_btn Button_default"
          >
            Log In
          </button>
        </div>
      </form>
      <div className="Auth_link_one">
        Don't have an account?
        <a className="Auth_link Auth_linkText" href="/signup">
          Create an account.
        </a>
        <div className="Auth_or">
          <div className="Auth_line"></div>

        </div>
      </div>
    </div>
  );
}

export default Login;
