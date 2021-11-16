import React from 'react';
import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import NoteList from './components/NoteList';


const App = () => {

  const [notes, setNotes] = useState([]);

  const addNoteHandler = (title, text) => {
    setNotes((prevSetNotes) => {
      return [
        {
          title: title,
          text: text,
          date: new Date(),
        },
        ...prevSetNotes,
      ];
    });
  };

  return (

    <div className="App">
      <Form addNoteHandler={addNoteHandler} />
      <NoteList notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
