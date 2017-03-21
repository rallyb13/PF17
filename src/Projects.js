import React, { Component } from 'react';
import Navigation from './Navigation';
import Headline from './Headline';
import Piece from './Piece';
import PfStore from './store';
import Weather from './Weather';

class Projects extends Component {
  
  render() {
    let data = PfStore.getProjectData();
    let pieces = [];
    for (let item of data) {
      pieces.push(
        <Piece key={item.name} name={item.name} lang={item.lang} url={item.url} img={item.img} caption={item.caption} more={item.more}/>
      )
    }
    
    return (
      <div>
        <Navigation />
        <Headline />
        <div className="projBlock">
          {pieces}
          <Weather />
        </div>
      </div>
    )
  }
}

export default Projects;