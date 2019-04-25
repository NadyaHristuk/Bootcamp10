import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

import MarkerWithLabel from "react-google-maps/lib/components/addons/MarkerWithLabel";

const google = (window.google = window.google ? window.google : {});

const Map = ({ getInfo, lat, lng, cityName, country }) => (
  <GoogleMap onClick={getInfo} defaultZoom={12} center={{ lat: lat, lng: lng }}>
    <MarkerWithLabel
      position={{ lat: lat, lng: lng }}
      labelAnchor={new google.maps.Point(0, 0)}
      labelStyle={{
        fontSize: "1.3rem",
        fontWeight: "700",
        backgroundColor: "white",
        color: "black",
        padding: "0.3rem 0.5rem 0.2rem",
        borderRadius: "30px"
      }}
    >
      <div>
        {cityName ? cityName : "Somewhere on"},
        {country ? country : "Planet Earth"}
      </div>
    </MarkerWithLabel>
  </GoogleMap>
);

export default withScriptjs(withGoogleMap(Map));

// AIzaSyAEV5hm-_7AqHTdPCrmjbFLY1bQkvEGpK0
