import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <main className="container">
      <TaskInput tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} />
    </main>
  );
}

export default App;
