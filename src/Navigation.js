import React, { Component } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import BDH_Resume from '../public/BDH_Resume.pdf';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
          <Link to="/" className="navPage"><h4>Projects</h4></Link>
          <Link to="/shark" className="navPage"><h4>Shark Page</h4></Link>
          <a className="navLink pdfIcon" title="Benjamin's Resume" href={BDH_Resume} download target="_blank" rel="noopener">
            <FontAwesome name="file-pdf-o" size="3x"/>
          </a>
          <a className="navLink" href="https://www.linkedin.com/in/benjaminherson/" target="_blank" rel="noopener">
            <FontAwesome name="linkedin-square" size="3x" />
          </a>
          <a className="navLink" href="https://github.com/rallyb13" target="_blank" rel="noopener">
            <FontAwesome name="github-square" size="3x" />
          </a>
      </div>
    );

  }
}

export default Navigation;