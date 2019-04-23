import React, { Component } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import WeatherToday from "./WeatherToday";
import "./App.css";
import Search from "./Search";

const WEATHER_KEY = "32097cc475f84a0dac883738192204";

class App extends Component {
  state = {
    isLoading: true,
    cityName: "Kiev",
    numForecastDay: 5
  };

  updateWeather() {
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

  componentDidMount() {
    this.updateWeather();
  }

  cityNameUpdate = e => {
    e.preventDefault();
    // console.log(e.target.city.value);
    this.setState(
      {
        cityName: e.target.city.value
      },
      () => this.updateWeather()
    );
    // console.log(this.state.cityName);
  };

  render() {
    const {
      cityName,
      isLoading,
      temp_c,
      text,
      iconUrl,
      forecastDays
    } = this.state;
    console.log(this.state);
    return (
      <>
        {isLoading ? (
          <div className="wrap">
            <div className="wrapLoader">
              <Loader
                type="Circles"
                color="#bbb"
                height="80"
                width="80"
                margin="100px"
              />
            </div>
          </div>
        ) : (
          <div>
            <WeatherToday
              cityName={cityName}
              temp_c={temp_c}
              text={text}
              iconUrl={iconUrl}
            />

            <Search getInput={this.cityNameUpdate} />
            {/* <ul>
              {forecastDays.map(item => (
                <li>{item.date}</li>
              ))}
            </ul> */}
          </div>
        )}
      </>
    );
  }
}

export default App;
