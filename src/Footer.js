import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';  // Import Font Awesome CSS

const Footer = () => {
  return (
    <div className="relative text-white py-8">
      {/* Footer Section */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Left Section */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-2xl font-bold text-blue-500">NIPIX TECH</h1>
            <p>Chennai 600005</p>
            <p>nipixtech23@gmail.com</p>
            <p>+91 93610 30360</p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col md:items-end text-right md:ml-16">
            {/* Navigation Links */}
            <div className="flex flex-col md:flex-row md:space-x-8 mb-4 md:mb-0">
              <a href="#" className="hover:text-blue-400">Home</a>
              <a href="#" className="hover:text-blue-400">Learn</a>
              <a href="#" className="hover:text-blue-400">Events</a>
              <a href="#" className="hover:text-blue-400">Sign Up</a>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-end space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-400"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-blue-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-blue-400"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-blue-400"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>

        {/* Copyright Text */}
        <div className="text-center md:text-right mt-8 md:mt-4">
          <p>© 2024 Preethi R, Jiya Thakur, Haniya Iram. All rights reserved.</p>
        </div>
      </div>
      {/* Footer Section End */}
    </div>
  );
};

export default Footer;
