import React, { Component } from "react";
import { Form, TextArea, Button } from "semantic-ui-react";
import { connect } from "react-redux";

class FormsInput extends Component {
  state = {
    text: ""
  };
  handleSendMessage = e => {
    e.preventDefault();
    const message = this.state.text;
    const data = {
      id: new Date(),
      message,
      add: false
    };
    console.log(data);
    this.props.dispatch({
      type: "ADD_MESSAGE",
      payload: { data }
    });
    this.setState({ text: "" });
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ text: e.target.value });
  };

  render() {
    const { text } = this.state;
    return (
      <Form onSubmit={this.handleSendMessage}>
        <TextArea
          type="text"
          name="text"
          value={text}
          onChange={this.handleChange}
          placeholder="enter your message"
        />

        <Button type="submit" inverted color="violet">
          Send Message
        </Button>
      </Form>
    );
  }
}

export default connect()(FormsInput);
