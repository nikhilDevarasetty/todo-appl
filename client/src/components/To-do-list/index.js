import React from "react";
import ListItem from "../ListItem";

const To_Do_List = (props) => {
  return (
    <>
      {props.listItems.map((element, index) => {
        return (
          <ListItem
            key={element.id}
            elementValue={element.item}
            callSave={(text) => props.callSave(index, text)}
            callEdit={props.callEdit}
            callDelete={() => props.callDelete(index)}
          />
        );
      })}
    </>
  );
};

export default To_Do_List;
