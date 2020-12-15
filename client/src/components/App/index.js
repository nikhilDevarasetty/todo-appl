import React, { useEffect, useState } from "react";
import "./style.css";
import To_do_list from "../To-do-list";
import Input from "../Input";
import Heading from "../Heading";

function App() {
  const [list, setList] = useState([]);

  const saveClick = (text) => {
    let tempList = [...list];
    const reqBody = {
      item: text,
    };
    fetch("http://localhost:9999/todo", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(reqBody),
    })
      .then((res) => res.json())
      .then((data) => {
        tempList.push(data);
        setList(tempList);
      });
    document.getElementById("task").value = "";
  };

  const deleteItem = (index) => {
    let tempList = [...list];
    const reqBody = { id: tempList[index].id };
    fetch("http://localhost:9999/todo", {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(reqBody),
    }).then((res) => {
      tempList.splice(index, 1);
      setList(tempList);
    });
  };

  const saveChange = (index, text) => {
    if (text.trim() === "") return;
    let tempList = [...list];
    const reqBody = { id: tempList[index].id, item: text };
    fetch("http://localhost:9999/todo", {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(reqBody),
    }).then((res) => {
      tempList[index].item = text;
      setList(tempList);
    });
  };

  useEffect(() => {
    fetch("http://localhost:9999/todo")
      .then((res) => res.json())
      .then((data) => {
        data.sort((a, b) => Number(a.id) - Number(b.id));
        setList(data);
      });
  }, []);

  return (
    <div id="main">
      <Heading className="heading" />
      <Input callSave={(text) => saveClick(text)} />
      <To_do_list
        listItems={list}
        callDelete={deleteItem}
        callSave={saveChange}
      />
    </div>
  );
}

export default App;
