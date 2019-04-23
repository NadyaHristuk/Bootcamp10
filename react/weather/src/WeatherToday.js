import React from "react";

const WeatherToday = ({ cityName, temp_c, text }) => (
  <>
    <h1>{cityName}</h1>
    <h1>{temp_c}</h1>
    <h1>{text}</h1>
  </>
);

export default WeatherToday;
