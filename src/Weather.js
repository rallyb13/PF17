import React, { Component } from 'react';
import {OPEN_WEATHER_KEY} from './Consts';

class Weather extends Component {
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
    return(
      <div className="weather" title="Yes, I can connect to an external API.">
        <p><u>Weather in Portland:</u></p>
        <p><b>{Number(this.state.temp).toFixed()}&#176;F</b> with {(this.state.summary)}</p>
        <p>Low: <b>{Number(this.state.low).toFixed()}&#176;F</b> High: <b>{Number(this.state.high).toFixed()}&#176;F</b></p>
      </div>
    )
  }
}

export default Weather


