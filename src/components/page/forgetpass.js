import React, { useState } from 'react';
import './styles/forgetpass.css';

function ForgetPass() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage('Password reset email sent successfully.');
    setIsSuccess(true);
  };

  return (
    <div className="forget-pass-container">
      <h2>Forgot Password</h2>
      <p>Enter your email address to reset your password.</p>
      {isSuccess ? (
        <div className="success-message">
          {message}
        </div>
      ) 
       :
        (
        <form onSubmit={handleSubmit}>
          <div className="form-pass">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              placeholder="Enter your email here"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <button type="submit">Reset Password</button>
        </form>
      )}
    </div>
  );
}

export default ForgetPass;
