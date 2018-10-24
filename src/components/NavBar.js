import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../lib/NavBar.css';

class NavBar extends Component {


  render() {
    return (
      <div className="navbar">
        <div className="david-tenenbaum">
          <NavLink to="/">David Tenenbaum // Full-Stack Web Developer</NavLink>
        </div>
          <div className="about-projects-contact">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="./david-tenenbaum-resume.pdf" target="_blank">Resume</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
    )
  }
}

export default NavBar;
