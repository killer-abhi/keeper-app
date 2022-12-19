import React, { useState } from "react";
import "./css/addnote.css";

function AddNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
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
  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" value={note.title} placeholder="Title" />
        <textarea
          name="content" onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3" 
          />

        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default AddNote;