import React, { useState } from 'react';



const Form = (props) => {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');


    const handleTitleChange = (title) => {
        setTitle(title);
    }
    const handleTextChange = (text) => {
        setText(text);
    }

   
    return (
        <div>
            <div className="header">
                <h2 className="">Notes</h2>
                <form className="form-container" onSubmit={(e) => {
                    e.preventDefault();
                    props.addNoteHandler(title, text);
                    setTitle('');
                    setText('');

                }}>
                    <input
                    className="title-input" 
                    type="text" 
                    name="title" 
                    onChange={(e) => {
                        handleTitleChange(e.target.value);
                    }} 
                    value={title} 
                    placeholder="Title"/>
                    <div>
                        
                        <textarea
                            className="text-area-container"
                            id="textArea"
                            rows="7"
                            onChange={(e) => {
                                handleTextChange(e.target.value);
                            }} 
                            placeholder="Enter text"
                            value={text}
                        >
                        </textarea>
                    </div>

                    <button type="submit" className="button-create" >Create</button>
                </form>
            </div>

        </div>
    )
}

export default Form;

