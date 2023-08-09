import { useState, useEffect } from "react";
import "./App.css";
import Calendar from "react-calendar";
import Clock from "./components/Clock";
import "react-calendar/dist/Calendar.css";

function App() {
  const [newDate, setNewDate] = useState(new Date());
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setNewDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timeInterval);
    };
  });
  return (
    <div className="container">
      <Clock newDate={newDate} setNewDate={setNewDate} />
      <Calendar value={newDate} />
    </div>
  );
}

export default App;
