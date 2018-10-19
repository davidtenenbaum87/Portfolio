import React, { Component } from 'react';
import '../lib/Portfolio.css';

class Boggle extends Component {
  render() {
    return (
      <div className="boggle">
        <div className="boggle-vimeo">
          <iframe src="https://player.vimeo.com/video/288186446" width="620" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
          <div className="boggle-links">
            <h1>Boggle</h1>
            <a href="https://davidtenenbaum87.github.io/boggle-frontend/" target="_blank">Demo</a>
            <a href="https://github.com/davidtenenbaum87/boggle-frontend" target="_blank">Front End</a>
            <a href="https://github.com/davidtenenbaum87/boggle-backend" target="_blank">Back End</a>
            <p>Word game played using a grid of lettered dice, in which players attempt to find words in sequences of adjacent letters</p>
            <p>Front-End: JavaScript</p>
            <p>Back-End: Rails API</p>
          </div>
      </div>
    )
  }
}

export default Boggle;
