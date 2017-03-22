import React, { Component } from 'react';
import analytics from '../public/icons/adobe-analytics.png';
import Angular from '../public/icons/Angular.png';
import backbone from '../public/icons/backbone.png';
import LogoReact from '../public/icons/LogoReact.png';
import JavaScript from '../public/icons/JavaScript.png';
import RubyOnRails from '../public/icons/RubyOnRails.png';
import Sass from '../public/icons/sass.png';
import Tomster from '../public/icons/tomster.png';

class Icons extends Component {
  render() {
    return(
      <div className="iconRow">
        <img className="smaller" src={backbone} alt="Backbone" title="Backbone"/>
        <img className="smaller" src={analytics} alt="Adobe analytics" title="Adobe analytics"/>
        <img className="bigger" src={RubyOnRails} alt="Ruby On Rails" title="Ruby On Rails"/>
        <img className="bigger logo" src={LogoReact} alt="React" title="React"/>
        <img className="bigger" src={JavaScript} alt="JavaScript" title="JavaScript"/>
        <img className="bigger emberIsBetter" src={Tomster} alt="Ember" title="Oh, Tomster"/>
        <img className="smaller angular" src={Angular} alt="Angular" title="Angular"/>
        <img className="smaller" src={Sass} alt="Sass" title="Sass"/>
      </div>
    )
  }
}

export default Icons;