import React, { Component } from 'react';
import '../lib/Projects.css';

class Trello extends Component {
  render() {
    return (
      <div className="trello">
          <div className="trello-links">
            <h1>Trello 2.0</h1>
            <a href="http://dry-journey-65499.herokuapp.com/" target="_blank">Demo|</a>
            <a href="https://github.com/davidtenenbaum87/Trello-Ruby-on-Rails" target="_blank">Github (Frontend & Backend)</a>
            <p>Inspired by Trello.com, this is a fun, flexible and friendly way to organize plans, projects and more</p>
          </div>
          <div className="trello-vimeo">
            <iframe src="https://player.vimeo.com/video/288975230" width="320" height="200" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          </div>
      </div>
    )
  }
}

export default Trello;
