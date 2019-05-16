import React, { Component, createRef } from "react";
import css from "./FormCreater.module.css";
import Form from "./form/Form";

export default class UserProfile extends Component {
  containerRef = createRef();
  state = { isDropdownOpen: false };

  componentDidMount() {
    window.addEventListener("click", this.handleWindowClick);
  }

  shouldComponentUpdate(nextState) {
    const { isDropdownOpen } = this.state;
    return nextState.isDropdownOpen !== isDropdownOpen;
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleWindowClick);
  }

  handleWindowClick = event => {
    const isTargetInsideContainer = this.containerRef.current.contains(
      event.target
    );
    const { isDropdownOpen } = this.state;
    if (isDropdownOpen && !isTargetInsideContainer) {
      this.closeDropdown();
    }
  };

  openDropdown = () => {
    this.setState({ isDropdownOpen: true });
  };

  closeDropdown = () => {
    this.setState({ isDropdownOpen: false });
  };

  render() {
    const { isDropdownOpen } = this.state;

    return (
      <div
        className={css.container}
        onClick={this.openDropdown}
        ref={this.containerRef}
      >
        <div className={css.addChannels} />
        {isDropdownOpen && (
          <Form
        //   closeDropdown={this.closeDropdown}
            channels={this.props.channels}
            addChannel={this.props.addChannel}
            updateChannels={this.props.updateChannels}
            newChannelName={this.props.newChannelName}
          />
        )}
      </div>
    );
  }
}
