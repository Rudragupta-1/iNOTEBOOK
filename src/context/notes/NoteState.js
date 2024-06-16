import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial=[];
  const[notes,setNotes]=useState(notesInitial)
  const host = "http://localhost:5000";
  const getNotes=async ()=>{
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY2YzdiOGNlNmFlNjk4NjI2MTE0ZDg1In0sImlhdCI6MTcxODQ2MjEzOH0.4cg1oPX--iUu31b5d7S-xiGgiP2ThfSw1M8nngcV2cc",
      },
    });
    const json=await  response.json();
    setNotes(json);
  }

  //Add a note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY2YzdiOGNlNmFlNjk4NjI2MTE0ZDg1In0sImlhdCI6MTcxODQ2MjEzOH0.4cg1oPX--iUu31b5d7S-xiGgiP2ThfSw1M8nngcV2cc",
      },
      body: JSON.stringify({title,description,tag}),
    });
    const note=await response.json();
    setNotes(notes.concat(note));
    props.showAlert('Added Successfully','success')
  };
  // Delete a note
  const deleteNote =async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY2YzdiOGNlNmFlNjk4NjI2MTE0ZDg1In0sImlhdCI6MTcxODQ2MjEzOH0.4cg1oPX--iUu31b5d7S-xiGgiP2ThfSw1M8nngcV2cc",
      },
    });
    const json=await response.json();
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //Edit a note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY2YzdiOGNlNmFlNjk4NjI2MTE0ZDg1In0sImlhdCI6MTcxODQ2MjEzOH0.4cg1oPX--iUu31b5d7S-xiGgiP2ThfSw1M8nngcV2cc",
      },
      body: JSON.stringify({title,description,tag}),
    });
    const json=await response.json();
    let newNotes =JSON.parse(JSON.stringify(notes));
    for (let i = 0; i < newNotes.length; i++) {
      const element = newNotes[i];
      if (element._id === id) {
        newNotes[i].title = title;
        newNotes[i].description = description;
        newNotes[i].tag = tag;
      break;
      }
    }
    setNotes(newNotes);
    props.showAlert('Updated Successfully','success')
  };

  return (
    <NoteContext.Provider
      value={{ notes, deleteNote, getNotes,editNote, addNote, setNotes ,deleteNote}}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
