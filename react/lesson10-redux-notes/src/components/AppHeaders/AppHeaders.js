import React from "react";
import "./AppHeaders.css";
import NoteFilter from "../NoteFilter/NoteFilter.js";

const AppHeaders = () => (
  <header className="header">
    <NoteFilter />
  </header>
);

export default AppHeaders;
