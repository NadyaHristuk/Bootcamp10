import React from "react";
import SidePanel from "./SidePanel";
import { connect } from "react-redux";
import {
  addChannelActionCreator,
  updateChannelsActionCreator,
  addCurrentChannelActionCreator
} from "../../ChannelsReducer";

let mapStateToProps = state => {
  return {
    channels: state.channels.channels,
    newChannelName: state.channels.newChannelName,
    userName: state.channels.userName,
    currentUser: state.user.currentUser,
    currentChannel: state.channels.currentChannel
  };
};

let mapDispatchToProps = dispatch => {
  return {
    addChannel: () => {
      dispatch(addChannelActionCreator());
    },
    updateChannels: Name => {
      dispatch(updateChannelsActionCreator(Name));
    },
    addCurrentChannel: activeChannel => {
      dispatch(addCurrentChannelActionCreator(activeChannel));
    }
  };
};

const SidePanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SidePanel);

export default SidePanelContainer;
