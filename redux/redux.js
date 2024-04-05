import { createStore } from "redux";

// store
const store = createStore(reducer);

// reducer for createStore method
// a callback function that will be called when createStore() is invoked
function reducer(state = { amount: 1 }, action) {
  return state;
}

// global state
console.log(store.getState());
