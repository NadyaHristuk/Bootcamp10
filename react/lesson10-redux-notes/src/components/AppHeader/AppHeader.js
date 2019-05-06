import React from 'react';
import NoteFilter from '../NoteFilter';

const AppHeader = () => (
  <header
    style={{
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: 8,
      marginBottom: 32,
      backgroundColor: '#fff',
      boxShadow:
        '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
    }}
  >
    <NoteFilter />
  </header>
);

export default AppHeader;
