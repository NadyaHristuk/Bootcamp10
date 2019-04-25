import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import propTypes from "prop-types";
import MarkerWithLabel from "react-google-maps/lib/components/addons/MarkerWithLabel";

const google = (window.google = window.google ? window.google : {});

const Map = compose(
  withProps({
    googleMapUrl:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAEV5hm-_7AqHTdPCrmjbFLY1bQkvEGpK0&libraries=geometry,drawing,places"
    loadingElement: <div style={{ height: "100%" }} />,
    containerElement: <div style={{ height: "22.5rem" }} />,
    mapElement: <div style={{ height: "100%" }} />
  }),
  withScriptjs,
  withGoogleMap
)(({ getInfo, lat, lng, cityName, country }) => (
  <GoogleMap
    onClick={getInfo}
    defaultZoom={4.5}
    center={{ lat: lat, lng: lng }}
  >
    <MarkerWithLabel
      position={{ lat: lat, lng: lng }}
      labelAncor={new google.maps.Point(0, 0)}
      lableStyle={{
        fontSize: "1.3rem",
        fontWeight: "700",
        backgrounColor: "white",
        color: "black",
        padding: "0.3rem 0.5rem 0.2rem",
        borderRadius: "20px"
      }}
    />
    <div>
      {cityName ? cityName : "Somewhere"},{country ? country : "Planet Earth"}
    </div>
  </GoogleMap>
));

export default Map;

// AIzaSyAEV5hm-_7AqHTdPCrmjbFLY1bQkvEGpK0
