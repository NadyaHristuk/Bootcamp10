import React from "react";
import css from "./ChannelsList.module.css";
import { NavLink } from "react-router-dom";

const ChannelsList = props => {
  let addCurrent = event => {
    event.preventDefault();
    props.addCurrentChannel(event.target.name);
    console.log(event.target.name);
  };

  return (
    <div className={css.channelsListWrapper}>
      {console.log("ChannelsList", props)}
      {props.channels.map(item => (
        <div>
          <NavLink
            to={`${item.path}${item.id}`}
            className={css.channel}
            activeClassName={css.channelActive}
            onClick={addCurrent}
            name={item.channelName}
          >
            {item.channelName}
          </NavLink>
        </div>
      ))}
    </div>
  );
};
export default ChannelsList;
