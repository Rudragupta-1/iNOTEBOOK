import React, { useContext,useState } from "react";
import noteContext from "../context/notes/noteContext";
const AddNote = () => {
    const context=useContext(noteContext);
    const {addNote}=context;
    const[note,setNote]=useState({title:"",description:"",tag:""})
    const handleClick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setNote({title:"",description:"",tag:""})
    }
    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
  return (  
    <div className="container my-3">
        <h2>Add a Note</h2>
      <form className="my-3">
        <div className="form-group mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={note.title}
            onChange={onChange}
          />
          
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={note.description}
            onChange={onChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Tag</label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            value={note.tag}
            onChange={onChange}
          />
        </div>
        <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>
          Add Note
        </button>
      </form>
    </div>
  )
}

export default AddNote