function TodoTask(newProps) {
  const { task, onCompleted, onDelete } = newProps;
  const { id, taskName, completed } = task;
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
