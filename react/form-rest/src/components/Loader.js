import React from "react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

const loaderStyle = {
  height: "100vh"
};

const LoaderExampleText = () => (
  <div>
    <Segment style={loaderStyle}>
      <Dimmer active inverted>
        <Loader size="big" inverted>
          Prepearing chart
        </Loader>
      </Dimmer>
    </Segment>
  </div>
);

export default LoaderExampleText;
