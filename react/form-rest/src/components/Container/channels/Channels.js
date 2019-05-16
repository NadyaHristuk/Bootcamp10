import React, { Component } from "react";
import css from "./Channels.module.css";
import FormCreater from "./formCreater/FormCreater";
import ChannelsList from "./channelsList/ChannelsList";
import firebase from "../../../firebase";

export default class Channels extends Component {
  state = {
    activeCanel: "",
    user: this.props.currentUser,
    channels: [],
    channelName: "",
    channelDetails: "",
    channelRef: firebase.database().ref("channels")
  };

  componentDidMount() {
    this.addListeners();
  }

  componentWillUnmount() {
    this.removeListeners();
  }

  addListeners = () => {};

  render() {
    return (
      <div className={css.channelsWrapper}>
        <div className={css.addChannelsWrapper}>
          <p className={css.paragraph}>Channels</p>
          <FormCreater
            channels={this.props.channels}
            addChannel={this.props.addChannel}
            updateChannels={this.props.updateChannels}
            newChannelName={this.props.newChannelName}
          />
        </div>

        <ChannelsList
          channels={this.props.channels}
          currentChannel={this.props.currentChannel}
          addCurrentChannel={this.props.addCurrentChannel}
        />
      </div>
    );
  }
}
