import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Projects from './Projects';
import Shark from './Shark';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={Projects}></Route>
          <Route path="/shark" component={Shark}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
