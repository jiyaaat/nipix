<<<<<<< HEAD
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span>NIPIX TECH</span>
            {/* <i className="fas fa-code"></i> */}
            
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Learn"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Learn
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Events"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Events
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Signup
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
=======
import './Navbar.css'
import { Link } from 'react-router-dom';
import './Home.css';

function Navbar() {
    return( 
    <div>
        <nav id="navbar">
        <div class="content text-lg">
            <p text-4xl>NIPIX TECH</p>
>>>>>>> 9a363003229dd0c94ba4b94e4999a016fcd09493
        </div>
      </nav>
    </>
  );
}

export default NavBar;