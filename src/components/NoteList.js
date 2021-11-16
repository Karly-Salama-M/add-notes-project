import React from 'react';
import Note from './Note';
import '../App.css';

const NoteList = (props) => { 

    const {
        notes, setNotes
    } = props;

    let everyNote = props.notes.map((note, index) => {
        return <Note key={index} title={note.title} text={note.text} notes={notes} setNotes={setNotes}/>
    })
    
    return (
     <div className="note-list-container">
        {everyNote}
    </div>
    )
}

export default NoteList;
