import React from 'react';

const Note = ({ text, completed, onDelete, onToggleCompleted }) => (
  <div
    style={{
      minWidth: 320,
      boxShadow:
        '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
      marginBottom: 32,
      marginRight: 8,
      marginLeft: 8,
      padding: 8,
      flex: '0 0 calc(33.3333% - 16px)',
      backgroundColor: '#fff',
    }}
  >
    <p style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {text}
    </p>

    <hr />
    <footer
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <label style={{ cursor: 'pointer' }}>
        Completed
        <input
          type="checkbox"
          checked={completed}
          onChange={onToggleCompleted}
        />
      </label>

      <button onClick={onDelete}>Delete</button>
    </footer>
  </div>
);

export default Note;
