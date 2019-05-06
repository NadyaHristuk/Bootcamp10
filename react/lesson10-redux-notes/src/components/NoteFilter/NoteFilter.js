import React from 'react';

const NoteFilter = ({ value = '', onChange = () => null }) => (
  <input
    value={value}
    onChange={e => onChange(e.target.value)}
    type="text"
    placeholder="Search..."
    style={{
      marginLeft: 4,
      marginRight: 4,
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      width: 250,
      font: 'inherit',
      border: '1px solid #212121',
      cursor: 'text',
      padding: 8,
      outline: 'none',
    }}
  />
);

export default NoteFilter;
