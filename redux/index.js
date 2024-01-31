import { createStore } from "redux";

// Store
const store = createStore(reducer);

// Reducer
function reducer(state = { amount: 1 }, action) {
  return state;
}

// gloabl state

console.log(store.getState());
