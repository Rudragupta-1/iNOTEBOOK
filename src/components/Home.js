import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Home = () => {
  const context=useContext(noteContext);
  const {notes,setNotes}=context;
  return (
    <div>
      <h1>Add a Note</h1>
      <form>
        <div className="form-group my-3">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div>
        <h2>Your Notes</h2>
        {/* {notes.map((note)=>{
          return note.title;
        })} */}
      </div>
    </div>
  );
};

export default Home;
