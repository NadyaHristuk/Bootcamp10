import React, { Component } from "react";
import axios from "axios";
import WeatherToday from "./WeatherToday";
import "./App.css";

const WEATHER_KEY = "32097cc475f84a0dac883738192204";

class App extends Component {
  state = {
    isLoading: true,
    cityName: "Kiev",
    numForecastDay: 5
  };

  componentDidMount() {
    const { cityName, numForecastDay } = this.state;
    const URL = `http://api.apixu.com/v1/forecast.json?key=${WEATHER_KEY}&q=${cityName}&days=${numForecastDay}`;
    axios
      .get(URL)
      .then(res => {
        return res.data;
      })
      .then(data => {
        this.setState({
          isLoading: false,
          temp_c: data.current.temp_c,
          text: data.current.condition.text,
          iconUrl: data.current.condition.icon,
          forecastDays: data.forecast.forecastday
        });
      })
      .catch(err => {
        if (err) console.error("Cannot fetch Weather Data from API", err);
      });
  }

  render() {
    const {
      cityName,
      isLoading,
      temp_c,
      text,
      iconUrl,
      forecastDays
    } = this.state;

    return (
      <>
        {isLoading ? (
          <h3>Loading weather...</h3>
        ) : (
          <WeatherToday
            cityName={cityName}
            temp_c={temp_c}
            text={text}
            iconUrl={iconUrl}
          />
        )}
      </>
    );
  }
}

export default App;
