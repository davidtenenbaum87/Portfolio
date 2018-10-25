import React, { Component } from 'react';
import '../lib/About.css';

class About extends Component {
  render() {
    return (
      <div className="about">
        <h1>About</h1>
        <div className="about-content">
          <img src="./david-tenenbaum.JPG" alt="david-tenenbaum"/>
          <div className="about-text">
          <p>I am David Tenenbaum, a full-stack web developer and a professional musician. I was born and raised in Tel-Aviv, Israel in a musicial home and at 12 years old I picked up the double-bass. I immediately fell in-love. Fast forward, in 2013 I graduated from
          <a href="https://www.google.com/search?q=juilliard&rlz=1C5CHFA_enUS775US776&oq=juilliard&aqs=chrome.0.0j69i60j0j69i60l2j0.910j0j4&sourceid=chrome&ie=UTF-8" target="_blank" alt="The Juilliard School">The Juilliard School</a>
          where I earned a Master's in Music. In the years to follow, I have had the privilege to perform with well-renowned musicians such as violinist Itzhak Perlman and play concerts at some of the most iconic venues including Carnegie Hall and Lincoln Center for The Performing Arts.</p><br></br>
        <p>As much as I love playing music, I have always had a passion for technology. I discovered my love for coding a couple years ago, and as great as the online resources are, I quickly realized that in order to make a leap into development I needed to join a community of like-minded professionals. Today, a recent graduate of <a href="https://flatironschool.com/" target="_blank" alt="The Flatiron School">The Flatiron School</a> I am currently seeking a new role in development, striving to bring my skills, experience and love of technology together with my creative background.</p><br></br>
          <p style={{"textDecoration": "underline"}}><strong>Technical Skills:</strong></p><br></br>
          <p>JavaScript (React, Redux), HTML, CSS, Ruby (Ruby on Rails, Sinatra, ActiveRecord), SQL (SQLite3, PostgreSQL), Git</p>
        </div>
        </div>
      </div>
    )
  }
}

export default About;
