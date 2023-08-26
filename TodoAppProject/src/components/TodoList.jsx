import { useContext } from "react";
import { TodoContext } from "../context/TodoContextProvider";
import TodoTask from "./TodoTask";
import "../assets/style/todoList.css";
const TodoList = () => {
  const { newTodoList } = useContext(TodoContext);
  return (
    <div className="todo-list-container">
      {newTodoList.map((task) => (
        <TodoTask task={task} key={task.id} />
      ))}
    </div>
  );
};

export default TodoList;
