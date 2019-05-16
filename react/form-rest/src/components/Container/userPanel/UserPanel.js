import React, { Component } from "react";
import { Grid, Header, Icon, Image, Dropdown } from "semantic-ui-react";
import firebase from "../../../firebase";

export default class UserPanel extends Component {
  state = {
    user: this.props.currentUser
  };

  dropdownOptions = () => [
    {
      key: "singout",
      text: <span onClick={this.handleSignout}>Sign Out</span>
    }
  ];

  handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log("signed out!"));
  };

  render() {
    const { photoURL, displayName } = this.state.user;

    return (
      <Grid>
        <Grid.Column>
          <Grid.Row styled="">
            <Header inverted as="h3" floated="left">
              <Icon name="code" />
              BC10 Chart
            </Header>
            <Header inverted as="h3">
              <Dropdown
                trigger={
                  <span>
                    <Image src={photoURL} avatar />
                    {displayName}
                  </span>
                }
                options={this.dropdownOptions()}
              />
            </Header>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }
}
