import React, { Component, Fragment } from "react";
import Paragraf from "./Paragraf";

export default class Toggle extends Component {
  state = { on: false };

  handleToggle = () => {
    this.setState(prevState => ({ on: !prevState.on }));
  };

  render() {
    const { on } = this.state;

    return (
      <Fragment>
        <button onClick={this.handleToggle}>Some text</button>
        import Paragraf from "./Paragraf";
      </Fragment>
    );
  }
}
