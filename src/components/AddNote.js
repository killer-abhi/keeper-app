import React, { useState } from "react";
import "./css/addnote.css";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function AddNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isExpanded, setIsExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(event.target);

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  function handleExpand() {
    setIsExpanded(true);
  }
  return (
    <div>
      <form>
        {isExpanded && (
          <input onChange={handleChange} 
            name="title" 
            value={note.title} 
            placeholder="Title" 
            required
          />
        )}

        <textarea
          onClick={handleExpand}
          name="content" onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded?3:1}
          required
        />

        <Zoom in={isExpanded}>
        <button onClick={submitNote}>
          <AddIcon/>
        </button>
        </Zoom>
      </form>
    </div>
  );
}

export default AddNote;