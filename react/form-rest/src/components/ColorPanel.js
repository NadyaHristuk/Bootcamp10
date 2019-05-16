import React from "react";
import { Sidebar, Menu, Divider, Button } from "semantic-ui-react";

const ColorPanel = () => (
  <Sidebar as={Menu} inverted vertical visible width="very thin">
    <Divider />
    <Button icon="add" size="small" color="purple" />
  </Sidebar>
);

export default ColorPanel;
