import React from "react";

import './css/note.css';

function Note(props){
    function handleClick(){
        props.onDelete(props.id);
    }
    return(
        <div className="note">
            <div id="note-title">
                {props.title}
            </div>
            <div id="note-content">
                {props.content}
            </div>
            <button onClick={handleClick}>DELETE</button>
        </div>
    )
}

export default Note;