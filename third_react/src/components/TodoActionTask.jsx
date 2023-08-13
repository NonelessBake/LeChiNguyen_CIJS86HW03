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
          className="select-status"
          style={{
            backgroundColor: status === "all" && "white",
            color: status === "all" && "black",
          }}
          onClick={() => {
            onChangeStatus("all");
          }}
        >
          All
        </li>
        <li
          id="show-active"
          className="select-status"
          style={{
            backgroundColor: status === "active" && "white",
            color: status === "active" && "black",
          }}
          onClick={() => {
            onChangeStatus("active");
          }}
        >
          Active
        </li>
        <li
          id="show-completed"
          className="select-status"
          style={{
            backgroundColor: status === "completed" && "white",
            color: status === "completed" && "black",
          }}
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
