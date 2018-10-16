import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import '../lib/Footer.css';

class Footer extends Component {


  render() {
    return (
      <div className="footer">
        <div className="copyright">
          Copyright © 2018 David Tenenbaum
        </div>
        <div className="links">
          <SocialIcon url="https://www.linkedin.com/in/davidtenenbaum87/" className="icon" color="#ff5a01" style={{ height: 10, width: 10 }}/>
          <SocialIcon url="https://github.com/davidtenenbaum87" className="icon" color="#ff5a01" style={{ height: 10, width: 10 }}/>
          <SocialIcon url="https://www.facebook.com/david.tenenbaum.1" className="icon" color="#ff5a01" style={{ height: 10, width: 10 }}/>
          <SocialIcon url="mailto:david.tenenbaum87@gmail.com" className="icon" color="#ff5a01" style={{ height: 10, width: 10 }}/>
        </div>
      </div>
    )
  }
}

export default Footer;
