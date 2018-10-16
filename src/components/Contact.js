import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import '../lib/Contact.css';

class Contact extends Component {

  render() {
    return (
      <div className="contact">
        <SocialIcon url="https://www.linkedin.com/in/davidtenenbaum87/" className="icon" />
        <SocialIcon url="https://github.com/davidtenenbaum87" className="icon" />
        <SocialIcon url="https://www.facebook.com/david.tenenbaum.1" className="icon" />
        <SocialIcon url="mailto:david.tenenbaum87@gmail.com" className="icon" />
      </div>
    )
  }
}

export default Contact;
