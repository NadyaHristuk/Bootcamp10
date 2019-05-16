import React, { Component } from "react";
import md5 from "md5";
import firebase from "../firebase";
import { Button, Form, Header, Grid, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";

const INITIAL_VALUE = {
  username: "",
  email: "",
  password: "",
  passwordConfirm: "",
  errors: "",
  usersRef: firebase.database().ref("users")
};

export default class RegistrationForm extends Component {
  state = {
    ...INITIAL_VALUE
  };

  isFormValid;
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(createdUser => {
        console.log(createdUser);
        createdUser.user
          .updateProfile({
            displayName: this.state.username,
            photoURL: `https://gravatar.com/avatar/${md5(
              createdUser.user.email
            )}?d=identicon`
          })
          .then(() => {
            this.saveUpdatedUser(createdUser).then(() => {
              console.log("user saved");
              this.reset();
            });
          })
          .catch(err => {
            console.log(err);
            this.setState({ errors: err });
          });
      });
  };

  saveUpdatedUser = createdUser => {
    return this.state.usersRef.child(createdUser.user.uid).set({
      name: createdUser.user.displayName,
      avatar: createdUser.user.photoURL
    });
  };

  reset = () => {
    this.setState({
      ...INITIAL_VALUE
    });
  };

  render() {
    const { username, email, password, passwordConfirm, errors } = this.state;
    return (
      <Grid centered verticalAlign="middle" style={{ paddingTop: 100 }}>
        <Grid.Column width={8}>
          <Form onSubmit={this.handleSubmit}>
            <Header as="h2" textAlign="center">
              Registration
            </Header>
            <Form.Field>
              <label>username</label>
              <input
                type="text"
                name="username"
                value={username}
                placeholder="username"
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>email</label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="email"
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Password Confirm</label>
              <input
                type="password"
                name="passwordConfirm"
                value={passwordConfirm}
                placeholder="Password Confirm"
                onChange={this.handleChange}
              />
            </Form.Field>
            <Button type="submit">Sign up</Button>
          </Form>
          {errors.length > 0 && <Message error>error</Message>}
          <Message>
            Already a user? <Link to="/login">Login</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}
