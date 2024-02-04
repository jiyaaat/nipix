import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './LoginBox.css'; // Import the CSS file

const LoginBox = () => {
  return (
    <div className="login-box">
      
      <form>
        <div className="user-box">
          <input type="text" name="" required />
          <label>User name</label>
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
          Login
        </button>
        <p className='line'>Don't have an account? <Link to="/register" className="register-link">Register</Link></p>
 
      </form>
    </div>
  );
}

export default LoginBox;
