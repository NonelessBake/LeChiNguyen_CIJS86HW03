import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoShow from "./TodoShow";
import "../assets/style/todoApp.css";
import { TodoContextUpdate } from "../context/TodoContextProvider";
import { useContext } from "react";
const TodoApp = () => {
  const { onDeleteAll } = useContext(TodoContextUpdate);
  return (
    <div className="todo-container">
      <h1 style={{ marginBottom: 30, fontSize: 30 }}>#todo</h1>
      <TodoShow />
      <TodoInput />
      <TodoList />
      <div className="delete-all-btn">
        <button onClick={onDeleteAll}>Delete All</button>
      </div>
    </div>
  );
};

export default TodoApp;
