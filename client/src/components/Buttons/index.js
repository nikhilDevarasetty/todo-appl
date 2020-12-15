import React from "react";
import "./style.css";

function buttons(props) {
  return (
    <div className="buttons">
      <button className="edit" onClick={props.callEdit}>
        edit
      </button>
      <button className="delete" onClick={props.callDelete}>
        delete
      </button>
    </div>
  );
}

export default buttons;
