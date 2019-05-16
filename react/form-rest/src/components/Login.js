import React, { Component } from "react";
import firebase from "../firebase";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const INITIAL_VALUE = {
  email: "",
  password: "",
  errors: ""
};

export default class LoginForm extends Component {
  state = {
    ...INITIAL_VALUE
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(s => {
        console.log(s);
      })
      .catch(err => console.log(err));
  };

  reset = () => {
    this.setState({
      ...INITIAL_VALUE
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="login-form">
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="black" textAlign="center">
              Log-in to your account
            </Header>
            <Form onSubmit={this.handleSubmit} size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  placeholder="E-mail address"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  type="password"
                />

                <Button color="grey" fluid size="large">
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <Link to="/register">Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
