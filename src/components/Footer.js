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
      </div>
    )
  }
}

export default Footer;
