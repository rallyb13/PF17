import React, { Component } from 'react';
import Navigation from './Navigation';
import Headline from './Headline';

class Projects extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Headline />
        <div className="projBlock">
          <p>Things I have Done.</p>
        </div>
      </div>
    )
  }
}

export default Projects;