import React, { Component } from 'react';
import '../lib/Portfolio.css';

class MusicStation extends Component {
  render() {
    return (
      <div className="music-station">
          <div className="music-station-links">
            <h1>MusicStation</h1>
            <a href="https://github.com/davidtenenbaum87/Music-Station-FrontEnd" target="_blank">Front End</a>
            <a href="https://github.com/davidtenenbaum87/Music-Station-BackEnd" target="_blank">Back End</a>
            <p>Browser-based digital sheet music management tool enabling a better music learning experience</p>
            <p>Upload your music library, instantly find YouTube performances of the piece, access built-in metronome & tuner for
            practicing and a calendar for schedule management</p>
            <p>Front-End: React, Redux</p>
            <p>Back-End: Rails API, ActiveStorage and Postgres database</p>
          </div>
          <div className="music-station-vimeo">
            <iframe src="https://player.vimeo.com/video/288988954" width="620" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          </div>
      </div>
    )
  }
}

export default MusicStation;
