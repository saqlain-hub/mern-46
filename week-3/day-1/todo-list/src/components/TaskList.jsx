import "./listStyles.css";

const TaskList = ({ tasks }) => {
  return (
    <section className="task-list">
      <div className="heading">
        <p>Task</p>
        <span></span>
        <p>Status</p>
        <span></span>
        <p>Date</p>
      </div>
      <div className="list">
        {tasks.map((item) => {
          return (
            <ul key={Math.random() * 10000 + 1}>
              <li>{item.task}</li>
              <li className="task-status">{item.status}</li>
              <li className="task-date">{item.date}</li>
            </ul>
          );
        })}
      </div>
    </section>
  );
};

export default TaskList;
