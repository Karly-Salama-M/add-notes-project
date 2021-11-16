import React, { useState, useEffect } from "react";
import '../App.css'
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const Note = (props) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalTitle, setModalTitle] = useState();
    const [modalText, setModalText] = useState();
    const [modalDelete, setModalDelete] = useState();

    const {
        notes, setNotes
    } = props;

    useEffect(() => {
        console.log(modalTitle)
    }, [modalTitle]);


    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleSaveNote = () => {
        if (modalTitle === "") {
            setModalTitle(props.title)
        }
        if (modalText === "") {
            setModalText(props.text)
        }
        const savedNote = {
            title: modalTitle,
            text: modalText,
            date: new Date(),
        }
        let index = notes.findIndex(oldObject => oldObject.text == props.text)
        console.log(notes[index])
        const newArrayNotes = [...notes];
        newArrayNotes[index] = savedNote;
        setNotes(newArrayNotes);

        closeModal()
    }

    const handleModalTitle = (e) => {
        setModalTitle(e.target.value);
    }

    const handleModalText = (e) => {
        setModalText(e.target.value);
    }

    const handleDeleteNote = (e) => {
        const windowConfirm = window.confirm("Are you sure you want to delete the note?");
        if (windowConfirm) {
            let newNewArray = notes.filter((note) => {
                return note.text !== e.target.value
            })  
            setNotes(newNewArray);
        }
    }

    return (

        <div className='note-card' >
            <div>
                <h3 className="note-title">{props.title}</h3>
                <p className="note-date">23-05-2022</p>
                <div className="note-text">{props.text}</div>
            </div>
            <div className="control-container">
                <button className="edit-btn" onClick={openModal}>Edit</button>
                <button className="delete-btn" onClick={handleDeleteNote} value={props.text} >Delete</button>
            </div>
            <div className="modal-container">
                <button onClick={openModal}>Open Note</button>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    <button onClick={closeModal}>close</button>
                    <div>
                        <div>
                            <textarea 
                            className="note-title note-title-modal" 
                            onChange={handleModalTitle}>
                            {props.title}
                            </textarea>
                            <p className="note-date">23-5-2022</p>
                            <textarea 
                            className="note-text note-text-modal" 
                            onChange={handleModalText}>
                            {props.text}
                            </textarea>
                            <button className="save-btn" onClick={handleSaveNote}>Save</button>
                        </div>
                    </div>

                </Modal>
            </div>
        </div>
    )
}

export default Note;