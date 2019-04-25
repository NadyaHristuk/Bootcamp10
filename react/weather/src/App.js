import React, { Component } from "react";
import axios from "axios";

import Loader from "react-loader-spinner";
import WeatherToday from "./WeatherToday";
import "./App.css";
import Search from "./Search";
import { Promise } from "rsvp";
import DefaultCityImg from "./DefaultCityBG.jpg";

const WEATHER_KEY = "32097cc475f84a0dac883738192204";
const IMAGE_KEY = "7986301-c14a62fbcda5a08a22ab81f9a";

class App extends Component {
  state = {
    isLoading: true,
    cityName: "Kiev",
    numForecastDay: 5,
    bgIMG: "",
    lat: 50.25,
    lng: 30.3,
    country: "Ukraine"
  };

  getInfoMapClick = e => {
    let lat = e.latLng.lat();
    let lng = e.latLng.lng();
    console.log(lat, lng);
    const { numForecastDay } = this.state;
    const URL = `http://api.apixu.com/v1/forecast.json?key=${WEATHER_KEY}&q=${lat},
    ${lng}&days=${numForecastDay}`;
    console.log(URL);
    axios
      .get(URL)
      .then(res => {
        return res.data;
      })
      .then(data => {
        this.setState(
          {
            isLoading: false,
            cityName: data.location.name,
            lat: data.location.lat,
            lng: data.location.lon,
            country: data.location.country,
            temp_c: data.current.temp_c,
            text: data.current.condition.text,
            iconUrl: data.current.condition.icon,
            forecastDays: data.forecast.forecastday
          },
          () => this.searchImages()
        );
      })
      .catch(err => {
        if (err) console.error("Cannot fetch Weather Data from API", err);
      });
  };

  searchImages() {
    const { cityName } = this.state;

    const URL = `https://pixabay.com/api/?key=${IMAGE_KEY}&q=${cityName}`;
    console.log(URL);
    axios
      .get(URL)
      .then(res => {
        return res.data;
      })
      .then(data => {
        console.log(Math.floor(Math.random() * data.hits.length));
        if (data.hits.length === 0) {
          this.setState({
            bgIMG: DefaultCityImg
          });
        } else {
          this.setState({
            bgIMG:
              data.hits[Math.floor(Math.random() * data.hits.length)]
                .largeImageURL
          });
        }
      });
  }

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
          lat: data.location.lat,
          lng: data.location.lon,
          country: data.location.country,
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
    this.searchImages();
  }

  updateWeatherAndImage(value) {
    const { cityName, numForecastDay } = this.state;
    let UpWeather = axios.get(
      `http://api.apixu.com/v1/forecast.json?key=${WEATHER_KEY}&q=${cityName}&days=${numForecastDay}`
    );
    let UpImg = axios.get(
      `https://pixabay.com/api/?key=${IMAGE_KEY}&q=${cityName}`
    );
    Promise.all([UpWeather, UpImg]).then(res => {
      console.log(res[1].data.hits);
      this.setState({
        isLoading: false,
        bgIMG:
          res[1].data.hits[Math.floor(Math.random() * res[1].data.hits.length)]
            .largeImageURL,
        cityName: res[0].data.location.name,
        lat: res[0].data.location.lat,
        lng: res[0].data.location.lon,
        country: res[0].data.location.country,
        temp_c: res[0].data.current.temp_c,
        text: res[0].data.current.condition.text,
        iconUrl: res[0].data.current.condition.icon,
        forecastDays: res[0].data.forecast.forecastday
      });
    });
  }
  cityNameUpdate = e => {
    e.preventDefault();
    // console.log(e.target.city.value);
    this.setState(
      {
        cityName: e.target.city.value
      },
      () => this.updateWeatherAndImage(this.state.cityName)
    );
    e.target.city.value = "";
    // console.log(this.state.cityName);
  };

  render() {
    const {
      cityName,
      isLoading,
      temp_c,
      text,
      iconUrl,
      forecastDays,
      lng,
      lat,
      country,
      bgIMG
    } = this.state;

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
          <div
            className="bgImage"
            style={{
              backgroundImage: `linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.1)
    ),url(${bgIMG})`
            }}
          >
            <Search getInput={this.cityNameUpdate} />
            <ul>
              {forecastDays.map(item => (
                <li>{item.date}</li>
              ))}
            </ul>
            <WeatherToday
              cityName={cityName}
              temp_c={temp_c}
              text={text}
              iconUrl={iconUrl}
              lat={lat}
              lng={lng}
              country={country}
              getInfo={this.getInfoMapClick}
            />
          </div>
        )}
      </>
    );
  }
}

export default App;
