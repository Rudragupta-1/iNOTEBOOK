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
      "_id": "666c81f847992d21a058cac6",
      "user": "666c7b8ce6ae698626114d85",
      "title": "My First Note",
      "description": "This is a note description.",
      "tag": "personal",
      "date": "2024-06-14T17:46:32.285Z",
      "__v": 0
    },{
      "_id": "666c81f847992d21a058cac6",
      "user": "666c7b8ce6ae698626114d85",
      "title": "My First Note",
      "description": "This is a note description.",
      "tag": "personal",
      "date": "2024-06-14T17:46:32.285Z",
      "__v": 0
    },{
      "_id": "666c81f847992d21a058cac6",
      "user": "666c7b8ce6ae698626114d85",
      "title": "My First Note",
      "description": "This is a note description.",
      "tag": "personal",
      "date": "2024-06-14T17:46:32.285Z",
      "__v": 0
    },{
      "_id": "666c81f847992d21a058cac6",
      "user": "666c7b8ce6ae698626114d85",
      "title": "My First Note",
      "description": "This is a note description.",
      "tag": "personal",
      "date": "2024-06-14T17:46:32.285Z",
      "__v": 0
    },{
      "_id": "666c81f847992d21a058cac6",
      "user": "666c7b8ce6ae698626114d85",
      "title": "My First Note",
      "description": "This is a note description.",
      "tag": "personal",
      "date": "2024-06-14T17:46:32.285Z",
      "__v": 0
    },{
      "_id": "666c81f847992d21a058cac6",
      "user": "666c7b8ce6ae698626114d85",
      "title": "My First Note",
      "description": "This is a note description.",
      "tag": "personal",
      "date": "2024-06-14T17:46:32.285Z",
      "__v": 0
    },{
      "_id": "666c81f847992d21a058cac6",
      "user": "666c7b8ce6ae698626114d85",
      "title": "My First Note",
      "description": "This is a note description.",
      "tag": "personal",
      "date": "2024-06-14T17:46:32.285Z",
      "__v": 0
    }
  ]
  const[notes,setNotes]=useState(notesInitial);
  return (
    <NoteContext.Provider value={{notes,setNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
