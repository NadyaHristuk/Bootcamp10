import React from "react";
import css from "./Form.module.css";

const Form = props => {
  let channelName = React.createRef();

  let addChannel = () => {
    props.addChannel();
  };

  let updateChannels = () => {
    let name = channelName.current.value;
    props.updateChannels(name);
    
  };
  console.log("Form", props);

  return (
    <div className={css.container}>
      <input
        placeholder="Channel name"
        className={css.inputProperty}
        ref={channelName}
        onChange={updateChannels}
        value={props.newChannelName}
      />
      <input placeholder="Created by" className={css.inputProperty} />
      <textarea placeholder="Details" className={css.textareaProperty} />
      <div className={css.buttonArea}>
        <button
          onClick={addChannel}
          className={css.buttonProperty}
          type="button"
        >
          {" "}
          Create
        </button>
      </div>
    </div>
  );
};

export default Form;
