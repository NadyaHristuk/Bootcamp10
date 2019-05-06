import React, { Component } from "react";

export default class NoteEditor extends Component {
  state = { text: "" };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addNote(this.state.text);

    this.setState({ text: "" });
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: 600,
          padding: 16,
          marginLeft: "auto",
          marginRight: "auto",
          boxShadow:
            "0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)"
        }}
      >
        <textarea
          rows="6"
          style={{ resize: "none", marginBottom: 16, font: "inherit" }}
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button type="submit">Save</button>
      </form>
    );
  }
}
