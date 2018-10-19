import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import '../lib/Footer.css';

const year = new Date;

class Footer extends Component {

  render() {
    return (
      <div className="footer">
          <div className="copyright">
            Copyright © {year.getFullYear()} David Tenenbaum
          </div>
      </div>
    )
  }
}

export default Footer;
