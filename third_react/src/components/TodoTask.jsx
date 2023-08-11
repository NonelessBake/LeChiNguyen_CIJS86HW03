import { useContext } from "react";
import { TaskContext } from "./TodoApp";
function TodoTask(newProps) {
  const { task } = newProps;
  const { id, taskName, completed } = task;
  const { onDelete, onCompleted } = useContext(TaskContext);
  return (
    <>
      <li className="task">
        <div className="task-container">
          <input
            id="check"
            checked={completed}
            type="checkbox"
            onChange={(e) => {
              onCompleted(id, e.target.checked);
            }}
          />
          <span className="name-task">{taskName}</span>
        </div>
        <button className="delete-task" onClick={() => onDelete(id)}>
          Delete
        </button>
      </li>
    </>
  );
}

export default TodoTask;
