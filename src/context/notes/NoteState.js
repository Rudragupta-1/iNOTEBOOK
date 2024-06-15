import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial=[
    {
      "_id": "666c81f847992d21a058cac6",
      "user": "666c7b8ce6ae698626114d85",
      "title": "My First Note",
      "description": "This is a note description.",
      "tag": "personal",
      "date": "2024-06-14T17:46:32.285Z",
      "__v": 0
    },{
      "_id": "666c81f847992d21a058cac7",
      "user": "666c7b8ce6ae698626114d85",
      "title": "My First Note",
      "description": "This is a note description.",
      "tag": "personal",
      "date": "2024-06-14T17:46:32.285Z",
      "__v": 0
    },{
      "_id": "666c81f847992d21a058cac8",
      "user": "666c7b8ce6ae698626114d85",
      "title": "My First Note",
      "description": "This is a note description.",
      "tag": "personal",
      "date": "2024-06-14T17:46:32.285Z",
      "__v": 0
    },{
      "_id": "666c81f847992d21a058cac9",
      "user": "666c7b8ce6ae698626114d85",
      "title": "My First Note",
      "description": "This is a note description.",
      "tag": "personal",
      "date": "2024-06-14T17:46:32.285Z",
      "__v": 0
    },{
      "_id": "666c81f847992d21a058cac0",
      "user": "666c7b8ce6ae698626114d85",
      "title": "My First Note",
      "description": "This is a note description.",
      "tag": "personal",
      "date": "2024-06-14T17:46:32.285Z",
      "__v": 0
    },{
      "_id": "666c81f847992d21a058cac1",
      "user": "666c7b8ce6ae698626114d85",
      "title": "My First Note",
      "description": "This is a note description.",
      "tag": "personal",
      "date": "2024-06-14T17:46:32.285Z",
      "__v": 0
    },{
      "_id": "666c81f847992d21a058cac2",
      "user": "666c7b8ce6ae698626114d85",
      "title": "My First Note",
      "description": "This is a note description.",
      "tag": "personal",
      "date": "2024-06-14T17:46:32.285Z",
      "__v": 0
    },
  ]
  const[notes,setNotes]=useState(notesInitial);

  //Add a note
  const addNote=(title,description,tag)=>{
    console.log("adding a new note");
    const note={
      "_id": "666c81f847992d21a058cacy25",
      "user": "666c7b8ce6ae698626114d855",
      "title": title,
      "description": description,
      "tag":tag,
      "date": "2024-07-14T17:46:32.285Z",
      "__v": 0
    }
    setNotes(notes.concat(note))
  }
  // Delete a note
  const deleteNote=()=>{

  }
  //Edit a note
const editNote=()=>{

}

  return (
    <NoteContext.Provider value={{notes,addNote,setNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
