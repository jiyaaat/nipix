import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';  // Import Font Awesome CSS
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="relative text-white bg-[#0c2531]">
      {/* Footer Section */}
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="text-center md:text-left ">
          <h1 className="text-2xl md:text-4xl font-bold text-blue-500">NIPIX TECH</h1>
          <p>Chennai 600005</p>
          <p>nipixtech23@gmail.com</p>
          <p>+91 93610 30360</p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end space-y-2 md:space-y-0 md:space-x-6 mt-2 md:mt-0">
          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row md:space-x-6">
            <NavLink to="/" className="text-white hover:text-blue-400 text-sm md:text-base">Home</NavLink>
            <NavLink to="/Learn" className="text-white hover:text-blue-400 text-sm md:text-base">Learn</NavLink>
            <NavLink to="/Events" className="text-white hover:text-blue-400 text-sm md:text-base">Events</NavLink>
            <NavLink to="/Login" className="text-white hover:text-blue-400 text-sm md:text-base">Sign Up</NavLink>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-blue-400 text-lg md:text-xl"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white hover:text-blue-400 text-lg md:text-xl"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white hover:text-blue-400 text-lg md:text-xl"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white hover:text-blue-400 text-lg md:text-xl"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="text-center px-4 py-4">
        <hr className="border-t border-gray-400" />
      </div>

      {/* Copyright Text */}
      <div className="text-center py-2">
        <p className='text-xs md:text-sm'>© 2024 Preethi R, Jiya Thakur, Haniya Iram. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
