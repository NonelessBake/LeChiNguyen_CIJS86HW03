import { useState } from "react";
import "../assets/style/style.css";
import TodoActionTask from "./TodoActionTask";
import TodoInputTask from "./TodoInputTask";
import TodoTaskList from "./TodoTaskList";

export const Status = {
  All: "all",
  Active: "active",
  Completed: "completed",
};

function TodoApp() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const [inputTask, setInputTask] = useState("");
  const [status, setStatus] = useState(Status.All);
  const onChangeHandler = (e) => {
    setInputTask(e.target.value);
  };

  const [todos, setTodos] = useState([
    { id: Math.random(), taskName: "Git Bash", status: Status.Active },
    { id: Math.random(), taskName: "CSS", status: Status.Active },
    { id: Math.random(), taskName: "Java", status: Status.Active },
  ]);

  const onAddNewTask = () => {
    if (inputTask === "") alert("Task is empty");
    else {
      let checked = true;
      todos.forEach((item) => {
        if (item.taskName === inputTask) {
          checked = false;
        }
      });
      if (!checked) {
        alert("Task already exists");
        setInputTask("");
        return;
      }
      setTodos((prev) => [
        ...prev,
        { id: Math.random(), taskName: inputTask, status: Status.Active },
      ]);
      setInputTask("");
    }
  };

  const onCompleted = (id) => {
    let index = todos.findIndex((item) => item.id === id);
    let temp = [...todos];
    temp[index].status =
      temp[index].status === Status.Completed
        ? Status.Active
        : Status.Completed;
    setTodos(temp);
  };

  const onDelete = (id) => {
    let index = todos.findIndex((item) => item.id === id);
    todos[index].status = Status.Deleted;
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeStatus = (status) => {
    setStatus(status);
  };

  return (
    <div className="form-container">
      <form id="to-do-form" onSubmit={handleSubmit}>
        <h2 id="tittle">TO DO LIST</h2>
        <TodoInputTask value={inputTask} onChangeHandler={onChangeHandler} />
        <TodoActionTask
          onAddNewTask={onAddNewTask}
          onChangeStatus={onChangeStatus}
        />
        <TodoTaskList
          todos={
            status !== Status.All
              ? todos.filter((item) => item.status === status)
              : todos
          }
          onCompleted={onCompleted}
          onDelete={onDelete}
        />
      </form>
    </div>
  );
}

export default TodoApp;
