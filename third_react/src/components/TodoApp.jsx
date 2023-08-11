import { useState } from "react";
import "../assets/style/style.css";
import TodoActionTask from "./TodoActionTask";
import TodoInputTask from "./TodoInputTask";
import TodoTaskList from "./TodoTaskList";
function TodoApp() {
  const [todoList, setTodoList] = useState([
    { id: crypto.randomUUID(), taskName: "JavaScript", completed: false },
    { id: crypto.randomUUID(), taskName: "Github", completed: false },
    { id: crypto.randomUUID(), taskName: "DOM", completed: false },
    { id: crypto.randomUUID(), taskName: "Loop", completed: true },
  ]);

  const [inputTask, setInputTask] = useState("");
  const onChangeHandler = (e) => {
    setInputTask(e.target.value);
  };

  const onAddNewTask = () => {
    if (inputTask === "") {
      alert("Task cannot be empty");
    } else {
      let checked = true;
      todoList.forEach((item) => {
        if (inputTask === item.taskName) checked = false;
      });
      if (checked === false) alert("Task is already existed");
      else
        setTodoList((prev) => [
          ...prev,
          { id: crypto.randomUUID(), taskName: inputTask, completed: false },
        ]);
    }
    setInputTask("");
  };

  const onCompleted = (id, completed) => {
    setTodoList((prev) =>
      prev.map((task) => {
        if (id === task.id) return { ...task, completed };
        return task;
      })
    );
  };

  const [status, setStatus] = useState("all");
  const onChangeStatus = (status) => {
    setStatus(status);
  };

  const onDelete = (id) => {
    setTodoList((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div className="form-container">
      <form id="to-do-form">
        <h2 id="tittle">TO DO LIST</h2>
        <TodoInputTask
          inputTask={inputTask}
          onChangeHandler={onChangeHandler}
        />
        <TodoActionTask
          status={status}
          onAddNewTask={onAddNewTask}
          onChangeStatus={onChangeStatus}
        />

        <TodoTaskList
          todoList={
            status !== "all"
              ? status === "active"
                ? todoList.filter((task) => task.completed === false)
                : todoList.filter((task) => task.completed === true)
              : todoList
          }
          onCompleted={onCompleted}
          onDelete={onDelete}
        />
      </form>
    </div>
  );
}

export default TodoApp;
