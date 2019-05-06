import React, { Component } from "react";
import { connect } from "react-redux";
import NoteList from "./NoteList";
// import { getItems } from '../../modules/notes/notesSelectors';
// import { deleteNote } from '../../modules/notes/notesActions';

import {
  notesActions,
  notesSelectors,
  notesOperations
} from "../../modules/notes";

class NoteListContainer extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return <NoteList {...this.props} />;
  }
}

const mapStateToProps = state => ({
  notes: notesSelectors.getVisibleNotes(state)
});

const mapDispatchToProps = {
  fetchNotes: notesOperations.fetchNotes,
  deleteNote: notesOperations.deleteNote,
  toggleNote: notesActions.toggleNote
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteListContainer);
