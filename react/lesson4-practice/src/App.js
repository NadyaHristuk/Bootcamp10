import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SingupForm from "./SingupForm";
import NoteList from "./NoteList";
import NoteEditor from "./NoteEditor";
import v4 from "uuid/v4";
import NoteFilter from "./NoteFilter";

const filterForNotes = (filter, notes) => {
  return notes.filter(note =>
    note.text.toLowerCase().includes(filter.toLowerCase())
  );
};

class App extends Component {
  state = {
    filter: "",
    notes: [{ id: "1", text: "ssome text" }, { id: "2", text: "ssome text" }]
  };

  handleAddNote = text => {
    this.setState(prevState => ({
      notes: [{ id: v4(), text }, ...prevState.notes]
    }));
  };

  handleDeleteNote = id => {
    this.setState(prevState => ({
      notes: prevState.notes.filter(note => id !== note.id)
    }));
  };

  handleFilterChange = e => {
    this.setState({
      filter: e.target.value
    });
  };

  render() {
    const { notes, filter } = this.state;
    const filterNotes = filterForNotes(filter, notes);
    return (
      <div>
        <SingupForm />
        <h1>Form in React</h1>
        <NoteEditor onSubmit={this.handleAddNote} />
        <NoteFilter filter={filter} onFilterChange={this.handleFilterChange} />
        <NoteList notes={filterNotes} onDeleteNote={this.handleDeleteNote} />
      </div>
    );
  }
}

export default App;
