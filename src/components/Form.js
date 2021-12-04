import React from "react";
import Todo from "./Todo";

function Form({ todoList, setTodoList, filtredTodoList }) {
  return (
    <div>
      <ul className="todo-list-ul">
        {filtredTodoList.map((todo) => (
          <Todo
            todoList={todoList}
            setTodoList={setTodoList}
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
}

export default Form;
