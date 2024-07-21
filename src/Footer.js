import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';  // Import Font Awesome CSS

const Footer = () => {
  return (
    <div className="relative text-white"> {/* Reduced padding */}
      {/* Footer Section */}
      <div className="container mx-auto px-4 py-0 flex justify-between">
        {/* Left Section */}
        <div className="text-center md:text-left mb-2 md:mb-0"> {/* Reduced margin */}
          <h1 className="text-4xl font-bold text-blue-500">NIPIX TECH</h1>
          <p>Chennai 600005</p>
          <p>nipixtech23@gmail.com</p>
          <p>+91 93610 30360</p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-end">
          {/* Navigation Links */}
          <div className="flex space-x-6 mb-2"> {/* Reduced space between items */}
            <a href="#" className="text-white hover:text-blue-400">Home</a>
            <a href="#" className="text-white hover:text-blue-400">Learn</a>
            <a href="#" className="text-white hover:text-blue-400">Events</a>
            <a href="#" className="text-white hover:text-blue-400">Sign Up</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6"> {/* Reduced space between icons */}
            <a href="#" className="text-white hover:text-blue-400 text-xl"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white hover:text-blue-400 text-xl"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white hover:text-blue-400 text-xl"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white hover:text-blue-400 text-xl"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      
        
      {/* Copyright Text */}
      <div className="text-center " style={{ marginTop: '-140px', marginLeft: '750px' }}> {/* Reduced margin */}
        <p className='text-sm'>© 2024 Preethi R, Jiya Thakur, Haniya Iram. All rights reserved.</p>
      </div>
      <div className='mx-auto px-6 mb-6'>
        <hr className="border-t border-gray-400 "/>
      </div>
    </div>
  );
};

export default Footer;