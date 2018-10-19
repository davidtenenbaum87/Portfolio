import React, { Component } from 'react';
import '../lib/About.css';

class About extends Component {
  render() {
    return (
      <div className="about">
        <h1>About</h1>
        <div className="about-content">
          <img src="./david-tenenbaum-photo-5.JPG" alt="david-tenenbaum-photo"/>
          <div className="about-p">
          <p>I am David Tenenbaum, a musician and full stack web developer. I was born and raised in Tel-Aviv, Israel, and since an early age I was surrounded by music. I picked up the double bass when I was 12, and immediately fell in love. In 2013 I graduated from The Juilliard School with a Master's in Music and since graduation I have been working as a professional musician. I had the privilege of playing with well-renowned musicians such as violinist Itzhak Perlman and performing at NYC's most iconic venues such as Carnegie Hall. Over the years I developed an interest in web development which I finally had the time to take to the next level in 2017. Today, a graduate of <a href="https://flatironschool.com/" target="_blank" alt="The Flatiron School">The Flatiron School's</a> Software Engineering program (August 2018), I am currently seeking a new role in development, striving to bring my two passions (music/art and technology) together. </p>

          <p><strong>Technical Skills:</strong> JavaScript (React, Redux), HTML, CSS, Ruby (Ruby on Rails, Sinatra, ActiveRecord), SQL (SQLite3, PostgreSQL), Git</p>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
