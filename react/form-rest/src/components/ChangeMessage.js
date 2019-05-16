import React, { Component } from "react";
import { Form, TextArea, Button } from "semantic-ui-react";
import { connect } from "react-redux";

class ChangeMessage extends Component {
  state = {
    text: ""
  };
  handleChangeMessage = e => {
    e.preventDefault();
    const newMessage = this.state.text;
    const data = {
      newMessage
    };
    this.props.dispatch({
      type: "UPDATE_MESSAGE",
      id: this.props.historyposts.id,
      data: data
    });
  };
  handleChange = e => {
    e.preventDefault();
    this.setState({ text: e.target.value });
  };
  render() {
    const { text } = this.props;
    return (
      <Form onSubmit={this.handleChangeMessage}>
        <TextArea
          rows="10"
          cols="30"
          type="text"
          name="text"
          value={text}
          onChange={this.handleChange}
          defaultValue={this.props.historyposts.message}
        />
        <Button>Update</Button>
      </Form>
    );
  }
}

export default connect()(ChangeMessage);
