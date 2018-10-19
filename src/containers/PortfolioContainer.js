import React, { Component } from 'react';
import Boggle from '../components/Boggle.js';
import Trello from '../components/Trello.js';
import MusicStation from '../components/MusicStation.js';
import '../lib/Portfolio.css';

class PortfolioContainer extends Component {

  render() {
    return (
      <div className="portfolio">
        <h1>Portfolio</h1>
        <MusicStation/>
        <Boggle/>
        <Trello/>
      </div>
    )
  }
}

export default PortfolioContainer;
