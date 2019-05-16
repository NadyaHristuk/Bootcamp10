import React from "react";
import FormsInput from "./ChatInput";
import { Header } from "semantic-ui-react";
import ChatHistory from "./ChatHistory";

import "./App.css";

function App() {
  return (
    <>
      <Header as="h3" block>
        Need to put Something
      </Header>
      <ChatHistory />
      <FormsInput />
    </>
  );
}

export default App;
