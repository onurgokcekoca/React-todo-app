import React from "react";

function Add({
  setInputValue,
  inputValue,
  setTodoList,
  todoList,
  setFilteredTodo,
}) {
  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };
  const addTodoItem = (e) => {
    e.preventDefault();
    if (inputValue !== "") {
      setTodoList([
        ...todoList,
        { value: inputValue, completed: false, id: Math.random() * 1000 },
      ]);
    }
    setInputValue("");
  };
  const filtred = (e) => {
    setFilteredTodo(e.target.value);
  };

  return (
    <div className="add-home">
      <div>
        <div className="input-div">
          <input
            value={inputValue}
            onChange={onChangeHandler}
            className="todo-input"
          />
          <button onClick={addTodoItem}>+</button>
        </div>
        <div className="select-div">
          <select onChange={filtred}>
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Uncompleted">Uncompleted</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Add;
