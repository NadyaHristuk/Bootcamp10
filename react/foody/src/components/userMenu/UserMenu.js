import React, { Component, createRef } from "react";
import Dropdown from "./dropdown/Dropdown";
import Avatar from "../avatar/Avater";
import style from "./UserMenu.module.css";

export default class UserMenu extends Component {
  containerRef = createRef();

  state = {
    isDropdownOpen: false
  };

  componentDidMount() {
    window.addEventListener("click", this.handleWindowClick);
  }

  shouldComponentUpdate(nextProps, nextState) {
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
    const { name, avatar } = this.props;

    // console.log(isDropdownOpen, name, avatar);

    return (
      <div
        className={style.container}
        onClick={this.openDropdown}
        ref={this.containerRef}
      >
        <Avatar image={avatar} />
        <span className={style.name}>{name}</span>
        {isDropdownOpen && <Dropdown />}
      </div>
    );
  }
}
