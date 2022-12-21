import React, { useState } from 'react';

//Components

import Header from './components/Header'; 
import Footer from './components/Footer'; 
import Note from './components/Note'; 
import AddNote from "./components/AddNote";

// css files

import './App.css';


function App(){

    const [notes,setNotes]=useState([]);
    function NewNote(note){
        setNotes(prevNotes=>{
            return [...prevNotes,note];
        })
    }
    function deleteNote(id){
        setNotes(prevNotes=>{
            return prevNotes.filter((noteItem,index)=>{
                return index!==id;
            })
        })
    }

    function createNote(noteItem){
        return(
            <Note key={noteItem.key} title={noteItem.title} content={noteItem.content} />
        )
    };

    return(
        <div className="App">
            <Header />
            <AddNote onAdd={NewNote} />
            {notes.map((noteItem,index)=>{
                return <Note id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />
            })}
            <Footer />
        </div>
    )
}

export default App;
