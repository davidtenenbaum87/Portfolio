import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

import '../lib/Home.css';

class Home extends Component {

  render() {
    return (
      <div className="home">
        <h1 className="animated fadeInLeft">David Tenenbaum</h1>
        <h2 className="animated fadeInRight">Full-Stack Web Developer</h2>
        <div className="animated fadeIn	delay-1s social-links-home">

          <SocialIcon url="https://www.linkedin.com/in/davidtenenbaum87/" className="icon" />
          <SocialIcon url="https://github.com/davidtenenbaum87" className="icon" />
          <SocialIcon url="https://www.facebook.com/david.tenenbaum.1" className="icon" />
          <SocialIcon url="mailto:david.tenenbaum87@gmail.com" className="icon" />
        </div>
      </div>
    )
  }
}

export default Home;
