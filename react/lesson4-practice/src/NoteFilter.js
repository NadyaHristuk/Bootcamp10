import React from "react";

const NoteFilter = ({ filter, onFilterChange }) => (
  <input type="text" value={filter} onChange={onFilterChange} autoFocus />
);

export default NoteFilter;
