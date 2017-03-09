import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav className="navigation" bsStyle="pills">
            <NavItem>Projects</NavItem>
            <NavItem>Shark Page</NavItem>
            <a className="navLink" href="https://www.linkedin.com/in/benjaminherson/" target="_blank">
              <FontAwesome name="linkedin-square" size="3x" />
            </a>
            <a className="navLink" href="https://github.com/rallyb13" target="_blank">
              <FontAwesome name="github-square" size="3x" />
            </a>
        </Nav>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
