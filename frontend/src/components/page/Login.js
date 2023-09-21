import React, { useState } from 'react';
import './styles/Login.css'; // Import your stylesheet
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Validation from './LoginValidate'
import {Link,useNavigate } from 'react-router-dom'
import axios from 'axios'



function Login() {
  // State to manage form input values
  const [values, setValues] = useState({
    email: '',
    password: '',
    rememberMe: false // Initialize it as false
  });



  const navigate = useNavigate();
  const[errors, setErrors] = useState({})
  const handleInput = (event) =>{
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }

  const handleSubmit=(event) =>{
    event.preventDefault();
    setErrors(Validation(values))
    if(errors.email ==="" && errors.password ===""){
      axios.post('http://localhost:8081/login', values)
      .then(res =>{
              if(res.data === "success"){
                navigate('/account');
              } 
              else{
                alert("No record existed");
              }
          })
      .catch(err => console.log(err));
    }
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <form className="my-login-form" onSubmit={handleSubmit}>
          <div className="login-header">
            <h2>Log In</h2>
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="📩 Email"
              name="email"
              onChange={handleInput}/>
              {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="🔐 Password"
              name="password"
              onChange={handleInput}/>
              {errors.password && <span className='text-danger'>{errors.password}</span>}

            <button type="button" className="password-toggle-button">
              {/* You can add a password toggle button here */}
            </button>
          </div>

          <div className="form-group" style={{ marginRight: '100px' }}>
            <label className="custom-checkbox">
              <input
                type="checkbox"
                name="rememberMe"
                //checked={formData.rememberMe}
                //onChange={handleInputChange}
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
          <Link to="/signup" >Sign Up</Link>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Login;
