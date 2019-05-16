import React, { Component } from "react";
import { Accordion, Icon } from "semantic-ui-react";
export default class AccordionExampleStandard extends Component {
  state = { activeIndex: 0 };
  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex });
  };
  render() {
    const { activeIndex } = this.state;
    return (
      <Accordion style={{ width: 230 }}>
        <Accordion.Title
          active={activeIndex === 4}
          index={4}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          About Channel
        </Accordion.Title>
        <Accordion.Content style={{ width: 200 }} active={activeIndex === 4}>
          <p>A dog is a type of domesticated animal.</p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Details
        </Accordion.Title>
        <Accordion.Content style={{ width: 200 }} active={activeIndex === 1}>
          <p>
            There are many breeds of dogs. Each breed varies in size and
            temperament.
          </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Members
        </Accordion.Title>
        <Accordion.Content style={{ width: 200 }} active={activeIndex === 2}>
          <p>Three common ways for a prospective owner tos.</p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 3}
          index={3}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Created By
        </Accordion.Title>
        <Accordion.Content style={{ width: 200 }} active={activeIndex === 3}>
          <p>A dog is a type of domesticated animal.</p>
        </Accordion.Content>
      </Accordion>
    );
  }
}
