import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Navigation extends Component {
  render() {
    return (
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
    );

  }
}

export default Navigation;