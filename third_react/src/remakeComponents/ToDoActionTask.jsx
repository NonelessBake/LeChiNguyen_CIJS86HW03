import { useContext } from "react";
import { TodoContext } from "./TodoContext";

const ToDoActionTask = () => {
  const { onAddNewTask, status, onChangeShowStatus } = useContext(TodoContext);
  return (
    <div>
      <div>
        <button onClick={() => onChangeShowStatus("all")}>All</button>
        <button onClick={() => onChangeShowStatus("active")}>Active</button>
        <button onClick={() => onChangeShowStatus("completed")}>
          Completed
        </button>
      </div>
      <div>
        <button onClick={onAddNewTask}>Add Task</button>
      </div>
    </div>
  );
};

export default ToDoActionTask;
