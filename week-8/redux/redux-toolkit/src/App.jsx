import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store/index";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };
  const addBy = () => {
    dispatch(actions.addBy(20));
  };
  const reset = () => {
    dispatch(actions.reset());
  };
  return (
    <>
      <div>
        <h1>{counter}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={addBy}>add by</button>
        <button onClick={reset}>reset</button>
      </div>
    </>
  );
}

export default App;
