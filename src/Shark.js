import React, { Component } from 'react';
import Navigation from './Navigation';
import Headline from './Headline';

class Shark extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Headline />
        <div className="sharkBlock">
          <p>If a shark stops swimming, it dies.</p>
          <p>SHARK (ABOUT) PAGE IS UNDER CONSTRUCTION</p>
        </div>
      </div>
    )
  }
}

export default Shark;