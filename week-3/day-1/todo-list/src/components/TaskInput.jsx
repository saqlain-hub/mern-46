import { useState } from "react";
import "./inputStyles.css";

const TaskInput = ({ tasks, setTasks }) => {
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("Incomplete");
  // date object
  const taskDate = function () {
    const date = new Date();
    let dateForTask = `${date.getDate()} / ${
      date.getMonth() + 1
    } / ${date.getFullYear()}`;
    return dateForTask;
  };
  const tDate = taskDate();

  const handleChange = function (e) {
    setTask(e.target.value);
  };

  const handleSelect = function (e) {
    e.stopPropagation();
    const currentStatus = e.target.value;
    setStatus(currentStatus);
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    const taskObj = {
      task: task,
      date: tDate,
      status: status,
    };
    setTasks([...tasks, taskObj]);
    setTask("");
  };

  return (
    <>
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="task">Enter a task</label>
          <input
            onChange={handleChange}
            type="text"
            name="task"
            id="task"
            placeholder="Enter a task"
            required
            value={task}
            autoComplete="off"
          />
        </p>
        <select onInput={handleSelect} name="taskstatus" id="taskstatus">
          <option value="Incomplete">Incomplete</option>
          <option value="Complete">Complete</option>
          <option value="Pending">Pending</option>
        </select>
        <button type="submit">Add</button>
      </form>
    </>
  );
};
export default TaskInput;
