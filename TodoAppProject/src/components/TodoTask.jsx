import { useContext } from "react";
import { TodoContext, TodoContextUpdate } from "../context/TodoContextProvider";
import "../../assets/style/todoTask.css";
const TodoTask = (newProps) => {
  const { task } = newProps;
  const { id, taskName, completed } = task;
  const { status } = useContext(TodoContext);
  const { onDeleteTask, onCompleted } = useContext(TodoContextUpdate);
  return (
    <>
      <li className="task-container">
        <div className="task">
          <input
            className="check-box"
            id="check"
            checked={completed}
            type="checkbox"
            onChange={(e) => {
              onCompleted(id, e.target.checked);
            }}
          />
          <div className={`name-task ${completed ? "task-completed" : null}`}>
            {taskName}
          </div>
        </div>
        {status === "completed" ? (
          <button className="delete-task" onClick={() => onDeleteTask(id)}>
            <i className="uil uil-trash"></i>
          </button>
        ) : null}
      </li>
    </>
  );
};

export default TodoTask;
