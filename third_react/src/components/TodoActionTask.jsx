function TodoActionTask(newProps) {
  const { onAddNewTask, onChangeStatus } = newProps;
  return (
    <div id="task-actions-container">
      <ul className="task-actions">
        <li
          id="show-all"
          className="select-status"
          onClick={() => {
            onChangeStatus("all");
          }}
        >
          All
        </li>
        <li
          id="show-active"
          className="select-status"
          onClick={() => {
            onChangeStatus("active");
          }}
        >
          Active
        </li>
        <li
          id="show-completed"
          className="select-status"
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
