import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import SidePanel from "./Container/SidePanelContainer";
import ColorPanel from "./ColorPanel";
import MassagePanel from "./MassagePanel";
import MetaPanel from "./MetaPanel";

// import s from "./App.module.css";

class App extends Component {
  render() {
    return (
      <div>
        <Grid columns={4} divided>
          {/* <Grid.Column width={1}> */}
          <ColorPanel />
          {/* </Grid.Column> */}
          <Grid.Column style={{ marginLeft: 60, padding: 0 }} width={2}>
            <SidePanel />
          </Grid.Column>
          <Grid.Column width={10}>
            <MassagePanel />
          </Grid.Column>
          <Grid.Column width={2}>
            <MetaPanel />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

// const mstp = (state) => {
//   currentUser: state.user.currentUser,
//   currentCanel: state.cannel.currentCannel,
//   isPrivetCanel: state.cannel.isPrivetCanel
// }

// export default connect(mstp)(App);

export default App;
