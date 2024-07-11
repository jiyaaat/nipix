import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';  // Import Font Awesome CSS

const Footer = () => {
  return (
    <div className="relative text-white py-8">
      {/* Footer Section */}
      <div className="container mx-auto px-4 flex justify-between">
        {/* Left Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-2xl font-bold text-blue-500">NIPIX TECH</h1>
          <p>Chennai 600005</p>
          <p>nipixtech23@gmail.com</p>
          <p>+91 93610 30360</p>
        </div>

        {/* Right Section */}
        <div className="absolute right-0 top-30 text-right px-48"> {/* Added top-20 class */}
          <div className="footer-sec flex flex-col items-end">
            {/* Navigation Links */}
            <div className="footer-sec2 flex flex-col md:flex-row md:space-x-8 mb-2 md:mb-0">
              <a href="#" className="hover:text-blue-400">Home</a>
              <a href="#" className="hover:text-blue-400">Learn</a>
              <a href="#" className="hover:text-blue-400">Events</a>
              <a href="#" className="hover:text-blue-400">Sign Up</a>
            </div>

            {/* Social Media Icons */}
            <div className="flex flex-col justify-start md:flex-row md:space-x-8 mb-2 md:mb-0">
              <a href="#" className="hover:text-blue-400"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-blue-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-blue-400"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-blue-400"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Text */}
      <div className="text-center  mt-8 md:mt-4" style={{ marginTop: '-320px' , marginLeft: '650px'}}>
        <p>© 2024 Preethi R, Jiya Thakur, Haniya Iram. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
