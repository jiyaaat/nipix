import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white py-10">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">NIPIX TECH</h2>
          <p>Chennai 600005</p>
          <p>nipixtech23@gmail.com</p>
          <p>+91 93610 30360</p>
        </div>

        <div className="mb-4 flex justify-center space-x-8">
          <a href="/home" className="hover:underline">Home</a>
          <a href="/learn" className="hover:underline">Learn</a>
          <a href="/events" className="hover:underline">Events</a>
          <a href="/signup" className="hover:underline">Sign Up</a>
        </div>

        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f text-white hover:text-blue-500"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter text-white hover:text-blue-400"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-white hover:text-pink-500"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in text-white hover:text-blue-700"></i>
          </a>
        </div>

        <div className="text-xs">
          <p>© 2024 Preethi R, Jiya Thakur, Haniya Iram. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
