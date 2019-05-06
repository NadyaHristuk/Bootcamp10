import React from 'react';
import Note from '../Note/Note';

const NoteList = ({ notes = [], deleteNote, toggleNote }) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      maxWidth: 1440,
      marginRight: 'auto',
      marginLeft: 'auto',
      padding: '0 16px',
      marginTop: 32,
    }}
  >
    {notes.map(note => (
      <Note
        key={note.id}
        {...note}
        onDelete={() => deleteNote(note.id)}
        onToggleCompleted={() => toggleNote(note.id)}
      />
    ))}
  </div>
);

export default NoteList;
