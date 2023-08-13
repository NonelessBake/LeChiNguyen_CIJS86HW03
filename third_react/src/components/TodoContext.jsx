import { useState, useContext, createContext } from "react";

const TodoContext = createContext();
const TodoUpdateContext = createContext();

export const useTodo = () => useContext(TodoContext);
export const useTodoUpdate = () => useContext(TodoUpdateContext);

export const TodoProvider = ({ children }) => {
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

  const newTodoList =
    status !== "all"
      ? status === "active"
        ? todoList.filter((task) => task.completed === false)
        : todoList.filter((task) => task.completed === true)
      : todoList;

  return (
    <TodoContext.Provider value={{ status, inputTask, newTodoList }}>
      <TodoUpdateContext.Provider
        value={{
          onChangeHandler: onChangeHandler,
          onAddNewTask: onAddNewTask,
          onChangeStatus: onChangeStatus,
          onDelete: onDelete,
          onCompleted: onCompleted,
        }}
      >
        {children}
      </TodoUpdateContext.Provider>
    </TodoContext.Provider>
  );
};
