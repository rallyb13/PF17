import React, { Component } from 'react';
import {Router, Route, hashHistory } from 'react-router';
import Navigation from './Navigation';
import Projects from './Projects';
import Shark from './Shark';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Router history={hashHistory}>
          <Route path="/" component={Projects}></Route>
          <Route path="/shark" component={Shark}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
