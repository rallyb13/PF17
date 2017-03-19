import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Projects from './Projects';
import SharkPage from './SharkPage';
import Footer from './Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="mainBody">
        <Router history={hashHistory}>
          <Route path="/" component={Projects}></Route>
          <Route path="/shark" component={SharkPage}></Route>
        </Router>
        <Footer/>
      </div>
    );
  }
}

export default App;
