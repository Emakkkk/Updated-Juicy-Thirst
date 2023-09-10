// src/components/page/Contact.js
import React from 'react';
import './Contact.css'; // Import the CSS file

function Contact() {
  
  return (
    <div>
      <div className="container">
        <form action="">
          <contact-h2>GET IN TOUCH</contact-h2>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="E-mail" required />
          <br />
          <input type="text" className="msgbox" placeholder="Message" />
          <br />
          <input type="submit" value="SUBMIT" className="btn" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
