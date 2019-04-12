import React, { Component } from "react";

const INITIAL_STATE = {
  login: "",
  password: "",
  email: "",
  gender: "",
  age: "",
  agreedToTerm: false
};

export default class SingupForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.reset();
  };

  henderlAgree = ({ target: { checked } }) => {
    this.setState({
      agreedToTerm: checked
    });
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, password, email, age, agreedToTerm } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="login"
          value={login}
          onChange={this.handleChange}
          placeholder="login"
        />
        <input
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange}
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
          placeholder="password"
        />
        <div>
          <h2>Choose your gender</h2>
          <label>
            Male
            <input
              type="radio"
              //   checked={gender === GENDER.male}
              name="gender"
              value="male"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={this.handleChange}
            />
          </label>
        </div>
        <label>
          Choose your age
          <select name="age" value={age} onChange={this.handleChange}>
            <option value="" disabled>
              ...
            </option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36+">36+</option>
          </select>
        </label>
        <label>
          Agree to term
          <input
            type="checkbox"
            checked={agreedToTerm}
            onChange={this.henderlAgree}
          />
        </label>
        <p>
          <button disabled={!agreedToTerm}>Signup as {login}</button>
        </p>
      </form>
    );
  }
}
