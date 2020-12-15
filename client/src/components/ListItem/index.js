import React, { useState } from "react";
import "./style.css";
import Buttons from "../Buttons";

function ListItems(props) {
  const [showEditBlock, setEditBLock] = useState(false);

  let text = "";
  const inputText = (event) => {
    text = event.target.value;
  };

  const setFlag = () => {
    setEditBLock(!showEditBlock);
  };

  const sendText = () => {
    setEditBLock(!showEditBlock);
    props.callSave(text);
  };

  const editBlock = (
    <div className="editOption">
      <input type="text" className="editTask" autoFocus onChange={inputText} />
      <button className="saveTask" onClick={sendText}>
        save
      </button>
    </div>
  );

  const container = (
    <div className="container">
      <div className="list">{props.elementValue}</div>
      <Buttons callEdit={setFlag} callDelete={props.callDelete} />
    </div>
  );

  return showEditBlock ? editBlock : container;
}

export default ListItems;
