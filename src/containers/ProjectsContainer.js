import React, { Component } from 'react';
import Boggle from '../components/Boggle.js';
import Trello from '../components/Trello.js';
import MusicStation from '../components/MusicStation.js';
import '../lib/Projects.css';

class ProjectsContainer extends Component {

  render() {
    return (
      <div className="projects">
        <h1>Projects</h1>
        <MusicStation/>
        <Boggle/>
        <Trello/>
      </div>
    )
  }
}

export default ProjectsContainer;
