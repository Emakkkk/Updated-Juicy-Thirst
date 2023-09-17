import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/react-fontawesome';
import '@fortawesome/free-solid-svg-icons';

import Home from './components/page/Home';
import About from './components/page/about';
import Contact from './components/page/Contact';
import Signup from './components/page/Signup'; // Import the Signup component
import Login from './components/page/Login'; // Import the Login component
import ForgetPass from './components/page/forgetpass'; 

import Navbar from './common/header/Navbar'; // Import the Navbar component
import Footer from './common/footer/footer';
import FruitPage from './common/main/pages/FruitPage';
import VeggiePage from './common/main/pages/VeggiePage';
import DessertPage from './common/main/pages/DessertPage';
import FrappePage from './common/main/pages/FrappePage';
import MilkteaPage from './common/main/pages/MilkteaPage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/resetpassword" element={<ForgetPass />} /> 
          <Route path="/fruitpage" element={<FruitPage />} />
          <Route path="/veggiepage" element={<VeggiePage />} />
          <Route path="/dessertPage" element={<DessertPage />} />
          <Route path="/frappePage" element={<FrappePage />} />
          <Route path="/milkteaPage" element={<MilkteaPage />} />
          <Route path="https://mail.google.com/mail/u/0/#inbox?compose=new" element={<Contact />} />
          <Route path="https://www.facebook.com/" element={<Login />} />
          <Route path="https://accounts.google.com/" element={<Login />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
