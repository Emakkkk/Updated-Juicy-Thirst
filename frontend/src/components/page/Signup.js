import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignupValidation'
import axios from 'axios'
import './styles/Signup.css';

function Signup() { 
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone_number:'',
    password: '',
    birthday: '',
    address: '',
  });

    const navigate = useNavigate();
    const[errors, setErrors] = useState({})
    const handleInput = (event) =>{
      setValues(prev =>({...prev, [event.target.name]: [event.target.value]}))
    }
  
    const handleSubmit=(event) =>{
      event.preventDefault();
      setErrors(Validation(values));
      if(errors.name ==="" && errors.email ==="" && errors.phone_number ==="" && errors.address ==="" && errors.password ==="" && errors.birthday ===""){
        axios.post('http://localhost:8081/signup', values)
        .then(res =>{
                navigate('/login');
            })
        .catch(err => console.log(err));
      }
    }


    
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
              onChange={handleInput}/>
            {errors.name && <span className='text-danger'>{errors.name}</span>}
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="📩Email"
              name="email"
              onChange={handleInput}/>
              {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="📞Phone Number"
              name="phone_number"
              onChange={handleInput}/>
              {errors.phone_number && <span className='text-danger'>{errors.phone_number}</span>}
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="🏠Address"
              name="address"
              onChange={handleInput}/>
              {errors.address && <span className='text-danger'>{errors.address}</span>}
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="🔐Password"
              name="password"
              onChange={handleInput}/>
              {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="🎂Birthday"
              name="birthday"
              onChange={handleInput}/>
              {errors.birthday && <span className='text-danger'>{errors.birthday}</span>}
          </div>
          <button className="signup-button" type="submit">Sign Up</button>
          <div className="signup-login-link">
            <p>Have an account? 
            <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;