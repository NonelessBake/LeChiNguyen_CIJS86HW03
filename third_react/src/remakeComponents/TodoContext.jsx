import { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([
    {
      id: crypto.randomUUID(),
      taskName: "Pytago",
      completed: false,
    },
    {
      id: crypto.randomUUID(),
      taskName: "Halao",
      completed: false,
    },
    {
      id: crypto.randomUUID(),
      taskName: "Dispatch",
      completed: false,
    },
  ]);
  const [inputTask, setInputTask] = useState("");
  const onChangeInput = (e) => setInputTask(e.target.value);
  const onAddNewTask = () => {
    if (inputTask === "") alert("New task is empty");
    else {
      let checked = false;
      taskList.forEach((task) => {
        if (task.taskName.toLowerCase() === inputTask.toLowerCase())
          checked = true;
      });
      if (checked) alert("Task already exists");
      else {
        setTaskList((prev) => [
          ...prev,
          { id: crypto.randomUUID, taskName: inputTask, completed: false },
        ]);
      }
    }
    setInputTask("");
  };
  const [status, setStatus] = useState("all");
  const onChangeShowStatus = (showStatus) => {
    return setStatus(showStatus);
  };
  const taskByStatus =
    status != "all"
      ? status === "active"
        ? taskList.filter((task) => task.completed === false)
        : taskList.filter((task) => task.completed === true)
      : taskList;
  const onCompleted = (id, completed) =>
    setTaskList((prev) =>
      prev.map((task) => {
        if (task.id === id) return { ...task, completed };
        return task;
      })
    );
  const deleteTask = (id) => {
    return setTaskList((prev) => prev.filter((task) => task.id !== id));
  };
  return (
    <TodoContext.Provider
      value={{
        inputTask,
        onChangeInput,
        taskByStatus,
        onAddNewTask,
        status,
        onChangeShowStatus,
        deleteTask,
        onCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
