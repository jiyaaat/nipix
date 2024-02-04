import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './RegisterBox.css'; // Import the CSS file

const RegisterBox = () => {
  return (
    <div className="register-box">
      <h2>Register</h2>
      <form>
        <div className="user-box">
          <input type="text" name="" required />
          <label>User name</label>
        </div>
        <div className="user-box">
          <input type="email" name="" required />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input type="password" name="" required />
          <label>Password</label>
        </div>
        <button>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Register
        </button>
        
      </form>
    </div>
  );
}

export default RegisterBox;
