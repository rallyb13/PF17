import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav bsStyle="pills">
            <NavItem>Projects</NavItem>
            <NavItem>Shark Page</NavItem>
            <a className="navLink inIcon" href="https://www.linkedin.com/in/benjaminherson/" target="_blank"><img src={linkedin} alt={"link to linkedin"}/></a>
            <a className="navLink" href="https://github.com/rallyb13" target="_blank"><img src={github} alt={"link to github"}/></a>
        </Nav>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
