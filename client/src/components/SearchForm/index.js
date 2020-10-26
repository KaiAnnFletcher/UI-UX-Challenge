import React from "react";
//import "./style.css";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
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
    <button className="btn btn-primary mt-3" style = {{ float: "right", marginRight: 120, marginTop: -22}} {...props} >
      {props.children}
    </button>
  );
}