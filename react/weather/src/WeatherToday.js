import React from "react";
import Map from "./Map";

const WeatherToday = ({
  cityName,
  temp_c,
  text,
  getInfo,
  lat,
  lng,
  country
}) => (
  <>
    {console.log({ lat }, { lng })}
    <h1>{cityName}</h1>
    <h1>{temp_c}</h1>
    <h1>{text}</h1>
    <div style={{ height: `450px`, width: "50%" }}>
      <Map
        getInfo={getInfo}
        lat={lat}
        lng={lng}
        cityName={cityName}
        country={country}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAEV5hm-_7AqHTdPCrmjbFLY1bQkvEGpK0"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `22.5rem` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  </>
);

export default WeatherToday;
