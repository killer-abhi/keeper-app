import React from "react";

import './css/note.css';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
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
            <button onClick={handleClick}>
                {/* <DeleteForeverIcon /> */}
                <DeleteSweepIcon/>
            </button>
        </div>
    )
}
export default Note;