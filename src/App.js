import "./style.css";
import Add from "./components/Add";
import Form from "./components/Form";
import React, { useState, useEffect } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filteredTodo, setFilteredTodo] = useState("all");
  const [filtredTodoList, setFiltredTodoList] = useState([]);

  useEffect(() => {
    filtred();
  }, [todoList, filteredTodo]);

  const filtred = () => {
    switch (filteredTodo) {
      case "Completed":
        setFiltredTodoList(todoList.filter((item) => item.completed === true));
        break;
      case "Uncompleted":
        setFiltredTodoList(todoList.filter((item) => item.completed === false));
        break;
      default:
        setFiltredTodoList(todoList);
        break;
    }
  };

  return (
    <div className="app">
      <Add
        todoList={todoList}
        setTodoList={setTodoList}
        inputValue={inputValue}
        setInputValue={setInputValue}
        setFilteredTodo={setFilteredTodo}
      />
      <Form
        filtredTodoList={filtredTodoList}
        todoList={todoList}
        setTodoList={setTodoList}
      />
    </div>
  );
}

export default App;
