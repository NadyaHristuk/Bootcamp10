import React from "react";

const NoteList = ({ notes, onDeleteNote }) => (
  <ul>
    {notes.map(({ id, text }) => (
      <li key={id}>
        <span>{text}</span>
        <button onClick={() => onDeleteNote(id)}>X</button>
      </li>
    ))}
  </ul>
);

export default NoteList;
