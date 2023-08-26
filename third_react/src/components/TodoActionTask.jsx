import { useContext } from "react";
import { TodoContext, TodoUpdateContext } from "./TodoContext";

function TodoActionTask() {
  const { status } = useContext(TodoContext);
  const { onAddNewTask, onChangeStatus } = useContext(TodoUpdateContext);

  return (
    <div id="task-actions-container">
      <ul className="task-actions">
        <li
          id="show-all"
          className={`select-status ${status === "all" && "all"}`}
          onClick={() => {
            onChangeStatus("all");
          }}
        >
          All
        </li>
        <li
          id="show-active"
          className={`select-status ${status === "active" && "active"}`}
          onClick={() => {
            onChangeStatus("active");
          }}
        >
          Active
        </li>
        <li
          id="show-completed"
          className={`select-status ${status === "completed" && "completed"}`}
          onClick={() => {
            onChangeStatus("completed");
          }}
        >
          Completed
        </li>
      </ul>
      <button type="button" className="add-task" onClick={onAddNewTask}>
        Add
      </button>
    </div>
  );
}

export default TodoActionTask;
