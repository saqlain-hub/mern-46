import { createStore } from "redux";

// store
const store = createStore(reducer);

// reducer for createStore method
// a callback function that will be called when createStore() is invoked
function reducer(state = { amount: 1 }, action) {
  if (action.type === "increment") {
    // immutability -- do not mutate state and return a copy
    return { amount: state.amount + 1 };
  }
  return state;
}

// global state
console.log(store.getState());

store.dispatch({ type: "increment" });

console.log(store.getState());
