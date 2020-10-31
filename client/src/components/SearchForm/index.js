import React from "react";
//import "./style.css";

// This file exports the Input, TextArea, and FormBtn components

export function InputOne(props) {
  return (
    <div className="form-group">
      <label htmlFor="input_one">Author:</label>
      <input className="form-control" style={{ width: "80%", marginLeft: 130 }} {...props} />
    </div>
  );
}

export function InputTwo(props) {
  return (
    <div className="form-group">
      <label htmlFor="input_two">Title:</label>
      <input className="form-control" style={{ width: "80%", marginLeft: 130 }} {...props} />
    </div>
  );
}

export function InputThree(props) {
  return (
    <div className="form-group">
      <label htmlFor="input_three">Subject:</label>
      <input className="form-control" style={{ width: "80%", marginLeft: 130 }} {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function SubmitBtn(props) {
  return (
    <button className="btn btn-primary mt-3" style = {{ display: 'flex', justifyContent: 'center' }} {...props} >
      {props.children}
    </button>
  );
}