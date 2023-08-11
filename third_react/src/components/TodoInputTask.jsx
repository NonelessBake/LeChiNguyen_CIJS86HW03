function TodoInputTask(newProps) {
  const { inputTask, onChangeHandler } = newProps;
  return (
    <div className="enter-task-container">
      <input
        value={inputTask}
        type="text"
        placeholder="Enter new task"
        id="enter-task"
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default TodoInputTask;
