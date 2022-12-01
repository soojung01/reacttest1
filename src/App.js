import React, { useState } from "react";
import "./App.css";
import TodoList from "./component/TodoList";

function App() {
  const [contents, setContents] = useState("");
  const [todos, setTodos] = useState([]);

  const onChangeHandler = (e) => {
    setContents(e.target.value);
  };
  const onClickHandler = () => {
    console.log(contents);
    setTodos([...todos, contents]);
  };

  return (
    <div className="container">
      <div className="myBox">
        <input
          className="myInput"
          value={contents}
          type="text"
          onChange={onChangeHandler}
        ></input>
        <button className="myBtn" onClick={onClickHandler}>
          추가하기
        </button>
      </div>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
