import React, { Component } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
          <Link to="/" className="navPage"><h4>Projects</h4></Link>
          <Link to="/shark" className="navPage"><h4>Shark Page</h4></Link>
          <a className="navLink" href="https://www.linkedin.com/in/benjaminherson/" target="_blank">
            <FontAwesome name="linkedin-square" size="3x" />
          </a>
          <a className="navLink" href="https://github.com/rallyb13" target="_blank">
            <FontAwesome name="github-square" size="3x" />
          </a>
      </div>
    );

  }
}

export default Navigation;