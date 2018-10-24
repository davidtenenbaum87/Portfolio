import React, { Component } from 'react';
import '../lib/Portfolio.css';

class Trello extends Component {
  render() {
    return (
      <div className="trello">
          <div className="trello-links">
            <h2 style={{"textDecoration": "underline"}}>Trello 2.0</h2>
            <a href="http://dry-journey-65499.herokuapp.com/" target="_blank">Demo</a>
            <a href="https://github.com/davidtenenbaum87/Trello-Ruby-on-Rails" target="_blank">Github (Frontend & Backend)</a>
            <p>Inspired by Trello.com, this is a fun, flexible and friendly way to organize plans, projects and more</p>
            <p><strong>Full-Stack:</strong> Ruby on Rails</p>
          </div>
          <div className="trello-vimeo">
            <iframe src="https://player.vimeo.com/video/288975230" width="620" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          </div>
      </div>
    )
  }
}

export default Trello;
