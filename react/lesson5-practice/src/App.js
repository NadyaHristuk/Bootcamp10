import React, { Component } from "react";
import "./App.css";
import axios from "axios";

const API_URL = "https://hn.algolia.com/api/v1/search?query=react";

class App extends Component {
  componentDidMount() {
    return axios.get(API_URL).then(response => console.log(response));
  }

  render() {
    return <h1>AXIOS</h1>;
  }
}

export default App;
