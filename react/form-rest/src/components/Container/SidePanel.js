import React from "react";
import { Route } from "react-router-dom";
import Dialogs from "./dialogs/Dialogs";
import Channels from "./channels/Channels";
import css from "./SidePanel.module.css";
import UserPanel from "./userPanel/UserPanel";

const SidePanel = props => {
  {
    console.log("SidePanel", props);
  }
  return (
    <div className={css.sidePanel}>
      <Route exect path="/Channels" render={() => <Channels />} />
      {/* <Route exect path="/Dialogs/" render={() => <Dialogs />} /> */}
      <div className={css.userPanel}>
        <UserPanel currentUser={props.currentUser} />
      </div>
      <div className={css.channels}>
        <Channels
          currentUser={props.currentUser}
          channels={props.channels}
          addChannel={props.addChannel}
          updateChannels={props.updateChannels}
          newChannelName={props.newChannelName}
          currentChannel={props.currentChannel}
          addCurrentChannel={props.addCurrentChannel}
        />
      </div>
      <div className={css.dialogs}>
        <Dialogs userName={props.userName} />
      </div>
    </div>
  );
};

export default SidePanel;
