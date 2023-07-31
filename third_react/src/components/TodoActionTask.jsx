import { Status } from "./TodoApp";

function TodoActionTask(newProps) {
  const { onAddNewTask, onChangeStatus } = newProps;
  return (
    <div id="task-actions-container">
      <ul className="task-actions">
        <li
          id="show-all"
          className="select-status"
          onClick={() => {
            onChangeStatus(Status.All);
          }}
        >
          All
        </li>
        <li
          id="show-active"
          className="select-status"
          onClick={() => onChangeStatus(Status.Active)}
        >
          Active
        </li>
        <li
          id="show-completed"
          className="select-status"
          onClick={() => onChangeStatus(Status.Completed)}
        >
          Completed
        </li>
      </ul>
      <div className="add-task" onClick={onAddNewTask}>
        Add
      </div>
    </div>
  );
}

export default TodoActionTask;
