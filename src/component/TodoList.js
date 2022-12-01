import React from "react";
import Item from "./Item";
import "./TodoList.css";

function TodoList(props) {
  return (
    <div>
      <h1 className="title">Todo List</h1>
      <div className="prevBox">React를 배워봅시다.</div>
      {props.todos.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
}
export default TodoList;
