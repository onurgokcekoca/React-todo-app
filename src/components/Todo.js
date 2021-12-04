import React from "react";

function Todo({ todo, setTodoList, todoList }) {
  const deleteButton = () => {
    setTodoList(todoList.filter((el) => el.id !== todo.id));
  };

  const checkButton = () => {
      setTodoList(todoList.map(el => {
          if(el.id === todo.id){
              return{...el, completed : !el.completed}
          }
          return el;
      }))
  };
  return (
    <div className={`todo-item-div ${todo.completed ? "completed" : ""}`}>
      <li className="todo-item">{todo.value}</li>
      <div>
        <button onClick = {checkButton} className="complete">
          <i className="fas fa-check"></i>
        </button>
        <button onClick={deleteButton} className="trash">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default Todo;
