import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import Home from './containers/Home.js';
import About from './components/About.js';
import ProjectsContainer from './containers/ProjectsContainer.js';
import Contact from './components/Contact.js';

import './lib/App.css';



class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <Fragment>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/projects" render={() => <ProjectsContainer />} />
          <Route exact path="/contact" render={() => <Contact />} />
        </Fragment>
        <Footer />
      </div>
    );
  }
}

export default App;
