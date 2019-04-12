import React, { Component } from "react";
import Paragraf from "./Paragraf";
import Toggle from "./Toggle";

class App extends Component {
  render() {
    return (
      <div>
        <Toggle>
          <Paragraf key="1" text="React" />
          <Paragraf key="2" text="is" />
          <Paragraf key="3" text="Ugly" />
        </Toggle>
      </div>
    );
  }
}

export default App;
