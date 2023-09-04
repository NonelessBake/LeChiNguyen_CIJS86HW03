import { useContext } from "react";
import { TodoContext, TodoContextUpdate } from "../context/TodoContextProvider";
import "../../assets/style/todoInput.css";
const TodoInput = () => {
  const { inputTask } = useContext(TodoContext);
  const { handleSubmit, handleChange, onAddNewTask } =
    useContext(TodoContextUpdate);

  return (
    <div className="todo-input-container">
      <form action="" onSubmit={handleSubmit} className="todo-input">
        <input
          type="text"
          placeholder="Add task"
          onChange={handleChange}
          value={inputTask}
        />
        <button type="submit" onClick={onAddNewTask} className="add-task-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
