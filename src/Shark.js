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
          <p>
            If a shark stops swimming, it dies.          
          </p>
        </div>
      </div>
    )
  }
}

export default Shark;