import React, { Component } from 'react';
import LoftyFace from '../public/LoftyFace.jpg';

class Headline extends Component {
  render() {
    return (
      <div className="headline">
        <img className="loftyFace" src={LoftyFace} alt={"Me with a book."} />
        <h1>Benjamin D. Herson</h1>
        <h4>Front-End Developer, Writer, Poet & Game-Maker</h4>
      </div>
    )
  }
}

export default Headline;