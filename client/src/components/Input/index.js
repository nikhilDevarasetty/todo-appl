import React, { useState } from "react";
import "./style.css";

function Input(props) {
  const [text, setText] = useState("");

  const sendText = () => {
    props.callSave(text);
    setText("");
  };

  return (
    <div className="inputBlock">
      <input
        type="text"
        id="task"
        onChange={(event) => {
          setText(event.target.value);
        }}
        autoFocus
        placeholder="put in a toDo here"
      />
      <button id="btn" disabled={text.trim() === ""} onClick={sendText}>
        save
      </button>
    </div>
  );
}

export default React.memo(Input);
