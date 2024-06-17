import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  return (
    <div className="col-md-3 d-flex">
      <div className="note-card my-3">
        <div className="note-card-body">
          <div className="card-icon-container">
            <h5 className="note-card-title">{note.title}</h5>
            <div className="icon-spacing">
              <i className="fa-solid fa-trash note-card-icons mx-2" onClick={() => { deleteNote(note._id); props.showAlert('Deleted Successfully', 'success'); }}></i>
              <i className="fa-regular fa-pen-to-square note-card-icons mx-2" onClick={() => { updateNote(note); }}></i>
            </div>
          </div>
          <p className="note-card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
