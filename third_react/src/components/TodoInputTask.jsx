function TodoInputTask(newProps) {
  const { onChangeHandler, value } = newProps;
  return (
    <div className="enter-task-container">
      <input
        type="text"
        value={value}
        placeholder="Enter new task"
        id="enter-task"
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default TodoInputTask;
