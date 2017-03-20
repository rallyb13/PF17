import React, { Component } from 'react';
import Navigation from './Navigation';
import Headline from './Headline';
import Piece from './Piece';
import PfStore from './store';
import {OPEN_WEATHER_KEY} from './Consts';

class Projects extends Component {
  componentWillMount() {
    this.setState({
      temp: "",
      high: "",
      low: "",
      summary: ""
    })
  }
  
  componentDidMount() {
    fetch("http://api.openweathermap.org/data/2.5/weather?zip=97205,us&units=imperial&appid=" + OPEN_WEATHER_KEY)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error("Response was NOT ok.")
      }
    })
    .then(data => {
      this.setState({
        temp: data.main.temp,
        high: data.main.temp_max,
        low: data.main.temp_min,
        summary: data.weather[0].description
      })
    })
    .catch(error => {
      console.log('Fetching Problem: ' + error.message)
    })
  }
  
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
          <div>
            <p>Weather in Portland: {Number(this.state.temp).toFixed()}&#176;F with {(this.state.summary)}</p>
            <p>Low: {Number(this.state.low).toFixed()}&#176;F High: {Number(this.state.high).toFixed()}&#176;F</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;