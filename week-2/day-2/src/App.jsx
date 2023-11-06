import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="wrapper">
      <button
        onClick={function () {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
      <button
        onClick={function () {
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
