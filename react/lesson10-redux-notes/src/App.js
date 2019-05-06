import React from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import NoteEditor from './components/NoteEditor';
import NoteList from './components/NoteList';

const App = () => (
  <>
    <AppHeader />
    <NoteEditor />
    <NoteList />
  </>
);

export default App;
