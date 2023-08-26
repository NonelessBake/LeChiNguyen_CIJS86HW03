import { createContext, useState } from "react";

export const TodoContext = createContext();
export const TodoContextUpdate = createContext();
const TodoContextProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const [inputTask, setInputTask] = useState("");

  const handleSubmit = (e) => e.preventDefault();
  const handleChange = (e) => setInputTask(e.target.value);

  const onAddNewTask = () => {
    if (inputTask === "") {
      alert("Task cannot be empty");
    } else {
      let checked = true;
      todoList.forEach((item) => {
        if (inputTask.toLowerCase() === item.taskName.toLowerCase())
          checked = false;
      });
      if (checked === false) alert("Task already exists");
      else {
        setTodoList((prev) => [
          ...prev,
          { id: crypto.randomUUID(), taskName: inputTask, completed: false },
        ]);
      }
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

  const onDeleteTask = (id) => {
    setTodoList((prev) => prev.filter((item) => item.id !== id));
  };
  const onDeleteAll = () => setTodoList([]);

  const newTodoList =
    status !== "all"
      ? status === "active"
        ? todoList.filter((task) => task.completed === false)
        : todoList.filter((task) => task.completed === true)
      : todoList;

  return (
    <TodoContext.Provider value={{ inputTask, newTodoList, status }}>
      <TodoContextUpdate.Provider
        value={{
          handleSubmit,
          handleChange,
          onAddNewTask,
          onDeleteTask,
          onChangeStatus,
          onDeleteAll,
          onCompleted,
        }}
      >
        {children}
      </TodoContextUpdate.Provider>
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
